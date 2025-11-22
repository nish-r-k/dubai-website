export default function CareerBlueprintHero() {
	return (
		<section className="min-h-screen text-gray-800 relative flex flex-col items-center justify-center overflow-hidden text-center p-4">
			<svg
				className="absolute w-full h-full top-0 left-0"
				xmlns="http://www.w3.org/2000/svg"
			>
				<defs>
					<pattern
						id="grid"
						width="80"
						height="80"
						patternUnits="userSpaceOnUse"
					>
						<path
							d="M 80 0 L 0 0 0 80"
							fill="none"
							stroke="rgba(59, 130, 246, 0.4)"
							strokeWidth="1"
						/>
					</pattern>
				</defs>
				<rect width="100%" height="100%" fill="url(#grid)" />

				<path
					className="animate-blueprint-line"
					d="M -100 200 L 2000 1000"
					fill="none"
					stroke="rgba(59, 130, 246, 0.7)"
					strokeWidth="2"
				/>
			</svg>
			<div className="relative z-10">
				<h1 className="text-5xl md:text-7xl font-bold">
					We're building what's next.
				</h1>
				<p className="text-xl md:2xl text-gray-600 mt-4">
					Here's the blueprint.
				</p>
			</div>
			<div className="absolute bottom-10 animate-pulse text-center">
				<p className="text-sm uppercase tracking-wider text-gray-500">
					Scroll to Begin
				</p>
				<div className="w-px h-12 bg-gray-400 mx-auto mt-2"></div>
			</div>
		</section>
	);
}
