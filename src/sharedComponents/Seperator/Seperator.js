import Colors from "@/enums/Colors";

export default function Seperator() {
    return (
        <div
            style={{ "--gap": "200px" }}   // 🔥 dynamic center gap
            className="relative flex items-center w-full justify-center mb-12"
        >
            {/* Left line */}
            <div
                className="h-0.5 w-[calc(50%-10px)] md:w-[calc(50%-200px)]"
                style={{ backgroundColor: Colors.PURPLE.BURGUNDY }}
            />

            {/* Center image */}
            <div className="px-4 shrink-0">
                <img src="assets/images/seperator.png" alt="separator" />
            </div>

            {/* Right line */}
            <div
                className="h-0.5 w-[calc(50%-10px)] md:w-[calc(50%-200px)]"
                style={{ backgroundColor: Colors.PURPLE.BURGUNDY }}
            />
        </div>
    )
}