import mongoose from "mongoose";

const JobRoleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,},
    roleOverview:{
        type: String,
        required: true,
    },
    responsibilities: {
        type: [String],
        required: true,
    },
    qualifications: {
        type: [String], 
        required: true,
    },
    requiredSkills: {
        type:[String],
        required:true,
    },
    benefits:{
        type:[String],
    }   
}, {timestamps: true});

export default mongoose.model("JobRole",JobRoleSchema);