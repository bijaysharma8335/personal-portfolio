import React from "react";
import Resume from "./Resume";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { skills } from "../data/data";

const AboutUs = () => {
    return (
        <section id="about" className="py-12 bg-gray-900">
            <div className="max-w-8xl mx-auto px-4 md:px-8 lg:px-16">
                <div className="text-center mb-10"></div>

                {/* Skills Section */}

                <h2 className="text-3xl  text-teal-600 font-bold mb-8 ">My Skills</h2>

                <div className="w-full my-12">
                    <Marquee
                        gradient={false}
                        speed={80}
                        pauseOnHover={true}
                        pauseOnClick={true}
                        delay={0}
                        play={true}
                        direction="left"
                    >
                        {skills.map((skill, id) => (
                            <motion.div
                                className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
                                key={id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.1 * id }}
                            >
                                <motion.div
                                    className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-teal-500 transition-all duration-500"
                                    whileHover={{
                                        scale: 1.1,
                                        backgroundColor: "#1e2b38",
                                        boxShadow: "0 4px 20px rgba(0, 255, 255, 0.3)",
                                    }}
                                >
                                    <div className="flex -translate-y-[1px] justify-center">
                                        <div className="w-3/4">
                                            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center justify-center gap-3 p-6">
                                        <div className="h-8 sm:h-10">
                                            <motion.img
                                                src={skill.image}
                                                alt={skill.name}
                                                width={40}
                                                height={40}
                                                className="h-full w-auto rounded-lg"
                                                whileHover={{ scale: 1.2 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        </div>
                                        <p className="text-white text-sm sm:text-lg group-hover:text-teal-500">
                                            {skill.name}
                                        </p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </Marquee>
                </div>
            </div>
            <Resume />
        </section>
    );
};

export default AboutUs;
