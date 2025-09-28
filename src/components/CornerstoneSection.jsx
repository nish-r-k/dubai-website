import { useState } from "react";
import { User, Mail, Link, UploadCloud } from "lucide-react";

function CornerstoneSection() {
	const [step, setStep] = useState(1);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		portfolio: "",
		resume: null,
	});

	const handleChange = (e) => {
		const { name, value, files } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: files ? files[0] : value,
		}));
	};

	const nextStep = () => setStep((prev) => prev + 1);
	const prevStep = () => setStep((prev) => prev - 1);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Final Application Data:", formData);
		setStep((prev) => prev + 1);
	};

	return (
		<section className="bg-white py-20 lg:py-32">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-4xl font-bold text-gray-800">
						Your Cornerstone is Waiting
					</h2>
					<p className="text-lg text-gray-600 mt-2">
						Ready to make your mark? Let's get started.
					</p>
				</div>

				<div className="max-w-xl mx-auto p-8 border border-gray-200 rounded-lg shadow-xl">
					<div className="w-full bg-gray-200 rounded-full h-2.5 mb-8">
						<div
							className="bg-blue-600 h-2.5 rounded-full"
							style={{ width: `${(step / 3) * 100}%` }}
						></div>
					</div>

					<form onSubmit={handleSubmit}>
						{step === 1 && (
							<div>
								<h3 className="text-xl font-semibold mb-4">
									First, let's get acquainted.
								</h3>
								<div className="space-y-4">
									<div className="relative">
										<User
											className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
											size={20}
										/>
										<input
											type="text"
											name="name"
											onChange={handleChange}
											placeholder="Your Name"
											required
											className="w-full pl-10 pr-4 py-3 border rounded-lg"
										/>
									</div>
									<div className="relative">
										<Mail
											className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
											size={20}
										/>
										<input
											type="email"
											name="email"
											onChange={handleChange}
											placeholder="Your Email"
											required
											className="w-full pl-10 pr-4 py-3 border rounded-lg"
										/>
									</div>
								</div>
								<button
									type="button"
									onClick={nextStep}
									className="mt-6 w-full bg-blue-600 text-white font-bold py-3 rounded-lg"
								>
									Next
								</button>
							</div>
						)}

						{step === 2 && (
							<div>
								<h3 className="text-xl font-semibold mb-4">
									Show us your work.
								</h3>
								<div className="space-y-4">
									<div className="relative">
										<Link
											className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
											size={20}
										/>
										<input
											type="url"
											name="portfolio"
											onChange={handleChange}
											placeholder="Portfolio/LinkedIn URL"
											required
											className="w-full pl-10 pr-4 py-3 border rounded-lg"
										/>
									</div>
									<div className="relative">
										<label
											htmlFor="resume"
											className="flex items-center gap-3 w-full px-4 py-3 border-2 border-dashed rounded-lg cursor-pointer"
										>
											<UploadCloud className="text-gray-400" size={20} />
											<span
												className={
													formData.resume ? "text-green-600" : "text-gray-500"
												}
											>
												{formData.resume
													? formData.resume.name
													: "Upload Your Resume"}
											</span>
										</label>
										<input
											type="file"
											id="resume"
											name="resume"
											onChange={handleChange}
											required
											className="sr-only"
										/>
									</div>
								</div>
								<div className="flex gap-4 mt-6">
									<button
										type="button"
										onClick={prevStep}
										className="w-1/2 bg-gray-200 text-gray-800 font-bold py-3 rounded-lg"
									>
										Back
									</button>
									<button
										type="submit"
										className="w-1/2 bg-blue-600 text-white font-bold py-3 rounded-lg"
									>
										Submit Application
									</button>
								</div>
							</div>
						)}

						{step === 3 && (
							<div className="text-center">
								<h3 className="text-2xl font-bold text-green-600">
									Application Received!
								</h3>
								<p className="mt-2 text-gray-600">
									Thank you for your interest. Our team will review your
									submission and be in touch if there's a good fit. We
									appreciate you taking the time to build with us.
								</p>
							</div>
						)}
					</form>
				</div>
			</div>
		</section>
	);
}

export default CornerstoneSection;
