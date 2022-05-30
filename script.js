const threads = [...document.querySelectorAll('.project-line')]
const filters = {
    searchText: ''
}

const renderThreads = function (threads, filters) {
    const filteredThreads = threads.filter(function (thread) {
        return thread.textContent.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    // empty main container
    document.querySelector('.main-container').innerHTML = ''
    
    filteredThreads.forEach(function (thread) {
        const threadEl = document.createElement('p')
        threadEl.textContent = thread.textContent
        document.querySelector('.main-container').appendChild(threadEl)
    })
}

renderThreads(threads, filters)

document.querySelector('.js-search-field').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    

        setTimeout(
            renderThreads(threads, filters),
            400
            )
        
    
})
