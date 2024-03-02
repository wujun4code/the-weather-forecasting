import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { IntlProvider } from 'react-intl';
import './index.css';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import 'qweather-icons/font/qweather-icons.css';

export const client = new ApolloClient({
    uri: 'https://weather-graphql.shouyicheng.com/',
    cache: new InMemoryCache(),
});

const mapLocale = (browserLocale) => {
    const lowerCaseLocale = browserLocale.toLowerCase();

    if (lowerCaseLocale.startsWith('en')) {
        return 'en';
    } else if (lowerCaseLocale.includes('zh') && lowerCaseLocale.includes('cn')) {
        return 'zh-CN';
    } else if (lowerCaseLocale.includes('zh') && (lowerCaseLocale.includes('hk') || lowerCaseLocale.includes('tw'))) {
        return 'zh-Hant';
    }
    return 'en';
};


const RootComponent = () => {
    const browserLocale = navigator.language || 'en'; // 设置默认语言，或者从用户设置中获取
    const mappedLocale = mapLocale(browserLocale);
    return (
        <ApolloProvider client={client}>
            <IntlProvider locale={browserLocale}>
                <App />
            </IntlProvider>
        </ApolloProvider>
    );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RootComponent />);
