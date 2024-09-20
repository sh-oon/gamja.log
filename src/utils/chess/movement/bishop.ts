import { ChessBoard } from '@/types/chess'

export function bishopMovement(position: string, board: ChessBoard): string[] {
  const [file, rank] = position.split('')
  const col = file.charCodeAt(0) - 65
  const row = 8 - parseInt(rank)
  const currentPiece = board[row][col]
  
  if (!currentPiece) {
    return []
  }
  
  const moves: string[] = []
  
  // 4가지 대각선 방향으로 이동
  for (let i = 1; i < 8; i++) {
    // 오른쪽 위 대각선 (col + i, row - i)이 보드 안에 있는지 체크
    if (col + i >= 8 || row - i < 0) break; // 범위를 벗어나면 루프 종료
    
    const newPosition = `${String.fromCharCode(65 + col + i)}${8 - (row - i)}`;
    const targetPiece = board[row - i][col + i];
    
    if (!targetPiece) {
      moves.push(newPosition); // 빈 공간일 경우 이동 가능
      continue; // 다음 이동을 체크
    }
    
    if (targetPiece.color !== currentPiece.color) {
      moves.push(newPosition); // 적 말이 있을 경우 추가
    }
    
    break; // 장애물이 있으면 멈춤
  }
  
  for (let i = 1; i < 8; i++) {
    // 왼쪽 위 대각선 (col - i, row - i)이 보드 안에 있는지 체크
    if (col - i < 0 || row - i < 0) break;
    
    const newPosition = `${String.fromCharCode(65 + col - i)}${8 - (row - i)}`;
    const targetPiece = board[row - i][col - i];
    
    if (!targetPiece) {
      moves.push(newPosition);
      continue;
    }
    
    if (targetPiece.color !== currentPiece.color) {
      moves.push(newPosition);
    }
    
    break;
  }
  
  for (let i = 1; i < 8; i++) {
    // 왼쪽 아래 대각선 (col - i, row + i)이 보드 안에 있는지 체크
    if (col - i < 0 || row + i >= 8) break;
    
    const newPosition = `${String.fromCharCode(65 + col - i)}${8 - (row + i)}`;
    const targetPiece = board[row + i][col - i];
    
    if (!targetPiece) {
      moves.push(newPosition);
      continue;
    }
    
    if (targetPiece.color !== currentPiece.color) {
      moves.push(newPosition);
    }
    
    break;
  }
  
  for (let i = 1; i < 8; i++) {
    // 오른쪽 아래 대각선 (col + i, row + i)이 보드 안에 있는지 체크
    if (col + i >= 8 || row + i >= 8) break;
    
    const newPosition = `${String.fromCharCode(65 + col + i)}${8 - (row + i)}`;
    const targetPiece = board[row + i][col + i];
    
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
