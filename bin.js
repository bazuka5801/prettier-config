#!/usr/bin/env node

const path = require('path');
const fs = require('fs');

const code = `
// https://github.com/bazuka5801/prettier-config

module.exports = require('@bazuka5801/prettier-config')({
  // Any options here will override @bazuka5801/prettier-config defaults
});
`.trim();

fs.writeFileSync(path.resolve(process.cwd(), '.prettierrc.js'), code);

console.log(
  '\x1b[7mCreated .prettierrc.js file with @bazuka5801/prettier-config\x1b[0m'
);
