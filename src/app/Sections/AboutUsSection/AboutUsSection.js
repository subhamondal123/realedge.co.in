import Colors from "@/enums/Colors";
import Seperator from "@/sharedComponents/Seperator/Seperator";


export function AboutUsSection() {
    return (
        <div>
            <main className="px-2 py-2 md:px-8 md:py-9">
                <div className="justify-center items-center flex flex-col mb-5">
                    <h1 className={`items-center text-[50px] font-semibold`} style={{ color: Colors.PURPLE.BURGUNDY }}>About Us</h1>
                    <div className="text-xl font-medium" style={{ color: Colors.BLACK.RAISIN_BLACK }}>Realedge Grill Solution in India</div>
                </div>
                {/* Separator */}
                <Seperator />
                {/* body */}
                <div className="flex flex-col md:flex-row items-stretch gap-2.5 md:px-30">
                    <div className="w-full md:w-2/5">
                        <img src="https://realedge.co.in/adminprod/wp-content/uploads/2024/11/compress-scaled.jpg" alt="SRMB Realedge factory" id="about-img" />
                    </div>
                    <div className="w-full md:w-3/5 md:ml-2 flex flex-col justify-between">
                        <div>
                            <p style={{ color: Colors.GRAY.SLATE_GRAY }} className="font-normal">
                                Real Edge is rolled from superior quality billets produced at SRMB’s own plant to ensure consistent quality. All billets are cast from superior quality ore. The billets are tested to maintain the certified composition of Carbon, Sulphur & Phosphorus in the MS sections which makes it the best choice for fabrication. SRMB Srijan Private Limited is an IMS (ISO 9001:2015/ISO 14001: 2015/OHSAS 8001:2007) certified six decades-old Primary Steel Producer (classified by Joint Plant Committee under Ministry of Steel). We manufacture TMT bars, CRS TMT Bars & Structural items with a turnover of more than 1600 crore per annum. SRMB manufactures TMT Bars and structural steel from its captive raw material (billet) in the two state-of-the-art finished steel production units in Durgapur (West Bengal).                        </p>

                        </div>
                        {/* know more button */}
                        <button className="mt-auto relative self-center md:self-start overflow-hidden text-[18px] font-medium rounded-4xl md:px-7.5 md:py-3.5 px-2 py-1 text-white group cursor-pointer">
                            {/* Base background */}
                            <span className="absolute inset-0 bg-[#F36F21] z-0"></span>
                            {/* Animated background */}
                            <span className="absolute inset-0 bg-[#5B1629] z-10 rounded-xl group-hover:rounded-4xl transform -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
                            {/* Button text */}
                            <span className="relative z-20">Know More</span>
                        </button>
                    </div>
                </div>
            </main>
        </div>
    )
}