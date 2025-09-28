import React from "react";

function ScrollIndicator() {
	return (
		<div className="absolute bottom-10 animate-pulse text-center">
			<p className="text-sm uppercase tracking-wider text-gray-400">
				Scroll to Begin
			</p>

			<div className="w-px h-12 bg-white/50 mx-auto mt-2"></div>
		</div>
	);
}

export default ScrollIndicator;
