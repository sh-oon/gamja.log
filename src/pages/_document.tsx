import { Html, Head, Main, NextScript } from 'next/document';
import HeaderComponent from '@/components/organisms/HeaderComponent';

export default function Document() {
  return (
    <Html lang='kr'>
      <Head></Head>
      <body>
        <HeaderComponent />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
