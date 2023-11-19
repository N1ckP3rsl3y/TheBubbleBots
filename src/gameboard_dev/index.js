//  https://www.youtube.com/watch?v=Qv0fvm5B0EM

const gameBoard = document.querySelector("#gameboard")
const playerDisplay = document.querySelector("#player")
const infoDisplay = document.querySelector("#info-display")

let selectedSquare;
let clickTarget;

const width = 8

const startPieces =
    [
    'empty', 'black', 'empty', 'black', 'empty', 'black', 'empty', 'black',
    'black', 'empty', 'black', 'empty', 'black', 'empty', 'black', 'empty',
    'empty', 'black', 'empty', 'black', 'empty', 'black', 'empty', 'black',
    'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty',
    'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty',
    'red', 'empty', 'red', 'empty', 'red', 'empty', 'red', 'empty',
    'empty', 'red', 'empty', 'red', 'empty', 'red', 'empty', 'red',
    'red', 'empty', 'red', 'empty', 'red', 'empty', 'red', 'empty',
    ]

function createBoard() {
  startPieces.forEach((piece, index) => {
    const square = document.createElement('div');
    square.classList.add('square');
    square.setAttribute('square-id', index);

    const rowIndex = Math.floor((63 - index) / 8) + 1;
    const colIndex = index % 8;

    if (rowIndex % 2 === 0) {
      square.classList.add(colIndex % 2 === 0 ? "dark" : "light");
    } else {
      square.classList.add(colIndex % 2 === 0 ? "light" : "dark");
    }

    if (piece === 'red') {
      square.innerHTML = "<img draggable=true class='redPiece' src='redPiece.png'>";
      square.firstChild?.classList.add('red');
      square.firstChild?.setAttribute('draggable', true);
    } else if (piece === 'black') {
      square.innerHTML = "<img draggable=true class='blackPiece' src='blackPiece.png'>";
      square.firstChild?.classList.add('black');
      square.firstChild?.setAttribute('draggable', true);
    }

    gameBoard.appendChild(square);
  })
}

createBoard()

function dragStart(event) {
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
    }
  }


  // jumping pieces
  // check if the selected piece can jump to a valid position
  // update the board and remove the jumped piece

  // removing pieces
  // check if the selected piece can be removed
  // update the board and remove the piece

  // turn management
  // switch between player and AI turns

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

  // check if the piece is moving diagonally
  // (difference needs to be 1 to be diagonal)
  return Math.abs(rowDiff) === 1 && Math.abs(colDiff) === 1;
}

// -- function to move piece
function movePiece(squareId, destinationSquareId, event) {
    // get destination square
    const destinationSquare = event.currentTarget;

    // determine row and column of source and destination squares
    const { row: sourceRow, col: sourceCol } = getRowAndCol(squareId);
    const { row: destRow, col: destCol } = getRowAndCol(destinationSquareId);

    // update the array representation of the board to reflect the move
    const pieceToMove = startPieces[sourceRow * width + sourceCol];
    startPieces[destRow * width + destCol] = pieceToMove;
    startPieces[sourceRow * width + sourceCol] = 'empty';

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

function makeListeners() {
    // setup event listeners
    const allSquares = document.querySelectorAll(".square")

    allSquares.forEach(square => {
        square.addEventListener('dragstart', setLastClick);
        square.addEventListener('dragover', dragOver);
        square.addEventListener('drop', dragStart);
    });
}

makeListeners();
