const fs = require('fs');

try {
  let content = fs.readFileSync('src/components/redesign-wizard.tsx', 'utf8');

  content = content.replace('<strong>대시보드 지식파일 사용</strong>', '<strong>지식파일 사용</strong>');
  
  content = content.replace(
    '대시보드에서 내가 등록해둔 지식파일의 내용을 바탕으로 카피라이팅과 상세페이지 내용을 구성합니다.',
    '사전 등록해둔 지식파일 사용 여부를 선택합니다.'
  );

  fs.writeFileSync('src/components/redesign-wizard.tsx', content, 'utf8');
  console.log("Success");
} catch (e) {
  console.error(e);
}
