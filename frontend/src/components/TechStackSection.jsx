import { FaReact, FaNodeJs, FaAws, FaFigma } from "react-icons/fa";
import React from "react";


const techMap = {
	"Web Application Development": [
		{
			icon: <FaReact />,
			name: "React",
			role: "For dynamic, high-performance user interfaces.",
		},
		{
			icon: <FaNodeJs />,
			name: "Node.js",
			role: "For fast, scalable backend services.",
		},
	],
	"Mobile App Development": [
		{
			icon: <FaReact />,
			name: "React Native",
			role: "For building cross-platform mobile apps.",
		},
	],
	"UI/UX Design": [
		{
			icon: <FaFigma />,
			name: "Figma",
			role: "For collaborative design and prototyping.",
		},
	],
	"Cloud Deployment": [
		{
			icon: <FaAws />,
			name: "AWS",
			role: "For robust and scalable cloud infrastructure.",
		},
	],
	"Data Protection": [
		{
			icon: <FaAws />,
			name: "AWS",
			role: "For robust and scalable cloud infrastructure.",
		},
	],
};

export default function TechStackSection({ blueprint }) {
	const recommendedTech = [
		...new Set(blueprint.core.flatMap((service) => techMap[service] || [])),
	];

	return (
		<section className="bg-white py-20 lg:py-32">
			<div className="container mx-auto px-4">
				<div className="text-center max-w-3xl mx-auto">
					<h2 className="text-4xl font-bold text-gray-800">
						Your Recommended Tech Stack
					</h2>
					<p className="text-lg text-gray-600 mt-2">
						We use modern, industry-leading tools to engineer your success.
						Here’s what we recommend for your project.
					</p>
				</div>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-16">
					{recommendedTech.map((tech) => (
						<div
							key={tech.name}
							className="group relative flex flex-col items-center text-center p-6 border border-gray-200 rounded-xl transition-all duration-300 hover:shadow-lg hover:border-blue-500"
						>
							<div className="text-5xl text-gray-500 transition-colors group-hover:text-blue-600">
								{tech.icon}
							</div>
							<p className="mt-4 font-semibold text-lg">{tech.name}</p>
							<div className="absolute bottom-full mb-2 w-48 p-3 bg-gray-800 text-white text-xs rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
								{tech.role}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
