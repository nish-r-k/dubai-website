import { Rocket, Handshake, MessageCircleQuestion } from "lucide-react";
export default function TriageSection() {
	return (
		<section className="bg-white py-20 lg:py-32">
			<div className="container mx-auto px-4">
				<h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
					What would you like to talk about?
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
					<a
						href="#start-project"
						className="block  p-8 bg-white border border-gray-200 rounded-lg text-center group
                       hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
					>
						<Rocket
							size={48}
							strokeWidth={1.5}
							className="mx-auto text-blue-500 mb-4 group-hover:scale-110 transition-transform"
						/>
						<h3 className="text-2xl font-bold text-gray-900">
							Start a New Project
						</h3>
						<p className="text-gray-600 mt-2">
							Let's discuss your vision and how we can bring it to life.
						</p>
					</a>

					<a
						href="#propose-partnership"
						className="block p-8 bg-white border border-gray-200 rounded-lg text-center group
                       hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
					>
						<Handshake
							size={48}
							strokeWidth={1.5}
							className="mx-auto text-blue-500 mb-4 group-hover:scale-110 transition-transform"
						/>
						<h3 className="text-2xl font-bold text-gray-900">
							Propose a Partnership
						</h3>
						<p className="text-gray-600 mt-2">
							We're always open to collaborating with great companies.
						</p>
					</a>

					<a
						href="#ask-question"
						className="block p-8 bg-white border border-gray-200 rounded-lg text-center group
                       hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
					>
						<MessageCircleQuestion
							size={48}
							strokeWidth={1.5}
							className="mx-auto text-blue-500 mb-4 group-hover:scale-110 transition-transform"
						/>
						<h3 className="text-2xl font-bold text-gray-900">
							Ask a General Question
						</h3>
						<p className="text-gray-600 mt-2">
							Have a different question? We're happy to help.
						</p>
					</a>
				</div>
			</div>
		</section>
	);
}
