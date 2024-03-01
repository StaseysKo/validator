// next
import Head from 'next/head';
// layouts
import Layout from 'src/layouts';
// sections
import CardView from 'src/sections/_card/view';

// ----------------------------------------------------------------------

CardPage.getLayout = (page) => <Layout>{page}</Layout>;

// ----------------------------------------------------------------------

export default function CardPage() {
  return (
    <>
      <Head>
        <title>Карточка организации | Чистоград ПМК</title>
        <meta name="description" content="Скачать карточку организации ООО 'Чистоград ПМК'. Юридическая информаци и реквизиты компании ООО 'Чистоград ПМК'." />
        <meta name="keywords" content="карточка организации Чистоград ПМК, реквизиты чистоград пмк, карточка организации ООО Чистоград ПМК, скачать реквизиты чистоград пмк" />

        <meta property="og:title" content="Карточка организации | ООО 'Чистоград ПМК'" />
        <meta property="og:description" content="Скачать карточку организации ООО 'Чистоград ПМК'. Юридическая информаци и реквизиты компании ООО 'Чистоград ПМК'." />
        <meta property="og:image" content="https://chistograd-pmk.ru/images/ОООЧистоградПМК.jpg" />
        <meta property="og:url" content="https://chistograd-pmk.ru/card" />
        <meta property="og:type" content="business.business" />

        <meta name="robots" content="index, follow" />
      </Head>

      <CardView />
    </>
  );
}
