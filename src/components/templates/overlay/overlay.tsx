import { OverlayProps } from '@/components/templates/overlay/overlay.types'
import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { PropsWithChildren } from 'react'

export const OverlayContainer = ({ isOpen, close, children, overlayId }: PropsWithChildren<OverlayProps>) => {
  return (
    <>
      {isOpen && (
        <Overlay>
          <Backdrop onClick={() => {
            close()
          }} />
          <Content>{children}</Content>
        </Overlay>
      )}
    </>
  )
}

const slideBottom = keyframes`
  from {
    transform: translate(-50%, -40%);
  }
  to {
    transform: translate(-50%, -50%);
  }
`;

const Overlay = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1001;
`

const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  backdrop-filter: blur(4px);
`

const Content = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 16px;
  box-sizing: border-box;
  border-radius: 8px;
  z-index: 1002;
  animation: ${slideBottom} 0.3s ease;
`
