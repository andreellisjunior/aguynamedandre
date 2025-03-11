import { Html, Head, Main, NextScript } from 'next/document';
import OpenGraphImage from '../../public/opengraph-image.png';

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <link
        rel='stylesheet'
        type='text/css'
        href='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css'
      />
      <meta
        name='description'
        content='I solve problems with modern technology'
      />

      <meta property='og:url' content='https://aguynamedandre.com' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content="I'm André! Nice to finally meet!" />
      <meta
        property='og:description'
        content='I solve problems with modern technology'
      />
      <meta property='og:image' content={OpenGraphImage.src} />

      <meta name='twitter:card' content='summary_large_image' />
      <meta property='twitter:domain' content='aguynamedandre.com' />
      <meta name='twitter:title' content="I'm André! Nice to finally meet!" />
      <meta
        name='twitter:description'
        content='I solve problems with modern technology'
      />
      <meta name='twitter:image' content={OpenGraphImage.src} />

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
