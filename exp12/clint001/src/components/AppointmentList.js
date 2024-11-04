// src/components/AppointmentList.js
import React from 'react';

const AppointmentList = ({ appointments }) => {
    return (
        <ul>
            {appointments.map((appointment, index) => (
                <li key={index}>
                    {appointment.patientName} - {appointment.date}
                </li>
            ))}
        </ul>
    );
};

export default AppointmentList;
