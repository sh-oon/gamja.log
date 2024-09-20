import { ChessBoard } from '@/types/chess'

export function bishopMovement(position: string, board: ChessBoard): string[] {
  const [file, rank] = position.split('')
  const col = file.charCodeAt(0) - 65
  const row = 8 - parseInt(rank)
  
  const moves: string[] = []
  
  // 4가지 대각선 방향으로 이동
  for (let i = 1; i < 8; i++) {
    // 오른쪽 위 대각선 (col + i, row - i)
    if (col + i < 8 && row - i >= 0) {
      const newPosition = `${String.fromCharCode(65 + col + i)}${8 - (row - i)}`
      if (board[row - i][col + i] !== null) {
        if (board[row - i][col + i].color !== board[row][col].color) {
          moves.push(newPosition) // 적 말이 있으면 추가
        }
        break // 장애물이 있으면 멈춤
      }
      moves.push(newPosition)
    }
  }
  
  for (let i = 1; i < 8; i++) {
    // 왼쪽 위 대각선 (col - i, row - i)
    if (col - i >= 0 && row - i >= 0) {
      const newPosition = `${String.fromCharCode(65 + col - i)}${8 - (row - i)}`
      if (board[row - i][col - i] !== null) {
        if (board[row - i][col - i].color !== board[row][col].color) {
          moves.push(newPosition)
        }
        break
      }
      moves.push(newPosition)
    }
  }
  
  for (let i = 1; i < 8; i++) {
    // 오른쪽 아래 대각선 (col + i, row + i)
    if (col + i < 8 && row + i < 8) {
      const newPosition = `${String.fromCharCode(65 + col + i)}${8 - (row + i)}`
      if (board[row + i][col + i] !== null) {
        if (board[row + i][col + i].color !== board[row][col].color) {
          moves.push(newPosition)
        }
        break
      }
      moves.push(newPosition)
    }
  }
  
  for (let i = 1; i < 8; i++) {
    // 왼쪽 아래 대각선 (col - i, row + i)
    if (col - i >= 0 && row + i < 8) {
      const newPosition = `${String.fromCharCode(65 + col - i)}${8 - (row + i)}`
      if (board[row + i][col - i] !== null) {
        if (board[row + i][col - i].color !== board[row][col].color) {
          moves.push(newPosition)
        }
        break
      }
      moves.push(newPosition)
    }
  }
  
  return moves
}
