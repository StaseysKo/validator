// next
import Head from 'next/head';
// layouts
// import MainLayout from 'src/layouts/main';
import Layout from 'src/layouts';
// sections
import AboutCompanyView from 'src/sections/_about-company/view';

// ----------------------------------------------------------------------

AboutUsPage.getLayout = (page) => <Layout>{page}</Layout>;

// ----------------------------------------------------------------------

export default function AboutUsPage() {
  return (
    <>
      <Head>
        <meta name="description" content="Мы проектируем и производим металлоконструкции в Калининграде и области, которыми ежедневно пользуются тысячи людей в коммерческих и социальных сферах" />
        <meta name="keywords" content="Металлоконструкции, металлоизделия, проектирование металлоконструкций, производство металлоконструкций, изделия из металла, конструкции из металла, полный цикл работ" />

        <meta property="og:title" content="О компании | ООО 'Чистоград ПМК'" />
        <meta property="og:description" content="Мы проектируем и производим металлоконструкции в Калининграде и области, которыми ежедневно пользуются тысячи людей в коммерческих и социальных сферах" />
        <meta property="og:image" content="https://chistograd-pmk.ru/images/ОООЧистоградПМК.jpg" />
        <meta property="og:url" content="https://chistograd-pmk.ru/about-company" />
        <meta property="og:type" content="business.business" />
        <meta name="robots" content="index, follow" />
      </Head>

      <AboutCompanyView />
    </>
  );
}
