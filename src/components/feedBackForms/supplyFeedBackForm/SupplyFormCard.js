
// @mui
import { styled } from '@mui/material/styles';
import { Typography, Divider, Stack, Link } from '@mui/material';


// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing('32px'),
  backgroundColor: theme.palette.background.neutral,
  borderRadius: Number(theme.shape.borderRadius) * 2,
}));

// ----------------------------------------------------------------------

export default function SupplyFormCard() {

  return (
    <RootStyle
      sx={{
        mt: { xs: 0, md: 5 }
      }}
    >

      <Stack spacing={1}>
        <Stack spacing={1}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            Специалист по снабжению
          </Typography>
          <Typography variant="body2">Алексей Епифанов</Typography>

          <Divider sx={{ my: 2, borderStyle: 'dashed' }} />

          <Typography variant="overline" sx={{ pt: 1, color: 'text.disabled' }}>
            Телефон
          </Typography>
          <Link sx={{ fontSize: '0.875rem', color: 'white' }} href="tel:+79632941290" variant="body2">
            +7 (963) 294 12-90
          </Link>


          <Typography variant="overline" sx={{ pt: 1, color: 'text.disabled' }}>
            Почта
          </Typography>
          <Link sx={{ fontSize: '0.875rem', color: 'white' }} href="mailto:epifanovav86@mail.ru" variant="body2">
            epifanovav86@mail.ru
          </Link>
        </Stack>
      </Stack>
    </RootStyle>
  );
}
