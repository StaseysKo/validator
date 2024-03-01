// next
import Head from 'next/head';

import Layout from 'src/layouts';

import SubmitApplicationView from 'src/sections/_submitApplication/view';


// ----------------------------------------------------------------------

SubmitApplication.getLayout = (page) => <Layout>{page}</Layout>;

// ----------------------------------------------------------------------

export default function SubmitApplication() {
  return (
    <>
      <Head>
        <title>Оставить заявку | Чистоград ПМК</title>

        <meta name="description" content="Оставьте заявку на проектирование и производство металлоконструкций в ООО 'Чистоград ПМК'. Рассмотрим вашу заявку и ответим в течение 1 рабочего дня" />
        <meta name="keywords" content="Металлоконструкции, металлоизделия, проектирование металлоконструкций, производство металлоконструкций, изделия из металла, конструкции из металла, полный цикл работ" />

        <meta property="og:title" content="Оставить заявку | ООО 'Чистоград ПМК'" />
        <meta property="og:description" content="Оставьте заявку на проектирование и производство металлоконструкций в ООО 'Чистоград ПМК'" />
        <meta property="og:image" content="https://chistograd-pmk.ru/images/ОООЧистоградПМК.jpg" />
        <meta property="og:url" content="https://chistograd-pmk.ru/submit-application" />
        <meta property="og:type" content="business.business" />
        <meta name="robots" content="index, follow" />
      </Head>

      <SubmitApplicationView />
    </>
  );
}
