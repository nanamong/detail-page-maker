const fs = require('fs');

try {
  let content = fs.readFileSync('src/components/redesign-wizard.tsx', 'utf8');

  // Fix onDrop
  const oldDrop = `                onDrop={(event) => {
                  event.preventDefault();
                  setFiles(Array.from(event.dataTransfer.files).filter((file) => file.type.startsWith("image/") || file.type === "application/pdf"));
                }}`;
  const newDrop = `                onDrop={(event) => {
                  event.preventDefault();
                  setFiles((prev) => [...prev, ...Array.from(event.dataTransfer.files).filter((file) => file.type.startsWith("image/") || file.type === "application/pdf")]);
                }}`;
  
  if (content.includes(oldDrop)) {
    content = content.replace(oldDrop, newDrop);
    console.log("onDrop fixed.");
  } else {
    console.log("onDrop not found.");
  }

  // Fix onChange
  const oldChange = `                onChange={(event) => setFiles(Array.from(event.target.files || []))}`;
  const newChange = `                onChange={(event) => setFiles((prev) => [...prev, ...Array.from(event.target.files || [])])}`;
  
  if (content.includes(oldChange)) {
    content = content.replace(oldChange, newChange);
    console.log("onChange fixed.");
  } else {
    console.log("onChange not found.");
  }

  fs.writeFileSync('src/components/redesign-wizard.tsx', content, 'utf8');
} catch (e) {
  console.error(e);
}
