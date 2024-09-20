export type PieceName = 'king' | 'queen' | 'rook' | 'bishop' | 'knight' | 'pawn';

export type PieceType = {
  name: PieceName;
  value: 1 | 3 | 5 | 7 | 100;
  image: string
  position: string;
  possibleMoves?: string[];
  hasMoved?: boolean;
  color: 'white' | 'black';
  enPassant?: boolean;
  promotion?: boolean;
}

export type PieceDataType = {
  name: PieceName;
  value: 1 | 3 | 5 | 7 | 100;
  image: {
    black: string;
    white: string;
  }
}

export type SingleImagePieceDataType = Omit<PieceDataType, 'image'> & {
  image: string;
}

export type ChessBoard = Array<PieceType | null>[];
