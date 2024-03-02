import React from 'react';
import ErrorBox from '../../Reusable/ErrorBox';
import AirConditionsItem from './AirConditionsItem';
import Layout from '../../Reusable/Layout';
import labels from '../../../i18n/labels';
import { useIntl } from 'react-intl';

const TodayWeatherAirConditions = ({ data }) => {
  const intl = useIntl();
  const noDataProvided =
    !data || Object.keys(data).length === 0 || data.cod === '404';

  let content = <ErrorBox flex="1" type="error" />;

  if (!noDataProvided)
    content = (
      <>
        <AirConditionsItem
          title={labels[intl.locale]['feels-like']}
          value={`${Math.round(data.main.feels_like)} °C`}
          type="temperature"
        />
        <AirConditionsItem
          title={labels[intl.locale]['wind-speed']}
          value={`${data.wind.speed} m/s`}
          type="wind"
        />
        <AirConditionsItem
          title={labels[intl.locale]['clouds']}
          value={`${Math.round(data.clouds.all)} %`}
          type="clouds"
        />
        <AirConditionsItem
          title={labels[intl.locale]['humidity']}
          value={`${Math.round(data.main.humidity)} %`}
          type="humidity"
        />
      </>
    );
  return (
    <Layout
      title={labels[intl.locale]['air-conditioans']}
      content={content}
      mb="1rem"
      sx={{ marginTop: '2.9rem' }}
    />
  );
};

export default TodayWeatherAirConditions;
