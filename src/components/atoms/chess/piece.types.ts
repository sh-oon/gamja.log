import { PieceType } from '@/types/chess'

export type PieceProps = {
  piece: PieceType;
  color: 'white' | 'black';
  position: string;
  isDragging: boolean;
  isSelected: boolean;
  onMouseDown: (position: string) => void;
  onMouseUp: () => void;
  onMouseMove?: (e: MouseEvent) => void;
}
