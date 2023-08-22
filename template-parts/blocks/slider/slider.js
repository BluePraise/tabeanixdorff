jQuery(document).ready(function($){
  /**
  To-Do

   */
  /**
  * - On each change event in the slider the caption is copied to the custom navigation
  */

  // let $owl = $(".slides").owlCarousel({
  //   items: 1,
  //   loop: true,
  //   dots: false,
  //   nav: true,
  //   autoplay: false,
  //   video:true,
  //   autoplayHoverPause: true,
  //   navContainer: $(".custom-navigation"),
  //   navElement: 'a',
  //   autoHeight: true,
  //   navText: ['<', '>']
  // });


  // $('.custom-navigation').append('<div class="magnify">☐</div>');
  // /**
  // * When .magnify exists, an event is dispatched to expand the entire slider.
  // * - The slider is refreshed on each click event.active
  // * - The content of the magnify icon is changed to a close icon.active
  // * - On each change event in the slider the caption is copied to the custom navigation
  // */

  // const $magnify = $('.magnify');
  // if ($magnify.length > 0) {
  //   $magnify.on('click', function (e) {
  //       e.preventDefault();
  //       const $parentContainer = $(this).parent();
  //       const $slides = $parentContainer.prev('.slides');
  //       const $slideContainer = $slides.parent('.slides-container');

  //       $slideContainer.toggleClass('grow');
  //       //https://stackoverflow.com/questions/32347919/refreshing-owl-carousel-2
  //       $owl.trigger('refresh.owl.carousel');

  //       if( $slideContainer.hasClass('grow') ) {
  //         $(this).text('✕');
  //       }
  //       else {
  //         $(this).text('☐');
  //       }

  //   });
  // }
  // $owl.on('change.owl.carousel', function (e) {
  // });
  // $owl.on('changed.owl.carousel', function (e) {
  //   e.preventDefault();
  //   let index = e.item.index;
  //   let currentSlide = $(e.target).find(".owl-item.active");
  //   const $customNav = $('.custom-navigation');
  //   let $caption = currentSlide.find('figcaption').text();
  //   console.log($caption);
  //   // let $captionCloned = $caption.clone();
  //   if ($caption.length > 0) {
  //     $('<span class="caption">'+ $caption +'</span>').prependTo($customNav);
  //   }
  // });

});


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  autoplay: false,
  setWrapperSize: true,
});