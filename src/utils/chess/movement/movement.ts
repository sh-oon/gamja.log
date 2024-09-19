import { PieceType } from '@/types/chess'
import { knightMovement } from '@/utils/chess/movement/knight'
import { pawnMovement } from '@/utils/chess/movement/pawn'

export function movement(piece: PieceType, position, board, direction: 'up' | 'down'): string[] {
  switch (piece) {
    case 'king':
      return kingMovement(position)
    case 'queen':
      return queenMovement(position)
    case 'rook':
      return rookMovement(position)
    case 'bishop':
      return bishopMovement(position)
    case 'knight':
      return knightMovement(position)
    case 'pawn':
      return pawnMovement(position, board, direction)
    default:
      return []
  }
}

function kingMovement(position) {
  const [x, y] = position.split('')
  const moves = []
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i === 0 && j === 0) continue
      moves.push(`${String.fromCharCode(x.charCodeAt(0) + i)}${parseInt(y) + j}`)
    }
  }
  return moves
}

function queenMovement(position) {
  return rookMovement(position).concat(bishopMovement(position))
}

function rookMovement(position) {
  const [x, y] = position.split('')
  const moves = []
  for (let i = 1; i <= 8; i++) {
    if (i !== parseInt(y)) moves.push(`${x}${i}`)
    if (i !== x.charCodeAt(0) - 96) moves.push(`${String.fromCharCode(i + 96)}${y}`)
  }
  return moves
}

function bishopMovement(position) {
  const [x, y] = position.split('')
  const moves = []
  for (let i = 1; i <= 8; i++) {
    if (i !== parseInt(y)) {
      moves.push(`${String.fromCharCode(x.charCodeAt(0) + i)}${parseInt(y) + i}`)
      moves.push(`${String.fromCharCode(x.charCodeAt(0) - i)}${parseInt(y) + i}`)
    }
  }
  return moves
}

