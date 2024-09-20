import { ChessBoard } from '@/types/chess'

export function pawnMovement(position: string, board: ChessBoard, direction: 'up' | 'down'): string[] {
  const [file, rank] = position.split('')
  const col = file.charCodeAt(0) - 65
  const row = direction === 'up' ? 8 - parseInt(rank) - 1 : 8 - parseInt(rank) + 1
  const moves: string[] = []
  
  if (row < 0 || row > 7 || col < 0 || col > 7) return moves
  
  if (direction === 'up') {
    if (validatePawnFrontMovement(board, position, direction)) {
      moves.push(`${file}${parseInt(rank) + 1}`)
      if (rank === '2') {
        if (board[row - 1][col] === null)
          moves.push(`${file}${parseInt(rank) + 2}`)
      }
    }
    
    if (validatePawnDiagonalMovement(board, position, direction)) {
      if (board[row][col - 1] !== null) {
        moves.push(`${String.fromCharCode(file.charCodeAt(0) - 1)}${parseInt(rank) + 1}`)
      }
      if (board[row][col + 1] !== null) {
        moves.push(`${String.fromCharCode(file.charCodeAt(0) + 1)}${parseInt(rank) + 1}`)
      }
    }
  } else {
    if (validatePawnFrontMovement(board, position, direction)) {
      moves.push(`${file}${parseInt(rank) - 1}`)
      if (rank === '7') {
        if (board[row + 1][col] === null)
          moves.push(`${file}${parseInt(rank) - 2}`)
      }
    }
    
    if (validatePawnDiagonalMovement(board, position, direction)) {
      if (board[row][col - 1] !== null) {
        moves.push(`${String.fromCharCode(file.charCodeAt(0) - 1)}${parseInt(rank) - 1}`)
      }
      if (board[row][col + 1] !== null) {
        moves.push(`${String.fromCharCode(file.charCodeAt(0) + 1)}${parseInt(rank) - 1}`)
      }
    }
  }
  
  return moves
}


function validatePawnFrontMovement(board: ChessBoard, position: string, direction: 'up' | 'down'): boolean {
  const [file, rank] = position.split('')
  const row = direction === 'up' ? 8 - parseInt(rank) - 1 : 8 - parseInt(rank) + 1
  const col = file.charCodeAt(0) - 65
  
  return board[row][col] === null
}

function validatePawnDiagonalMovement(board: ChessBoard, position: string, direction: 'up' | 'down'): boolean {
  const [file, rank] = position.split('')
  const row = direction === 'up' ? 8 - parseInt(rank) - 1 : 8 - parseInt(rank) + 1
  const col = file.charCodeAt(0) - 65
  
  const leftDiagonal = board[row][col - 1]
  const rightDiagonal = board[row][col + 1]
  
  if (leftDiagonal) {
    if (leftDiagonal.color !== board[8 - parseInt(rank)][file.charCodeAt(0) - 65]?.color) {
      return true
    }
  }
  
  if (rightDiagonal) {
    if (rightDiagonal.color !== board[8 - parseInt(rank)][file.charCodeAt(0) - 65]?.color) {
      return true
    }
  }
  
  return false
}
