import TeamMemberCard from "./TeamMemberCard";

const teamMembers = [
	{
		name: "Sai Pavan",
		role: "Lead Engineer",
		quote:
			"I believe in writing code that is not only functional but also elegant and maintainable. It's a craft.",
		imageUrl: "",
		blueprintUrl: "https://i.imgur.com/O6N9n2C.png",
	},
	{
		name: "Mithri Kumari",
		role: "UX/UI Designer",
		quote:
			"Design is about solving problems. The user's success is the only metric that matters.",
		imageUrl: "",
		blueprintUrl: "https://i.imgur.com/Ab7926y.png",
	},
	{
		name: "Thushara Sai",
		role: "Cloud Architect",
		quote:
			"A well-designed system should be invisible. It just works, flawlessly and at scale.",
		imageUrl: "",
		blueprintUrl: "https://i.imgur.com/rV32b2C.png",
	},
];
export default function PillarsSection() {
	return (
		<section className="bg-white py-20 lg:py-32">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-gray-800">
						Meet the Architects
					</h2>
					<p className="text-lg text-gray-600 mt-2">
						Our company is the sum of its people. Here are some of the minds
						shaping our future.
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
					{teamMembers.map((member, index) => (
						<TeamMemberCard key={index} {...member} />
					))}
				</div>
			</div>
		</section>
	);
}
