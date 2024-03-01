import React from 'react';

import { toast, ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { MenuItem, Button, Typography, Stack, Divider, Container, Grid, Box } from '@mui/material';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import FormProvider, { RHFSelect, RHFTextField } from 'src/components/feedBackForms/hook-form';
import TimeSlotSelector from 'src/components/TimeSlotSelector'
import { createFormSchema } from '../hook-form/schema';


const EMPLOYEES = [
  { value: 'Менеджер', label: 'Менеджер' },
  { value: 'Инженер-проектировщик', label: 'Инженер-проектировщик' },
];

export const defaultValues = {
  fullName: '',
  phoneNumber: '',
  employeeSelection: '',
  callTime: '',
};

export default function SpecialistConsultationForm({ sourcePage, manager }) {

  const methods = useForm({
    resolver: yupResolver(
      createFormSchema({
        includeFullName: true,
        includePhoneNumber: true,
      })
    ),
    defaultValues,
  });

  const { reset, handleSubmit } = methods;

  const onSubmit = async (data) => {

    data.sourcePage = sourcePage;
    data.manager = manager;
    data.formType = 'specialistConsultation';

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
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit, onError)}>
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
      <Stack spacing={2.5}>
        <Stack spacing={1.5}>
          <RHFTextField variant="outlined" name="fullName" label={renderLabel("Имя", true)} />
          <RHFTextField variant="outlined" name="phoneNumber" label={renderLabel("Телефон", true)} isPhone={true} />

          <RHFSelect variant="outlined" name="employeeSelection" label="С кем нужна консультация?">
            <MenuItem value="Не имеет значения" style={{ textTransform: 'none' }}>Не имеет значения</MenuItem>
            <Divider sx={{ borderStyle: 'dashed' }} />
            {EMPLOYEES.map((employee) => (
              <MenuItem key={employee.value} value={employee.label}>
                {employee.label}
                </MenuItem>
            ))}
          </RHFSelect>

          <TimeSlotSelector
            name="callTime"
            label="Удобное время для звонка"
            value={methods.watch("callTime")}
            onChange={e => methods.setValue("callTime", e.target.value)}
          />
        </Stack>
        <Stack spacing={1}>
          <Button type="submit" size="large" variant="contained">
            Отправить
          </Button>
          <Typography
            sx={{
              fontSize: { xs: '10px', sm: '10px', md: '11px', lg: '11px', xl: '11px' },
              color: "text.secondary",
              opacity: 0.8,
              marginTop: '14px !important'
            }}
          >
            Нажимая на кнопку 'Отправить', вы соглашаетесь с {' '}
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
  );
}

