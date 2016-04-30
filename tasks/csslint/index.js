/**
 * Lint CSS files using the csslint package.
 *
 * @author Chris Han <support@aureola.codes>
 */
'use strict';

const exec = require('child_process').exec;
const config = require('./package.json').config;

exec(`./node_modules/.bin/csslint ${config.src}`, (error, stdout, stderr) => {
  if (stdout || stderr || error) {
    console.log(stdout + stderr + error);
  }
});
