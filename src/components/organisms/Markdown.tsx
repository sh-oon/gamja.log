'use client'

import styled from '@emotion/styled'
import Image from 'next/image'
import { Text } from '@/components/atoms'
import { MDXRemote } from 'next-mdx-remote'
import { getPostSourceBySlug } from '@/lib/serialize'
import { vars } from '@ui-tokens'
import Link from 'next/link'
import React from 'react'

type Props = {
  source: Awaited<ReturnType<typeof getPostSourceBySlug>>
}

export const Markdown = ({ source }: Props) => {
  
  return (
    <StyledMarkdownContainer>
      <article id="markdown">
        {(typeof source.frontmatter.coverImage === 'string') && (
          <Image
            src={source.frontmatter.coverImage}
            alt={(source.frontmatter.title as string) ?? ''}
            width={1200}
            height={600}
            className="thumbnail"
            priority
          />
        )}
        
        <MDXRemote
          {...source}
          components={{
            // Headings
            h1: ({ children }) => (
              <Text
                as="h1"
                typography="title-xxl-bold"
                id={children?.toString()}
              >{children}</Text>
            ),
            h2: ({ children }) => (
              <Text
                as="h2"
                typography="title-xl-bold"
                id={children?.toString()}
              >{children}</Text>
            ),
            h3: ({ children }) => (
              <Text
                as="h3"
                typography="title-l-bold"
                id={children?.toString()}
              >{children}</Text>
            ),
            h4: ({ children }) => (
              <Text
                as="h4"
                typography="title-m-bold"
                id={children?.toString()}
              >{children}</Text>
            ),
            
            // Lists
            ul: ({ children }) => <ul role={'list'}>{children}</ul>,
            ol: ({ children }) => <ol role={'list'}>{children}</ol>,
            li: ({ children }) => <li>{children}</li>,
            
            // Link
            a: ({ children, href }) => (
              <Link
                href={href as string}
                className="link"
                target="_blank"
              >
                {children}
              </Link>
            ),
            
            // Image
            img: ({ src, alt }) => (
              <span className="image-container">
                  <Image
                    src={src ?? ''}
                    alt={alt ?? ''}
                    width={800}
                    height={400}
                    priority
                  />
                </span>
            ),
            
            blockquote: ({ children }) => (
              <StyledBlockquote>
                {children}
              </StyledBlockquote>
            ),
            
            hr: () => <hr />,
          }}
        />
      </article>
    </StyledMarkdownContainer>
  )
}

const StyledMarkdownContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;
  
  & #markdown {
    max-width: 65rem;
    margin: 0 auto;
  }
  
  & .thumbnail {
    width: 80%;
    margin: 5rem auto;
    border-radius: 1rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  & > div {
    width: 65rem;
    max-width: 100%;
    flex-shrink: 0;
  }
  
  & article {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-bottom: 5rem;
    line-height: 2;
    row-gap: .5rem;
  }
  
  & img {
    width: 100%;
    height: auto;
  }
  
  & h1 {
    margin-top: 3rem;
  }
  
  & h2, & h3, & h4 {
    margin-top: 2rem;
  }
  
  & ul {
    display: flex;
    flex-direction: column;
    list-style-type: disc;
    list-style-position: inside;
    gap: 2px;
  }
  
  & ol {
    display: flex;
    flex-direction: column;
    list-style-type: decimal;
    list-style-position: inside;
    gap: 2px;
  }
  
  & .link {
    color: ${vars.$semantic.color.text.interactive};
    
    & :hover {
      color: ${vars.$semantic.color.text.interactiveHover};
      text-decoration: underline;
    }
  }
  
  & .image-container {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 3rem 0;
    
    & img {
      width: 100%;
      max-width: 800px;
      height: auto;
    }
  }
  
  & hr {
    margin: 0.5rem 0;
    border-top: 1px solid ${vars.$semantic.color.border.divider};
  }
  
  & code {
    /* gray 200 */
    background-color: var(--color-neutral-20);
    border-radius: 0.25rem;
    padding: 0 0.25rem;
    margin: 0 0.1rem;
    font-size: small;
    counter-reset: line;
  }
  
  & pre {
    border: 1px solid var(--color-border-line);
    width: 100%;
    padding: 1rem;
    border-radius: 0.375rem;
    overflow-x: auto;
    font-size: 0.875rem;
    margin: 1rem 0;
  }
  
  & pre > code {
    background-color: transparent;
  }
  
  & code > [data-line]::before {
    counter-increment: line;
    content: counter(line);
    display: inline-block;
    width: 1rem;
    margin-right: 2rem;
    text-align: right;
    color: #6b7280;
  }
  
  & code[data-line-numbers-max-digits="2"] > [data-line]::before {
    width: 2rem;
  }
  
  & code[data-line-numbers-max-digits="3"] > [data-line]::before {
    width: 3rem;
  }
  
  & li > ul {
    padding-left: 2rem;
  }
  
  & li > ul li {
    list-style-type: circle;
  }
  
  
  @media (max-width: 768px) {
    & #markdown {
      padding: 0 1rem;
      width: 100%;
      max-width: none;
    }
    
    & .thumbnail {
      width: 100%;
      margin: 2rem auto;
    }
    
    & > div {
      width: 100%;
    }
  }
  
  @media (prefers-color-scheme: dark) {
    p {
      color: ${vars.$semantic.color.text.secondary};
    }
    
    hr {
      border-color: ${vars.$semantic.color.border.dividerStrong};
      background-color: ${vars.$semantic.color.background.dark};
    }
  }
`

const StyledBlockquote = styled.blockquote`
  margin: 1rem 0;
  padding: 1rem;
  font-style: italic;
  border-left: 4px solid ${vars.$semantic.color.border.divider};
  background-color: ${vars.$semantic.color.background.blockquote};
`
