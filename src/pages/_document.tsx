import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='kr'>
      <Head>
        <meta charSet='utf-8' />
        <meta name='title' content='Gamja.log' />
        <meta name='description' content='Gamja.log' />
        <meta name='author' content='author' />
        <meta name='keywords' content='Gamja.log' />
        <meta name='robots' content='index, follow' />
        <meta name='theme-color' content='#000000' />
        <meta name='og:title' content='Gamja.log' />
        <meta name='og:description' content='Gamja.log' />
        <meta name='og:type' content='website' />
        <meta name='og:url' content='https://gamjalog.vercel.app/' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
        <link href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap' rel='stylesheet' />
      </Head>
      <body>
      <Main />
      <NextScript />
      </body>
    </Html>
  );
}
