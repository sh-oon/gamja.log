import React from 'react';
import Logo from '@/components/atoms/Logo';
import Link from 'next/link';
import ExternalLinkItem from '@/components/atoms/ExternalLinkItem';

function HeaderComponent() {
  return (
    <header className='flex px-6 w-full fixed'>
      <div className='flex justify-between items-center w-full border-b-2 border-gray-900 h-header bg-white dark:bg-black dark:border-white'>
        <nav className='flex items-center gap-4'>
          <Link
            href='/'
            className='ext-gray-800 no-underline text-xl font-semibold transition-colors duration-200 relative'
          >
            <Logo size='3xl' />
          </Link>
          <Link href='/post' className='text-xl relative hover:text-primary-main active:text-primary-main custom-link'>
            <span className='text-lg font-bold'>Post</span>
          </Link>
          <Link
            href='/contact'
            className='text-xl relative hover:text-primary-main active:text-primary-main custom-link'
          >
            <span className='text-lg font-bold'>Contact</span>
          </Link>
        </nav>
        <ul className='flex items-center gap-2'>
          <li>
            <ExternalLinkItem href={process.env.NEXT_PUBLIC_GITHUB_URL as string}>GitHub</ExternalLinkItem>
          </li>
          <li>
            <ExternalLinkItem href={process.env.NEXT_PUBLIC_RESUME_URL as string}>Resume</ExternalLinkItem>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default HeaderComponent;
