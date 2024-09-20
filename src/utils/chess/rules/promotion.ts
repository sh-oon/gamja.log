import { piecesWhite, piecesBlack } from '@/constants/chess/pieces'
import { PieceName, PieceType } from '@/types/chess'

type PromotionType = Exclude<PieceName, 'king' | 'pawn'>

export function promotion (piece: PieceType, promotionType: PromotionType): PieceType {
  const isWhite = piece.color === 'white';

  return {
    ...piece,
    name: promotionType,
    promotion: true,
    value: isWhite ? piecesWhite[promotionType].value : piecesBlack[promotionType].value,
    image: isWhite ? piecesWhite[promotionType].image : piecesBlack[promotionType].image
  };
}
