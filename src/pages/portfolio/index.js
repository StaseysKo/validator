// next
import Head from 'next/head';
// layouts
// import MainLayout from 'src/layouts/main';
import Layout from 'src/layouts';
// sections
import PortfolioView from 'src/sections/_portfolio/view'

// ----------------------------------------------------------------------

PortfolioPage.getLayout = (page) => <Layout>{page}</Layout>;

// ----------------------------------------------------------------------

export default function PortfolioPage() {
  return (
    <>
      <Head>
        <title>Портфолио | Чистоград ПМК</title>
        <meta name="description" content="Реализованные строительные объекты в Калининграде. Более 13 лет проектируем и производим металлоконструкции для широкого спектра отраслей" />
        <meta name="keywords" content="Строительные объекты Калининград, объекты Калининград, Портфолио Чистоград ПМК, реализованные проекты Чистоград ПМК, опыт работ Чистоград ПМК, история работ Чистоград ПМК" />

        <meta property="og:title" content="Портфолио | ООО 'Чистоград ПМК'" />
        <meta property="og:description" content="Более 13 лет проектируем и производим металлоконструкции для широкого спектра отраслей" />
        <meta property="og:image" content="https://chistograd-pmk.ru/images/projects/fence-of-the-Nakhimov-college/main/img_5.webp" />
        <meta property="og:url" content="https://chistograd-pmk.ru/portfolio" />
        <meta property="og:type" content="business.business" />

        <meta name="robots" content="index, follow" />
      </Head>
      <PortfolioView />
    </>
  );
}
