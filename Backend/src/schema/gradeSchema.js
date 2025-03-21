const mongoose = require('mongoose');

const gradeSchema = new mongoose.Schema({
    institutionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Institution',
        required: [true, 'Institution ID is required']
    },
    subject: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    gradeFormat: {
        type: String,
        enum: ["numerical", "letter grades", "comments based"],
        required: true,
    },
    role: {
        type: String,
        enum: ["admin", "teaching assistant", "professor"],
        required: true,
    },
    department: {
        type: String,
        required: true,
        trim: true,
    },
    teachingExperience: {
        type: Number,
        required: true,
        default: 0,
        trim: true,
    }
}, {
    timestamps: true,
})

const Grade = mongoose.model('Grade', gradeSchema);

module.exports = Grade;