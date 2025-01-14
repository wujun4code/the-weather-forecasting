import React from 'react';
import ReactDOM from 'react-dom/client';
import { IntlProvider } from 'react-intl';
import './index.css';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import 'qweather-icons/font/qweather-icons.css';
// const token = `eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJKcjlkbk1XdHF3dVpadW1Ma2J0ZzAwdnpSWU41ZEJpcW8wUGg2eUcwR2FNIn0.eyJleHAiOjE3MDkxOTYzODYsImlhdCI6MTcwOTE5NDU4NiwiYXV0aF90aW1lIjoxNzA5MTk0MzY5LCJqdGkiOiI0ZmU1NDUyNC03NmIwLTRkOWEtYjRiZC00NWYzMDg0MzIzZWUiLCJpc3MiOiJodHRwczovL2tleWNsb2FrLnNob3V5aWNoZW5nLmNvbS9yZWFsbXMvd2VhdGhlci1ncmFwaHFsIiwiYXVkIjpbImV4cHJlc3MtbWlkZGxld2FyZSIsImFjY291bnQiXSwic3ViIjoiYWM4OWY0YzAtNDdkZS00MmY0LWJmNDItNmZlYmRlNWEyMmQ4IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiZXhwcmVzcy1taWRkbGV3YXJlIiwic2Vzc2lvbl9zdGF0ZSI6ImNmYTE0NDk3LTJhNjAtNGZkMi1iMGE3LTNmMjEyMjFjMTY2MiIsImFjciI6IjAiLCJhbGxvd2VkLW9yaWdpbnMiOlsiLyoiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy13ZWF0aGVyLWdyYXBocWwiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImV4cHJlc3MtbWlkZGxld2FyZSI6eyJyb2xlcyI6WyJzdWJzY3JpYmVkIiwiZW50ZXJwcmlzZSIsImFkbWluIiwiYmFzaWMiXX0sImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoiYWRkcmVzcyBtaWNyb3Byb2ZpbGUtand0IG9mZmxpbmVfYWNjZXNzIGVtYWlsIHBob25lIG9wZW5pZCBwcm9maWxlIiwic2lkIjoiY2ZhMTQ0OTctMmE2MC00ZmQyLWIwYTctM2YyMTIyMWMxNjYyIiwidXBuIjoid3VqdW40Y29kZSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiYWRkcmVzcyI6e30sInJvbGUiOlsic3Vic2NyaWJlZCIsImVudGVycHJpc2UiLCJhZG1pbiIsImJhc2ljIiwibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdLCJuYW1lIjoiSnVuIFd1IiwiZ3JvdXBzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy13ZWF0aGVyLWdyYXBocWwiLCJ1bWFfYXV0aG9yaXphdGlvbiJdLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ3dWp1bjRjb2RlIiwiZ2l2ZW5fbmFtZSI6Ikp1biIsImZhbWlseV9uYW1lIjoiV3UiLCJlbWFpbCI6Ind1anVuNGNvZGVAZ21haWwuY29tIn0.lTJuilE8PKY3q5AVp12l2acnAD1_Rf3qkCGqWWDRwopsOPWKDXuMEW6SS7mT1vtMiA8LZ8wV059GZX4_5PbKUaGSG8r0IqnhJignPgIOfZHRDI3GfNVDYeFRdH-md1iK34Gd8AWYKd3e-uEe_Eqbm9gCgZwdEow6S7Ru8YjGVeNrI5_Nph5GmtmhkapkJ9Xz0sz0QNODGr6ns_ACh8pH1HjnnNUiNDLL3Abqa8oRwTsCBJX79Uy1hVTqciRJjJRoWbwkWBV0bopPmxNmzi9C5Vn-DfRG8Bmy7Ig10DQHVibNNMo9J7mai3wlNtF2dvXfu7ZofR7xQeTBuYuI0HBOyw`;

// export const devClient = new ApolloClient({
//     uri: 'http://192.168.137.200:4000',
//     cache: new InMemoryCache(),
//     headers: {
//         'x-forwarded-access-token': token ? `Bearer ${token}` : "",
//     },
// });

export const prodClient = new ApolloClient({
    uri: 'https://weather-graphql.shouyicheng.com/',
    cache: new InMemoryCache(),
    credentials: 'include'
});

export const client = prodClient;

const RootComponent = () => {
    const browserLocale = navigator.language || 'en'; // 设置默认语言，或者从用户设置中获取
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
