const header = document.querySelector('.menu-header-menu-container');
// 1st three lines position the filters to the right
const filterList = document.querySelector('.js-filters');
const lastMenuItem = document.querySelector('.main-menu').lastElementChild;
lastMenuItem.append(filterList);
const all_projects = document.querySelector('.projects');
const left_over = document.querySelector('.leftover-projects');
const mobile_menu_trigger = document.querySelector('.mobile-menu');
const main_menu = document.querySelector(".menu-header-menu-container");
const sortKeywords = [];

/* when clicking on js-sorting-threads-toggle toggle a class show/hide */
const sortingThreadsToggle = document.querySelector('.js-sorting-threads-toggle a')
if (sortingThreadsToggle) {
    sortingThreadsToggle.addEventListener('click', e => {
        e.preventDefault()
        e.target.nextSibling.classList.toggle('pinned')
    })
}

document.querySelectorAll('.filter__link').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault()

        const filter = e.currentTarget
        filter.classList.toggle('active')

        const filterText = filter.textContent.toLowerCase();
        // if the filterText is in the sortKeywords array, remove it
        if(sortKeywords.includes(filterText)) {
            sortKeywords.splice(sortKeywords.indexOf(filterText), 1);
        }
        // else add it to the array
        else {
            sortKeywords.push(filterText);
        }


        document.querySelectorAll('.projects .project-line a').forEach(a => {
            const project = a.closest('.project-line');
            left_over.appendChild(project);

            // loop over the sortKeywords array and see if the project has any of the keywords
            sortKeywords.forEach(sort => {
                if (a.dataset.tag === undefined) return

                if (a.dataset.tag.trim().split(/\s+/).includes(sort) ) {
                    all_projects.appendChild(project)
                }
            })

        })
       if(filterList.getElementsByClassName('active').length > 0) {
            document.querySelector('.clear-active').classList.remove("hide-this");
       }
       else {
            document.querySelector('.clear-active').classList.add("hide-this");
       }
        if(!sortKeywords.length) document.querySelectorAll('.projects .project-line').forEach(project => {
            all_projects.appendChild(project);
        });

    });
});

/* Filters: Clear All  */
function clear_all() {
    document.querySelectorAll('.filter__link').forEach(link => {
        link.classList.remove('active');
    });

    document.querySelectorAll('.projects .project-line').forEach(project => {
        all_projects.appendChild(project);
    });

    document.querySelector('.js-filters .clear-active').classList.add('hide-this');
}


// function searchPosts(e) {

// };
const searchPosts = document.querySelector('#search-posts');
if (searchPosts) {
    document.querySelector('#search-posts').addEventListener("input", (e) => {
        e.preventDefault()
        if (e.which == 13) {
            return
        }
        let countChar = e.target.value.length
        if (countChar > 2) {
            // get the search string and make sure it is lowercase and has no spaces
            let searchString = e.currentTarget.value.trim().toLowerCase()
            // loop over the projects and see if the search string is in the title content
            document.querySelectorAll('.projects .project-line').forEach(project => {
                let title = project.textContent.toLowerCase()
                if (!title.includes(searchString)) {
                    project.classList.add('d-none')
                } else {
                    project.classList.remove('d-none')
                }
            })
        }
        // else if the search string is less than 3 characters, show all projects
        else {
            document.querySelectorAll('.projects .project-line').forEach(project => {
                project.classList.remove('d-none')
            })
        }
    });
}


/* Mobile Menu: Scroll */
var lastScrollTop = 0;
window.addEventListener("scroll", function() {

    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"

    if (st > lastScrollTop && lastScrollTop > 100){
        document.querySelector('header').classList.add("down-cut-half");
    } else {

        document.querySelector('header').classList.remove("down-cut-half");
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);


(function ($) {
    $(document).ready(function ($) {

        /* Mobile Menu: open mobile */
        $('.js-toggle-mobile-menu').on('click', function(e) {
            e.preventDefault();
            $('.menu-main-menu-container').toggleClass('open');
            $('.js-toggle-mobile-menu').toggleClass('open');

        })

        /* Initialise Flickity.js */
        let $slider = $('.slides-container');

        $slider.flickity({
            prevNextButtons: false,
            wrapAround: true, // infinite scroll
            imagesLoaded: true,
            autoPlay: false,
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
            let flkty        = $slider.data('flickity');
            const $sliderNav = $('.custom-navigation');
            let flktyHeight  = flkty.maxCellHeight;
            let $caption     = flkty.selectedElement.dataset.caption;
            const $magnify   = $('.magnify');

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
            * Add height to video element. Video doesn't get the correct height and therefore isn't shown in the slider.
            * Resize the slider to make sure the video is shown.
            */
            if ($('.slide video').length) {
                $('.slide video').css('height', flktyHeight).parent().addClass('video-slide');
                $slider.flickity('resize');
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
                $slider.toggleClass('grow').flickity('resize');
                if ($slider.hasClass('grow')) {
                    $(this).text('✕');
                    $(this).addClass('close-big-slider');
                }
                else {
                    $slider.flickity('resize');
                    // $('video').css('height', 'unset');
                    $(this).text('☐');
                }
            });

        }

    });
})(jQuery);




Flickity.prototype._createResizeClass = function () {
    this.element.classList.add('flickity-resize');
};

Flickity.createMethods.push('_createResizeClass');

var resize = Flickity.prototype.resize;
Flickity.prototype.resize = function () {
    this.element.classList.remove('flickity-resize');
    resize.call(this);
    this.element.classList.add('flickity-resize');
};
