const threads = [...document.querySelectorAll('.project-line')]
const filters = {
    searchText: ''
}

const renderThreads = function (threads, filters) {
    const filteredThreads = threads.filter(function (thread) {
        return thread.textContent.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    const nonfilteredThreads = threads.filter(function (thread) {
        return !thread.textContent.toLowerCase().includes(filters.searchText.toLowerCase())
    })

     //console.log(nonfilteredThreads);
     document.querySelector('.projects').innerHTML = ''
    
     const threadDiv = document.createElement('div')
     threadDiv.classList.add('project');

    filteredThreads.forEach(function (thread) {  
        // document.querySelector('.projects').appendChild(threadDiv)
        // document.querySelector('.project').appendChild(thread)
        document.querySelector('.projects').appendChild(thread)
    })

    nonfilteredThreads.forEach(function (thread) {  
        document.querySelector('.leftover-projects').appendChild(thread)
    })

    
}   


// renderThreads(threads, filters)
const searchField = document.querySelector('.js-search-field')
if (searchField) {
    searchField.addEventListener('input', function(e) {
        filters.searchText = e.target.value
        setTimeout(renderThreads(threads, filters), 400)
    })
}

// fetch inline-image by part of it's classname
// add a new classname so user doesn't have to do it.
const inlineImages = document.querySelectorAll("img[class^='wp-image-']")
inlineImages.forEach(function (inlineImage){
    inlineImage.classList.add('inline-image')
}) 

// Move filterlist to main menu because we don't know a different solution right now
const filterList = document.querySelector('.js-filters')
const lastMenuItem = document.querySelector('.main-menu').lastElementChild
lastMenuItem.append(filterList)

const filterLink = document.querySelectorAll('.filter__link')
const tag = filterLink.textContent

for (let i = 0; i < filterList.length; i++) {
    filterLink[i].addEventListener('click', function(e) {
        e.stopImmediatePropagation();
         const filteredThreads = threads.filter(function (thread) {
            return thread.textContent.toLowerCase().includes(tag.toLowerCase())
        })
         document.querySelector('.projects').innerHTML = ''
        
        filteredThreads.forEach(function (thread) {
            const threadDiv = document.createElement('div')
            threadDiv.classList.add('project');
            document.querySelector('.projects').appendChild(threadDiv)
            document.querySelector('.project').appendChild(thread)
        })
    })
}

