import { gql } from "@apollo/client";
import { client } from '../index';

const mapLanguage = (browserLanguage) => {
    const lowerCaseLanguage = browserLanguage.toLowerCase();

    if (lowerCaseLanguage.startsWith('en')) {
        return 'en';
    } else if (lowerCaseLanguage.includes('zh') && (lowerCaseLanguage.includes('hans') || lowerCaseLanguage.includes('cn'))) {
        return 'zh';
    } else if (lowerCaseLanguage.includes('zh') && (lowerCaseLanguage.includes('hant') || lowerCaseLanguage.includes('tw') || lowerCaseLanguage.includes('hk'))) {
        return 'zh-hant';
    }

    // 默认返回 'en'，你可以根据需要修改
    return 'en';
};

const GETBYLOCATIONID = gql`
query GetHourlyByLocationId($locationId: String!, $hourly: HourlyForecastType!, $lang: String!, $hourLimit: Int, $daily: DailyForecastType!, $dayLimit: Int) {
  getHourlyByLocationId(locationId: $locationId, hourly: $hourly, lang: $lang, limit: $hourLimit) {
    fxTime
    temp
    icon
    text
    wind360
    windDir
    windScale
    windSpeed
    humidity
    pop
    precip
    pressure
    cloud
    dew
  }
  getNowByLocationId(locationId: $locationId, lang: $lang) {
    obsTime
    temp
    feelsLike
    icon
    text
    wind360
    windDir
    windScale
    windSpeed
    humidity
    precip
    pressure
    vis
    cloud
    dew
  }
  getDailyByLocationId(locationId: $locationId, daily: $daily, lang: $lang, limit: $dayLimit) {
    fxDate
    sunrise
    sunset
    moonrise
    moonset
    moonPhase
    moonPhaseIcon
    tempMax
    tempMin
    iconDay
    textDay
    iconNight
    textNight
    wind360Day
    windDirDay
    windScaleDay
    windSpeedDay
    wind360Night
    windDirNight
    windScaleNight
    windSpeedNight
    humidity
    precip
    pressure
    vis
    cloud
    uvIndex
  }
}`;


export const GetByLocationId = async ({ variables }) => {
    const mappedLang = mapLanguage(variables.lang);
    variables.lang = mappedLang;
    const { data } = await client.query(
        {
            query: GETBYLOCATIONID,
            variables: variables,
        });

    return data;
}

