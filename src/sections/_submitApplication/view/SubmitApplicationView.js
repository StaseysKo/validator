import { Page } from 'src/components'

import Layout from 'src/layouts';

// @mui
import { Grid, Stack, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
// config
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT, MARGIN_BOTTOM_DESKTOP } from 'src/config';
// sections
import { SubmitApplicationFormPage } from 'src/components/feedBackForms/submitApplicationFormPage'

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: HEADER_MOBILE_HEIGHT,
  marginBottom: MARGIN_BOTTOM_DESKTOP,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER_DESKTOP_HEIGHT,
  },
}));

// ----------------------------------------------------------------------

export default function SubmitApplicationView() {
  return (
    <RootStyle>
      <Stack spacing={2} sx={{ mt: 5, mb: 5, textAlign: 'center', justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h2">Свяжитесь с нами</Typography>
        <Typography sx={{ maxWidth: { xs: '90%', sm: '90%', md: '100%' }, color: 'text.secondary' }}>
          Рассмотрим вашу заявку и ответим в течение 1 рабочего дня
        </Typography>
      </Stack>
      <SubmitApplicationFormPage sourcePage=" Форма отправлена со страницы: 'Оставить заявку или /submit-application' " />
    </RootStyle>
  );
}

// ----------------------------------------------------------------------
SubmitApplicationView.getLayout = function getLayout(page) {
  return <Layout transparentHeader>{page}</Layout>;
}