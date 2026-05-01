function debounce(fn, delay) {
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

const handleSearch = debounce(() => {
    const input = document.getElementById('searchTodo');
    console.log(input.value);
}, 300);
