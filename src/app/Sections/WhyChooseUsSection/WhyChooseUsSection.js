import Colors from "@/enums/Colors";
import Seperator from "@/sharedComponents/Seperator/Seperator";

export default function WhyChooseUsSection() {
    return (
        <div>
            <main className="px-2 py-2 md:px-8 md:py-9">
                <div className="justify-center items-center flex flex-col mb-5">
                    <h1 className={`items-center text-[50px] font-semibold`} style={{ color: Colors.PURPLE.BURGUNDY }}>Why Choose Us?</h1>
                    <div className="text-xl font-medium" style={{ color: Colors.BLACK.RAISIN_BLACK }}>Features and Benefits</div>
                </div>
                {/* Separator */}
                <Seperator />
                {/* body */}
                <section className="gap-y-1.5 flex flex-col">
                    <div className="flex items-center md:mx-30 px-2 md:px-5 py-2.5 bg-[#F36F21] border border-[#D4D4D4] gap-3">
                        <span className="text-white font-semibold w-[30%] text-[16px]">Features</span>
                        <span className="text-white font-semibold w-[70%] text-[16px]">Benefits</span>
                    </div>
                    <div className="flex items-center md:mx-30 px-2 md:px-5 py-2.5 bg-white border border-[#D4D4D4] gap-3">
                        <span className="text-[#202020] font-medium w-[30%] text-[16px]">Made from 100% Billets</span>
                        <span className="text-[#202020] font-medium w-[70%] text-[16px]">Highest quality precision as it is free from structural defects & fins. Structural uniformity makes it safest for fabricators to work with & provides best protection.</span>
                    </div>
                    <div className="flex items-center md:mx-30 px-2 md:px-5 py-2.5 bg-[#F5EEF1] border border-[#D4D4D4] gap-3">
                        <span className="text-[#202020] font-medium w-[30%] text-[16px]">Manufactured in block mill rollers with automated cooling bed</span>
                        <span className="text-[#202020] font-medium w-[70%] text-[16px]">Guarantees perfect shape, superb finish, smooth edges, uniform thickness, flat ends & uniform length of 6 metres in the RealEdge steel sections. It also provides greater malleabiltity for fabrication & perfect finish after welding which helps to produce superior designs.

                            The most economical choice for grill fabricators for its uniform length & defect free structure, which ensures minimum wastage & diminished labor cost as there is no need for grinding or hammering.</span>
                    </div>
                    <div className="flex items-center md:mx-30 px-2 md:px-5 py-2.5 bg-white border border-[#D4D4D4] gap-3">
                        <span className="text-[#202020] font-medium w-[30%] text-[16px]">BIS License</span>
                        <span className="text-[#202020] font-medium w-[70%] text-[16px]">We hold the BIS license IS 2062:2011 for structural products and IS 7452:1990 for Z Angle (F7D, Hot Rolled Section for Doors, Windows & Ventilators).</span>
                    </div>
                    <div className="flex items-center md:mx-30 px-2 md:px-5 py-2.5 bg-[#F5EEF1] border border-[#D4D4D4] gap-3">
                        <span className="text-[#202020] font-medium w-[30%] text-[16px]">ISO 9001:2015, ISO 14001:2015 & OHSAS 18001:2007 certifcationed</span>
                        <span className="text-[#202020] font-medium w-[70%] text-[16px]">Generates trust, promotes credibility & ascertains the promise of superior quality.</span>
                    </div>
                </section>
            </main>
        </div>
    )
}