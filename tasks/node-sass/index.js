/**
 * Transpile sass files using node-sass.
 *
 * @author Chris Han <support@aureola.codes>
 */
'use strict';

const fs = require('fs');
const path = require('path');
const sass = require('node-sass');
const config = require('./package.json').config;

let srcPath = path.resolve(process.cwd(), config.src);
let destPath = path.resolve(process.cwd(), config.dest);

sass
  .render({
    file: srcPath,
    outFile: destPath,
    sourceMap: true,
    sourceMapEmbed: true
  }, (err, result) => {
    fs.writeFileSync(destPath, result.css);
  });
