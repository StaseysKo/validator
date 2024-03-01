import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
// @mui
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled } from '@mui/material/styles';
import { Typography, Stack, Button, Tooltip, Popover, MenuItem, Box } from '@mui/material';

import { Icon } from '@iconify/react';
import { Iconify } from 'src/components/iconify';

// data
import { _shareProject } from '_data'

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  ...theme.typography.body1,
  padding: theme.spacing(2.5), // значение по умолчанию
  backgroundColor: '#252c35',
  borderRadius: Number(theme.shape.borderRadius) * 2,

  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(3.5), // для планшетов
  },
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(4), // для маленьких десктопов
  },
  [theme.breakpoints.up('lg')]: {
    padding: theme.spacing(4), // для больших десктопов
  },
}));


// ----------------------------------------------------------------------

SideCardProject.propTypes = {
  metadata: PropTypes.shape({
    detailedServicesInfo: PropTypes.array,
    adressOfTheObject: PropTypes.string,
    nameOfObject: PropTypes.string,
    yearOfWork: PropTypes.string,
  }),
};

export default function SideCardProject({ metadata }) {
  const { yearOfWork, nameOfObject, adressOfTheObject, detailedServicesInfo } = metadata;


  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleChangeFavorite = (event) => {
    setFavorite(event.target.checked);
  };
  return (
    <RootStyle>

      <Stack spacing={1}>
        <Typography
          variant="h4"
          sx={{
            mb: 3
          }}
        >
          Детали
        </Typography>
      </Stack>

      <Stack spacing={1}>
        <Stack spacing={1}>
          <Typography variant="overline" sx={{ pt: 1, color: 'text.disabled' }}>
            Объект
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: '13px', sm: '14px', md: '14px', lg: '14px', xl: '14px' }
            }}
          >
            {nameOfObject}
          </Typography>

          <Typography variant="overline" sx={{ pt: 1, color: 'text.disabled' }}>
            Адрес объекта
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: '13px', sm: '14px', md: '14px', lg: '14px', xl: '14px' }
            }}
          >
            {adressOfTheObject}
          </Typography>

          <Typography variant="overline" sx={{ pt: 1, color: 'text.disabled' }}>
            Реализованные услуги
          </Typography>
          {detailedServicesInfo.map((service, index) => (
            <ServiceItem key={index} service={service} />
          ))}

          <Typography variant="overline" sx={{ pt: 1, color: 'text.disabled' }}>
            Год реализации
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: '13px', sm: '14px', md: '14px', lg: '14px', xl: '14px' }
            }}
          >
            {yearOfWork}
          </Typography>

        </Stack>
      </Stack>
      <Stack sx={{ mt: '24px' }} direction={{ xs: 'column', sm: 'row', md: 'row', lg: 'row' }} alignItems="center" justifyContent="space-between" spacing={1}>
        <Button
          href="#leave-a-request"
          color="inherit"
          variant="outlined"
          size="large"
          sx={{
            width: '100%',
            '@media (max-width: 425px)': {
              fontSize: "0.9rem",
            },
          }}
        >
          Оставить заявку
        </Button>
        <Tooltip title="Поделиться проектом" arrow>
          <Button
            sx={{
              width: { xs: '100%', sm: 'inherit', md: 'inherit', lg: 'inherit' },
            }}
            size="large"
            color="inherit"
            variant="outlined"
            onClick={handleOpen}
          >
            <Icon
              icon="carbon:share"
              width="1.5rem"
              height="1.5rem"
            />
          </Button>
        </Tooltip>
      </Stack>

      <Popover
        open={!!open}
        onClose={handleClose}
        anchorEl={open}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        PaperProps={{
          sx: { width: 220, p: 1 },
        }}
      >
        {_shareProject.map(({ value, action, color, icon, label, Component }) => (
          <MenuItem
            key={value}
            onClick={() => action(handleClose)}
            sx={{ typography: 'body2', display: 'flex', alignItems: 'center' }}
          >
            <Box sx={{ mr: 2, color: color, fontSize: 17 }}>
              {Component ? <Component /> : <Iconify icon={icon} sx={{ width: 20, height: 20 }} />}
            </Box>
            {label}
          </MenuItem>
        ))}
      </Popover>

    </RootStyle>
  );
}

const ServiceItem = ({ service }) => {
  const hasAdditionalInfo = service.property1 || service.property2 || service.property3 || service.property4;

  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'));
  const trigger = isMobile ? 'click' : 'mouseenter focus';

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Typography
        variant="body2"
        sx={{
          fontSize: { xs: '13px', sm: '14px', md: '14px', lg: '14px', xl: '14px' }
        }}
      >
        {service.name}
      </Typography>
      {hasAdditionalInfo && (
        <Tippy content={<AdditionalInfo service={service} />} arrow={true} trigger={trigger} theme='custom'>
          <div>
            <Icon icon="bi:info-circle" style={{ color: '#637381' }} />
          </div>
        </Tippy>
      )}
    </Stack>
  );
};

const AdditionalInfo = ({ service }) => (
  <Box>
    {service.property1 && <Typography variant="caption" display="block">{service.property1}</Typography>}
    {service.property2 && <Typography variant="caption" display="block">{service.property2}</Typography>}
    {service.property3 && <Typography variant="caption" display="block">{service.property3}</Typography>}
    {service.property4 && <Typography variant="caption" display="block">{service.property4}</Typography>}
  </Box>
);