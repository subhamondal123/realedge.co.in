import Colors from "@/enums/Colors";
import Seperator from "@/sharedComponents/Seperator/Seperator";
import ImageConstraint from "@/utils/ImageConstraint";

const MsSquareImage = () => {
    return (
        <div className="p-2.5 relative border cursor-pointer group md:w-[25%]" style={{ borderColor: Colors.GRAY.LIGHT_GRAY }}>
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
                    src={ImageConstraint.PRODUCT.PRODUCT_1}
                    className="absolute inset-0 h-full w-full object-contain z-20 transform transition-transform duration-800 ease-in-out group-hover:scale-120"
                    alt="product main"
                />
            </div>

        </div>
    )
}

export default function OurProductsSection() {
    return (
        <div>
            <main className="px-2 py-2 md:px-8 md:py-9">
                <div className="justify-center items-center flex flex-col mb-5">
                    <h1 className={`items-center text-[50px] font-semibold`} style={{ color: Colors.PURPLE.BURGUNDY }}>Our Products</h1>
                    <div className="text-xl font-medium" style={{ color: Colors.BLACK.RAISIN_BLACK }}>Introduce With Our Products</div>
                </div>
                {/* Separator */}
                <Seperator />
                <section className="flex flex-col md:flex-row justify-between gap-5 items-start md:mx-30">
                    {MsSquareImage()}
                    <div className="w-[75%] md:pl-10">
                        <h3 className="md:mb-9 text-4xl text-[#5B1629] font-semibold">MS Square</h3>
                        {/* <div className="grid grid-cols-8 bg-[#F36F21] text-white font-medium p-2.5">
                            <span className="p-2.5"></span>
                            <span className="p-2.5">Depth of channel<br></br>(tolerance)</span>
                            <span className="p-2.5">Width of Flange<br></br>(tolerance</span>
                            <span className="p-2.5"></span>
                            <span className="p-2.5"></span>
                            <span className="col-span-3 p-2.5">Mass per Metrs kg</span>

                        </div> */}
                        <div className="flex font-semibold text-sm md:text-base">
                            <div className="p-4 bg-[#F36F21]">&nbsp;</div>

                            <div className="p-4 text-white bg-[#5B1629]">
                                Designation
                            </div>

                            <div className="p-4 text-[#5D6C7C]">
                                CHG 16
                            </div>
                            <div className="p-4 text-[#5D6C7C]">
                                CHG 16
                            </div>
                            <div className="p-4 text-[#5D6C7C]">
                                CHG 16
                            </div>



                        </div>

                    </div>
                </section>
            </main>
        </div>
    )
}