

// ----------------------------------------------------------------------
import CallBackButton from 'src/components/CallBackButton';

// ----------------------------------------------------------------------

import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';


export default function App({ Component, pageProps }) {

  return (
    <AppRouterCacheProvider {...pageProps}>
        <Component {...pageProps} />
    </AppRouterCacheProvider>
  );
}
