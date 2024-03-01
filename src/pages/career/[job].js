import PropTypes from 'prop-types';
import { serialize } from 'next-mdx-remote/serialize';
// @mui
import { Stack, Container, Grid } from '@mui/material'
import { styled } from '@mui/material/styles';
import Layout from 'src/layouts';
// config
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT } from 'src/config';
// hooks
import { useResponsive } from 'src/hooks';
// components
import { Page } from 'src/components';

import {
  getVacancyData,
  getVacancyPaths,
} from 'src/utils/careerDataFront';

import { VacancyPageHeader, VacancyPageCard, VacancyPageDetails } from 'src/sections/_career/components/vacancies'

import { VacancyFeedBackForm } from 'src/components/feedBackForms/vacancyFeedBackForm'

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: HEADER_MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER_DESKTOP_HEIGHT,
  },
}));

CareerJobPage.propTypes = {
  job: PropTypes.shape({
    content: PropTypes.object,
    metadata: PropTypes.shape({
      jobTitle: PropTypes.string,
      placeOfWork: PropTypes.string,
      workAddress: PropTypes.string,
      requiredExperience: PropTypes.string,
      employment: PropTypes.string,
      dateOfPublication: PropTypes.string,
    })
  })
};

// ----------------------------------------------------------------------

export default function CareerJobPage({ job }) {
  const isDesktop = useResponsive('up', 'md');

  const { content, metadata } = job
  const { jobTitle, seoTitle, seoDescriptions, seoKeyWords, seoImage, seoURL } = metadata

  const meta = (
    <>
      <meta name="description" content={seoDescriptions} />
      <meta name="keywords" content={seoKeyWords} />

      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescriptions} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:url" content={seoURL} />
      <meta property="og:type" content="business.business" />
      <meta name="robots" content="index, follow" />
    </>
  );
  return (
    <Page title={seoTitle} meta={meta}>
      <RootStyle>
        <VacancyPageHeader metadata={metadata} />

        <Container
          sx={{
            pt: { xs: 5, md: 8 },
          }}
        >
          <Grid container spacing={{ xs: 3, sm: 3, md: 8, lg: 8 }}>
            {!isDesktop && (
              <Grid item xs={12} md={5} lg={4}>
                <VacancyPageCard metadata={metadata} />
              </Grid>
            )}

            <Grid item xs={12} md={7} lg={8}>
              <VacancyPageDetails job={job} />
            </Grid>
            {isDesktop &&
              <Grid item md={5} lg={4}>
                <Stack spacing={5}>
                  <VacancyPageCard metadata={metadata} />
                </Stack>
              </Grid>
            }
          </Grid>
        </Container>
        <div id="apply-for-job">
          <VacancyFeedBackForm sourcePage={`Форма отправлена со страницы Вакансии ${jobTitle}`} />
        </div>
      </RootStyle>
    </Page>
  );
}

CareerJobPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

// Функция getStaticProps используется для извлечения данных, необходимых для предварительной генерации страницы.
// Это функция Next.js и вызывается на этапе сборки на сервере.
export async function getStaticProps({ params }) {
  // Извлекаем данные для конкретной вакансии, указанной в параметрах маршрута.
  const job = getVacancyData(params.job);

  return {
    // Возвращаем props, которые будут переданы в компонент страницы.
    // В данном случае, мы передаем данные только для конкретной вакансии.
    props: {
      job: {
        ...job,
        // Сериализуем содержимое Markdown, чтобы его можно было безопасно отобразить на странице.
        content: await serialize(job.content),
      },
    },
  };
}



// ----------------------------------------------------------------------

// Функция getStaticPaths используется для указания, какие пути доступны для предварительной генерации.
// Это функция Next.js и вызывается на этапе сборки на сервере.
export async function getStaticPaths() {
  // Извлекаем все доступные пути (слаги) для вакансий.
  const files = getVacancyPaths();

  return {
    // Указываем, какие пути следует предварительно сгенерировать.
    // Здесь мы преобразуем массив слагов в формат, который Next.js ожидает.
    paths: files.map(file => ({
      params: { job: file.params.slug }
    })),
    // Указываем, что отсутствующие пути не должны использовать fallback-страницу.
    fallback: false,
  };
}


  // ----------------------------------------------------------------------