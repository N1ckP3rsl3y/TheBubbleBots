const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

// load the HTML content
const htmlPath = path.resolve(__dirname, '../src/game.html');
const html = fs.readFileSync(htmlPath, 'utf8');
const { window } = new JSDOM(html);
global.document = window.document;

// load the JS file
const indexPath = path.resolve(__dirname, '../src/gameboard_dev/index.js');
require(indexPath);

test('board and pieces are drawn correctly', () => {
  // get the elements
  const gameBoard = document.querySelector("#gameboard");
  const redPiece = document.querySelector('.redPiece');
  const blackPiece = document.querySelector('.blackPiece');

  // assert that the elements exist
  expect(gameBoard).toBeTruthy();
  expect(redPiece).toBeTruthy();
  expect(blackPiece).toBeTruthy();
});