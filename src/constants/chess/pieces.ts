import { PieceDataType, SingleImagePieceDataType } from '@/types/chess'

export const pawn: PieceDataType = {
  name: 'pawn',
  value: 1,
  image: {
    black: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg',
    white: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg',
  },
}

export const knight: PieceDataType = {
  name: 'knight',
  value: 3,
  image: {
    black: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg',
    white: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg',
  },
}

export const bishop: PieceDataType = {
  name: 'bishop',
  value: 3,
  image: {
    black: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg',
    white: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg',
  },
}

export const rook: PieceDataType = {
  name: 'rook',
  value: 5,
  image: {
    black: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg',
    white: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg',
  },
}

export const queen: PieceDataType = {
  name: 'queen',
  value: 7,
  image: {
    black: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg',
    white: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg',
  },
}

export const king: PieceDataType = {
  name: 'king',
  value: 100,
  image: {
    black: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg',
    white: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg',
  },
}

export const piecesWhite: { [key: string]: SingleImagePieceDataType } = {
  rook: {
    ...rook,
    image: rook.image.white,
  },
  knight: {
    ...knight,
    image: knight.image.white,
  },
  bishop: {
    ...bishop,
    image: bishop.image.white,
  },
  queen: {
    ...queen,
    image: queen.image.white,
  },
  king: {
    ...king,
    image: king.image.white,
  },
  pawn: {
    ...pawn,
    image: pawn.image.white,
  },
}

export const piecesBlack = {
  rook: {
    ...rook,
    image: rook.image.black,
  },
  knight: {
    ...knight,
    image: knight.image.black,
  },
  bishop: {
    ...bishop,
    image: bishop.image.black,
  },
  queen: {
    ...queen,
    image: queen.image.black,
  },
  king: {
    ...king,
    image: king.image.black,
  },
  pawn: {
    ...pawn,
    image: pawn.image.black,
  },
}
