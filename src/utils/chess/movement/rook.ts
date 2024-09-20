import { ChessBoard } from '@/types/chess'

export function rookMovement(position: string, board: ChessBoard): string[] {
  const [file, rank] = position.split('')
  const col = file.charCodeAt(0) - 65
  const row = 8 - parseInt(rank)
  
  const moves: string[] = []
  
  // 위쪽 (row - i)
  for (let i = 1; i < 8; i++) {
    if (row - i >= 0) {
      const newPosition = `${String.fromCharCode(65 + col)}${8 - (row - i)}`
      if (board[row - i][col]?.color !== board[row][col]?.color) {
        moves.push(newPosition) // 적 말이 있으면 추가
        break // 장애물이 있으면 멈춤
      }
      moves.push(newPosition)
    } else {
      break
    }
  }
  
  // 아래쪽 (row + i)
  for (let i = 1; i < 8; i++) {
    if (row + i < 8) {
      const newPosition = `${String.fromCharCode(65 + col)}${8 - (row + i)}`
      if (board[row + i][col]?.color !== board[row][col]?.color) {
        moves.push(newPosition)
        break
      }
      moves.push(newPosition)
    } else {
      break
    }
  }
  
  // 오른쪽 (col + i)
  for (let i = 1; i < 8; i++) {
    if (col + i < 8) {
      const newPosition = `${String.fromCharCode(65 + col + i)}${8 - row}`
      if (board[row][col + i]?.color !== board[row][col]?.color) {
        moves.push(newPosition)
        break
      }
      moves.push(newPosition)
    } else {
      break
    }
  }
  
  // 왼쪽 (col - i)
  for (let i = 1; i < 8; i++) {
    if (col - i >= 0) {
      const newPosition = `${String.fromCharCode(65 + col - i)}${8 - row}`
      if (board[row][col - i]?.color !== board[row][col]?.color) {
        moves.push(newPosition)
        break
      }
      moves.push(newPosition)
    } else {
      break
    }
  }
  
  return moves
}
