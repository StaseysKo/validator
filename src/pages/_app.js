import 'src/styles/globals.css';
import 'src/styles/iconsStyle.css';
import 'src/styles/logoStyle.css';

// ----------------------------------------------------------------------
// next
import Head from 'next/head';
// theme
import ThemeProvider from 'src/theme';

// ----------------------------------------------------------------------
import CallBackButton from 'src/components/CallBackButton';

// ----------------------------------------------------------------------

import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';


export default function App({ Component, pageProps }) {

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <AppRouterCacheProvider {...pageProps}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width, user-scalable=no" />
      </Head>


      <ThemeProvider>
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>

    </AppRouterCacheProvider>
  );
}
