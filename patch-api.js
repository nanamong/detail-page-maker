const fs = require('fs');

try {
  let content = fs.readFileSync('src/app/api/edit-section/route.ts', 'utf8');

  // 1. Parse referenceImage
  const parseOld = `const image = parseDataUrl(String(body.imageUrl || ""));
    const requestText = String(body.request || "");`;
  const parseNew = `const image = parseDataUrl(String(body.imageUrl || ""));
    const referenceImage = parseDataUrl(String(body.referenceImage || ""));
    const requestText = String(body.request || "");`;
  content = content.replace(parseOld, parseNew);

  // 2. Pass referenceImage to edit functions
  const callOld = `const edited = provider === "google"
      ? await editWithGoogle({ apiKey, prompt, image })
      : await editWithOpenAI({ apiKey, prompt, image });`;
  const callNew = `const edited = provider === "google"
      ? await editWithGoogle({ apiKey, prompt, image, referenceImage })
      : await editWithOpenAI({ apiKey, prompt, image, referenceImage });`;
  content = content.replace(callOld, callNew);

  // 3. Update editWithOpenAI signature (even though we don't use it yet)
  const openaiSigOld = `async function editWithOpenAI({
  apiKey,
  prompt,
  image
}: {
  apiKey: string;
  prompt: string;
  image: { mimeType: string; buffer: Buffer };
}) {`;
  const openaiSigNew = `async function editWithOpenAI({
  apiKey,
  prompt,
  image,
  referenceImage
}: {
  apiKey: string;
  prompt: string;
  image: { mimeType: string; buffer: Buffer };
  referenceImage?: { mimeType: string; buffer: Buffer } | null;
}) {`;
  content = content.replace(openaiSigOld, openaiSigNew);

  // 4. Update editWithGoogle signature
  const googleSigOld = `async function editWithGoogle({
  apiKey,
  prompt,
  image
}: {
  apiKey: string;
  prompt: string;
  image: { mimeType: string; buffer: Buffer };
}) {`;
  const googleSigNew = `async function editWithGoogle({
  apiKey,
  prompt,
  image,
  referenceImage
}: {
  apiKey: string;
  prompt: string;
  image: { mimeType: string; buffer: Buffer };
  referenceImage?: { mimeType: string; buffer: Buffer } | null;
}) {`;
  content = content.replace(googleSigOld, googleSigNew);

  // 5. Update editWithGoogle body
  const googleBodyOld = `contents: [{
        parts: [
          { text: prompt },
          { inlineData: { mimeType: image.mimeType, data: image.buffer.toString("base64") } }
        ]
      }]`;
  const googleBodyNew = `contents: [{
        parts: [
          { text: prompt },
          { inlineData: { mimeType: image.mimeType, data: image.buffer.toString("base64") } },
          ...(referenceImage ? [{ inlineData: { mimeType: referenceImage.mimeType, data: referenceImage.buffer.toString("base64") } }] : [])
        ]
      }]`;
  content = content.replace(googleBodyOld, googleBodyNew);

  fs.writeFileSync('src/app/api/edit-section/route.ts', content, 'utf8');
  console.log("Success");
} catch (e) {
  console.error(e);
}
