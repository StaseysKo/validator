import * as Yup from 'yup';
import * as React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { toast, ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// form
import FormProvider, { RHFTextField } from 'src/components/feedBackForms/hook-form';

// @mui
import {
  ListItemText,
  Checkbox,
  Stack,
  TextField,
  Typography,
  InputLabel,
  OutlinedInput,
  MenuItem,
  Box,
  Chip,
  Select,
  FormControl,
  Button,
  Slider as MUISlider,
} from '@mui/material';

// utils
import { fCurrency } from 'src/utils/formatNumber';

import { createFormSchema } from '../hook-form/schema';

// ----------------------------------------------------------------------


const typeOfMetal = [
  'Нержавеющая сталь',
  'Черный металлопрокат',
  'Оцинкованная сталь',
];

const products = [
  'Листы', 'Труба', 'Швеллер', 'Балка',
  'Угол', 'Полоса', 'Круг', 'Квадрат',
];


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const defaultValues = {
  company: '',
  taxNumber: '',
  contactPerson: '',
  phoneNumber: '',
  email: '',
  steelGrade: '',
  scopeOfSupply: [3, 35],
  message: '',
};


// ----------------------------------------------------------------------

export default function SupplyFeedBackForm({ sourcePage }) {

  const { control, handleSubmit, isSubmitting, reset } = useForm({
    resolver: yupResolver(
      createFormSchema({
        includeContactPerson: true,
        includePhoneNumber: true,
        includeEmail: true,
      })
    ),
    defaultValues,
  });

  const [selectedMetalTypes, setSelectedMetalTypes] = React.useState([]);

  const [selectedMetalForms, setSelectedMetalForms] = React.useState([]);

  const onSubmit = async (data) => {

    const formData = {
      ...data,
      typeMetal: selectedMetalTypes,
      formMetal: selectedMetalForms,
      sourcePage,
      formType: 'supplyFeedBack',
    };

    try {
      const response = await fetch('https://chistograd-pmk.ru/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        reset();
        setSelectedMetalTypes([]); // Сбросить выбранные типы металла
        setSelectedMetalForms([]); // Сбросить выбранные формы металла
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


  const handleChangeTwo = (event) => {
    const {
      target: { value },
    } = event;

    // Update selected metal types
    const selectedMetals = typeof value === 'string' ? value.split(',') : value;
    setSelectedMetalTypes(selectedMetals);

  };


  const handleChangeThree = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedMetalForms(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };


  const renderLabel = (label, isRequired) => (
    <>
      {label}
      {isRequired && <span style={{ color: '#FA541C' }}> *</span>}
    </>
  );

  return (
    <FormProvider methods={{ control, handleSubmit, isSubmitting, reset }} onSubmit={handleSubmit(onSubmit, onError)}>
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

      <Stack spacing={2.5} alignItems="flex-start">
        <Stack spacing={5} sx={{ py: 0, width: 1 }}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            Информация о компании
          </Typography>
        </Stack>

        <Controller
          name="contactPerson"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              fullWidth
              label={renderLabel("Контактное лицо", true)}
              error={Boolean(error)}
              helperText={error?.message}
            />
          )}
        />

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 2.5, md: 2 }}
          sx={{ width: 1 }}
        >
          <RHFTextField
            name="phoneNumber"
            label={renderLabel("Номер телефона", true)}
            isPhone={true}
            fullWidth
          />

          <Controller
            name="email"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                fullWidth
                label={renderLabel("Email", true)}
                error={Boolean(error)}
                helperText={error?.message}
              />
            )}
          />
        </Stack>

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 2.5, md: 2 }}
          sx={{ width: 1 }}
        >
          <Controller
            name="company"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                fullWidth
                label="Наименование организации"
                error={Boolean(error)}
                helperText={error?.message}
              />
            )}
          />

          <Controller
            name="taxNumber"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                fullWidth
                label="ИНН"
                error={Boolean(error)}
                helperText={error?.message}
              />
            )}
          />
        </Stack>


        <Stack spacing={5} sx={{ py: 0, width: 1 }}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            Информация о поставляемом материале
          </Typography>
        </Stack>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Вид металла</InputLabel>
          <Select
            name="typeMetal"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            multiple
            value={selectedMetalTypes}
            onChange={handleChangeTwo}
            input={<OutlinedInput label="Вид металла" />}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {typeOfMetal.map((name) => (
              <MenuItem key={name} value={name} >
                <Checkbox checked={selectedMetalTypes.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-steel-grade">Марка стали</InputLabel>
          <Controller
            name="steelGrade"
            control={control}
            render={({ field }) => (
              <OutlinedInput
                {...field}
                id="outlined-steel-grade"
                label="Марка стали"
              />
            )}
          />
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="demo-multiple-checkbox-label">Форма металла</InputLabel>
          <Select
            name="formMetal"
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={selectedMetalForms}
            onChange={handleChangeThree}
            input={<OutlinedInput label="Вид изделия" />}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {products.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={selectedMetalForms.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>



        <Stack spacing={5} sx={{ py: 2, width: 1 }}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            Возможный объем поставки (в тоннах)
          </Typography>

          <Controller
            name="scopeOfSupply"
            control={control}
            render={({ field }) => (
              <MUISlider
                {...field}
                valueLabelDisplay="on"
                aria-labelledby="range-slider"
                getAriaValueText={fCurrency}
                max={40}
                min={0.5}
                step={0.5}
                valueLabelFormat={(value, index) => index === 0 ? `от ${fCurrency(value)}` : `до ${fCurrency(value)}`}
              />
            )}
          />


        </Stack>


        <Controller
          name="message"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              fullWidth
              multiline
              rows={4}
              label="Дополнительная информация"
              error={Boolean(error)}
              helperText={error?.message}
              sx={{ pb: 2.5 }}
            />
          )}
        />
      </Stack>
      <Button
        size="large"
        variant="contained"
        sx={{ width: '100%' }}
        type="submit" // Это указывает, что кнопка должна отправить форму
        disabled={isSubmitting} // Это отключает кнопку во время отправки формы
        onClick={handleSubmit(onSubmit)} // Это указывает функцию, которая будет вызвана при отправке формы
      >
        Отправить
      </Button>

      <Typography
        sx={{
          fontSize: { xs: '11px', sm: '11px', md: '12px', lg: '12px', xl: '12px' },
          color: "text.secondary",
          opacity: 0.8,
          textAlign: {
            xs: 'center',
            sm: 'center',
            md: 'center',
            lg: 'center'
          },
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
    </FormProvider>
  );
}
