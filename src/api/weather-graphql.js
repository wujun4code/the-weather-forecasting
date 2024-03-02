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

const GETHOURLYBYLOCATIONID = gql`
query GetHourlyByLocationId($locationId: String!, $hourly: HourlyForecastType!, $lang: String!, $limit: Int) {
  getHourlyByLocationId(locationId: $locationId, hourly: $hourly, lang: $lang, limit: $limit) {
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
}`;


export const GetHourlyByLocationId = async (locationId, hourly, lang, limit) => {
    const mappedLang = mapLanguage(lang);
    const { data } = await client.query(
        {
            query: GETHOURLYBYLOCATIONID,
            variables: {
                "locationId": locationId,
                "lang": mappedLang,
                "hourly": hourly,
                "limit": limit
            },
        });
        
    return data;
}

