export function knightMovement(position) {
  const [x, y] = position.split('')
  const moves = []
  for (let i = -2; i <= 2; i++) {
    for (let j = -2; j <= 2; j++) {
      if (Math.abs(i) + Math.abs(j) === 3) {
        console.log(`${String.fromCharCode(x.charCodeAt(0) + i)}${parseInt(y) + j}`)
        moves.push(`${String.fromCharCode(x.charCodeAt(0) + i)}${parseInt(y) + j}`)
      }
    }
  }
  return moves
}

function validateKnightMovement(board, position) {
  const [x, y] = position.split('')
  
  
  return board[8 - parseInt(y)][x.charCodeAt(0) - 65] === null
}
