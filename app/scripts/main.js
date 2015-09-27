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
  toggleMobileHomeNav(553);

  $(window).resize(function() {
    toggleMobileHomeNav(553);
  });

  
  // Toggle Menu
  $('.menu-label').click(function(e){
    e.preventDefault();
    $('.home-nav--list').slideToggle(function(){
      $('.menu-icon').toggleClass('is-open');
    });
  });

}(jQuery));

