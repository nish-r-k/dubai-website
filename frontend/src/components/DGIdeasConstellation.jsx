import { useState } from "react";
import CustomWordCloud from "./CustomWordCloud";

const words = [
	{ text: "MISSION", value: 100, category: "mission" },
	{ text: "VALUES", value: 100, category: "values" },
	{ text: "VISION", value: 100, category: "vision" },
	{ text: "Empower", value: 60, category: "mission" },
	{ text: "Optimize", value: 50, category: "mission" },
	{ text: "Clarity", value: 40, category: "mission" },
	{ text: "Integrity", value: 60, category: "values" },
	{ text: "Innovation", value: 70, category: "values" },
	{ text: "Impact", value: 50, category: "values" },
	{ text: "Partnership", value: 40, category: "values" },
	{ text: "Future", value: 60, category: "vision" },
	{ text: "Growth", value: 50, category: "vision" },
	{ text: "Potential", value: 70, category: "vision" },
	{ text: "Synergy", value: 30, category: "all" },
	{ text: "Technology", value: 30, category: "all" },
];

const content = {
	mission: {
		title: "Our Mission",
		text: "To build, protect, and optimize the intelligent digital core that empowers businesses to thrive in a complex world.",
	},
	values: {
		title: "Our Values",
		text: "Guided by Integrity, Innovation, and a relentless focus on Impact, we build lasting partnerships.",
	},
	vision: {
		title: "Our Vision",
		text: "We envision a future where technology is a seamless, invisible, and intelligent engine for human ambition.",
	},
};

export default function DGIdeasConstellation() {
	const [activeCategory, setActiveCategory] = useState(null);

	const handleWordClick = (word) => {
		if (["mission", "values", "vision"].includes(word.category)) {
			setActiveCategory(word.category);
		}
	};

	const getWordColor = (word) => {
		if (activeCategory) {
			return word.category === activeCategory || word.category === "all"
				? "#60A5FA"
				: "#4B5563";
		}
		const colors = ["#FFFFFF", "#A5B4FC", "#60A5FA"];
		return colors[Math.floor(Math.random() * colors.length)];
	};

	return (
		<section className="min-h-screen bg-black text-white py-20 lg:py-32 flex flex-col items-center justify-center">
			<div className="container mx-auto px-4 text-center">
				<h2 className="text-4xl font-bold">Our Guiding Constellation</h2>
				<p className="text-lg text-gray-300 mt-2 max-w-3xl mx-auto">
					Our philosophy is a universe of interconnected ideas. Click on a
					pillar word to explore its meaning.
				</p>

				<div className="h-[500px] w-full max-w-2xl mx-auto mt-8">
					<CustomWordCloud
						words={words}
						onWordClick={handleWordClick}
						getWordColor={getWordColor}
					/>
				</div>

				<div className="h-40 mt-8">
					{activeCategory && (
						<div className="animate-fade-in">
							<h3 className="text-3xl font-bold text-blue-400">
								{content[activeCategory].title}
							</h3>
							<p className="mt-2 text-lg text-gray-200 max-w-2xl mx-auto">
								{content[activeCategory].text}
							</p>
							<button
								onClick={() => setActiveCategory(null)}
								className="mt-4 text-gray-400 text-sm hover:text-white"
							>
								Show All
							</button>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
