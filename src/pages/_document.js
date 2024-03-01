// import * as React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';
import { DocumentHeadTags, documentGetInitialProps } from '@mui/material-nextjs/v13-pagesRouter';
// import createEmotionServer from '@emotion/server/create-instance';
// import createEmotionCache from '../theme/createEmotionCache';

// export default class MyDocument extends Document(props) {


  // static async getInitialProps(ctx) {
  //   // Создание экземпляра кэша Emotion
  //   const emotionCache = createEmotionCache();
  //   const { extractCriticalToChunks } = createEmotionServer(emotionCache);

  //   // Оригинальная функция рендеринга страницы
  //   const originalRenderPage = ctx.renderPage;

  //   ctx.renderPage = () =>
  //     originalRenderPage({
  //       // Переопределение рендера приложения для включения кэша Emotion
  //       enhanceApp: (App) => (props) => <App emotionCache={emotionCache} {...props} />,
  //     });

  //   // Вызов getInitialProps у документа
  //   const initialProps = await Document.getInitialProps(ctx);
  //   // Извлечение критических стилей Emotion
  //   const emotionStyles = extractCriticalToChunks(initialProps.html);
  //   const emotionStyleTags = emotionStyles.styles.map((style) => (
  //     <style
  //       data-emotion={`${style.key} ${style.ids.join(' ')}`}
  //       key={style.key}
  //       // eslint-disable-next-line react/no-danger
  //       dangerouslySetInnerHTML={{ __html: style.css }}
  //     />
  //   ));

  //   return {
  //     ...initialProps,
  //     styles: [
  //       ...React.Children.toArray(initialProps.styles),
  //       ...emotionStyleTags,
  //     ],
  //   };
  // }

export default function Document(props) {

return (
    <Html lang="ru">
      <Head>
        <DocumentHeadTags {...props} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}


Document.getInitialProps = async (ctx) => {
  const finalProps = await documentGetInitialProps(ctx);
  return finalProps;
};