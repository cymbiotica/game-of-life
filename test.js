const assert = require('assert')
const life = require('./life.js')

it('board is an array', () => {
  assert.equal (life.board instanceof Array, true);
});

it('board array is equal to 10 spaces', () => {
  assert.equal (life.board.length, 10);
});


it('isCellAlive', () => {
  assert.equal(life.cell1.isAlive, true)
})


it('isCellDead', () => {
  assert.equal (life.cell2.isDead, false);
});