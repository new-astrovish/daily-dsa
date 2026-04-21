export function debounce(fn, delay) {
    let timer;

    return function(...args) {
        if (timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    
    }
}


function handleSearch(query) {
    return debounce(query => console.log(`Searching for: ${query}`), 1000);
}

handleSearch(e.target.value);
