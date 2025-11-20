import { useState, useEffect } from "react";
import ScrollIndicator from "../components/ScrollIndicator";
import backgroundImage from "../assets/lets-talk2.jpg";

const GreetingsSection = () => {
	const [currentTime, setCurrentTime] = useState(" ");

	useEffect(() => {
		const bangloreTime = new Date().toLocaleTimeString("en-US", {
			timeZone: "Asia/Kolkata",
			hour: "2-digit",
			minute: "2-digit",
			hour12: true,
		});
		setCurrentTime(bangloreTime);
	}, []);

	return (

		<section
			className="h-screen relative flex flex-col items-center justify-center text-center bg-cover bg-center"
			style={{ backgroundImage: `url(${backgroundImage})` }}
		>

			<div className="absolute inset-0 bg-gray-900/40"></div>
			<div className="relative z-10 p-4">
				<h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
					Let's start a conversation.
				</h1>

				<p className="text-xl md:2xl text-gray-200 mt-4 max-w-xl mx-auto">
					We're here to listen. Tell us what's on your mind, and we'll connect you
					with the right person.
				</p>

				<p className="text-sm mt-12 text-gray-300 mx-auto">
					{currentTime
						? `It's currently ${currentTime} for our team in Bengaluru.`
						: "Loading our local time..."}
				</p>
			</div>

			<ScrollIndicator />
		</section>
	);
};

export default GreetingsSection;