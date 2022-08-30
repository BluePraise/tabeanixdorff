// 1st three lines position the filters to the right
const filterList = document.querySelector('.js-filters'); 
const lastMenuItem = document.querySelector('.main-menu').lastElementChild;
lastMenuItem.append(filterList);

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

        if(!sortKeywords.length) document.querySelectorAll(`.projects .project-line`).forEach(a => a.classList.remove('hide'));
    });
});


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
    
});

