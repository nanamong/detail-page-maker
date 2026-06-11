const fs = require('fs');

try {
  let content = fs.readFileSync('src/components/redesign-wizard.tsx', 'utf8');

  // Replace Title
  content = content.replace('<strong>공통 사전 지식 사용</strong>', '<strong>대시보드 지식파일 사용</strong>');

  // Replace Description
  content = content.replace(
    '접근 키가 맞으면 운영자가 등록한 지식파일을 검색해 생성 프롬프트에 반영합니다.',
    '대시보드에서 내가 등록해둔 지식파일의 내용을 바탕으로 카피라이팅과 상세페이지 내용을 구성합니다.'
  );

  // Remove the knowledgeAccessKey blocks
  // Block 1:
  const block1Regex = /\{\s*useSharedKnowledge\s*&&\s*serverConfig\.knowledgeAccessRequired\s*\?\s*\(\s*<div[^>]*>[\s\S]*?<\/div>\s*\)\s*:\s*null\s*\}/;
  content = content.replace(block1Regex, '');

  // Block 2:
  const block2Regex = /\{\s*useSharedKnowledge\s*&&\s*!serverConfig\.knowledgeAccessRequired\s*\?\s*\(\s*<p[^>]*>[\s\S]*?<\/p>\s*\)\s*:\s*null\s*\}/;
  content = content.replace(block2Regex, '');

  fs.writeFileSync('src/components/redesign-wizard.tsx', content, 'utf8');
  console.log("Success");
} catch (e) {
  console.error(e);
}
