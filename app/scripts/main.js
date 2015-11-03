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
    var $sender = $('input[name="entry.372718999"]').val();
    var $email = $('input[name="entry.56111174"]').val();
    var $organization = $('input[name="entry.839901740"]').val();
    var $role = $('input[name="entry.790371713"]').val();
    var $message = $('textarea[name="entry.1562080588"]').val();
    var $form = $('.l-join-form');

    $.ajax({
      url: 'https://docs.google.com/forms/d/1w-8-OnbACv5M7c4KEHJtjXnDGwiPj_vnf7Lw9ereVow/formResponse',
      method: 'POST',
      data: {
        'entry.372718999': $sender,
        'entry.56111174': $email,
        'entry.839901740': $organization,
        'entry.790371713': $role,
        'entry.1562080588': $message
      },
      dataType: 'json',
      statusCode: {
	      0: function() {
	        $form.fadeOut();
	        var $joinContent = $('.l-join-content');
	        $joinContent.html('<h2>Request Submitted.</h2>');
	        $joinContent.find('h2').addClass('success');
	        $joinContent.append('<p>A team member will email you within 48 hours to schedule an interview.</p>');
	      },
	      200: function() {
	        $form.fadeOut();
	        var $joinContent = $('.l-join-content');
	        $joinContent.html('<h2>Request Submitted.</h2>');
	        $joinContent.find('h2').addClass('success');
	        $joinContent.append('<p>A team member will email you within 48 hours to schedule an interview.</p>');
	      }
	    },
      error: function(data) {
        $form.append('<p class="error">sorry! we\'ve had a server error. please email <a href="mailto:admin@solvetherefugeecrisis.com">admin@solvetherefugeecrisis.com</a>.</p>');
        console.log(data);
      }
    });
  });
}(jQuery));
