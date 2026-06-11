const fs = require('fs');

try {
  let content = fs.readFileSync('src/components/redesign-wizard.tsx', 'utf8');

  // 1. Update SectionResultCard props
  content = content.replace(
    'onEditSection: (sectionId: string, editRequest: string, model: Model) => void;',
    'onEditSection: (sectionId: string, editRequest: string, model: Model, referenceImage?: string, baseImageUrl?: string) => void;\n  onDeleteRevision: (sectionId: string, revisionId: string) => void;'
  );

  content = content.replace(
    '  onEditSection,\n  editing,\n  disabled\n}:',
    '  onEditSection,\n  onDeleteRevision,\n  editing,\n  disabled\n}:'
  );

  // 2. Add referenceFile state
  content = content.replace(
    'const [editModel, setEditModel] = React.useState<Model>("openai");',
    'const [editModel, setEditModel] = React.useState<Model>("openai");\n  const [referenceFile, setReferenceFile] = React.useState<File | null>(null);'
  );

  // 3. Add handleEdit function
  content = content.replace(
    'function moveRevision(step: number) {',
    `async function handleEdit() {
    let referenceDataUrl: string | undefined;
    if (referenceFile) {
      const reader = new FileReader();
      referenceDataUrl = await new Promise<string>((resolve) => {
        reader.onload = () => resolve(reader.result as string);
        reader.readAsDataURL(referenceFile);
      });
    }
    onEditSection(section.id, editRequest, editModel, referenceDataUrl, activeRevision?.imageUrl);
  }

  function moveRevision(step: number) {`
  );

  // 4. Update the edit form buttons and OptionGroup
  content = content.replace(
    `          <OptionGroup
            label="수정 모델"
            value={editModel}
            options={[["openai", "OpenAI Image 2.0"], ["google", "Nano Banana 2"]]}
            onChange={(value) => setEditModel(value as Model)}
          />
          <Button
            type="button"
            onClick={() => onEditSection(section.id, editRequest, editModel)}
            disabled={disabled || editing}
          >`,
    `          <OptionGroup
            label="수정 모델"
            value={editModel}
            options={[["openai", "OpenAI Image 2.0"], ["google", "Nano Banana 2"]]}
            onChange={(value) => setEditModel(value as Model)}
          />
          <div>
            <label className="mb-1 block text-xs font-bold text-muted-foreground">레퍼런스 이미지 첨부 (선택)</label>
            <input 
              type="file" 
              accept="image/*" 
              className="block w-full text-xs text-muted-foreground file:mr-2 file:rounded-md file:border-0 file:bg-foreground file:px-2 file:py-1 file:text-xs file:font-bold file:text-background hover:file:bg-foreground/90" 
              onChange={(e) => setReferenceFile(e.target.files?.[0] || null)}
            />
          </div>
          <Button
            type="button"
            onClick={handleEdit}
            disabled={disabled || editing}
          >`
  );

  // 5. Wrap revision tab in a group div and add delete button
  const oldMap = `{revisions.map((revision, revisionPosition) => (
              <button
                key={revision.id}
                type="button"
                className={cn(
                  "h-7 shrink-0 rounded-full border border-border bg-white px-2 text-[11px] font-bold text-muted-foreground",
                  revisionPosition === revisionIndex && "border-amber-300 bg-amber-50 text-amber-800"
                )}
                onClick={() => setRevisionIndex(revisionPosition)}
              >
                {revision.label}
              </button>
            ))}`;
            
  const newMap = `{revisions.map((revision, revisionPosition) => (
              <div key={revision.id} className="relative group">
                <button
                  type="button"
                  className={cn(
                    "h-7 shrink-0 rounded-full border border-border bg-white px-2 text-[11px] font-bold text-muted-foreground",
                    revisionPosition === revisionIndex && "border-amber-300 bg-amber-50 text-amber-800"
                  )}
                  onClick={() => setRevisionIndex(revisionPosition)}
                >
                  {revision.label}
                </button>
                {revisionPosition > 0 && (
                  <button
                    type="button"
                    onClick={() => onDeleteRevision(section.id, revision.id)}
                    className="absolute -top-1 -right-1 hidden h-4 w-4 place-items-center rounded-full bg-red-500 text-white shadow-sm group-hover:grid"
                    aria-label="삭제"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                  </button>
                )}
              </div>
            ))}`;
  content = content.replace(oldMap, newMap);

  // 6. Update Results component props
  content = content.replace(
    '  onEditSection: (sectionId: string, editRequest: string, model: Model) => void;',
    '  onEditSection: (sectionId: string, editRequest: string, model: Model, referenceImage?: string, baseImageUrl?: string) => void;\n  onDeleteRevision: (sectionId: string, revisionId: string) => void;'
  );
  
  content = content.replace(
    '  onEditSection,\n  onGenerateRest,\n  generating,\n  editingSectionId\n}:',
    '  onEditSection,\n  onDeleteRevision,\n  onGenerateRest,\n  generating,\n  editingSectionId\n}:'
  );

  // Pass onDeleteRevision to SectionResultCard inside Results
  content = content.replace(
    'onEditSection={onEditSection}',
    'onEditSection={onEditSection}\n                onDeleteRevision={onDeleteRevision}'
  );

  // 7. Update editSection in RedesignWizard to receive referenceImage and baseImageUrl
  content = content.replace(
    'async function editSection(sectionId: string, editRequest: string, model: Model) {',
    'async function editSection(sectionId: string, editRequest: string, model: Model, referenceImage?: string, baseImageUrl?: string) {'
  );

  content = content.replace(
    'const requestImageUrl = await compressImageForRequest(section.imageUrl);',
    'const requestImageUrl = await compressImageForRequest(baseImageUrl || section.imageUrl);'
  );

  // Add referenceImage to fetch body in editSection
  content = content.replace(
    '          request: trimmedEditRequest,\n          section,',
    '          request: trimmedEditRequest,\n          referenceImage,\n          section,'
  );

  // 8. Add deleteSectionRevision in RedesignWizard
  const deleteSectionRevisionFunc = `
  function deleteSectionRevision(sectionId: string, revisionId: string) {
    const project = currentProject;
    if (!project) return;
    
    const updatedSections = project.sections.map((sec) => {
      if (sec.id !== sectionId) return sec;
      const history = ensureSectionRevisions(sec);
      const filteredHistory = history.filter(r => r.id !== revisionId);
      
      // If we deleted the active image, fallback to the last available revision
      let nextImageUrl = sec.imageUrl;
      if (sec.imageUrl && !filteredHistory.find(r => r.imageUrl === sec.imageUrl)) {
         nextImageUrl = filteredHistory[filteredHistory.length - 1]?.imageUrl || sec.imageUrl;
      }

      return {
        ...sec,
        imageUrl: nextImageUrl,
        revisions: filteredHistory
      };
    });

    const updatedProject = { ...project, sections: updatedSections, status: project.savedAt ? "수정됨" : project.status };
    setActiveProject(updatedProject as Project);
    setProjects((current) => [updatedProject as Project, ...current.filter((c) => c.id !== updatedProject.id)].slice(0, 20));
  }
`;

  content = content.replace(
    '  async function editSection(',
    deleteSectionRevisionFunc + '\n  async function editSection('
  );

  // 9. Pass onDeleteRevision to Results from RedesignWizard
  content = content.replace(
    'onEditSection={editSection}',
    'onEditSection={editSection}\n                onDeleteRevision={deleteSectionRevision}'
  );

  fs.writeFileSync('src/components/redesign-wizard.tsx', content, 'utf8');
  console.log("Success");
} catch (e) {
  console.error(e);
}
