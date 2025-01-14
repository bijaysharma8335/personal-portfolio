import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsFacebook } from "react-icons/bs";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [status, setStatus] = useState(null); // To track form submission status

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Send data to Formspree
        const response = await fetch("https://formspree.io/f/mlddzqag", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            setStatus({
                message: "Thank you for your message . We will contact you very soon !",
                type: "success",
            }); // Success message
            setFormData({ name: "", email: "", phone: "", message: "" }); // Clear form

            // Hide the message after 4 seconds
            setTimeout(() => setStatus(null), 10000);
        } else {
            setStatus({ message: "Oops! Something went wrong. Please try again.", type: "error" });
        }
    };

    return (
        <section id="contact" className="py-16 bg-gray-900">
            <div className="mx-auto px-4">
                <h2 className="text-3xl font-bold text-teal-600 mb-6 text-left lg:pl-12 md:pl-6">
                    Let's Connect
                </h2>
            </div>

            <div className="max-w-8xl mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Right Column: Contact Info */}
                <motion.div
                    className="rounded-lg transition duration-300 ease-in-out"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <div className="space-y-4">
                        <motion.div
                            className="flex items-center"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        >
                            <div className="p-4">
                                <i className="fas fa-map-marker-alt text-teal-500 text-4xl"></i>
                            </div>
                            <p className="text-lg ml-2 mb-0 text-white">
                                Aswathnagar, Marathahalli, Bangalore, India
                            </p>
                        </motion.div>
                        <motion.div
                            className="flex items-center"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                        >
                            <div className="p-4">
                                <i className="fas fa-phone text-teal-500 text-4xl"></i>
                            </div>
                            <p className="text-lg ml-2 mb-0 text-white">+917619423657</p>
                        </motion.div>
                        <motion.div
                            className="flex items-center"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                        >
                            <div className="p-4">
                                <i className="fas fa-envelope text-teal-500 text-4xl"></i>
                            </div>
                            <p className="text-lg ml-2 mb-0 text-white">
                                bijaysharma8335@gmail.com
                            </p>
                        </motion.div>
                        <motion.div
                            className="flex space-x-6 mt-6"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
                        >
                            <div className="flex justify-start cursor-pointer text-gray-200 text-4xl my-5">
                                {/* Facebook Icon */}
                                <a
                                    href="https://www.facebook.com/bijay.sharma5311"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <BsFacebook className="mx-4 text-purple-500 hover:text-purple-600 transform hover:scale-110 transition duration-300 ease-in-out" />
                                </a>

                                {/* Instagram Icon */}
                                <a
                                    href="https://www.instagram.com//bijay.sharma5311"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaInstagram className="mx-4 text-purple-500 hover:text-purple-600 transform hover:scale-110 transition duration-300 ease-in-out" />
                                </a>

                                {/* LinkedIn Icon */}
                                <a
                                    href="https://www.linkedin.com/in/bijay-sharma-49b64a176/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <ImLinkedin2 className="mx-4 text-purple-500 hover:text-purple-600 transform hover:scale-110 transition duration-300 ease-in-out" />
                                </a>
                                {/* GitHub Icon */}
                                <a
                                    href="https://github.com/bijaysharma8335"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaGithub className="mx-4 text-purple-500 hover:text-purple-600 transform hover:scale-110 transition duration-300 ease-in-out" />
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Left Column: Contact Form */}
                <motion.div
                    className="p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out border"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 1 }}
                >
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-white font-semibold mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 bg-gray-900"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-white font-semibold mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 bg-gray-900"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phone" className="block text-white font-semibold mb-1">
                                Phone
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 bg-gray-900"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="message"
                                className="block text-white font-semibold mb-1"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 bg-gray-900"
                                rows="4"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="rounded-md py-2 px-4 bg-purple-500 text-white font-semibold hover:bg-purple-600 transition duration-300 ease-in-out"
                        >
                            Send Message
                        </button>
                    </form>
                    {status && (
                        <div
                            className={`mt-4 p-2 rounded ${
                                status.type === "success" ? "text-green-500 " : "text-red-500 "
                            }`}
                        >
                            {status.message}
                        </div>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
