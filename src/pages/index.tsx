import ToC from '@/components/molecules/ToC'
import { Markdown } from '@/components/organisms/Markdown'
import { ScrollAnimation } from '@/components/scroll-animation/scroll-animation'
import { BLOG_LINKS } from '@/constants'
import { getPostSourceBySlug } from '@/lib/serialize'
import styled from '@emotion/styled'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Text } from '@/components/atoms'
import { vars } from '@ui-tokens'

export const getServerSideProps: GetServerSideProps = async () => {
  const articleSource = await getPostSourceBySlug('careers')

  return {
    props: {
      articleSource,
    },
  }
}

type Props = {
  articleSource: Awaited<ReturnType<typeof getPostSourceBySlug>>
}

const home = ({ articleSource }: Props) => {

  return (
    <>
      <StyledSection>
        <ScrollAnimation>
          <Text as={'h1'} typography={'title-xxl-bold'}>정성훈</Text>
          <div className="profile-container">
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
              <div>
                <Text as={'h3'} typography={'title-l-bold'}>Contact</Text>
                <div className="title">
                  <Text typography={'text-xxl-bold'}>Email. </Text>
                  <Link href="mailto:ajcjcjc@gmail.com">
                    ajcjcjc@gmail.com
                  </Link>
                </div>
                <div className="title">
                  <Text typography={'text-xxl-bold'}>Phone. </Text>
                  <Link href="tel:010-9737-2483" target={'_blank'}>
                    010-9737-2483
                  </Link>
                </div>
              </div>
              <div>
                <Text as={'h3'} typography={'title-l-bold'}>Channel</Text>
                <div className="title">
                  <Text typography={'text-xxl-bold'}>Github.</Text>
                  <Link href={BLOG_LINKS.github as string}>
                    github.com/sh-oon
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </StyledSection>
      <StyledSection>
        <Markdown source={articleSource} />
      </StyledSection>
    </>
  )
}

const StyledSection = styled.section`
  width: 100%;
  max-width: 65rem;
  margin: 0 auto;
  padding: 160px 24px 0;

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

    & > div .title {
      display: flex;
      gap: 8px;
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

    & .profile-container {
      flex-direction: column;
      align-items: center;
    }

    & a {
      color: ${vars.$semantic.color.text.interactive};
    }
  }
`

export default home
