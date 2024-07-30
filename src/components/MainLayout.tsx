import React, { PropsWithChildren } from 'react';

function MainLayout({ children }: PropsWithChildren<{}>) {
  return <main className='min-h-dvh pt-header bg-grey-50 dark:bg-black relative'>{children}</main>;
}

export default MainLayout;
