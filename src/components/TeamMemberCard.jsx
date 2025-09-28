import { useState } from "react";
import { X } from "lucide-react";

export default function TeamMemberCard({
	name,
	role,
	quote,
	imageUrl,
	blueprintUrl,
}) {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<>
			<div
				onClick={() => setIsModalOpen(true)}
				className="group cursor-pointer"
			>
				<div className="overflow-hidden rounded-lg">
					<img
						src={imageUrl}
						alt={name}
						className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
					/>
				</div>
				<h3 className="mt-4 text-xl font-bold text-gray-800">{name}</h3>
				<p className="text-gray-500">{role}</p>
			</div>

			{isModalOpen && (
				<div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
					<div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full relative">
						<button
							onClick={() => setIsModalOpen(false)}
							className="absolute top-4 right-4 text-gray-400 hover:text-gray-800"
						>
							<X size={24} />
						</button>
						<div className="p-8">
							<h2 className="text-3xl font-bold mb-2">{name}</h2>
							<p className="text-lg text-blue-600 font-semibold mb-6">{role}</p>

							<blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 mb-6">
								"{quote}"
							</blockquote>

							<h4 className="font-bold text-gray-800 mb-2">My Blueprint:</h4>
							<div className="border rounded-md bg-gray-50 p-4">
								<img
									src={blueprintUrl}
									alt={`Blueprint by ${name}`}
									className="w-full h-auto rounded"
								/>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
