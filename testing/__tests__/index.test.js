const fs = require('fs');
const path = require('path');

describe('Game Board Tests', () => {
  test('index.js should exist', () => {
    const indexPath = path.join(__dirname, '../../src/gameboard_dev/index.js');
    const fileExists = fs.existsSync(indexPath);

    expect(fileExists).toBe(true);
  });
});
