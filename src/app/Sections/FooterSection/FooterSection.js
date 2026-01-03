import ImageConstraint from "@/utils/ImageConstraint";
import { DealerForm } from "./sub-component/DealerForm";

export default function FooterSection() {
    return (
        <div>
            <main className="w-full bg-[url('/assets/images/footer-bg.jpg')] bg-cover bg-center">
                <section className="flex flex-col md:flex-row md:items-start mx-2 md:mx-40  gap-6 md:gap-3">

                    {/* Left 3 content columns */}
                    <div className="flex flex-col md:flex-row w-full md:w-[70%] gap-6 md:gap-0 md:py-10">

                        {/* Quick Links */}
                        <div className="flex-1 flex flex-col">
                            <h2 className="relative text-white text-2xl font-semibold mb-4">
                                Quick Links
                                <div className="absolute -bottom-2 left-0 w-9 h-1 bg-orange-400"></div>
                            </h2>
                            <div className="flex flex-col gap-2.5 md:mt-3">
                                {["Home", "Products", "About Us", "Contact Us"].map((link, i) => (
                                    <a
                                        key={i}
                                        href="./"
                                        className="text-white text-base font-normal transition-all duration-500 ease-in-out hover:ml-3"
                                    >
                                        {link}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Our Products */}
                        <div className="flex-1 flex flex-col">
                            <h2 className="relative text-white text-2xl font-semibold mb-4">
                                Our Products
                                <div className="absolute -bottom-2 left-0 w-9 h-1 bg-orange-400"></div>
                            </h2>
                            <div className="flex flex-col gap-2.5  md:mt-3">
                                {["MS Square", "MS Flats", "MS Angles", "Z-Angles", "Gate Channel"].map((prod, i) => (
                                    <a
                                        key={i}
                                        href="./"
                                        className="text-white text-base font-normal transition-all duration-500 ease-in-out hover:ml-3"
                                    >
                                        {prod}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Contact Us */}
                        <div className="flex-1 flex flex-col">
                            <h2 className="relative text-white text-2xl font-semibold mb-4">
                                Contact Us
                                <div className="absolute -bottom-2 left-0 w-9 h-1 bg-orange-400"></div>
                            </h2>
                            <div className="flex flex-col gap-4 md:mt-3">
                                {/* Location */}
                                <section className="flex gap-2">
                                    <img
                                        src={ImageConstraint.FOOTER_SECTION.LOCATION}
                                        className="h-6 w-6 object-contain"
                                    />
                                    <div>
                                        <h4 className="text-white text-base font-normal">Location</h4>
                                        <p className="text-white text-base font-medium">
                                            Premise No. 16-360, DH 6/9, Action Area-1D, New Town, Barasat Sadar, North 24 Parganas, WB 700156, INDIA
                                        </p>
                                    </div>
                                </section>

                                {/* Support */}
                                <section className="flex gap-2">
                                    <img
                                        src={ImageConstraint.FOOTER_SECTION.ICON_MAIL}
                                        className="h-6 w-6 object-contain"
                                    />
                                    <div>
                                        <h4 className="text-white text-base font-normal">Support</h4>
                                        <p className="text-white text-base font-medium cursor-pointer transition-all duration-500 ease-in-out hover:ml-3">
                                            info@realedge.co.in
                                        </p>
                                    </div>
                                </section>

                                {/* Call Us */}
                                <section className="flex gap-2">
                                    <img
                                        src={ImageConstraint.FOOTER_SECTION.ICON_PHONE}
                                        className="h-6 w-6 object-contain"
                                    />
                                    <div>
                                        <h4 className="text-white text-base font-normal">Call Us</h4>
                                        <p className="text-white text-base font-medium cursor-pointer transition-all duration-500 ease-in-out hover:ml-3">
                                            1800 890 2868
                                        </p>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>

                    {/* Right empty colored column */}
                    <div className="w-full md:w-[30%] min-h-100 bg-[#F36F21] md:py-10 md:px-8">
                        <div className="flex-1 flex flex-col">
                            <h2 className="relative text-white text-2xl font-semibold mb-4">
                                Become dealer
                                <div className="absolute -bottom-2 left-0 w-9 h-1 bg-[#5B1629]"></div>
                            </h2>
                            <div className="flex flex-col gap-4 md:mt-3">
                                <DealerForm/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="px-2 md:px-40 py-4 border-t border-t-[#ffffff26]">
                    <p className="text-white text-base font-normal">© 2026. SRMB Realedge. All Rights Reserved.</p>
                </section>
            </main>
        </div >
    )
}