const express = require('express');
const router = express.Router();
const { createGradeController } = require('../controller/gradeController.js');

// Create a new grade
router.post('/create', createGradeController);

// Get grades by institution

module.exports = router; 