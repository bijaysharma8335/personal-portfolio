import React, { useState } from "react";

const Header = () => {
    // Track the active link
    const [activeLink, setActiveLink] = useState("");

    // Track the mobile menu state (open or closed)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Function to handle the active link change when a navigation item is clicked
    const handleLinkClick = (section) => {
        setActiveLink(section);
        if (isMobileMenuOpen) {
            setIsMobileMenuOpen(false); // Close the mobile menu on click
        }
    };

    return (
        <header className="fixed w-full bg-gray-900 shadow-md z-50 px-4 md:px-8 lg:px-16">
            <div className="max-w-8xl mx-auto py-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-teal-500">BIJAY </div>

                {/* Navigation Menu */}
                <nav className="hidden md:flex space-x-6">
                    {["home", "about", "projects", "contact"].map((link) => (
                        <a
                            key={link}
                            href={`#${link}`}
                            onClick={() => handleLinkClick(link)}
                            className={`text-white hover:text-purple-500 transition duration-300 ${
                                activeLink === link ? "text-purple-500" : ""
                            }`}
                        >
                            {link.toUpperCase()}
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-white"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-gray-800 py-4 px-6 space-y-4">
                    {["home", "about", "projects", "contact"].map((link) => (
                        <a
                            key={link}
                            href={`#${link}`}
                            onClick={() => handleLinkClick(link)}
                            className={`block text-white hover:text-purple-500 transition duration-300 ${
                                activeLink === link ? "text-purple-500" : ""
                            }`}
                        >
                            {link.toUpperCase()}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Header;
