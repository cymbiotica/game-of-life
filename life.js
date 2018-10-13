createGameBoard = () => {

}

gameboard = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

checkBoard = () => {
  let board = []
  let arrToBoard = new Array(4).fill('cell')

  for (let i = 0; i < arrToBoard.length; i++) {
    board.push(arrToBoard)
  }
  return board
}

isCellAlive = () => {
  return true
}

const cell = {
  isAlive : () =>{
    return true
  }
}

module.exports = {
  createGameBoard,
  gameboard,
  checkBoard,
  isCellAlive, 
  cell
}