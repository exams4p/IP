import React, { useState } from "react";
import "../styles/AdvisoryList.css";

const AdvisoryList = ({ advisories, onSelectCountry }) => {
  const [selectedAdvisory, setSelectedAdvisory] = useState(null);

  const handleAdvisoryClick = (advisory) => {
    setSelectedAdvisory(advisory);
  };

  const closeModal = () => {
    setSelectedAdvisory(null);
  };

  return (
    <div className="advisory-list">
      <h2>Travel Advisories</h2>
      <ul>
        {advisories.map((advisory, index) => (
          <li key={index} onClick={() => handleAdvisoryClick(advisory)}>
            <strong>{advisory.country}</strong>: {advisory.level}
          </li>
        ))}
      </ul>

      {selectedAdvisory && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>{selectedAdvisory.country}</h2>
            <p><strong>Level:</strong> {selectedAdvisory.level}</p>
            <p><strong>Details:</strong> {selectedAdvisory.details}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvisoryList;
