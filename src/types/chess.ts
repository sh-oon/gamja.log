export type PieceName = 'king' | 'queen' | 'rook' | 'bishop' | 'knight' | 'pawn';

export type PieceType = {
  name: PieceName;
  value: 1 | 3 | 5 | 9 | 100;
  image: string
  position: string;
  possibleMoves?: string[];
  hasMoved?: boolean;
  color: 'white' | 'black';
  castling?: boolean;
  enPassant?: boolean;
  promotion?: boolean;
}
