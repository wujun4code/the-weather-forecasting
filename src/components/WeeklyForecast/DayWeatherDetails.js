import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { ShortFormattedDate } from '../Reusable/UTCDatetime';
import { DynamicIcon } from '../../utilities/IconsUtils';


const DayWeatherDetails = (props) => {

  const { qiDailyItem } = props;

  const { fxDate, iconDay, textDay, } = qiDailyItem;
  return (
    <Grid
      container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingLeft: { xs: '12px', sm: '20px', md: '32px' },
      }}
    >
      <Typography
        xs={12}
        sx={{
          fontFamily: 'Poppins',
          fontWeight: { xs: '400', sm: '600' },
          fontSize: { xs: '12px', sm: '13px', md: '14px' },
          color: 'white',
          lineHeight: 1,
          height: '31px',
          alignItems: 'center',
          display: 'flex',
        }}
      >
        <ShortFormattedDate dateString={fxDate} />
      </Typography>
      <Box
        xs={12}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '31px',
        }}
      >
        <Box
          sx={{
            width: { xs: '24px', sm: '28px', md: '31px' },
            height: 'auto',
            marginRight: '4px',
            color: 'rgba(255, 255, 255, .9)',
          }}
          alt="weather"
        >
          <DynamicIcon iconName={iconDay}></DynamicIcon>
        </Box>
        <Typography
          variant="h4"
          component="h4"
          sx={{
            fontSize: { xs: '12px', md: '14px' },
            color: 'rgba(255,255,255, .8)',
            lineHeight: 1,
            fontFamily: 'Roboto Condensed',
          }}
        >
          {textDay}
        </Typography>
      </Box>
    </Grid>
  );
};

export default DayWeatherDetails;
