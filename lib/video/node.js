'use strict';

var Ose = require('ose');
var M = Ose.module(module);

var Youtube = require('youtube-feeds');
Youtube.httpProtocol = 'https';

// Public {{{1
exports.getView = function(params, socket) {  // {{{2
  var result = [];
  var s = params.shard;

  if (params.filter && params.filter.search) {
    Youtube.feeds.videos({
      q: params.filter.search,
      orderby: params.sortby ? params.sortby : 'relevance',
      'start-index': params.loadMore ? params.loadMore : 1,
      'max-results': 10,
    }, onData);
  } else {
    Youtube.feeds.standard('on_the_web', onData);
  }

  function onData(err, data) {
    if (err) {
      Ose.link.error(socket, err);
      return;
    }

    for (var i = 0; i < data.items.length; i++) {
      checkEntry(s, data.items[i]);
    }

    Ose.link.close(socket, {view: result});

    function checkEntry(s, item) {
      s.get(item.id, onEntry);
      result.push(item.id);

      function onEntry(err, entry) {
        if (err) {
          s.entry(item.id, 'video', item);
        }
      }
    }
  }
};

// }}}1
