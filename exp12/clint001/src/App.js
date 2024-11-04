// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AppointmentForm from './components/AppointmentForm';
import AppointmentList from './components/AppointmentList';
import PatientList from './components/PatientList';
import './styles.css';

const App = () => {
    const [appointments, setAppointments] = useState([]);
    const [patients] = useState(['John Doe', 'Jane Smith', 'Alice Johnson']);

    const addAppointment = (appointment) => {
        setAppointments([...appointments, appointment]);
    };

    return (
        <Router>
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <h2>Welcome to Clinic Management</h2>
                            <AppointmentForm addAppointment={addAppointment} />
                            <AppointmentList appointments={appointments} />
                        </>
                    }
                />
                <Route
                    path="/patients"
                    element={
                        <>
                            <h2>Patient List</h2>
                            <PatientList patients={patients} />
                        </>
                    }
                />
                <Route
                    path="/appointments"
                    element={
                        <>
                            <h2>Appointment List</h2>
                            <AppointmentList appointments={appointments} />
                        </>
                    }
                />
            </Routes>
        </Router>
    );
};

export default App;
