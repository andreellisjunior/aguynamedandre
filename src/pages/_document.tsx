import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <link
        rel='stylesheet'
        type='text/css'
        href='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css'
      />
      <title>I'm André! Nice to finally meet!</title>
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
      <meta
        property='og:image'
        content='https://opengraph.b-cdn.net/production/images/c94aa915-2c3c-45f5-abc3-e8d4a228ef33.png?token=9ftoQWzEKO81HMi62couFKSfEmjp-4ty4qoaVsDcv5s&height=546&width=1200&expires=33277704558'
      />

      <meta name='twitter:card' content='summary_large_image' />
      <meta property='twitter:domain' content='aguynamedandre.com' />
      <meta property='twitter:url' content='https://aguynamedandre.com' />
      <meta name='twitter:title' content="I'm André! Nice to finally meet!" />
      <meta
        name='twitter:description'
        content='I solve problems with modern technology'
      />
      <meta
        name='twitter:image'
        content='https://opengraph.b-cdn.net/production/images/c94aa915-2c3c-45f5-abc3-e8d4a228ef33.png?token=9ftoQWzEKO81HMi62couFKSfEmjp-4ty4qoaVsDcv5s&height=546&width=1200&expires=33277704558'
      />

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
