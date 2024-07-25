import { Markdown } from '@/components/organisms/Markdown';
import { getPostSlugs, getPostSourceBySlug } from '@/lib/serialize';
import { TArticle } from '@/types/common';
import { GetServerSideProps, Metadata } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

type Props = {
  slug: string;
  source: {
    post: TArticle;
    compiledSource: string;
    scope: Record<string, unknown>;
    frontmatter: Record<string, unknown>;
  };
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.params?.slug as string;
  const source = await getPostSourceBySlug(slug);

  console.log('source', source);

  return {
    props: {
      slug,
      source,
    },
  };
};

export default function ArticlePage({ slug, source }: Props) {
  const post = source.post;
  console.log('slug', source);

  return (
    <article className='p-3'>
      <div className='flex flex-col items-center'>
        <div className='w-[65rem] max-w-full flex flex-col pt-[3rem] gap-y-4 mb-16'>
          <h1 className='text-6xl font-medium leading-tight tracking-tighter text-center break-keep md:leading-none md:text-start'>
            {post.title}
          </h1>
        </div>
        <div className='w-[65rem] max-w-full md:max-w-[60%]'>
          <Markdown source={source} />
        </div>
      </div>
    </article>
  );
}
