export function pawnMovement(position, board, direction) {
  const [x, y] = position.split('')
  const row = direction === 'up' ? 8 - parseInt(y) - 1 : 8 - parseInt(y) + 1
  const col = x.charCodeAt(0) - 65
  const moves = []
  
  if (row < 0 || row > 7 || col < 0 || col > 7) return moves
  
  if (direction === 'up') {
    if (validatePawnFrontMovement(board, position, direction)) {
      moves.push(`${x}${parseInt(y) + 1}`)
      if (y === '2') {
        if (board[row - 1][col] === null)
          moves.push(`${x}${parseInt(y) + 2}`)
      }
    }
    
    if (validatePawnDiagonalMovement(board, position, direction)) {
      if (board[row][col - 1] !== null) {
        moves.push(`${String.fromCharCode(x.charCodeAt(0) - 1)}${parseInt(y) + 1}`)
      }
      if (board[row][col + 1] !== null) {
        moves.push(`${String.fromCharCode(x.charCodeAt(0) + 1)}${parseInt(y) + 1}`)
      }
    }
    
  } else {
    if (validatePawnFrontMovement(board, position, direction)) {
      moves.push(`${x}${parseInt(y) - 1}`)
      if (y === '7') {
        if (board[row + 1][col] === null)
          moves.push(`${x}${parseInt(y) - 2}`)
      }
    }
    
    if (validatePawnDiagonalMovement(board, position, direction)) {
      if (board[row][col - 1] !== null) {
        moves.push(`${String.fromCharCode(x.charCodeAt(0) - 1)}${parseInt(y) - 1}`)
      }
      if (board[row][col + 1] !== null) {
        moves.push(`${String.fromCharCode(x.charCodeAt(0) + 1)}${parseInt(y) - 1}`)
      }
    }
  }
  
  return moves
}


function validatePawnFrontMovement(board, position, direction) {
  const [x, y] = position.split('')
  const row = direction === 'up' ? 8 - parseInt(y) - 1 : 8 - parseInt(y) + 1
  const col = x.charCodeAt(0) - 65
  
  return board[row][col] === null
}

function validatePawnDiagonalMovement(board, position, direction) {
  const [x, y] = position.split('')
  const row = direction === 'up' ? 8 - parseInt(y) - 1 : 8 - parseInt(y) + 1
  const col = x.charCodeAt(0) - 65
  
  if (board[row][col - 1] !== null) {
    if (board[row][col - 1].color !== board[8 - parseInt(y)][x.charCodeAt(0) - 65].color) {
      return true
    }
  }
  
  if (board[row][col + 1] !== null) {
    if (board[row][col + 1].color !== board[8 - parseInt(y)][x.charCodeAt(0) - 65].color) {
      return true
    }
  }
  
  return false
}
