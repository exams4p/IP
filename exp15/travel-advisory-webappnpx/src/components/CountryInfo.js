// src/components/CountryInfo.js
import React from "react";
import "../styles/CountryInfo.css";

const CountryInfo = ({ countryName }) => {
  const country = {
    name: countryName,
    capital: countryName === "Japan" ? "Tokyo" : "Unknown",
    language: countryName === "Japan" ? "Japanese" : "N/A",
    currency: countryName === "Japan" ? "Yen" : "N/A",
    population: countryName === "Japan" ? "126 million" : "Unknown"
  };

  return (
    <div className="country-info">
      <h2>Country Information</h2>
      <p><strong>Country:</strong> {country.name}</p>
      <p><strong>Capital:</strong> {country.capital}</p>
      <p><strong>Language:</strong> {country.language}</p>
      <p><strong>Currency:</strong> {country.currency}</p>
      <p><strong>Population:</strong> {country.population}</p>
    </div>
  );
};

export default CountryInfo;
