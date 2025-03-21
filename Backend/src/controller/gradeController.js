const Grade = require('../schema/gradeSchema.js');
const Institution = require('../schema/institutionSchema.js');

const createGradeController = async (req, res) => {
    try {
        const { institutionId, subject, gradeFormat, role, department, teachingExperience } = req.body;

        // Validate required fields
        if (!institutionId || !subject || !gradeFormat || !role || !teachingExperience || !department) {
            return res.status(400).json({
                success: false,
                message: 'Please provide all required fields'
            });
        }

        // Check if institution exists
        const institution = await Institution.findById(institutionId);
        if (!institution) {
            return res.status(404).json({
                success: false,
                message: 'Institution not found'
            });
        }

        // Create new grade
        const newGrade = new Grade({
            institutionId,
            subject,
            gradeFormat,
            role,
            department,
            teachingExperience,
        });

        // Save the grade
        const savedGrade = await newGrade.save();

        // Send success response
        res.status(201).json({
            success: true,
            message: 'Grade created successfully',
            data: savedGrade
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

        // Handle duplicate key error
        if (error.code === 11000) {
            return res.status(409).json({
                success: false,
                message: 'A grade with this name already exists in this institution for the specified academic year'
            });
        }

        // Handle other errors
        console.error('Error creating grade:', error);
        res.status(500).json({
            success: false,
            message: 'Error creating grade',
            error: error.message
        });
    }
};

// const getGradesByInstitutionController = async (req, res) => {
//     try {
//         const { institutionId } = req.params;
//         const { academicYear } = req.query;

//         // Build query
//         const query = { institutionId };
//         if (academicYear) {
//             query.academicYear = academicYear;
//         }

//         // Get grades
//         const grades = await Grade.find(query)
//             .sort({ gradeLevel: 1, gradeName: 1 });

//         res.status(200).json({
//             success: true,
//             data: grades
//         });

//     } catch (error) {
//         console.error('Error fetching grades:', error);
//         res.status(500).json({
//             success: false,
//             message: 'Error fetching grades',
//             error: error.message
//         });
//     }
// };

module.exports = {
    createGradeController,
    // getGradesByInstitutionController
};
