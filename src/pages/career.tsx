import { Markdown } from '@/components/organisms/Markdown';
import { BLOG_LINKS } from '@/constants';
import { getPostSourceBySlug } from '@/lib/serialize';
import { TArticle } from '@/types/common';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export const getServerSideProps: GetServerSideProps = async () => {
  const articleSource = await getPostSourceBySlug('careers');

  return {
    props: {
      articleSource,
    },
  };
};

type Props = {
  articleSource: {
    post: TArticle
    compiledSource: string
    scope: Record<string, unknown>
    frontmatter: Record<string, unknown>
  }
}

const styles = {
  container: 'w-[65rem] md:w-full px-6 md:px-3 mx-auto pt-20 md:pt-10',
  heading1: 'text-4xl font-bold md:text-2xl',
  heading2: 'text-2xl font-semibold md:text-xl',
  heading3: 'text-xl font-semibold md:text-lg',
  paragraph: 'text-lg md:text-base',
  list: 'flex flex-col gap-2',
  listItem: 'text-lg',
};

const career = ({ articleSource }: Props) => {

  return (
    <>
      <section className={styles.container}>
        <h1 className={styles.heading1}>정성훈</h1>
        <div className="w-full flex md:flex-col md:items-center">
          <Image
            src="/assets/avatar.webp"
            alt="avatar"
            width={240}
            height={240}
          />
          <div className="flex-1 flex flex-col gap-2 justify-center">
            <div>
              <p className={styles.heading2}>Frontend Developer</p>
              <p className={styles.paragraph}>Vue, React, Next.js, TypeScript</p>
            </div>
            <div>
              <h2 className={styles.heading2}>Contact</h2>
              <p className="text-lg flex gap-1">
                <span>Email.</span>
                <Link href="mailto:ajcjcjc@gmail.com"
                      className="text-grey-600 underline underline-offset-4 hover:text-grey-900 transition-all">
                  ajcjcjc@gmail.com
                </Link>
              </p>
              <p className="text-lg flex gap-1">
                <span>Mobile.</span>
                <Link href="tel:010-9737-2483"
                      className="text-grey-600 underline underline-offset-4 hover:text-grey-900 transition-all">
                  010-9737-2483
                </Link>
              </p>
            </div>
            <div>
              <h2 className={styles.heading2}>Channel</h2>
              <p className="text-lg flex gap-1">
                <span>GitHub.</span>
                <Link href={BLOG_LINKS.github as string}
                      className="text-grey-600 underline underline-offset-4 hover:text-grey-900 transition-all">
                  github.com/sh-oon
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.container}>
        <Markdown source={articleSource} />
      </section>
    </>
  );
};

export default career;
