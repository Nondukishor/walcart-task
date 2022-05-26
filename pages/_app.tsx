import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import Head from 'next/head';
import client from '../apollo/client';
import { createEmotionCache } from '../config/cache';
import theme from '../config/theme';
import CssBaseline from '@mui/material/CssBaseline';
const clientSideEmotionCache = createEmotionCache();
import MainLayout from '../layout/MainLayout';
import LayoutContextProvider from '../layout/LayoutContext';
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function App(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ApolloProvider client={client}>
          <LayoutContextProvider>
            <Head>
              <meta
                name="viewport"
                content="initial-scale=1, width=device-width"
              />
            </Head>
            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>
          </LayoutContextProvider>
        </ApolloProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
