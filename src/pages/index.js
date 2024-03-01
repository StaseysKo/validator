// next
import Head from 'next/head';
// layouts
// import MainLayout from 'src/layouts/main';
import Layout from 'src/layouts';
// sections
import HomeView from 'src/sections/_home/view';

// ----------------------------------------------------------------------

HomePage.getLayout = (page) => <Layout>{page}</Layout>;

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <>
      <Head>
        <meta name="description" content="Проектируем и производим металлоконструкции в Калининграде и области, которыми ежедневно пользуются тысячи людей в коммерческих и социальных сферах" />
        <meta name="keywords" content="Металлоконструкции в Калининграде, металлоизделия в Калининграде, проектирование металлоконструкций, производство металлоконструкций, изделия из металла, конструкции из металла, производство изделий из металла" />

        <meta property="og:title" content="ООО 'Чистоград ПМК' | Проектирование и производство металлоконструкций" />
        <meta property="og:description" content="Проектируем и производим металлоконструкции в Калининграде и области, которыми ежедневно пользуются тысячи людей в коммерческих и социальных сферах" />
        <meta property="og:image" content="https://chistograd-pmk.ru/images/ОООЧистоградПМК.jpg" />
        <meta property="og:url" content="https://chistograd-pmk.ru/" />
        <meta property="og:type" content="business.business" />
        <meta name="robots" content="index, follow" />
      </Head>


      <HomeView />
    </>
  );
}
