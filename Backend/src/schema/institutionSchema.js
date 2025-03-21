const mongoose = require('mongoose');

const institutionSchema = new mongoose.Schema({
    institutionType: {
        type: String,
        required: [true, 'Institution type is required'],
        enum: ['school', 'college', 'university', 'training center'],
        lowercase: true,
        trim: true
    },
    numberOfStudents: { 
        type: Number,
        required: [true, 'Number of students is required'],
        min: [0, 'Number of students cannot be negative']
    },
    institutionEmail: {
        type: String,
        required: [true, 'Institution email is required'],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,'Please enter a valid email address']
    },
}, {
    timestamps: true 
});

const Institution = mongoose.model('Institution', institutionSchema);

module.exports = Institution;
