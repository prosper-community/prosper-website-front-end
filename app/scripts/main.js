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
    var homeNavBreak = 882;

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

}(jQuery));
