import { ChessBoard } from '@/types/chess'

export function rookMovement(position: string, board: ChessBoard): string[] {
  const [file, rank] = position.split('')
  const col = file.charCodeAt(0) - 65
  const row = 8 - parseInt(rank)
  const currentPiece = board[row][col]
  
  if (!currentPiece) {
    return []
  }
  
  const moves: string[] = []
  
  // 위쪽 (row - i)
  for (let i = 1; i < 8; i++) {
    if (row - i < 0) break; // 범위 벗어나면 루프 종료
    
    const newPosition = `${String.fromCharCode(65 + col)}${8 - (row - i)}`;
    const targetPiece = board[row - i][col];
    
    if (!targetPiece) {
      moves.push(newPosition); // 빈 공간일 경우 이동 가능
      continue;
    }
    
    if (targetPiece.color !== currentPiece.color) {
      moves.push(newPosition); // 적 말이 있을 경우 추가
    }
    
    break; // 장애물이 있으면 루프 종료
  }
  
  // 아래쪽 (row + i)
  for (let i = 1; i < 8; i++) {
    if (row + i >= 8) break;
    
    const newPosition = `${String.fromCharCode(65 + col)}${8 - (row + i)}`;
    const targetPiece = board[row + i][col];
    
    if (!targetPiece) {
      moves.push(newPosition);
      continue;
    }
    
    if (targetPiece.color !== currentPiece.color) {
      moves.push(newPosition);
    }
    
    break;
  }
  
  // 오른쪽 (col + i)
  for (let i = 1; i < 8; i++) {
    if (col + i >= 8) break;
    
    const newPosition = `${String.fromCharCode(65 + col + i)}${8 - row}`;
    const targetPiece = board[row][col + i];
    
    if (!targetPiece) {
      moves.push(newPosition);
      continue;
    }
    
    if (targetPiece.color !== currentPiece.color) {
      moves.push(newPosition);
    }
    
    break;
  }
  
  // 왼쪽 (col - i)
  for (let i = 1; i < 8; i++) {
    if (col - i < 0) break;
    
    const newPosition = `${String.fromCharCode(65 + col - i)}${8 - row}`;
    const targetPiece = board[row][col - i];
    
    if (!targetPiece) {
      moves.push(newPosition);
      continue;
    }
    
    if (targetPiece.color !== currentPiece.color) {
      moves.push(newPosition);
    }
    
    break;
  }
  
  return moves
}
