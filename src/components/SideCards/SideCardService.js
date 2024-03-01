import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Typography, Divider, Stack, Button, IconButton, Tooltip, DialogContentText } from '@mui/material';

import { Icon } from '@iconify/react';

import Dialog from '@mui/material/Dialog';

import DialogContent from '@mui/material/DialogContent';

import useWorkingHours from 'src/hooks/useWorkingHours';


import CloseIcon from '@mui/icons-material/Close';

// components 
import { ManagerMessengersIcons } from 'src/components';
import { SpecialistConsultationForm } from 'src/components/feedBackForms/specialistConsultationForm'
import { HEADER_DESKTOP_HEIGHT } from 'src/config'

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

SideCardService.propTypes = {
  serviceName: PropTypes.string,
  metadata: PropTypes.shape({
    managerMessengers: PropTypes.object,
    manager: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
  }),
};

function capitalizeFirstWord(str) {
  const words = str.split(' ');
  if (words.length === 0) return str;
  words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
  return words.join(' ');
}

export default function SideCardService({ metadata, serviceName }) {
  const { manager, managerMessengers, email, phone, relatedServices } = metadata;

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const isWorkingHours = useWorkingHours();

  return (
    <RootStyle>
      <Stack spacing={3}>

        <Stack spacing={1}>

          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            Входящие услуги
          </Typography>
          <Typography variant="body2">
            {capitalizeFirstWord(relatedServices.join(', '))}
          </Typography>

          <Typography variant="overline" sx={{ color: 'text.disabled', pt: 1 }}>
            Менеджер направления
          </Typography>
          <Typography variant="body2">{manager}</Typography>

          <Typography variant="overline" sx={{ color: 'text.disabled', pt: 1 }}>
            Контактный телефон:
          </Typography>
          <Typography variant="body2" sx={{ pb: 1 }}>
            <a href={`tel:${phone}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              {phone}
            </a>
          </Typography>

          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            Контактная почта:
          </Typography>


          <Typography variant="body2" sx={{ pb: 1 }}>
            <a href={`mailto:${email}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              {email}
            </a>
          </Typography>
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack direction="row" alignItems="center" spacing={0.5}>
          <Typography variant="subtitle2">Написать:</Typography>
          <ManagerMessengersIcons initialColor links={managerMessengers} />
        </Stack>
        <Stack direction={{ xs: 'column', sm: 'row', md: 'row', lg: 'row' }} alignItems="center" justifyContent="space-between" spacing={1}>
          <Button
            href="#submit-application"
            onClick={handleAnchorLinkClick}
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
          <Tooltip title="Бесплатная консультация специалиста" arrow>
            <Button
              sx={{
                width: { xs: '100%', sm: 'inherit', md: 'inherit', lg: 'inherit' },
              }}
              size="large"
              color="inherit"
              variant="outlined"
              onClick={handleClickOpen}
            >
              <Icon
                icon="bx:support"
                width="1.5rem"
                height="1.5rem"

              />
            </Button>
          </Tooltip>
        </Stack>
        <Dialog sx={{ zIndex: 9997 }} open={open} onClose={handleClose}>
          <DialogContent
            sx={{
              p: { xs: '20px', sm: '20px', md: '30px', lg: '30px', xl: '30px' },
              pt: { xs: '25px', sm: '25px', md: '25px', lg: '25px', xl: '25px' },
              pb: { xs: '25px', sm: '25px', md: '25px', lg: '25px', xl: '25px' },
              minHeight: '200px',
              maxWidth: '450px'
            }}
          >
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              sx={{
                m: 0,
                position: 'absolute',
                right: 10,
                top: 10,
                color: 'grey.500',
                '&:hover': {
                  bgcolor: 'grey.700',
                  color: 'common.white',
                }
              }}
            >
              <CloseIcon />
            </IconButton>
            <Stack>

              <Typography
                sx={{
                  pb: '10px',
                  fontSize: {
                    xs: '25px !important',
                    sm: '25px !important',
                    md: '29px !important',
                    lg: '29px !important',
                    xl: '29px !important',
                  },
                  lineHeight: 1.2
                }}
                variant="h3"
              >
                Консультация <br />специалиста
              </Typography>
            </Stack>
            <DialogContentText sx={{ fontSize: { xs: '12px', sm: '12px', md: '14px', lg: '14px', xl: '14px' }, paddingBottom: '20px' }}>
              {isWorkingHours[0]
                ? "Наш специалист свяжется с вами в удобное для вас время и ответит на любые ваши вопросы."
                : "Наш специалист свяжется с вами в рабочие часы и ответит на любые ваши вопросы."
              }
            </DialogContentText>
            <SpecialistConsultationForm sourcePage={`Нужна консультация по услуге: '${serviceName}'.`} manager={manager} />
          </DialogContent>
        </Dialog>

      </Stack>
    </RootStyle>
  );
}
