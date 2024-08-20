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
    <StyledHeaderContainer
      isCurrentPage={router.pathname === '/'}
    >
      <div className="header-container">
        <nav>
          <Link href="/">
            <Text typography={'title-xl-bold'}>Gamja</Text>
          </Link>
          {navigation.map((nav, index) => (
            <StyledNavItem
              href={nav.link}
              key={index}
              $isCurrentPath={router.pathname === nav.link}
            >
              <Text typography={'title-s-bold'}>{nav.title}</Text>
            </StyledNavItem>
          ))}
        </nav>
        <ul className="external-link-container">
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
              {isDesktop ? <Text typography={'title-xxs-bold'}>GitHub</Text> : <FaGithub size={24} />}
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
                {isDesktop ? 'Resume' : <GrDocumentUser size={24} />}
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
  
  @media (prefers-color-scheme: dark) {
    background-color: ${vars.$semantic.color.background.dark};
  
    & .header-container {
      border-bottom: 2px solid ${vars.$semantic.color.border.line};
      background-color: ${vars.$semantic.color.background.dark};
    }
    
    & .nav-link {
      color: ${vars.$semantic.color.text.primary};
    }
    
    & .nav-link:hover {
      color: ${vars.$semantic.color.text.primaryHover};
    }
    
    & .nav-link:active {
      color: ${vars.$semantic.color.text.primaryPressed};
    }
    
    & .external-link {
      color: ${vars.$semantic.color.text.primary};
      border: 1px solid ${vars.$semantic.color.border.line};
    }
    
    & .external-link:hover {
      opacity: 0.5;
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
    color: ${vars.$semantic.color.text.interactiveHover};
  }

  & :hover::after {
    width: 100%;
  }
  
  ${({ $isCurrentPath }) => $isCurrentPath && `
    color: ${vars.$semantic.color.text.interactive};
    
    & ::after {
      width: 100%;
    }
  `}
`
