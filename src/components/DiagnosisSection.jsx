import { Rocket, Aperture, ShieldCheck } from "lucide-react";
import GoalCard from "./GoalCard";

const goals = [
	{
		id: "launch",
		icon: <Rocket size={32} className="text-blue-500" />,
		title: "Launch a New Idea",
		description: "For building a new digital product from the ground up.",
	},
	{
		id: "optimize",
		icon: <Aperture size={32} className="text-green-500" />,
		title: "Optimize an Existing System",
		description:
			"For improving the performance, UX, and efficiency of what you have.",
	},
	{
		id: "secure",
		icon: <ShieldCheck size={32} className="text-red-500" />,
		title: "Secure My Digital Assets",
		description:
			"For when security, compliance, and data protection are your top priority.",
	},
];

export default function DiagnosisSection({ onGoalSelect }) {
	return (
		<section className="bg-white py-20 lg:py-32">
			<div className="container mx-auto px-4">
				<div className="text-center max-w-3xl mx-auto">
					<h1 className="text-4xl md:text-5xl font-bold text-gray-800">
						Every great outcome starts with a clear goal.
					</h1>
					<p className="text-xl text-gray-600 mt-4">What is yours?</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
					{goals.map((goal) => (
						<GoalCard
							key={goal.id}
							icon={goal.icon}
							title={goal.title}
							description={goal.description}
							onClick={() => onGoalSelect(goal.id)}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
