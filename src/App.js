import React, { useEffect, useState } from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Projects from "./components/Project";
import AboutUs from "./components/About";
import Home from "./components/Home";
import BackToTop from "./components/BackToTop";

function App() {
    const [loading, setLoading] = useState(true); // State to track loading
    const [loadingTime, setLoadingTime] = useState(0); // State to track the loading time

    // useEffect(() => {
    //     // Start loading time when the app starts loading
    //     const startTime = performance.now();

    //     // Simulate a loading time with setTimeout or use it with actual data fetching if needed
    //     const loadTimer = setTimeout(() => {
    //         const endTime = performance.now();
    //         const timeTaken = ((endTime - startTime) / 1000).toFixed(2); // Calculate time in seconds
    //         setLoadingTime(timeTaken); // Set the loading time state
    //         setLoading(false); // Set loading to false once done
    //     }, 3000); // Simulate a 3-second loading time

    //     return () => clearTimeout(loadTimer); // Clean up timer on component unmount
    // }, []);

    return (
        <>
            {" "}
            {/* {loading && (
                 <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center z-50">
                 <div className="border-4 border-teal-600 border-opacity-10 border-t-4 border-t-teal-6 rounded-full w-12 h-12 animate-spin"></div>
               </div>
            )} */}
            {/* {!loading && ( */}
            <div className="font-roboto bg-gray-900 text-white ">
                <Header />
                {/* Home Section */}
                <Home />

                {/* Skills Section */}

                <AboutUs />

                {/* Projects Section */}
                <Projects />
                {/* Contact Section */}
                <Contact />
                <BackToTop />
                <hr className="border-t-1 border-purple-500" />

                {/* Footer */}
                <footer className=" text-white py-4">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <p>© 2025 Bijay Sharma</p>
                    </div>
                </footer>
            </div>
            {/* )} */}
        </>
    );
}

export default App;
