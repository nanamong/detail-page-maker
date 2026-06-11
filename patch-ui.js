const fs = require('fs');

try {
  let content = fs.readFileSync('src/components/redesign-wizard.tsx', 'utf8');

  // 1. Add reference image to SectionResultCard state
  const stateOld = `const [editRequest, setEditRequest] = React.useState("");
  const [editModel, setEditModel] = React.useState<Model>("openai");`;
  const stateNew = `const [editRequest, setEditRequest] = React.useState("");
  const [editModel, setEditModel] = React.useState<Model>("openai");
  const [referenceFile, setReferenceFile] = React.useState<File | null>(null);`;
  content = content.replace(stateOld, stateNew);

  // 2. Add onDeleteRevision and referenceImage to onEditSection props
  const propsOld = `onEditSection: (sectionId: string, editRequest: string, model: Model) => void;
  editing: boolean;
  disabled: boolean;`;
  const propsNew = `onEditSection: (sectionId: string, editRequest: string, model: Model, referenceImage?: string, baseImageUrl?: string) => void;
  onDeleteRevision: (sectionId: string, revisionId: string) => void;
  editing: boolean;
  disabled: boolean;`;
  content = content.replace(propsOld, propsNew);

  const destructOld = `projectTitle,
  onEditSection,
  editing,
  disabled`;
  const destructNew = `projectTitle,
  onEditSection,
  onDeleteRevision,
  editing,
  disabled`;
  content = content.replace(destructOld, destructNew);

  // 3. Add handleEditSection function in SectionResultCard
  const handleEditOld = `function moveRevision(step: number) {`;
  const handleEditNew = `async function handleEdit() {
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

  function moveRevision(step: number) {`;
  content = content.replace(handleEditOld, handleEditNew);

  // 4. Update the edit button to call handleEdit and add file input
  const editSectionFormOld = `<OptionGroup
            label="수정 모델"
            value={editModel}
            options={[["openai", "OpenAI Image 2.0"], ["google", "Nano Banana 2"]]}
            onChange={(value) => setEditModel(value as Model)}
          />
          <Button
            type="button"
            onClick={() => onEditSection(section.id, editRequest, editModel)}
            disabled={disabled || editing}
          >`;
  const editSectionFormNew = `<OptionGroup
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
          >`;
  content = content.replace(editSectionFormOld, editSectionFormNew);

  // 5. Add delete button to revision tabs
  const tabOld = `</button>
            ))}
          </div>`;
  const tabNew = `</button>
                {revisionPosition > 0 && (
                  <button
                    type="button"
                    onClick={() => onDeleteRevision(section.id, revision.id)}
                    className="absolute -top-1 -right-1 hidden h-4 w-4 place-items-center rounded-full bg-red-500 text-white group-hover:grid"
                    aria-label="삭제"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                  </button>
                )}
              </div>
            ))}
          </div>`;
  content = content.replace(tabOld, tabNew);

  // Need to wrap the tab inside a div group for the absolute position
  const tabWrapOld = `onClick={() => setRevisionIndex(revisionPosition)}
              >
                {revision.label}
              </button>`;
  const tabWrapNew = `onClick={() => setRevisionIndex(revisionPosition)}
              >
                {revision.label}
              </button>`; // Handled above, wait I need to check the exact previous text.
              
  fs.writeFileSync('patch1.js', 'ok');
} catch (e) {}
