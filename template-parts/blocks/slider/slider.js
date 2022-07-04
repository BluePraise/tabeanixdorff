
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
      current: '',
      maxWidth: 'auto',
      maxHeight: '90%',
      slideshow: false,
      previous: "<",
      next: ">",
      bottom: 10,
      left: 60,
      onOpen: function() {
        $('.flex-container').addClass('fade');
        $('body').css('overflow', 'hidden');
      },
      onCleanup: function() {
        $('.flex-container').removeClass('fade');
        $('body').css('overflow', 'initial');
      }
  });
 
  $('.slide-image').on('click', function(e) {
      e.preventDefault();
      $(this).parents('.inline-slider').addClass('grow');

      $(document).find('.close').removeClass('hide');
  });

   
});



