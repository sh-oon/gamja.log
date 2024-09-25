'use client'

import { TArticle } from '@/types/common'
import { formatDate } from '@/utils/common'
import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { vars } from '@ui-tokens'
import { Text } from '@/components/atoms'

type Props = {
  post: TArticle
}

export const ArticleCard = ({ post }: Props) => {
  return (
    <StyledCardContainer>
      <Link
        href={`/posts/${post.link}`}
      >
        <StyledCardHeader>
          <Text as={'h3'} typography={'title-l-bold'} align={'center'}>{post.title}</Text>
          <div>
            {post.tags.map((tag, index) => (
              <Text
                key={index}
                typography="text-m-bold"
                color="interactive"
              >
                #{tag}
              </Text>
            ))}
          </div>
        </StyledCardHeader>
        <ImageContainer>
          <Image
            src={post.coverImage}
            alt={post.title}
            width={800}
            height={400}
            priority={true}
          />
        </ImageContainer>
        <Text typography={'text-m'}>
          {formatDate(post.date, 'YYMMDD')}
        </Text>
      </Link>
    </StyledCardContainer>
  )
}

const StyledCardContainer = styled.div`
  padding: 2.5rem;
  border: 1px solid ${vars.$semantic.color.border.line};
  
  &:hover {
    opacity: 0.7;
  }
  
  & a {
    display: flex;
    flex-direction: column;
    gap: 6rem;
    justify-content: space-between;
    align-items: center;
  }
  
  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    
    & a {
      gap: 2rem;
    }
  }
  
  @media (prefers-color-scheme: dark) {
    border: 1px solid ${vars.$semantic.color.border.line};
  }
`

const StyledCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  
  & div {
    display: flex;
    gap: 0.5rem;
  }
  
  & span {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    background-color: ${vars.$semantic.color.background.blockquote};
  }
`

const ImageContainer = styled.div`
  width: 80%;
  height: 14rem;
  object-fit: contain;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  
  & img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    overflow: hidden;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    height: 10rem;
  }
`


