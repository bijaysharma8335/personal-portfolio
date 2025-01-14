import React from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/images/profile.jpeg";
import { id } from "../data/data";

const Home = () => {
    return (
        <section
            id="home"
            className="min-h-screen py-12 flex flex-col md:flex-row justify-between items-center px-4 sm:px-8 lg:px-16"
        >
            {/* Content Section */}
            <motion.div
                className="md:text-left max-w-xl md:mt-0"
                style={{ paddingTop: "6rem" }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <h1 className="text-4xl md:text-6xl font-bold text-white">Hi, I'm</h1>
                <h1 className="text-4xl md:text-6xl font-bold text-purple-400">BIJAY SHARMA</h1>

                <p className="text-lg mt-4">
                    Web Developer Specializing in Modern Frontend Development
                </p>
                <p className="mt-4 text-lg text-white">
                    I work as a Software Developer in Bengaluru, India. I design user interfaces
                    with the MERN stack, Redux, and NodeJs.
                </p>
                <motion.div
                    className="mt-8 flex gap-4 justify-center md:justify-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                >
                    <a
                        href="#projects"
                        className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
                    >
                        View My Work
                    </a>
                    <a
                        href={`https://drive.google.com/uc?export=download&id=${id}`}
                        className="px-6 py-3 border border-purple-500 text-white rounded-lg hover:bg-gray-800"
                        download="Bijay_Sharma_Resume.pdf"
                    >
                        Download Resume
                    </a>
                </motion.div>
            </motion.div>

            {/* Image Section */}
            <motion.div
                className="mt-4 md:mt-0 flex justify-center md:justify-end"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            >
                <img
                    src={profileImage}
                    alt="Profile"
                    className="w-40 h-40 sm:w-50 sm:h-50 md:w-80 md:h-80 rounded-full  border-purple-500"
                />
            </motion.div>
        </section>
    );
};

export default Home;
