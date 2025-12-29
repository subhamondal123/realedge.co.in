import Navbar from "../Navbar/Navbar";

export default function ClientWrapper({ children }) {
    const showNavbar = true;
    return (
        <div className="bg-[radial-gradient(circle,white_0%,#FCF6FA_73%,#F5BCCF_100%)]">
            {showNavbar && <Navbar />}
            <main>
                {children}
            </main>
        </div>
    )
}