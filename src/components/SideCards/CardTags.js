import Link from 'next/link';

import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Typography, Chip, Stack } from '@mui/material';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  borderRadius: Number(theme.shape.borderRadius) * 2,
  marginTop: 40,
  border: ' solid 1px rgba(145, 158, 171, 0.24)',

  padding: theme.spacing(2.5), // значение по умолчанию

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

CardTags.propTypes = {
  metadata: PropTypes.shape({
    categories: PropTypes.array,
  }),
};

const CustomTag = styled('div')({
  // Стилизация под ваш дизайн
  padding: '5px 10px',
  border: '1px solid',
  borderRadius: '16px',
  margin: '5px',
  cursor: 'pointer',
  whiteSpace: 'normal', // Для переноса текста
});

export default function CardTags({ metadata }) {
  const { categories } = metadata;

  // Функция для приведения первой буквы к верхнему регистру
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  return (
    <RootStyle>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Категории
      </Typography>
      <Stack direction="row" flexWrap="wrap">
        {categories.map((category) => {
          const capitalizedCategory = capitalizeFirstLetter(category);
          return (
            <Link
              key={category}
              href={`/portfolio?category=${encodeURIComponent(capitalizedCategory)}`}
              passHref
              target="_blank"
              rel="noopener noreferrer"
            >
              <Chip
                label={capitalizedCategory}
                clickable
                sx={{ fontSize: { xs: '12px', sm: '13px', md: '13px', lg: '13px', xl: '13px', }, m: 0.5 }}
              />
            </Link>
          );
        })}
      </Stack>
    </RootStyle>
  );
}



