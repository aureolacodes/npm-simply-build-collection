/**
 * Lint js files using jscs.
 *
 * @author Chris Han <support@aureola.codes>
 */
'use strict';

const path = require('path');
const exec = require('child_process').exec;
const config = require('./package.json').config;

let rules = path.resolve(__dirname, '.jscsrc');

let command = `./node_modules/.bin/jscs -c ${rules} ${config.src}`;
exec(command, (error, stdout, stderr) => {
  if (stdout || stderr || error) {
    console.log(stdout + stderr + error);
  }
});
