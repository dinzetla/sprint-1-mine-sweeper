'USE STRICT'
///////////////////////////////////////////////////////////////////////////////////////////////

 //FUNCTION initGame(){}// This is called when page loads


/*gBoard = A Matrix 
containing cell objects:
Each cell: {
    minesAroundCount: 4,
        isShown: false,
            isMine: false,
                isMarked: true

}
The model
gLevel = {
    SIZE: 4,
    MINES: 2
};
This is an object by which the 
board size is set(in this case:
    4x4 board and how many mines 
to put)
gGame = {
    isOn: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0

//💣
}
*/

 var gmat =buildBoard(4,4) //Builds the board 
  
     //Set mines at random locations
     function buildBoard(rowsCount, colsCount) {
     
         var mat = []
         for (var i = 0; i < rowsCount; i++) {
             mat[i] = []
             for (var j = 0; j < colsCount; j++) {
                 mat[i][j] = getRandomInt(1, 8)
                }
                gmat +=mat
            }
            
            return mat
        }

       // console.log('💣')
        //console.log('randIdx:', randIdx)
        //console.log('gmat[randIdx][randIdx]', gmat[randIdx][randIdx])
var X= +prompt('how much mines?')

 randIdx += getRandomInt(1,4)
function addMines( ){
   // var lmine = x * '💣'
    gmat[randIdx][randIdx] = '💣'
      //  var randIdx = getRandomInt(1, 4)
//gmat[randIdx][randIdx] = '💣'
     //   mat[randIdx][randIdx].
//gmat.splice(gmat[randIdx][randIdx], 1,555)
        }
     console.table(gmat)
     
   
    
    
    
     
     FUNCTION setMinesNegsCount()  //Return the created board
     
     
     
     FUNCTION setMinesNegsCount(board) //Count mines around each cell and set the cell's 
     //minesAroundCount.
     
     
     FUNCTION renderBoard(board) //Render the board as a<table> to the page
     
     
     FUNCTION  cellClicked(elCell, i, j) //Called when a cell(td) is clicked
     
     
     
     FUNCTION cellMarked(elCell)// Called on right click to mark a cell(suspected to be a mine)
     //Search the web(and  implement) how to hide the context menu on right click
     
     
     
     FUNCTION checkGameOver() //Game ends when all mines are marked, and all the other cells are shown
     
     
     
     
     FUNCTION expandShown(board, elCell, i, j)
     /*When user clicks a cell with no 
     mines around, we need to open 
     not only that cell, but also its
     neighbors.
     NOTE: start with a basic 
     implementation that only opens 
     the non - mine 1st degree
     neighbors
     BONUS: if you have the time
     later, try to work more like the 
     real algorithm(see description 
        at the Bonuses section below*/
        
        //////////////////////////////////////////////////////
        var grid = document.getElementById("grid");
        var testMode = false; //Turn this variable to true to see where the mines are
        generateGrid();
        
        function generateGrid() {
            
            grid.innerHTML = "";
            for (var i = 0; i < rowscount.length; i++) {
                row = grid.insertRow(i);
                for (var j = 0; j < 10; j++) {
            cell = row.insertCell(j);
            cell.onclick = function () { clickCell(this); };
            var mine = document.createAttribute("data-mine");
            mine.value = "false";
            cell.setAttributeNode(mine);
        }
    }
    addMines();
}


function addMines() {
    //Add mines randomly
    for (var i = 0; i < 20; i++) {
        var row = Math.floor(Math.random() * 10);
        var col = Math.floor(Math.random() * 10);
        var cell = grid.rows[row].cells[col];
        cell.setAttribute("data-mine", "true");
        if (testMode) cell.innerHTML = "X";
    }
}

/*function revealMines() {
    //Highlight all mines in red
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            var cell = grid.rows[i].cells[j];
            if (cell.getAttribute("data-mine") == "true") cell.className = "mine";
        }
    }
}*/

function checkLevelCompletion() {
    var levelComplete = true;
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            if ((grid.rows[i].cells[j].getAttribute("data-mine") == "false") && (grid.rows[i].cells[j].innerHTML == "")) levelComplete = false;
        }
    }
    if (levelComplete) {
        alert("You Win!");
        revealMines();
    }
}

function clickCell(cell) {
    //Check if the end-user clicked on a mine
    if (cell.getAttribute("data-mine") == "true") {
        revealMines();
        alert("Game Over");
    } else {
        cell.className = "clicked";
        //Count and display the number of adjacent mines
        var mineCount = 0;
        var cellRow = cell.parentNode.rowIndex;
        var cellCol = cell.cellIndex;
        //alert(cellRow + " " + cellCol);
        for (var i = Math.max(cellRow - 1, 0); i <= Math.min(cellRow + 1, 9); i++) {
            for (var j = Math.max(cellCol - 1, 0); j <= Math.min(cellCol + 1, 9); j++) {
                if (grid.rows[i].cells[j].getAttribute("data-mine") == "true") mineCount++;
            }
        }
        cell.innerHTML = mineCount;
        if (mineCount == 0) {
            //Reveal all adjacent cells as they do not have a mine
            for (var i = Math.max(cellRow - 1, 0); i <= Math.min(cellRow + 1, 9); i++) {
                for (var j = Math.max(cellCol - 1, 0); j <= Math.min(cellCol + 1, 9); j++) {
                    //Recursive Call
                    if (grid.rows[i].cells[j].innerHTML == "") clickCell(grid.rows[i].cells[j]);
                }
            }
        }
        checkLevelCompletion();
    }
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    }
}////////////////////////////////////////////////////////////////////////