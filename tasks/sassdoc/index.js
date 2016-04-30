/**
 * Document sass files using sassdoc.
 *
 * @author Chris Han <support@aureola.codes>
 */
'use strict';

const path = require('path');
const exec = require('child_process').exec;
const config = require('./package.json').config;

let rules = path.resolve(__dirname, '.sassdocrc.yaml');
let destination = path.resolve(process.cwd(), config.dest);
let binary = './node_modules/.bin/sassdoc';

let command = `${binary} -c ${rules} -d ${destination} ${config.src}`;
exec(command, (error, stdout, stderr) => {
  if (stdout || stderr || error) {
    console.log(stdout + stderr + error);
  }
});
