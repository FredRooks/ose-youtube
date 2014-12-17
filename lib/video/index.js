'use strict';

var Ose = require('ose');
var M = Ose.singleton(module, 'ose/lib/kind');
exports = M.append('runtime').exports;

/** Docs {{{1
 * @module youtube
 */

/**
 * @caption Youtube video kind
 *
 * @readme
 * [Entry kind] representing Youtube videos.
 *
 * @class youtube.lib.video
 * @extend ose.lib.kind
 * @type singleton
 */

// Public
exports.getCaption = function(entry) {
  return entry.data && entry.data.title;
};

exports.getMediaKeys = function(entry) {
  return {
    title: entry.data.title,
    comment: entry.data.comment
  };
};

exports.playItem = function(player, item) {
/**
 * Send media item to to playback
 *
 * @param player {Object} Media player entry
 * @param item {Object} Media item entry
 */

  player.postTo(
    player.playback,
    'playUri',
    'http://youtube.com/watch?v=' + item.data.id
  );
};

