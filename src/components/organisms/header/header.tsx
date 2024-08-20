import { BLOG_LINKS } from '@/constants';
import { navigation } from '@/constants/navigation';
import { useDevice } from '@/context/DeviceContext';
import styled from '@emotion/styled'
import { useRouter } from 'next/router';
import React from 'react';
import Logo from '@/components/atoms/Logo';
import Link from 'next/link';
import ExternalLinkItem from '@/components/atoms/ExternalLinkItem';
import { FaGithub } from 'react-icons/fa';
import { GrDocumentUser } from 'react-icons/gr';

export const Header = () => {
  const { isDesktop } = useDevice();
  const router = useRouter();

  return (
    <header className="flex px-6 md:px-3 w-full fixed z-50 bg-grey-50 dark:bg-black">
      <div
        className="flex justify-between items-center w-full border-b-2 border-gray-900 h-header dark:bg-black dark:border-white">
        <nav className="flex items-center gap-4 md:gap-2">
          <Link
            href="/"
            className="text-gray-800 no-underline text-xl font-semibold transition-colors duration-200 relative"
          >
            <Logo size={isDesktop ? '3xl' : 'xl'} />
          </Link>
          {navigation.map((nav, index) => (
            <Link
              href={nav.link}
              className={`text-xl relative hover:text-primary-main active:text-primary-main custom-link ${router.pathname.includes(nav.link) ? 'text-primary-main' : ''}`}
              key={index}
            >
              <span className="text-lg">{nav.title}</span>
            </Link>
          ))}
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


const StyledHeaderContainer = styled.header`
  display: flex;
  padding: 6px;
  margin: 3px;
  width: 100%;
  position: fixed;
  z-index: 50;
  background-color: grey-50;
`;
