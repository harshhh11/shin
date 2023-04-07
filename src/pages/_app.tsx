import '~/styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from 'next/font/local';
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

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
