import { Chess } from '@/components/templates/chess/chess'
import styled from '@emotion/styled'

export default function ChessPage() {
  
  return (
    <StyledSection >
      <Chess
        currentSide={'white'}
        onDragStart={() => {}}
      />
    </StyledSection>
  )
}

const StyledSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 1rem 1.5rem 0;
  
  @media (max-width: 768px) {
    padding: 1rem 1rem;
  }
`
