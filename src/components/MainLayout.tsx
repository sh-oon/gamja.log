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
  background-color: ${vars.$semantic.color.background.white};
`

export default MainLayout;
