const $searchtoggle = document.querySelector('.search-field')
const threads = [...document.querySelectorAll('.project-line')]
const filters = {
    searchText: ''
}
for(const thread of threads) {
	// console.log(thread.textContent)
}
const renderThreads = function (threads, filters) {
    const filteredThreads = threads.filter(function (thread) {
    	// console.log(thread)
        return thread.textContent.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('.js-search-field').innerHTML = ''
    
    filteredThreads.forEach(function (thread) {
        const threadEl = document.createElement('p')
        threadEl.textContent = thread.textContent
        document.querySelector('main.container').appendChild(threadEl)
    })
}
console.log(filters)
renderThreads(threads, filters)

document.querySelector('.js-search-field').addEventListener('input', function(e) {
	
	filters.searchText = e.target.value
	
	if (e.target.value > 2) {
		renderThreads(threads, filters)
	}
})
