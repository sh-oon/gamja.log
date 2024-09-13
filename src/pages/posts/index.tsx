import Posts from '@/components/templates/posts';
import { getAllPosts } from '@/lib/serialize';
import { TArticle } from '@/types/common';
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
      <Posts posts={posts} />
    </section>
  );
}

export default PostPage;
