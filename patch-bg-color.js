const fs = require('fs');

try {
  let content = fs.readFileSync('src/components/redesign-wizard.tsx', 'utf8');

  // 1. Add state to RedesignWizard
  const wizardStateOld = `const [count, setCount] = React.useState(4);
  const [ratio, setRatio] = React.useState("9:16");`;
  const wizardStateNew = `const [count, setCount] = React.useState(4);
  const [ratio, setRatio] = React.useState("9:16");
  const [backgroundColor, setBackgroundColor] = React.useState("auto");`;
  content = content.replace(wizardStateOld, wizardStateNew);

  // 2. Add to Workspace props definition
  const workspacePropsOld = `count: number;
  setCount: (count: number) => void;
  ratio: string;
  setRatio: (ratio: string) => void;`;
  const workspacePropsNew = `count: number;
  setCount: (count: number) => void;
  ratio: string;
  setRatio: (ratio: string) => void;
  backgroundColor: string;
  setBackgroundColor: (color: string) => void;`;
  content = content.replace(workspacePropsOld, workspacePropsNew);

  // 3. Add to Workspace destructuring
  const workspaceDestructOld = `count,
    setCount,
    ratio,
    setRatio,`;
  const workspaceDestructNew = `count,
    setCount,
    ratio,
    setRatio,
    backgroundColor,
    setBackgroundColor,`;
  content = content.replace(workspaceDestructOld, workspaceDestructNew);

  // 4. Pass to Workspace component
  const workspacePassOld = `ratio={ratio}
            setRatio={setRatio}`;
  const workspacePassNew = `ratio={ratio}
            setRatio={setRatio}
            backgroundColor={backgroundColor}
            setBackgroundColor={setBackgroundColor}`;
  content = content.replace(workspacePassOld, workspacePassNew);

  // 5. Append to form
  const formAppendOld = `form.append("ratio", ratio);`;
  const formAppendNew = `form.append("ratio", ratio);\n      form.append("backgroundColor", backgroundColor);`;
  content = content.replace(formAppendOld, formAppendNew);

  // 6. Add OptionGroup to UI
  const optionGroupOld = `<OptionGroup
                  label="출력 비율"
                  value={ratio}
                  options={[
                    ["9:16", "9:16"],
                    ["1080x1920", "1080x1920"]
                  ]}
                  onChange={setRatio}
                />`;
  const optionGroupNew = `<OptionGroup
                  label="출력 비율"
                  value={ratio}
                  options={[
                    ["9:16", "9:16"],
                    ["1080x1920", "1080x1920"]
                  ]}
                  onChange={setRatio}
                />
                <OptionGroup
                  label="배경 컬러"
                  value={backgroundColor}
                  options={[
                    ["auto", "기본"],
                    ["black", "검정"],
                    ["white", "흰색"]
                  ]}
                  onChange={setBackgroundColor}
                />`;
  content = content.replace(optionGroupOld, optionGroupNew);

  fs.writeFileSync('src/components/redesign-wizard.tsx', content, 'utf8');
  console.log("Success");

} catch (e) {
  console.error(e);
}
