import { AppProps } from 'next/app';

import '@/styles/globals.css';
import { usePanelbear } from '@panelbear/panelbear-nextjs';
function MyApp({ Component, pageProps }: AppProps) {
  usePanelbear('8kdLsp3e2F');

  return <Component {...pageProps} />;
}

export default MyApp;
