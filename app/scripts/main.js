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


  $('.home-nav--list a').smoothScroll();
  $('.button').smoothScroll({
    afterScroll: function() {
      $('input[name="your-name"]').focus();
    }
  });
}(jQuery));
