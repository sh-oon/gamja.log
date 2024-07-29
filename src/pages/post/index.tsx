import ArticleCard from '@/components/molecules/ArticleCard';
import ArticleTagsCard from '@/components/molecules/ArticleTagsCard';
import Grid from '@/components/templates/Grid';
import PostTemplate from '@/components/templates/PostTemplate';
import { useDevice } from '@/context/DeviceContext';
import { getAllPosts } from '@/lib/serialize';
import { TArticle } from '@/types/common';
import { uniqueTags } from '@/utils/common';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  const firstPagePosts = await getAllPosts(1, 10);

  return {
    props: {
      posts: firstPagePosts,
    },
  };
};

type Props = {
  posts: TArticle[],
}

function PostPage({ posts }: Props) {
  return (
    <section className="px-6 pt-4 md:px-4">
      <PostTemplate posts={posts} />
    </section>
  );
}

export default PostPage;
