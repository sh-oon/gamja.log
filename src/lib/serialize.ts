import fs from 'fs/promises';
import { MDXRemoteSerializeResult } from 'next-mdx-remote' // 비동기 fs 사용
import { join } from 'path';
import { TArticle } from '@/types/common';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import rehypeCode from 'rehype-pretty-code';
import { getShikiHighlighter } from '@/lib/shiki';

type TScope = {
  [key: string]: unknown;
}

const articleDir = join(process.cwd(), '_articles')
const careerDir = join(process.cwd(), '_careers')

export async function getPostSlugs(page = 1, perPage = 10): Promise<string[]> {
  const files = await fs.readdir(articleDir)

  const start = (page - 1) * perPage
  const end = start + perPage
  return files.slice(start, end).map((slug) => slug.replace(/\.mdx$/, ''))
}

const getPostRawSourceBySlug = async (slug: string) => {
  const fullPath = join(slug === 'careers' ? careerDir : articleDir, `${slug}.mdx`)
  return await fs.readFile(fullPath, 'utf8')
}

export const getPostSourceBySlug = async (slug: string):Promise<MDXRemoteSerializeResult<TScope, TArticle>> => {
  const fileContents = await getPostRawSourceBySlug(slug)

  const serializedData = await serialize<TScope, Omit<TArticle, 'slug'>>(fileContents, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        [
          rehypeCode,
          {
            theme: 'solarized-light',
            getHighlighter: getShikiHighlighter,
            keepBackground: false,
          },
        ],
      ],
      format: 'mdx',
    },
    parseFrontmatter: true,
  })

  return {
    ...serializedData,
    frontmatter: { ...serializedData.frontmatter, slug } as TArticle,
  }
}

const getPostFrontmatterBySlug = async (slug: string): Promise<TArticle> => {
  const fileContents = await getPostRawSourceBySlug(slug)

  const serializedData = await serialize(fileContents, {
    parseFrontmatter: true,
  })

  return { ...serializedData.frontmatter, slug } as TArticle
}

export const getAllPosts = async (page = 1, perPage = 10) => {
  const slugs = await getPostSlugs(page, perPage)

  const posts = await Promise.all(slugs.map((slug) => getPostFrontmatterBySlug(slug))).then((sources) =>
    sources.sort((post1, post2) => (post1.date > post2.date ? -1 : 1)),
  )

  return posts
}

const getPostByTag = async (tag: string) => {
  const slugs = await getPostSlugs()

  const posts = await Promise.all(slugs.map((slug) => getPostFrontmatterBySlug(slug))).then((sources) =>
    sources.filter((post) => post.tags.includes(tag)),
  )

  return posts
}
