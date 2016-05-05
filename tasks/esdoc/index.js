/**
 * Create documentation using esdoc.
 *
 * @author Chris Han <support@aureola.codes>
 */
'use strict';

const path = require('path');
const exec = require('child_process').exec;

const configFile = path.resolve(__dirname, '.esdoc.json');

exec(`./node_modules/.bin/esdoc -c ${configFile}`, (error, stdout, stderr) => {
  if (stdout || stderr || error) {
    console.log(stdout + stderr + error);
  }
});
