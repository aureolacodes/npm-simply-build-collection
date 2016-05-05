/**
 * Run tests using karma & jasmine.
 *
 * @author Chris Han <support@aureola.codes>
 */
'use strict';

const path = require('path');
const exec = require('child_process').exec;
const config = require('./package.json').config;

let rules = path.resolve(__dirname, 'karma.conf.es6');

let command = `./node_modules/.bin/karma start ${rules} ${config.src} --single-run`;
exec(command, (error, stdout, stderr) => {
  if (stdout || stderr || error) {
    console.log(stdout + stderr + error);
  }
});
