import React, { PropsWithChildren } from 'react';
import Link from 'next/link';
import { GoLinkExternal } from 'react-icons/go';

interface Props {
  href: string;
  children: React.ReactNode;
}

const ExternalLinkItem = ({ href, children }: PropsWithChildren<Props>) => {
  return (
    <Link
      href={href}
      target='_blank'
      passHref
      className='mr-1 text-gray-800 flex items-center no-underline border border-gray-900 rounded-full px-2 py-1 font-semibold transition-all hover:opacity-50 dark:border-white dark:text-white dark:hover:bg-[#ffffff88]'
    >
      <div className='mr-1 flex items-center'>
        <GoLinkExternal />
      </div>
      {children}
    </Link>
  );
};

export default ExternalLinkItem;
