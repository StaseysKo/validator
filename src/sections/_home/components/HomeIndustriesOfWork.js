import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Stack, Typography, Paper, Avatar, Button, Container, Box, Link } from '@mui/material';

// components
import { TextMaxLine } from 'src/components';
import Label from 'src/components/label';

// ----------------------------------------------------------------------


const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    paddingTop: theme.spacing(10),
  },
  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(10),
  },
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(15),
  },
  [theme.breakpoints.up('lg')]: {
    paddingTop: theme.spacing(10),
  },
}));

HomeIndustriesOfWork.propTypes = {
  industries: PropTypes.array,
};

export default function HomeIndustriesOfWork({ industries }) {

  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));

  const [category, setCategory] = useState('');

  function handleCategoryChange(category) {
    setCategory(category);
  }

  const [showAll, setShowAll] = useState(false);

  const handleClick = () => {
    setShowAll(true);
  };

  const isMoreItemsToShow = industries.length > 6; // Для десктопной версии
  const isMoreItemsToShowMobile = industries.length > 3; // Для мобильной версии

  return (
    <RootStyle>
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{
            mb: { xs: 4, md: 6, lg: 8 },
            textAlign: { xs: 'center', md: 'unset' },
          }}
        >
          <Stack spacing={3}>
            <Stack direction={isMobileOrTablet ? 'column' : 'row'} alignItems="center" spacing={2.5}>
              <Typography variant="h2">Опыт работ</Typography>

              <Label style={{ textTransform: 'none' }} color="error">В процессе наполнения</Label>
            </Stack>
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
              Более 13 лет проектируем и производим металлоконструкции для широкого спектра отраслей
            </Typography>
          </Stack>
        </Stack>

        <Box
          sx={{
            display: { xs: 'none', sm: 'grid', md: 'grid', xl: 'grid' },
            gap: 3,
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
              xl: 'repeat(3, 1fr)',
            },
          }}
        >
          {industries.slice(0, showAll ? industries.length : 6).map((industry) => (
            <IndustryItem key={industry.id} industry={industry} onCategoryChange={handleCategoryChange} />
          ))}
        </Box>

        <Box
          sx={{
            display: { xs: 'grid', sm: 'none', md: 'none', xl: 'none' },
            gap: 3,
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
              xl: 'repeat(3, 1fr)',
            },
          }}
        >
          {industries.slice(0, showAll ? industries.length : 3).map((industry) => (
            <IndustryItem key={industry.id} industry={industry} onCategoryChange={handleCategoryChange} />
          ))}
        </Box>

        {!showAll && isMoreItemsToShow && (
          <Box sx={{ mt: 5, textAlign: 'center', display: { xs: 'none', sm: 'block' } }}>
            <Button size="large" variant="outlined" onClick={handleClick}>
              Показать все
            </Button>
          </Box>
        )}
        {!showAll && isMoreItemsToShowMobile && (
          <Box sx={{ mt: 5, textAlign: 'center', display: { xs: 'block', sm: 'none' } }}>
            <Button size="large" variant="outlined" onClick={handleClick}>
              Показать все
            </Button>
          </Box>
        )}
      </Container>
    </RootStyle>
  );
}


IndustryItem.propTypes = {
  industry: PropTypes.shape({
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    countProject: PropTypes.number,
  }),
  onCategoryChange: PropTypes.func.isRequired,
};

function IndustryItem({ industry, onCategoryChange }) {
  const [category, setCategory] = useState('');

  function handleCategoryChange(category) {
    setCategory(category);
    onCategoryChange(category);
  }

  const { countProject, imageUrl, name } = industry;

  function getProjectWordEnding(count) {
    const lastDigit = count % 10;
    const lastTwoDigits = count % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 20) {
      return 'проектов';
    } else if (lastDigit === 1) {
      return 'проект';
    } else if (lastDigit >= 2 && lastDigit <= 4) {
      return 'проекта';
    } else {
      return 'проектов';
    }
  }

  return (
    <NextLink underline="none" href={`/portfolio?category=${encodeURIComponent(name)}`} passHref>
      <Paper
        variant="outlined"
        sx={{
          p: 3,
          borderRadius: 2,
          cursor: 'pointer',
          bgcolor: 'background.default',
          '&:hover': {
            boxShadow: (theme) => theme.customShadows.z24,
          },
        }}
        onClick={() => handleCategoryChange(name)}
      >
        <Stack sx={{ minHeight: '5.4rem' }} direction="row" alignItems="center" spacing={2.5}>
          <Avatar src={imageUrl} sx={{ width: 64, height: 64 }} />
          <Stack spacing={0.5}>
            <TextMaxLine variant="h6" line={2}>
              {name}
            </TextMaxLine>
            <Typography variant="body3" sx={{ color: 'text.secondary' }}>
              {countProject} {getProjectWordEnding(countProject)}
            </Typography>
          </Stack>
        </Stack>
      </Paper>
    </NextLink>
  );
}
