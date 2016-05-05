/**
 * Lint CSS files using scss-lint.
 *
 * @author Chris Han <support@aureola.codes>
 */
'use strict';

const path = require('path');
const exec = require('child_process').exec;
const config = require('./package.json').config;

let rules = path.resolve(__dirname, '.scss-lint.yml');
let command = `./node_modules/.bin/sass-lint -c ${rules} '${config.pattern}' -v -q -i 'config.ignore'`;

exec(command, (error, stdout, stderr) => {
  if (stdout || stderr || error) {
    console.log(stdout + stderr + error);
  }
});
