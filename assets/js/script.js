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
sortingThreadsToggle.addEventListener('click', e => {
    e.preventDefault()
    e.target.nextSibling.classList.toggle('pinned')
})


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
        const $sliderNav = $('.custom-navigation');
        let $sliderNavItems = $sliderNav.find('.nav-item');

        $slider.flickity({
            prevNextButtons: false,
            wrapAround: true,
            autoPlay: true,
            pauseAutoPlayOnHover: true,
            cellSelector: '.slide',
            pageDots: false,
            fade: true,
            adaptiveHeight: true,
        });

        /**
         * Add the caption to the first slide on page load
         */
        let flkty = $slider.data('flickity');
        let $caption = flkty.selectedElement.dataset.caption;
        $('.js-caption').text($caption);

        /**
        * On slide change, update the caption with data from 'data-caption' attribute
        */
        $slider.on('change.flickity', function () {
            let $caption = flkty.selectedElement.dataset.caption;
            $('.js-caption').text($caption);
        });

        $slider.on('ready.flickity', function () {
            $sliderNav.addClass('show');
        });

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
        if ($sliderNav.length) {
            $sliderNavItems.on('click', function () {
                let index = $(this).index();
                $slider.flickity('select', index);
            });
        }

        /**
        * On click .magnify class, open the lightbox
        */
        const $magnify = $('.magnify');
        if ($magnify.length) {
            $magnify.on('click', function () {
                $slider.toggleClass('grow');
                $slider.flickity('resize');
                if ($slider.hasClass('grow')) {
                    $(this).text('✕');
                }
                else {
                    $(this).text('☐');
                }
            });
        }

    });
})(jQuery);