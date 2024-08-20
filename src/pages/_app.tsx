import '@/styles/globals.css';
import { Header } from '@/components/organisms'
import { DeviceProvider } from '@/context/DeviceContext';
import type { AppProps } from 'next/app';
import MainLayout from '@/components/MainLayout';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <DeviceProvider userAgent={pageProps.userAgent}>
      <Header />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </DeviceProvider>
  );
}
