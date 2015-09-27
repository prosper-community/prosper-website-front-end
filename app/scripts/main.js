(function($){
  'use strict';
  console.log('\'Allo \'Allo!');

  // For mobile, hide menu on open
  $('.home-nav--list').hide();

  // Toggle Menu
  $('.menu-label').click(function(e){
    e.preventDefault();
    $('.home-nav--list').slideToggle(function(){
      $('.menu-icon').toggleClass('is-open');
    });
  });

}(jQuery));

