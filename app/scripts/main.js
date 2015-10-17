(function($){
  'use strict';

  // For mobile, hide menu on open
  function toggleMobileNav(windowWidth, breakpoint) {

    if (windowWidth < breakpoint) {
      $('.home-nav--list').hide();
    } else {
      $('.home-nav--list').show();
    }
  }

  (function mobileNavHandler() {
    var windowWidth = $(window).width();
    var homeNavBreak = 620;

    // toggle mobile nav when document loads
    toggleMobileNav(windowWidth, homeNavBreak);

    // Toggle mobile nav when window resizes
    $(window).resize(function() {
      toggleMobileNav(windowWidth, homeNavBreak);
    });

    // Toggle mobile nav menu when menu label is clicked
    $('.menu-label').click(function(e){
      e.preventDefault();
      $('.home-nav--list').slideToggle(function(){
        $('.menu-icon').toggleClass('is-open');
      });
    });

    // Close home-nav--list when user clicks link on mobile
    if (windowWidth < homeNavBreak) {
      $('.home-nav--list a').click(function(){
        $('.home-nav--list').slideToggle(function(){
          $('.menu-icon').toggleClass('is-open');
        });
      });
    }
  }());

  $('input[type="submit"]').click(function(e){
    e.preventDefault();
    // Vars passed into data for ajax call
    var $sender = $('input[name="your-name"]').val();
    var $email = $('input[name="your-email"]').val();
    var $message = $('textarea[name="your-reason"]').val();
    var $form = $('.l-join-form');

    $.ajax({
      url: '//formspree.io/admin@solvetherefugeecrisis.com',
      method: 'POST',
      data: {
        sender: $sender,
        email: $email,
        message: $message
      },
      dataType: 'json',
      success: function() {
        $form.fadeOut();
        var $formHeader = $('.l-join-content h2');
        $formHeader.html('Request Submitted.').addClass('success');
        $form.append('<p>You should expect to hear from a team member within 48 hours.');
      },
      error: function(data) {
        $form.append('<p class="error">sorry! we\'ve had a server error. please try again later.');
        console.log(data);
      }
    });
  });
}(jQuery));
