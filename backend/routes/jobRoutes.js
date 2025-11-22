const express=require("express");

const router=express.Router();
const {addJob, getJobs, deleteJob, updateJob}=require("../controllers/JobController");

router.post("/jobs", addJob);  //create job
router.get("/jobs", getJobs);  //get all jobs
router.delete("/jobs/:id", deleteJob);  //delete job by id
router.put("/jobs/:id", updateJob);  //update job by id
module.exports=router;
