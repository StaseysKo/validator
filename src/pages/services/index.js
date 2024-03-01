// next
import Head from 'next/head';
// layouts
// import MainLayout from 'src/layouts/main';
import Layout from 'src/layouts';
// sections
import ServicesView from 'src/sections/_services/view'

// ----------------------------------------------------------------------

ServicesPage.getLayout = (page) => <Layout>{page}</Layout>;

// ----------------------------------------------------------------------

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Услуги | Чистоград ПМК</title>
        <meta name="description" content="Конструкции и изделия из металла в Калининграде и области. Ограждающие конструкции, навесы, кровельные системы, лестницы, вентиляционные системы, ограждения, перила, поручни и многое другое. Сертифицированное произвордство и материалы. Осуществляем полный цикл работ: проектирование, производство, логистика и монтаж." />
        <meta name="keywords" content="Металлоконструкции, ограждающие конструкции, кровельные системы, лестницы, вентиляционные системы, навесы, строительные конструкции, ангары, склады, перекрытия, архитектурные элементы, спортивные комплексы, торговые комплексы, котельные, подъемники, интерьерные решения, нестандартные изделия, черный металл, нержавеющая сталь, проектирование, производство." />

        <meta property="og:title" content="Услуги | ООО 'Чистоград ПМК'" />
        <meta property="og:description" content="Конструкции и изделия из металла в Калининграде и области. Ограждающие конструкции, навесы, кровельные системы, лестницы, вентиляционные системы, ограждения, перила, поручни и многое другое. Сертифицированное произвордство и материалы. Осуществляем полный цикл работ: проектирование, производство, логистика и монтаж." />
        <meta property="og:image" content="https://chistograd-pmk.ru/images/ОООЧистоградПМК.jpg" />
        <meta property="og:url" content="https://chistograd-pmk.ru/services" />
        <meta property="og:type" content="business.business" />

        <meta name="robots" content="index, follow" />
      </Head>


      <ServicesView />
    </>
  );
}
