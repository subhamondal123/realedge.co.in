'use client'

import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";

export default function ClientWrapper({ children }) {
    const showNavbar = true;
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };


    return (
        <div className="min-h-screen bg-[radial-gradient(circle,white_0%,#FCF6FA_73%,#F5BCCF_100%)]">
            {showNavbar && <Navbar />}
            <main >
                {children}
            </main>
            {/* Scroll to top button */}
            <button
                onClick={scrollToTop}
                className={`
                        fixed bottom-6 right-6 z-50 px-3 rounded-[10px] bg-orange-500 text-white shadow-lg
                        transition-opacity duration-500 cursor-pointer
                        ${showButton ? "opacity-100" : "opacity-0 pointer-events-none"}
                        `}
            >
                <span className="text-4xl">↑</span>
            </button>
        </div>
    )
}