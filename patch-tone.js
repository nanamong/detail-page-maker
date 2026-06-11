const fs = require('fs');
const filePath = 'src/app/api/generate/route.ts';
let content = fs.readFileSync(filePath, 'utf8');

const target = `    const promptText = [
      "너는 커머스 상세페이지 제작 이미지 생성 엔진이다.",
      \`이미지 생성 모델: \${modelInfo.label} (\${modelInfo.id})\`,
      "세로형 9:16 상세페이지 섹션 이미지 1장을 생성한다.",
      \`섹션: \${template.name}\`,
      \`목적: \${template.purpose}\`,
      \`권장 레이아웃: \${template.layout}\`,
      \`판매 채널: \${payload.options.channel}\`,
      \`추가 요청사항: \${payload.request || "전환율 중심으로 제작"}\`,
      payload.rolloutRequest ? \`히어로 1장 검토 후 사용자가 요청한 반영사항: \${payload.rolloutRequest}\` : "히어로 검토 후 반영사항: 없음",
      payload.productInfoText ? \`내 상품 정보 (실제 내용 생성 시 찰떡같이 결합할 핵심 정보): \${payload.productInfoText}\` : "내 상품 정보: 없음",
      payload.knowledgeText ? \`참고 사전 지식 (보조 참고 자료): \${payload.knowledgeText.slice(0, 18000)}\` : "참고 사전 지식: 없음",
      \`분석 요약: \${JSON.stringify(analysis).slice(0, 2400)}\`,
      "디자인 벤치마킹 및 내용 생성 규칙: 업로드된 레퍼런스 이미지에서는 [디자인 톤앤매너 및 레이아웃 구조]만 벤치마킹하라. 실제 알맹이 내용, 문구, 카피라이팅은 절대 원본 레퍼런스에서 베끼지 말고 [사용자가 입력한 내 상품 정보]를 바탕으로 찰떡같이 결합하라.",
      \`배경 및 톤앤매너 규칙: \${bgColorInstruction} 또한 히어로 섹션의 핵심 포인트 컬러가 전체 상세페이지(나머지 섹션들)에 통일성 있게 적용되도록 하라.\`,
      "브랜드명 금지 규칙: '한이룸', '한이룸의', '한이룸 스킨', 'HANEERUM', 'Haneerum', 'HR'은 서비스명 또는 도구명일 뿐이며 제품 브랜드가 아니다. 이 단어들을 이미지 안의 제품명, 브랜드명, 로고, 라벨, 헤드라인, 후기, FAQ, CTA, 패키지 텍스트로 절대 사용하지 않는다.",
      "브랜드 사용 규칙: 제품 브랜드명과 제품명은 업로드된 원본 상세페이지 또는 제품 패키지에서 확인되는 이름만 사용한다. 원본에서 확인되지 않는 새 브랜드명, 새 제품명, 새 로고를 만들지 않는다.",
      "전체 연결 규칙: 여러 장을 이어 붙였을 때 하나의 상세페이지처럼 보여야 한다. 동일한 브랜드 색, 폰트 감각, 제품 사진 톤은 유지하되 각 섹션의 레이아웃은 반드시 다르게 구성한다. 모든 섹션이 큰 상단 헤드라인+중앙 제품컷으로 반복되면 안 된다.",`;

const replacement = `    const analysisObj = typeof analysis === "object" && analysis !== null ? analysis as Record<string, any> : {};
    const mood = analysisObj.mood || "분석 없음";
    const mainColor = analysisObj.color_palette?.main || "분석 없음";
    const backgroundMood = analysisObj.color_palette?.background || "분석 없음";
    
    const toneSyncInstruction = startSection > 1 
      ? \`🚨 [강력한 톤앤매너 유지 규칙] 이 이미지는 기존 섹션들에 이어지는 추가 섹션입니다. 이전 섹션들과의 완벽한 일체감을 위해 업로드된 기존 결과물 이미지와 기존 분석 데이터(배경 무드: \${backgroundMood}, 포인트 컬러: \${mainColor}, 전체 분위기: \${mood})를 참고하여 무조건 똑같은 톤앤매너를 유지하세요. 기존이 다크모드/블랙 톤이면 무조건 다크/블랙 배경을 깔고, 라이트 톤이면 라이트를 유지해야 합니다.\`
      : "전체 연결 규칙: 여러 장을 이어 붙였을 때 하나의 상세페이지처럼 보여야 한다. 동일한 브랜드 색, 폰트 감각, 제품 사진 톤은 유지하되 각 섹션의 레이아웃은 반드시 다르게 구성한다. 모든 섹션이 큰 상단 헤드라인+중앙 제품컷으로 반복되면 안 된다.";

    const promptText = [
      "너는 커머스 상세페이지 제작 이미지 생성 엔진이다.",
      \`이미지 생성 모델: \${modelInfo.label} (\${modelInfo.id})\`,
      "세로형 9:16 상세페이지 섹션 이미지 1장을 생성한다.",
      \`섹션: \${template.name}\`,
      \`목적: \${template.purpose}\`,
      \`권장 레이아웃: \${template.layout}\`,
      \`판매 채널: \${payload.options.channel}\`,
      \`추가 요청사항: \${payload.request || "전환율 중심으로 제작"}\`,
      payload.rolloutRequest ? \`히어로 1장 검토 후 사용자가 요청한 반영사항: \${payload.rolloutRequest}\` : "히어로 검토 후 반영사항: 없음",
      payload.productInfoText ? \`내 상품 정보 (실제 내용 생성 시 찰떡같이 결합할 핵심 정보): \${payload.productInfoText}\` : "내 상품 정보: 없음",
      payload.knowledgeText ? \`참고 사전 지식 (보조 참고 자료): \${payload.knowledgeText.slice(0, 18000)}\` : "참고 사전 지식: 없음",
      \`분석 요약: \${JSON.stringify(analysis).slice(0, 2400)}\`,
      "디자인 벤치마킹 및 내용 생성 규칙: 업로드된 레퍼런스 이미지에서는 [디자인 톤앤매너 및 레이아웃 구조]만 벤치마킹하라. 실제 알맹이 내용, 문구, 카피라이팅은 절대 원본 레퍼런스에서 베끼지 말고 [사용자가 입력한 내 상품 정보]를 바탕으로 찰떡같이 결합하라.",
      \`배경 및 톤앤매너 규칙: \${bgColorInstruction} 또한 히어로 섹션의 핵심 포인트 컬러가 전체 상세페이지(나머지 섹션들)에 통일성 있게 적용되도록 하라.\`,
      "브랜드명 금지 규칙: '한이룸', '한이룸의', '한이룸 스킨', 'HANEERUM', 'Haneerum', 'HR'은 서비스명 또는 도구명일 뿐이며 제품 브랜드가 아니다. 이 단어들을 이미지 안의 제품명, 브랜드명, 로고, 라벨, 헤드라인, 후기, FAQ, CTA, 패키지 텍스트로 절대 사용하지 않는다.",
      "브랜드 사용 규칙: 제품 브랜드명과 제품명은 업로드된 원본 상세페이지 또는 제품 패키지에서 확인되는 이름만 사용한다. 원본에서 확인되지 않는 새 브랜드명, 새 제품명, 새 로고를 만들지 않는다.",
      toneSyncInstruction,`;

if (content.indexOf(target) !== -1) {
  content = content.replace(target, replacement);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Successfully patched route.ts');
} else {
  // Try CRLF replacement
  const crlfTarget = target.replace(/\\n/g, '\\r\\n');
  if (content.indexOf(crlfTarget) !== -1) {
    content = content.replace(crlfTarget, replacement.replace(/\\n/g, '\\r\\n'));
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Successfully patched route.ts (CRLF)');
  } else {
    console.log('Target string not found!');
  }
}
