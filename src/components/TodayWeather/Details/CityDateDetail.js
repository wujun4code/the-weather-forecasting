import { Box, Typography } from '@mui/material';
import React from 'react';
import { CurrentDate } from '../../Reusable/UTCDatetime';
import labels from '../../../i18n/labels';
import { useIntl } from 'react-intl';

const CityDateDetail = (props) => {

  const getCityLabel = (city) => {
    if (city.adm2 && city.name !== city.adm2) return `${city.name}, ${city.adm2}`;
    else if (city.adm1) return `${city.name}, ${city.adm1}`;
    else if (city.country) return `${city.name}, ${city.country}`;

    return city.name;
  };
  const intl = useIntl();

  const { qiCity } = props;
  const cityLabel = getCityLabel(qiCity);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        height: '100%',
      }}
    >
      <Typography
        variant="h3"
        component="h3"
        sx={{
          fontFamily: 'Poppins',
          fontWeight: '600',
          fontSize: { xs: '12px', sm: '14px', md: '16px' },
          color: 'white',
          textTransform: 'uppercase',
          lineHeight: 1,
          marginBottom: '8px',
        }}
      >
        {cityLabel}
      </Typography>
      <Typography
        variant="h4"
        component="h4"
        sx={{
          fontSize: { xs: '10px', sm: '12px', md: '14px' },
          color: 'rgba(255,255,255, .7)',
          lineHeight: 1,
          letterSpacing: { xs: '1px', sm: '0' },
          fontFamily: 'Roboto Condensed',
        }}
      >
        {labels[intl.locale].today} <CurrentDate />
      </Typography>
    </Box>
  );
};

export default CityDateDetail;
