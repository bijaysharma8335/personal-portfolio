import React from "react";
import { motion } from "framer-motion";

const Resume = () => {
    return (
        <div className=" mx-auto px-1 pl-4 md:px-8 lg:px-16">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <h2 className="text-3xl font-bold text-teal-600 mb-4">Professional Experience</h2>
                <div className="space-y-10">
                    <motion.div
                        className="flex items-start"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                    >
                        <div className="ml-8">
                            <h3 className="text-xl font-semibold text-white">
                                Junior Software Developer
                            </h3>
                            <h4 className="text-teal-500 text-sm">
                                GA Morgan Dynamics Pvt Ltd, Bangalore
                            </h4>
                            <p className="text-gray-200 mt-2 ">
                                Worked on designing user-friendly interfaces with the MERN stack,
                                improving user engagement by 25%.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Education Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            >
                <h2 className="text-3xl font-bold text-teal-600 mb-4">Academics</h2>
                <div className="space-y-10 ">
                    <motion.div
                        className="flex items-start"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
                    >
                        <div className="ml-8">
                            <h3 className="text-xl font-semibold text-white">
                                Bachelor of Engineering in Computer Science
                            </h3>
                            <h4 className="text-teal-500 text-sm">
                                Bangalore Technological Institute, Bangalore
                            </h4>
                            <p className="text-gray-200 mt-2">
                                Graduated with First Class [2016-2020]
                            </p>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default Resume;
