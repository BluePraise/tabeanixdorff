const header = document.querySelector('.menu-header-menu-container');
// 1st three lines position the filters to the right
const filterList = document.querySelector('.js-filters'); 
const lastMenuItem = document.querySelector('.main-menu').lastElementChild;
lastMenuItem.append(filterList);
const left_over = document.querySelector('.leftover-projects');

const sortKeywords = [];

document.querySelectorAll('.filter__link').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
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
            project.classList.add('hide');
            project.classList.remove('sort'); 

            sortKeywords.forEach(sort => {
                if(a.getAttribute('data-tag').trim().split(/\s+/).includes(sort)) {
                    project.classList.remove('hide'); 
                    project.classList.add('sort');
                } 
            });
            
            
        });
       if(filterList.getElementsByClassName('active').length > 0) {
        document.querySelector('.clear-active').classList.remove("hide-this");
       }
       else {
        document.querySelector('.clear-active').classList.add("hide-this");
       }

        if(!sortKeywords.length) document.querySelectorAll(`.projects .project-line`).forEach(a => a.classList.remove('hide'));
    });
});

document.querySelector('.clear-active').addEventListener('click', e => {
  
    document.querySelectorAll('.filter__link').forEach(link => {
           
            link.classList.remove('active');
        });

    document.querySelectorAll(`.projects .project-line`).forEach(project => {
            project.classList.remove('hide');
    });

    e.target.classList.add("hide-this");
    
});


if(document.querySelector('.search-field.js-search-field') !== null) {


document.querySelector('.search-field.js-search-field').addEventListener('input', e => {
    const userInput = e.currentTarget.value.trim().toLowerCase(); 

    const sortedLinks = document.querySelector('.filter__link.active');
    document.querySelectorAll(`.projects .project-line${sortedLinks ? '.sort' : ''}`).forEach(project => {
        const text = project.textContent.toLowerCase();
        if(!text.includes(userInput)) {
            project.classList.add('hide');
        }
        else {
            project.classList.remove('hide');
        }
    });
    if(document.querySelectorAll('.projects .hide') !== null) {
        let first_hide = document.querySelectorAll('.projects .hide');
        document.querySelectorAll('.projects .project-line').forEach(b => {
            b.style.marginTop = "8px";
            }
        )
             first_hide[0].style.marginTop = "50px";
        
    }
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

