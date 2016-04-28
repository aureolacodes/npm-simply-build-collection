/**
 * @file
 * Karma setup for use with browserify, babelify, jasmine & istanbul.
 *
 * @author Christian Hanne <hanne@laborb.de>
 * @copyright 2016, labor b designbüro
 */

const browserifyIstanbul = require('browserify-istanbul');
const babelIstanbul = require('babel-istanbul');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['browserify', 'jasmine'],
    files: [
      { pattern: 'node_modules/babel-polyfill/dist/polyfill.js', included: true, watched: false },
      { pattern: 'test/**/*.test.js', included: true, watched: true }
    ],
    reporters: [
      'progress',
      'coverage'
    ],
    exclude: [],
    preprocessors: {
      'app/**/*.js': ['coverage'],
      'test/**/*.js': ['browserify']
    },
    browserify: {
      debug: true,
      transform: [
        'babelify',
        browserifyIstanbul({
          ignore: [
            'node_modules/**',
            '**/*.spec.js'
          ],
          includeUntested: false,
          defaultIgnore: true,
          instrumenter: babelIstanbul
        }),
        'browserify-ng-html2js',
        'browserify-ngannotate'

      ]
    },
    browsers: [
      'Electron'
    ],
    coverageReporter: {
      reporters: [
        {'type': 'text'},
        {'type': 'html', 'dir': 'coverage'}
      ]
    },
    colors: true,
    autoWatch: false,
    singleRun: true,
    concurrency: Infinity
  });
};
