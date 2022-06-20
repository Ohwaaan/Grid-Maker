// Declare global variables
let numRows = 0;
let numCols = 0;
let rowArr = [];
let colorSelected; 
let grid = document.getElementById("grid");

// Add a row
function addR() {

    if (numRows === 0 && numCols === 0){  //incase empty
        rowArr[0]
        rowArr[0] = grid.insertRow(0);
        rowArr[0].insertCell(0);
        numCols++;
        numRows++;
    } else {                            //Add a row with the amount of columns  
        rowArr[numRows] = grid.insertRow(0);
        for(i=0; i<numCols; i++) {
            rowArr[numRows].insertCell(0);      
        }
        numRows++;
    }
}

// Add a column
function addC() {

    if (numRows === 0 && numCols === 0){  //incase empty
        rowArr[0] = grid.insertRow(0);
        rowArr[0].insertCell(0);
        numRows++;
        numCols++;
    } else {                            //add column with amount of rows
        for(i=0; i< numRows; i++) {
            rowArr[i].insertCell(0);
        }
        numCols++
    }
}

// Remove a row
function removeR() {
    if (numRows > 0 && numCols > 0) {   //if there exists a grid
        grid.deleteRow(0);              //delete the row
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
            rowArr[i].deleteCell(0);    //delete the column
        }
        numCols--
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
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){

     let td = document.querySelectorAll("td");

     for(i = 0; i < td.length; i++) {
        td.item(i).style.backgroundColor = colorSelected;
     } 
}

// Clear all cells
function clearAll(){
    let td = document.querySelectorAll("td");

    for(i = 0; i < td.length; i++) {
       td.item(i).style.backgroundColor = "white";
    } 
}