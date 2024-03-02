import React from 'react';
import { Grid, Typography } from '@mui/material';
import DailyForecastItem from './DailyForecastItem';
import ErrorBox from '../../Reusable/ErrorBox';
import Layout from '../../Reusable/Layout';
import LocalizedText from '../../../i18n/localized';

const DailyForecast = ({ qiHourlyData }) => {
  const noDataProvided = !qiHourlyData || Object.keys(qiHourlyData).length === 0;

  let subHeader;

  if (!noDataProvided && qiHourlyData.length > 0)
    subHeader = (
      <Typography
        variant="h5"
        component="h5"
        sx={{
          fontSize: { xs: '10px', sm: '12px' },
          textAlign: 'center',
          lineHeight: 1,
          color: '#04C4E0',
          fontFamily: 'Roboto Condensed',
          marginBottom: '1rem',
        }}
      >
        {/* {forecastList.length === 1
          ? '1 available forecast'
          : `${forecastList.length} available forecasts`} */}
      </Typography>
    );

  let content;

  if (noDataProvided) content = <ErrorBox flex="1" type="error" />;

  if (!noDataProvided && qiHourlyData.length > 0)
    content = (
      <Grid
        item
        container
        xs={12}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: 'fit-content',
        }}
        spacing="4px"
      >
        {qiHourlyData.map((item, idx) => (
          <Grid
            key={idx}
            item
            xs={4}
            sm={2}
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{
              marginBottom: { xs: '1rem', sm: '0' },
            }}
          >
            <DailyForecastItem qiItem={item} />
          </Grid>
        ))}
      </Grid>
    );

  if (!noDataProvided && qiHourlyData && qiHourlyData.length === 0)
    subHeader = (
      <ErrorBox
        flex="1"
        type="info"
        margin="2rem auto"
        errorMessage="No available forecasts for tonight."
      />
    );

  return (
    <Layout
      title={LocalizedText({ dataSource: 'labels', key: 'today-hourly' })}
      content={content}
      sectionSubHeader={subHeader}
      sx={{ marginTop: '2.9rem' }}
      mb="0.3rem"
    />
  );
};

export default DailyForecast;
