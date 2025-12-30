import Colors from "@/enums/Colors";
import Seperator from "@/sharedComponents/Seperator/Seperator";

const arrData = [
    {
        id: 1,
        image: "https://realedge.co.in/adminprod/wp-content/uploads/2024/11/ms-square.png",
        mainText: "MS Square",
        subText: "16MM, 20MM, 40MM"
    },
    {
        id: 2,
        image: "https://realedge.co.in/adminprod/wp-content/uploads/2024/11/ms-flats.png",
        mainText: "MS Flats",
        subText: "16MM, 20MM, 21MM..."
    },
    {
        id: 3,
        image: "https://realedge.co.in/adminprod/wp-content/uploads/2024/11/ms-angles.png",
        mainText: "MS Angles",
        subText: "25MM, 30MM, 35MM..."
    },
    {
        id: 4,
        image: "https://realedge.co.in/adminprod/wp-content/uploads/2024/11/z-angles.png",
        mainText: "Z Angles",
        subText: "10-25MM ±0.4 mm"
    },
    {
        id: 5,
        image: "https://realedge.co.in/adminprod/wp-content/uploads/2024/11/gate-channel.png",
        mainText: "Gate Channel",
        subText: "12ft, 13ft, 14ft, 15ft..."
    },
]

export default function OurProductSection() {
    return (
        <>
            <main className="px-2 py-2 md:px-8 md:py-9">
                <div className="justify-center items-center flex flex-col mb-5">
                    <h1 className={`items-center text-[50px] font-semibold`} style={{ color: Colors.PURPLE.BURGUNDY }}>Our Products</h1>
                    <div className="text-xl font-medium" style={{ color: Colors.BLACK.RAISIN_BLACK }}>Introduce With Our Products</div>
                </div>
                {/* Separator */}
                <Seperator />
                <div className="flex flex-col md:flex-row items-stretch gap-2.5 md:px-30">
                    {arrData.map((item, index) => (
                        <div className="p-2.5 relative border cursor-pointer group md:w-1/5" style={{ borderColor: Colors.GRAY.LIGHT_GRAY }} key={index}>
                            {/* image section */}
                            <div className="h-75 md:h-75 mb-2.5 relative overflow-hidden">
                                {/* background image */}
                                <img
                                    src="assets/images/product-bg.webp"
                                    className="absolute inset-0 h-full w-full object-cover z-10 transform transition-opacity duration-800 ease-in-out group-hover:opacity-0"
                                    alt="product background"
                                />
                                {/* after */}
                                <img
                                    src="assets/images/product-bg-hover.webp"
                                    className="absolute inset-0 h-full w-full object-cover z-10 opacity-0 transform transition-opacity duration-800 ease-in-out group-hover:opacity-100"
                                    alt="product background"
                                />
                                {/* main product image */}
                                <img
                                    src={item.image}
                                    className="absolute inset-0 h-full w-full object-contain z-20 transform transition-transform duration-800 ease-in-out group-hover:scale-120"
                                    alt="product main"
                                />
                            </div>
                            {/* bottom section */}
                            <div className="flex flex-col">
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-2xl font-semibold text-[#5B1629] transform transition-all duration-500 ease-in-out group-hover:text-[#F36F21]">{item.mainText}</span>
                                        <span className="bg-[#F36F21] w-0 h-0.5 transform transition-all duration-500 ease-in-out group-hover:w-full" />
                                    </div>
                                    <div>
                                        <span style={{ backgroundColor: Colors.ORANGE.TANGELO }} className="flex text-white rounded-full h-5 w-5 justify-center items-center">{">"}</span>
                                    </div>
                                </div>
                                <span style={{ color: Colors.GRAY.SLATE_GRAY }} className="font-normal text-[16px]">{item.subText}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </>
    )
}