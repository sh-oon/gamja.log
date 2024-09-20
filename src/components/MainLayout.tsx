import styled from '@emotion/styled'
import React, { PropsWithChildren } from 'react';
import { vars } from '@ui-tokens';

function MainLayout({ children }: PropsWithChildren<{}>) {
  return <StyledMain>{children}</StyledMain>;
}

const StyledMain = styled.main`
  height: 100dvh;
  padding-top: 80px;
  position: relative;
  
  @media (prefers-color-scheme: dark) {
    background-color: ${vars.$semantic.color.background.dark};
  }
`

export default MainLayout;
