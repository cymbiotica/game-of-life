const assert = require('assert')
const life = require('./life.js')

it('board is an array', () => {
  assert.equal (life.board instanceof Array, true);
});

it('board array is equal to 10 spaces', () => {
  assert.equal (life.board.length, 10);
});