/**
 * Custom JS for the theme.
 * V2.0.0.
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
const anchorLink = document.querySelector('.js-sorting-threads-toggle a.menu-link');
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
// if any of the filters have class active and sortingThreadsToggle has class pinned,
// then add class selection to the sortingThreadsToggle
const sortingThreadsToggle = document.querySelector('.js-sorting-threads-toggle a');
if (sortingThreadsToggle) {
    sortingThreadsToggle.addEventListener('click', e => {
            e.target.nextSibling.classList.toggle('pinned');
        });
}

filters.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        const filter = e.currentTarget;
        filter.classList.toggle('active');

        // check if sortingThreadsToggle has class pinned
        if (filterList.classList.contains('pinned')) {
            // add class selection to the sibling before filterList
            anchorLink.classList.toggle('link-is-active');
            if (anchorLink.classList.contains('link-is-active')) {
                // change the href to back to homepage
                anchorLink.href = '/';
            } else { // else remove class selection
                anchorLink.href = '#';
            }
        }

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
            // add project to leftOver
            leftOver.appendChild(project);

            // loop over the sortKeywords array and see if the project has any of the keywords
            sortKeywords.forEach(sort => {
                if (a.dataset.tag === undefined) return;
                // add them to .projects
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
        if (!sortKeywords.length) {
            clear_all();
        }
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

    // if leftOver has any children, remove them and add them to allProjects
    if (leftOver.hasChildNodes()) {
        while (leftOver.firstChild) {
            allProjects.appendChild(leftOver.firstChild);
        }
    }
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
    // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    var st = window.pageYOffset || document.documentElement.scrollTop;

    if (st > lastScrollTop && lastScrollTop > 100) {
        document.querySelector('header').classList.add("down-cut-half");
    } else {

        document.querySelector('header').classList.remove("down-cut-half");
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);