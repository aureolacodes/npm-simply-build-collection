/**
 * Transform stylesheet using postcss.
 *
 * @author Chris Han <support@aureola.codes>
 */
'use strict';

const fs = require('fs');
const path = require('path');
const autoprefixer = require('autoprefixer');
const postcss = require('postcss');
const config = require('./package.json').config;

let srcPath = path.resolve(process.cwd(), config.src);
let destPath = path.resolve(process.cwd(), config.dest);

let css = fs.readFileSync(srcPath, 'utf8');

postcss([ autoprefixer ])
  .process(css, {
    from: srcPath,
    to: destPath
  })
  .then(result => {
    fs.writeFileSync(destPath, result.css);

    if (result.map) {
      fs.writeFileSync(destPath + '.map', result.map);
    }
  });
