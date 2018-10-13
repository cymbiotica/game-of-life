// TODO detemine how to populate ocolumnard so it doesnt end on turn 1 or do we

let gameBoard = []
const size = 4

// createGameBoard = () => {
//   for (let col = 0; col < size ; col++) {
//     for (let row = 0; row < size; row++) {
//         gameBoard[col].push(col, row)
//     }        
//   }
//   return gameBoard
// }


createGameBoard = () => {
  for (var i = 0; i < size; i++) {
    gameBoard[i] = [];
  }
  return gameBoard;
}



module.exports = {
  createGameBoard
}