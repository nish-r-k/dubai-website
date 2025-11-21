import { useState, Suspense, lazy } from "react";
import { motion } from "framer-motion";
import AppServicesImage from "../assets/AppServices.jpg";
import CybersecurityImage from "../assets/CubersecurityServices.jpg";
import AutomationImage from "../assets/AiAuomationServices.jpg";
import PlatformServices from "./PlatformServices";
import SecurityServices from "./SecurityServices";
import AutomationServices from "./AutomationServices";

const CoreDicipline = () => {
    const serviceTabs = [
        { id: "platforms", title: "Digital Platforms", imageUrl: AppServicesImage },
        { id: "security", title: "Cybersecurity", imageUrl: CybersecurityImage },
        { id: "automation", title: "Automation", imageUrl: AutomationImage },
    ];

    const [selectedService, setSelectedService] = useState(serviceTabs[0].id);

    return (
        
        <div className="min-h-screen w-full bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white pt-16">
            <section className="flex flex-col items-center justify-center text-center h-[50vh] px-6">
                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    
                    className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-400 to-gray-200 bg-clip-text text-transparent"
                >
                    From Blueprint to Breakthrough
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-lg md:text-xl mt-4 max-w-2xl text-gray-300"
                >
                    We provide end-to-end technology solutions, engineered with
                    intelligence and built for lasting impact.
                </motion.p>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() =>
                        document.getElementById("services-section").scrollIntoView({
                            behavior: "smooth",
                        })
                    }
                    
                    className="bg-gradient-to-r from-gray-600 to-gray-400 text-white px-6 py-3 rounded-full mt-8 shadow-lg hover:shadow-[0_0_20px_rgba(156,163,175,0.8)] transition"
                >
                    Explore Our Services
                </motion.button>
            </section>

            <section id="services-section" className="px-6 lg:px-12 py-16">
                <div className="container mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Our Core Disciplines
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {serviceTabs.map((srv) => (
                            <motion.div
                                key={srv.id}
                                onClick={() => setSelectedService(srv.id)}
                                whileHover={{ scale: 1.05 }}
                               
                                className={`cursor-pointer bg-gray-800 rounded-xl p-6 text-center shadow-lg transition ${
                                    selectedService === srv.id
                                        ? "border-4 border-gray-400 shadow-[0_0_25px_rgba(156,163,175,0.8)]"
                                        : "hover:border hover:border-gray-600"
                                }`}
                            >
                                <img
                                    src={srv.imageUrl}
                                    alt={srv.title}
                                    loading="lazy"
                                    className="w-full h-48 object-cover rounded-lg mb-4"
                                />
                                <h3 className="text-xl font-semibold">{srv.title}</h3>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16">
                        {selectedService === "platforms" && <PlatformServices />}
                        {selectedService === "security" && <SecurityServices />}
                        {selectedService === "automation" && <AutomationServices />}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default CoreDicipline;
