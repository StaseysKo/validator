// next
import Head from 'next/head';
// layouts
import Layout from 'src/layouts';
// sections
import ContactsView from 'src/sections/_contacts/view';

// ----------------------------------------------------------------------

ContactsPage.getLayout = (page) => <Layout>{page}</Layout>;

// ----------------------------------------------------------------------

export default function ContactsPage() {
  return (
    <>
      <Head>
        <title>Контакты | Чистоград ПМК</title>

        <meta name="description" content="Адреса, телефоны и другая контактная информация офиса и производства Чистоград ПМК" />
        <meta name="keywords" content="адрес офиса чистоград пмк, телефон чистоград пмк, местоположение чистоград пмк" />

        <meta property="og:title" content="Контакты | ООО 'Чистоград ПМК'" />
        <meta property="og:description" content="Адреса, телефоны и другая контактная информация офиса и производства Чистоград ПМК" />
        <meta property="og:image" content="https://chistograd-pmk.ru/images/ОООЧистоградПМК.jpg" />
        <meta property="og:url" content="https://chistograd-pmk.ru/contacts" />
        <meta property="og:type" content="business.business" />
        <meta name="robots" content="index, follow" />
      </Head>

      <ContactsView />
    </>
  );
}
