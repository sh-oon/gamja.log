import { Logo } from '@/components/atoms/logo'
import { BLOG_LINKS } from '@/constants';
import { vars } from '@ui-tokens';
import { navigation } from '@/constants/navigation';
import { useDevice } from '@/context/DeviceContext';
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import React from 'react';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { GoLinkExternal } from 'react-icons/go'
import { GrDocumentUser } from 'react-icons/gr';
import { Text } from '@/components/atoms';

export const Header = () => {
  const { isDesktop } = useDevice();
  const router = useRouter();

  return (
    <StyledHeaderContainer>
      <div className="header-container">
        <nav>
          <Link
            href="/"
            className="nav-link"
          >
            <Logo />
          </Link>
          {navigation.map((nav, index) => (
            <StyledNavItem
              href={nav.link}
              key={index}
              $isCurrentPath={router.pathname.includes(nav.link)}
            >
              <Text typography={'title-s-bold'} color={router.pathname.includes(nav.link) ? 'interactive' : 'primary'}>{nav.title}</Text>
            </StyledNavItem>
          ))}
        </nav>
        <ul
          className="external-link-container"
          role={'list'}
        >
          <li>
            <Link
              href={BLOG_LINKS.github as string}
              target="_blank"
              passHref
              className="external-link"
            >
              <>
              {isDesktop && (
                <div className="icon">
                  <GoLinkExternal />
                </div>
              )}
              {isDesktop ? <Text typography={'text-l-bold'}>GitHub</Text> : <FaGithub size={24} />}
              </>
            </Link>
          </li>
          <li>
            <Link
              href={BLOG_LINKS.resume as string}
              target="_blank"
              passHref
              className="external-link"
            >
              <>
                {isDesktop && (
                  <div className="icon">
                    <GoLinkExternal />
                  </div>
                )}
                {isDesktop ? <Text typography={'text-l-bold'}>Resume</Text> : <GrDocumentUser size={24} />}
              </>
            </Link>
          </li>
        </ul>
      </div>
    </StyledHeaderContainer>
  );
}


const StyledHeaderContainer = styled.header`
  padding: 0 24px;
  width: 100%;
  position: fixed;
  z-index: 1000;
  background-color: ${vars.$semantic.color.background.white};
  
  & .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-bottom: 2px solid ${vars.$semantic.color.border.line};
    height: 80px;
    
    & .nav-link {
      width: 48px;
      height: 48px;
      
      & svg {
        width: 100%;
        height: 100%;
      }
    }
  }
  
  & nav {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  
  & .nav-link {
    cursor: pointer;
    position: relative;

    & ::after {
      content: '';
      transition: width 0.2s ease-in-out;
      position: absolute;
      background-color: ${vars.$semantic.color.text.interactive};
      bottom: -2px;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 2px;
    }

    & :hover::after {
      width: 100%;
    }
  }
  
  & .nav-link:hover {
    color: ${vars.$semantic.color.text.interactiveHover};
  }
  
  & .nav-link:active {
    color: ${vars.$semantic.color.text.interactivePressed};
  }
  
  & .external-link-container {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  & .external-link {
    color: ${vars.$semantic.color.text.primary};
    display: flex;
    align-items: center;
    border: 1px solid ${vars.$semantic.color.border.line};
    border-radius: 999px;
    padding: 4px 8px;
    transition: opacity 0.2s ease-in-out;
    
    & .icon {
      margin-right: 4px;
      display: flex;
      align-items: center;
    }
  }
  
  & .external-link:hover {
    opacity: 0.7;
  }
  
  @media (max-width: 768px) {
    padding: 0 12px;
    
    & .header-container {
      gap: 8px;
    }
    
    & nav {
      gap: 8px;
    }
    
    & .external-link {
      padding-left: 4px;
      border: none !important;
    }
  }
`;

const StyledNavItem = styled.a<{ $isCurrentPath: boolean }>`
  cursor: pointer;
  position: relative;

  & ::after {
    content: '';
    transition: width 0.2s ease-in-out;
    position: absolute;
    background-color: ${vars.$semantic.color.text.interactive};
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
  }
  
  & :hover {
    color: ${vars.$semantic.color.text.interactive};
  }

  & :hover::after {
    width: 100%;
  }
  
  ${({ $isCurrentPath }) => $isCurrentPath && `
    & ::after {
      width: 100%;
    }
  `}
`
