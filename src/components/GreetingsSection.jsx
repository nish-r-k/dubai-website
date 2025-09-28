import { useState, useEffect } from "react";
import ScrollIndicator from "../components/ScrollIndicator";
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
		<section className="h-screen bg-gray-200 text-gray-800 flex flex-col items-center justify-center text-center">
			<h1 className="text-5xl md:text-7xl font-bold leading-tight">
				Let's start a conversation.
			</h1>
			<p className="text-xl md:2xl text-gray-600 mt-4 max-w-3xl">
				We're here to listen. Tell us what's on your mind, and we'll connect you
				with the right person.
			</p>
			<p className="text-sm mt-12 text-gray-700">
				{currentTime
					? `It's currently ${currentTime} for our team in Bengaluru.`
					: "Loading our local time..."}
			</p>
			<ScrollIndicator />
		</section>
	);
};

export default GreetingsSection;
