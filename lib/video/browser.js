'use strict';

// Public
exports.printMediaHistory = function(li, entry) {
  li
    .append($('<p>').text('Youtube: '))
    .append($('<p>').text(this.getCaption({data: entry.data.media})))
  ;
};

