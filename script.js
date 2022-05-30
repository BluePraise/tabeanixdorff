const threads = [...document.querySelectorAll('.project-line')]
const filters = {
    searchText: ''
}

const renderThreads = function (threads, filters) {
    const filteredThreads = threads.filter(function (thread) {
        // console.log(thread)
        return thread.textContent.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    
    // empty main container
    document.querySelector('.main-container').innerHTML = ''
    
    filteredThreads.forEach(function (thread) {
        const threadDiv = document.createElement('div')
        threadDiv.classList.add('project');
        document.querySelector('.main-container').appendChild(threadDiv)
        document.querySelector('.project').appendChild(thread)
    })
}

// renderThreads(threads, filters)

document.querySelector('.js-search-field').addEventListener('input', function(e) {
    filters.searchText = e.target.value
        setTimeout(
            renderThreads(threads, filters),
        400
        )
        
    
})
