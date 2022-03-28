import { theme } from '@adacafe/common-ui';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to frontend!</title>
      </Head>
      <main className="app">
        {/* TODO: add a theme for adaCafe 
        https://bareynol.github.io/mui-theme-creator/ 
        and
        https://material.io/inline-tools/color/ 
        can help  */}
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </main>
    </>
  );
}

export default CustomApp;
