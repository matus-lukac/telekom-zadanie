// @flow

import $ from 'jquery';

// zobraz riadok #2 + zmen stav

$('#rownumber1').click(function() {
  $('#row2').removeClass('hidden');
  $('#row2').addClass('showing');
  if ($('#row2').hasClass('showing')) {
    setTimeout(function() {
      $('.row2text').html('<i class="fas fa-wrench"></i> In Progress');
    }, 3000);

    setTimeout(function() {
      $('#actionrow2').removeClass('hidden');
    }, 3500);

    setTimeout(function() {
      $('.row2text').html('<i class="fas fa-clipboard-check"></i> Resolved');
      $('#statusicon2').addClass('hidden');
    }, 10000);
  }
});

// zobraz riadok #3 + zmen stav

$('#rownumber2').click(function() {
  $('#row3').removeClass('hidden');
  $('#row3').addClass('showing');
  if ($('#row3').hasClass('showing')) {
    setTimeout(function() {
      $('.row3text').html('<i class="fas fa-wrench"></i> In Progress');
    }, 3000);

    setTimeout(function() {
      $('#actionrow3').removeClass('hidden');
    }, 3500);

    setTimeout(function() {
      $('.row3text')
        .html(
          '<i class="fas fa-star"></i> Self Care<br><img class="youtubescreen" src="./assets/imgs/icon_case_3.png" alt="">'
        )
        .click(function() {
          $('.row3text').html(
            '<i class="fas fa-clipboard-check"></i> Resolved manually'
          );
          $('#statusicon1').addClass('hidden');
        });
    }, 5000);
  }
});

// zobraz riadok #4 + zmen stav

$('#rownumber3').click(function() {
  $('#row4').removeClass('hidden');
  $('#row4').addClass('showing');
  if ($('#row4').hasClass('showing')) {
    setTimeout(function() {
      $('.row4text').html('<i class="fas fa-wrench"></i> In Progress');
    }, 3000);

    setTimeout(function() {
      $('#actionrow4').removeClass('hidden');
    }, 3500);

    setTimeout(function() {
      $('.row4text').html('<i class="fas fa-clipboard-check"></i> Resolved');
      $('#statusicon4').addClass('hidden');
    }, 10000);
  }
});

// riadok #1

$('#rownumber0').click(function() {
  $('#row1').removeClass('hidden');
  $('#row1').addClass('showing');
  if ($('#row1').hasClass('showing')) {
    setTimeout(function() {
      $('.row1text').html('<i class="fas fa-wrench"></i> In Progress');
    }, 3000);

    setTimeout(function() {
      $('#actionrow1').removeClass('hidden');
    }, 3500);

    setTimeout(function() {
      $('.row1text')
        .html(
          '<i class="fas fa-star"></i> Self Care<br><img class="youtubescreen" src="./assets/imgs/icon_case_1a.png" alt="">'
        )
        .click(function() {
          $('.row1text').html(
            '<i class="fas fa-clipboard-check"></i> Resolved manually'
          );
          $('#statusicon1').addClass('hidden');
        });
    }, 5000);
  }
});

// riadok 0

$.fn.statusRiadok0 = function() {
  setTimeout(function() {
    $('.row0text').html('<i class="fas fa-wrench"></i> In Progress');
  }, 3000);

  setTimeout(function() {
    $('#actionrow0').removeClass('hidden');
  }, 3500);

  setTimeout(function() {
    $('.row0text').html('<i class="fas fa-clipboard-check"></i> Resolved');
    $('#statusicon0').addClass('hidden');
  }, 8000);
};

$('#row0').statusRiadok0();

// action link

$('#buttonrow1').on('click', function(e) {
  e.preventDefault();
  var valuerow1 = $('#inputrow1').val();

  $('#newlinkrow1').prop('href', valuerow1);
  $('#newlinkrow1').removeClass('hidden');
  $('#inputrow1').val('');
});

$('#buttonrow2').on('click', function(e) {
  e.preventDefault();
  var valuerow2 = $('#inputrow2').val();

  $('#newlinkrow2').prop('href', valuerow2);
  $('#newlinkrow2').removeClass('hidden');
  $('#inputrow2').val('');
});

$('#buttonrow3').on('click', function(e) {
  e.preventDefault();
  var valuerow3 = $('#inputrow3').val();

  $('#newlinkrow3').prop('href', valuerow3);
  $('#newlinkrow3').removeClass('hidden');
  $('#inputrow3').val('');
});

$('#buttonrow4').on('click', function(e) {
  e.preventDefault();
  var valuerow4 = $('#inputrow4').val();

  $('#newlinkrow4').prop('href', valuerow4);
  $('#newlinkrow4').removeClass('hidden');
  $('#inputrow4').val('');
});
