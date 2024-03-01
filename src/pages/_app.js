import { useEffect } from 'react';
import { useRouter } from 'next/router';
// scroll bar
import 'simplebar/src/simplebar.css';

// lightbox
/* eslint-disable import/no-unresolved */
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

// slick-carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// lazy image
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';

import 'src/styles/globals.css';
import 'src/styles/iconsStyle.css';
import 'src/styles/logoStyle.css';

// ----------------------------------------------------------------------

import PropTypes from 'prop-types';
// next
import Head from 'next/head';
// @mui
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';
// theme
import ThemeProvider from 'src/theme';
// components
import ProgressBar from 'src/components/ProgressBar';

// ----------------------------------------------------------------------
import CallBackButton from 'src/components/CallBackButton';

// ----------------------------------------------------------------------

import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Функция инициализации Яндекс.Метрики
    const initYandexMetrika = () => {
      (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
      m[i].l=1*new Date();
      var j=0;
      while(j < e.scripts.length){if (e.scripts[j].src === r) { return; } j++; }
      k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
      (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

      ym(96137092, "init", {
          defer: true,
          clickmap:true,
          trackLinks:true,
          accurateTrackBounce:true,
          webvisor:true
      });
    };

    // Вызов функции инициализации при первой загрузке
    initYandexMetrika();

    // Функция для отслеживания событий маршрутизации
    const handleRouteChange = (url) => {
      ym(96137092, 'hit', url);
    };

    // Подписка на события изменения маршрута
    router.events.on('routeChangeComplete', handleRouteChange);

    // Отписка от событий при размонтировании компонента
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <AppRouterCacheProvider {...pageProps}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width, user-scalable=no" />
      </Head>

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <ThemeProvider>
          <ProgressBar />
          <CallBackButton />
          {getLayout(<Component {...pageProps} />)}
        </ThemeProvider>
      </LocalizationProvider>
    </AppRouterCacheProvider>
  );
}
