'use strict';

exports = require('ose')
  .singleton(module, 'ose/lib/http/content')
  .exports
;

/** Docs  {{{1
 * @module youtube
 */

/**
 * @caption OSE YouTube content
 *
 * @readme
 * Provides files of OSE YouTube package to the browser.
 *
 * @class youtube.content
 * @type singleton
 * @extends ose.lib.http.content
 */

// Public {{{1
exports.addFiles = function() {
  this.addModule('lib/index');
  this.addModule('lib/video/browser');
  this.addModule('lib/video/index');
  this.addModule('lib/video/bb/detail');
  this.addModule('lib/video/bb/listItem');
};

