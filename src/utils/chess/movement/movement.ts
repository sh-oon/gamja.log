import { ChessBoard, PieceName } from '@/types/chess'
import { bishopMovement } from '@/utils/chess/movement/bishop'
import { kingMovement } from '@/utils/chess/movement/king'
import { knightMovement } from '@/utils/chess/movement/knight'
import { pawnMovement } from '@/utils/chess/movement/pawn'
import { rookMovement } from '@/utils/chess/movement/rook'

export function movement(piece: PieceName, position: string, board: ChessBoard, direction: 'up' | 'down'): string[] {
  switch (piece) {
    case 'king':
      return kingMovement(position, board)
    case 'queen':
      return queenMovement(position, board)
    case 'rook':
      return rookMovement(position, board)
    case 'bishop':
      return bishopMovement(position, board)
    case 'knight':
      return knightMovement(position, board)
    case 'pawn':
      return pawnMovement(position, board, direction)
    default:
      return []
  }
}

function queenMovement(position: string, board: ChessBoard): string[] {
  return rookMovement(position, board).concat(bishopMovement(position, board))
}


