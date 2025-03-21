const express = require('express');
const connectDB = require('./database/dbconfig.js');
const cors = require("cors");
const institutionRoutes = require('./routes/institutionRoutes.js');
const gradeRoutes = require('./routes/gradeRoutes.js');
const fileUploadRoutes = require('./routes/fileUploadRoutes.js');

const app = express();

// Connect to MongoDB
connectDB();

app.use(cors());

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/v1/institutions', institutionRoutes);
app.use('/v1/grades', gradeRoutes);
app.use('/v1/files', fileUploadRoutes);

// Base route
app.get('/', (req, res) => {
    res.send('API is running...');
});

module.exports = app;