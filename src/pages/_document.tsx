import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
      <link rel="icon" href="../../public/favicon.ico" />
      </Head>
      <body className='bg-zinc-900 text-white selection:bg-slate-700'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
