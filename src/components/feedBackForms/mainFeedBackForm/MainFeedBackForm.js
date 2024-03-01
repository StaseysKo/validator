import React from 'react';

import { toast, ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { MenuItem, Button, Typography, Stack, Divider, Container, Grid, Box } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import FormProvider, { RHFSelect, RHFTextField } from 'src/components/feedBackForms/hook-form';

import { createFormSchema } from '../hook-form/schema';

import { bgGradient } from 'src/utils/cssStyles';

const RootStyle = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(),
  [theme.breakpoints.up('xs')]: {
    marginTop: theme.spacing(5),
  },
  [theme.breakpoints.up('sm')]: {
    marginTop: theme.spacing(8),
  },
  [theme.breakpoints.up('md')]: {
    marginTop: theme.spacing(8),
  },
  [theme.breakpoints.up('lg')]: {
    marginTop: theme.spacing(10),
  },
  padding: theme.spacing(10, 0),
  ...bgGradient({
    color: alpha(theme.palette.background.default, 0.9),
    imgUrl: '/images/backgrounds/background_1.webp',
  }),
  borderRadius: 3,
  overflow: 'hidden',
  position: 'relative',
}));

const EMPLOYEES = [
  { value: 'Менеджер', label: 'Менеджер' },
  { value: 'Инженер-проектировщик', label: 'Инженер-проектировщик' },
];

export const defaultValues = {
  fullName: '',
  phoneNumber: '',
  email: '',
  employeeSelection: '',
};

export default function MainFeedBackForm({ sourcePage }) {

  const methods = useForm({
    resolver: yupResolver(
      createFormSchema({
        includeFullName: true,
        includePhoneNumber: true,
        includeEmail: true,
      })
    ),
    defaultValues,
  });

  const { reset, handleSubmit } = methods;

  const onSubmit = async (data) => {

    data.sourcePage = sourcePage;
    data.formType = 'mainFeedback';

    try {
      const response = await fetch('https://chistograd-pmk.ru/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        reset();
        toast.success('Форма отправлена', {
          style: {
            borderRadius: '8px',
            background: '#FA541C',
          }
        });
      } else {
        toast.error('Ошибка при отправке формы');
      }
    } catch (error) {
      console.error('Ошибка при отправке формы', error);
      toast.error('Ошибка при отправке формы');
    }
  };

  const onError = (errors) => {
    console.log('Сообщение об ошибке', JSON.stringify(errors, null, 2));
    // toast.error('Ошибка при отправке формы!');
  };

  const renderLabel = (label, isRequired) => (
    <>
      {label}
      {isRequired && <span style={{ color: '#FA541C' }}> *</span>}
    </>
  );

  return (
    <RootStyle>
      <ToastContainer
        position="bottom-left"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        closeButton={false}
        transition={Slide}
      />
      <Container>
        <Grid container alignItems="center">
          <Grid
            item
            xs={12}
            sm={12}
            md={5}
            lg={5}
            sx={{
              color: 'common.white',
              textAlign: { xs: 'center', md: 'left' },
              mr: { xs: 0, sm: 0, md: 10, lg: 12 }
            }}
          >
            <Typography variant="h2">Начнем работать над вашим проектом? </Typography>

            <Typography
              sx={{
                mt: 3,
                mb: 5,
                opacity: 0.72,
                '@media (min-width: 320px)': {
                  fontSize: '16px !important'
                },
                '@media (min-width: 375px)': {
                  fontSize: '16px !important'
                },
                '@media (min-width: 425px)': {
                  fontSize: '16px !important'
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
              Запишитесь на бесплатную онлайн-консультацию к инженеру-проектировщику или менеджеру.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit, onError)}>
              <Stack spacing={3.5}>
                <Stack spacing={2.5}>
                  <RHFTextField name="fullName" label={renderLabel("Имя", true)} />

                  <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 2.5, md: 2 }}>
                    <RHFTextField name="phoneNumber" label={renderLabel("Телефон", true)} isPhone={true} />
                    <RHFTextField name="email" label={renderLabel("Почта", true)} />
                  </Stack>

                  <RHFSelect name="employeeSelection" label="С кем нужна консультация?">
                    <MenuItem value="Не имеет значения" style={{ textTransform: 'none' }}>Не имеет значения</MenuItem>
                    <Divider sx={{ borderStyle: 'dashed' }} />
                    {EMPLOYEES.map((employee) => (
                      <MenuItem key={employee.value} value={employee.label}>
                        {employee.label}
                      </MenuItem>
                    ))}
                  </RHFSelect>
                </Stack>

                <Stack spacing={1}>
                  <Button
                    type="submit"
                    size="large"
                    variant="contained"
                    sx={{
                      marginBottom: {
                        xs: '5px !important',
                        sm: '5px !important',
                        md: '0px !important',
                        xl: '0px !important',
                      }
                    }}
                  >
                    Записаться
                  </Button>

                  <Typography
                    sx={{
                      fontSize: { xs: '11px', sm: '11px', md: '12px', lg: '12px', xl: '12px' },
                      color: "text.secondary",
                      opacity: 0.8,
                      textAlign: {
                        xs: 'center',
                        sm: 'center',
                        md: 'left',
                        lg: 'left'
                      },
                      marginTop: '14px !important'
                    }}
                  >
                    Нажимая на кнопку 'Записаться', вы соглашаетесь с {' '}
                    <a
                      href="/privacy-policy"
                      style={{
                        borderBottom: '0.5px solid',
                        paddingBottom: '2px',
                        color: 'inherit',
                        textDecoration: 'none'
                      }}
                    >
                      положением об обработке и защите персональных данных
                    </a>


                  </Typography>
                </Stack>
              </Stack>
            </FormProvider>
          </Grid>

        </Grid>
      </Container>
    </RootStyle>
  );
}

