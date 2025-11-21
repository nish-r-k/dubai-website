import { FaReact, FaNodeJs, FaAws, FaFigma } from "react-icons/fa";

export const servicesData = {
	"Web Application Development": {
		title: "Web Application Development",
		description:
			"We build high-performance, scalable web applications tailored to your business needs.",
		deliverables: [
			"Source Code Repository",
			"Deployed Application",
			"Technical Documentation",
		],
		tech: [FaReact, FaNodeJs],
	},
	"Mobile App Development": {
		title: "Mobile App Development",
		description:
			"We create seamless native and cross-platform mobile apps for iOS and Android.",
		deliverables: [
			"App Store Submission",
			"Source Code",
			"User Analytics Setup",
		],
		tech: [FaReact],
	},
	"UI/UX Design": {
		title: "UI/UX Design",
		description:
			"Our user-centric approach ensures your product is intuitive, engaging, and beautiful.",
		deliverables: [
			"High-Fidelity Prototypes",
			"User Personas",
			"Complete Design System",
		],
		tech: [FaFigma],
	},
	"Cloud Deployment": {
		title: "Cloud Deployment",
		description:
			"We deploy your applications on robust, scalable cloud infrastructure for peak performance.",
		deliverables: [
			"Scalable Architecture",
			"CI/CD Pipeline",
			"24/7 Monitoring Setup",
		],
		tech: [FaAws],
	},
	"Data Protection": {
		title: "Data Protection",
		description:
			"We implement security best practices to protect your data and ensure compliance.",
		deliverables: [
			"Security Audit",
			"Encryption Strategy",
			"Compliance Report",
		],
		tech: [],
	},
	"Process Optimization": {
		title: "Process Optimization",
		description:
			"We analyze and automate your business processes to increase efficiency and reduce costs.",
		deliverables: [
			"Workflow Analysis",
			"Automation Plan",
			"Performance Dashboard",
		],
		tech: [],
	},
};

export const generateBlueprint = (answers) => {
	let blueprint = { core: [], recommended: [] };
	if (!answers) return blueprint;

	if (
		answers["What are you building?"] === "A Web App" ||
		answers["What are you building?"] === "Both"
	) {
		blueprint.core.push("Web Application Development");
	}
	if (
		answers["What are you building?"] === "A Mobile App" ||
		answers["What are you building?"] === "Both"
	) {
		blueprint.core.push("Mobile App Development");
	}
	if (answers["What's your top priority?"] === "User Experience") {
		blueprint.core.push("UI/UX Design");
	} else {
		blueprint.recommended.push("UI/UX Design");
	}
	if (answers["What is the current stage?"] === "Ready to Build") {
		blueprint.core.push("Cloud Deployment");
	}

	blueprint.recommended.push("Data Protection");
	blueprint.recommended.push("Process Optimization");

	return blueprint;
};
