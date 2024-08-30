import { Markdown } from '@/components/organisms/Markdown';
import MarkdownHeader from '@/components/organisms/MarkdownHeader';
import { useDevice } from '@/context/DeviceContext';
import { getPostSourceBySlug } from '@/lib/serialize';
import { GetServerSideProps } from 'next';
import React from 'react';

type Props = {
  articleSource: Awaited<ReturnType<typeof getPostSourceBySlug>>
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
  const post = articleSource.frontmatter;

  const { isMobile } = useDevice();

  return (
    <article className="p-3">
      <div className="flex flex-col items-center">
        <div className="w-[65rem] max-w-full flex flex-col pt-[3rem] gap-y-4 mb-16">
          <MarkdownHeader post={post} />
          <Markdown source={articleSource} />
        </div>
      </div>
    </article>
  );
}
