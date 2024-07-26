import { BLOG_LINKS } from '@/constants';
import { useDevice } from '@/context/DeviceContext';
import { useRouter } from 'next/router';
import React from 'react';
import Logo from '@/components/atoms/Logo';
import Link from 'next/link';
import ExternalLinkItem from '@/components/atoms/ExternalLinkItem';
import { FaGithub } from 'react-icons/fa';
import { GrDocumentUser } from 'react-icons/gr';

function HeaderComponent() {
  const { isDesktop } = useDevice();
  const router = useRouter()

  console.log(router);

  return (
    <header className="flex px-6 md:px-3 bg-grey-50 w-full fixed z-50">
      <div
        className="flex justify-between items-center w-full border-b-2 border-gray-900 h-header dark:bg-black dark:border-white">
        <nav className="flex items-center gap-4 md:gap-2">
          <Link
            href="/"
            className="text-gray-800 no-underline text-xl font-semibold transition-colors duration-200 relative"
          >
            <Logo size={isDesktop ? '3xl' : 'xl'} />
          </Link>
          <Link
            href="/post"
            className={`text-xl relative hover:text-primary-main active:text-primary-main custom-link ${router.pathname.includes('/post') ? 'text-primary-main' : ''}`}
          >
            <span className="text-lg">Post</span>
          </Link>
          <Link
            href="/contact"
            className={`text-xl relative hover:text-primary-main active:text-primary-main custom-link ${router.pathname.includes('/contact') ? 'text-primary-main' : ''}`}
          >
            <span className="text-lg">Contact</span>
          </Link>
        </nav>
        <ul className="flex items-center gap-2">
          <li>
            <ExternalLinkItem href={BLOG_LINKS.github as string}>
              {isDesktop ? 'GitHub' : <FaGithub size={24} />}
            </ExternalLinkItem>
          </li>
          <li>
            <ExternalLinkItem href={BLOG_LINKS.resume as string}>
              {isDesktop ? 'Resume' : <GrDocumentUser size={24} />}
            </ExternalLinkItem>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default HeaderComponent;
