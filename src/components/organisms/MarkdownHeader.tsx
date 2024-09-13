import { TArticle } from '@/types/common'
import { formatDate } from '@/utils/common'
import styled from '@emotion/styled'
import React from 'react'

type Props = {
  post: TArticle
}

function MarkdownHeader({ post }: Props) {
  return (
    <StyledMarkdownHeader>
      <h1 className='text-6xl font-medium leading-tight tracking-tighter break-keep md:leading-none text-start'>
        {post.title}
      </h1>
      <div className='flex flex-col gap-2'>
        <span className='text-grey-600'>{formatDate(post.date, 'kr')}</span>
        <div className='flex gap-2'>
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className='px-3 py-1 font-semibold rounded-full text-primary-main bg-grey-200 dark:bg-grey-700'
            >
              {tag}
            </span>
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
`

export default MarkdownHeader
