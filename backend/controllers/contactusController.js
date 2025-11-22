const mailer=require('../utils/nodemailer');

module.exports.sendPartnershipEmail=async(req,res)=>{
    const {name,company,email,proposal}=req.body;

    const mailOptions={
        from:`"${name}" <${email}>`,
        to: "kruthianu66@gmail.com",
        subject: `New Partnership Proposal from ${company}`,
        html:`<h2>New Partnership Proposal</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr>
        <h3>Proposal:</h3>
        <p>${proposal.replace(/\n/g,"<br>")}</p>`
    };

    try{
        await mailer.sendMail(mailOptions);
        res.status(200).json({message:"Email sent successfully!"});
    }catch(error){
        console.error(error);
        res.status(500).json({error:"Failed to send email."});      
    }
};



module.exports.sendGeneralEmail=async(req,res)=>{
    const {email,question}=req.body;    

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
		await mailer.sendMail(mailOptions);
		res.status(200).json({ message: "Email sent successfully!" });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Failed to send email." });
	}
};