// src/components/AdvisoryDetail.js
import React from 'react';

const AdvisoryDetail = ({ country }) => {
  return (
    <div>
      <h2>{country.name}</h2>
      <p><strong>Advisory:</strong> {country.advisory}</p>
    </div>
  );
};

export default AdvisoryDetail;
