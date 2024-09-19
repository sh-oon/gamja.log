import { PiecesStatus, useChessType } from '@/hooks/chess/chess.types'
import { useState } from 'react'

export const useChess = ():useChessType => {
  const [pieceScore, setPieceScore] = useState<PiecesStatus>({
    white: [],
    black: []
  });
  
  function validatePieceDied(board, from, to): boolean {
    const piece = board[from[0]][from[1]];
    if (piece === null) return false;
    const target = board[to[0]][to[1]];
    if (target === null) return false;
    return piece.side !== target.side;
  }
  
  function removePiece(board, targetPosition) {
    const target = board[targetPosition[0]][targetPosition[1]];
    const side = target.color;
    
    const pieces = pieceScore[side];
    
    setPieceScore({
      ...pieceScore,
      [side]: [...pieces, target]
    });
    
    
    return board;
  }
  
  function movePiece(board, from, to) {
    const piece = board[from[0]][from[1]];
    piece.position = `${String.fromCharCode(65 + to[1])}${8 - to[0]}`;
    board[from[0]][from[1]] = null;
    if (board[to[0]][to[1]] !== null) {
      removePiece(board, to);
    }
    
    board[to[0]][to[1]] = piece;
    
    return board;
  }
  
  return {
    pieceScore,
    validatePieceDied,
    movePiece,
    removePiece
  }
}
