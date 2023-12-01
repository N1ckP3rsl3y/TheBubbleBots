document.addEventListener('DOMContentLoaded', function () {
    const gameBoard = document.querySelector("#gameboard");
    gameBoard.setAttribute('data-testid', 'gameboard');

const playerDisplay = document.querySelector("#player")
const infoDisplay = document.querySelector("#info-display")

let selectedSquare;
let clickTarget;
let max_search_depth = 4;

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

createBoard()

function dragEnd(event) {
    let squareId;
    console.log(board);
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

// AI bot things
function botThink()
{
    return botThinkHelper(board, 0, "black", null, null, null, null);
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

    if(depth <= max_search_depth)
    {
        bestMove[0] = getPositionScore(localBoard);

        piecePositions.forEach((pos) => {

            var nextMoves = getPossibleMoves(localBoard, pos, colorTurn);

            nextMoves.forEach((move) => {
                var res = botThinkHelper(localBoard, depth + 1, nextTurn,
                                         pos[0], pos[1], move[0], move[1]);

                if(colorTurn === 'black' && res[0] > bestMove[0])
                {
                    for(var index = 0; index < 5; index++)
                    {
                        bestMove[index] = res[index];
                    }
                }
            })
        });
    }

    return bestMove;
}

function getPositionScore(currBoard)
{
    var blackScore = 0, redScore = 0;

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
    botMovePieceInCalculation(board, res[1], res[2], res[3], res[4]);
    renderBoard();
}

module.exports = {
    createBoard,
    renderBoard,
    makeListeners
  };

});
