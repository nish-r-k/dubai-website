import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import UXWireframe from "../assets/UXWireframe.png";
import UIDesign from "../assets/UIDesign.png";
import PlexusNetwork from "../assets/PlexusNetwork.png";

import { FaFigma, FaReact, FaAws } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

function BuildSection() {
	const containerRef = useRef(null);
	const trackRef = useRef(null);
	const masterTimelineRef = useRef(null);

	useEffect(() => {
		const timer = setTimeout(() => {
			const track = trackRef.current;
			const container = containerRef.current;

			if (!track || !container) return;

			const scrollWidth = track.scrollWidth - window.innerWidth;

			const masterTimeline = gsap.timeline({
				scrollTrigger: {
					trigger: container,
					pin: true,
					scrub: 1,
					start: "top top",
					end: () => `+=${scrollWidth}`,
					invalidateOnRefresh: true,
				},
			});
			masterTimelineRef.current = masterTimeline;

			masterTimeline.to(track, {
				x: -scrollWidth,
				ease: "none",
			});

			masterTimeline.to("#img-ui", { opacity: 1 }, "<25%");
			masterTimeline.to("#img-code", { opacity: 1 }, "<60%");

			ScrollTrigger.refresh();
		}, 100);

		return () => {
			clearTimeout(timer);
			if (masterTimelineRef.current) {
				masterTimelineRef.current.kill();
			}
		};
	}, []);

	return (
		<section id="build" ref={containerRef} className="relative bg-black">
			<div className="absolute top-0 left-0 w-full h-full">
				<img
					id="img-wireframe"
					src={UXWireframe}
					alt="Wireframe blueprint"
					className="absolute w-full h-full object-cover"
					loading="lazy"
				/>
				<img
					id="img-ui"
					src={UIDesign}
					alt="Polished user interface"
					className="absolute w-full h-full object-cover opacity-0"
					loading="lazy"
				/>
				<img
					id="img-code"
					src={PlexusNetwork}
					alt="Abstract network"
					className="absolute w-full h-full object-cover opacity-0"
					loading="lazy"
				/>

				<div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
			</div>

			{/* <div className="relative">
				<h1
					className="text-4xl lg:text-5xl font-bold text-center mb-2 pt-20 text-white"
					style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
				>
					From Idea to Impact. Seamlessly.
				</h1>

				<div className="h-[200vh]">
					<div className="sticky top-0 flex h-screen items-center overflow-hidden">
						<div id="timeline-track" ref={trackRef} className="flex">
							<div className="flex w-screen flex-shrink-0 items-center justify-center p-8 lg:p-12">
								<div className="max-w-xl text-white">
									<h2 className="font-bold text-3xl md:text-4xl mb-4">
										Design with Insight
									</h2>
									<p className="text-lg text-gray-200 mb-6">
										We craft intuitive, engaging experiences based on
										user-centric research, ensuring your product is not only
										beautiful but also effective.
									</p>
									<h3 className="font-semibold text-xl mb-3">
										Key Deliverables:
									</h3>
									<ul className="list-disc list-inside text-gray-300 space-y-1 mb-6">
										<li>High-Fidelity Interactive Prototypes</li>
										<li>Comprehensive UX Research & User Personas</li>
										<li>Complete Design System & Component Library</li>
									</ul>
									<div className="flex items-center gap-4">
										<FaFigma className="w-12 h-12" />
									</div>
								</div>
							</div>

							<div className="flex w-screen flex-shrink-0 items-center justify-center p-8 lg:p-12">
								<div className="max-w-xl text-white">
									<h2 className="font-bold text-3xl md:text-4xl mb-4">
										Build with Precision
									</h2>
									<p className="text-lg text-gray-200 mb-6">
										Our agile development brings your vision to life with clean,
										scalable code for both web and mobile platforms.
									</p>
									<h3 className="font-semibold text-xl mb-3">
										Key Deliverables:
									</h3>
									<ul className="list-disc list-inside text-gray-300 space-y-1 mb-6">
										<li>Responsive Web & Native Mobile Applications</li>
										<li>Source Code Repository & Technical Documentation</li>
										<li>CI/CD Pipeline for Automated Deployments</li>
									</ul>
									<div className="flex items-center gap-4">
										<FaReact className="w-12 h-12" />
									</div>
								</div>
							</div>

							<div className="flex w-screen flex-shrink-0 items-center justify-center p-8 lg:p-12">
								<div className="max-w-xl text-white">
									<h2 className="font-bold text-3xl md:text-4xl mb-4">
										Scale with Confidence
									</h2>
									<p className="text-lg text-gray-200 mb-6">
										We deploy on robust cloud infrastructure, ensuring your
										platform is secure, performant, and ready to grow with your
										business.
									</p>
									<h3 className="font-semibold text-xl mb-3">
										Key Deliverables:
									</h3>
									<ul className="list-disc list-inside text-gray-300 space-y-1 mb-6">
										<li>Scalable Cloud Architecture (IaaS)</li>
										<li>24/7 Performance & Security Monitoring</li>
										<li>Disaster Recovery & Backup Plans</li>
									</ul>
									<div className="flex items-center gap-4">
										<FaAws className="w-12 h-12" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div> */}
			
<div className="relative">
  <h1 className="text-4xl lg:text-5xl font-bold text-center mb-2 pt-20 text-white drop-shadow-[0_6px_15px_rgba(0,0,0,0.45)]">
    From Idea to Impact. Seamlessly.
  </h1>

  <div className="h-[200vh]">
    <div className="sticky top-0 flex h-screen items-center overflow-hidden">
      <div id="timeline-track" ref={trackRef} className="flex">
        {[
          {
            title: "Design with Insight",
            description:
              "We craft intuitive, engaging experiences based on user-centric research, ensuring your product is not only beautiful but also effective.",
            bullets: [
              "High-Fidelity Interactive Prototypes",
              "Comprehensive UX Research & User Personas",
              "Complete Design System & Component Library"
            ],
            icon: <FaFigma className="w-12 h-12 text-pink-300" />,
            accent: "from-[#fbe7ff]/85 via-[#ffc9de]/75 to-transparent"
          },
          {
            title: "Build with Precision",
            description:
              "Our agile development brings your vision to life with clean, scalable code for both web and mobile platforms.",
            bullets: [
              "Responsive Web & Native Mobile Applications",
              "Source Code Repository & Technical Documentation",
              "CI/CD Pipeline for Automated Deployments"
            ],
            icon: <FaReact className="w-12 h-12 text-sky-200" />,
            accent: "from-[#dff5ff]/85 via-[#9fd8ff]/70 to-transparent"
          },
          {
            title: "Scale with Confidence",
            description:
              "We deploy on robust cloud infrastructure, ensuring your platform is secure, performant, and ready to grow with your business.",
            bullets: [
              "Scalable Cloud Architecture (IaaS)",
              "24/7 Performance & Security Monitoring",
              "Disaster Recovery & Backup Plans"
            ],
            icon: <FaAws className="w-12 h-12 text-amber-200" />,
            accent: "from-[#fff5d8]/85 via-[#ffe1b0]/70 to-transparent"
          }
        ].map((item, idx) => (
          <div
            key={idx}
            className="flex w-screen flex-shrink-0 items-center justify-center p-6 sm:p-8 lg:p-12"
          >
            <div className="relative max-w-xl w-full text-white rounded-3xl p-8 backdrop-blur-xl bg-white/4 border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
              <div
                className={`absolute inset-0 rounded-3xl opacity-80 bg-gradient-to-br ${item.accent}`}
              />
              <div className="relative z-10 space-y-5">
                <div>
                  <p className="uppercase tracking-[0.25em] text-xs text-white/70 mb-2">
                    Phase {idx + 1}
                  </p>
                  <h2 className="font-black text-3xl md:text-4xl text-white drop-shadow-lg">
                    {item.title}
                  </h2>
                </div>
                <p className="text-lg text-white/85 leading-relaxed">
                  {item.description}
                </p>
                <h3 className="font-semibold text-xl text-white tracking-wide">
                  Key Deliverables:
                </h3>
                <ul className="space-y-2">
                  {item.bullets.map((bullet, bIdx) => (
                    <li
                      key={bIdx}
                      className="flex items-start text-white/90 leading-relaxed"
                    >
                      <span className="w-2 h-2 mt-2 rounded-full bg-white/80 mr-3 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-4 pt-4">{item.icon}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
		</section>
	);
}

export default BuildSection;
