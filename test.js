const assert = require('assert')
const life = require('./life.js')

// describe('createBoard', () => {
//   it('create a gameBoard of 4 x 4', () => {
//     assert.equal(life.gameboard.length, 16)
//   })
// })

describe('checkBoard', () => {
  it('check to see if board is an array of 4 arrays with 4 elements in each ', () => {
    assert.equal(life.checkBoard().length, 4)
  })
})

describe('isAlive', () => {
  it('is this cell in an array alive', () => {
    assert.equal(life.cell.isAlive(), true)
  })
})