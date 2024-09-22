import { ArticleCard, ArticleTagCard } from '@/components/molecules';
import Grid from '@/components/organisms/Grid';
import { useDevice } from '@/context/DeviceContext';
import { TArticle } from '@/types/common';
import { uniqueTags } from '@/utils/common';
import { useState } from 'react';

type Props = {
  posts: TArticle[],
}

function Posts({ posts }: Props) {
  const [filteredPosts, setFilteredPosts] = useState<TArticle[]>(posts);
  const { isMobile } = useDevice();

  const tags = posts.map((post) => post.tags);

  const filterPosts = (tags: string[]) => {
    setFilteredPosts(posts.filter((post) => tags.every((tag) => post.tags.includes
    (tag))));
  };

  return (
    <Grid columns={isMobile ? 1 : 3}>
      <ArticleTagCard
        tags={uniqueTags(tags)}
        selectHandler={(tags) => {
          filterPosts(tags);
        }}
      />
      {filteredPosts.map((post, index) => (
        <ArticleCard post={post} key={index} />
      ))}
    </Grid>
  );
}


export default Posts;
