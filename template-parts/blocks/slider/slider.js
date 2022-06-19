
jQuery(document).ready(function($){
  // options: https://gist.githubusercontent.com/warrendholmes/9481310/raw/e7815da6e2cb1420dafd67665283ddc669f11242/Flexslider%20Options
  $('.flexslider').flexslider({
    slideshow: false,
    initDelay: 10,
    controlNav: false,
    smoothHeight: true,
    controlsContainer: $(".custom-controls-container"),
    customDirectionNav: $(".custom-navigation a")
  });  
   
});

