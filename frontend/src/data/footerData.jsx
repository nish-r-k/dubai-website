import React from "react";

import {
	FileText,
	Star,
	Bot,
	Briefcase,
	Mail,
	Linkedin,
	Twitter,
} from "lucide-react";

export const tickerItems = [
	"New project started in FinTech",
	"Published 'The Future of AI' on The Playbook",
	"Team member joined in Engineering",
	"Partnership formed with InnovateCo",
	"Hosted a workshop on Cloud Security",
];

export const matrixLinks = {
	Explore: [
		{ title: "Our Impact", href: "/impact", icon: <Star size={14} /> },
		{ title: "Digital Garden", href: "/digital-garden", icon: <Bot size={14} /> },
		{ title: "Future With Us", href: "/careers", icon: <Briefcase size={14} /> },
	],
	Connect: [
		{ title: "Let's Talk", href: "/contact", icon: <Mail size={14} /> },
		{ title: "Twitter", href: "/contact", icon: <Twitter size={14} /> },
		{ title: "LinkedIn", href: "/contact", icon: <Linkedin size={14} /> },
	],
};
