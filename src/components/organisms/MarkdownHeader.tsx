import { TArticle } from '@/types/common'
import { formatDate } from '@/utils/common'
import React from 'react'

type Props = {
  post: TArticle
}

function MarkdownHeader({ post }: Props) {
  return (
    <div className='flex flex-col gap-6'>
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
    </div>
  )
}

export default MarkdownHeader
