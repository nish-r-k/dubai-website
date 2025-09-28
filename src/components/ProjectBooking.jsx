import { InlineWidget } from "react-calendly";

export default function ProjectBooking() {
	return (
		<div className="max-w-4xl mx-auto">
			<div className="mb-6 text-center">
				<h2 className="text-3xl font-bold text-gray-900">
					Let's Build Your Next Project
				</h2>
				<p className="text-gray-600 mt-2">
					The fastest way to start is to book a free discovery call. Pick a time
					that works for you below.
				</p>
			</div>

			<div className="h-[700px] overflow-hidden rounded-lg border border-gray-200 shadow-lg">
				<InlineWidget
					url="https://calendly.com/sisunitechnology/30min"
					styles={{
						height: "700px",
					}}
				/>
			</div>
		</div>
	);
}
