import PropTypes from 'prop-types';
import NextLink from 'next/link';
import { Card, CardContent, Typography, Box } from '@mui/material';
import Routes from 'src/routes';
import { Image } from 'src/components';

ServiceCard.propTypes = {
  result: PropTypes.object.isRequired,
};

function capitalizeFirstWord(str) {
  const words = str.split(' ');
  if (words.length === 0) return str;
  words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
  return words.join(' ');
}

export default function ServiceCard({ result, onClose }) {
  const { serviceName, serviceLink, mainServiceImg, relatedServices } = result;

  const handleClick = () => {
    if (onClose) {
      setTimeout(() => {
        onClose(); // Закрываем модальное окно поиска после задержки
      }, 2500); // 500 мс задержка
    }
  };

  return (
    <Card
      sx={{
        backgroundColor: '#252c35',
      }}
    >
      <div onClick={handleClick}>
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
        <Box sx={{ cursor: 'pointer' }}>
          <NextLink
            as={Routes.services.service(serviceLink)}
            href={Routes.services.service(serviceLink)}
            passHref
          >
            <Typography 
              sx={{ minHeight: 65 }} 
              gutterBottom 
              component="div"
              variant="h5"
            >
              {serviceName}
            </Typography>
          </NextLink>
        </Box>

        <Box sx={{ cursor: 'pointer' }}>
          <NextLink
            as={Routes.services.service(serviceLink)}
            href={Routes.services.service(serviceLink)}
            passHref
          >
            <Typography 
              variant="body2" 
              color="text.secondary"
              sx={{ minHeight: 85 }}
            >
              {capitalizeFirstWord(relatedServices.join(', '))}
            </Typography>
          </NextLink>
        </Box>
      </CardContent>
      </div>
    </Card>
  );
}
