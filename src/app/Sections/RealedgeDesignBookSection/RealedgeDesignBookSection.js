import Colors from "@/enums/Colors";
import Seperator from "@/sharedComponents/Seperator/Seperator";
import ImageConstraint from "@/utils/ImageConstraint";
import DownloadBtnSection from "./sub-component/downloadBtnSec";

export default function RealedgeDesignBookSection() {
    return (
        <div>
            <main className="px-2 py-2 md:px-8 md:py-9">
                <div className="justify-center items-center flex flex-col mb-5">
                    <h1 className={`items-center text-[50px] font-semibold`} style={{ color: Colors.PURPLE.BURGUNDY }}>Realedge Design Book</h1>
                    <div className="text-xl font-medium" style={{ color: Colors.BLACK.RAISIN_BLACK }}>Realedge Design Book</div>
                </div>
                {/* Separator */}
                <Seperator />
                <div className="px-2 md:px-0 mx-2 md:mx-30 justify-center items-center flex flex-col">
                    <img src={ImageConstraint.DESIGN_BOOK_SECTION.DESIGN_BOOK_ARTIFACT} className="h-full w-full object-contain" />
                    <div className="py-6 px-6">
                        <p className="text-center font-normal text-base text-[#5D6C7C]">
                            SRMB Srijan Pvt Ltd has come up with the "Your Grill Your Style" concept. The greater malleability for fabrication makes it easy for you to turn ideas into reality as you design your dream home or office. The design of the grill will showcase your creative inner-self. Interestingly, the designer booklet includes innovative and marvelous ideas for grill designs. No longer do you have to depend on cliché designs as you determine the aesthetics of your property.
                            <br /><br />
                            A deep understanding of the market dynamics has made it possible for us to come up with the unique idea of REALEDGE, a one of its kind retail concept. We have walked an extra mile to ensure that this product mix serves you the best.
                        </p>
                    </div>
                    <div className="mt-2">
                        <DownloadBtnSection />
                    </div>
                </div>
            </main>
        </div>
    )
}