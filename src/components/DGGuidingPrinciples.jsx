import { Lightbulb, Users, BarChartBig } from "lucide-react";

const principles = [
	{
		icon: <Lightbulb size={32} className="text-yellow-400" />,
		title: "Cultivate Innovation",
		description:
			"We don't just follow trends; we plant the seeds for what's next. We believe in nurturing bold ideas from concept to reality.",
	},
	{
		icon: <Users size={32} className="text-green-400" />,
		title: "Grow Together",
		description:
			"Our partnerships are ecosystems. We succeed when our clients succeed, fostering collaborative growth at every stage.",
	},
	{
		icon: <BarChartBig size={32} className="text-blue-400" />,
		title: "Harvest Results",
		description:
			"Ideas are beautiful, but impact is essential. We are relentlessly focused on delivering tangible, measurable outcomes.",
	},
];

export default function DGGuidingPrinciples() {
	return (
		<section className="bg-black text-white py-12 lg:py-20">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold">Our Guiding Principles</h2>
					<p className="text-lg text-gray-300 mt-2">
						The philosophy that nurtures every project.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
					{principles.map((principle, index) => (
						<div
							key={index}
							className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center"
						>
							<div className="inline-block p-4 bg-white/10 rounded-full mb-4">
								{principle.icon}
							</div>
							<h3 className="text-2xl font-bold mb-2">{principle.title}</h3>
							<p className="text-gray-400">{principle.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
