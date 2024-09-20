import { ChessBoard } from '@/types/chess'

export function rookMovement(position: string, board: ChessBoard): string[] {
  const [file, rank] = position.split('');
  const x = file.charCodeAt(0) - 65; // 'A' -> 0, 'B' -> 1, ..., 'H' -> 7
  const y = 8 - parseInt(rank);       // '1' -> 7, ..., '8' -> 0 (거꾸로)
  
  const moves: string[] = [];
  
  // 위쪽 (y - i)
  for (let i = 1; i < 8; i++) {
    if (y - i >= 0) {
      const newPosition = `${String.fromCharCode(65 + x)}${8 - (y - i)}`;
      if (board[y - i][x] !== null) {
        if (board[y - i][x].color !== board[y][x].color) {
          moves.push(newPosition); // 적 말이 있으면 추가
        }
        break; // 장애물이 있으면 멈춤
      }
      moves.push(newPosition);
    } else {
      break;
    }
  }
  
  // 아래쪽 (y + i)
  for (let i = 1; i < 8; i++) {
    if (y + i < 8) {
      const newPosition = `${String.fromCharCode(65 + x)}${8 - (y + i)}`;
      if (board[y + i][x] !== null) {
        if (board[y + i][x].color !== board[y][x].color) {
          moves.push(newPosition);
        }
        break;
      }
      moves.push(newPosition);
    } else {
      break;
    }
  }
  
  // 오른쪽 (x + i)
  for (let i = 1; i < 8; i++) {
    if (x + i < 8) {
      const newPosition = `${String.fromCharCode(65 + x + i)}${8 - y}`;
      if (board[y][x + i] !== null) {
        if (board[y][x + i].color !== board[y][x].color) {
          moves.push(newPosition);
        }
        break;
      }
      moves.push(newPosition);
    } else {
      break;
    }
  }
  
  // 왼쪽 (x - i)
  for (let i = 1; i < 8; i++) {
    if (x - i >= 0) {
      const newPosition = `${String.fromCharCode(65 + x - i)}${8 - y}`;
      if (board[y][x - i] !== null) {
        if (board[y][x - i].color !== board[y][x].color) {
          moves.push(newPosition);
        }
        break;
      }
      moves.push(newPosition);
    } else {
      break;
    }
  }
  
  return moves;
}
