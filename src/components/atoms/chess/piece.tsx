'use client'

import { PieceProps } from '@/components/atoms/chess/piece.types'
import Image from 'next/image'
import styled from '@emotion/styled'

export const Piece = ({ piece, color, position, isDragging, isSelected, onMouseDown }: PieceProps) => {
  return (
    <StyledPiece
      isDragging={isDragging}
      isSelected={isSelected}
      onMouseDown={() => onMouseDown(position)}
    >
      <Image
        src={piece.image}
        alt={`${color} ${piece.name}`}
        width={50}
        height={50}
      />
    </StyledPiece>
  )
}

const StyledPiece = styled.div<Pick<PieceProps, 'isDragging' | 'isSelected'>>`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: ${({ isDragging, isSelected }) => isDragging || isSelected ? 'scale(1.2)' : 'scale(1)'};
  transition: transform 0.1s;
`
