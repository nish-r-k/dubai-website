import { X, Check } from "lucide-react";

export default function ServiceDetailModal({ service, onClose }) {
	if (!service) return null;

	return (
		<div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 animate-fade-in">
			<div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full relative">
				<button
					onClick={onClose}
					className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition"
				>
					<X size={28} />
				</button>
				<div className="p-8 md:p-12">
					<h2 className="text-3xl font-bold text-gray-800">{service.title}</h2>
					<p className="text-lg text-gray-600 mt-2 mb-6">
						{service.description}
					</p>
					<div className="space-y-4">
						<div>
							<h3 className="font-semibold text-lg mb-2">Key Deliverables:</h3>
							<ul className="space-y-2">
								{service.deliverables.map((item) => (
									<li key={item} className="flex items-start">
										<Check
											size={18}
											className="text-green-500 mr-3 mt-1 flex-shrink-0"
										/>{" "}
										<span>{item}</span>
									</li>
								))}
							</ul>
						</div>
						{service.tech.length > 0 && (
							<div>
								<h3 className="font-semibold text-lg mt-6 mb-3">
									Technologies We Use:
								</h3>
								<div className="flex flex-wrap gap-4">
									{service.tech.map((TechIcon, index) => (
										<div key={index} className="text-3xl text-gray-600">
											<TechIcon />
										</div>
									))}
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
