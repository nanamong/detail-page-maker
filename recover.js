const fs = require('fs');
const path = require('path');

const transcriptPath = 'C:\\Users\\user\\.gemini\\antigravity-ide\\brain\\0c3d54a3-8b72-403c-a708-37482174152c\\.system_generated\\logs\\transcript.jsonl';
const lines = fs.readFileSync(transcriptPath, 'utf8').split('\n').filter(Boolean);

let viewFileContents = [];

for (const line of lines) {
  try {
    const entry = JSON.parse(line);
    if (entry.type === 'TOOL_CALL_RESPONSE' && entry.tool_call?.name === 'default_api:view_file') {
      const output = entry.tool_response?.output || '';
      if (output.includes('redesign-wizard.tsx')) {
        const match = output.match(/The following code has been modified.*?\n([\s\S]*?)The above content/);
        if (match) {
          viewFileContents.push(match[1]);
        }
      }
    }
  } catch (e) {}
}

let cleanLines = [];
let maxLine = 0;
for (const block of viewFileContents) {
  const codeLines = block.split('\n');
  for (const codeLine of codeLines) {
    const match = codeLine.match(/^(\d+):\s?(.*)$/);
    if (match) {
      const lineNum = parseInt(match[1], 10);
      const text = match[2];
      if (lineNum > maxLine) {
        cleanLines[lineNum - 1] = text;
        maxLine = lineNum;
      } else if (!text.includes('?')) {
        cleanLines[lineNum - 1] = text;
      }
    }
  }
}

const currentFileContent = fs.readFileSync('src/components/redesign-wizard.tsx', 'utf8').split('\n');
for (let i = 2200; i < currentFileContent.length; i++) {
   if (!cleanLines[i]) {
       cleanLines[i] = currentFileContent[i].replace(/\r/g, '');
   }
}

let fullText = cleanLines.join('\n');
fullText = fullText.replace(/emerald/g, 'amber');
fs.writeFileSync('src/components/redesign-wizard.tsx', fullText, 'utf8');
console.log("Recovery complete.");
