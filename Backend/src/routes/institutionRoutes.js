const express = require('express');
const router = express.Router();
const { createInstitutionController } = require('../controller/institutionController.js');

// Route to create a new institution
router.post('/create', createInstitutionController);

module.exports = router; 