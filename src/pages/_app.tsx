import '@/styles/globals.css';
import HeaderComponent from '@/components/organisms/HeaderComponent';
import { DeviceProvider } from '@/context/DeviceContext';
import type { AppProps } from 'next/app';
import MainLayout from '@/components/MainLayout';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <DeviceProvider userAgent={pageProps.userAgent}>
      <HeaderComponent />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </DeviceProvider>
  );
}
