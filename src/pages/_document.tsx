import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head></Head>
      <body className="bg-zinc-900 text-white selection:bg-slate-700 pb-20">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
