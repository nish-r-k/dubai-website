import React, { useState, useEffect, useRef } from "react";
import BeforeImage from "../assets/Before.png";
import AfterImage from "../assets/After.png";
function OptimizeSection() {
	const [sliderValue, setSliderValue] = useState(50);
	const afterPanelRef = useRef(null);
	const containerRef = useRef(null);
	const sliderHandleRef = useRef(null);
	const [containerWidth, setContainerWidth] = useState(0);


	useEffect(() => {
		const updateContainerWidth = () => {
			if (containerRef.current) {

				setContainerWidth(containerRef.current.offsetWidth);
			}
		};


		updateContainerWidth();
		window.addEventListener("resize", updateContainerWidth);

		return () => {
			window.removeEventListener("resize", updateContainerWidth);
		};
	}, []);


	const handleSliderChange = (e) => {
		const value = e.target.value;
		setSliderValue(value);
	};


	const innerContentStyle = {
		width: `${containerWidth}px`,
		flexShrink: 0,
	};

	return (
		<section id="optimize" className="py-12 pb-12">
			<h1 className="font-bold font-serif text-4xl text-center">
				Turn Repetitive Work into Strategic Advantage.
			</h1>


			<div
				className="relative w-full max-w-4xl mx-auto mt-12 overflow-hidden rounded-lg shadow-xl"
				ref={containerRef}
			>

				<div id="before-panel" className="h-96">
					<div
						className="bg-gray-200 h-96 p-8 border-4 border-gray-400 rounded-lg flex items-center"

						style={innerContentStyle}
					>

						<div className="w-1/2">
							<h3 className="text-2xl font-bold text-gray-800">BEFORE</h3>
							<h4 className="text-lg font-semibold text-gray-700 mt-2">
								The Daily Grind
							</h4>
							<ul className="list-disc list-inside mt-4 space-y-2 text-gray-900">
								<li>Hours lost to repetitive data entry.</li>
								<li>Decisions based on outdated spreadsheets.</li>
								<li>High risk of human errors.</li>
							</ul>
						</div>
						{/* Image Section */}
						<div className="w-1/2 flex items-center justify-center h-full">
							<img
								src={BeforeImage}
								alt="Manual, messy workflow"
								className="object-contain max-h-full max-w-full"
								loading="lazy"
								onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x300/f3f4f6/374151?text=Before+Image" }}
							/>
						</div>
					</div>
				</div>

				{/* -------------------- AFTER Panel (Sliding Overlay) -------------------- */}
				<div
					id="after-panel"
					ref={afterPanelRef}
					className="absolute inset-0 overflow-hidden z-10 transition-all duration-100 ease-in-out"

					style={{ width: `${sliderValue}%` }}
				>

					<div
						className="bg-blue-100 h-96 p-8 border-4 border-blue-500 rounded-lg flex items-center"
						style={innerContentStyle}
					>

						<div className="w-1/2">
							<h3 className="text-2xl font-bold text-blue-800">AFTER</h3>
							<h4 className="text-lg font-semibold text-blue-700 mt-2">
								Intelligent Automation
							</h4>
							<ul className="list-disc list-inside mt-4 space-y-2 text-blue-900">
								<li>Strategic tasks automated, freeing up team.</li>
								<li>Real-time dashboards for data-driven decisions.</li>
								<li>Near-zero error rate with validated workflows.</li>
							</ul>
						</div>
						{/* Image Section */}
						<div className="w-1/2 flex items-center justify-center h-full">
							<img
								src={AfterImage}
								alt="Streamlined, automated workflow with growth"
								className="object-contain max-h-full max-w-full"
								loading="lazy"
								onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x300/dbeafe/1e3a8a?text=After+Image" }}
							/>
						</div>
					</div>
				</div>

				{/* -------------------- Range Input (Functional Slider) -------------------- */}
				<input
					type="range"
					id="slider-handle"
					ref={sliderHandleRef}
					min="0"
					max="100"
					value={sliderValue}
					onChange={handleSliderChange}

					className="absolute inset-0 w-full h-full cursor-col-resize opacity-0 z-20"
				/>
				<div
					className="absolute top-0 bottom-0 z-30 flex items-center justify-center pointer-events-none transition-all duration-100 ease-in-out"
					style={{ left: `calc(${sliderValue}% - 4px)` }}
				>
					<div className="h-full w-1 bg-white shadow-md"></div>
					<div className="h-full w-1 ml-1 bg-blue-500 opacity-75 shadow-md"></div>
				</div>
			</div>
		</section>
	);
}

export default OptimizeSection;