import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>
          Zaenal Farm | Jual Domba Aqiqah, Qurban, Ternak, dan Lain-lain.
        </title>
        <meta
          name="description"
          content="Jual Domba Aqiqah, Qurban, Ternak, dan Lain-lain."
        />
        <meta name="keywords" content="zaenalfarm, domba, wanasalam" />
        <meta
          property="og:title"
          content="Zaenal Farm | Jual Domba Aqiqah, Qurban, Ternak, dan Lain-lain."
        />
        <meta
          property="og:description"
          content="Jual Domba Aqiqah, Qurban, Ternak, dan Lain-lain."
        />
        <meta property="og:image" content="/public/kurban-2023.jpg" />
        <link rel="icon" href="/public/kurban-2023.jpg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
