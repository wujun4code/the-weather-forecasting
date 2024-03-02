import { Typography } from '@mui/material';
import { getUTCDatetime, getLocalDateTime } from '../../utilities/DatetimeUtils';
import React, { useState, useEffect } from 'react';
import { FormattedDate, IntlProvider } from 'react-intl';

export const UTCDatetime = () => {
  const utcFullDate = getLocalDateTime();
  const utcTimeValue = (
    <Typography
      variant="h3"
      component="h3"
      sx={{
        fontWeight: '400',
        fontSize: { xs: '10px', sm: '12px' },
        color: 'rgba(255, 255, 255, .7)',
        lineHeight: 1,
        paddingRight: '2px',
        fontFamily: 'Poppins',
      }}
    >
      {utcFullDate}
    </Typography>
  );
  return utcTimeValue;
};


export const AutoRefreshingDateTime = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Typography
      variant="h3"
      component="h3"
      sx={{
        fontWeight: '400',
        fontSize: { xs: '10px', sm: '12px' },
        color: 'rgba(255, 255, 255, .7)',
        lineHeight: 1,
        paddingRight: '2px',
        fontFamily: 'Poppins',
      }}
    >
      <IntlProvider locale={navigator.language}>

        <FormattedDate
          value={currentDate}
          year="numeric"
          month="long"
          day="numeric"
          hour="numeric"
          minute="numeric"
          second="numeric"
        />

      </IntlProvider>
    </Typography>

  );
};

export const CurrentDate = () => {
  const currentDate = new Date();
  const formattedDate = new Intl.DateTimeFormat(navigator.language, {
    month: 'long',
    day: 'numeric',
  }).format(currentDate);

  return formattedDate;
};


export const LocalizedHourMinute = ({ dateTimeString }) => {
  const localDate = new Date(dateTimeString);

  return (
    <FormattedDate
      value={localDate}
      hour="numeric"
      minute="numeric"
    />
  );
};

export const ShortFormattedDate = ({ dateString }) => {
  const date = new Date(dateString);

  return (
    <FormattedDate
      value={date}
      year="numeric"
      month="short"
      day="numeric"
    />
  );
};