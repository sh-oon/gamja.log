'use client';

import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';
import { getPostSourceBySlug } from '@/lib/serialize';

type Props = {
  source: Awaited<ReturnType<typeof getPostSourceBySlug>>;
};

export const Markdown = ({ source }: Props) => {
  return (
    <article id='markdown' className='flex flex-col w-full pb-20 leading-loose gap-y-3'>
      <MDXRemote
        {...source}
        components={{
          // Headings
          h2: ({ children }) => (
            <h2 id={children?.toString()} className='pt-10 text-3xl font-semibold'>
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 id={children?.toString()} className='pt-6 text-xl font-semibold'>
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 id={children?.toString()} className='pt-2 text-lg'>
              {children}
            </h4>
          ),

          // Lists
          ul: ({ children }) => <ul className='flex flex-col list-disc list-inside gap-y-3'>{children}</ul>,
          ol: ({ children }) => <ol className='list-decimal list-inside'>{children}</ol>,

          // Link
          a: ({ children, href }) => (
            <a target='_blank' href={href} className='inline text-blue-500 hover:text-blue-600 hover:underline'>
              {children}
            </a>
          ),

          // Image
          img: ({ src, alt }) => (
            <span className='flex justify-center w-full py-6'>
              <Image
                src={src ?? ''}
                alt={alt ?? ''}
                width={800}
                height={400}
                className='w-full md:w-[70%] rounded-lg shadow-md'
              />
            </span>
          ),

          blockquote: ({ children }) => <blockquote className='pl-4 border-l-4 border-black'>{children}</blockquote>,

          // Code / Pre 에 대한 스타일링은 markdown.css 에 정의
        }}
      />
    </article>
  );
};
