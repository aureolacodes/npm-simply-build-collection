/**
 * Lint CSS files using scss-lint.
 *
 * @author Chris Han <support@aureola.codes>
 */
'use strict';

const path = require('path');
const exec = require('child_process').exec;
const config = require('./package.json').config;

let srcPath = path.resolve(process.cwd(), config.src);
let destPath = path.resolve(process.cwd(), config.dest);

let command = `./node_modules/.bin/uglifyjs --compress --screw-ie8 --mangle -o ${destPath} -- ${srcPath}`;

exec(command, (error, stdout, stderr) => {
  if (stdout || stderr || error) {
    console.log(stdout + stderr + error);
  }
});
