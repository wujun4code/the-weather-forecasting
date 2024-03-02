import React from 'react';
import ErrorBox from '../../Reusable/ErrorBox';
import AirConditionsItem from './AirConditionsItem';
import Layout from '../../Reusable/Layout';
import labels from '../../../i18n/labels';
import { useIntl } from 'react-intl';

const TodayWeatherAirConditions = ({ qiNowData }) => {
  const intl = useIntl();
  const noDataProvided = !qiNowData || Object.keys(qiNowData).length === 0;

  const { humidity, feelsLike, windSpeed, cloud } = qiNowData;
  let content = <ErrorBox flex="1" type="error" />;

  if (!noDataProvided)
    content = (
      <>
        <AirConditionsItem
          title={labels[intl.locale]['feels-like']}
          value={`${Math.round(feelsLike)} °C`}
          type="temperature"
        />
        <AirConditionsItem
          title={labels[intl.locale]['wind-speed']}
          value={`${windSpeed} m/s`}
          type="wind"
        />
        <AirConditionsItem
          title={labels[intl.locale]['clouds']}
          value={`${Math.round(cloud)} %`}
          type="clouds"
        />
        <AirConditionsItem
          title={labels[intl.locale]['humidity']}
          value={`${Math.round(humidity)} %`}
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
