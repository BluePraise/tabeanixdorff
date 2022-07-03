
jQuery(document).ready(function($){
  // options: https://gist.githubusercontent.com/warrendholmes/9481310/raw/e7815da6e2cb1420dafd67665283ddc669f11242/Flexslider%20Options
  
  $('.flexslider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: true,
    controlsContainer: $(".custom-controls-container"),
    customDirectionNav: $(".custom-navigation a")
  });

  $('a.gallery').colorbox({
      rel:'gal',
      current: '{current} of {total}',
      maxWidth: '60%',
      maxHeight: 'auto',
      slideshow: false,
      fixed: true
  });
 
  $('.slide-image').on('click', function(e) {
      e.preventDefault();
      $(this).parents('.inline-slider').addClass('grow');

      $(document).find('.close').removeClass('hide');
  });

  $('.close').on('click', function(e){
    e.preventDefault();
    $(document).find('.inline-slider').removeClass('grow');
  });

  if ( !$('.close').hasClass('hide') && !$('.inline-slider').hasClass('grow')) {
    $('.close').addClass('hide');
  }
  else {
    
  }
   
});



