// board.test.js

const {
    createBoard,
    renderBoard,
    makeListeners,
    isValidMove,
    movePiece,
    getRowAndCol,
    botThinkHelper,
    getPositionScore,
    botMovePieceInCalculation,
    getPiecePositions,
    getPossibleMoves,
    availableSpot,
    canJump,
    isOppositeColor,
  } = require('../../src/board.js');
  
  describe('Checkers Board', () => {
    // Mock data for testing
    const mockBoard = [
        ['empty', 'black', 'empty', 'black', 'empty', 'black', 'empty', 'black'],
        ['black', 'empty', 'black', 'empty', 'black', 'empty', 'black', 'empty'],
        ['empty', 'black', 'empty', 'black', 'empty', 'black', 'empty', 'black'],
        ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
        ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
        ['red', 'empty', 'red', 'empty', 'red', 'empty', 'red', 'empty'],
        ['empty', 'red', 'empty', 'red', 'empty', 'red', 'empty', 'red'],
        ['red', 'empty', 'red', 'empty', 'red', 'empty', 'red', 'empty']
    ];
    
  
    beforeEach(() => {
      // Set up a fresh board before each test
      document.body.innerHTML = '<div id="gameboard"></div>';
      createBoard();
    });
  
    test('Board creation', () => {
      // Verify that the board is created correctly
      const gameboard = document.getElementById('gameboard');
      expect(gameboard).toBeTruthy();
    });
  
    test('Piece movement', () => {
      // Mock a drag-and-drop event
      const dragStartEvent = new Event('dragstart');
      const dragEndEvent = new Event('drop');
      const square1 = document.querySelector('.square[square-id="0"]');
      const square2 = document.querySelector('.square[square-id="9"]');
      square1.dispatchEvent(dragStartEvent);
      square2.dispatchEvent(dragEndEvent);
  
      // Validate that the piece has moved
      const pieceInSquare1 = document.querySelector('.square[square-id="0"] img');
      const pieceInSquare2 = document.querySelector('.square[square-id="9"] img');
      expect(pieceInSquare1).toBeFalsy();
      expect(pieceInSquare2).toBeTruthy();
    });
  
  });
  