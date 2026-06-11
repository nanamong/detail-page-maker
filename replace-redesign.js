const fs = require('fs');
const path = require('path');

function replaceInFile(filePath, replacements) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  
  for (const [search, replace] of replacements) {
    // using split join for global replacement
    content = content.split(search).join(replace);
  }
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

const basePath = 'src';

// 1. src/components/redesign-wizard.tsx
replaceInFile(path.join(basePath, 'components/redesign-wizard.tsx'), [
  ['"프리미엄 영양제 상세페이지 리디자인"', '"프리미엄 영양제 상세페이지 제작"'],
  ['"스마트스토어 상세페이지 리디자인"', '"스마트스토어 상세페이지 제작"'],
  ['"전환율 중심으로 리디자인"', '"전환율 중심으로 제작"'],
  ['구매전환 중심으로 리디자인', '구매전환 중심으로 상세페이지 제작'],
  ['상세페이지 리디자인`;', '상세페이지 제작`;'],
  ['${productName} 리디자인', '${productName} 상세페이지 제작'],
  ['${brand} ${productName} 리디자인', '${brand} ${productName} 상세페이지 제작'],
  ['최근 리디자인 프로젝트', '최근 상세페이지 제작 프로젝트'],
  ['아직 작업한 리디자인 작업이 없습니다', '아직 작업한 상세페이지 제작 내역이 없습니다'],
  ['리디자인 결과 {project.sections.length}장', '상세페이지 제작 결과 {project.sections.length}장']
]);

// 2. src/app/layout.tsx
replaceInFile(path.join(basePath, 'app/layout.tsx'), [
  ['한이룸의 상세페이지 리디자인 마법사 1.0', '디노에프의 상세페이지 제작 마법사 1.0'],
  ['리디자인합니다', '제작합니다']
]);

// 3. src/app/api/generate/route.ts
replaceInFile(path.join(basePath, 'app/api/generate/route.ts'), [
  ['상세페이지 리디자인 CRO 지식 검색', '상세페이지 제작 CRO 지식 검색'],
  ['전환율 중심 리디자인', '전환율 중심 제작'],
  ['전환율 중심으로 리디자인', '전환율 중심으로 제작'],
  ['상세페이지 리디자인 이미지 생성 엔진', '상세페이지 제작 이미지 생성 엔진'],
  ['${productName} 리디자인', '${productName} 상세페이지 제작'],
  ['${brand} ${productName} 리디자인', '${brand} ${productName} 상세페이지 제작'],
  ['상세페이지 리디자인`;', '상세페이지 제작`;']
]);

// 4. src/app/api/edit-section/route.ts
replaceInFile(path.join(basePath, 'app/api/edit-section/route.ts'), [
  ['"상세페이지 리디자인"', '"상세페이지 제작"']
]);

console.log("All replacements completed.");
