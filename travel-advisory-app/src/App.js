// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CountryList from './components/CountryList';
import AdvisoryDetail from './components/AdvisoryDetail';
import './App.css'; // Import the CSS file for styling

const App = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const countries = [
    { code: 'US', name: 'United States', advisory: 'Travel is safe.' },
    { code: 'FR', name: 'France', advisory: 'Exercise caution.' },
    { code: 'JP', name: 'Japan', advisory: 'Travel is safe.' },
    { code: 'CN', name: 'China', advisory: 'Avoid non-essential travel.' },
    { code: 'BR', name: 'Brazil', advisory: 'Exercise caution.' },
    { code: 'AU', name: 'Australia', advisory: 'Travel is safe.' },
    { code: 'IN', name: 'India', advisory: 'Be cautious.' },
    // Add more countries as needed
  ];

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div>
      <Header />
      <div className="content">
        <CountryList countries={countries} onSelectCountry={handleSelectCountry} />
        {selectedCountry && <AdvisoryDetail country={selectedCountry} />}
      </div>
      <Footer />
    </div>
  );
};

export default App;
