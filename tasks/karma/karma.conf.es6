/**
 * @file
 * Karma setup for use with browserify, babelify, jasmine & istanbul.
 */

const browserifyIstanbul = require('browserify-istanbul');
const babelIstanbul = require('babel-istanbul');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['browserify', 'jasmine'],
    files: [
      {
        pattern: 'node_modules/babel-polyfill/dist/polyfill.js',
        included: true,
        watched: false
      },
      {
        pattern: 'test/**/*.spec.js',
        included: true,
        watched: true
      }
    ],
    reporters: [
      'progress',
      'coverage'
    ],
    exclude: [],
    preprocessors: {
      'src/js/**/*.js': ['coverage'],
      'test/**/*.spec.js': ['browserify']
    },
    browserify: {
      debug: true,
      transform: [
        'babelify',
        browserifyIstanbul({
          ignore: [
            'node_modules/**',
            'test/**/*.spec.js'
          ],
          includeUntested: false,
          defaultIgnore: true,
          instrumenter: babelIstanbul
        })
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
