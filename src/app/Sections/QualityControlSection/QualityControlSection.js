import Colors from "@/enums/Colors";
import Seperator from "@/sharedComponents/Seperator/Seperator";
import ImageConstraint from "@/utils/ImageConstraint";
import QualityControlFormSection from "../QualityControlFormSection/QualityControlFormSection";

export default function QualityControlSection() {
    return (
        <>
            <main className="px-2 py-2 md:px-8 md:py-9">
                <div className="justify-center items-center flex flex-col mb-5">
                    <h1 className={`items-center text-[50px] font-semibold`} style={{ color: Colors.PURPLE.BURGUNDY }}>Quality Control</h1>
                    <div className="text-xl font-medium" style={{ color: Colors.BLACK.RAISIN_BLACK }}>Our Product Quality</div>
                </div>
                {/* Separator */}
                <Seperator />
                {/* body */}
                <div className="px-2 md:px-0 mx-2 md:mx-30 justify-center flex">
                    <div className="relative w-full h-full bg-[url('/assets/images/Video_background.jpg')] bg-cover bg-center flex flex-col md:flex-row items-center ">
                        <div className="1/4">
                            <img src={ImageConstraint.QUALITY_CONTROL.RITUPARNA_REALEDGE} className="h-full w-full origin-left object-fill" />
                        </div>
                        <div className="w-full md:w-3/4 h-full flex flex-col md:flex-row items-center px-2 md:px-10 gap-8 mt-2 md:mt-0">
                            <div className="h-100 md:h-130 w-full md:w-1/3 bg-white flex flex-col p-5">
                                <img src={ImageConstraint.QUALITY_CONTROL.ICON_1} className="h-15 w-15 object-contain" />
                                <h3 style={{ color: Colors.PURPLE.BURGUNDY }} className="text-lg md:text-[26px] font-medium my-2 md:my-5">Advanced European Technology</h3>
                                <p className="text-[#5D6C7C] font-normal text-[16px]">
                                    Using advanced European Technology & establishes highest precision in the MS Flats (ISF) & Square bars (ISSQ) conforming to IS 1730:1989 and IS 1732:1989 specifications. The Real Grill steel sections also conforms to IS 2062:2011 specifications for weld-convenient & economical choice for fabricators.
                                </p>
                            </div>
                            <div className="h-100 md:h-130 w-full md:w-1/3 bg-white flex flex-col p-5">
                                <img src={ImageConstraint.QUALITY_CONTROL.ICON_2} className="h-15 w-15 object-contain" />
                                <h3 style={{ color: Colors.PURPLE.BURGUNDY }} className="text-lg md:text-[26px] font-medium my-2 md:my-5">Automated cooling bed promotes</h3>
                                <p className="text-[#5D6C7C] font-normal text-[16px]">
                                    The walking type automated cooling bed promotes faster production ensures that the products are properly straightened by eliminating the defects that may arise due to manhandling.
                                </p>
                            </div>
                            <div className="h-100 md:h-130 w-full md:w-1/3 bg-white flex flex-col p-5">
                                <img src={ImageConstraint.QUALITY_CONTROL.ICON_3} className="h-15 w-15 object-contain" />
                                <h3 style={{ color: Colors.PURPLE.BURGUNDY }} className="text-lg md:text-[26px] font-medium my-2 md:my-5">Automated Block mill fitted</h3>
                                <p className="text-[#5D6C7C] font-normal text-[16px]">
                                    SRMB group is the pioneer in using 100% automated Block mill fitted with tungsten carbide rollers, enabling them to produce grill sections with perfect shape, uniform thickness equal standard length of 6 meters.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* form section */}
                <div className="px-2 py-2 md:py-10 md:px-0 mx-2 md:mx-30 justify-center flex">
                    <div className="relative w-full h-full bg-[url('/assets/images/Video_background.jpg')] bg-cover bg-center flex flex-col md:flex-row">
                        <div className="w-full md:w-[30%] order-1 md:order-2 self-start md:self-end mb-4 md:mb-0">
                            <img
                                src={ImageConstraint.QUALITY_CONTROL.MADHURI_FORM_BG}
                                className="h-full w-full object-contain"
                            />
                        </div>
                        {/* Form content */}
                        <div className="scroll-mt-45 w-full md:w-[70%] order-2 md:order-1 p-2 md:p-9 flex flex-col justify-center" id="get-quote-form">
                            <h2 className="text-sm md:text-5xl text-[#5B1629] font-semibold">
                                Schedule <span className="text-[#F36F21]">A FREE Consultation</span> Now, We are Eager to Hear From You...
                            </h2>
                            <section>
                                <QualityControlFormSection />
                            </section>
                        </div>
                    </div>
                </div>

            </main>
        </>
    )
}