import React, { useState, useEffect } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { fetchCities } from '../../api/OpenWeatherService';
import { gql } from "@apollo/client";
import { client } from '../../index'

const GET_LOCATIONS = gql`
query SearchLocations($location: String!, $lang: String!) {
  searchLocations(location: $location, lang: $lang) {
    country
    adm2
    adm1
    id
    lon
    lat
    name
    type
    utcOffset
    tz
  }
}
`;

const Search = ({ onSearchChange }) => {
  const [searchValue, setSearchValue] = useState(null);

  // const optionsPending = {
  //   options: cities?.map((city) => {
  //     return {
  //       value: `${city.lat} ${city.lon}`,
  //       label: `${city.name}, ${city.country}`,
  //     };
  //   }),
  // };


  const loadOptions = async (inputValue) => {

    // const citiesList = await fetchCities(inputValue);

    const { data } = await client.query(
      {
        query: GET_LOCATIONS,
        variables: {
          location: inputValue,
          lang: 'zh-cn'
        }
      });

    const optionsPending = {
      options: data?.searchLocations?.map((city) => {
        return {
          value: `${city.lat} ${city.lon} ${city.id}`,
          label: `${city.name}, ${city.country}`,
        };
      }),
    };

    return optionsPending;

    // return {
    //   options: citiesList.data.map((city) => {
    //     return {
    //       value: `${city.latitude} ${city.longitude}`,
    //       label: `${city.name}, ${city.countryCode}`,
    //     };
    //   }),
    // };
  };

  const onChangeHandler = (enteredData) => {
    setSearchValue(enteredData);
    onSearchChange(enteredData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for cities"
      debounceTimeout={600}
      value={searchValue}
      onChange={onChangeHandler}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
