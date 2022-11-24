'USE STRICT'
///////////////////////////////////////////////////////////////////////////////////////////////

// This is called when page loads
function initGame() {
    console.log('hello')
    gBoard = buildBoard()
       addMines(gBoard)
     // renderBoard(gBoard, '.board-container')
    gGame.isOn = true
}



//💣

//////////////////////////////////////////////////
//Builds the board 
var gBoard =buildBoard(4,4) 
 console.table(gBoard)

 function buildBoard(rowsCount, colsCount) {
     
     var board = []
     for (var i = 0; i < rowsCount; i++) {
         board[i] = []
         for (var j = 0; j < colsCount; j++) {
             board[i][j] = getRandomInt(1, 4)
            }
            gBoard +=board
        }
        
        return board
    }
   
    
    ///////////////////////////////////////////////////////////////////////////////////////////////
    //Set mines at random locations (not working)
  /*  var gBomb
    var randIdx = getRandomInt(1, 4)
    function addMines( board){
        gBomb = {
            location: {
                i: randIdx
                j: randIdx
                
                
            },
            // is shown:true
        }    
        gBoard[gBomb.location.i][gBomb.location.j] =bomb    
        //   gBoard.splice([randIdx][randIdx], 1,bomb)
        
        
    }
    */
   const bomb = '💣' 
   var gBomb
    function addMines(gBoard) {
    // DONE: initialize gPacman...
    gbomb = {
        location: {
            i: 2,
            j: 2
        },
       
    }
    gBoard[gbomb.location.i][gbomb.location.j] = bomb

}
    
    

    
    
    // console.log('💣')
    //console.log('randIdx:', randIdx)
    
    //console.log('gmat[randIdx][randIdx]', gmat[randIdx][randIdx])
    
    // var X= +prompt('how much mines?')
    // gBoard [randIdx][randIdx] = '💣'
    
    //   mat[randIdx][randIdx].
    
    

   ///////////////////////////////////////////////////////////////////////////////////// 
    
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////////////
   
    var Count =setMinesNegsCount(gBoard,i,j)
    

function setMinesNegsCount(gBoard, rowIdx, colIdx) {
    //Count mines around each cell and set the cell's minesAroundCount.
    var bombCount = 0
    for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {

        if (i < 0 || i >= gBoard.length) continue

        for (var j = colIdx - 1; j <= colIdx + 1; j++) {
            if (i=== rowIdx && j === colIdx) continue
            if (j < 0 || j >= gBoard[0].length) continue
            var currCell = gBoard[i][j]
            if (currCell ===bomb) bombCount++

        }
    }
    console.log('bombCount:', bombCount)
    return bombCount
}

///////////////////////////////////////////////////////////////////////////////////////////////////

        
        
      //  function renderBoard(board) Render the board as a<table> to the page
        
function renderBoard(mat, selector) {

}

function renderCell(location, value) {
    // Select the elCell and set the value
    const elCell = document.querySelector(`.cell-${location.i}-${location.j}`)
    elCell.innerHTML = value
}

 ///////////////////////////////////////////////////////////////////////////////////////////////////       
        function  cellClicked(elCell, i, j) //Called when a cell(td) is clicked
        
        
  /////////////////////////////////////////////////////////////////////////////////////////////////////////      
        function cellMarked(elCell)// Called on right click to mark a cell(suspected to be a mine)
        //Search the web(and  implement) how to hide the context menu on right click
        
        
     ////////////////////////////////////////////////////////////////////////////////////////////////////////   
        function checkGameOver() //Game ends when all mines are marked, and all the other cells are shown
        
        
        
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
        function expandShown(board, elCell, i, j)
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
        
