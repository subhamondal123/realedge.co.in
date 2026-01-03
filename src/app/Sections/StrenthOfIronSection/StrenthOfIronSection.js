import Colors from "@/enums/Colors";
import Seperator from "@/sharedComponents/Seperator/Seperator";
import ImageConstraint from "@/utils/ImageConstraint";


export default function StrenthOfIronSection() {
    return (
        <div>
            <main className="px-2 py-2 md:px-8 md:py-9">
                <div className="justify-center items-center flex flex-col mb-5">
                    <h1 className={`items-center text-[50px] font-semibold`} style={{ color: Colors.PURPLE.BURGUNDY }}>Unleash the Strength of Iron</h1>
                    <div className="text-xl font-medium" style={{ color: Colors.BLACK.RAISIN_BLACK }}>Discover the perfect blend of durability and aesthetics with our premium iron steel grills</div>
                </div>
                {/* Separator */}
                <Seperator />
                {/* body */}
                <div className="px-2 md:px-0 justify-center flex">
                    <div className="relative w-full md:w-[87%] h-full bg-[url('/assets/images/Video_background.jpg')] bg-cover bg-center p-5 md:p-12.5 flex items-center ">
                        <div id="vidAd" className="w-full border-10 md:border-30 border-white outline-1 outline-gray-300">
                            <video
                                width={'100%'}
                                height={'100%'}
                                src={"https://realedge.co.in/adminprod/wp-content/uploads/2024/12/srmb-realedge-madhuri-dixit-with-saswata-chatterjee-create-magic-again.mp4"}
                                controls={true}
                                autoPlay={true}
                                muted={true}
                                loop
                            // playsInline
                            >
                            </video>
                        </div>
                        <div id="tvc-madhuri" className="absolute bottom-0">
                                <img src={ImageConstraint.STRENGTH_OF_STEEL_SECTION.STEEL_FOR_GRILL_IMG} className="h-5/12 w-5/12 md:h-10/12 md:w-10/12 object-bottom-left"/>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    )
}