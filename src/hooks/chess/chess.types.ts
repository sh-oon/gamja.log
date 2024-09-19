import { PieceType } from '@/types/chess'

export type PiecesStatus = {
  white: PieceType[];
  black: PieceType[];
}

export type useChessType = {
  pieceScore: PiecesStatus;
  validatePieceDied: (board: PieceType[][], from: number[], to: number[]) => boolean;
  movePiece: (board: PieceType[][], from: number[], to: number[]) => PieceType[][];
  movePieceWithValidation: (board: PieceType[][], from: number[], to: number[]) => PieceType[][];
  removePiece: (board: PieceType[][], targetPosition: number[]) => PieceType[][];
}
