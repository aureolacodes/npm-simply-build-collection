/**
 * Lint javascript files using eslint.
 *
 * @author Chris Han <support@aureola.codes>
 */
'use strict';

const path = require('path');
const exec = require('child_process').exec;
const config = require('./package.json').config;

const configFile = path.resolve(__dirname, '.eslintrc.yaml');
const sourceFile = path.resolve(process.cwd(), config.src);

let command = `./node_modules/.bin/eslint -c ${configFile} ${sourceFile}`;
exec(command, (error, stdout, stderr) => {
  if (stdout || stderr || error) {
    console.log(stdout + stderr + error);
  }
});
