import Colors from "@/enums/Colors";
import Seperator from "@/sharedComponents/Seperator/Seperator";
import ImageConstraint from "@/utils/ImageConstraint";

export default function OurCurrentTrationSection() {
    return (
        <>
            <main className="px-2 py-2 md:px-8 md:py-9">
                <div className="justify-center items-center flex flex-col mb-5">
                    <h1 className={`items-center text-[50px] font-semibold`} style={{ color: Colors.PURPLE.BURGUNDY }}>Our Current Traction</h1>
                    <div className="text-xl font-medium" style={{ color: Colors.BLACK.RAISIN_BLACK }}>Traction</div>
                </div>
                {/* Separator */}
                <Seperator />
                <div className="mx-2 md:mx-30">
                    <div className="grid grid-cols-1 sm:grid-cols-4">
                        <div className="relative flex flex-col justify-start cursor-pointer group">
                            <div className="hidden md:block absolute right-0 top-[10%] h-[80%] w-px bg-[#5D6C7C]"></div>
                            <div className="flex flex-col relative items-start">
                                <div>
                                    <img src={ImageConstraint.CURRENT_TRACTION_SECTION.ICON_SHIELD} className="h-17 w-auto object-contain transform transition-all duration-300 ease-in-out group-hover:h-19" />
                                </div>
                                <div className="absolute top-14 w-15 h-15 rounded-full bg-[#5B16291A]"></div>
                                <h3 className="my-2 font-bold text-[54px] text-[#5B1629] transform transition-all duration-300 ease-in-out group-hover:text-[60px] group-hover:my-0 group-hover:scale-x-110">TOP 5</h3>
                            </div>
                            <label className="text-[#5D6C7C] text-base font-normal transform transition-all duration-300 ease-in-out group-hover:tracking-[1px]">India's Most Diversified Product</label>
                        </div>

                        <div className="relative flex flex-col items-center cursor-pointer group">
                            <div className="items-start">
                                <div className="hidden md:block absolute right-0 top-[10%] h-[80%] w-px bg-[#5D6C7C]"></div>
                                <div className="flex flex-col relative">
                                    <div>
                                        <img src={ImageConstraint.CURRENT_TRACTION_SECTION.ICON_HAND_STICK} className="h-17 w-auto object-contain transform transition-all duration-800 ease-in-out group-hover:h-19" />
                                    </div>
                                    <div className="absolute top-14 w-15 h-15 rounded-full bg-[#5B16191A]"></div>
                                    <h3 className="my-2 font-bold text-[54px] text-[#F36F21] transform transition-all duration-800 ease-in-out group-hover:text-[60px] group-hover:my-0 group-hover:scale-x-110">120+</h3>
                                </div>
                                <label className="text-[#5D6C7C] text-base font-normal transform transition-all duration-800 ease-in-out group-hover:tracking-[1px]">Grill Product Solution</label>

                            </div>
                        </div>

                        <div className="relative flex flex-col items-center cursor-pointer group">
                            <div className="items-start">
                                <div className="hidden md:block absolute right-0 top-[10%] h-[80%] w-px bg-[#5D6C7C]"></div>
                                <div className="flex flex-col relative">
                                    <div>
                                        <img src={ImageConstraint.CURRENT_TRACTION_SECTION.ICON_SATISFACTION} className="h-17 w-auto object-contain transform transition-all duration-800 ease-in-out group-hover:h-19" />
                                    </div>
                                    <div className="absolute top-14 w-15 h-15 rounded-full bg-[#5B16291A]"></div>
                                    <h3 className="my-2 font-bold text-[54px] text-[#5B1629] transform transition-all duration-800 ease-in-out group-hover:text-[60px] group-hover:my-0 group-hover:scale-x-110">98%</h3>
                                </div>
                                <label className="text-[#5D6C7C] text-base font-normal transform transition-all duration-800 ease-in-out group-hover:tracking-[1px]">Customer Satisfaction</label>
                            </div>
                        </div>

                        <div className="flex flex-col items-center cursor-pointer group">
                            <div className="items-start">
                                <div className="flex flex-col relative">
                                    <div>
                                        <img src={ImageConstraint.CURRENT_TRACTION_SECTION.ICON_CALENDER} className="h-17 w-auto object-contain transform transition-all duration-800 ease-in-out group-hover:h-19" />
                                    </div>
                                    <div className="absolute top-14 w-15 h-15 rounded-full bg-[#5B16291A]"></div>
                                    <h3 className="my-2 font-bold text-[54px] text-[#F36F21] transform transition-all duration-800 ease-in-out group-hover:text-[60px] group-hover:my-0 group-hover:scale-x-110">72+</h3>
                                </div>
                                <label className="text-[#5D6C7C] text-base font-normal transform transition-all duration-800 ease-in-out group-hover:tracking-[1px]">Years of Excellence</label>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}