const fs = require('fs');

const transcriptPath = 'C:\\Users\\user\\.gemini\\antigravity-ide\\brain\\0c3d54a3-8b72-403c-a708-37482174152c\\.system_generated\\logs\\transcript.jsonl';
const lines = fs.readFileSync(transcriptPath, 'utf8').split('\n').filter(Boolean);

let viewFileContents = [];
for (const line of lines) {
  try {
    const entry = JSON.parse(line);
    if (entry.type === 'TOOL_CALL_RESPONSE' && entry.tool_call?.name === 'default_api:view_file') {
      const output = entry.tool_response?.output || '';
      if (output.includes('redesign-wizard.tsx')) {
        viewFileContents.push(output);
      }
    }
  } catch (e) {}
}

fs.writeFileSync('view_file_dump.json', JSON.stringify(viewFileContents, null, 2));
console.log("Dumped view files: " + viewFileContents.length);
