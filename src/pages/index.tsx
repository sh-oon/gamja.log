import { ScrollAnimation } from '@/components/scroll-animation/scroll-animation'
import { BLOG_LINKS } from '@/constants'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Text } from '@/components/atoms'
import { vars } from '@ui-tokens'

const home = () => {
  return (
    <>
      <StyledSection>
        <ScrollAnimation>
          <h1 className={'resume-title'}>
            안녕하세요 만드는 것을 좋아하는 개발자 <strong>정성훈</strong> 입니다.
          </h1>
        </ScrollAnimation>
        <ScrollAnimation>
          <div
            className="profile-container"
          >
            <div className="image-container">
              <Image
                src="/assets/avatar.webp"
                alt="avatar"
                width={240}
                height={240}
              />
            </div>
            <div className="profile-contents">
              <div>
                <Text as={'h2'} typography={'title-xl-bold'}>Frontend Developer</Text>
                <Text as={'p'} typography={'title-xs-medium'}>Vue, React, Next.js, TypeScript</Text>
              </div>
              <div className="content">
                <Text as={'h3'} typography={'title-l-bold'}>Contact</Text>
                <div className="title">
                  <Text typography={'text-xxl-bold'}>Email. </Text>
                  <Text typography={'text-xxl'}>
                    <Link href="mailto:ajcjcjc@gmail.com">
                      ajcjcjc@gmail.com
                    </Link>
                  </Text>
                </div>
                <div className="title">
                  <Text typography={'text-xxl-bold'}>Phone. </Text>
                  <Text typography={'text-xxl'}>
                    <Link href="tel:010-9737-2483" target={'_blank'}>
                      010-9737-2483
                    </Link>
                  </Text>
                </div>
              </div>
              <div>
                <Text as={'h3'} typography={'title-l-bold'}>Channel</Text>
                <div className="title">
                  <Text typography={'text-xxl-bold'}>Github.</Text>
                  <Text typography={'text-xxl'}>
                    <Link href={BLOG_LINKS.github as string}>
                      github.com/sh-oon
                    </Link>
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation>
          <div className="profile-contents">
            <Text as={'h3'} typography={'title-xxl-bold'}>Stack</Text>
            <hr />
            <div className="content">
              <Text as={'h4'} typography={'title-l-bold'}>Frontend</Text>
              <Text as={'p'} typography={'title-xs-medium'}>Vue, React, Next.js, TypeScript</Text>
            </div>
            <div className="content">
              <Text as={'h4'} typography={'title-l-bold'}>Backend</Text>
              <Text as={'p'} typography={'title-xs-medium'}>Node.js, Express, MongoDB</Text>
            </div>
            <div className="content">
              <Text as={'h4'} typography={'title-l-bold'}>Tool</Text>
              <Text as={'p'} typography={'title-xs-medium'}>
                Slack, Notion, Postman
              </Text>
            </div>
            <div className="content">
              <Text as={'h4'} typography={'title-l-bold'}>Etc</Text>
              <Text as={'p'} typography={'title-xs-medium'}>Git, Docker, Jenkins, Vercel</Text>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation>
          <div className="profile-contents">
            <Text as={'h3'} typography={'title-xxl-bold'}>Careers</Text>
            <hr />
            <StyledCareerContent>
              <Text as={'h4'} typography={'title-l-bold'}>케이씨 산업</Text>
              <Text as={'h4'} typography={'title-m-bold'}>2021.01 ~ 2021.06</Text>
              <Text as={'p'} typography={'title-xs-medium'}>프론트엔드 개발자</Text>
              <div>
                <ul>
                  <Text as={'li'} typography={'title-xs-medium'}>제조 실행 시스템(MES) 플랫폼 고도화</Text>
                  <Text as={'li'} typography={'title-xs-medium'}>3D 건축설계 플랫폼 고도화</Text>
                </ul>
              </div>
            </StyledCareerContent>
          </div>
        </ScrollAnimation>
      </StyledSection>
    </>
  )
}

const StyledSection = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 4rem;
  padding: 4rem 24px 0;
  position: relative;
  
  & hr {
    border: 1px solid ${vars.$semantic.color.border.line};
    margin-bottom: 24px;
  }
  
  & .resume-title {
    font-size: 3rem;
    font-weight: 400;
    line-height: 1.2;
  }
  
  & .profile-container {
    width: 100%;
    display: flex;
  }
  
  & .image-container {
    width: 240px;
    height: 240px;
  }
  
  & .profile-contents {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: center;
    
    & > div {
      display: flex;
      flex-direction: column;
    }
    
    & > div > p {
      display: flex;
      gap: 16px;
    }
    
    & .content {
      display: flex;
      flex-direction: column;
      gap: 4px
    }
    
    & > div .title {
      display: flex;
      gap: 16px;
      align-items: center;
    }
  }
  
  & a {
    color: ${vars.$semantic.color.text.tertiary};
    text-decoration: underline;
    text-underline-offset: 4px;
    transition: color 0.2s ease-in-out;
    
    &:hover {
      color: ${vars.$semantic.color.text.tertiaryHover};
      text-decoration: underline;
    }
  }
  
  @media (max-width: 768px) {
    padding: 40px 12px;
    
    & .resume-title {
      font-size: 2rem;
    }
    
    & .profile-container {
      flex-direction: column;
      align-items: center;
    }
    
    & a {
      color: ${vars.$semantic.color.text.interactive};
    }
  }
`

const StyledCareerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  
  & ul {
    display: flex;
    flex-direction: column;
    gap: 4px;
    list-style: disc;
  }
`

export default home
