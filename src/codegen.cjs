const fs = require("fs");
const path = require("path");
const assert = require("assert").strict;

const outputPath = path.join(__dirname, "icons.ts");
const iconsPath = path.join(
  __dirname,
  "..",
  "node_modules",
  "bootstrap-icons",
  "icons",
);

const helperImportTemplate = `\
// This file is generated. Do not modify directly.

import { genIcon } from './utils';

`;

const iconComponentTemplate = `\
export const {{componentName}} = /*#__PURE__*/ genIcon(
  '{{componentName}}',
  '{{svgContent}}'
);`;

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function kebab2pascal(kebab) {
  return kebab.split("-").map(capitalize).join("");
}

function genIconComponents() {
  const filenames = fs.readdirSync(iconsPath);
  const iconComponentExports = [];

  for (const filename of filenames) {
    const componentName =
      "BIcon" + kebab2pascal(filename.substring(0, filename.length - 4));

    const content = fs.readFileSync(path.join(iconsPath, filename), {
      encoding: "utf-8",
    });
    const lines = content.split("\n");

    assert.strictEqual(lines[0].includes("svg"), true);
    assert.strictEqual(lines[lines.length - 1].includes("svg"), true);

    const svgContent = lines
      .slice(1, lines.length - 1)
      .map((s) => s.trim())
      .join("");

    const iconComponentExport = iconComponentTemplate
      .replace(/{{componentName}}/g, componentName)
      .replace("{{svgContent}}", svgContent);

    iconComponentExports.push(iconComponentExport);
  }

  fs.writeFileSync(
    outputPath,
    helperImportTemplate + iconComponentExports.join("\n"),
  );
}

genIconComponents();
