import fs from 'fs';
import path from 'path';
//mui
import { Divider } from '@mui/material'

// layouts
import Layout from 'src/layouts';
// components
import { Page } from 'src/components'

// form
import { SupplyFeedBackFormComponents } from 'src/sections/_supply/components';

import { SupplyHeaderSection, SupplyStatistics, BecomeASupplier, DownloadFiles } from 'src/sections/_supply/components';


// ----------------------------------------------------------------------


export default function SupplyView({ filesArr }) {

  const meta = (
    <>
      <meta name="description" content="Приглашаем к плодотворному сотрудничеству поставщиков, работающих в следующих направлениях: нержавеющая сталь, черный металлопрокат, оцинкованная сталь." />
      <meta name="keywords" content="поставщик черный металлопрокат, поставщик нержавеющая сталь, поставщик оцинкованная сталь" />

      <meta property="og:title" content="Поставщикам | ООО 'Чистоград ПМК'" />
      <meta property="og:description" content="Приглашаем к плодотворному сотрудничеству поставщиков, работающих в следующих направлениях: нержавеющая сталь, черный металлопрокат, оцинкованная сталь." />
      <meta property="og:image" content="https://chistograd-pmk.ru/images/ОООЧистоградПМК.jpg" />
      <meta property="og:url" content="https://chistograd-pmk.ru/supply" />
      <meta property="og:type" content="business.business" />
      <meta name="robots" content="index, follow" />
    </>
  );

  return (
    <Page title="Поставщикам | Чистоград ПМК" meta={meta}>

      <SupplyHeaderSection />

      <SupplyStatistics />

      <BecomeASupplier />

      <DownloadFiles filesArr={filesArr} title={'Типовые документы'} />

      <Divider
        sx={{
          mt: { xs: '50px', md: '100px' },
          mb: { xs: '50px', md: '100px' }
        }}
      />

      <div id="become-a-supplier">
        <SupplyFeedBackFormComponents />
      </div>

    </Page>
  );
}

// ----------------------------------------------------------------------

SupplyView.getLayout = function getLayout(page) {
  return <Layout transparentHeader>{page}</Layout>;
};

// ----------------------------------------------------------------------

export async function getStaticProps() {
  const directoryPath = path.join(process.cwd(), 'public', 'downloads', 'supply');
  const orderConfigPath = path.join(process.cwd(), '_data', 'fileOrder.json');

  // Чтение файла конфигурации
  const orderConfig = JSON.parse(fs.readFileSync(orderConfigPath, 'utf8'));

  const files = fs.readdirSync(directoryPath).map(file => {
    const fileStats = fs.statSync(path.join(directoryPath, file));
    const fileSizeInKB = Math.round(fileStats.size / 1024);
    // Определяем тип файла на основе его расширения
    const fileType = path.extname(file).slice(1).toUpperCase();

    // Находим объект конфигурации для этого файла
    const fileConfig = orderConfig.find(
      item => item[Object.keys(item)[0]] === file
    );
    // Получаем значение order из конфигурации или установите значение по умолчанию, если конфигурация не найдена
    const order = fileConfig ? fileConfig.order : 999;

    return {
      fileName: file.split('.')[0],
      fileType: fileType,
      fileSize: `| ${fileSizeInKB} КБ`,
      fileUrl: `/downloads/supply/${file}`,
      order: order
    }
  });

  // Сортировка файлов в соответствии с их порядком
  files.sort((a, b) => a.order - b.order);

  return {
    props: {
      filesArr: files
    }
  };
}

