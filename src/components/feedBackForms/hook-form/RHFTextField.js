import PropTypes from 'prop-types';
import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField } from '@mui/material';
import { PatternFormat } from 'react-number-format';

export default function RHFTextField({ name, helperText, isPhone, ...other }) {
  const { control } = useFormContext();

  // Создаем обертку с React.forwardRef()
  const PatternFormatWrapper = React.forwardRef((props, ref) => (
    <PatternFormat  {...props} getInputRef={ref} />
  ));

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        isPhone ? (
          <PatternFormatWrapper
            {...field}
            customInput={TextField}
            type="tel"
            format="+7 (###) ###-##-##"
            mask="_"
            fullWidth
            value={typeof field.value === 'number' && field.value === 0 ? '' : field.value}
            error={!!error}
            helperText={error ? error?.message : helperText}
            {...other}
          />
        ) : (
          <TextField
            {...field}
            fullWidth
            value={typeof field.value === 'number' && field.value === 0 ? '' : field.value}
            error={!!error}
            helperText={error ? error?.message : helperText}
            {...other}
          />
        )
      )}
    />
  );
}

RHFTextField.propTypes = {
  name: PropTypes.string,
  helperText: PropTypes.node,
  isPhone: PropTypes.bool,
};
