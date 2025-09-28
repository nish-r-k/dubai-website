import { Rocket, Handshake, Code, BarChart2, Brush, Cloud } from "lucide-react";

const archives = [
	{
		icon: <Rocket size={32} className="text-blue-400" />,
		title: "Project Alpha Launch",
		description: "Successfully launched a new AI-powered analytics platform.",
		style: { animationDelay: "0s" },
	},
	{
		icon: <Handshake size={32} className="text-green-400" />,
		title: "Innovate Partnership",
		description: "Formed a strategic partnership to expand our global reach.",
		style: { animationDelay: "0.5s" },
	},
	{
		icon: <Code size={32} className="text-purple-400" />,
		title: "Open Source Library",
		description: "Released a new, high-performance data visualization library.",
		style: { animationDelay: "0.2s" },
	},
	{
		icon: <BarChart2 size={32} className="text-yellow-400" />,
		title: "Growth Milestone",
		description: "Reached our first 10,000 active users milestone.",
		style: { animationDelay: "0.7s" },
	},
	{
		icon: <Brush size={32} className="text-pink-400" />,
		title: "Design System 2.0",
		description:
			"Overhauled our entire design language for better consistency.",
		style: { animationDelay: "0.4s" },
	},
	{
		icon: <Cloud size={32} className="text-teal-400" />,
		title: "Cloud Infrastructure",
		description: "Achieved 99.99% uptime with a new distributed architecture.",
		style: { animationDelay: "0.1s" },
	},
];
// ---

function LivingArchives() {
	return (
		<section className="bg-black text-white py-20 lg:py-32">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold">A Garden with a History</h2>
					<p className="text-lg text-gray-300 mt-2 max-w-3xl mx-auto">
						Our ecosystem is built on a foundation of past successes. Interact
						with our archives to see the stories of our growth.
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
					{archives.map((item, index) => (
						<div
							key={index}
							className="group relative p-6 bg-white/5 border border-white/10 rounded-2xl 
                         overflow-hidden transition-all duration-300 hover:border-blue-400/50 hover:bg-white/10 hover:-translate-y-2"
						>
							<div className="relative z-10">
								<div className="mb-4">{item.icon}</div>

								<h3 className="text-2xl font-bold text-gray-100 transition-colors duration-300 group-hover:text-white">
									{item.title}
								</h3>
								<p className="mt-2 text-gray-400 transition-colors duration-300 group-hover:text-gray-200">
									{item.description}
								</p>
							</div>

							<div
								className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/10 
                           rounded-full blur-2xl animate-breathing-orb group-hover:scale-125"
								style={item.style}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default LivingArchives;
