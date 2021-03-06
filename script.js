// Declare global variables
let numRows = 0;
let numCols = 0;
let rowArr = [];
let colorSelected; 
let grid = document.getElementById("grid");

// Add a row
function addR() {

    if (numRows === 0 && numCols === 0) {   // incase empty
        rowArr[0] = grid.insertRow(0);
        rowArr[0].insertCell(0).setAttribute("onclick","style.backgroundColor=colorSelected");
        numCols++;
        numRows++;
    } else {                                // Add a row with the amount of columns  
        rowArr[numRows] = grid.insertRow(0);
        for(i=0; i<numCols; i++) {
            td = rowArr[numRows].insertCell(0);     
            td.setAttribute("onclick","style.backgroundColor=colorSelected") 
        }
        numRows++;
    }
}

// Add a column
function addC() {

    if (numRows === 0 && numCols === 0) {   // incase empty
        rowArr[0] = grid.insertRow(0);
        rowArr[0].insertCell(0).setAttribute("onclick","style.backgroundColor=colorSelected");
        numRows++;
        numCols++;
    } else {                                // add column with amount of rows
        for(i=0; i< numRows; i++) {
            td = rowArr[i].insertCell(0);
            td.setAttribute("onclick","style.backgroundColor=colorSelected")
        }
        numCols++
    }
}

// Remove a row
function removeR() {
    if (numRows > 0 && numCols > 0) {   // if there exists a grid
        grid.deleteRow(0);              // delete the row
        numRows--;
        if(numRows === 0){              
            numCols = 0
        }
    }   
}

// Remove a column
function removeC() {
    if(numRows > 0 && numCols >0) {     // if there exist a grid
        for (i=0; i< numRows;i++)   
        {
            rowArr[i].deleteCell(0);    // delete the column
        }
        numCols--;
        if(numCols == 0){
            numRows = 0;
        }
    }
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
 
    let td = document.querySelectorAll("td");

    for(i = 0; i < td.length; i++) {
        if(td.item(i).style.backgroundColor == "" || td.item(i).style.backgroundColor == "white" ){ // if no background color 
            td.item(i).style.backgroundColor = colorSelected;   // fill background color 
        }
    } 
}

// Fill all cells
function fillAll(){

     let td = document.querySelectorAll("td");

     for(i = 0; i < td.length; i++) {                       // set all grids to selected color
        td.item(i).style.backgroundColor = colorSelected;   
     } 
}

// Clear all cells
function clearAll(){

    let td = document.querySelectorAll("td");

    for(i = 0; i < td.length; i++) {
       td.item(i).style.backgroundColor = "";               // set all grids to no color
    } 
}