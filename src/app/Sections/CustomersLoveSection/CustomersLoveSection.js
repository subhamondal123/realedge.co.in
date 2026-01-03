import Colors from "@/enums/Colors";
import { CustomVideoFrame } from "@/sharedComponents/CustomVideoFrame/CustomVideoFrame";
import Seperator from "@/sharedComponents/Seperator/Seperator";
import ImageConstraint from "@/utils/ImageConstraint";

const videoArrData = [
    { videoUrl: "https://www.youtube.com/embed/h3pjU4E74og?si=8JnArOMRUsJYsPXP", publishDate: "Nov 30, 2016", title: "SRMB RealEdge dealer on the unmatched quality of the product" },
    { videoUrl: "https://www.youtube.com/embed/NwsPZ23DI4M?si=-Jc5EyyHZQYmAzFB", publishDate: "Sep 8, 2016", title: "Fabricator giving his valuable feedback on SRMB Real Edge Grill Solution" },
    { videoUrl: "https://www.youtube.com/embed/fEtjtOkHefE?si=vUbqPfA-iL10Paxn", publishDate: "Nov 30, 2016", title: "Dealer appraises the unmatched quality and finishing of SRMB RealEdge" },
    { videoUrl: "https://www.youtube.com/embed/Z-RKFm1O0tM?si=g_Iaqz0jejX3XgBL", publishDate: "Nov 30, 2016", title: "Sharma Hardware on how SRMB RealEdge is helping him to grow his business" },
    { videoUrl: "https://www.youtube.com/embed/A3cSCA2jSXM?si=gjLYRsMIErHqgAQA", publishDate: "Sep 5, 2016", title: "Fabricator giving his valuable feedback on SRMB Real Edge Grill Solution" },
    { videoUrl: "https://www.youtube.com/embed/2FgVGeyq3_Q?si=StDwh5X_n52REYoc", publishDate: " Nov 30, 2016", title: "Esteemed dealer citing the high quality of SRMB RealEdge" },
]

export default function CustomersLoveSection() {
    return (
        <>
            <main className="px-2 py-2 md:px-8 md:py-9">
                <div className="justify-center items-center flex flex-col mb-5">
                    <h1 className={`items-center text-[50px] font-semibold`} style={{ color: Colors.PURPLE.BURGUNDY }}>Customer's Love</h1>
                    <div className="text-xl font-medium" style={{ color: Colors.BLACK.RAISIN_BLACK }}>Our Happy Clients Say About Us</div>
                </div>
                {/* Separator */}
                <Seperator />
                <div className="mx-2 md:mx-30">
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                        {videoArrData.map((item, index) => (
                            <div className={`bg-black p-2 rounded-md ${index >= 4 ? "col-span-2" : ""}`} key={index}>
                                <CustomVideoFrame theme={"dark"} data={item} />
                            </div>
                        ))}

                    </div>
                </div>
            </main>
        </>
    )
}