/** Debouncing is a technique that delays the execution of the function 
 * until user stops execution of the function for a specified amount of time
 */

document.querySelector('#searchBar').addEventListener('input', (event) => {
    const searchTerm = event.target.value;

    debounceHandler(searchTerm);
})

const debounce = (func, delay) => {
    let timer;

    return function(...args) {
        clearTimeout(timer);
        setTimeout(() => {
            func.apply(this, args);
        }, delay)
    }
}

const debounceHandler = debounce(searchHandler, 1000);

function searchHandler(searchTerm) {
    // Make an API call with search query
    getSearchResults(searchTerm);
}