import Head from 'next/head';
import { useState, useEffect } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// config
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT } from 'src/config';
// layouts
import Layout from 'src/layouts';
// components
import { Page } from 'src/components';
// sections
import { CareerJobList } from 'src/sections/_career/components';


// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: HEADER_MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER_DESKTOP_HEIGHT,
  },
}));

// ----------------------------------------------------------------------



export default function CareerView() {

  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch('/api/jobs')
      .then(response => {
        if (!response.ok) {
          throw new Error('Обнаружена ошибка сети');
        }
        return response.json();
      })
      .then(data => setJobs(data))
      .catch(error => {
        console.error('Обнаружена ошибка:', error.message);
      });
  }, []);

  return (
    <RootStyle>
      <Head>
        <title>Вакансии | Чистоград ПМК</title>
        <meta name="description" content="Станьте частью команды профессионалов. Актуальные вакансии в офис и на производство ООО 'Чистоград ПМК'" />
        <meta name="keywords" content="Вакансии Калининград, вакансии чистоград пмк, работа чистоград пмк" />

        <meta property="og:title" content="Вакансии | ООО 'Чистоград ПМК'" />
        <meta property="og:description" content="Станьте частью команды профессионалов. Актуальные вакансии в офис и на производство ООО 'Чистоград ПМК'" />
        <meta property="og:image" content="https://chistograd-pmk.ru/images/ОООЧистоградПМК.jpg" />
        <meta property="og:url" content="https://chistograd-pmk.ru/career" />
        <meta property="og:type" content="business.business" />

        <meta name="robots" content="index, follow" />
      </Head>
      <Container
        sx={{
          pb: { xs: '50px', md: '64px' },
        }}
      >
        <Grid
          sx={{
            pt: { xs: 8, md: 10 },
            pb: { xs: 0, md: 0 },
          }}
        >
          <Grid item xs={12} md={6} sx={{ textAlign: 'left' }}>
            <Typography variant="h1">
              Актуальные вакансии
            </Typography>
          </Grid>
        </Grid>
        <CareerJobList jobs={jobs} />
      </Container>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

CareerView.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};


// ----------------------------------------------------------------------

