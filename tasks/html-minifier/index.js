/**
 * Minify html files using html-minifier.
 *
 * @author Chris Han <support@aureola.codes>
 */
'use strict';

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const mkpath = require('mkpath');
const minify = require('html-minifier').minify;
const config = require('./package.json').config;

glob(config.pattern, {cwd: config.src}, (error, files) => {
  for (let i = 0, len = files.length; i < len; i++) {
    let srcPath = path.resolve(process.cwd(), config.src, files[i]);
    let destPath = path.resolve(process.cwd(), config.dest, files[i]);
    let destDir = path.dirname(destPath);

    let input = fs.readFileSync(srcPath, 'utf8');
    let output = minify(input, config);

    mkpath.sync(destDir);
    fs.writeFileSync(destPath, output);
  }
});
