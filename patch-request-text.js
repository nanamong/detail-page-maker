const fs = require('fs');

try {
  let content = fs.readFileSync('src/components/redesign-wizard.tsx', 'utf8');

  content = content.replace(
    '첫 화면에서 제품의 차별점이 바로 보이게 하고, 구매 불안을 줄이는 근거 섹션을 강화해주세요. 과장 표현은 피하고 스마트스토어에 맞춰 스캔이 쉬운 구성으로 정리해주세요.',
    '첫 화면에서 제품의 차별점이 바로 보이게 해주세요. 눈길을 끄는 카피라이팅과 과감하고 시원시원한 히어로 섹션을 제작하세요. 과장 표현은 피하고 와디즈에 맞춰 스캔이 쉬운 구성으로 정리해주세요.'
  );

  fs.writeFileSync('src/components/redesign-wizard.tsx', content, 'utf8');
  console.log("Success");
} catch (e) {
  console.error(e);
}
