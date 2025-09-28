import React, { useState } from "react";

const jobOpenings = [
	{
		title: "Senior React Developer",
		team: "Engineering",
		location: "Bengaluru, India",
		type: "Full-time",
		url: "#",
	},
	{
		title: "Product Designer (UX/UI)",
		team: "Design",
		location: "Remote",
		type: "Full-time",
		url: "#",
	},
	{
		title: "DevOps Engineer",
		team: "Engineering",
		location: "Bengaluru, India",
		type: "Full-time",
		url: "#",
	},
	{
		title: "Marketing Lead",
		team: "Growth",
		location: "Remote",
		type: "Full-time",
		url: "#",
	},
	{
		title: "Senior Full Stack Developer",
		team: "Engineering",
		location: "Bengaluru, India",
		type: "Full-time",
		url: "#",
	},
	{
		title: "Senior Backend Developer",
		team: "Engineering",
		location: "Bengaluru, India",
		type: "Full-time",
		url: "#",
	},
	{
		title: "QA Engineer",
		team: "Engineering",
		location: "Bengaluru, India",
		type: "Full-time",
		url: "#",
	},
];
const filters = ["All", "Engineering", "Design", "Growth"];

function FrameworkSection() {
	const [activeFilter, setActiveFilter] = useState("All");

	const filteredJobs =
		activeFilter === "All"
			? jobOpenings
			: jobOpenings.filter((job) => job.team === activeFilter);

	return (
		<section className="bg-gray-50 py-20 lg:py-32">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-gray-800">
						Find Your Place in the Framework
					</h2>
					<p className="text-lg text-gray-600 mt-2">
						We're looking for talented individuals to help us complete the
						blueprint.
					</p>
				</div>

				<div className="flex justify-center space-x-2 md:space-x-4 mb-12">
					{filters.map((filter) => (
						<button
							key={filter}
							onClick={() => setActiveFilter(filter)}
							className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-colors duration-300 ${
								activeFilter === filter
									? "bg-blue-600 text-white"
									: "bg-white text-gray-700 hover:bg-gray-100"
							}`}
						>
							{filter}
						</button>
					))}
				</div>

				<div className="max-w-4xl mx-auto">
					<div className="space-y-4">
						{filteredJobs.map((job, index) => (
							<a
								key={index}
								href={job.url}
								className="block p-6 bg-white border-2 border-dashed border-gray-300 rounded-lg 
                           hover:border-blue-500 hover:border-solid hover:shadow-lg transition-all duration-300"
							>
								<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
									<div>
										<h3 className="text-xl font-bold text-gray-900">
											{job.title}
										</h3>
										<p className="text-gray-500 mt-1">
											{job.team} &middot; {job.location} &middot; {job.type}
										</p>
									</div>
									<span className="mt-4 sm:mt-0 text-blue-600 font-semibold">
										View Blueprint &rarr;
									</span>
								</div>
							</a>
						))}
					</div>
					{filteredJobs.length === 0 && (
						<p className="text-center text-gray-500 mt-8">
							No open roles in this category right now. Check back soon!
						</p>
					)}
				</div>
			</div>
		</section>
	);
}

export default FrameworkSection;
