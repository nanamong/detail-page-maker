const fs = require('fs');

const transcriptPath = 'C:\\Users\\user\\.gemini\\antigravity-ide\\brain\\0c3d54a3-8b72-403c-a708-37482174152c\\.system_generated\\logs\\transcript.jsonl';
const lines = fs.readFileSync(transcriptPath, 'utf8').split('\n').filter(Boolean);

let linesMap = {};

for (const line of lines) {
  if (line.includes('The following code has been modified') && line.includes('redesign-wizard.tsx')) {
     try {
       const entry = JSON.parse(line);
       let content = entry.content;
       if (!content) {
         if (entry.tool_responses) content = entry.tool_responses[0].output;
         else if (entry.tool_response) content = entry.tool_response.output;
         else if (entry.output) content = entry.output;
       }
       if (!content) {
          const m = line.match(/"output":"(.*?)"}/);
          if (m) content = JSON.parse('"' + m[1] + '"'); // decode JSON string
       }
       
       if (content) {
         const match = content.match(/The following code has been modified.*?\n([\s\S]*?)The above content/);
         if (match) {
           const blockLines = match[1].split('\n');
           for (const l of blockLines) {
              const m = l.match(/^(\d+):\s?(.*)$/);
              if (m) {
                 const num = parseInt(m[1], 10);
                 const text = m[2];
                 if (!text.includes('?')) {
                   linesMap[num] = text;
                 }
              }
           }
         }
       }
     } catch (e) {
       console.error(e);
     }
  }
}

let finalLines = [];
let maxLine = Math.max(...Object.keys(linesMap).map(Number));

const currentFileContent = fs.readFileSync('src/components/redesign-wizard.tsx', 'utf8').split('\n');

for (let i = 1; i <= currentFileContent.length; i++) {
  if (linesMap[i]) {
    finalLines.push(linesMap[i]);
  } else {
    finalLines.push(currentFileContent[i-1].replace(/\r/g, ''));
  }
}

let fullText = finalLines.join('\n');
fullText = fullText.replace(/emerald/g, 'amber');

const oldPanelStart = fullText.indexOf('{showVideo ? (');
const oldPanelEnd = fullText.indexOf(') : null}', oldPanelStart) + 10;

const newPanel = `{showVideo ? (
          <div className="mt-6 flex flex-col items-center justify-center rounded-xl border border-border bg-white p-10 text-center shadow-sm">
            <Loader2 className="mb-4 size-10 animate-spin text-amber-500" />
            <h3 className="text-lg font-bold text-foreground">상세페이지를 열심히 제작 중입니다...</h3>
            <p className="mt-2 text-sm text-muted-foreground">잠시만 기다려주시면 판매에 최적화된 멋진 결과물을 보여드릴게요!</p>
          </div>
        ) : null}`;

if (oldPanelStart !== -1) {
  fullText = fullText.substring(0, oldPanelStart) + newPanel + fullText.substring(oldPanelEnd);
}

const uploadTarget = '<label className="mt-4 block text-xs font-bold text-muted-foreground">내 상품 정보 (텍스트/설명)</label>\n              <Textarea \n                value={productInfoText} \n                onChange={(event) => setProductInfoText(event.target.value)} \n                placeholder="상품에 대한 설명, 장점, 강조하고 싶은 텍스트나 목차를 자유롭게 입력하세요. AI가 카피라이팅 시 최우선 반영합니다."\n                className="min-h-32 text-sm"\n              />';
const uploadReplacement = '<div className="mt-4 flex items-center justify-between">\n                <label className="block text-xs font-bold text-muted-foreground">내 상품 정보 (텍스트/설명)</label>\n                <div className="relative">\n                  <input\n                    type="file"\n                    className="absolute inset-0 h-full w-full cursor-pointer opacity-0"\n                    accept=".pdf,.txt,.md"\n                    title="문서 파일 업로드"\n                    onChange={async (event) => {\n                      const selectedFiles = Array.from(event.target.files || []);\n                      if (selectedFiles.length === 0) return;\n                      try {\n                        const text = await extractKnowledgeText(selectedFiles);\n                        setProductInfoText((prev) => prev ? `${prev}\\n\\n${text}` : text);\n                        event.target.value = "";\n                      } catch {\n                        // ignore error\n                      }\n                    }}\n                  />\n                  <Button variant="outline" size="sm" type="button" className="pointer-events-none h-7 px-2 text-xs">\n                    <Upload className="mr-1.5 size-3" />\n                    문서 업로드\n                  </Button>\n                </div>\n              </div>\n              <Textarea \n                value={productInfoText} \n                onChange={(event) => setProductInfoText(event.target.value)} \n                placeholder="상품에 대한 설명, 장점, 강조하고 싶은 텍스트나 목차를 자유롭게 입력하세요. 문서 업로드 시 자동으로 텍스트가 추출되어 입력됩니다. AI가 카피라이팅 시 최우선 반영합니다."\n                className="min-h-32 text-sm mt-2"\n              />';

fullText = fullText.replace(uploadTarget, uploadReplacement);

fs.writeFileSync('src/components/redesign-wizard.tsx', fullText, 'utf8');

console.log("Recovered lines up to " + maxLine);
