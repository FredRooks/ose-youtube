'use strict';

var Ose = require('ose');

// Public {{{1
exports.displayLayout = function() {  // {{{2
  var that = this;

  // TOOD
  // this.$('list').closest('div')
  //   .prepend($('<ul>')
  //     .append($('<li>', {'class': 'persistent'})
  //       .append($('<button>', {'class': 'icon icon-dialog sortby'})
  //         .on('click', onTapSort)
  //         .text('Sort by')
  //       )
  //     )
  //   )
  // ;

  this.$('').scroll(onScroll.bind(this));

  this.$('header').on('click', onTapHeader.bind(this));

  function onTapSort(ev) {
    var options = {
      'relevance': {
        text: 'Relevance'
      },
      'published': {
        text: 'Upload date'
      },
      'viewCount': {
        text: 'View count'
      },
      'rating': {
        text: 'Rating'
      }
    };

    that.valueSelector('sortBy', {
      heading: 'Sort by',
      options: options,
      value: that.key.sortby ? that.key.sortby : 'relevance',
      cb: function(ev) {
        var val = that.valueSelector('sortBy');
        that.update({
          sortby: val ? val : that.key.sortby,
          filter: that.key.filter && that.key.filter.query
        });
        //$(TODO).find('button.sortby').text('Sorted by ' + options[val].text.toLowerCase());
      }
    })
  }
};

exports.loadMore = function() {  // {{{2
  this.update({loadMore: this.$('list').children().length + 1}, true, true);
};

// }}}1
// Event handlers {{{1
function onTapThumbnail(ev) {  // {{{2
  var form = $('<form>', {
    role: 'dialog',
    'data-type': 'object'
  })
  .append(
    $(ev.target)
    .css({
      width: '100%;'
    })
  )
  .prependTo('#' + this.id)
  .on('click', close)
  ;

  return false;

  function close() {
    form.remove();
  }
};

function onHold(ev) {  // {{{2
  var li = $(ev.currentTarget);
  var shard = li.attr('shard');
  var entry = li.attr('entry');

  Ose.ui.newPage(
    {
      bit: 'detail',
      entry: entry,
      shard: shard,
      dialog: true
    },
    null,
    ev.ctrlKey
  );

  ev.preventDefault();
};

function onScroll(ev) {  // {{{2
  // TODO: Fix this so that it works in all cases.

  var difference = this.$('').height() - this.$('').scrollTop() + this.$('header').height() - 3; // TODO

  if  (difference === this.$('').scrollTop()) {
    this.loadMore();
  }
};

function onTapHeader() {  // {{{2
  var that = this;
  var options = {};

  Ose._.each(this.scope.kinds, function(val, key, list) {
    options[key] = {
      text: key
    };
  });

  this.valueSelector('chooseType', {
    heading: 'Choose type',
    options: options,
    cb: function(ev) {
      var val = that.valueSelector('chooseType');
      // TOOD: Show corresponding view.
    }
  });
};

// }}}1
