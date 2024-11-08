// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Clinic Health Management</h1>
            <nav>
                <Link to="/">Home</Link> | <Link to="/appointments">Appointments</Link> | <Link to="/patients">Patients</Link>
            </nav>
        </header>
    );
};

export default Header;
