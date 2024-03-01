// next
import Head from 'next/head';
// layouts
import Layout from 'src/layouts';
// sections
import PrivacyPolicyView from 'src/sections/_privacy-policy/view';

// ----------------------------------------------------------------------

PrivacyPolicy.getLayout = (page) => <Layout>{page}</Layout>;

// ----------------------------------------------------------------------

export default function PrivacyPolicy() {
  return (
    <>

      <Head>
        <title>Положение об обработке и защите персональных данных | Чистоград ПМК</title>

        <meta name="description" content="" />
        <meta name="keywords" content="" />

        <meta property="og:title" content="Положение об обработке и защите персональных данных | ООО 'Чистоград ПМК'" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="https://chistograd-pmk.ru/images/ОООЧистоградПМК.jpg" />
        <meta property="og:url" content="https://chistograd-pmk.ru/privacy-policy" />
        <meta property="og:type" content="business.business" />
      </Head>
      <PrivacyPolicyView />
    </>
  );
}
