/**
 * Custom JS for the theme.
 * Mixed bag of JS and jQuery.
 * - menu (jQuery)
 * - search functionality
 * - filter and sorting functionality
 * - flickity.js (jQuery)
 */

/**
 * Filter Vars
 */
const filterList = document.querySelector('.js-filters');
const lastMenuItem = document.querySelector('.main-menu').lastElementChild;
lastMenuItem.append(filterList);
const filters = document.querySelectorAll('.filter__link');
const sortKeywords = [];
const allProjects = document.querySelector('.projects');
const leftOver = document.querySelector('.leftover-projects');

/**
 * Menu Vars
 */
const header = document.querySelector('.menu-header-menu-container');

/**
 * Filter and Sorting Functionality.
 */

/* when clicking on js-sorting-threads-toggle toggle a class show/hide */
const sortingThreadsToggle = document.querySelector('.js-sorting-threads-toggle a');
if (sortingThreadsToggle) {
    sortingThreadsToggle.addEventListener('click', e => {
        e.preventDefault();
        e.target.nextSibling.classList.toggle('pinned');
    })
}

// if any of the filters are active and sortingThreadsToggle has class pinned,
// then add class selection to the sortingThreadsToggle

filters.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        const filter = e.currentTarget;
        filter.classList.toggle('active');

        const filterText = filter.textContent.toLowerCase();
        // if the filterText is in the sortKeywords array, remove it
        if (sortKeywords.includes(filterText)) {
            sortKeywords.splice(sortKeywords.indexOf(filterText), 1);
        }
        // else add it to the array
        else {
            sortKeywords.push(filterText);
        }

        document.querySelectorAll('.projects .project-line a').forEach(a => {
            const project = a.closest('.project-line');
            leftOver.appendChild(project);

            // loop over the sortKeywords array and see if the project has any of the keywords
            sortKeywords.forEach(sort => {
                if (a.dataset.tag === undefined) return;

                if (a.dataset.tag.trim().split(/\s+/).includes(sort)) {
                    allProjects.appendChild(project);
                }
            })

        })
        if (filterList.getElementsByClassName('active').length > 0) {
            document.querySelector('.clear-active').classList.remove("hide-this");
        }
        else {
            document.querySelector('.clear-active').classList.add("hide-this");
        }
        if (!sortKeywords.length) document.querySelectorAll('.projects .project-line').forEach(project => {
            allProjects.appendChild(project);
        });

    });
});

/* Filters: Clear All  */
function clear_all() {
    document.querySelectorAll('.filter__link').forEach(link => {
        link.classList.remove('active');
    });

    document.querySelectorAll('.projects .project-line').forEach(project => {
        allProjects.appendChild(project);
    });

    document.querySelector('.js-filters .clear-active').classList.add('hide-this');
}

/**
 * Search Functionality.
 */

const searchPosts = document.querySelector('#search-posts');
if (searchPosts) {
    document.querySelector('#search-posts').addEventListener("input", (e) => {
        e.preventDefault();
        if (e.which == 13) {
            return;
        }
        let countChar = e.target.value.length;
        if (countChar > 2) {
            // get the search string and make sure it is lowercase and has no spaces
            let searchString = e.currentTarget.value.trim().toLowerCase();
            // loop over the projects and see if the search string is in the title content
            document.querySelectorAll('.projects .project-line').forEach(project => {
                let title = project.textContent.toLowerCase();
                if (!title.includes(searchString)) {
                    project.classList.add('d-none');
                } else {
                    project.classList.remove('d-none');
                }
            })
        }
        // else if the search string is less than 3 characters, show all projects
        else {
            document.querySelectorAll('.projects .project-line').forEach(project => {
                project.classList.remove('d-none');
            });
        }
    });
}

/**
 * Menu Functionality.
 */

/* Mobile Menu: Scroll */
var lastScrollTop = 0;
window.addEventListener("scroll", function () {

    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"

    if (st > lastScrollTop && lastScrollTop > 100) {
        document.querySelector('header').classList.add("down-cut-half");
    } else {

        document.querySelector('header').classList.remove("down-cut-half");
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);


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

