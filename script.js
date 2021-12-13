// Ask the user how many grids should each side have?

// let n = prompt();
let n = 16

// create container that will hold the grid

// function that creates ROWS
function createRows() {
    const container = document.getElementById('container');
    for (i = 0; i < n; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
    }
};

createRows();

// add COLUMNS/GRIDS to each row

function createColumns() {
    const rows = document.querySelectorAll('.row');
    rows.forEach((eachRow) => {
        for (i = 0; i < n; i++) {
            let column = document.createElement('div');
            column.classList.add('column');
            eachRow.appendChild(column);
        };
    });
}

createColumns();

// adds effect where the grid gets colored in if the mouse HOVERS over it

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function colorGridRainbow() {
    const columns = document.querySelectorAll('.column');
    columns.forEach((grid) => {
        grid.addEventListener('mouseenter', e => {
            grid.style.backgroundColor = getRandomColor();
        });
    });
};

let count = 0;

function colorGridGrey() {
    const columns = document.querySelectorAll('.column');
    
    columns.forEach((grid) => {
        grid.addEventListener('mouseover', e => {
            grid.style.backgroundColor = '#3b3b3b';
        })
    })
};

colorGridGrey();
console.log('count :' + count);

// removes all children from container
function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
};

// clear grid and make grey
const classicButton = document.querySelector('.classic');

classicButton.addEventListener('click', e => {
    clearGrid();
    createRows();
    createColumns();
    colorGridGrey();
})

// clear grid and make rainbow
const rainbowButton = document.querySelector('.rainbow');

rainbowButton.addEventListener('click', e => {
    clearGrid();
    createRows();
    createColumns();
    colorGridRainbow();
})

// add a RESET button
const resetButton = document.querySelector('.reset');

resetButton.addEventListener('click', e => {
    n = prompt();
    if (n <= 0) {
        alert('It must be a positive number!');
    } else if (n <= 100) {
        clearGrid();
        createRows();
        createColumns();
        colorGridGrey();
    } else {
        alert("Please pick a number that less than or equal to 100." + "\n" +
            "\n" + "We don't want to crash the computer!");
    }
});

console.log(container);

// just checking to see what the container elements look like


// function that creates columns - OLD CAN DELETE BUT WILL KEEP FOR HISTORY
// doesn't work because I can't call the row variable from this function... maybe
// if I used const or var it could work but I used 'let'

// function createColumns() {
//     let rows = document.querySelectorAll('row');
//     let column = document.createElement('div');
//     column.classList.add('column');
//     rows.forEach((eachRow) => {
//         eachRow.append(column);
//     })
// };

// createColumns();