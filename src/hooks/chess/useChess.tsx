import { PiecePosition, PiecesStatus, UseChessType } from '@/hooks/chess/useChess.types'
import { ChessBoard } from '@/types/chess'
import { promotion } from '@/utils/chess/rules/promotion'
import { useState } from 'react'

export const useChess = ():UseChessType => {
  const [pieceScore, setPieceScore] = useState<PiecesStatus>({
    white: [],
    black: []
  });
  
  function removePiece(board: ChessBoard, targetPosition: PiecePosition): ChessBoard {
    const target = board[targetPosition[0]][targetPosition[1]];
    
    if (target === null) {
      return board;
    }
    
    const side = target.color;
    
    const pieces = pieceScore[side];
    
    setPieceScore({
      ...pieceScore,
      [side]: [...pieces, target]
    });
    
    
    return board;
  }
  
  function movePiece(board: ChessBoard, from: PiecePosition, to: PiecePosition): ChessBoard {
    const piece = board[from[0]][from[1]];
    
    if (piece === null) {
      return board;
    }
    
    piece.position = `${String.fromCharCode(65 + to[1])}${8 - to[0]}`;
    board[from[0]][from[1]] = null;
    if (board[to[0]][to[1]] !== null) {
      removePiece(board, to);
    }
    
    if (piece.name === 'pawn' && (to[0] === 0 || to[0] === 7)) {
      board[to[0]][to[1]] = promotion(piece, 'queen');
      return board;
    }
    
    board[to[0]][to[1]] = piece;
    return board;
  }
  
  return {
    pieceScore,
    movePiece,
    removePiece
  }
}
