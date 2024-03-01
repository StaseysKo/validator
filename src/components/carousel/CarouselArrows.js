import PropTypes from 'prop-types';
import { IconButton, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const BUTTON_SIZE = 40;

const ArrowStyle = styled(IconButton)(({ theme }) => ({
  width: BUTTON_SIZE,
  height: BUTTON_SIZE,
  cursor: 'pointer',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': {
    color: theme.palette.text.primary,
  },
}));

const ICON_SIZE = {
  width: 20,
  height: 20,
};

const CarouselArrows = ({ onNext, onPrev }) => {
  return (
    <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <ArrowStyle onClick={onPrev}>
        <ArrowBackIosIcon style={ICON_SIZE} />
      </ArrowStyle>
      <ArrowStyle onClick={onNext}>
        <ArrowForwardIosIcon style={ICON_SIZE} />
      </ArrowStyle>
    </Box>
  );
};

CarouselArrows.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
};

export default CarouselArrows;
