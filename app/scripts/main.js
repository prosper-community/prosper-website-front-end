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
    var homeNavBreak = 762;

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

  // Form Handler
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
        var $joinContent = $('.l-join-content');
        $joinContent.html('<h2>Request Submitted.</h2>');
        $joinContent.find('h2').addClass('success');
        $joinContent.append('<p>A team member will email you within 48 hours to schedule an interview.</p>');
      },
      error: function(data) {
        $form.append('<p class="error">' + data.responseJSON.error + '</p>');
        console.log(data);
      }
    });
  });
}(jQuery));
