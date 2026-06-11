const fs = require('fs');

try {
  let content = fs.readFileSync('src/components/redesign-wizard.tsx', 'utf8');

  // 1. Update logo box
  content = content.replace(
    '<div className="grid size-9 place-items-center rounded-md bg-foreground text-xs font-black text-background">HR</div>',
    '<div className="grid size-9 place-items-center rounded-md bg-amber-500 text-xs font-black text-stone-950">DN</div>'
  );

  // 2. Update title
  content = content.replace(
    '<strong className="block text-sm leading-tight">한이룸의 상세페이지<br />리디자인 마법사 1.0</strong>',
    '<strong className="block text-sm leading-tight">디노에뜨의 상세페이지<br />제작 마법사 1.0</strong>'
  );

  // 3. Update nav items to have yellow hover effect
  const navOldClass = '"flex h-10 items-center justify-between rounded-md px-3 text-left text-sm text-muted-foreground",\n                view === id && "bg-foreground text-background shadow-sm"';
  const navNewClass = '"flex h-10 items-center justify-between rounded-md px-3 text-left text-sm text-muted-foreground hover:bg-amber-100 hover:text-amber-900 transition-colors",\n                view === id && "bg-amber-500 text-stone-950 shadow-sm hover:bg-amber-500 hover:text-stone-950"';
  content = content.replace(navOldClass, navNewClass);

  // 4. Remove the RAG section from the CardContent
  const ragSectionRegex = /<div className="flex items-center justify-between gap-2">\s*<span className="min-w-0 flex-1 truncate">공통 지식 RAG<\/span>[\s\S]*?<\/div>/;
  content = content.replace(ragSectionRegex, '');

  fs.writeFileSync('src/components/redesign-wizard.tsx', content, 'utf8');
  console.log("Success");
} catch (e) {
  console.error(e);
}
