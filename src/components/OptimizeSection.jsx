import React, { useState, useEffect, useRef } from "react";
import BeforeImage from "../assets/Before.png";
import AfterImage from "../assets/After.png";
import { BiMessageEdit } from "react-icons/bi";

function OptimizeSection() {
	const [sliderValue, setSliderValue] = useState(50);
	const afterPanelRef = useRef(null);
	const sliderHandleRef = useRef(null);

	useEffect(() => {
		const afterPanel = afterPanelRef.current;
		const sliderHandle = sliderHandleRef.current;

		const handleSliderInput = (e) => {
			const value = e.target.value;
			setSliderValue(value);
			if (afterPanel) {
				afterPanel.style.width = `${value}%`;
			}
		};

		if (sliderHandle) {
			sliderHandle.addEventListener("input", handleSliderInput);
		}

		return () => {
			if (sliderHandle) {
				sliderHandle.removeEventListener("input", handleSliderInput);
			}
		};
	}, []);

	return (
		<section id="optimize" className="py-12 pb-12">
			<h1 className="font-bold font-serif text-4xl text-center">
				Turn Repetitive Work into Strategic Advantage.
			</h1>

			<div className="relative w-full max-w-4xl mx-auto mt-12">
				<div
					id="after-panel"
					ref={afterPanelRef}
					className="absolute inset-0 overflow-hidden"
					style={{ width: `${sliderValue}%` }}
				>
					<div className="bg-blue-100 h-96 p-8 border-4 border-blue-500 rounded-lg w-[1024px] max-w-[1024px] flex items-center">
						<div className="w-1/2">
							<h3 className="text-2xl font-bold text-blue-800">AFTER</h3>
							<h4 className="text-lg font-semibold text-blue-700 mt-2">
								The Power of Intelligent Automation
							</h4>
							<ul className="list-disc list-inside mt-4 space-y-2 text-blue-900">
								<li>Strategic tasks automated, freeing up your team.</li>
								<li>Real-time dashboards for data-driven decisions.</li>
								<li>Near-zero error rate with validated workflows.</li>
							</ul>
						</div>
						<div className="w-1/2 flex items-center justify-center h-full">
							<img
								src={AfterImage}
								alt="Streamlined, automated workflow with growth"
								className="object-contain max-h-full max-w-full"
								loading="lazy"
							/>
						</div>
					</div>
				</div>

				<div id="before-panel" className="h-96">
					<div className="bg-gray-200 h-96 p-8 border-4 border-gray-400 rounded-lg flex items-center">
						<div className="w-1/2">
							<h3 className="text-2xl font-bold text-gray-800">BEFORE</h3>
							<h4 className="text-lg font-semibold text-gray-700 mt-2">
								The Daily Grind of Manual Work
							</h4>
							<ul className="list-disc list-inside mt-4 space-y-2 text-gray-900">
								<li>Countless hours lost to repetitive data entry.</li>
								<li>Decisions based on outdated, siloed spreadsheets.</li>
								<li>High risk of costly human errors.</li>
							</ul>
						</div>
						<div className="w-1/2 flex items-center justify-center h-full">
							<img
								src={BeforeImage}
								alt="Streamlined, automated workflow with growth"
								className="object-contain max-h-full max-w-full"
								loading="lazy"
							/>
						</div>
					</div>
				</div>

				<input
					type="range"
					id="slider-handle"
					ref={sliderHandleRef}
					min="0"
					max="100"
					value={sliderValue}
					onChange={(e) => setSliderValue(e.target.value)}
					className="absolute inset-0 w-full h-full cursor-pointer opacity-0"
				/>
			</div>
		</section>
	);
}

export default OptimizeSection;
