import PropTypes from 'prop-types';
import { serialize } from 'next-mdx-remote/serialize';
import useMediaQuery from '@mui/material/useMediaQuery';

// @mui
import { styled } from '@mui/material/styles';
import { Container, Grid, Box, Typography, Divider, Stack } from '@mui/material';


// utils
import {
  getProjectData,
  getProjectPaths,
} from 'src/utils/projectDataFront.js';

// config
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT } from 'src/config';

// layouts
import Layout from 'src/layouts';

// components
import { Page, Markdown, DetailsGallery, TextIconLabel, SideCardProject, CardTags, CustomBreadcrumbs } from '/src/components';

import { MainFeedBackForm } from 'src/components/feedBackForms/mainFeedBackForm'

// sections
import { Testimonials, DetailedServices, MorePhotosGallery } from 'src/sections/_portfolio/components'

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: HEADER_MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER_DESKTOP_HEIGHT,
  },
}));

// ----------------------------------------------------------------------

ProjectPage.propTypes = {

  project: PropTypes.shape({
    content: PropTypes.object,
    metadata: PropTypes.shape({
      projectName: PropTypes.string,
      galleryProjectImgs: PropTypes.array,
      morePhotosGalleryImgs: PropTypes.array,
      firstChar: PropTypes.string,
      secondChar: PropTypes.string,
      thirdChar: PropTypes.string,
      fourthChar: PropTypes.string,
      fifthChar: PropTypes.string,
      sixthChar: PropTypes.string,
      seventhChar: PropTypes.string,
      firstCharValue: PropTypes.string,
      secondCharValue: PropTypes.string,
      thirdCharValue: PropTypes.string,
      fourthCharValue: PropTypes.string,
      fifthCharValue: PropTypes.string,
      sixthCharValue: PropTypes.string,
      seventhCharValue: PropTypes.string,
      customerTestimonial: PropTypes.string,
    })
  })

};

export default function ProjectPage({ project }) {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));

  const { metadata, content } = project;

  const {
    projectName,
    galleryProjectImgs, morePhotosGalleryImgs,
    firstChar, secondChar, thirdChar, fourthChar, fifthChar, sixthChar, seventhChar,
    firstCharValue, secondCharValue, thirdCharValue, fourthCharValue, fifthCharValue, sixthCharValue, seventhCharValue,
    customerTestimonial,
    seoTitle, seoDescriptions, seoKeyWords, seoImage, seoURL,
  } = metadata;

  const characteristics = [
    { label: firstChar, text: firstCharValue },
    { label: secondChar, text: secondCharValue },
    { label: thirdChar, text: thirdCharValue },
    { label: fourthChar, text: fourthCharValue },
    { label: fifthChar, text: fifthCharValue },
    { label: sixthChar, text: sixthCharValue },
    { label: seventhChar, text: seventhCharValue },
  ]

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
    <Page
      title={seoTitle}
      meta={meta}
    >
      <RootStyle>
        <Container>
          <Stack
            direction={{ xs: 'row', md: 'row' }}
          >
            <Typography
              variant="h2"
              component="h1"
              sx={{
                mt: 5,
                mb: 3
              }}
            >
              {projectName}
            </Typography>
            <Stack
              sx={{
                mt: 5,
                mb: 3
              }}
              direction="row" alignItems="center" flexShrink={0}
            >
            </Stack>
          </Stack>
          <CustomBreadcrumbs
            sx={{ mb: 3 }}
            links={[
              { name: 'Главная', href: '/' },
              { name: 'Все проекты', href: '/portfolio' },
              { name: projectName },
            ]}
          />
          <DetailsGallery images={galleryProjectImgs} />
          <Grid
            container
            spacing={{ md: 8 }}
            direction={{ md: 'row-reverse' }}
          >
            <Grid item xs={12} sm={12} md={5} lg={4}>
              <SideCardProject metadata={metadata} />
              {!isMobile && <CardTags metadata={metadata} />}
            </Grid>

            <Grid item xs={12} sm={12} md={7} lg={8}>
              {/* <DetailedServices metadata={metadata} /> */}
              <Markdown content={content} />
              <Divider sx={{ borderStyle: 'dashed', my: 5 }} />
              <Typography variant="h3" paragraph
                sx={{
                  mt: { xs: 5, md: 3 },
                  mb: { xs: 5, md: 4 },
                }}
              >
                Общие сведения
              </Typography>
              <Box
                sx={{
                  mb: 6,
                  display: 'grid',
                  rowGap: 5,
                  columnGap: 0,
                  gridTemplateColumns: {
                    xs: 'repeat(1, 1fr)',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(2, 1fr)',
                    lg: 'repeat(2, 1fr)',
                  },
                }}
              >
                {characteristics.map((char, i) =>
                  char.label && char.text ? (
                    <OverviewItem
                      key={i}
                      label={char.label}
                      text={char.text}
                    />
                  ) : null
                )}
              </Box>
              <Divider sx={{ borderStyle: 'dashed' }} />

              <MorePhotosGallery images={morePhotosGalleryImgs} />
              {
                !!customerTestimonial && <Testimonials metadata={metadata} />
              }
              {isMobile && <CardTags metadata={metadata} />}
            </Grid>
          </Grid>
        </Container>
        <div id="leave-a-request">
          <MainFeedBackForm sourcePage={`Форма отправлена со страницы проекта в портфолио: ${projectName}`} />
        </div>
      </RootStyle>
    </Page>
  );
}

// ----------------------------------------------------------------------

ProjectPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

// Функция getStaticProps используется для извлечения данных, необходимых для предварительной генерации страницы.
// Это функция Next.js и вызывается на этапе сборки на сервере.
export async function getStaticProps({ params }) {
  // Извлекаем данные для конкретной услуги, указанной в параметрах маршрута.
  const project = getProjectData(params.project);

  return {
    // Возвращаем props, которые будут переданы в компонент страницы.
    // В данном случае, мы передаем данные только для конкретной услуги.
    props: {
      project: {
        ...project,
        // Сериализуем содержимое Markdown, чтобы его можно было безопасно отобразить на странице.
        content: await serialize(project.content),
      },
    },
  };
}



// ----------------------------------------------------------------------

// Функция getStaticPaths используется для указания, какие пути доступны для предварительной генерации.
// Это функция Next.js и вызывается на этапе сборки на сервере.
export async function getStaticPaths() {
  // Извлекаем все доступные пути (слаги) для услуг.
  const files = getProjectPaths();

  return {
    // Указываем, какие пути следует предварительно сгенерировать.
    // Здесь мы преобразуем массив слагов в формат, который Next.js ожидает.
    paths: files.map(file => ({
      params: { project: file.params.slug }
    })),
    // Указываем, что отсутствующие пути не должны использовать fallback-страницу.
    fallback: false,
  };
}


// ----------------------------------------------------------------------

OverviewItem.propTypes = {
  icon: PropTypes.any,
  label: PropTypes.string,
  text: PropTypes.string,
};

function OverviewItem({ label, text = '-' }) {
  return (
    <TextIconLabel
      spacing={1.5}
      alignItems="flex-start"
      icon={<Typography sx={{ color: '#FA541C' }} variant="body2">—</Typography>}
      value={
        <Stack spacing={0.5}>
          <Typography variant="body2">{label}</Typography>
          <Typography sx={{ color: 'text.secondary' }}>{text}</Typography>
        </Stack>
      }
      sx={{ '& svg': { width: 24, height: 24 } }}
    />
  );
}