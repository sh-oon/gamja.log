export type TArticle = {
  slug: string;
  title: string;
  link: string;
  date: string;
  coverImage: string;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  tags: string[];
};
