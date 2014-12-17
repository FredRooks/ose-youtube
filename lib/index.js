'use strict';

var Ose = require('ose');
var M = Ose.package(module);
exports = M.init();

/** Docs {{{1
 * @caption Open Smart Environment YouTube package
 *
 * @readme
 * This package integrates searching and playing YouTube videos into
 * the [OSE Media player].
 *
 * It contains the definition of the YouTube stream [entry kind] and
 * registers it as a source to [OSE Media player].
 *
 * @module youtube
 * @main youtube
 */

/**
 * @caption OSE YouTube core
 *
 * @readme
 * Core singleton of ose-youtube npm package. Registers [entry kinds]
 * defined by this package to the `"media"` [scope].
 *
 * @class youtube.lib
 * @type singleton
 */

// Public {{{1
exports.browserConfig = true;

M.content();

M.scope = 'youtube';
M.kind('./video', 'video');

var Sources = require('ose-media/lib/sources');
Sources.add('youtube', 'youtube', 'video');

