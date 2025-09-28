import { useState, useEffect, useRef } from "react";
import ScrollIndicator from "../components/ScrollIndicator";

const generateStars = (numStars) => {
	return [...Array(numStars)].map((_, i) => ({
		id: `star-${i}`,
		cx: Math.random() * 100,
		cy: Math.random() * 100,
		r: Math.random() * 1.5 + 0.5,
	}));
};

export default function DGEcosystemHero() {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const heroRef = useRef(null);
	const [stars, setStars] = useState([]);

	useEffect(() => {
		setStars(generateStars(100));
	}, []);

	useEffect(() => {
		const handleMouseMove = (e) => {
			if (heroRef.current) {
				const rect = heroRef.current.getBoundingClientRect();
				setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
			}
		};
		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	return (
		<section
			ref={heroRef}
			className="h-screen bg-black flex flex-col items-center justify-center text-center text-white relative overflow-hidden"
		>
			<svg className="absolute w-full h-full top-0 left-0 z-0">
				<defs>
					<radialGradient id="cursorGlow">
						<stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
						<stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
					</radialGradient>
				</defs>

				<circle
					cx={mousePosition.x}
					cy={mousePosition.y}
					r="150"
					fill="url(#cursorGlow)"
				/>

				{stars.map((star) => (
					<circle
						key={star.id}
						cx={`${star.cx}%`}
						cy={`${star.cy}%`}
						r={star.r}
						className="star"
					/>
				))}
			</svg>

			<div
				className="fixed w-4 h-4 bg-white rounded-full pointer-events-none z-50 shadow-2xl shadow-white"
				style={{
					transform: `translate(${mousePosition.x - 8}px, ${
						mousePosition.y - 8
					}px)`,
				}}
			/>

			<div className="relative z-10 p-4">
				<h1 className="text-5xl md:text-7xl font-bold">
					Our mission is a garden we grow together.
				</h1>
				<p className="text-xl md:text-2xl text-gray-200 mt-4">
					Here is your seed.
				</p>
			</div>

			<ScrollIndicator />
		</section>
	);
}
