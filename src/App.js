import { Box, Container, Grid, SvgIcon, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { GetByLocationId } from './api/weather-graphql';
import { ReactComponent as SplashIcon } from './assets/splash-icon.svg';
import AuthButton from './components/Reusable/Auth';
import ErrorBox from './components/Reusable/ErrorBox';
import LoadingBox from './components/Reusable/LoadingBox';
import { AutoRefreshingDateTime } from './components/Reusable/UTCDatetime';
import Search from './components/Search/Search';
import TodayWeather from './components/TodayWeather/TodayWeather';
import WeeklyForecast from './components/WeeklyForecast/WeeklyForecast';
import LocalizedText from './i18n/localized';


function App() {

  const intl = useIntl();
  const [qiHourlyData, setQiHourlyData] = useState([]);
  const [qiNowData, setQiNowData] = useState([]);
  const [qiDailyData, setQiDailyData] = useState([]);
  const [qiCity, setQiCity] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const searchChangeHandler = async (enteredData) => {
    const locationId = enteredData.value.split(' ')[2];
    const { city } = enteredData;

    setIsLoading(true);

    try {

      const { getHourlyByLocationId, getNowByLocationId, getDailyByLocationId } = await GetByLocationId({
        variables: {
          "locationId": locationId,
          "lang": intl.locale,
          "hourly": "Hourly24H",
          "hourLimit": 6,
          "daily": "Daily7D",
          "dayLimit": 6
        }
      });

      setQiCity(city);
      setQiHourlyData(getHourlyByLocationId);
      setQiNowData(getNowByLocationId);
      setQiDailyData(getDailyByLocationId);

    } catch (error) {
      setError(true);
    }

    setIsLoading(false);
  };

  let appContent = (
    <Box
      xs={12}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        width: '100%',
        minHeight: '500px',
      }}
    >
      <SvgIcon
        component={SplashIcon}
        inheritViewBox
        sx={{ fontSize: { xs: '100px', sm: '120px', md: '140px' } }}
      />
      <Typography
        variant="h4"
        component="h4"
        sx={{
          fontSize: { xs: '12px', sm: '14px' },
          color: 'rgba(255,255,255, .85)',
          fontFamily: 'Poppins',
          textAlign: 'center',
          margin: '2rem 0',
          maxWidth: '80%',
          lineHeight: '22px',
        }}
      >
        {LocalizedText({ dataSource: 'text', key: 'welcome' })}
      </Typography>
    </Box>
  );

  if (qiCity && qiNowData && qiHourlyData && qiDailyData) {
    appContent = (
      <React.Fragment>
        <Grid item xs={12} md={qiNowData ? 6 : 12}>
          <Grid item xs={12}>
            <TodayWeather qiCity={qiCity} qiNowData={qiNowData} qiHourlyData={qiHourlyData} />
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <WeeklyForecast qiDailyData={qiDailyData} />
        </Grid>
      </React.Fragment>
    );
  }

  if (error) {
    appContent = (
      <ErrorBox
        margin="3rem auto"
        flex="inherit"
        errorMessage="Something went wrong"
      />
    );
  }

  if (isLoading) {
    appContent = (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          minHeight: '500px',
        }}
      >
        <LoadingBox value="1">
          <Typography
            variant="h3"
            component="h3"
            sx={{
              fontSize: { xs: '10px', sm: '12px' },
              color: 'rgba(255, 255, 255, .8)',
              lineHeight: 1,
              fontFamily: 'Poppins',
            }}
          >
            {LocalizedText({ dataSource: 'text', key: 'loading' })}
          </Typography>
        </LoadingBox>
      </Box>
    );
  }

  return (
    <Container
      sx={{
        maxWidth: { xs: '95%', sm: '80%', md: '1100px' },
        width: '100%',
        height: '100%',
        margin: '0 auto',
        padding: '1rem 0 3rem',
        marginBottom: '1rem',
        borderRadius: {
          xs: 'none',
          sm: '0 0 1rem 1rem',
        },
        boxShadow: {
          xs: 'none',
          sm: 'rgba(0,0,0, 0.5) 0px 10px 15px -3px, rgba(0,0,0, 0.5) 0px 4px 6px -2px',
        },
      }}
    >
      <Grid container columnSpacing={2}>
        <Grid item xs={12}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              width: '100%',
              marginBottom: '1rem',
            }}
          >
            {/* <Box
              component="img"
              sx={{
                height: { xs: '16px', sm: '22px', md: '26px' },
                width: 'auto',
              }}
              alt="logo"
              src={Logo}
            /> */}

            <Typography
              variant="h3"
              component="h3"
              sx={{
                fontSize: '36px',
                color: 'rgba(255, 255, 255, .8)',
                lineHeight: 1,
                fontFamily: 'Poppins',
              }}
            >
              TOWA
            </Typography>

            <AutoRefreshingDateTime />
            <AuthButton />
          </Box>
          <Search onSearchChange={searchChangeHandler} />
        </Grid>
        {appContent}
      </Grid>
    </Container>
  );
}

export default App;
