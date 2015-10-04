(function($){
  'use strict';
  console.log('\'Allo \'Allo!');


  // For mobile, hide menu on open
  function toggleMobileHomeNav(breakpoint) {
    var $windowWidth = $(window).width();

    if ($windowWidth < breakpoint) {
      $('.home-nav--list').hide();
    } else {
      $('.home-nav--list').show();
    }
  }

  // toggle mobile home nav when document loads
  toggleMobileHomeNav(762);

  $(window).resize(function() {
    toggleMobileHomeNav(762);
  });


  // Toggle Menu
  $('.menu-label').click(function(e){
    e.preventDefault();
    $('.home-nav--list').slideToggle(function(){
      $('.menu-icon').toggleClass('is-open');
    });
  });

  // When user clicks a link in the home-nav bar, smoothScroll
  $('.home-nav--list a').smoothScroll();

  // When user clicks button (call to action), smoothScroll and focus input
  $('.button').smoothScroll({
    afterScroll: function() {
      $('input[name="your-name"]').focus();
    }
  });

  $('input[type="submit"]').click(function(e){
    e.preventDefault();
    // Vars passed into data for ajax call
    var $sender = $('input[name="your-name"]').val();
    var $email = $('input[name="your-email"]').val();
    var $message = $('textarea[name="your-reason"]').val();
    var $form = $('.l-join-form');

    $.ajax({
      url: "//formspree.io/admin@refugee.community",
      method: "POST",
      data: {
        sender: $sender,
        email: $email,
        message: $message
      },
      dataType: "json",
      success: function(data) {
        $form.fadeOut();
        var $formHeader = $('.l-join-wrapper h2');
        $formHeader.html('Request Submitted.').addClass('success');
      },
      error: function(data) {
        alert("sorry! we've had a server error. please try again later." + data);
      }
    })
  });
}(jQuery));
