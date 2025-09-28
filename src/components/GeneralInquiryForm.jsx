import { useState } from "react";
import { Mail, MessageCircle } from "lucide-react";

export default function GeneralInquiryForm() {
	const [formData, setFormData] = useState({
		email: "",
		question: "",
	});
	const [status, setStatus] = useState("");

	const handleChange = (e) => {
		const { name, value } = e.target;

		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus("sending");

		try {
			const response = await fetch(
				"https://sisunitech.com/api/send-general-email",
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(formData),
				}
			);

			if (response.ok) {
				setStatus("success");
				setFormData({ email: "", question: "" });
			} else {
				throw new Error("Network response was not ok.");
			}
		} catch (error) {
			console.error("Submission error:", error);
			setStatus("error");
		}
	};

	if (status === "success") {
		return (
			<div className="text-center p-8 bg-green-100 text-green-800 rounded-lg">
				<h3 className="text-2xl font-bold">Thank You!</h3>
				<p>Your question has been sent. We'll get back to you shortly.</p>
			</div>
		);
	}

	return (
		<div className="max-w-2xl mx-auto">
			<div className="text-center mb-8">
				<h2 className="text-3xl font-bold text-gray-800">
					Ask a General Question
				</h2>
				<p className="mt-2 text-gray-600">
					Have something else on your mind? We're happy to help.
				</p>
			</div>
			<form onSubmit={handleSubmit} className="space-y-6">
				<div className="relative">
					<label htmlFor="email-general" className="sr-only">
						Email Address
					</label>
					<Mail
						className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
						size={20}
					/>
					<input
						type="email"
						id="email-general"
						name="email"
						value={formData.email}
						onChange={handleChange}
						placeholder="Your Email Address"
						required
						className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
					/>
				</div>

				<div className="relative">
					<label htmlFor="question" className="sr-only">
						Your Question
					</label>
					<MessageCircle
						className="absolute left-3 top-5 text-gray-400"
						size={20}
					/>
					<textarea
						id="question"
						name="question"
						value={formData.question}
						onChange={handleChange}
						placeholder="What's your question?"
						rows="5"
						required
						className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
					></textarea>
				</div>

				<button
					type="submit"
					disabled={status === "sending"}
					className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-500 transition duration-300 shadow-lg disabled:bg-gray-400"
				>
					{status === "sending" ? "Sending..." : "Send Question"}
				</button>
				{status === "error" && (
					<p className="text-red-500 text-center mt-4">
						Something went wrong. Please try again.
					</p>
				)}
			</form>
		</div>
	);
}
