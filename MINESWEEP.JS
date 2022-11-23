'USE STRICT'
///////////////////////////////////////////////////////////////////////////////////////////////

 //FUNCTION initGame(){}// This is called when page loads



//💣


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
      
////////////////////////////////////////////////////////////////////////