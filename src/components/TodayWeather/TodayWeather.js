import { Grid } from '@mui/material';
import React from 'react';
import AirConditions from './AirConditions/AirConditions';
import DailyForecast from './Forecast/DailyForecast';
import Details from './Details/Details';

const TodayWeather = ({ qiCity, qiNowData, qiHourlyData }) => {
  return (
    <Grid container sx={{ padding: '3rem 0rem 0rem' }}>
      <Details qiCity={qiCity} qiNowData={qiNowData} />
      <AirConditions qiNowData={qiNowData} />
      <DailyForecast qiHourlyData={qiHourlyData} />
    </Grid>
  );
};

export default TodayWeather;
