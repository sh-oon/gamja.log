import React from 'react';

const sizes = {
  base: 'text-base',
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-md',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl',
  '6xl': 'text-6xl',
  '7xl': 'text-7xl',
  '8xl': 'text-8xl',
  '9xl': 'text-9xl',
};

type TSize = keyof typeof sizes;

interface Props {
  size: TSize;
}

const logoClassName = (size: TSize) => `font-bold text-gray-800 cursor-pointer dark:text-white ${sizes[size]}`;

function Logo({ size }: Props) {
  return <div className={logoClassName(size)}>Gamja-log</div>;
}

export default Logo;
