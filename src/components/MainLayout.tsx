import styled from '@emotion/styled'
import React, { PropsWithChildren } from 'react';

function MainLayout({ children }: PropsWithChildren<{}>) {
  return <StyledMain className='min-h-dvh pt-header bg-grey-50 dark:bg-black relative'>{children}</StyledMain>;
}

const StyledMain = styled.main`
  height: 100dvh;
  padding-top: 80px;
  position: relative;
`

export default MainLayout;
