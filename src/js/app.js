// @flow

import $ from 'jquery';

$('#row1').click(function() {
  $('#row2').removeClass('hidden');
});

$('#row2').click(function() {
  $('#row3').removeClass('hidden');
});

$('#row3').click(function() {
  $('#row4').removeClass('hidden');
});
