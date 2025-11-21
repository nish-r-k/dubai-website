import { FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import { SiPostgresql, SiMongodb, SiDocker } from "react-icons/si";

const tools = [
	{
		icon: <FaReact size={48} />,
		name: "React",
		why: "For building dynamic, high-performance user interfaces.",
	},
	{
		icon: <FaNodeJs size={48} />,
		name: "Node.js",
		why: "For creating fast, scalable backend services.",
	},
	{
		icon: <FaAws size={48} />,
		name: "AWS",
		why: "For robust, secure, and scalable cloud infrastructure.",
	},
	{
		icon: <SiPostgresql size={48} />,
		name: "PostgreSQL",
		why: "For reliable, structured data management and integrity.",
	},
	{
		icon: <SiMongodb size={48} />,
		name: "MongoDB",
		why: "For flexible, unstructured data and rapid prototyping.",
	},
	{
		icon: <SiDocker size={48} />,
		name: "Docker",
		why: "For consistent, containerized application deployments.",
	},
];

export default function DGToolshedSection() {
	return (
		<section className="bg-black text-white py-20 lg:py-32 border-t border-white/10">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold">From the Toolshed</h2>
					<p className="text-lg text-gray-300 mt-2">
						The trusted instruments we use to cultivate success.
					</p>
				</div>
				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
					{tools.map((tool, index) => (
						<div
							key={index}
							className="group relative flex flex-col items-center text-center"
						>
							<div className="text-5xl text-gray-400 transition-all duration-300 group-hover:text-white group-hover:scale-110">
								{tool.icon}
							</div>
							<p className="mt-4 font-semibold">{tool.name}</p>

							<div
								className="absolute bottom-full mb-2 w-48 p-3 bg-gray-800 text-white text-xs rounded-lg shadow-lg 
                              opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
							>
								{tool.why}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
