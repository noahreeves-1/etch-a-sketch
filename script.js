const container = document.getElementById('container');

// let n = prompt('How many rows and columns do you want?');

let n = 16;

// function that creates rows
function createRows() {
    for (i = 0; i < n; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        container.append(row);
    }
};

createRows();

// add columns to each row
const rows = document.querySelectorAll('.row');
rows.forEach((eachRow) => {
    for (i = 0; i < n; i++) {
        let column = document.createElement('div');
        column.classList.add('column');
        eachRow.append(column);
    }
})

// function createColumns() {
//     let rows = document.querySelectorAll('row');
//     let column = document.createElement('div');
//     column.classList.add('column');
//     rows.forEach((eachRow) => {
//         eachRow.append(column);
//     })
// };

// createColumns();

console.log(container)