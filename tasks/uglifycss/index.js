/**
 * Minify css files using uglify-css.
 *
 * @author Chris Han <support@aureola.codes>
 */
'use strict';

const fs = require('fs');
const path = require('path');
const uglifycss = require('uglifycss');
const config = require('./package.json').config;

let srcPath = path.resolve(process.cwd(), config.src);
let destPath = path.resolve(process.cwd(), config.dest);

let uglified = uglifycss.processFiles([ srcPath ]);
fs.writeFileSync(destPath, uglified);
