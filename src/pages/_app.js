import 'src/styles/globals.css';
import 'src/styles/iconsStyle.css';
import 'src/styles/logoStyle.css';

// ----------------------------------------------------------------------
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
      <ThemeProvider>
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
