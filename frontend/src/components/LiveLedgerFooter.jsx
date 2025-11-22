import React, { useState, useEffect } from "react";
import { tickerItems, matrixLinks } from "../data/footerData";

function LiveLedgerFooter() {
	const [currentTime, setCurrentTime] = useState("");

	useEffect(() => {
		const timer = setInterval(() => {
			const timeInBengaluru = new Date().toLocaleTimeString("en-US", {
				timeZone: "Asia/Kolkata",
				hour: "2-digit",
				minute: "2-digit",
				second: "2-digit",
				hour12: false,
			});
			setCurrentTime(timeInBengaluru);
		}, 1000);
		return () => clearInterval(timer);
	}, []);

	return (
		<footer className="bg-black text-gray-400 font-sans">
			<div className="border-t border-b border-gray-800 py-3 ticker-wrap">
				<div className="ticker-move">
					{[...tickerItems, ...tickerItems].map((item, index) => (
						<span key={index} className="mx-6 text-sm text-gray-500">
							{item}
						</span>
					))}
				</div>
			</div>

			<div className="container mx-auto px-4 py-12">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
					<div>
						<h3 className="font-bold text-lg text-white mb-4">
							Sisuni Infotech
						</h3>
						<p className="text-sm">
							Building the digital backbone for modern businesses.
						</p>
					</div>
					<div>
						<h3 className="font-semibold text-white mb-4">Services</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<a href="/services" className="hover:text-white">
									Digital Platforms
								</a>
							</li>
							<li>
								<a href="/services" className="hover:text-white">
									CyberSecurity
								</a>
							</li>
							<li>
								<a href="/services" className="hover:text-white">
									Automation
								</a>
							</li>
						</ul>
					</div>
					{Object.entries(matrixLinks).map(([title, links]) => (
						<div key={title}>
							<h3 className="font-semibold text-white mb-4">{title}</h3>
							<ul className="space-y-2 text-sm">
								{links.map((link) => (
									<li key={link.title}>
										<a
											href={link.href}
											className="flex items-center gap-2 hover:text-white"
										>
											{link.icon} {link.title}
										</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>

			<div className="border-t border-gray-800 text-xs">
				<div className="container mx-auto px-4 py-3 flex justify-between items-center">
					<span>&copy; {new Date().getFullYear()} Sisuni Infotech.</span>
					<span>{currentTime} (BLR)</span>
					<div className="flex items-center gap-2">
						<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
						<span>All Systems Operational</span>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default LiveLedgerFooter;
