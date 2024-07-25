import fs from 'fs/promises' // 비동기 fs 사용
import { join } from 'path'
import { TArticle } from '@/types/common'
import { serialize } from 'next-mdx-remote/serialize'
import remarkGfm from 'remark-gfm'
import rehypeCode from 'rehype-pretty-code'
import { getShikiHighlighter } from '@/lib/shiki'

const articleDir = join(process.cwd(), '/_articles')

export async function getPostSlugs() {
  const files = await fs.readdir(articleDir)
  return files.map((slug) => slug.replace(/\.mdx$/, ''))
}

const getPostRawSourceBySlug = async (slug: string) => {
  const fullPath = join(articleDir, `${slug}.mdx`)
  const fileContents = await fs.readFile(fullPath, 'utf8')

  return fileContents
}

export const getPostSourceBySlug = async (slug: string) => {
  const fileContents = await getPostRawSourceBySlug(slug)

  const serializedData = await serialize(fileContents, {
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
    post: { ...serializedData.frontmatter, slug } as TArticle,
  }
}

const getPostFrontmatterBySlug = async (slug: string) => {
  const fileContents = await getPostRawSourceBySlug(slug)

  const serializedData = await serialize(fileContents, {
    parseFrontmatter: true,
  })

  return { ...serializedData.frontmatter, slug } as TArticle
}

export const getAllPosts = async () => {
  const slugs = await getPostSlugs()

  const posts = await Promise.all(slugs.map((slug) => getPostFrontmatterBySlug(slug))).then((sources) =>
    sources.sort((post1, post2) => (post1.date > post2.date ? -1 : 1)),
  )

  return posts
}
