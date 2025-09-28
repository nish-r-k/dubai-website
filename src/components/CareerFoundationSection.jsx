function FoundationBlock({ title, description }) {
	return (
		<div className="border border-gray-200 p-8 rounded-lg group hover:border-blue-500 hover:shadow-xl transition-all duration-300">
			<h3 className="text-2xl font-bold text-gray-800">{title}</h3>
			<p className="text-gray-600 mt-4 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
				{description}
			</p>
		</div>
	);
}

export default function CareerFoundationSection() {
	return (
		<section className=" bg-white py-20 lg:py-32">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-gray-800">Our Foundation</h2>
					<p className="text-lg text-gray-600 mt-2">
						These are the core principles we build upon every single day.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
					<FoundationBlock
						title="Autonomy"
						description="We hire brilliant people and get out of their way. You own your work from start to finish."
					/>
					<FoundationBlock
						title="Mastery"
						description="We are dedicated to the craft of building exceptional technology and supporting your growth."
					/>
					<FoundationBlock
						title="Purpose"
						description="We focus on solving real-world problems that have a meaningful and positive impact."
					/>
				</div>
			</div>
		</section>
	);
}
