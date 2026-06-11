const fs = require('fs');
const transcriptPath = 'C:\\Users\\user\\.gemini\\antigravity-ide\\brain\\0c3d54a3-8b72-403c-a708-37482174152c\\.system_generated\\logs\\transcript.jsonl';
const lines = fs.readFileSync(transcriptPath, 'utf8').split('\n').filter(Boolean);

let linesMap = {};

for (const line of lines) {
  if (line.includes('The following code has been modified') && line.includes('redesign-wizard.tsx')) {
     try {
       const entry = JSON.parse(line);
       let content = entry.content || (entry.tool_responses ? entry.tool_responses[0].output : null) || (entry.tool_response ? entry.tool_response.output : null) || entry.output;
       if (!content) {
          const m = line.match(/"output":"(.*?)"}/);
          if (m) content = JSON.parse('"' + m[1] + '"');
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
                   linesMap[num] = true;
                 }
              }
           }
         }
       }
     } catch (e) {
     }
  }
}

const keys = Object.keys(linesMap).map(Number).sort((a, b) => a - b);
const ranges = [];
let start = keys[0];
let end = keys[0];

for (let i = 1; i < keys.length; i++) {
  if (keys[i] === end + 1) {
    end = keys[i];
  } else {
    ranges.push(start === end ? start.toString() : `${start}-${end}`);
    start = keys[i];
    end = keys[i];
  }
}
if (start !== undefined) {
  ranges.push(start === end ? start.toString() : `${start}-${end}`);
}

console.log('Available ranges:', ranges.join(', '));
