import React from 'react';
import { Box, Grid } from '@mui/material';
import { getDayMonthFromDate } from '../../../utilities/DatetimeUtils';
import { weatherIcon, DynamicIcon } from '../../../utilities/IconsUtils';
import ErrorBox from '../../Reusable/ErrorBox';
import CityDateDetail from './CityDateDetail';
import TemperatureWeatherDetail from './TemperatureWeatherDetail';
import WeatherIconDetail from './WeatherIconDetail';
import Layout from '../../Reusable/Layout';
import { useIntl } from 'react-intl';
import labels from '../../../i18n/labels';

const dayMonth = getDayMonthFromDate();

const Details = ({ qiCity, qiNowData }) => {

  const intl = useIntl();

  const { temp, text, icon } = qiNowData;

  const noDataProvided =
    !qiNowData || Object.keys(qiNowData).length === 0;

  let content = <ErrorBox flex="1" type="error" />;

  if (!noDataProvided)
    content = (
      <>
        <Grid
          item
          xs={4}
          sx={{
            height: '80px',
          }}
        >
          <CityDateDetail qiCity={qiCity} date={dayMonth} />
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            height: '80px',
          }}
        >
          <TemperatureWeatherDetail
            temperature={temp}
            description={text}
          />
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '80px',
            color: 'rgba(255, 255, 255, .9)',
          }}
        >
          <DynamicIcon size='96' iconName={`${icon}`}></DynamicIcon>

        </Grid>
      </>
    );

  return <Layout title={labels[intl.locale]['current-weather']} content={content} />;
};

export default Details;
