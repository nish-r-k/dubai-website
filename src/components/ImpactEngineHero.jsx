import ScrollIndicator from "../components/ScrollIndicator";

export default function ImpactEngineHero() {
	return (
		<section className="h-screen bg-white flex items-center justify-center p-4 relative overflow-hidden">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
				<div className="flex justify-center">
					<svg
						className="w-64 h-64 md:w-96 md:h-96 animate-slow-spin"
						viewBox="0 0 100 100"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill="none"
							stroke="rgba(0, 0, 0, 0.1)"
							strokeWidth="2"
							d="M50,10 A40,40 0 1 1 49.9,10.001 Z"
						/>
						<path
							fill="none"
							stroke="rgba(59, 130, 246, 0.8)"
							strokeWidth="3"
							strokeDasharray="31.4 31.4"
							d="M50,20 A30,30 0 1 1 49.9,20.001 Z"
						/>
						<circle cx="50" cy="50" r="10" fill="rgba(59, 130, 246, 0.8)" />
					</svg>
				</div>

				<div className="relative z-10 text-center md:text-left">
					<h1 className="text-5xl md:text-7xl font-bold text-gray-800">
						Results aren't random.
					</h1>
					<p className="text-5xl md:text-7xl font-bold text-blue-600 mt-2">
						They're engineered.
					</p>
				</div>
			</div>

			<ScrollIndicator />
		</section>
	);
}
