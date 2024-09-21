import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // corrected 'require' to 'required'
        index: true,
        trim: true,
    },
    rollNumber: {
        type: Number,
        required: true,
        unique: true,
        index: true,
    },
    section: {
        type: String,
        required: true,
    },
    profileImage: {
        type: String,
        required: false,
    },
    gpa: {
        type: Number,
        required: false,
        default: 100,
    },
    grades: [{
        subject: {
            type: String,
            required: true,
        },
        marks: {
            type: Number,
            required: false,
        },
        totalMarks: {
            type: Number,
            required: false,
        },
    }],
}, { timestamps: true });

export const Student = mongoose.model("Student", StudentSchema);
