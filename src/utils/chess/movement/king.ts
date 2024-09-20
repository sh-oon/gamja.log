import { ChessBoard } from '@/types/chess'

export function kingMovement(position: string, board: ChessBoard): string[] {
  const [file, rank] = position.split('')
  const x = file.charCodeAt(0) - 65
  const y = 8 - parseInt(rank)
  
  const moves: string[] = []
  
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
  ]
  
  for (const [dx, dy] of directions) {
    const newX = x + dx
    const newY = y + dy
    
    if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
      const newPosition = `${String.fromCharCode(65 + newX)}${8 - newY}`
      const targetPiece = board[newY][newX]
      
      if (targetPiece === null) {
        // 빈 칸이면 이동 가능
        moves.push(newPosition)
      } else if (targetPiece.color !== board[y][x].color) {
        // 적 말이 있으면 이동 가능
        moves.push(newPosition)
      }
    }
  }
  
  return moves
}
