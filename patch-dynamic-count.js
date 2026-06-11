const fs = require('fs');

try {
  // 1. Patch route.ts
  let routeContent = fs.readFileSync('src/app/api/generate/route.ts', 'utf8');
  const oldJsonPrompt = '"JSON 키: product_inferred, diagnostic_summary, strategy, page_blueprint, compliance_notes"';
  const newJsonPrompt = '`optimal_sections_count: 제공된 상품 정보와 레퍼런스를 분석하여, 상세페이지를 완벽하게 구성하기 위해 필요한 최적의 섹션 개수를 숫자로 반환하라. 사용자가 선택한 범위에 따라 반드시 ${payload.options.count === 4 ? "3에서 5 사이" : payload.options.count === 7 ? "6에서 8 사이" : payload.options.count === 10 ? "9에서 11 사이" : "1"}의 정수여야 한다.`,\n    "JSON 키: product_inferred, diagnostic_summary, strategy, page_blueprint, optimal_sections_count, compliance_notes"';
  
  if (routeContent.includes(oldJsonPrompt)) {
    routeContent = routeContent.replace(oldJsonPrompt, newJsonPrompt);
    fs.writeFileSync('src/app/api/generate/route.ts', routeContent, 'utf8');
    console.log("route.ts patched successfully.");
  } else {
    console.log("oldJsonPrompt not found in route.ts");
  }

  // 2. Patch redesign-wizard.tsx
  let wizardContent = fs.readFileSync('src/components/redesign-wizard.tsx', 'utf8');
  
  const oldLoop = `      let workingProject: Project | null = null;
      for (let sectionNumber = startSection; sectionNumber < startSection + outputCount; sectionNumber += 1) {
        const nextProject = await generate(1, outputRolloutRequest, sectionNumber, workingProject, true, outputCount, sectionNumber - startSection + 1);
        if (!nextProject) return workingProject;
        workingProject = nextProject;
      }`;
      
  const newLoop = `      let workingProject: Project | null = null;
      let actualOutputCount = outputCount;
      for (let sectionNumber = startSection; sectionNumber < startSection + actualOutputCount; sectionNumber += 1) {
        const nextProject = await generate(1, outputRolloutRequest, sectionNumber, workingProject, true, actualOutputCount, sectionNumber - startSection + 1);
        if (!nextProject) return workingProject;
        workingProject = nextProject;
        
        if (sectionNumber === startSection && (workingProject.analysis as any)?.optimal_sections_count) {
          const optimal = parseInt((workingProject.analysis as any).optimal_sections_count, 10);
          let min = outputCount, max = outputCount;
          if (outputCount === 4) { min = 3; max = 5; }
          else if (outputCount === 7) { min = 6; max = 8; }
          else if (outputCount === 10) { min = 9; max = 11; }
          
          if (!isNaN(optimal) && optimal >= min && optimal <= max) {
            actualOutputCount = optimal;
          }
        }
      }`;

  if (wizardContent.includes(oldLoop)) {
    wizardContent = wizardContent.replace(oldLoop, newLoop);
    fs.writeFileSync('src/components/redesign-wizard.tsx', wizardContent, 'utf8');
    console.log("redesign-wizard.tsx patched successfully.");
  } else {
    console.log("oldLoop not found in redesign-wizard.tsx");
  }
} catch (e) {
  console.error(e);
}
