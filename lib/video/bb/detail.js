'use strict';

var Ose = require('ose');
var M = Ose.module(module);

var List = M.class('ose-bb/lib/pagelet/list');

exports.displayLayout = function() {
  var that = this;
  var display = ['title', 'description', 'duration', 'uploader', 'uploaded', 'updated', 'category', 'likeCount', 'viewCount'];

  Ose._.each(display, function(el, index, list) {
    if (that.entry.data[el]) {
      that.$('list').append([
        $('<li>').append([
          $('<p>').text(display[index]),
          $('<p>').text(that.entry.data[el])
        ])
      ]);
    }
  });

  that.$('list').append(
    $('<li>').append(
      $('<p>').text('Comments')
    )
    .on('click', onTapComments)
  );

  function onTapComments(ev) {
    var comments = new List('ose-bb/lib/pagelet/list');
  
    comments.display(
      {
        scope: 'youtube',
        kind: 'comment',
        showAdd: false,
        filter: that.entry.id
      },
      null,
      that.$('list')
    );
  }
};
