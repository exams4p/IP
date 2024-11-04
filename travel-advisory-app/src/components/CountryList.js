// src/components/CountryList.js
import React from 'react';

const CountryList = ({ countries, onSelectCountry }) => {
  return (
    <ul>
      {countries.map((country) => (
        <li key={country.code} onClick={() => onSelectCountry(country)}>
          {country.name}
        </li>
      ))}
    </ul>
  );
};

export default CountryList;
