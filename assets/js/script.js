const threads = [...document.querySelectorAll('.project-line')]
const filters = {
    searchText: ''
}

const renderThreads = function (threads, filters) {
    const filteredThreads = threads.filter(function (thread) {
        return thread.textContent.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    
    // empty main container
    document.querySelector('.projects').innerHTML = ''
    
    filteredThreads.forEach(function (thread) {
        const threadDiv = document.createElement('div')
        threadDiv.classList.add('project');
        document.querySelector('.projects').appendChild(threadDiv)
        document.querySelector('.project').appendChild(thread)
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
