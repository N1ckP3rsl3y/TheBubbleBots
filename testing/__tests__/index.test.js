// testing/__tests__/index.test.js
const { screen } = require('@testing-library/dom');
const { createBoard, renderBoard, makeListeners } = require('../../src/gameboard_dev/index.js');

describe('Game Board Tests', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  test('Create Board should render a board with pieces', () => {
    createBoard();

    const gameBoardElement = screen.getByTestId('gameboard');
    expect(gameBoardElement).toBeInTheDocument();

    const redPieces = screen.getAllByAltText('Red Piece');
    const blackPieces = screen.getAllByAltText('Black Piece');
    expect(redPieces).toHaveLength(12);
    expect(blackPieces).toHaveLength(12);
  });
});
