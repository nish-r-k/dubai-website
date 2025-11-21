import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Cog, Zap, ShieldCheck } from "lucide-react";

export default function ImpactIgnitionSection() {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	return (
		<section ref={ref} className="bg-white py-20 lg:py-32">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-gray-800">
						The Engine in Motion
					</h2>
					<p className="text-lg text-gray-600 mt-2">
						Each project adds to our momentum, driving tangible results.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-12">
					<div className="text-center lg:text-right">
						<p className="text-5xl font-bold text-blue-600">
							{inView && <CountUp end={50} duration={2.5} />}+
						</p>
						<p className="text-lg text-gray-500 mt-1">Projects Launched</p>
					</div>

					<div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
						<Cog
							size="100%"
							className="text-gray-300 animate-spin"
							style={{ animationDuration: "20s" }}
						/>
						<Zap
							size="40%"
							className="text-yellow-500 absolute top-0 right-0 animate-pulse"
						/>
						<ShieldCheck
							size="50%"
							className="text-blue-500 absolute bottom-0 left-0 animate-pulse"
							style={{ animationDelay: "0.5s" }}
						/>
					</div>

					<div className="text-center lg:text-left">
						<p className="text-5xl font-bold text-blue-600">
							{inView && <CountUp end={98} duration={2.5} suffix="%" />}
						</p>
						<p className="text-lg text-gray-500 mt-1">Client Satisfaction</p>
					</div>
				</div>
			</div>
		</section>
	);
}
