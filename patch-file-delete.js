const fs = require('fs');

try {
  let content = fs.readFileSync('src/components/redesign-wizard.tsx', 'utf8');

  const oldCode = `{files.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {files.map((file) => (
                    <Badge key={file.name} variant="default">
                      {file.type === "application/pdf" ? <FileText className="mr-1 size-3" /> : <FileImage className="mr-1 size-3" />}
                      {file.name}
                    </Badge>
                  ))}
                </div>
              )}`;

  const newCode = `{files.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {files.map((file, index) => (
                    <Badge key={\`\${file.name}-\${index}\`} variant="default" className="flex items-center gap-1 pr-1">
                      {file.type === "application/pdf" ? <FileText className="size-3" /> : <FileImage className="size-3" />}
                      <span className="max-w-[200px] truncate">{file.name}</span>
                      <button
                        type="button"
                        onClick={() => setFiles((prev) => prev.filter((_, i) => i !== index))}
                        className="ml-1 rounded-full p-0.5 hover:bg-black/20"
                      >
                        <Trash2 className="size-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              )}`;

  if (content.includes(oldCode)) {
    content = content.replace(oldCode, newCode);
    fs.writeFileSync('src/components/redesign-wizard.tsx', content, 'utf8');
    console.log("Success");
  } else {
    console.log("Code not found. Please check manually.");
  }

} catch (e) {
  console.error(e);
}
