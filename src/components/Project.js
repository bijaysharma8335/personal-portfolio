import React, { useState } from "react";
import { motion } from "framer-motion";

import { projects } from "../data/data";

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    // Function to truncate description to 10 words
    const truncateDescription = (description) => {
        const words = description.split(" ");
        if (words.length > 10) {
            return words.slice(0, 10).join(" ") + "...";
        }
        return description;
    };

    return (
        <section id="projects" className="px-4 sm:px-8 lg:px-16 py-16">
            <h2 className="text-3xl font-bold text-teal-600 mb-8 ">Projects</h2>

            {/* Project Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        className="relative group  shadow-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out cursor-pointer"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        onClick={() => setSelectedProject(project)} // Set selected project
                    >
                        <img
                            src={project.imageUrl}
                            alt={project.title}
                            className="w-full h-48 object-cover group-hover:scale-105 group-hover:scale-y-110 transition-all duration-300 ease-in-out"
                        />
                        <div className="p-4">
                            <h3 className="text-teal-700 text-lg font-semibold">{project.title}</h3>
                            <p className="text-teal-600 text-sm">
                                {truncateDescription(project.description)}
                            </p>
                        </div>

                        {/* Hover Effect */}
                        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h3 className="text-white text-lg font-semibold">See More</h3>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Project Details Modal */}
            {selectedProject && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full p-6 relative">
                        {/* Close Button */}
                        <button
                            className="absolute top-3 right-3 text-teal-500 hover:text-gray-800 "
                            onClick={() => setSelectedProject(null)}
                        >
                            ✕
                        </button>

                        {/* Project Details */}
                        <h2 className="text-teal-700 text-xl font-bold mb-4">
                            {selectedProject.title}
                        </h2>
                        <p className="text-teal-700 mb-6">{selectedProject.description}</p>

                        <div className="flex flex-wrap space-x-2 mt-2">
                            {selectedProject.technologies.map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="text-xs text-teal-700 bg-teal-100 px-2 py-1 rounded-full mb-2"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="mt-2">
                            {selectedProject.tags &&
                                selectedProject.tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="text-xs text-teal-700 bg-teal-100 px-2 py-1 rounded-full mr-2 mb-2"
                                    >
                                        {tag}
                                    </span>
                                ))}
                        </div>

                        {/* Snapshots */}
                        <div className="my-6  max-h-96  overflow-y-auto">
                            <h3 className="text-teal-700 text-lg font-semibold mb-2">Snapshots:</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {selectedProject.snapshots.map((snapshot, index) => (
                                    <img
                                        key={index}
                                        src={snapshot}
                                        alt={`Snapshot ${index + 1}`}
                                        className="rounded-lg shadow-sm "
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Live Link */}
                        <a
                            href={selectedProject.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-6 py-3 bg-teal-700 text-white font-semibold rounded-lg shadow-sm hover:bg-teal-600 transition duration-300"
                        >
                            View Live
                        </a>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;
