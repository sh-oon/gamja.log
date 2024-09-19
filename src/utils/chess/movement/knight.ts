export function knightMovement(position, board, piece) {
  const [x, y] = position.split('')
  const moves = []
  for (let i = -2; i <= 2; i++) {
    for (let j = -2; j <= 2; j++) {
      if (Math.abs(i) + Math.abs(j) === 3) {
        moves.push(`${String.fromCharCode(x.charCodeAt(0) + i)}${parseInt(y) + j}`)
      }
    }
  }
  
  return moves.filter(move => validateKnightMovement(board, [x, y], move))
}

function validateKnightMovement(board, from, to) {
  const [x, y] = to.split('')
  const row = 8 - parseInt(y)
  const col = x.charCodeAt(0) - 65
  
  if (isNaN(row) || isNaN(col)) return false
  if (row < 0 || row > 7 || col < 0 || col > 7) return false
  
  if (board[row][col] === null) return true
  else {
    const target = board[row][col]
    const piece = board[8 - parseInt(from[1])][from[0].charCodeAt(0) - 65]
    
    return piece.color !== target.color
  }
}
