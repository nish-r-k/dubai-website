const formatBlueprintForEmail = (answers) => {
	let body =
		"Hello, I'd like to discuss the Solution Blueprint generated on your website.\n\nHere are my goals:\n";
	for (const [question, answer] of Object.entries(answers)) {
		body += `- ${question}: ${answer}\n`;
	}
	return encodeURIComponent(body);
};

export default function BlueprintCTA({ answers }) {
	if (!answers) return null;

	const emailBody = formatBlueprintForEmail(answers);
	const mailtoLink = `mailto:hr@sisunitech.com?subject=Discussing My Solution Blueprint&body=${emailBody}`;

	return (
		<section className="bg-gray-900 text-white">
			<div className="container mx-auto px-4 py-20 text-center">
				<h2 className="text-4xl font-bold mb-4">Your blueprint is ready.</h2>
				<p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
					The next step is a conversation. Let's talk about how to make this
					plan a reality.
				</p>
				<a
					href={mailtoLink}
					className="bg-blue-600 text-white font-bold text-lg py-4 px-8 rounded-full 
                     hover:bg-blue-500 transition duration-300 shadow-lg"
				>
					Discuss Your Blueprint
				</a>
			</div>
		</section>
	);
}
