import { ChessBoard } from '@/types/chess'

export function pawnMovement(position: string, board: ChessBoard, direction: 'up' | 'down'): string[] {
  const [x, y] = position.split('')
  const row = direction === 'up' ? 8 - parseInt(y) - 1 : 8 - parseInt(y) + 1
  const col = x.charCodeAt(0) - 65
  const moves: string[] = []
  
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


function validatePawnFrontMovement(board: ChessBoard, position: string, direction: 'up' | 'down'): boolean {
  const [x, y] = position.split('')
  const row = direction === 'up' ? 8 - parseInt(y) - 1 : 8 - parseInt(y) + 1
  const col = x.charCodeAt(0) - 65
  
  return board[row][col] === null
}

function validatePawnDiagonalMovement(board: ChessBoard, position: string, direction: 'up' | 'down'): boolean {
  const [x, y] = position.split('')
  const row = direction === 'up' ? 8 - parseInt(y) - 1 : 8 - parseInt(y) + 1
  const col = x.charCodeAt(0) - 65
  
  const leftDiagonal = board[row][col - 1]
  const rightDiagonal = board[row][col + 1]
  
  if (leftDiagonal) {
    if (leftDiagonal.color !== board[8 - parseInt(y)][x.charCodeAt(0) - 65]?.color) {
      return true
    }
  }
  
  if (rightDiagonal) {
    if (rightDiagonal.color !== board[8 - parseInt(y)][x.charCodeAt(0) - 65]?.color) {
      return true
    }
  }
  
  return false
}
