export type PieceName = 'king' | 'queen' | 'rook' | 'bishop' | 'knight' | 'pawn';


export type PieceProps = {
  piece: PieceName;
  position: string;
  isDragging: boolean;
  isSelected: boolean;
  onMouseDown: (position: string) => void;
  onMouseUp: () => void;
  onMouseMove: (e: MouseEvent) => void;
}
