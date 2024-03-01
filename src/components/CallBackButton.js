import React, { useState, useCallback, useEffect, memo } from 'react';
import {
  DialogContentText,
  Stack,
  Paper,
  IconButton,
  Box,
  Typography,
  Dialog,
  DialogContent,
  MenuItem,
} from "@mui/material";

import Fab from '@mui/material/Fab';
import { Icon } from '@iconify/react';
import phoneMessageIcon from '@iconify-icons/mdi/phone-message';
import crossIcon from '@iconify-icons/mdi/close';
import CloseIcon from '@mui/icons-material/Close';
import { _fastCommunication } from '_data';
import Popup from 'reactjs-popup';

import { CallBackForm } from './feedBackForms/callBackForm'

import useWorkingHours from 'src/hooks/useWorkingHours';


const buttonStyle = {
  position: 'fixed',
  bottom: '20px',
  zIndex: 9996,
  right: '20px'
};

const MessengerItem = memo(({ value, href, color, icon, label, handleRequestCall, Component }) => (
  <a
    href={value === 'callback' ? null : href}
    target={value === 'callback' ? null : "_blank"}
    rel={value === 'callback' ? null : "noopener noreferrer"}
    onClick={(event) => {
      if (value === 'callback') {
        event.preventDefault();
        handleRequestCall();
      }
    }}
    style={{ textDecoration: 'none', color: 'inherit' }}
  >
    <MenuItem sx={{ padding: '6px', typography: 'body2', display: 'flex', alignItems: 'center' }}>
      <Box sx={{ mr: 2, color, fontSize: 21 }}>
        {Component ? <Component /> : <Icon icon={icon} />}
      </Box>
      <Typography>{label}</Typography>
    </MenuItem>
  </a>
));

FloatingButton.displayName = 'FloatingButton';


export default function FloatingButton() {

  const [open, setOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phoneNumber: '', agreed: false });
  const [errorData, setErrorData] = useState({ name: false, phoneNumber: false, agreed: false });

  const handleClick = useCallback(() => setOpen(prev => !prev), []);
  const handleClose = useCallback(() => setOpen(false), []);

  const handleDialogClose = useCallback(() => {
    setDialogOpen(false);
    setErrorData({ name: false, phoneNumber: false, agreed: false });
  }, []);
  const handleRequestCall = useCallback(() => {
    setDialogOpen(true);
    setOpen(false);
  }, []);
  const handleInputChange = useCallback((e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    setErrorData(prev => ({ ...prev, [id]: !value }));
  }, []);
  const handleSend = useCallback(() => {
    const errors = {
      name: !formData.name,
      phoneNumber: !formData.phoneNumber,
      agreed: !formData.agreed
    };
    if (errors.name || errors.phoneNumber || errors.agreed) {
      setErrorData(errors);
      return;
    }
    setFormData({ name: '', phoneNumber: '', agreed: false });
    setDialogOpen(false);
  }, [formData]);

  const handleGlobalClick = useCallback((event) => {
    if (open && !event.target.closest('.popup-content')) {
      setOpen(false);
    }
  }, [open]);

  const handleEscClose = useCallback((event) => {
    if (event.key === 'Escape') {
      setOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleGlobalClick, true);
    document.addEventListener('keydown', handleEscClose, true);
    return () => {
      document.removeEventListener('click', handleGlobalClick, true);
      document.removeEventListener('keydown', handleEscClose, true);
    };
  }, [handleGlobalClick, handleEscClose]);

  const isWorkingHours = useWorkingHours();

  return (
    <>
      <div style={buttonStyle}>
        <Fab color="primary" aria-label="add" onClick={handleClick} style={{ cursor: 'pointer' }}>
          <Icon icon={open ? crossIcon : phoneMessageIcon} width={24} height={24} />
        </Fab>
      </div>

      <Popup
        open={open}
        onClose={handleClose}
        closeOnDocumentClick={false}
        position="bottom right"
        contentStyle={{
          position: 'fixed',
          bottom: '85px',
          right: '20px',
          zIndex: 9996,
          className: 'popup-content'
        }}
      >
        <Paper>
          <Box sx={{ p: 1 }}>
            {_fastCommunication.map(messenger => (
              <MessengerItem key={messenger.value} {...messenger} handleRequestCall={handleRequestCall} />
            ))}
          </Box>
        </Paper>
      </Popup>

      <Dialog sx={{ zIndex: 9996 }} open={dialogOpen} onClose={handleDialogClose}>

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
            onClick={handleDialogClose}
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
              Заказать <br />обратный звонок
            </Typography>

          </Stack>

          <DialogContentText sx={{ fontSize: { xs: '12px', sm: '12px', md: '14px', lg: '14px', xl: '14px' }, paddingBottom: '20px' }}>
            {isWorkingHours[0]
              ? `Укажите ваше имя и номер телефона - мы перезвоним в удобное для вас время`
              : `Укажите ваше имя и номер телефона, и мы обязательно  перезвоним в рабочие часы`
            }
          </DialogContentText>


          <CallBackForm sourcePage={`Заказан обратный звонок через кнопку быстрой связи`} />

        </DialogContent>
      </Dialog>
    </>
  );
};
