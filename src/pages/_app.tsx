import '~/styles/globals.css'
import type { AppProps } from 'next/app'
import { Roboto_Condensed } from 'next/font/google';
import localFont from 'next/font/local';

const satoshi = localFont({
  src: '../../public/fonts/Satoshi-Variable.woff2' 
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={satoshi.className}>
      <Component {...pageProps} />
    </main>
  )
}
