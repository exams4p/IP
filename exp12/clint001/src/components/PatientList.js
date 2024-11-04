// src/components/PatientList.js
import React from 'react';

const PatientList = ({ patients }) => {
    return (
        <ul>
            {patients.map((patient, index) => (
                <li key={index}>{patient}</li>
            ))}
        </ul>
    );
};

export default PatientList;
