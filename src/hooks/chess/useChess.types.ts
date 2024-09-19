import { ChessBoard, PieceType } from '@/types/chess'

export type PiecesStatus = {
  white: PieceType[];
  black: PieceType[];
}

export type PiecePosition = [number, number];

export type UseChessType = {
  pieceScore: PiecesStatus;
  movePiece: (board: ChessBoard, from: PiecePosition, to: PiecePosition) => ChessBoard;
  removePiece: (board: ChessBoard, targetPosition: PiecePosition) => ChessBoard;
}
