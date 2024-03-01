import PropTypes from 'prop-types';
import NextLink from 'next/link';
// icons
import checkmarkIcon from '@iconify/icons-carbon/checkmark';
// @mui
import { Card, Stack, Button, Typography } from '@mui/material';
//
import { TextIconLabel } from 'src/components';
import { Iconify } from 'src/components/iconify';

import directionStraightRight from '@iconify/icons-carbon/direction-straight-right';

// ----------------------------------------------------------------------

AdvantageCard.propTypes = {
  advantage: PropTypes.shape({
    advantageName: PropTypes.string,
    options: PropTypes.array,
    actionButton: PropTypes.string,
    advantagesLink: PropTypes.string,
  }),
};

export default function AdvantageCard({ advantage }) {
  const { advantagesLink, actionButton, options, advantageName } = advantage;


  return (
    <Card
      sx={{
        p: {xs: 3, sm: 5, md: 5, lg: 5},
        backgroundColor: '#252c35',
      }}
    >
      <Stack direction="row" justifyContent="space-between">
        <div>
          <Stack direction="row" alignItems="center" spacing={0.5}>
          <Typography 
              variant="h3"
              sx={{
                fontWeight: 600,
                fontSize: "24px",
                lineHeight: "42px",
                '@media (min-width: 320px)': {
                  fontSize: "1.8rem",
                },
                '@media (min-width: 375px)' : {
                  fontSize: "2rem",
                },
                '@media (min-width: 425px)' : {
                  fontSize: "2rem",
                },
                '@media (min-width: 600px)' : {
                  fontSize: "2rem",
                },
                '@media (min-width: 900px)' : {
                  fontSize: "2rem",
                },
                '@media (min-width: 1200px)' : {
                    maxWidth: '250px',
                    fontSize: "2rem",
                },
                '@media (min-width: 1500px)': {
                  fontSize: "2rem",
                },
              }}
            >
              {`${advantageName}`}
            </Typography>
          </Stack>
        </div>
      </Stack>

      <Stack 
        spacing={2} 
        sx={{ 
          minHeight: {xs: '240px', sm: '100px', md: '340px', lg: '250px'}, 
          my: 5 
        }}
      >
        {options.map((option, index) => (
          <TextIconLabel
            sx={{
              fontSize: {xs: '0.875rem', sm: '0.875rem', md: '0.875rem', lg: '1rem'},
              lineHeight: "26px",
              color: 'text.secondary'
            }}
            key={index}
            icon={
              <Iconify
                icon={checkmarkIcon}
                sx={{ 
                  width: 20, 
                  height: 20, 
                  mr: 2, 
                  color: 'primary.main', 
                  flexShrink: 0
                }}
              />
            }
            value={option}
          />
        ))}
      </Stack>
      <NextLink href={advantagesLink} passHref>
        <Button
          variant="outlined"
          color="inherit"
          size="large"
          endIcon={<Iconify icon={directionStraightRight} sx={{ width: 22, height: 22 }} />}
          sx={{ 
            textTransform: 'none',
            fontSize: {xs: '0.75rem', sm: '0.8125rem', md: '0.8125rem', lg: '0.9375rem', xl: '1rem'}
          }}
        >
          {actionButton}
        </Button>
      </NextLink>
    </Card>
  );
}
