import { useEffect, useState } from "react";

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-4 right-4 p-3 bg-purple-500 text-white rounded-full shadow-lg transition-transform transform z-50 hover:bg-purple-600 hover:scale-110 ${
                isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-label="Back to top"
        >
            <span className="text-2xl">↑</span>
        </button>
    );
};
export default BackToTop;
