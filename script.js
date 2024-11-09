const grid = document.querySelector('.grid');
const resizeGrid = document.querySelector('.resize-grid');

function resize(number) {
    // Remove old grid items
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }

    // Update CSS variable
    grid.style.setProperty('--grid-size', number);

    // Create new grid items
    for (let i = 0; i < (number * number); i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        grid.appendChild(div);
    }
}

grid.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('grid-item')) {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
});

resizeGrid.addEventListener('click', () => {
    const size = prompt('Enter new grid size (e.g., 16 for 16x16):', 16);
    const number = parseInt(size);

    if (number && number > 0 && number <= 100) {  // validate input
        resize(number);
    } else {
        alert('Please enter a valid number between 1 and 100');
    }
});

resize(16);