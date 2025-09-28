export default function DgEcosystemCTA() {
	return (
		<section className="bg-black py-20 lg:py-32">
			<div className="container mx-auto px-4 text-center">
				<h2 className="text-4xl md:text-5xl font-bold text-white">
					Your idea has taken root.
				</h2>
				<p className="text-xl md:text-2xl text-blue-300 mt-4 mb-10">
					Let's grow it together.
				</p>

				<div className="flex flex-col sm:flex-row items-center justify-center gap-6">
					<a
						href="/contact"
						className="w-full sm:w-auto bg-blue-600 text-white font-bold text-lg py-4 px-10 rounded-full 
                       hover:bg-blue-500 hover:shadow-2xl hover:shadow-blue-500/30
                       transform hover:-translate-y-1 transition-all duration-300"
					>
						Plant a Project
					</a>
					<a
						href="/future"
						className="w-full sm:w-auto bg-transparent border-2 border-gray-600 text-gray-300 font-bold text-lg py-4 px-10 rounded-full 
                       hover:bg-gray-800 hover:border-gray-700 hover:text-white
                       transform hover:-translate-y-1 transition-all duration-300"
					>
						Join Our Garden
					</a>
				</div>
			</div>
		</section>
	);
}
