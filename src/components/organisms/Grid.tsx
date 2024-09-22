'use client'

import React, { PropsWithChildren } from 'react';

type Props = {
  columns: number,
  gap?: number | string,
}

function Grid({ columns, gap = 16, children }: PropsWithChildren<Props>) {
  const gridTemplateColumns = `repeat(${columns}, 1fr)`;
  
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns,
        gap: `${gap}px`,
      }}
    >
      {children}
    </div>
  )
}


export default Grid;
