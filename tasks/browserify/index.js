/**
 * Transpile javascript files using browserify & babel.
 *
 * @author Chris Han <support@aureola.codes>
 */
'use strict';

const fs = require('fs');
const path = require('path');
const browserify = require('browserify');

const config = require('./package.json').config;

let srcPath = path.resolve(process.cwd(), config.src);
let destPath = path.resolve(process.cwd(), config.dest);

browserify(srcPath, {debug: true})
  .transform('babelify', {presets: ['es2015', 'stage-0']})
  .bundle()
  .pipe(fs.createWriteStream(destPath));
