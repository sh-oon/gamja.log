import ToC from '@/components/molecules/ToC';
import { Markdown } from '@/components/organisms/Markdown';
import MarkdownHeader from '@/components/organisms/MarkdownHeader';
import { useDevice } from '@/context/DeviceContext';
import { getPostSourceBySlug } from '@/lib/serialize';
import { TArticle } from '@/types/common';
import { GetServerSideProps } from 'next';
import React from 'react';

type Props = {
  articleSource: {
    post: TArticle
    compiledSource: string
    scope: Record<string, unknown>
    frontmatter: Record<string, unknown>
  }
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.params?.slug as string;
  const articleSource = await getPostSourceBySlug(slug);

  return {
    props: {
      articleSource,
    },
  };
};

export default function ArticlePage({ articleSource }: Props) {
  const post = articleSource.post;

  const { isMobile } = useDevice();

  console.log(post);
  return (
    <article className="p-3">
      <div className="flex flex-col items-center">
        <div className="w-[65rem] max-w-full flex flex-col pt-[3rem] gap-y-4 mb-16">
          <MarkdownHeader post={post} />
        </div>
            <Markdown source={articleSource} />

      </div>

    </article>
  );
}
