import { motion } from "framer-motion";
import SecurityImage from "../assets/SecurityServices.jpg";
import ThreatDetection from "../assets/ThreatDetection.jpg";
import DataProtection from "../assets/DataProtection.jpg";
import NetworkSecurity from "../assets/NetworkSecurity.jpg";
import Compliance from "../assets/Compliance.jpg";

const SecurityServices = () => {
    const services = [
        {
            id: "threat_detection",
            title: "Threat Detection",
            description:
                "AI-powered monitoring that identifies and neutralizes risks before they escalate.",
            imageUrl: ThreatDetection,
        },
        {
            id: "data_protection",
            title: "Data Protection",
            description:
                "Enterprise-grade encryption and recovery protocols safeguard your most valuable asset.",
            imageUrl: DataProtection,
        },
        {
            id: "network_security",
            title: "Network Security",
            description:
                "Layered defenses and intrusion prevention that keep systems resilient and reliable.",
            imageUrl: NetworkSecurity,
        },
        {
            id: "compliance",
            title: "Regulatory Compliance",
            description:
                "Seamless adherence to GDPR, HIPAA, ISO, and other global security standards.",
            imageUrl: Compliance,
        },
    ];

    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-10 py-16">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <img
                    src={SecurityImage}
                    alt="Security Services"
                    loading="lazy"
                    className="w-full h-full object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                />
            </motion.div>

            <div className="flex flex-col justify-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    
                    className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-400 to-gray-200 bg-clip-text text-transparent p-6"
                >
                    Security isn’t an option. It’s the foundation of trust.
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-lg md:text-xl text-gray-300 px-6"
                >
                    We embed cutting-edge cybersecurity practices into every layer of your
                    business, keeping your assets and customers safe.
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

export default SecurityServices;
