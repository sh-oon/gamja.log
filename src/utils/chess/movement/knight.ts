import { ChessBoard } from '@/types/chess'

export function knightMovement(position: string, board: ChessBoard): string[] {
  const [file, rank] = position.split('')
  const moves = []
  for (let i = -2; i <= 2; i++) {
    for (let j = -2; j <= 2; j++) {
      if (Math.abs(i) + Math.abs(j) === 3) {
        moves.push(`${String.fromCharCode(file.charCodeAt(0) + i)}${parseInt(rank) + j}`)
      }
    }
  }
  
  return moves.filter(move => validateKnightMovement(board, [file, rank], move))
}

function validateKnightMovement(board: ChessBoard, from: [string, string], to: string): boolean {
  const [file, rank] = to.split('')
  const row = 8 - parseInt(rank)
  const col = file.charCodeAt(0) - 65
  
  if (isNaN(row) || isNaN(col)) return false
  if (row < 0 || row > 7 || col < 0 || col > 7) return false
  
  if (board[row][col] === null) return true
  else {
    const target = board[row][col]
    const piece = board[8 - parseInt(from[1])][from[0].charCodeAt(0) - 65]
    
    if (target === null) return true
    
    return piece?.color !== target.color
  }
}
