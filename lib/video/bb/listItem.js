'use strict';

var Ose = require('ose');

// Public
exports.displayData = function() {
  this.$()
    .empty()
    .append($('<aside>', {'class': 'pack-end'})
      .append($('<img>', {
        alt: 'placeholder',
        src: this.entry.data.thumbnail && this.entry.data.thumbnail.sqDefault,
        height: 'auto',
        'class': 'rectangle'
      }))
    )
    .append($('<aside>', {'class': 'icon settings-icon notifications'})
      .on('click', onClickAside.bind(this))
    )
    .append($('<p>').text(this.entry.data.title))
    .append($('<p>').text(this.entry.data.description))
  ;
};

function onClickAside(ev) {
  Ose.ui.newDialog('info', {
    caption: this.entry.data.title,
    auto: true
  });

  return false;
}
