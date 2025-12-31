import Colors from "@/enums/Colors";
import Seperator from "@/sharedComponents/Seperator/Seperator";

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
            </main>
        </div>
    )
}