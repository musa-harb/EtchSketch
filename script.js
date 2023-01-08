"use strict";

const rows = 16;
const columns = 16;

createGrid(rows, columns);

function createGrid(rows, columns) {
    const container = document.querySelector('#container');
    for (let row = 0; row < rows; row++) {
        //create a div row
        const divRow = document.createElement('div');
        //add class row
        divRow.classList.add('div-row');
        //append the div row to the container
        container.appendChild(divRow);
        for (let col = 0; col < columns; col++) {
            //create a div
            const divCol = document.createElement('div');
            //add a class attribute to the div
            divCol.classList.add('div-col');
            divCol.textContent = 'col';
            //append the div to the container
            divRow.appendChild(divCol);
        }
    }
}

const divColumns = document.querySelectorAll('.div-col');

for (const divCol of divColumns) {
    divCol.addEventListener('mouseover', (e) => {
        e.target.style.color = "orange";
    })
}

