import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import ServiceDetailModal from "./ServiceDetailModal";

import { servicesData } from "../utils/blueprintLogic";

function BlueprintSection({ blueprint }) {
	const [selectedService, setSelectedService] = useState(null);

	const handleOpenModal = (serviceName) => {
		setSelectedService(servicesData[serviceName]);
	};
	const handleCloseModal = () => {
		setSelectedService(null);
	};

	return (
		<>
			<section className="bg-white py-20 lg:py-32">
				<div className="container mx-auto px-4">
					<div className="text-center max-w-3xl mx-auto">
						<h2 className="text-4xl font-bold text-gray-800">
							Your Custom Solution Blueprint
						</h2>
						<p className="text-lg text-gray-600 mt-2">
							Based on your goals, here is our recommended path to success.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-16">
						{/* Core Services */}
						<div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
							<h3 className="text-2xl font-bold text-gray-900 mb-4">
								Core Services
							</h3>
							<ul className="space-y-3">
								{blueprint.core.map((service) => (
									<li key={service}>
										<button
											onClick={() => handleOpenModal(service)}
											className="flex items-center text-left w-full hover:text-blue-600"
										>
											<CheckCircle2
												size={20}
												className="text-green-500 mr-3 flex-shrink-0"
											/>{" "}
											<span className="font-semibold">{service}</span>
										</button>
									</li>
								))}
							</ul>
						</div>

						<div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
							<h3 className="text-2xl font-bold text-gray-900 mb-4">
								Recommended for Growth
							</h3>
							<ul className="space-y-3">
								{blueprint.recommended.map((service) => (
									<li key={service}>
										<button
											onClick={() => handleOpenModal(service)}
											className="flex items-center text-left w-full hover:text-blue-600"
										>
											<CheckCircle2
												size={20}
												className="text-blue-500 mr-3 flex-shrink-0"
											/>{" "}
											<span>{service}</span>
										</button>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>
			<ServiceDetailModal
				service={selectedService}
				onClose={handleCloseModal}
			/>
		</>
	);
}

export default BlueprintSection;
