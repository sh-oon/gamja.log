import { piecesBlack, piecesWhite } from '@/constants/chess/pieces'
import { ChessBoard } from '@/types/chess'

export function initChess(side: 'white' | 'black'): ChessBoard {
  const board = Array(8).fill(null).map(() => Array(8).fill(null))
  
  const isWhite = side === 'white'
  
  // 백과 흑의 피스 포지션을 결정
  const backWhiteRow = [piecesWhite.rook, piecesWhite.knight, piecesWhite.bishop, piecesWhite.queen, piecesWhite.king, piecesWhite.bishop, piecesWhite.knight, piecesWhite.rook]
  const backBlackRow = [piecesBlack.rook, piecesBlack.knight, piecesBlack.bishop, piecesBlack.queen, piecesBlack.king, piecesBlack.bishop, piecesBlack.knight, piecesBlack.rook]
  
  // 사용자 기준 초기 피스 배치
  board[0] = isWhite ? backBlackRow : backWhiteRow
  board[1] = Array(8).fill(isWhite ? piecesBlack.pawn : piecesWhite.pawn)
  
  board[6] = Array(8).fill(isWhite ? piecesWhite.pawn : piecesBlack.pawn)
  board[7] = isWhite ? backWhiteRow : backBlackRow
  
  // 피스 포지션을 결정
  board.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      if (col) {
        board[rowIndex][colIndex] = {
          ...col,
          position: `${String.fromCharCode(65 + colIndex).toUpperCase()}${8 - rowIndex}`,
          color: isWhite ? rowIndex > 3 ? 'white' : 'black' : rowIndex > 4 ? 'black' : 'white',
        }
      }
    })
  })
  
  return board
}

