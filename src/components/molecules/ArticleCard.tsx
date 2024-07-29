'use client';

import { TArticle } from '@/types/common';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  post: TArticle
}

function ArticleCard({ post }: Props) {
  return (
    <Link
      className="p-4 md:p-2 border border-grey-900 dark:border-white dark:hover:bg-grey-800 hover:bg-grey-200 flex flex-col justify-between"
      href={`/post/${post.link}`}
    >
      <Image
        src={post.coverImage}
        alt={post.title}
        width={800}
        height={400}
        className="w-full border border-grey-900"
        priority={true}
      />
      <h2 className="text-xl font-semibold">{post.title}</h2>
      <p>{post.date}</p>
      <div>
        {post.tags.map((tag, index) => (
          <span key={index} className="mr-2 text-sm text-blue-500">#{tag}</span>
        ))}
      </div>
    </Link>
  );
}


export default ArticleCard;
