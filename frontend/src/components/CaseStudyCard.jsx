export default function CaseStudyCard({ client, summary, componentId }) {
	return (
		<div data-trigger-for={componentId} className="min-h-[90vh]">
			<div className="sticky top-32">
				<h3 className="text-3xl font-bold text-gray-800">{client}</h3>
				<p className="mt-4 text-lg text-gray-600 max-w-md">{summary}</p>
				<button className="mt-6 font-semibold text-blue-600 hover:text-blue-800 transition">
				</button>
			</div>
		</div>
	);
}
