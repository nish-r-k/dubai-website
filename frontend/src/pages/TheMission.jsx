import MissionHero from "../assets/MissionHero.png";
const TheMission = () => {
	return (
		<div className="min-h-screen bg-gray-800 text-white pt-20">
			<section
				className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center"
				style={{ backgroundImage: `url(${MissionHero})` }}
			>
				<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-0" />
				<div className="max-w-4xl text-center relative z-10">
					<h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white shadow-lg">
						Engineering Tomorrow
						<br />
						<span className="text-yellow-500">
							Rooted in Dubai’s Spirit of Vision
						</span>
					</h1>
					<p className="mt-4 text-lg md:text-xl text-gray-200">
						Merging tradition and innovation to create future-ready solutions.
					</p>
					<div className="mt-6 flex justify-center gap-4">
						<button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg">
							Discover More
						</button>
						<button className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-lg">
							Learn More
						</button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default TheMission;
