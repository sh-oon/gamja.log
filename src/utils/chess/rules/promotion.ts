import { piecesWhite } from '@/constants/chess/pieces'
import { PieceName, PieceType } from '@/types/chess'

type PromotionType = Exclude<PieceName, 'king' | 'pawn'>

export function promotion (piece: PieceType, promotionType: PromotionType): PieceType {
  const isWhite = piece.color === 'white';

  return {
    ...piece,
    name: promotionType,
    promotion: true,
    value: isWhite ? piecesWhite[promotionType].value : piecesWhite[promotionType].value,
    image: isWhite ? piecesWhite[promotionType].image : piecesWhite[promotionType].image
  };
}
