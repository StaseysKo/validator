import PropTypes from 'prop-types';
// icons
import locationIcon from '@iconify/icons-carbon/location';
import baggageClaim from '@iconify/icons-carbon/baggage-claim';
// @mui
import { useTheme, styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Typography, Stack, Box, Link, Button, Container } from '@mui/material';

import { TextIconLabel, CustomBreadcrumbs } from 'src/components';
import { Iconify } from 'src/components/iconify';

import cssStyles from 'src/utils/cssStyles';

import { HEADER_DESKTOP_HEIGHT } from 'src/config';


// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(10),
  ...cssStyles(theme).bgImage(),
}));

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

// ----------------------------------------------------------------------

VacancyPageHeader.propTypes = {
  metadata: PropTypes.shape({
    jobTitle: PropTypes.string,
  })
};

export default function VacancyPageHeader({ metadata }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const { jobTitle, placeOfWork, dateOfPublication, workAddress } = metadata


  return (
    <RootStyle>
      <Container>
        <CustomBreadcrumbs
          links={[
            { name: 'Главная', href: '/' },
            { name: 'Вакансии', href: '/career' },
            { name: jobTitle },
          ]}
          sx={{
            mb: { xs: 5, md: 8 },
          }}
        />

        <Stack
          spacing={5}
          direction={{ xs: 'column', md: 'row' }}
          justifyContent={{ md: 'space-between' }}
        >
          <Stack spacing={{ xs: 3, md: 2 }} sx={{ color: 'common.white' }}>
            <Typography
              variant="h3"
              component="h1"
              sx={{
                fontSize: {
                  xs: '2rem',
                  sm: '2.8rem',
                  md: '1.75rem',
                  lg: '2.125rem',
                },
              }}
            >
              {jobTitle}
            </Typography>

            <Stack spacing={{ xs: 1, sm: 1, md: 3, lg: 3 }} direction={{ xs: 'column', sm: 'row', md: 'row', lg: 'row' }} sx={{ opacity: 0.48 }}>
              <TextIconLabel
                icon={<Iconify icon={baggageClaim} sx={{ width: 20, height: 20, mr: 1 }} />}
                value={
                  <Link color="inherit" underline="always">
                    {placeOfWork}
                  </Link>
                }
              />
              <TextIconLabel
                icon={<Iconify icon={locationIcon} sx={{ width: 20, height: 20, mr: 1 }} />}
                value={workAddress}
              />
            </Stack>
          </Stack>

          <Stack
            spacing={2}
            direction="row"
            alignItems="flex-start"
          >

            <Button
              href="#apply-for-job"
              onClick={handleAnchorLinkClick}
              sx={{
                width: { xs: '100%', sm: '100%', md: 272, lg: 272 },
              }}
              fullWidth
              variant="contained"
              size="large"
            >
              Откликнуться
            </Button>

          </Stack>
        </Stack>
      </Container>
    </RootStyle>
  );
}
