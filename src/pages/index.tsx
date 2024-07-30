import Head from 'next/head';

const styles = {
  section: 'flex justify-center items-center w-full px-6 md:px-3',
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Gamja.log</title>
        <meta name='description' content='gamja.log' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        <meta property="og:title" content="gamjs.log" />
        <meta property="og:description" content="gamja.log" />
        <meta property="og:image" content="https://gamjalog.vercel.app/favicon.ico" />
        <meta property="og:image:alt" content="gamjs.log" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gamja-log.vercel.app" />
      </Head>
      <section className={styles.section}>
        <h1>Gamja-log</h1>
        <p>개발자의 개인 블로그입니다.</p>
      </section>
    </>
  );
}
