'use client';

import ToC from '@/components/molecules/ToC';
import { useDevice } from '@/context/DeviceContext';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';
import { getPostSourceBySlug } from '@/lib/serialize';
import React from 'react';

type Props = {
  source: Awaited<ReturnType<typeof getPostSourceBySlug>>
}

export const Markdown = ({ source }: Props) => {
  const { isDesktop } = useDevice();
  return (
    <div className="relative flex w-full gap-4">
      <div className="w-[65rem] md:w-full max-w-full flex-shrink-0">
        <article id="markdown" className="relative flex flex-col w-full pb-20 leading-loose gap-y-6 md:text-md">
          {source.frontmatter.coverImage && (
            <Image
              src={(source.frontmatter.coverImage as string) ?? ''}
              alt={(source.frontmatter.title as string) ?? ''}
              width={1200}
              height={600}
              className="w-4/5 mx-auto mb-20 rounded-lg shadow-md"
              priority
            />
          )}
          <MDXRemote
            {...source}
            components={{
              // Headings
              h1: ({ children }) => (
                <h1 id={children?.toString()} className="pt-12 text-4xl font-bold">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 id={children?.toString()} className="pt-10 text-3xl font-bold">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 id={children?.toString()} className="pt-6 text-xl font-bold">
                  {children}
                </h3>
              ),
              h4: ({ children }) => (
                <h4 id={children?.toString()} className="pt-2 text-lg font-semibold">
                  {children}
                </h4>
              ),

              // Lists
              ul: ({ children }) => <ul className="flex flex-col list-disc list-inside gap-y-2">{children}</ul>,
              ol: ({ children }) => <ol className="list-decimal list-inside">{children}</ol>,

              // Link
              a: ({ children, href }) => (
                <a target="_blank" href={href} className="inline text-blue-500 hover:text-blue-600 hover:underline">
                  {children}
                </a>
              ),

              // Image
              img: ({ src, alt }) => (
                <span className="flex justify-center w-full py-6">
                  <Image
                    src={src ?? ''}
                    alt={alt ?? ''}
                    width={800}
                    height={400}
                    className="w-full rounded-lg shadow-md"
                  />
                </span>
              ),

              blockquote: ({ children }) => (
                <blockquote
                  className="px-4 py-2 border-l-4 border-black bg-grey-100 dark:bg-grey-900 dark:border-white">
                  {children}
                </blockquote>
              ),

              hr: () => <hr className="my-2 border-gray-200 border-t-1" />,
            }}
          />
        </article>
      </div>
    </div>
  );
};
