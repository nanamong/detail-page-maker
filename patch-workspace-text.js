const fs = require('fs');

try {
  let content = fs.readFileSync('src/components/redesign-wizard.tsx', 'utf8');

  content = content.replace('REDESIGN WORKSPACE', 'PAGE CREATION WORKSPACE');
  content = content.replace('기존 상세페이지 자료 업로드', '레퍼런스 자료 업로드');
  content = content.replace(
    '이미지 또는 PDF를 첨부하면 원본 정보와 전환 저해 요소를 분석합니다.',
    '본인의 상품 디자인, 참고할 레퍼런스 디자인, 참고할 PDF 자료를 첨부하면 완벽한 상세페이지 디자인과 카피라이팅을 자동으로 완성해 드립니다.'
  );

  fs.writeFileSync('src/components/redesign-wizard.tsx', content, 'utf8');
  console.log("Success");
} catch (e) {
  console.error(e);
}
