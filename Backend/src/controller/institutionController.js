const Institution = require('../schema/institutionSchema.js');

const createInstitutionController = async(req, res) => {
    try {
        const { institutionType, numberOfStudents, institutionEmail } = req.body;

        if (!institutionType || !numberOfStudents || !institutionEmail) {
            return res.status(400).json({
                success: false,
                message: 'Please provide all required fields: institutionType, numberOfStudents, and institutionEmail'
            });
        }

        // Check if institution with same email already exists
        const existingInstitution = await Institution.findOne({ institutionEmail });
        if (existingInstitution) {
            return res.status(409).json({
                success: false,
                message: 'An institution with this email already exists'
            });
        }

        // Create new institution
        const newInstitution = new Institution({
            institutionType,
            numberOfStudents,
            institutionEmail
        });

        // Save the institution
        const savedInstitution = await newInstitution.save();

        // Send success response
        res.status(201).json({
            success: true,
            message: 'Institution created successfully',
            data: savedInstitution
        });

    } catch (error) {
        // Handle validation errors
        if (error.name === 'ValidationError') {
            return res.status(400).json({
                success: false,
                message: 'Validation Error',
                errors: Object.values(error.errors).map(err => err.message)
            });
        }

        // Handle other errors
        console.error('Error creating institution:', error);
        res.status(500).json({
            success: false,
            message: 'Error creating institution',
            error: error.message
        });
    }
}

module.exports = {
    createInstitutionController
};