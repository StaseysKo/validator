// mui
import { Stack, Box, Container, Grid, Paper, TableContainer, Typography, useTheme, Table, TableBody, TableCell, TableRow } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled, alpha } from '@mui/material/styles';
import Link from '@mui/material/Link';
// icons
import { Icon } from '@iconify/react';
// data
import { _advantages, _clients, _partners, _gratefulCompanies } from '_data';
// component
import { Page, TextMaxLine } from 'src/components';
// layout
import Layout from 'src/layouts';
// config
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT, MARGIN_BOTTOM_DESKTOP } from 'src/config';

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: HEADER_MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER_DESKTOP_HEIGHT,
  },
  paddingBottom: MARGIN_BOTTOM_DESKTOP,
  [theme.breakpoints.up('md')]: {
    paddingBottom: MARGIN_BOTTOM_DESKTOP,
  },
}));

const filesArr = [
  {
    fileName: 'Скачать реквизиты',
    fileType: 'DOCX',
    fileSize: '| 20 КБ',
    fileUrl: '/downloads/Карточка организации.docx',
  },
];

function TableRowCustom({ title, value, index }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.07)',
        },
        '& > *': {
          pt: 2.6,
          pb: 2.6,
          pr: 2.6,
          pl: 2.6,
          width: isMobile ? '100%' : '50%',
        }
      }}
    >
      <Typography variant="subtitle1" sx={{ fontSize: '0.875rem', width: isMobile ? '100%' : '50%' }}>{title}</Typography>
      <Typography sx={{ fontSize: '0.875rem', width: isMobile ? '100%' : '50%', textAlign: isMobile ? 'left' : 'right' }}>{value}</Typography>
    </Box>
  );
}

export default function CardView() {
  const tableData = [
    { title: "Наименование организации", value: "ООО «Чистоград ПМК»" },
    { title: "Дата регистрации", value: "14.08.2013" },
    { title: "Регистрационный номер Свидетельства о внесении записи в ЕГРЮЛ", value: "39 № 001630350" },
    { title: "ОГРН", value: "1133926030732" },
    { title: "ИНН", value: "3906302285" },
    { title: "КПП", value: "390601001" },
    { title: "ОКВЭД", value: "25.11" },
    { title: "ОКПО", value: "27781066" },
    { title: "Юридический адрес", value: "236028, Калининградская обл., г. Калининград, ул. А. Суворова, д. 115 А" },
    { title: "Фактический адрес", value: "236038, Калининградская обл., г. Калининград, ул. Индустриальная, 4" },
    { title: "Полное наименование банка организации", value: "Филиал «Европейский» ПАО «Банк Санкт-Петербург»" },
    { title: "Расчетный счет", value: "40702810075000074599" },
    { title: "Корреспондентский счет", value: "30101810927480000877" },
    { title: "БИК", value: "042748877" },
    { title: "Генеральный директор", value: "Фролов Дмитрий Владимирович" },
  ];


  return (
    <RootStyle>
      <Container
        sx={{
          pb: { xs: 0, md: '64px' },
        }}
      >
        <Grid
          justifyContent="center"
          sx={{
            pt: { xs: 8, md: 10 },
            pb: { xs: 0, md: 0 },
          }}
        >
          <Grid item xs={12} md={6} sx={{ textAlign: 'left' }}>
            <Typography variant="h1">
              Карточка организации
            </Typography>
          </Grid>
        </Grid>
        <Box
          sx={{
            pt: { xs: '35px', md: '64px' },
          }}
        >
          <TableContainer
            component={Paper}
            sx={{
              borderRadius: '16px',
              background: '#252c35'
            }}
          >
            <Box sx={{ background: '#252c35' }}>
              {tableData.map((row, index) => (
                <TableRowCustom
                  key={index}
                  title={row.title}
                  value={row.value}
                  index={index}
                />
              ))}
            </Box>
            <Box
              colSpan={2}
              sx={{
                textAlign: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.07)',
                borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
                p: 2
              }}
            >
              <Grid>
                <Grid item xs={12} md={12}>
                  <Box
                    gap={3}
                    display="grid"
                    gridTemplateColumns={{
                      xs: 'repeat(1, 1fr)',
                      sm: 'repeat(1, 1fr)',
                    }}
                  >
                    {filesArr.map((file) => (
                      <Link
                        key={file.fileUrl}
                        href={file.fileUrl}
                        download
                        underline="none"
                        sx={{
                          color: 'inherit',
                          textDecoration: 'none',
                        }}
                      >
                        <Stack
                          spacing={2}
                          direction="row"
                          alignItems="center"
                          sx={{
                            p: 2,
                            borderRadius: 2,
                            border: (theme) => `solid 1px ${alpha(theme.palette.grey[500], 0.24)}`,
                            '&:hover': {
                              border: (theme) => `solid 1px ${alpha(theme.palette.grey[500], 1)}`,
                            }
                          }}
                        >
                          <Stack spacing={0.5} flexGrow={1}>
                            <TextMaxLine variant="h6" line={1} sx={{ fontWeight: 'fontWeightMedium' }}>
                              {file.fileName}
                            </TextMaxLine>

                            <TextMaxLine variant="body2" line={1} sx={{ color: 'text.disabled' }}>
                              {file.fileType} {file.fileSize}
                            </TextMaxLine>
                          </Stack>

                          <Icon
                            icon="ci:download"
                            fontSize={22}
                          />
                        </Stack>
                      </Link>
                    ))}
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </TableContainer>
        </Box>
      </Container>
    </RootStyle>
  );
}

CardView.getLayout = function getLayout(page) {
  return <Layout transparentHeader>{page}</Layout>;
};
