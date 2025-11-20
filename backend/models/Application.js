import mongoose from 'mongoose';

const ApplicationSchema = new mongoose.Schema({
    jobRoleId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "JobRole",
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    linkedin: {
        type: String,
        required: false,
    },
    experience:{
        type: Number,
        required: true,
    },
    skills: {
        type: [String],
        required: true,
    },
    resumeUrl: {
        type: String,
        required: true,
    },
    availability:{
        type: String,
        required: true,
    },
    expectedSalary:{
        type: Number,
        required: true,
    }
}, {timestamps: true});

export default mongoose.Schema.model("Application",ApplicationSchema);