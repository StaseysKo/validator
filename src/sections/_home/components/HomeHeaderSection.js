import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import chevronRight from '@iconify/icons-carbon/chevron-right';

// @mui
import { styled } from '@mui/material/styles';
import { Grid, Container, Typography, Stack, Box, Button, Divider, Card, CardContent } from '@mui/material';
// hooks
import cssStyles from 'src/utils/cssStyles';
import Routes from 'src/routes';
// components
import { Image, BgOverlay, Typewriter } from 'src/components';
import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

const RootStyle = styled(Stack)(({ theme }) => ({
  // ...cssStyles(theme).bgImage(),
  overflow: 'hidden',

  paddingTop: theme.spacing(),
  [theme.breakpoints.up('xs')]: {
    paddingTop: theme.spacing(10),
  },
  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(12),
  },
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(18),
  },
  [theme.breakpoints.up('lg')]: {
    paddingTop: theme.spacing(18),
  },

}));

HomeHeaderSection.propTypes = {
  services: PropTypes.array.isRequired,
};



const ScrollBlock = ({ children, direction, isHovering, setIsHovering }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    let scrollInterval;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (!isHovering) {
          if (direction === 'down') {
            scrollElement.scrollTop += 1;
            if (scrollElement.scrollTop >= scrollElement.scrollHeight / 2) {
              scrollElement.scrollTop = 0;
            }
          } else if (direction === 'up') {
            scrollElement.scrollTop -= 1;
            if (scrollElement.scrollTop <= 0) {
              scrollElement.scrollTop = scrollElement.scrollHeight / 2 - 1;
            }
          }
        }
      }, 20);
    };

    startAutoScroll();

    return () => {
      clearInterval(scrollInterval);
    };
  }, [direction, isHovering]);

  return (
    <Box
      ref={scrollRef}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      sx={{
        overflowY: 'auto',
        height: '700px',
        scrollbarWidth: 'none', // Для Firefox
        msOverflowStyle: 'none', // Для IE и Edge
        '&::-webkit-scrollbar': { display: 'none' }, // Для остальных браузеров
      }}
    >
      {[...children, ...children]}
    </Box>
  );
};





export default function HomeHeaderSection({ services }) {

  const halfIndex = Math.ceil(services.length / 2);
  const firstRowServices = services.slice(0, halfIndex);
  const secondRowServices = services.slice(halfIndex);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <RootStyle>
      <Container>
        <Grid
          container
          spacing={{ xs: 8, md: 3 }}
        >

          <Grid item xs={12} md={6} lg={6}>
            <Stack
              spacing={5}
              sx={{
                textAlign: { xs: 'center', sm: 'center', md: 'unset', xl: 'unset' },
                pt: 5
              }}
            >
              <Stack spacing={3}>
                <Typography
                  variant="h1"
                  sx={{
                    lineHeight: 1.1,
                    color: 'common.white',
                    textAlign: 'left',
                    '@media (min-width: 320px)': {
                      fontSize: '2.5rem !important'
                    },
                    '@media (min-width: 375px)': {
                      fontSize: '2.8rem !important'
                    },
                    '@media (min-width: 425px)': {
                      fontSize: '3rem !important'
                    },
                    '@media (min-width: 600px)': {
                      fontSize: '5rem !important'
                    },
                    '@media (min-width: 900px)': {
                      fontSize: '4.2rem !important'
                    },
                    '@media (min-width: 1200px)': {
                      fontSize: '5rem !important'
                    },
                    '@media (min-width: 1500px)': {
                      fontSize: '5.5rem !important',
                    }
                  }}
                >
                  Производство{' '}
                  <Box component="span" sx={{ color: 'primary.main' }}>
                    <Typewriter /><br />
                  </Box>
                  из металла
                </Typography>

                <Typography
                  sx={{
                    color: 'grey.500',
                    textAlign: 'left',
                    '@media (min-width: 320px)': {
                      fontSize: '1rem !important',
                    },
                    '@media (min-width: 375px)': {
                      fontSize: '1rem !important',
                    },
                    '@media (min-width: 425px)': {
                      fontSize: '1rem !important'
                    },
                    '@media (min-width: 600px)': {
                      fontSize: '1rem !important'
                    },
                    '@media (min-width: 900px)': {
                      fontSize: '1rem !important',
                    },
                    '@media (min-width: 1200px)': {
                      fontSize: '1rem !important',
                    },
                    '@media (min-width: 1500px)': {
                      fontSize: '1.1rem !important',
                    },
                    maxWidth: { xs: '800px', sm: '800px', md: '450px', lg: '450px' }
                  }}>
                  Проектирование, производство, логистика и&nbsp;монтаж. Работаем по&nbsp;всей территории Калининграда и&nbsp;области.
                </Typography>
              </Stack>


              <Stack
                spacing={{ xs: 2, sm: 2, md: 2, lg: 2 }}
                justifyContent={{ xs: 'center', sm: 'center', md: 'flex-start', lg: 'flex-start' }}
                direction={{ xs: 'column', sm: 'column', md: 'row', xl: 'row' }}
              >

                <NextLink
                  href='/submit-application'
                  passHref
                >
                  <Button
                    fullWidth
                    size="large"
                    onClick={() => window.ym(96137092, 'reachGoal', 'submitButtonOnTheMainPage')}
                    variant="contained"
                    sx={{
                      '@media (min-width: 320px)': {
                        fontSize: '0.9rem !important',
                        width: '100%'
                      },
                    }}
                  >
                    Оставить заявку
                  </Button>
                </NextLink>

                <NextLink href='/services' passHref>
                  <Button
                    fullWidth
                    size="large"
                    variant="outlined"
                    endIcon={<Iconify icon={chevronRight} />}
                    sx={{
                      '@media (min-width: 320px)': {
                        fontSize: '0.9rem !important',
                        width: '100%'
                      }
                    }}
                  >
                    Все услуги
                  </Button>
                </NextLink>

              </Stack>
              <Advantages />
            </Stack>
          </Grid>

          <Grid item xs={12} sx={{ display: { xs: 'block', md: 'none' } }}>
            <MobileServiceCards services={services} />
          </Grid>

          {/* Правая часть с карточками услуг */}
          <Grid item md={6} lg={6} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Grid container spacing={2}>
              {/* Первый ряд карточек */}
              <Grid item xs={6} >
                <ScrollBlock direction="down" isHovering={isHovering} setIsHovering={setIsHovering}>
                  {firstRowServices.map((result, index) => (
                    <ServiceCardMain key={result.serviceLink} result={result} />
                  ))}
                  {firstRowServices.map((result, index) => (
                    <ServiceCardMain key={result.serviceLink + "-copy-first-" + index} result={result} />
                  ))}
                </ScrollBlock>
              </Grid>

              {/* Второй ряд карточек */}
              <Grid item xs={6}>
                <ScrollBlock direction="up" isHovering={isHovering} setIsHovering={setIsHovering}>
                  {secondRowServices.map((result, index) => (
                    <ServiceCardMain key={result.serviceLink} result={result} />
                  ))}
                  {secondRowServices.map((result, index) => (
                    <ServiceCardMain key={result.serviceLink + "-copy-second-" + index} result={result} />
                  ))}
                </ScrollBlock>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

ServiceCardMain.propTypes = {
  order: PropTypes.number,
  service: PropTypes.shape({
    mainServiceImg: PropTypes.string,
    serviceName: PropTypes.string,
    serviceLink: PropTypes.string,
  }),
};

function ServiceCardMain({ result }) {

  const { serviceName, serviceLink, mainServiceImg, relatedServices } = result;

  return (
    <Card
      sx={{
        backgroundColor: '#252c35',
        marginBottom: '20px',
        minWidth: 225,
        '@media (max-width: 800px)': {
          marginRight: '15px',
        },
      }}
    >
      <Box
        sx={{
          cursor: 'pointer',
          pt: '15px',
          pl: '15px',
          pr: '15px',
        }}
      >
        <NextLink
          as={Routes.services.service(serviceLink)}
          href={Routes.services.service(serviceLink)}
          passHref
        >
          <Image
            alt={serviceName}
            src={mainServiceImg}
            ratio="1/1"
            sx={{
              borderRadius: '15px'
            }}
          />
        </NextLink>
      </Box>

      <CardContent>
        <Box
          sx={{
            cursor: 'pointer',
          }}
        >
          <NextLink
            as={Routes.services.service(serviceLink)}
            href={Routes.services.service(serviceLink)}
            passHref
          >
            <Typography
              gutterBottom
              component="div"
              variant="h6"
            >
              {serviceName}
            </Typography>
          </NextLink>
        </Box>

      </CardContent>
    </Card>
  );
}


const MobileServiceCards = ({ services }) => {
  const scrollRef = useRef(null);

  return (
    <Box
      ref={scrollRef}
      sx={{
        overflowX: 'auto',
        display: 'flex',
        flexDirection: 'row',
        scrollbarWidth: 'none', // Для Firefox
        msOverflowStyle: 'none', // Для IE и Edge
        '&::-webkit-scrollbar': { display: 'none' }, // Для остальных браузеров
      }}
    >
      {services.map((service, index) => (
        <ServiceCardMain key={service.serviceLink + index} result={service} />
      ))}
    </Box>
  );
};






const DividerStyle = <Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed' }} />;

function Advantages() {
  return (
    <Stack
      spacing={3}
      direction={{ xs: 'column', md: 'row' }}
      divider={DividerStyle}
      sx={{ pt: { xs: 2, sm: 5, md: 1, lg: 1 } }}
    >
      <Stack spacing={{ md: 3 }} direction="row" divider={DividerStyle}>
        <Stack spacing={0.5} sx={{ color: 'common.white', width: { xs: 0.5, md: 'auto' } }}>
          <Typography
            variant="h4"
            sx={{
              '@media (min-width: 600px)': {
                fontSize: '2rem !important'
              },
              '@media (min-width: 900px)': {
                fontSize: '1.5rem !important'
              },
              '@media (min-width: 1200px)': {
                fontSize: '1.5rem !important'
              },
              '@media (min-width: 1500px)': {
                fontSize: '1.5rem !important',
              }
            }}
          >
            13
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.48 }}>
            Лет опыта
          </Typography>
        </Stack>

        <Stack spacing={0.5} sx={{ color: 'common.white', width: { xs: 0.5, md: 'auto' } }}>
          <Typography
            variant="h4"
            sx={{
              '@media (min-width: 600px)': {
                fontSize: '2rem !important'
              },
              '@media (min-width: 900px)': {
                fontSize: '1.5rem !important'
              },
              '@media (min-width: 1200px)': {
                fontSize: '1.5rem !important'
              },
              '@media (min-width: 1500px)': {
                fontSize: '1.5rem !important',
              }
            }}
          >
            2 000
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.48 }}>
            Проектов
          </Typography>
        </Stack>
      </Stack>

      <Stack spacing={{ md: 3 }} direction="row" divider={DividerStyle}>
        <Stack spacing={0.5} sx={{ color: 'common.white', width: { xs: 0.5, md: 'auto' } }}>
          <Typography
            variant="h4"
            sx={{
              '@media (min-width: 600px)': {
                fontSize: '2rem !important'
              },
              '@media (min-width: 900px)': {
                fontSize: '1.5rem !important'
              },
              '@media (min-width: 1200px)': {
                fontSize: '1.5rem !important'
              },
              '@media (min-width: 1500px)': {
                fontSize: '1.5rem !important',
              }
            }}
          >
            149
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.48 }}>
            Сотрудников
          </Typography>
        </Stack>

        <Stack spacing={0.5} sx={{ color: 'common.white', width: { xs: 0.5, md: 'auto' } }}>
          <Typography
            variant="h4"
            sx={{
              '@media (min-width: 600px)': {
                fontSize: '2rem !important'
              },
              '@media (min-width: 900px)': {
                fontSize: '1.5rem !important'
              },
              '@media (min-width: 1200px)': {
                fontSize: '1.5rem !important'
              },
              '@media (min-width: 1500px)': {
                fontSize: '1.5rem !important',
              }
            }}
          >
            3
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.48 }}>
            Цеха
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}