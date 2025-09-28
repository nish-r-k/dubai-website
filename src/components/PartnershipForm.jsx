import { useState } from "react";
import { User, Building, Mail, Lightbulb } from "lucide-react";

export default function PartnershipForm() {
	const [formData, setFormData] = useState({
		name: "",
		company: "",
		email: "",
		proposal: "",
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
				"https://sisunitech.com/api/send-partnership-email",
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(formData),
				}
			);

			if (response.ok) {
				setStatus("success");
				setFormData({ name: "", company: "", email: "", proposal: "" });
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
				<p>Your proposal has been sent successfully. We'll be in touch soon.</p>
			</div>
		);
	}

	return (
		<div className="max-w-2xl mx-auto">
			<div className="mb-6 text-center">
				<h2 className="text-3xl font-bold text-gray-900">
					Propose a Partnership
				</h2>
				<p className="text-gray-600 mt-2">
					We're excited to learn how we can work together.
				</p>
			</div>
			<form onSubmit={handleSubmit} className="space-y-6">
				<div className="relative">
					<label htmlFor="name" className="sr-only">
						Your Name
					</label>
					<User
						className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
						size={20}
					/>
					<input
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
						placeholder="Your Name"
						required
						className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
					/>
				</div>

				<div className="relative">
					<label htmlFor="company" className="sr-only">
						Company Name
					</label>
					<Building
						className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
						size={20}
					/>
					<input
						type="text"
						id="company"
						name="company"
						value={formData.company}
						onChange={handleChange}
						placeholder="Company Name"
						required
						className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
					/>
				</div>

				<div className="relative">
					<label htmlFor="email" className="sr-only">
						Email Address
					</label>
					<Mail
						className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
						size={20}
					/>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						placeholder="Email Address"
						required
						className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
					/>
				</div>

				<div className="relative">
					<label htmlFor="proposal" className="sr-only">
						Your Proposal
					</label>
					<Lightbulb
						className="absolute left-3 top-5 text-gray-400"
						size={20}
					/>
					<textarea
						id="proposal"
						name="proposal"
						value={formData.proposal}
						onChange={handleChange}
						placeholder="Tell us about your proposal..."
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
					{status === "sending" ? "Submitting..." : "Submit Proposal"}
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
