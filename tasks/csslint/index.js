/**
 * Lint CSS files using the csslint package.
 *
 * @author Chris Han <support@aureola.codes>
 */
'use strict';

const fs = require('fs');
const path = require('path');
const exec = require('child_process').exec;
const config = require('./package.json').config;

const rulesRaw = fs.readFileSync(path.resolve(__dirname, '.csslintrc'), 'utf8');
const rules = JSON.parse(rulesRaw);

let errors = [];
let ignore = [];
for (let key of Object.keys(rules)) {
  if (rules[key] === true) {
    errors.push(key);
  }
  else {
    ignore.push(key);
  }
}

let command = ([
  './node_modules/.bin/csslint',
  '--quiet',
  '--errors="' + errors.join(',') + '"',
  '--ignore="' + ignore.join(',') + '"',
  config.src
]).join(' ');

exec(command, (error, stdout, stderr) => {
  if (stdout || stderr || error) {
    console.log(stdout + stderr + error);
  }
});
