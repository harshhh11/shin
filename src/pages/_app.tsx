import '~/styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';

import localFont from 'next/font/local';

const satoshi = localFont({
  src: '../../public/fonts/Satoshi-Bold.woff2',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
    <main className={satoshi.className}>
      <Component {...pageProps} />
    </main>
    </SessionProvider>
  );
}
