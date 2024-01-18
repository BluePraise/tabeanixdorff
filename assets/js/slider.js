let docHeight = document.documentElement.scrollHeight;
let allProjectsHeight = document.querySelector('.projects').offsetHeight;

(function ($) {

    $(document).ready(function ($) {

        /* Mobile Menu: open mobile */
        $('.js-toggle-mobile-menu').on('click', function (e) {
            e.preventDefault();
            $('.menu-main-menu-container').toggleClass('open');
            $('.js-toggle-mobile-menu').toggleClass('open');

        })

        /* Initialise Flickity.js */
        let $slider = $('.slides-container');

        $slider.flickity({
            prevNextButtons: false,
            wrapAround: true, // infinite scroll
            setGallerySize: true,
            imagesLoaded: true,
            autoPlay: true,
            cellAlign: 'center',
            contain: true,
            pauseAutoPlayOnHover: true,
            cellSelector: '.slide',
            pageDots: false,
            adaptiveHeight: false,

        });

        /**
        * Flickity had a few issues and I had to add some custom code
        * to fix them. I'm not sure why these issues are happening.
        * - the sliderNav is not positioned correctly
        * - the video element doesn't get the correct height
        * - the slider doesn't reposition correctly when the lightbox is opened
        *
        * Functions added:
        * - custom nav buttons
        * - Updated captions on slide change
        */

        if ($slider.length) {
            let flkty = $slider.data('flickity');
            const $sliderNav = $('.custom-navigation');
            let $caption = flkty.selectedElement.dataset.caption;
            const $magnify = $('.magnify');

            /**
            * Add the caption to the first slide on page load
            */
            $('.js-caption').text($caption);

            /**
            * On slide change, update the caption with data from 'data-caption' attribute
            */
            $slider.on('change.flickity', function () {
                let $caption = flkty.selectedElement.dataset.caption;
                $('.js-caption').text($caption);
            });

            /**
            * Add position to video element.
            * The video is positioned to the top of the slide by default
            * We're positioning it to the bottom of the slide by adding a class to the parent container
            */
            if ($('.slide video').length) {
                $('.slide video').parent().addClass('video-slide');
            }


            /**
            * Fix for positioning of sliderNav above slider
            * This has to do with the load order of the DOM.
            */
            if ($sliderNav.length) {
                $sliderNav.detach();
                $slider.append($sliderNav);
            }

            /**
            * On click of the custom slider navigation
            * buttons, navigate to the slide
            */

            $('.nav-next').on('click', function () {
                $slider.flickity('next');
            });
            $('.nav-prev').on('click', function () {
                $slider.flickity('previous');
            });


            /**
            * On click .magnify class, toggle the lightbox
            */

            $magnify.on('click', function () {
                $slider.toggleClass('grow');
                $slider.flickity('reloadCells');

                // if the slider is exanded (which it has on pageload)
                // make sure the x icon is showing
                if ($slider.hasClass('grow')) {
                    $(this).text('✕');
                }
                // else, make sure the magnify icon is showing
                else {
                    $(this).text('☐');
                    $slider.flickity('resize');
                    docHeight = docHeight + allProjectsHeight;
                    console.log('Document height now is: ', docHeight);

                }
            });

            /**
            * On window resize, resize the slider
            */
            $(window).on('resize', function () {
                $slider.flickity('reposition');
                $slider.flickity('reloadCells');
            });


        } // end if $slider.length

    });
})(jQuery);