// script.js

$(document).ready(function () {
  
  // Function to check if an element is in the viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to add the 'animated' class to elements with the 'fade' class
  function animateFadeElements() {
    $('.fade').each(function () {
      if (isInViewport(this)) {
        $(this).addClass('animated');
      }
    });
  }

  // Function to add the 'animated' class to elements with the 'animatable' class
  function doAnimations() {
    var offset = $(window).scrollTop() + $(window).height(),
        $animatables = $('.animatable');

    // Unbind scroll handler if we have no animatables
    if ($animatables.length == 0) {
      $(window).off('scroll', doAnimations);
    }

    // Check all animatables and animate them if necessary
    $animatables.each(function(i) {
       var $animatable = $(this);
       if (($animatable.offset().top + $animatable.height() - 20) < offset) {
        $animatable.removeClass('animatable').addClass('animated');
       }
    });
  }

  // Combined function to run both animations
  function runAnimations() {
    animateFadeElements();
    doAnimations();
  }

  // Run on page load
  runAnimations();

  // Run on scroll
  $(window).on('scroll', function () {
    runAnimations();
  });
});
