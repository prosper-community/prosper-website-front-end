(function($){
  'use strict';

  // For mobile, hide menu on open
  function toggleMobileNav(windowWidth, breakpoint) {

    if (windowWidth < breakpoint) {
      $('.nav').hide();
    } else {
      $('.nav').show();
    }
  }

  (function mobileNavHandler() {
    var windowWidth = $(window).width();
    var homeNavBreak = 771;

    // toggle mobile nav when document loads
    toggleMobileNav(windowWidth, homeNavBreak);

    // Toggle mobile nav when window resizes
    $(window).resize(function() {
      toggleMobileNav(windowWidth, homeNavBreak);
    });

    // Toggle mobile nav menu when menu label is clicked
    $('.menu-label').click(function(e){
      e.preventDefault();
      $('.nav').slideToggle(function(){
        $('.menu-icon').toggleClass('is-open');
      });
    });

    // Close home-nav--list when user clicks link on mobile
    if (windowWidth < homeNavBreak) {
      $('.nav a').click(function(){
        $('.nav').slideToggle(function(){
          $('.menu-icon').toggleClass('is-open');
        });
      });
    }
  }());

  // Form Validation
  var $form = $('.l-join-form');

  $form.validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
        maxlength: 25
      },
      email: {
        required: true,
        email: true
      },
      reason: {
        required: true,
        minlength: 2,
        maxlength: 5000
      }
    },
    messages: {
      name: 'What is your name?',
      email: {
        required: 'What is your email?',
        email: 'Please enter a valid email address.'
      },
      reason: {
        required: 'Please include a short message',
        minlength: 'If you would please include a short message, I will be able to get back to you with more information.',
        maxlength: 'Please write a message less than 5,000 characters.'
      }
    }
  });

}(jQuery));
