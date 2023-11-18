// __tests__/index.test.js

const { JSDOM } = require('jsdom');

// load the HTML content -- UPDATE LATER
const html = '<!DOCTYPE html><html><head></head><body><div id="gameboard"></div></body></html>';
const { window } = new JSDOM(html);
global.document = window.document;

// load the js file -- UPDATE PATH LATER
require('../src/index.js');

test('Board and pieces are drawn correctly', () => {
  // assuming you have elements with data-testid attributes
  const gameBoard = document.querySelector('[data-testid="game-board"]');
  const redPiece = document.querySelector('[data-testid="red-piece"]');
  const blackPiece = document.querySelector('[data-testid="black-piece"]');

  // assert that the elements exist
  expect(gameBoard).toBeTruthy();
  expect(redPiece).toBeTruthy();
  expect(blackPiece).toBeTruthy();

});
