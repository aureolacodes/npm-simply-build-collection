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

exec(`scss-lint -c ${rules} ${config.src}`, (error, stdout, stderr) => {
  if (stdout || stderr || error) {
    console.log(stdout + stderr + error);
  }
});
