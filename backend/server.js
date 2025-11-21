const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const URL=process.env.URL;

const app = express();


// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
(async()=>{
	try{
		await mongoose.connect(`${process.env.MONGODB_URL}/${process.env.DB_NAME}`)
	}
	catch(err){
		console.error("Error connecting to MongoDB:", err)
		throw err;
	}
	console.log("Connected to MongoDB")		
})()



//predifined messages for chatbot
const responses ={
    hi: "👋 Hello! Welcome to Sisuni Infotech. How can I help you today?",
  hello: "👋 Hello! Welcome to Sisuni Infotech. How can I help you today?",
  hey:"👋 Hello! Welcome to Sisuni Infotech. How can I help you today?",
  services: "💼 We provide Web Development, Mobile Apps, IoT, and Cybersecurity solutions.",
  "web development": "🌐 We build responsive, scalable websites and web apps tailored to businesses.",
  "mobile app": "📱 We develop high-performance, cross-platform mobile applications.",
  iot: "🤖 We create IoT solutions for automation, smart devices, and connected systems.",
  cybersecurity: "🔐 We provide vulnerability assessment, penetration testing, and compliance support.",
  contact: "📧 Email: contact@sisunitech.com",
  location: "📍 Our office is located in Dubai, United Arab Emirates.",
  address: "📍 Our office is located in Dubai, United Arab Emirates.",
  thankyou: "🙏 You’re welcome! Would you like to know more about our services?",
  thanks: "🙏 You’re welcome! Would you like to know more about our services?",
}

app.post("/chat",(req,res)=>{
    const userMessage = req.body.message?.toLowerCase();
    let reply=responses[userMessage] || "❓ Sorry, I didn’t understand that. Can you rephrase?";
    res.json({reply})
})

// Routes
app.use("/contactus", require("./routes/contactusRoutes"));
app.use("/admin",require("./routes/adminRoutes"));
app.use("/jobs", require("./routes/jobRoutes"));


// Start the server
const port = process.env.PORT;
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
