import { TArticle } from '@/types/common'
import { formatDate } from '@/utils/common'
import styled from '@emotion/styled'
import React from 'react'
import { Text } from '@/components/atoms'
import { vars } from '@ui-tokens'

type Props = {
  post: TArticle
}

function MarkdownHeader({ post }: Props) {
  return (
    <StyledMarkdownHeader>
      <Text as={'h1'} typography={'title-xxl-bold'}>
        {post.title}
      </Text>
      <div className='description-container'>
        <Text
          typography={'text-m'}
          color={'tertiary'}
        >{formatDate(post.date, 'kr')}</Text>
        <div className='tag-container'>
          {post.tags.map((tag, index) => (
            <Text
              key={index}
              typography='text-m-bold'
              color='interactive'
              className='rounded-full text-primary-main bg-grey-200 dark:bg-grey-700'
            >
              #{tag}
            </Text>
          ))}
        </div>
      </div>
    </StyledMarkdownHeader>
  )
}

const StyledMarkdownHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  max-width: 65rem;
  margin: 0 auto;
  padding-top: 2rem;
  
  & .description-container {
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
  }
  
  & .tag-container {
    display: flex;
    gap: 0.5rem;
  }
  
  & .tag-container span {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    background-color: ${vars.$semantic.color.background.blockquote};
  }
`

export default MarkdownHeader
