import { motion } from "framer-motion";
import BuildSection from "../components/BuildSection";
import OptimizeSection from "../components/OptimizeSection";

import {
	ArrowRight,
	ShieldAlert,
	ShieldCheck,
	Network,
	Stamp,
} from "lucide-react";
import HeroImage from "../assets/HomeHero.jpg";
import HomeHeroImage from "../assets/HomeHeroImage.jpg";
import HomeHeroVideo from "../assets/HomeHeroVideo.mp4";
const Home = () => {
	return (
		<div className="min-h-screen bg-gray-300">
			<section className="min-h-screen relative w-full bg-cover bg-center flex items-center justify-center gap-8">
				<video
					className="absolute top-0 left-0 w-full h-full object-cover z-0"
					src={HomeHeroVideo}
					autoPlay
					loop
					muted
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>
				<motion.div
					initial={{ x: -200, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ duration: 1.2, ease: "easeIn", delay: 0.3 }}
					className=" max-w-2xl relative flex flex-col  items-center justify-center z-10"
				>
					<div className="flex flex-col justify-center sm:ml-12">
						<h1 className="text-4xl text-white md:text-6xl font-roboto  font-extrabold tracking-tight">
							Engineering Tomorrow,
							<br />
							<span className="font-sans  text-gray-900">
								Rooted in Dubai's Spirit of Vision
							</span>
						</h1>
						<p className="mt-4 text-lg md:text-xl text-gray-200 ">
							We are reimagining the future with bold ideas, human-centered
							design, and cutting-edge technology.
						</p>
						<div className="mt-6 flex justify-start gap-4">
							<button className="bg-blue-500 flex items-center gap-1 hover:bg-yellow-600 text-white py-2 px-4 rounded-md">
								Explore{" "}
								<span>
									<ArrowRight size={14} />
								</span>
							</button>
						</div>
					</div>
				</motion.div>
				<motion.div
					initial={{ x: 200, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ duration: 1.2, ease: "easeIn", delay: 0.3 }}
					className=" max-w-2xl relative flex flex-col items-start justify-center z-10"
				></motion.div>
			</section>
			<section className="min-h-[50vh]  mx-auto px-6 md:px-12 py-12 bg-white">
				<div className="max-w-7xl mx-auto px-2 text-left">
					<h1 className="text-4xl md:text-6xl font-roboto font-extrabold tracking-tight">
						Your Business Has Challenges. We Build the Engine to Overcome Them
					</h1>
					<p className="mt-4 text-lg md:text-xl text-gray-500">
						It all starts with a single goal. Tell us what you want to achieve
						today.
					</p>
					<div className="flex flex-col md:flex-row gap-6 mt-6">
						<div className="p-8 bg-gray-50 border border-gray-200 rounded-xl transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer">
							<a href="#build">
								<h1 className="text-2xl font-bold">BUILD</h1>
								<p className="text-gray-600">
									We want to launch a new digital product or transform an
									existing one.
								</p>
							</a>
						</div>
						<div className="p-8 bg-gray-50 border border-gray-200 rounded-xl cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
							<a href="#protect">
								<h1 className="text-2xl font-bold">PROTECT</h1>
								<p className="text-gray-600">
									For fortifying digital assets against threats and navigating
									complex compliance.
								</p>
							</a>
						</div>
						<div className="p-8 bg-gray-50 border border-gray-200 rounded-xl cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
							<a href="#optimize">
								<h1 className="text-2xl font-bold">OPTIMIZE</h1>
								<p className="text-gray-600">
									For turning your operational data into predictive insights and
									a powerful strategic advantage.
								</p>
							</a>
						</div>
					</div>
				</div>
			</section>

			<BuildSection />

			<section id="protect" className="pb-12 pt-12">
				<h1 className="font-bold font-serif text-4xl text-center mb-16">
					Your 360° Shield in a Digital World
				</h1>

				<div className="hidden md:block">
					<div className="relative w-full max-w-lg mx-auto h-96">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="size-24 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
							/>
						</svg>
						<div className="w-16 h-16 bg-gray-200 rounded-full absolute top-0 left-1/2 -translate-x-1/2 group cursor-pointer flex items-center justify-center">
							<ShieldAlert
								size={32}
								strokeWidth={2}
								className="text-gray-700"
							/>
							<div className="absolute bottom-full mb-2 w-64 p-3 bg-gray-800 text-white text-xs rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
								Our 24/7 monitoring acts as your digital watchtower, identifying
								and neutralizing threats before they can strike.
							</div>
						</div>

						<div className="w-16 h-16 bg-gray-200 rounded-full absolute top-1/2 right-0 -translate-y-1/2 group cursor-pointer flex items-center justify-center">
							<ShieldCheck
								size={32}
								strokeWidth={2}
								className="text-gray-700"
							/>
							<div className="absolute left-full ml-2 w-64 p-3 bg-gray-800 text-white text-xs rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
								Your data is your most valuable asset. We implement advanced
								encryption and access controls to keep it locked down in your
								vault.
							</div>
						</div>

						<div className="w-16 h-16 bg-gray-200 rounded-full absolute bottom-0 left-1/2 -translate-x-1/2 group cursor-pointer flex items-center justify-center">
							<Network size={32} strokeWidth={2} className="text-gray-700" />
							<div className="absolute top-full mt-2 w-64 p-3 bg-gray-800 text-white text-xs rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
								We secure the gateways to your business. From firewalls to
								secure configurations, we ensure only the right traffic gets
								through.
							</div>
						</div>

						<div className="w-16 h-16 bg-gray-200 rounded-full absolute top-1/2 left-0 -translate-y-1/2 group cursor-pointer flex items-center justify-center">
							<Stamp size={32} strokeWidth={2} className="text-gray-700" />
							<div className="absolute right-full mr-2 w-64 p-3 bg-gray-800 text-white text-xs rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
								Navigate the complex web of regulations like GDPR and CCPA. We
								turn compliance from a hurdle into a competitive advantage.
							</div>
						</div>
					</div>
				</div>

				<div className="md:hidden px-4">
					<div className="flex flex-col space-y-8">
						<div className="flex items-center space-x-4">
							<div className="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0 flex items-center justify-center">
								<ShieldAlert size={32} className="text-gray-700" />
							</div>
							<p className="text-gray-600">
								Our 24/7 monitoring acts as your digital watchtower, identifying
								and neutralizing threats before they can strike.
							</p>
						</div>
						<div className="flex items-center space-x-4">
							<div className="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0 flex items-center justify-center">
								<ShieldCheck size={32} className="text-gray-700" />
							</div>
							<p className="text-gray-600">
								Your data is your most valuable asset. We implement advanced
								encryption and access controls to keep it locked down in your
								vault.
							</p>
						</div>
						<div className="flex items-center space-x-4">
							<div className="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0 flex items-center justify-center">
								<Network size={32} className="text-gray-700" />
							</div>
							<p className="text-gray-600">
								We secure the gateways to your business. From firewalls to
								secure configurations, we ensure only the right traffic gets
								through.
							</p>
						</div>
						<div className="flex items-center space-x-4">
							<div className="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0 flex items-center justify-center">
								<Stamp size={32} className="text-gray-700" />
							</div>
							<p className="text-gray-600">
								Navigate the complex web of regulations like GDPR and CCPA. We
								turn compliance from a hurdle into a competitive advantage.
							</p>
						</div>
					</div>
				</div>
			</section>

			<OptimizeSection />
			<section className="bg-gray-200">
				<div className="container mx-auto px-4 py-20 text-center">
					<h2 className="text-4xl text-black font-bold mb-4">
						Ready to Build Your Advantage?
					</h2>
					<p className="text-lg text-blue-500 max-w-2xl mx-auto mb-8">
						Let's turn your vision into a reality. Schedule a free,
						no-obligation strategy call with our experts to discover how we can
						help you build, protect, and optimize for the future.
					</p>
					<a
						href="/contact"
						className=" bg-blue-900 font-semibold font-roboto text-white text-lg py-2 px-4 rounded-sm hover:bg-blue-500 transition duration-300 shadow-lg"
					>
						Book a Free Consultation
					</a>
				</div>
			</section>
		</div>
	);
};

export default Home;
