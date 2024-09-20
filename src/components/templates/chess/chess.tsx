'use client'

import { Piece } from '@/components/atoms'
import { ChessProps } from '@/components/templates'
import { useChess } from '@/hooks/chess/useChess'
import { PieceType } from '@/types/chess'
import { initChess } from '@/utils/chess/init'
import { movement } from '@/utils/chess/movement/movement'
import styled from '@emotion/styled'
import { useEffect, useMemo, useState } from 'react'
import { Text } from '@/components/atoms'

export const Chess = ({
                        currentSide,
                      }: ChessProps) => {
  const [chessBoard, setChessBoard] = useState<Array<PieceType | null>[]>(initChess(currentSide))
  const [selectedPiece, setSelectedPiece] = useState<PieceType | null>(null)
  const [possibleMoves, setPossibleMoves] = useState<string[]>([])
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const [turn, setTurn] = useState<'white' | 'black'>('white')
  const [gameOver, setGameOver] = useState<boolean>(false)
  
  const {
    pieceScore,
    movePiece,
  } = useChess()
  
  const rowLabel = ['1', '2', '3', '4', '5', '6', '7', '8']
  const colLabel = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
  
  useEffect(() => {
    if (selectedPiece) {
      // currentSide 기준으로 상대방 피스면 down, 아니면 up
      const direction = selectedPiece.color === currentSide ? 'up' : 'down'
      setPossibleMoves(movement(selectedPiece.name, selectedPiece.position, chessBoard, direction))
    } else {
      setPossibleMoves([])
    }
  }, [chessBoard, currentSide, selectedPiece])
  
  useEffect(() => {
    if (gameOver) {
      alert(`${turn} win!`)
    }
  }, [gameOver])
  
  function getPiecePosition(rowIdx: number, colIdx: number) {
    let position = ''
    
    position += colLabel[colIdx]
    position += rowLabel[7 - rowIdx]
    
    return position
  }
  
  function validateMove(from: string, to: string) {
    return possibleMoves.includes(to)
  }
  
  function onMove(from: string, to: string) {
    const [fromCol, fromRow] = from.split('').map((v, i) => i === 0 ? colLabel.indexOf(v) : 7 - rowLabel.indexOf(v))
    const [toCol, toRow] = to.split('').map((v, i) => i === 0 ? colLabel.indexOf(v) : 7 - rowLabel.indexOf(v))
    
    const newBoard = [...chessBoard]
    if (newBoard[toRow][toCol]?.name === 'king') {
      setGameOver(true)
      return
    }
    
    const board = movePiece(newBoard, [fromRow, fromCol], [toRow, toCol])
    
    setChessBoard(board)
    setSelectedPiece(null)
    setPossibleMoves([])
    setTurn(turn === 'white' ? 'black' : 'white')
  }
  
  const currentScore = useMemo(() => {
    const whiteScore = pieceScore.white.reduce((acc, cur) => acc + cur.value, 0)
    const blackScore = pieceScore.black.reduce((acc, cur) => acc + cur.value, 0)
    
    return {
      white: whiteScore,
      black: blackScore,
    }
  }, [pieceScore])
  
  
  
  return (
    <StyledSection>
      <StyledScoreContainer>
        <div>
          <Text typography={'title-xs-bold'}>{currentSide === 'white' ? 'BLACK' : 'WHITE'}: {currentScore[currentSide]}</Text>
        </div>
      </StyledScoreContainer>
      <StyledSquareContainer>
        <div className="chess-square">
          {chessBoard.map((row, rowIndex) => (
            <div
              key={rowIndex}
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'sandybrown',
                position: 'relative',
              }}
            >
              {row.map((col, colIndex) => (
                <div
                  key={colIndex}
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: (rowIndex + colIndex) % 2 === 0 ? 'sandybrown' : 'brown',
                    position: 'relative',
                    padding: '1rem',
                  }}
                >
                  {rowIndex % 8 === 7 && (
                    <div
                      style={{
                        position: 'absolute',
                        right: '5%',
                        bottom: 0,
                        color: colIndex % 2 === 1 ? 'black' : 'white',
                        fontWeight: 'bold',
                      }}
                    >
                      {currentSide === 'white' ? colLabel[colIndex] : colLabel[7 - colIndex]}
                    </div>
                  )}
                  {colIndex % 8 === 0 && (
                    <div
                      style={{
                        position: 'absolute',
                        left: '5%',
                        top: 0,
                        color: rowIndex % 2 === 0 ? 'black' : 'white',
                        fontWeight: 'bold',
                      }}
                    >
                      {currentSide === 'white' ? rowLabel[7 - rowIndex] : rowLabel[rowIndex]}
                    </div>
                  )}
                  {chessBoard[rowIndex][colIndex] && (
                    <Piece
                      piece={chessBoard[rowIndex][colIndex]}
                      color={chessBoard[rowIndex][colIndex].color as 'black' | 'white'}
                      position={`${getPiecePosition(rowIndex, colIndex)}`}
                      isDragging={isDragging}
                      isSelected={selectedPiece?.position === getPiecePosition(rowIndex, colIndex) && selectedPiece.name === chessBoard[rowIndex][colIndex]?.name}
                      onMouseDown={(position) => {
                        console.log(turn, chessBoard[rowIndex][colIndex]?.color)
                        if (turn === chessBoard[rowIndex][colIndex]?.color) {
                          if (selectedPiece?.position === position && selectedPiece.name === chessBoard[rowIndex][colIndex]?.name) {
                            setSelectedPiece(null)
                          } else {
                            setSelectedPiece(chessBoard[rowIndex][colIndex])
                          }
                        }
                      }}
                      onMouseUp={() => setIsDragging(false)}
                    />
                  )}
                  {possibleMoves.includes(`${currentSide === 'white' ? colLabel[colIndex] : colLabel[7 - colIndex]}${currentSide === 'white' ? rowLabel[7 - rowIndex] : rowLabel[rowIndex]}`) && (
                    <div
                      style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        left: 0,
                        top: 0,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      onClick={() => {
                        validateMove(selectedPiece?.position as string, getPiecePosition(rowIndex, colIndex)) && onMove(selectedPiece?.position as string, getPiecePosition(rowIndex, colIndex))
                      }}
                    >
                      <div
                        style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </StyledSquareContainer>
      <StyledScoreContainer>
        <div>
          <Text typography={'title-xs-bold'}>{currentSide.toUpperCase()}: {currentScore[currentSide === 'white' ? 'black' : 'white']}</Text>
        </div>
      </StyledScoreContainer>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding-top: 2rem;
`

const StyledScoreContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 800px;
`

const StyledSquareContainer = styled.div`
  width: 100%;
  max-width: 800px;
  position: relative;
  
  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
  
  & .chess-square {
    position: absolute;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: repeat(8, 1fr);
    
    & > div {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
    }
  }
`
