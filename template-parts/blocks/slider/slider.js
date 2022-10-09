
jQuery(document).ready(function($){
  // options: https://gist.githubusercontent.com/warrendholmes/9481310/raw/e7815da6e2cb1420dafd67665283ddc669f11242/Flexslider%20Options
  
  $('.flexslider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: true,
    controlsContainer: $(".custom-controls-container"),
    customDirectionNav: $(".custom-navigation a"),
    prevText: "<",           //String: Set the text for the "previous" directionNav item
    nextText: ">", 
    start: function() {
      $('.flex-next').after('<a class="magnify">□</a>');
    }
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
        var $cboxCaption = $('#colorbox').find('.cboxCaption');
        if ($cboxCaption.length === 0) { 
          $('#cboxCurrent').wrapAll("<div class='d-flex cboxCaption' />");
          $('#cboxPrevious, #cboxNext, #cboxClose').wrapAll("<div class='cboxCaption-controls' />"); 
          $('.cboxCaption-controls').appendTo('.cboxCaption');

        }
      },
      onLoad: function() {
        setTimeout(function(){
          $('#cboxClose').appendTo('.cboxCaption-controls');
        }, 500)
      },
      onCleanup: function() {
        $('.flex-container').removeClass('fade');
      }
  });

  var controlContainerWidth = $('.flex-viewport').css('width');
  $('.custom-navigation').css('width', controlContainerWidth);


});



