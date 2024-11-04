// src/components/AppointmentForm.js
import React, { useState } from 'react';

const AppointmentForm = ({ addAppointment }) => {
    const [patientName, setPatientName] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!patientName || !date) return;
        addAppointment({ patientName, date });
        setPatientName('');
        setDate('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Patient Name" 
                value={patientName} 
                onChange={(e) => setPatientName(e.target.value)} 
                required 
            />
            <input 
                type="date" 
                value={date} 
                onChange={(e) => setDate(e.target.value)} 
                required 
            />
            <button type="submit">Add Appointment</button>
        </form>
    );
};

export default AppointmentForm;
