// 1st three lines position the filters to the right
const filterList = document.querySelector('.js-filters'); 
const lastMenuItem = document.querySelector('.main-menu').lastElementChild;
lastMenuItem.append(filterList);

const $filterLinks = document.querySelectorAll('.filter__link'); 
const $searchField = document.querySelector('.search-field.js-search-field');
const sortKeywords = [];

$filterLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const filter = e.currentTarget;
        filter.classList.toggle('active');

        const filterText = filter.textContent.toLowerCase();
        sortKeywords.includes(filterText) ? sortKeywords.splice(sortKeywords.indexOf(filterText), 1) : sortKeywords.push(filterText); 
        
        const searchPhrase = $searchField.value.trim(); 
        document.querySelectorAll(`.projects .project-line${searchPhrase ? '.searched' : ''} a`).forEach(a => { 
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

        if(!sortKeywords.length) $searchField.dispatchEvent(new Event('input'));  
    });
});

const $projects = document.querySelectorAll(`.projects .project-line`);
$searchField.addEventListener('input', e => {
    const userInput = e.currentTarget.value.trim().toLowerCase(); 
    $projects.forEach(proj => proj.classList.remove('searched')); 

    const sortedLinks = document.querySelector('.filter__link.active');
    document.querySelectorAll(`.projects .project-line${sortedLinks ? '.sort' : ''}`).forEach(project => {   
        const text = project.textContent.toLowerCase();

        if(!text.includes(userInput)) {
            project.classList.add('hide'); 
        }
        else {
            project.classList.remove('hide');
            project.classList.add('searched'); 
        }
    });
    
}); 