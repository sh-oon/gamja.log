import Posts from '@/components/templates/posts';
import { getAllPosts } from '@/lib/serialize';
import { TArticle } from '@/types/common';
import styled from '@emotion/styled'
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

export default function PostPage({ posts }: Props) {
  return (
    <StyledSection>
      <Posts posts={posts} />
    </StyledSection>
  );
}

const StyledSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 1rem 1.5rem 0;
  
  @media (max-width: 768px) {
    padding: 1rem 1rem;
  }
`
