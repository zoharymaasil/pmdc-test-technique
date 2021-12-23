import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import AppHeader from 'components/Layout/AppHeader';
import AppFooter from 'components/Layout/AppFooter';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Le Blog</title>
        <meta name="description" content="Test technique SSG" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppHeader />
      <main>
        <Component {...pageProps} />
      </main>
      <AppFooter />
    </>
    
  );
}

export default MyApp
