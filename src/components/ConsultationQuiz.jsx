import React, { useState, useMemo } from "react";

const quizData = {
	launch: [
		{
			question: "What are you building?",
			options: ["A Web App", "A Mobile App", "Both"],
		},
		{
			question: "What is the current stage?",
			options: ["Just an Idea", "I Have Designs", "Ready to Build"],
		},
		{
			question: "What's your top priority?",
			options: ["Speed to Market", "User Experience", "Scalability"],
		},
	],
	optimize: [
		{
			question: "What system needs optimization?",
			options: ["Business Processes", "User Experience", "App Performance"],
		},
		{
			question: "What is your primary goal?",
			options: ["Increase Efficiency", "Reduce Costs", "Improve Engagement"],
		},
	],
	secure: [
		{
			question: "What is your main security concern?",
			options: ["Data Protection", "Network Security", "Compliance"],
		},
		{
			question: "What is your industry?",
			options: ["FinTech", "Healthcare", "E-commerce", "Other"],
		},
	],
};

export default function ConsultationQuiz({ goal, onQuizComplete }) {
	const [currentStep, setCurrentStep] = useState(0);
	const [answers, setAnswers] = useState({});

	const currentQuestion = useMemo(() => {
		const questions = quizData[goal] || [];
		return questions[currentStep];
	}, [goal, currentStep]);

	const handleAnswer = (option) => {
		const newAnswers = { ...answers, [currentQuestion.question]: option };
		setAnswers(newAnswers);

		const questions = quizData[goal] || [];
		if (currentStep < questions.length - 1) {
			setCurrentStep(currentStep + 1);
		} else {
			onQuizComplete(newAnswers);
		}
	};

	return (
		<section className="min-h-screen bg-white flex items-center justify-center py-20">
			<div className="container mx-auto px-4 text-center max-w-2xl">
				{currentQuestion ? (
					<div className="animate-fade-in">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
							{currentQuestion.question}
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
							{currentQuestion.options.map((option) => (
								<button
									key={option}
									onClick={() => handleAnswer(option)}
									className="p-6 bg-white border-2 border-gray-200 rounded-lg font-semibold
                                               hover:border-blue-500 hover:bg-blue-50 transition-all"
								>
									{option}
								</button>
							))}
						</div>
					</div>
				) : (
					<p>Finishing up...</p>
				)}
			</div>
		</section>
	);
}
