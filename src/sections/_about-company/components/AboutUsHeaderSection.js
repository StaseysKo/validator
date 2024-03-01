// @mui
import { Grid, Container, Typography, Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

// icons
import directionStraightRight from '@iconify/icons-carbon/direction-straight-right';

// data
import { dataImg } from '_data/dataImg.js';

// utils
import CountUpNumber from 'src/utils/CountUpNumber.js'

// components
import { Image } from 'src/components';
import { Iconify } from 'src/components/iconify';

import { HEADER_DESKTOP_HEIGHT } from 'src/config'



// ----------------------------------------------------------------------

const IMAGES = [...Array(4)].map((_, index) => dataImg.image.aboutUs(index));

const SUMMARY = [
  { name: 'Сотрудников', number: 140, plus: false },
  { name: 'Лет опыта', number: 13, plus: true },
  { name: 'Производственных цеха', number: 3, plus: false },
  { name: 'Реализованных проекта', number: 2000, plus: true },
];

function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

// ----------------------------------------------------------------------

const handleAnchorLinkClick = (e) => {
  const href = e.currentTarget.getAttribute('href');
  if (href.startsWith('#')) {
    e.preventDefault();
    const element = document.getElementById(href.slice(1));
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.pageYOffset - HEADER_DESKTOP_HEIGHT;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
    }
  }
};


export default function AboutUsHeaderSection() {
  return (
    <Container>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{
          py: { xs: 4, md: 10 },
        }}
      >
        <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
          <Typography variant="h1" sx={{ mb: 3 }}>
            О компании
          </Typography>
          <Typography
            sx={{
              color: 'text.secondary',
              '@media (min-width: 320px)': {
                fontSize: '1rem !important'
              },
              '@media (min-width: 375px)': {
                fontSize: '1rem !important'
              },
              '@media (min-width: 425px)': {
                fontSize: '1rem !important'
              },
              '@media (min-width: 600px)': {
                fontSize: '1rem !important'
              },
              '@media (min-width: 900px)': {
                fontSize: '1rem !important'
              },
              '@media (min-width: 1200px)': {
                fontSize: '1rem !important'
              },
              '@media (min-width: 1500px)': {
                fontSize: '1.1rem !important',
              },
            }}
          >
            Мы проектируем и производим металлоконструкции, которыми ежедневно пользуются тысячи людей в коммерческих и социальных сферах.
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={{ xs: 3, sm: 3, md: 2, lg: 3 }}>
        {IMAGES.map((img, index) => (
          <Grid
            key={img}
            item
            xs={12}
            sm={6}
            md={index === 0 ? 6 : 2}
            sx={{
              ...((index === 1 || index === 2 || index === 3) && {
                display: { xs: 'none', sm: 'block' },
              }),
            }}
          >
            <Image alt={img} src={img} sx={{ height: 350, borderRadius: 2 }} />
          </Grid>
        ))}
      </Grid>

      <Box
        sx={{
          mt: { xs: 8, md: 10 },
          textAlign: 'center',
          display: 'grid',
          rowGap: 5,
          columnGap: 3,
          gridTemplateColumns: {
            xs: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
        }}
      >
        {SUMMARY.map((value) => (
          <div key={value.name}>
            <Typography variant="h2" gutterBottom>
              <CountUpNumber
                formattingFn={formatNumber}
                start={value.number / 5}
                end={value.number}
              />
              {
                value.plus && (
                  <Typography
                    variant="h4"
                    component="span"
                    sx={{ verticalAlign: 'top', ml: 0.5, color: 'primary.main' }}
                  >
                    +
                  </Typography>
                )
              }
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
                '@media (min-width: 320px)': {
                  fontSize: '0.813rem !important'
                },
                '@media (min-width: 375px)': {
                  fontSize: '0.813rem !important'
                },
                '@media (min-width: 425px)': {
                  fontSize: '0.813rem !important'
                },
                '@media (min-width: 600px)': {
                  fontSize: '1rem !important'
                },
                '@media (min-width: 900px)': {
                  fontSize: '1rem !important'
                },
                '@media (min-width: 1200px)': {
                  fontSize: '1rem !important'
                },
                '@media (min-width: 1500px)': {
                  fontSize: '1.1rem !important',
                },
              }}
            >
              {value.name}
            </Typography>
          </div>
        ))}
      </Box>

      <Grid
        container
        spacing={{ xs: 5, md: 3 }}
        justifyContent="space-between"
        sx={{
          textAlign: { xs: 'center', md: 'left' },
          mt: { xs: 5, sm: 8, md: 8, lg: 15 }
        }}
      >
        <Grid item xs={12} md={6} lg={5}>
          <Box
            sx={{
              mb: 2,
              width: 24,
              height: 3,
              borderRadius: 3,
              bgcolor: 'primary.main',
              mx: { xs: 'auto', md: 0 },
            }}
          />
          <Typography variant="h3" sx={{ mb: 3 }}>
            Работаем с муниципальными организациями, малым, средним и крупным бизнесом в Калининграде и области
          </Typography>
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <Typography variant="h4" paragraph>
            Производственная структура
          </Typography>
          <Typography
            sx={{
              color: 'text.secondary',
              '@media (min-width: 320px)': {
                fontSize: '0.813rem !important'
              },
              '@media (min-width: 375px)': {
                fontSize: '0.813rem !important'
              },
              '@media (min-width: 425px)': {
                fontSize: '0.813rem !important'
              },
              '@media (min-width: 600px)': {
                fontSize: '1rem !important'
              },
              '@media (min-width: 900px)': {
                fontSize: '1rem !important'
              },
              '@media (min-width: 1200px)': {
                fontSize: '1rem !important'
              },
              '@media (min-width: 1500px)': {
                fontSize: '1.1rem !important',
              },
            }}
          >
            За 13 лет успешной работы нам удалось выстроить эффективную производственную структуру,
            обеспечивающую своевременное и высококачественное выполнение заказов для клиентов из различных сфер.
            <br />
            <br />
            Начиная от систем вентиляции для ресторанов, кафе, баров, медицинский учреждений и заканчивая проектами для городского благоустройства, промышленными сооружениями и технически-сложными металлоконструкциями.
          </Typography>
          <br />
          <Button
            href="#discuss-the-project-form"
            onClick={handleAnchorLinkClick}
            variant="outlined"
            color="inherit"
            size="large"
            endIcon={<Iconify icon={directionStraightRight} sx={{ width: 22, height: 22 }} />}
            sx={{
              textTransform: 'none',
              width: { xs: '100%', sm: '100%', md: '60%', lg: '40%' },
            }}
          >
            Обсудить проект
          </Button>
        </Grid>
      </Grid>

    </Container>
  );
}
