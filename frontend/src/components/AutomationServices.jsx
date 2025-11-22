import { motion } from "framer-motion";
import AutomationMain from "../assets/AutomationMain.jpg";
import AIWorkflows from "../assets/AIWorkflows.jpg";
import RPA from "../assets/RPA.jpg";
import PredictiveAnalytics from "../assets/PredictiveAnalytics.jpg";
import ProcessOptimization from "../assets/ProcessOptimization.jpg";

const AutomationServices = () => {
    const services = [
        {
            id: "ai_workflows",
            title: "AI Workflows",
            description:
                "Intelligent pipelines that learn, adapt, and automate your repetitive tasks.",
            imageUrl: AIWorkflows,
        },
        {
            id: "rpa",
            title: "Robotic Process Automation",
            description:
                "Digital workforce that eliminates bottlenecks and boosts efficiency 24/7.",
            imageUrl: RPA,
        },
        {
            id: "predictive_analytics",
            title: "Predictive Analytics",
            description:
                "Data-driven insights that forecast outcomes and guide smarter decisions.",
            imageUrl: PredictiveAnalytics,
        },
        {
            id: "process_optimization",
            title: "Process Optimization",
            description:
                "Streamlined operations engineered for agility, scalability, and performance.",
            imageUrl: ProcessOptimization,
        },
    ];

    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-10 py-16">
            {/* Left */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <img
                    src={AutomationMain}
                    alt="Automation Services"
                    loading="lazy"
                    className="w-full h-full object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                />
            </motion.div>

            {/* Right */}
            <div className="flex flex-col justify-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  
                    className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-400 to-gray-200 bg-clip-text text-transparent p-6"
                >
                    Automate the present. Innovate the future.
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-lg md:text-xl text-gray-300 px-6"
                >
                    From robotic process automation to predictive intelligence, we help
                    businesses transform inefficiencies into exponential growth.
                </motion.p>

                <div className="flex flex-wrap gap-6 p-6 justify-center">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2, duration: 0.6 }}
                            whileHover={{ scale: 1.05 }}
                            className="flex flex-col items-center bg-gray-800 rounded-xl p-6 w-[300px] hover:shadow-[0_0_25px_rgba(156,163,175,0.7)] border border-gray-600 hover:border-gray-400 transition-all"
                        >
                            <img
                                src={service.imageUrl}
                                alt={service.title}
                                loading="lazy"
                                className="w-full h-40 object-cover rounded-lg"
                            />
                           
                            <h2 className="text-xl font-semibold text-gray-400 mt-4 text-center">
                                {service.title}
                            </h2>
                            <p className="text-gray-400 text-center mt-2 text-sm">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AutomationServices;
