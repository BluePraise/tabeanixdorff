jQuery(document).ready(function($){
  /**
  To-Do

   */
  let $owl = $(".slides").owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    nav: true,
    autoplay: true,
    video:true,
    autoplayHoverPause: true,
    navContainer: $(".custom-navigation"),
    navElement: 'a',
    navText: ['<', '>']
  });

  $('.custom-navigation').append('<div class="magnify">☐</div>');
  const $magnify = $('.magnify');
  if ($magnify.length > 0) {
    $magnify.on('click', function (e) {
        e.preventDefault();
        const $parentContainer = $(this).parent();
        const $slides = $parentContainer.prev('.slides');
        const $slideContainer = $slides.parent('.slides-container');
        $slideContainer.toggleClass('grow');
        //https://stackoverflow.com/questions/32347919/refreshing-owl-carousel-2
        $owl.trigger('refresh.owl.carousel');
        if( $slideContainer.hasClass('grow') ) {
          $(this).text('✕');
        }
        else {
          $(this).text('☐');
        }
      });
  }

});