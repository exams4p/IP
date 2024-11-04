// src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import AdvisoryList from "./components/AdvisoryList";
import Weather from "./components/Weather";
import CountryInfo from "./components/CountryInfo";
import "./styles/App.css";

function App() {
  const [advisories, setAdvisories] = useState([]);
  const [weather, setWeather] = useState({});
  const [selectedCountry, setSelectedCountry] = useState("Japan");
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const advisoryResponse = await axios.get(`https://api.example.com/advisories`);
        setAdvisories(advisoryResponse.data);
        
        const weatherResponse = await axios.get(`https://api.example.com/weather?country=${selectedCountry}`);
        setWeather(weatherResponse.data);
      } catch (err) {
        setError("Error fetching data.");
      }
    }
    fetchData();
  }, [selectedCountry]);

  return (
    <div className="App">
      <Navbar />
      <main>
        <section className="content">
          {error && <p className="error">{error}</p>}
          <AdvisoryList advisories={advisories} onSelectCountry={setSelectedCountry} />
          <Weather weather={weather} />
          <CountryInfo countryName={selectedCountry} />
        </section>
      </main>
    </div>
  );
}

export default App;
