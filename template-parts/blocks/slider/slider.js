jQuery(document).ready(function($){
  /**
  To-Do
    maybe replace owlCarousel with swiper.js or tinyslider.js
   */
  $(".slides").owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    nav: true,
    autoplay: true,
    video:true,
    autoplayHoverPause: true,
    navContainer: $(".custom-navigation"),
    videoHeight: 100,
    navElement: 'a',
    navText: ['<', '>'],
    autoHeight: true,
    autoHeightClass: 'owl-height'
  });

  $('.custom-navigation').append('<div class="magnify">☐</div>');
  const magnify = $('.magnify')
  if (magnify) {
    magnify.on('click', function(e) {
      e.preventDefault();
      const $parentContainer = $(this).parent();
      const $slides = $parentContainer.prev('.slides');
      $slides.toggleClass('grow');
      let $caption = $slides.find('figcaption').html();
      console.log($caption);
    })
  }

  $('.magnify').colorbox({
      rel:'gal',
      current: '',
      maxWidth: '90%',
      maxHeight: '90%',
      slideshow: false,
      current: function() {
        var caption = $(this).find('figcaption').html();
        return caption;
      },
      previous: "<",
      next: ">",
      close: "×",
      bottom: 40,
      left: 60,
      scrolling: false,
      open: true,
      onOpen: function() {
        $('.slides').addClass('fade');
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
        $('.slides').removeClass('fade');
      }
});

});
