const header = document.querySelector('.menu-header-menu-container');
// 1st three lines position the filters to the right
const filterList = document.querySelector('.js-filters'); 
const lastMenuItem = document.querySelector('.main-menu').lastElementChild;
lastMenuItem.append(filterList);
const all_projects = document.querySelector('.projects');
const left_over = document.querySelector('.leftover-projects');

const sortKeywords = [];

document.querySelectorAll('.filter__link').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector('.search-field.js-search-field').value = "";

        const filter = e.currentTarget;
        filter.classList.toggle('active');

        const filterText = filter.textContent.toLowerCase();
        if(sortKeywords.includes(filterText)) {
            sortKeywords.splice(sortKeywords.indexOf(filterText), 1); 
        }
        else {
            sortKeywords.push(filterText); 
        }
        
        document.querySelectorAll(`.projects .project-line a`).forEach(a => {
            const project = a.closest('.project-line');
            left_over.appendChild(project);

            sortKeywords.forEach(sort => {
                if(a.getAttribute('data-tag').trim().split(/\s+/).includes(sort)) {
                    all_projects.appendChild(project);
                } 
            });
            
        });
       // console.log(filterList.getElementsByClassName('active').length);
       if(filterList.getElementsByClassName('active').length > 0) {
        document.querySelector('.clear-active').classList.remove("hide-this");
       }
       else {
        document.querySelector('.clear-active').classList.add("hide-this");
       }
      // console.log(sortKeywords.length);
        if(!sortKeywords.length) document.querySelectorAll(`.projects .project-line`).forEach(project => {
            all_projects.appendChild(project);
        });

    });
});

function clear_all() {
    
        document.querySelectorAll('.filter__link').forEach(link => {
                link.classList.remove('active');
            });

        document.querySelectorAll(`.projects .project-line`).forEach(project => {
            all_projects.appendChild(project);
        });

        document.querySelector(".js-filters .clear-active").classList.add("hide-this");
        
        
}


if(document.querySelector('.search-field.js-search-field') !== null) {


document.querySelector('.search-field.js-search-field').addEventListener('input', e => {
   
    clear_all();
   
    const userInput = e.currentTarget.value.trim().toLowerCase(); 

   
    document.querySelectorAll(`.projects .project-line`).forEach(project => {
        const text = project.textContent.toLowerCase();
        if(!text.includes(userInput)) {
            left_over.appendChild(project);
        }
        else {
            all_projects.appendChild(project);
        }
    });
});


}

var lastScrollTop = 0;

window.addEventListener("scroll", function(){

    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"

  if (st > lastScrollTop && lastScrollTop > 100){
     //console.log("scrolling down");
     document.querySelector('header').classList.add("down-cut-half");
   } else {
    //console.log("scrolling up");
    document.querySelector('header').classList.remove("down-cut-half");
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);

