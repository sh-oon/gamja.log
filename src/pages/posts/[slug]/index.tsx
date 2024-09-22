import { Toc } from '@/components/molecules/toc'
import { Markdown } from '@/components/organisms/Markdown'
import MarkdownHeader from '@/components/organisms/MarkdownHeader'
import { useDevice } from '@/context/DeviceContext'
import { getPostSourceBySlug } from '@/lib/serialize'
import styled from '@emotion/styled'
import { GetServerSideProps } from 'next'
import { vars } from '@ui-tokens'
import React from 'react'

type Props = {
  articleSource: Awaited<ReturnType<typeof getPostSourceBySlug>>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.params?.slug as string
  const articleSource = await getPostSourceBySlug(slug)
  
  return {
    props: {
      articleSource,
    },
  }
}

export default function ArticlePage({ articleSource }: Props) {
  const post = articleSource.frontmatter
  
  const { isMobile } = useDevice()
  
  return (
    <StyledArticlePage>
      <div className="md-container">
        <MarkdownHeader post={post} />
        <div className="md-contents-container">
          {!isMobile && (<Toc />)}
          <Markdown
            source={articleSource}
          />
        </div>
      </div>
    </StyledArticlePage>
  )
}

const StyledArticlePage = styled.article`
  position: relative;
  padding: 0.75rem;
  background-color: ${vars.$semantic.color.background.white};
  min-height: 100%;
  
  & .md-contents-container {
    display: grid;
    grid-template-columns: 1fr 6fr 1fr;
    gap: 2rem;
    position: relative;
  }
  
  @media (max-width: 768px) {
    & .md-contents-container {
      grid-template-columns: 1fr;
    }
  }
`
