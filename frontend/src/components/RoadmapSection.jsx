import { Search, PenTool, Rocket, Repeat } from "lucide-react";
import React from "react";

const roadmapPhases = [
	{
		icon: <Search />,
		title: "1. Discovery & Strategy",
		description:
			"We dive deep into your goals to create a comprehensive project blueprint.",
	},
	{
		icon: <PenTool />,
		title: "2. Design & Prototyping",
		description:
			"We craft an intuitive user experience and visual design, tested and refined with your feedback.",
	},
	{
		icon: <Rocket />,
		title: "3. Agile Development & Launch",
		description:
			"You'll see progress every two weeks. We build, test, and deploy your solution efficiently.",
	},
	{
		icon: <Repeat />,
		title: "4. Ongoing Partnership",
		description:
			"Our journey continues with post-launch support, optimization, and future growth planning.",
	},
];

export default function RoadmapSection() {
	return (
		<section className="bg-gray-50/50 py-20 lg:py-32">
			<div className="container mx-auto px-4">
				<div className="text-center max-w-3xl mx-auto">
					<h2 className="text-4xl font-bold text-gray-800">
						Our Partnership Roadmap
					</h2>
					<p className="text-lg text-gray-600 mt-2">
						We believe in a transparent, collaborative process from day one to
						long-term success.
					</p>
				</div>
				<div className="max-w-5xl mx-auto mt-16">
					<div className="relative">
						<div className="absolute left-1/2 -translate-x-1/2 top-5 h-full w-0.5 bg-gray-200"></div>

						<div className="space-y-16">
							{roadmapPhases.map((phase, index) => (
								<div key={phase.title} className="relative flex items-center">
									<div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
										{phase.icon}
									</div>
									<div
										className={`w-1/2 ${
											index % 2 === 0
												? "pr-12 text-right"
												: "pl-12 ml-auto text-left"
										}`}
									>
										<h3 className="text-2xl font-bold">{phase.title}</h3>
										<p className="mt-2 text-gray-600">{phase.description}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
