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
const sortingThreadsToggle = document.querySelector('.js-sorting-threads-toggle')
sortingThreadsToggle.addEventListener('click', e => {
    e.preventDefault()
    e.target.nextSibling.classList.toggle('show')
})


document.querySelectorAll('.filter__link').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault()

        const filter = e.currentTarget
        filter.classList.toggle('active')

        const filterText = filter.textContent.toLowerCase();
        if(sortKeywords.includes(filterText)) {
            sortKeywords.splice(sortKeywords.indexOf(filterText), 1);
        }
        else {
            sortKeywords.push(filterText);
        }

        document.querySelectorAll('.projects .project-line a').forEach(a => {
            const project = a.closest('.project-line');
            left_over.appendChild(project);

            sortKeywords.forEach(sort => {
                // if (a.getAttribute('data-tag') == null) return;
                if (a.getAttribute('data-tag').trim().split(/\s+/).includes(sort) ) {
                    all_projects.appendChild(project);
                }
            });

        });
       if(filterList.getElementsByClassName('active').length > 0) {
        document.querySelector('.clear-active').classList.remove("hide-this");
       }
       else {
        document.querySelector('.clear-active').classList.add("hide-this");
       }
        if(!sortKeywords.length) document.querySelectorAll(`.projects .project-line`).forEach(project => {
            all_projects.appendChild(project);
        });

    });
});

/* Filters: Clear All  */
function clear_all() {
    document.querySelectorAll('.filter__link').forEach(link => {
        link.classList.remove('active');
    });

    document.querySelectorAll(`.projects .project-line`).forEach(project => {
        all_projects.appendChild(project);
    });

    document.querySelector(".js-filters .clear-active").classList.add("hide-this");
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
    });


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
                document.querySelectorAll('.projects .project-line').forEach( project => {
                    let title = project.textContent.toLowerCase()
                    if (!title.includes(searchString) ) {
                        project.classList.add('d-none')
                    } else {
                        project.classList.remove('d-none')
                    }
                })
            }
            // else if the search string is less than 3 characters, show all projects
            else {
                document.querySelectorAll('.projects .project-line').forEach( project => {
                    project.classList.remove('d-none')
                })
            }
        });
    }

})(jQuery);

