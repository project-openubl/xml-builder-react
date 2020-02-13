/* eslint-disable @typescript-eslint/no-var-requires */
const { copySync, readFileSync, writeFileSync } = require("fs-extra");
const { resolve, dirname, join } = require("path");
const { parse: parseCSS, stringify: stringifyCSS } = require("css");
/* eslint-enable @typescript-eslint/no-var-requires */

const baseCSSFilename = "base.css";
const stylesDir = resolve(__dirname, "../dist/styles");
const pfDir = dirname(require.resolve(`../styles/${baseCSSFilename}`));

const css = readFileSync(join(pfDir, baseCSSFilename), "utf8");
const ast = parseCSS(css);

copySync(join(pfDir, "assets/images"), join(stylesDir, "assets/images"));
writeFileSync(join(stylesDir, "base.css"), stringifyCSS(ast));
