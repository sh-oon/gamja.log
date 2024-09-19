'use client';

import { TArticle } from '@/types/common';
import { formatDate } from '@/utils/common';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  post: TArticle
}

export const ArticleCard = ({ post }: Props) => {
  return (
    <Link
      className="px-5 py-10 gap-16 md:p-2 border border-grey-900 dark:border-white dark:hover:bg-grey-800 hover:bg-grey-200 flex flex-col justify-between items-center"
      href={`/posts/${post.link}`}
    >
      <div className="flex flex-col gap-4 justify-center items-center">
        <h2 className="text-4xl font-semibold text-center">{post.title}</h2>
        <div>
          {post.tags.map((tag, index) => (
            <span key={index} className="mr-2 text-md border rounded-full border-grey-900 dark:border-white px-2 py-1">#{tag}</span>
          ))}
        </div>
      </div>
      <Image
        src={post.coverImage}
        alt={post.title}
        width={800}
        height={400}
        className="w-4/5 h-56 object-contain mx-auto"
        priority={true}
      />
      <div className='flex flex-col'>
        <p className="text-center text-sm">{formatDate(post.date, 'YYMMDD')}</p>
      </div>
    </Link>
  );
}


