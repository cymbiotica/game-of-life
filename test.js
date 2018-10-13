const assert = require('assert')
const life = require('./life.js')

describe('createGameBoard()', () => {
  it('should generate a board of 4 x 4 cells', () => {
    assert.equal(life.createGameBoard, 16) // the ide is to count the cells?
  })
})

