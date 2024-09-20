import { ChessBoard } from '@/types/chess'

export function bishopMovement(position: string, board: ChessBoard): string[] {
  const [file, rank] = position.split('')
  const x = file.charCodeAt(0) - 65 // 'A' -> 0, 'B' -> 1, ..., 'H' -> 7
  const y = 8 - parseInt(rank)       // '1' -> 7, ..., '8' -> 0 (거꾸로)
  
  const moves: string[] = []
  
  // 4가지 대각선 방향으로 이동
  for (let i = 1; i < 8; i++) {
    // 오른쪽 위 대각선 (x + i, y - i)
    if (x + i < 8 && y - i >= 0) {
      const newPosition = `${String.fromCharCode(65 + x + i)}${8 - (y - i)}`
      if (board[y - i][x + i] !== null) {
        if (board[y - i][x + i].color !== board[y][x].color) {
          moves.push(newPosition) // 적 말이 있으면 추가
        }
        break // 장애물이 있으면 멈춤
      }
      moves.push(newPosition)
    }
  }
  
  for (let i = 1; i < 8; i++) {
    // 왼쪽 위 대각선 (x - i, y - i)
    if (x - i >= 0 && y - i >= 0) {
      const newPosition = `${String.fromCharCode(65 + x - i)}${8 - (y - i)}`
      if (board[y - i][x - i] !== null) {
        if (board[y - i][x - i].color !== board[y][x].color) {
          moves.push(newPosition)
        }
        break
      }
      moves.push(newPosition)
    }
  }
  
  for (let i = 1; i < 8; i++) {
    // 오른쪽 아래 대각선 (x + i, y + i)
    if (x + i < 8 && y + i < 8) {
      const newPosition = `${String.fromCharCode(65 + x + i)}${8 - (y + i)}`
      if (board[y + i][x + i] !== null) {
        if (board[y + i][x + i].color !== board[y][x].color) {
          moves.push(newPosition)
        }
        break
      }
      moves.push(newPosition)
    }
  }
  
  for (let i = 1; i < 8; i++) {
    // 왼쪽 아래 대각선 (x - i, y + i)
    if (x - i >= 0 && y + i < 8) {
      const newPosition = `${String.fromCharCode(65 + x - i)}${8 - (y + i)}`
      if (board[y + i][x - i] !== null) {
        if (board[y + i][x - i].color !== board[y][x].color) {
          moves.push(newPosition)
        }
        break
      }
      moves.push(newPosition)
    }
  }
  
  return moves
}
