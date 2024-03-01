import PropTypes from 'prop-types';
// next
import dynamic from 'next/dynamic';
// @mui
import { Typography, Stack, Chip, Box } from '@mui/material';
// components
import { TextIconLabel, Markdown } from 'src/components';

const ContactMap = dynamic(() => import('src/components/map/ContactMap'));

// ----------------------------------------------------------------------

VacancyPageDetails.propTypes = {
  job: PropTypes.shape({
    content: PropTypes.object,
    metadata: PropTypes.shape({
      placeOfWork: PropTypes.string,
      fullNameOfAddressForMaps: PropTypes.string,
      addressCoordinatesForMaps: PropTypes.string,
      arrayOfSkillsRequired: PropTypes.array,
      arrayOfBenefits: PropTypes.array,
    })
  })
};

export default function VacancyPageDetails({ job }) {
  const { content, metadata } = job
  const { arrayOfSkillsRequired, arrayOfBenefits, placeOfWork, fullNameOfAddressForMaps, addressCoordinatesForMaps } = metadata

  const location = [
    {
      title: placeOfWork,
      address: fullNameOfAddressForMaps,
      latlng: addressCoordinatesForMaps.split(',').map(Number)
    }
  ];

  return (
    <Stack spacing={5}>
      <Markdown content={content} />

      {/* -- Skills -- */}
      <section>
        <Typography variant="h4" sx={{ mb: 3 }}>
          Необходимые навыки
        </Typography>
        <Stack direction="row" flexWrap="wrap">
          {arrayOfSkillsRequired.map((skill) => (
            <Chip key={skill} label={skill} sx={{ m: 0.5 }} onClick={() => { }} />
          ))}
        </Stack>
      </section>

      <section>
        <Typography variant="h4" paragraph>
          Наши преимущества
        </Typography>
        <Box
          sx={{
            display: 'grid',
            rowGap: 2,
            columnGap: 3,
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
          }}
        >
          {arrayOfBenefits.map((benefit) => (
            <OverviewItem key={benefit} value={benefit} />
          ))}
        </Box>
      </section>

      {/* -- Location Map --- */}
      <section>
        <Typography variant="h4" sx={{ mb: 3 }}>
          Расположение
        </Typography>

        <ContactMap
          locations={location}
          sx={{ borderRadius: 2 }}
        />
      </section>
    </Stack>
  );
}



OverviewItem.propTypes = {
  value: PropTypes.string,
};

function OverviewItem({ value }) {
  return (
    <TextIconLabel
      spacing={1.5}
      alignItems="flex-start"
      icon={<Typography sx={{ color: '#FA541C' }} variant="body2">—</Typography>}
      value={
        <Stack spacing={0.5}>
          <Typography variant="body2">{value}</Typography>
        </Stack>
      }
      sx={{ '& svg': { width: 24, height: 24 } }}
    />
  );
}