
jQuery(document).ready(function($){
 $('.slides').slick({
    
  });

$('.slide-image').on('click', function(event, slick, currentSlide, nextSlide){
    var $this = $(this);
    console.log($this.parents('.js-gallery-item'));
    // console.log($this.eq(currentSlide));
    var currentCaption = $this.eq(currentSlide).find('.js-gallery-item').data('caption');
    // console.log(currentCaption);
    // $('#cboxCurrent').innerT('yesy');
    $('#cboxCurrent').textContent = currentCaption;
});



    $('a.gallery').colorbox({
      rel:'gal',
      maxWidth: '90%',
      maxHeight: '90%',
      slideshow: false,
      current: '',
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
        // console.log($(this).length);
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



