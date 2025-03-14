const grid_items = document.querySelectorAll('.grid-item');
const grid = document.getElementById('grid');

grid_items.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('selected')
    })
})

document.addEventListener('click', (event) => {
    if(!grid.contains(event.target)) {
        grid_items.forEach(item => {
            item.classList.remove('selected');
        })
    }
})