export default function GoalCard({ icon, title, description, onClick }) {
	return (
		<button
			onClick={onClick}
			className="block p-8 text-center bg-white border border-gray-200 rounded-xl
                 group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
		>
			<div className="inline-block p-4 bg-gray-100 rounded-full group-hover:bg-gray-200 transition-colors">
				{icon}
			</div>
			<h3 className="text-2xl font-bold text-gray-900 mt-6">{title}</h3>
			<p className="text-gray-600 mt-2">{description}</p>
		</button>
	);
}
