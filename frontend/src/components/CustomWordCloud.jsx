import React, { useState, useEffect, useRef } from "react";
import cloud from "d3-cloud";
import { scaleLinear } from "d3-scale";

function CustomWordCloud({ words, onWordClick, getWordColor }) {
	const [layoutWords, setLayoutWords] = useState([]);
	const containerRef = useRef(null);

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		const createCloud = () => {
			const width = container.offsetWidth;
			const height = container.offsetHeight;
			const fontScale = scaleLinear().domain([10, 100]).range([24, 84]);

			const layout = cloud()
				.size([width, height])
				.words(words.map((d) => ({ ...d, size: fontScale(d.value) })))
				.padding(5)
				.rotate(0)
				.font("sans-serif")
				.fontSize((d) => d.size)
				.on("end", (words) => {
					setLayoutWords(words);
				});

			layout.start();
		};

		createCloud();

		const resizeObserver = new ResizeObserver(createCloud);
		resizeObserver.observe(container);

		return () => resizeObserver.disconnect();
	}, [words]);

	return (
		<div ref={containerRef} className="relative w-full h-full">
			<div style={{ width: "100%", height: "100%", position: "relative" }}>
				{layoutWords.map((word) => (
					<span
						key={word.text}
						style={{
							position: "absolute",
							left: `50%`,
							top: `50%`,
							transform: `translate(${word.x}px, ${word.y}px)`,
							fontSize: word.size,
							color: getWordColor(word),
							cursor: "pointer",
							transition: "color 0.3s ease",
						}}
						onClick={() => onWordClick(word)}
					>
						{word.text}
					</span>
				))}
			</div>
		</div>
	);
}

export default CustomWordCloud;
