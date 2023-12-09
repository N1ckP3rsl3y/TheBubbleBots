document.addEventListener('DOMContentLoaded', function () {
    const gameBoard = document.querySelector("#gameboard");
    gameBoard.setAttribute('data-testid', 'gameboard');

const playerDisplay = document.querySelector("#player");
const infoDisplay = document.querySelector("#info-display");
const textExplanation = document.getElementsByClassName("textExplanation")[0];
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
var diffSlider = document.getElementById("difficultlevel");
var verboseSlider = document.getElementById("verbSlider");
var explanSpeedSlider = document.getElementById("explanSlider");
var output = document.getElementById("demo");

let selectedSquare;
let clickTarget;
let max_search_depth = 2;
let explan_depth = 0;
let explanSpeed = 0;
let explanElements = [];

const width = 8
const height = 8

const board =
    [
    ['empty', 'black', 'empty', 'black', 'empty', 'black', 'empty', 'black'],
    ['black', 'empty', 'black', 'empty', 'black', 'empty', 'black', 'empty'],
    ['empty', 'black', 'empty', 'black', 'empty', 'black', 'empty', 'black'],
    ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
    ['red', 'empty', 'red', 'empty', 'red', 'empty', 'red', 'empty'],
    ['empty', 'red', 'empty', 'red', 'empty', 'red', 'empty', 'red'],
    ['red', 'empty', 'red', 'empty', 'red', 'empty', 'red', 'empty'],
    ]

createBoard();

function createBoard() {
    let id = 0;

    const gameBoard = document.querySelector("#gameboard");
    gameBoard.setAttribute('data-testid', 'gameboard');

    board.forEach((row) => {
        row.forEach((piece) => {
          const square = document.createElement('div');
          square.classList.add('square');
          square.setAttribute('square-id', id);

          const rowIndex = Math.floor((63 - id) / 8) + 1;
          const colIndex = id % 8;

          if (rowIndex % 2 === 0) {
            square.classList.add(colIndex % 2 === 0 ? "dark" : "light");
          } else {
            square.classList.add(colIndex % 2 === 0 ? "light" : "dark");
          }

          if (piece === 'red') {
            square.innerHTML = "<img draggable=true class='redPiece' src='redPiece.png' alt='Red Piece'>";
            square.firstChild?.classList.add('red');
            square.firstChild?.setAttribute('draggable', true);
          } else if (piece === 'black') {
            square.innerHTML = "<img draggable=true class='blackPiece' src='blackPiece.png' alt='Black Piece'>";
            square.firstChild?.classList.add('black');
            square.firstChild?.setAttribute('draggable', true);
          }

          gameBoard.appendChild(square);
          id += 1;
        })
    })
}


function dragEnd(event) {
    let squareId;
    if (event.target.classList.contains('square')) {
        selectedSquare = clickTarget.target.parentNode;
        squareId = parseInt(selectedSquare.getAttribute('square-id'));
        const destinationSquareId = parseInt(event.currentTarget.getAttribute('square-id'));

        // ---MOVE LOGIC---
        // check if the selected piece can move to a valid position
        const canMove = isValidMove(squareId, destinationSquareId, event);

        // update the board and move the piece
        if (canMove) {
            movePiece(squareId, destinationSquareId, event);
            triggerBot();
        }
    }

  // jump again logic

  // win conditions(LOW PRIORITY)
  // check if the game is won

  // crowning pieces (LAST PRIORITY)
  // check if the selected piece can be crowned
  // update the board and mark the piece as crowned

}


function dragOver(event) {
  event.preventDefault();
  if (selectedSquare) {
    const destinationSquareId = parseInt(event.currentTarget.getAttribute('square-id'));
    const canMove = isValidMove(selectedSquare, destinationSquareId);
    if (canMove) {
      event.currentTarget.classList.add('highlight');
    }
  }
}


// -- function to check for valid position
function isValidMove(squareId, destinationSquareId, event) {
  // get destination square
  const destinationSquare = event.target;

  // check if the destination square is empty
  if (destinationSquare.firstChild) {
    return true;
  }

  // determine row and column of source and destination squares
  const { row: sourceRow, col: sourceCol } = getRowAndCol(squareId);
  const { row: destRow, col: destCol } = getRowAndCol(destinationSquareId);

  // determine row and column differences
  const rowDiff = Math.abs(destRow - sourceRow);
  const colDiff = Math.abs(destCol - sourceCol);

  // check if the piece can move diagonally two spaces to an empty spot
  if (rowDiff === 2 && colDiff === 2) {
    const jumpedRow = (destRow + sourceRow) / 2;
    const jumpedCol = (destCol + sourceCol) / 2;

    const jumpedPiece = board[jumpedRow][jumpedCol];
    return jumpedPiece !== 'empty'; // check if the jumped piece is not empty
  }

  // check if the piece is moving diagonally to an empty spot
  return rowDiff === 1 && colDiff === 1 && !destinationSquare.firstChild;
}

// -- function to move piece
function movePiece(squareId, destinationSquareId, event) {
    // get destination square
    const destinationSquare = event.currentTarget;

    // determine row and column of source and destination squares
    const { row: sourceRow, col: sourceCol } = getRowAndCol(squareId);
    const { row: destRow, col: destCol } = getRowAndCol(destinationSquareId);

    // check if the move involves jumping
    if (Math.abs(sourceRow - destRow) == 2 && Math.abs(sourceCol - destCol) == 2) {
        console.log("ASF\n");
        // if yes, remove the jumped piece
        const jumpedRow = (destRow + sourceRow) / 2;
        const jumpedCol = (destCol + sourceCol) / 2;
        board[jumpedRow][jumpedCol] = 'empty';
    }

    // update the array representation of the board to reflect the move
    const pieceToMove = board[sourceRow][sourceCol];
    board[destRow][destCol] = pieceToMove;
    board[sourceRow][sourceCol] = 'empty';

    // update the board on the screen
    renderBoard();
}


function setLastClick(event)
{
    clickTarget = event;
}

// -- helper function to calculate row and column of a square
function getRowAndCol(squareId) {
  const row = Math.floor(squareId / width);
  const col = squareId % width;
  return { row, col };
}

// -- function to render the board
function renderBoard() {
  gameBoard.innerHTML = '';
  createBoard();
  makeListeners();
}

makeListeners();

function makeListeners() {
    // setup event listeners
    const allSquares = document.querySelectorAll(".square")

    allSquares.forEach(square => {
        square.addEventListener('dragstart', setLastClick);
        square.addEventListener('dragover', dragOver);
        square.addEventListener('drop', dragEnd);
    });
}

makeListeners();

function sleepNow(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

// AI bot things
function botThink()
{
    var res = botThinkHelper(board, 0, "black", null, null, null, null);
    var fromY = res[1];
    var fromX = res[2];
    var toY = res[3];
    var toX = res[4];
    var ind = 0;

    if(board != null)
    {
        // removeLine();

        //Make sure to remove the text in explanation box
        if(textExplanation.innerText.startsWith("This"))
        {
            textExplanation.innerHTML = "";
        }
        //Check if the spot the bot is moving to is available
        if(availableSpot(toY, toX, board))
        {
            //Check if the move performed is a jump move
            // if(Math.abs(toY - fromY) == 2 && Math.abs(toX - fromX) == 2)
            // {
            //     addExplanationLine(`<p>Bot jumped from (${fromX}, ${fromY}) to (${toX}, ${toY}) to take a piece.</p>`);
            // }
            // //Assume it is just a normal move
            // else
            // {
            //     addExplanationLine(`<p>Bot moved piece from (${fromX}, ${fromY}) to (${toX}, ${toY}) as space was available.</p>`);
            // }
        }
    }

    return res;
}

function botThinkHelper(currBoard, depth, colorTurn,
                        currY, currX, nextY, nextX)
{
    var localBoard = structuredClone(currBoard);
    var nextTurn = colorTurn.localeCompare("black") == 0 ? "red" : "black";

    if(currY != null && currX != null)
    {
        botMovePieceInCalculation(localBoard, currX, currY,
                                  nextX, nextY);
    }

    var bestMove = [Number.NEGATIVE_INFINITY, currY, currX, nextY, nextX];

    var piecePositions = getPiecePositions(colorTurn, currBoard);

    if(depth < max_search_depth)
    {
        bestMove[0] = getPositionScore(localBoard, currY, currX);

        piecePositions.forEach((pos) => {
            if(explan_depth >= 1) {
                addExplanationLine(`Examining (${pos[0]}, ${pos[1]}) for ${colorTurn}`);
            }

            var nextMoves = getPossibleMoves(localBoard, pos, colorTurn);
            if(nextMoves.length == 0 && explan_depth >= 1) {
                addExplanationLine("There are no possible moved from this peice...");
            }

            if(nextMoves.length == 0 && explan_depth >= 1) {
                removeLine();
            }

            nextMoves.forEach((move) => {
                if(nextMoves.length == 0 && explan_depth >= 2) {
                    addExplanationLine(`Calculating move to (${move[0]}, ${move[1]})`)
                }

                var res = botThinkHelper(localBoard, depth + 1, nextTurn,
                                         pos[0], pos[1], move[0], move[1]);
                if(explan_depth >= 3) {
                    addExplanationLine(`Calculated position score: ${res[0]} (best: ${bestMove[0]})`);
                    removeLine();
                }

                if(colorTurn === 'black' && res[0] > bestMove[0])
                {
                    for(var index = 0; index < 5; index++)
                    {
                        bestMove[index] = res[index];
                    }
                    if(explan_depth >= 2) {
                        addExplanationLine(`New best move found from (${pos[0]}, ${pos[1]}) \
                                            to (${move[0]}, ${move[1]})`);
                        removeLine();
                    }
                }
                else
                {
                    if(explan_depth >= 2) {
                        addExplanationLine(`The move was not calculated to be the new best...`);
                        removeLine();
                    }
                }
            })
            if(explan_depth >= 1) {
                removeLine();
            }
        });
    }

    return bestMove;
}

function getPositionScore(currBoard, currY, currX)
{
    var blackScore = 0, redScore = 0;

    if(currY == null && currX == null) {
        return Number.NEGATIVE_INFINITY;
    }

    for(let row = 0; row < height; row++)
    {
        for(let col = 0; col < width; col++)
        {
            if(currBoard[row][col].localeCompare("red") == 0)
            {
                redScore++;
            }
            else if(currBoard[row][col].localeCompare("black") == 0)
            {
                blackScore++;
            }
        }
    }

    return blackScore - redScore;
}

function botMovePieceInCalculation(currBoard, fromY, fromX, toY, toX)
{
    currBoard[toY][toX] = currBoard[fromY][fromX];
    currBoard[fromY][fromX] = "empty";

    if(Math.abs(toY - fromY) == 2 && Math.abs(toX - fromX) == 2)
    {
        var middleY = parseInt((toY + fromY) / 2);
        var middleX = parseInt((toX + fromX) / 2);

        currBoard[middleY][middleX] = "empty";

    }
}

function getPiecePositions(color, currBoard)
{
    var positions = [];

    for(let row = 0; row < height; row++)
    {
        for(let col = 0; col < width; col++)
        {
            if(currBoard[row][col] === color)
            {
                positions.push([row, col]);
            }
        }
    }

    return positions;
}

function getPossibleMoves(currBoard, currPos, currColor)
{
    var yOffset = currColor === 'black' ? 1 : -1;
    var possibleMoves = [];
    var currY = currPos[0], currX = currPos[1];
    var nextY = currY + yOffset;

    for(var xOffset = -1; xOffset <= 1; xOffset += 2)
    {
        if(availableSpot(nextY, currX + xOffset, currBoard))
        {
            possibleMoves.push([nextY, currX + xOffset]);
        }
        else if(canJump(nextY, currX + xOffset, currBoard, currColor, yOffset, xOffset))
        {
            possibleMoves.push([nextY + yOffset, currX + (2 * xOffset)]);
        }
    }

    return possibleMoves;
}

function inBounds(toY, toX)
{
    return toY < height && toY >= 0 && toX < width && toX >= 0;
}

function availableSpot(toY, toX, currBoard)
{
    return inBounds(toY, toX) && currBoard[toY][toX] === 'empty';
}

function canJump(toY, toX, currBoard, color, yOffset, xOffset)
{
    return inBounds(toY, toX) &&
           inBounds(toY + yOffset, toX + xOffset) &&
           isOppositeColor(currBoard, color, toY, toX) &&
           availableSpot(toY + yOffset, toX + xOffset, currBoard);
}

function isOppositeColor(currBoard, color, currY, currX)
{
    return currBoard[currY][currX] !== color;
}

function triggerBot()
{
    var res = botThink();

    setTimeout(function() {
        botMovePieceInCalculation(board, res[1], res[2], res[3], res[4])
        renderBoard()
    }, 1000);
}

function addExplanationLine(line)
{
    setTimeout(function() {
        sleepNow(explanSpeed)
        explanElements.push("<br>" + line)
        textExplanation.innerHTML += "<br>" + line
        sleepNow(1)
    }, 0);
}

function removeLine()
{
    setTimeout(function() {
        sleepNow(explanSpeed)
        textExplanation.lastChild.remove() // Remove message + <br>
        textExplanation.lastChild.remove() // Remove message + <br>
        sleepNow(1)
    }, 0);
}

// SETTINGS
diffSlider.oninput = function () {
  output.innerHTML = getDifficulty(this.value);
};

explanSpeedSlider.oninput = function () {
    switch (explanSpeedSlider.value) {
        case "0":
            explanSpeed = 0;
            break;
        case "1":
            explanSpeed = 250;
            break;
        case "2":
            explanSpeed = 500;
            break;
        case "3":
            explanSpeed = 750;
            break;
        case "4":
            explanSpeed = 1000;
            break;
        default:
            break;
    }
    console.log(explanSpeed);
};

function getDifficulty(value) {
  switch (value) {
    case "0":
      max_search_depth = 2;
      return "EASY";
    case "1":
      max_search_depth = 4;
      return "MEDIUM";
    case "2":
      max_search_depth = 6;
      return "GRANDMASTER";
    default:
      return "";
  }
}

verboseSlider.oninput = function () {
    explan_depth = parseInt(verboseSlider.value);
    console.log(explan_depth);
};

output.innerHTML = getDifficulty(diffSlider.value);

});


// SLIDER JS
const container = document.querySelectorAll(".range-slider");

for(let index = 0; index < container.length; index++)
  {
  const slider = container[index].querySelector(".slider");

  const thumb = container[index].querySelector(".slider-thumb");

  const tooltip = container[index].querySelector(".tooltip");

  const progress = container[index].querySelector(".progress");

  function customSlider() {
      const maxVal = slider.getAttribute("max");
      const val = (slider.value / maxVal) * 100 + "%";

      tooltip.innerHTML = slider.value;

      progress.style.width = val;
      thumb.style.left = val;
    }

    customSlider();

    slider.addEventListener("input", () => {
        customSlider();
    });
}
// END OF SLIDER JS

module.exports = {
    createBoard,
    renderBoard,
    makeListeners
  };
