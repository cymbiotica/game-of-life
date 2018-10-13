const assert = require('assert')
const Game = require('./life.js')

describe('createboard()', () => {
  it('should generate board, based on size input', () => {
    assert.equals(life.createBoard(10, 20), 200) // is this the cells or number Arrays
  })
})

// TODO maybe only have one gameboard size option and hardcode
describe('numberLiveCells(boardSize)', () => {
  it('creates a number within gameboard size', () => {
    const cells = Game.numberLiveCells(100)
    assert.equal(0 <= cells && cells <= 100, true)
  })
  it('should return a different number given the same inputs', () => {
    const live1 = Game.numberLiveCells()
    const live2 = Game.numberLiveCells()
    assert.notEqual(live1, live2)
  })
})

describe('populateBoard()', () => {
  it('should place initial live cells into board', () => {
    //assert.equals(life.populateBoard(), randomLivesCells)
  })

})