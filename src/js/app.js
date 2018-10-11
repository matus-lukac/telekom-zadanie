// @flow

import $ from 'jquery';

$(function() {
  setTimeout(function() {
    $('.animation').addClass('hidden');
    $('.qr').removeClass('hidden');
  }, 5500);
});

$('#services').click(function(e) {
  e.preventDefault();
  $('.animation').addClass('hidden');
  $('.qr').addClass('hidden');
  $('.data-table').removeClass('hidden');
  $('.imgcontent').removeClass('hidden');
});
