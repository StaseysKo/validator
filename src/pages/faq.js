// next
import Head from 'next/head';
// layouts
import Layout from 'src/layouts';
// sections
import FaqView from 'src/sections/_faq/view';

// ----------------------------------------------------------------------

FaqPage.getLayout = (page) => <Layout>{page}</Layout>;

// ----------------------------------------------------------------------

export default function FaqPage() {
  return (
    <>
      <Head>
        <title>Частые вопросы | Чистоград ПМК</title>

        <meta name="description" content="Ответы на самые популярные вопросы при заказе металлоконструкций в ООО 'Чистоград ПМК'. Не нашли нужной информации? - Задайте любой интересующий вас вопрос через форму обратной связи" />
        <meta name="keywords" content="Частые вопросы чистоград пмк, поддержка чистоград пмк" />

        <meta property="og:title" content="Частые вопросы | ООО 'Чистоград ПМК'" />
        <meta property="og:description" content="Ответы на самые популярные вопросы при заказе металлоконструкций в ООО 'Чистоград ПМК'" />
        <meta property="og:image" content="https://chistograd-pmk.ru/images/ОООЧистоградПМК.jpg" />
        <meta property="og:url" content="https://chistograd-pmk.ru/faq" />
        <meta property="og:type" content="business.business" />
        <meta name="robots" content="index, follow" />
      </Head>
      <FaqView />
    </>
  );
}
