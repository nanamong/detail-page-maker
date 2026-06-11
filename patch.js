const fs = require('fs');

try {
  let fullText = fs.readFileSync('src/components/redesign-wizard.tsx', 'utf8');

  // 1. replace emerald with amber
  fullText = fullText.replace(/emerald/g, 'amber');

  // 2. add productInfoText to Workspace props
  if (!fullText.includes('productInfoText: string;')) {
    fullText = fullText.replace(/request: string;\n\s*setRequest:/, 'productInfoText: string;\n  setProductInfoText: (value: string) => void;\n  request: string;\n  setRequest:');
  }

  // 3. update Workspace call in RedesignWizard
  if (!fullText.includes('productInfoText={productInfoText}')) {
    // Add state variable
    fullText = fullText.replace(/const \[request, setRequest\] = React\.useState/, 'const [productInfoText, setProductInfoText] = React.useState("");\n  const [request, setRequest] = React.useState');
    
    // Add to Workspace component call
    fullText = fullText.replace(/files=\{files\}\n\s*setFiles=\{setFiles\}/, 'files={files}\n            setFiles={setFiles}\n            productInfoText={productInfoText}\n            setProductInfoText={setProductInfoText}');
  }

  // 4. modify Workspace component to add the textarea and upload button
  const uploadTarget = '<label className="mt-4 block text-xs font-bold text-muted-foreground">내 상품 정보 (텍스트/설명)</label>\n              <Textarea \n                value={productInfoText} \n                onChange={(event) => setProductInfoText(event.target.value)} \n                placeholder="상품에 대한 설명, 장점, 강조하고 싶은 텍스트나 목차를 자유롭게 입력하세요. AI가 카피라이팅 시 최우선 반영합니다."\n                className="min-h-32 text-sm"\n              />';
  const uploadReplacement = '<div className="mt-4 flex items-center justify-between">\n                <label className="block text-xs font-bold text-muted-foreground">내 상품 정보 (텍스트/설명)</label>\n                <div className="relative">\n                  <input\n                    type="file"\n                    className="absolute inset-0 h-full w-full cursor-pointer opacity-0"\n                    accept=".pdf,.txt,.md"\n                    title="문서 파일 업로드"\n                    onChange={async (event) => {\n                      const selectedFiles = Array.from(event.target.files || []);\n                      if (selectedFiles.length === 0) return;\n                      try {\n                        const text = await extractKnowledgeText(selectedFiles);\n                        setProductInfoText((prev) => prev ? `${prev}\\n\\n${text}` : text);\n                        event.target.value = "";\n                      } catch {\n                        // ignore error\n                      }\n                    }}\n                  />\n                  <Button variant="outline" size="sm" type="button" className="pointer-events-none h-7 px-2 text-xs">\n                    <Upload className="mr-1.5 size-3" />\n                    문서 업로드\n                  </Button>\n                </div>\n              </div>\n              <Textarea \n                value={productInfoText} \n                onChange={(event) => setProductInfoText(event.target.value)} \n                placeholder="상품에 대한 설명, 장점, 강조하고 싶은 텍스트나 목차를 자유롭게 입력하세요. 문서 업로드 시 자동으로 텍스트가 추출되어 입력됩니다. AI가 카피라이팅 시 최우선 반영합니다."\n                className="min-h-32 text-sm mt-2"\n              />';

  // We need to inject the original Textarea if it doesn't exist, wait, the user's restored file doesn't have productInfoText AT ALL.
  // The user's file just has:
  // <label className="block text-xs font-bold text-muted-foreground">레퍼런스 이미지 & PDF</label>
  // ... files UI ...
  // <label className="mt-4 block text-xs font-bold text-muted-foreground">상세페이지 작업 요청사항</label>

  const insertBeforeStr = '<label className="mt-4 block text-xs font-bold text-muted-foreground">상세페이지 작업 요청사항</label>';
  if (!fullText.includes('내 상품 정보 (텍스트/설명)')) {
    fullText = fullText.replace(insertBeforeStr, uploadReplacement + '\n              ' + insertBeforeStr);
  }

  // 5. Change the Youtube Video panel
  const oldPanelRegex = /\{showVideo \? \([\s\S]*?\) : null\}/;
  const newPanel = `{showVideo ? (
          <div className="mt-6 flex flex-col items-center justify-center rounded-xl border border-border bg-white p-10 text-center shadow-sm">
            <Loader2 className="mb-4 size-10 animate-spin text-amber-500" />
            <h3 className="text-lg font-bold text-foreground">상세페이지를 열심히 제작 중입니다...</h3>
            <p className="mt-2 text-sm text-muted-foreground">잠시만 기다려주시면 판매에 최적화된 멋진 결과물을 보여드릴게요!</p>
          </div>
        ) : null}`;

  fullText = fullText.replace(oldPanelRegex, newPanel);

  fs.writeFileSync('src/components/redesign-wizard.tsx', fullText, 'utf8');
  console.log("File patched successfully.");
} catch (e) {
  console.error("Error:", e);
}
