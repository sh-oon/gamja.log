import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Global, ThemeProvider } from '@emotion/react';
import { theme } from '@/types/theme';
import reset from '@/styles/reset';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={reset} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
