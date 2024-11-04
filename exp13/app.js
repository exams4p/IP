const express = require('express');
const app = express();
const PORT = 3000;

// Mock data for doctors
const doctors = [
    { id: 1, name: "Dr. Smith", specialty: "Cardiology" },
    { id: 2, name: "Dr. Doe", specialty: "Pediatrics" },
    { id: 3, name: "Dr. Lee", specialty: "Orthopedics" },
];

// Middleware to parse JSON data
app.use(express.json());

// Root route
app.get('/', (req, res) => {
    res.send("Welcome to the Clinic Management API! Use /doctors to see all doctors.");
});

// Additional routes as defined previously
app.get('/doctors', (req, res) => {
    setTimeout(() => {
        res.json(doctors);
    }, 1000);
});

app.get('/doctors/:id', (req, res) => {
    const doctorId = parseInt(req.params.id);
    const doctor = doctors.find(d => d.id === doctorId);
    if (doctor) {
        res.json(doctor);
    } else {
        res.status(404).json({ error: "Doctor not found" });
    }
});

app.post('/doctors', (req, res) => {
    const { name, specialty } = req.body;
    if (name && specialty) {
        const newDoctor = { id: doctors.length + 1, name, specialty };
        doctors.push(newDoctor);
        setTimeout(() => {
            res.status(201).json(newDoctor);
        }, 500);
    } else {
        res.status(400).json({ error: "Name and specialty are required" });
    }
});

app.put('/doctors/:id', (req, res) => {
    const doctorId = parseInt(req.params.id);
    const doctor = doctors.find(d => d.id === doctorId);
    if (doctor) {
        const { name, specialty } = req.body;
        doctor.name = name || doctor.name;
        doctor.specialty = specialty || doctor.specialty;
        setTimeout(() => {
            res.json(doctor);
        }, 700);
    } else {
        res.status(404).json({ error: "Doctor not found" });
    }
});

app.get('/asyncTask', (req, res) => {
    setTimeout(() => {
        res.send("Async task completed!");
    }, 2000);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
