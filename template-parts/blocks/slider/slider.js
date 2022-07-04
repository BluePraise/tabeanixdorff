
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
      maxWidth: '90%',
      maxHeight: '90%',
      slideshow: false,
      current: $caption,
      previous: "<",
      next: ">",
      close: "×",
      bottom: 40,
      left: 60,
      scrolling: false,
      onOpen: function() {
        $('.flex-container').addClass('fade');
        // $('body').css('overflow', 'hidden');
        $('#cboxPrevious, #cboxNext, #cboxCurrent').wrapAll("<div class='d-flex cboxCaption' />");
      },
      onLoad: function() {
        $('#cboxClose').addClass('cloned').appendTo('.d-flex');

      },
      onCleanup: function() {
        $('.flex-container').removeClass('fade');
        // $('body').css('overflow', 'initial');
      }
  });


});



