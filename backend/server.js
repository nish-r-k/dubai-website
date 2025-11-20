const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.post("/api/send-partnership-email", async (req, res) => {
	const { name, company, email, proposal } = req.body;

	const mail_user = process.env.MAIL_USER;
	const mail_pass = process.env.MAIL_PASS;

	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: mail_user,
			pass: mail_pass,
		},
	});

	const mailOptions = {
		from: `"${name}" <${email}>`,
		to: "hr@sisunitech.com",
	// 	from: `"SisuNitech Website" <${mail_user}>`, //
    // replyTo: email, // 
		subject: `New Partnership Proposal from ${company}`,
		html: `... (same email HTML as before) ...`,
	};

	try {
		await transporter.sendMail(mailOptions);
		res.status(200).json({ message: "Email sent successfully!" });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Failed to send email." });
	}
});

app.post("/api/send-general-email", async (req, res) => {
	const { email, question } = req.body;

	const mail_user = process.env.MAIL_USER;
	const mail_pass = process.env.MAIL_PASS;

	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: mail_user,
			pass: mail_pass,
		},
	});

	const mailOptions = {
		from: `"${email}" <${email}>`,
		to: "hr@sisunitech.com",
		subject: `New General Question from ${email}`,
		html: `
          <h2>New General Question</h2>
          <p><strong>From:</strong> ${email}</p>
          <hr>
          <h3>Question:</h3>
          <p>${question.replace(/\n/g, "<br>")}</p>
        `,
	};

	try {
		await transporter.sendMail(mailOptions);
		res.status(200).json({ message: "Email sent successfully!" });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Failed to send email." });
	}
});

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


app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
