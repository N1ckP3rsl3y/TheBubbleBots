const { screen } = require('@testing-library/dom');
const { setupJest } = require('@testing-library/jest-dom');

// import your functions and variables from index.js
const { createBoard, renderBoard, makeListeners } = require('../../src/gameboard_dev/index.js');

setupJest();

describe('Game Board Tests', () => {
  beforeEach(() => {
    // set up a clean document body before each test
    document.body.innerHTML = '';
  });

  test('Create Board should render a board with pieces', () => {
    createBoard();
    
    // assert that the gameboard element is in the document
    const gameBoardElement = screen.getByTestId('gameboard');
    expect(gameBoardElement).toBeInTheDocument();

    // assert that the gameboard contains child elements representing pieces
    const redPieces = screen.getAllByAltText('Red Piece');
    const blackPieces = screen.getAllByAltText('Black Piece');
    expect(redPieces).toHaveLength(12);
    expect(blackPieces).toHaveLength(12);
  });

});
