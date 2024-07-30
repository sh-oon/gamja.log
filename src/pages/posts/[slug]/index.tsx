import { Markdown } from '@/components/organisms/Markdown'
import { getPostSourceBySlug } from '@/lib/serialize'
import { TArticle } from '@/types/common'
import { GetServerSideProps } from 'next'
import React from 'react'

type Props = {
  slug: string
  articleSource: {
    post: TArticle
    compiledSource: string
    scope: Record<string, unknown>
    frontmatter: Record<string, unknown>
  }
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.params?.slug as string
  const articleSource = await getPostSourceBySlug(slug)

  return {
    props: {
      slug,
      articleSource,
    },
  }
}

export default function ArticlePage({ articleSource }: Props) {
  const post = articleSource.post

  return (
    <article className='p-3'>
      <div className='flex flex-col items-center'>
        <div className='w-[65rem] max-w-full flex flex-col pt-[3rem] gap-y-4 mb-16'>
          <h1 className='text-6xl font-medium leading-tight tracking-tighter text-center break-keep md:leading-none md:text-start'>
            {post.title}
          </h1>
        </div>
        <div className='w-[65rem] max-w-full'>
          <Markdown source={articleSource} />
        </div>
      </div>
    </article>
  )
}
