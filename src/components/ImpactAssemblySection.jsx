import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cog, Zap, ShieldCheck } from "lucide-react";
import CaseStudyCard from "./CaseStudyCard";

gsap.registerPlugin(ScrollTrigger);

const caseStudies = [
	{
		client: "FutureTech Inc.",
		summary:
			"Developed an AI-powered analytics platform that boosted user engagement by 300%.",
		componentId: "component-1",
	},
	{
		client: "Innovate Co.",
		summary:
			"Engineered a global e-commerce solution, cutting bounce rates in half.",
		componentId: "component-2",
	},
	{
		client: "Datawise",
		summary:
			"Executed a secure cloud migration, achieving 99.99% uptime and reliability.",
		componentId: "component-3",
	},
];

function AssemblySection() {
	const triggerRef = useRef(null);
	const canvasRef = useRef(null);

	useEffect(() => {
		const pin = gsap.to(canvasRef.current, {
			scrollTrigger: {
				trigger: triggerRef.current,
				start: "top top",
				end: "bottom bottom",
				pin: canvasRef.current,
				pinSpacing: false,
			},
		});

		caseStudies.forEach((study) => {
			const component = document.getElementById(study.componentId);
			const trigger = document.querySelector(
				`[data-trigger-for='${study.componentId}']`
			);

			gsap.fromTo(
				component,
				{ autoAlpha: 0, scale: 0.5, rotate: -45 },
				{
					autoAlpha: 1,
					scale: 1,
					rotate: 0,
					ease: "power2.out",
					scrollTrigger: {
						trigger: trigger,
						start: "top center",
						end: "center center",
						scrub: true,
					},
				}
			);
		});

		return () => {
			pin.kill();
			ScrollTrigger.getAll().forEach((st) => st.kill());
		};
	}, []);

	return (
		<section ref={triggerRef} className="bg-white relative">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 lg:grid-cols-2">
					<div
						ref={canvasRef}
						className="h-screen flex items-center justify-center"
					>
						<div className="relative w-64 h-64 md:w-96 md:h-96">
							<div className="absolute inset-16 bg-gray-100 rounded-full"></div>

							<Cog
								id="component-1"
								size={128}
								className="text-gray-400 absolute top-0 left-0 opacity-0"
							/>
							<Zap
								id="component-2"
								size={96}
								className="text-yellow-500 absolute bottom-8 right-8 opacity-0"
							/>
							<ShieldCheck
								id="component-3"
								size={112}
								className="text-blue-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0"
							/>
						</div>
					</div>

					<div className="flex flex-col">
						{caseStudies.map((study) => (
							<CaseStudyCard
								key={study.client}
								client={study.client}
								summary={study.summary}
								componentId={study.componentId}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default AssemblySection;
