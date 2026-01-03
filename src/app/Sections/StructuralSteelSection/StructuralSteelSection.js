import Colors from "@/enums/Colors";
import Seperator from "@/sharedComponents/Seperator/Seperator";
import ImageConstraint from "@/utils/ImageConstraint";

const arrData = [
    {
        image: ImageConstraint.STRUCTURAL_STEEL_SECTION.WINDOW_GRILL,
        title: "Window Grill"
    },
    {
        image: ImageConstraint.STRUCTURAL_STEEL_SECTION.BALCONY_RAILING,
        title: "Balcony Railing"
    },
    {
        image: ImageConstraint.STRUCTURAL_STEEL_SECTION.STAIRCASE_RAILING,
        title: "Staircase Railing"
    },
    {
        image: ImageConstraint.STRUCTURAL_STEEL_SECTION.MAIN_GATE,
        title: "Main Gate"
    },
]

export default function StructuralSteelSection() {
    return (
        <div>
            <main className="px-2 py-2 md:px-8 md:py-9">
                <div className="justify-center items-center flex flex-col mb-5">
                    <h1 className={`items-center text-[50px] font-semibold`} style={{ color: Colors.PURPLE.BURGUNDY }}>Our Structural Steel</h1>
                    <div className="text-xl font-medium" style={{ color: Colors.BLACK.RAISIN_BLACK }}>Items Built With</div>
                </div>
                {/* Separator */}
                <Seperator />
                {/* body */}
                <div className="px-2 md:px-0 justify-center flex">
                    <div className="relative w-full md:w-[87%] h-full bg-[url('/assets/images/steel_section_bg.jpg')] bg-cover bg-center p-12.5 flex flex-col md:flex-row justify-between items-center gap-4">
                        {arrData.map((item, index) => (
                            <div className="bg-white border border-[#D4D4D4]" key={index}>
                                <img src={item.image} className="h-full w-full"/>
                                <div className="p-5">
                                    <h3 style={{ color: Colors.PURPLE.BURGUNDY, fontSize: "24px" }} className="font-semibold">{item.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}