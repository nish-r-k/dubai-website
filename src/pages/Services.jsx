import { useState } from "react";
import DiagnosisSection from "../components/DiagnosisSection";
import ConsultationQuiz from "../components/ConsultationQuiz";
import BlueprintSection from "../components/BlueprintSection";
import TechStackSection from "../components/TechStackSection";
import RoadmapSection from "../components/RoadmapSection";
import BlueprintCTA from "../components/BlueprintCTA";

import { generateBlueprint } from "../utils/blueprintLogic";

const Services = () => {
	const [activeGoal, setActiveGoal] = useState(null);
	const [quizAnswers, setQuizAnswers] = useState(null);

	const handleGoalSelect = (goal) => {
		setActiveGoal(goal);
	};

	const handleQuizComplete = (answers) => {
		setQuizAnswers(answers);
	};

	const renderContent = () => {
		if (quizAnswers) {
			const blueprint = generateBlueprint(quizAnswers);
			return (
				<>
					<BlueprintSection blueprint={blueprint} />
					<TechStackSection blueprint={blueprint} />
					<RoadmapSection />
					<BlueprintCTA answers={quizAnswers} />
				</>
			);
		}
		if (activeGoal) {
			return (
				<ConsultationQuiz
					goal={activeGoal}
					onQuizComplete={handleQuizComplete}
				/>
			);
		}
		return <DiagnosisSection onGoalSelect={handleGoalSelect} />;
	};

	return <div>{renderContent()}</div>;
};

export default Services;
