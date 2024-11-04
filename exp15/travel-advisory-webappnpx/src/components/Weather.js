// src/components/Weather.js
import React, { useState } from "react";
import "../styles/Weather.css";

const Weather = ({ weather }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    // Implement search functionality
  };

  return (
    <div className="weather">
      <h2>Weather Update</h2>
      <input
        type="text"
        placeholder="Enter country..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <p><strong>Location:</strong> {weather.location || "Unavailable"}</p>
      <p><strong>Temperature:</strong> {weather.temperature || "N/A"}</p>
      <p><strong>Description:</strong> {weather.description || "N/A"}</p>
    </div>
  );
};

export default Weather;
