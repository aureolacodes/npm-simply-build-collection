/**
 * Lint CSS files using scss-lint.
 *
 * @author Chris Han <support@aureola.codes>
 */
'use strict';

const fs = require('fs');
const path = require('path');
const packager = require('electron-packager');
const config = require('./package.json').config;

let rootConfigPath = path.resolve(process.cwd(), 'package.json');
let rootConfigRaw = fs.readFileSync(rootConfigPath);
let rootConfig = JSON.parse(rootConfigRaw);

let srcDir = path.resolve(process.cwd(), config.src);
let destDir = path.resolve(process.cwd(), config.dest, rootConfig.version);

let options = {
  arch: 'all',
  dir: srcDir,
  platform: 'all',
  out: destDir,
  overwrite: true
};

packager(options, (error, appPaths) => {
  if (error) {
    console.log(error);
  }
});
