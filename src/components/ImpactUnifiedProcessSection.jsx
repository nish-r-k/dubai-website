import { Database, ShieldAlert, Zap, BarChart2 } from "lucide-react";

export default function UnifiedProcessSection() {
	return (
		<section className="bg-white py-20 lg:py-32">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-gray-800">
						Synergy in Action
					</h2>
					<p className="text-lg text-gray-600 mt-2 max-w-3xl mx-auto">
						Our services aren't silos. They are integrated components of a
						single, intelligent engine designed to drive results.
					</p>
				</div>

				<div className="max-w-4xl mx-auto p-8 border border-gray-200 rounded-xl shadow-2xl bg-gray-50/50">
					<div className="flex justify-between items-center border-b pb-4">
						<h3 className="font-bold text-lg">Live Process Simulation</h3>
						<div className="flex items-center gap-2 text-green-500">
							<div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
							<span>System Operational</span>
						</div>
					</div>

					<div className="mt-6 space-y-4">
						<div
							className="flex items-center gap-4 p-4 rounded-lg animate-event-fade-in"
							style={{ animationDelay: "0.5s" }}
						>
							<Database size={24} className="text-blue-500 flex-shrink-0" />
							<p>
								<span className="font-semibold">Data Ingested:</span> New user
								activity detected and processed.
							</p>
						</div>

						<div
							className="flex items-center gap-4 p-4 rounded-lg bg-red-50 border border-red-200 animate-event-fade-in"
							style={{ animationDelay: "1.5s" }}
						>
							<ShieldAlert size={24} className="text-red-500 flex-shrink-0" />
							<p>
								<span className="font-semibold text-red-600">
									Threat Detected:
								</span>{" "}
								Anomalous pattern identified by our security layer.
							</p>
						</div>

						<div
							className="flex items-center gap-4 p-4 rounded-lg bg-yellow-50 border border-yellow-200 animate-event-fade-in"
							style={{ animationDelay: "2.5s" }}
						>
							<Zap size={24} className="text-yellow-500 flex-shrink-0" />
							<p>
								<span className="font-semibold text-yellow-600">
									Automated Response:
								</span>{" "}
								Workflow triggered to isolate and neutralize the threat.
							</p>
						</div>

						<div
							className="flex items-center gap-4 p-4 rounded-lg bg-green-50 border border-green-200 animate-event-fade-in"
							style={{ animationDelay: "3.5s" }}
						>
							<BarChart2 size={24} className="text-green-500 flex-shrink-0" />
							<p>
								<span className="font-semibold text-green-600">
									Impact Analyzed:
								</span>{" "}
								System stable. An incident report was automatically generated
								and delivered.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
