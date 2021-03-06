import 'tailwindcss/tailwind.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

import ErrorBoundary from '../components/ErrorBoundary';
import LanguageContext from '../components/LanguageContext';
import type { AvailableLanguages } from '../lib/languages';

export default function app({ Component, pageProps }: AppProps): JSX.Element {
  const { defaultLocale = 'en-US', locale = defaultLocale } = useRouter();

  React.useEffect(() => {
    if ('serviceWorker' in navigator)
      window.addEventListener(
        'load',
        () => void navigator.serviceWorker.register('/sw.js')
      );
  }, []);

  return (
    <LanguageContext.Provider value={locale as AvailableLanguages['type']}>
      <ErrorBoundary>
        <>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, viewport-fit=cover"
            />
          </Head>
          <Component {...pageProps} />
        </>
      </ErrorBoundary>
    </LanguageContext.Provider>
  );
}
