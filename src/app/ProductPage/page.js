import ImageConstraint from "@/utils/ImageConstraint";
import RouteConstraints from "@/utils/RouteConstraints";
import OurProductsSection from "./Sections/OurProductSection/OurProductSection";

export default function HomePage() {
    return (
        <div>
            <main>
                <div
                    className="h-full w-full bg-cover bg-center flex flex-col items-center justify-center py-2 md:py-9"
                    style={{
                        backgroundImage: `url(${ImageConstraint.PRODUCT_PAGE.BANNER})`,
                    }}
                >
                    <h1 className="text-[#5B1629] text-[54px] font-medium md:mb-6">SRMB RealEdge Products</h1>
                    <div className="text-lg font-medium gap-2.5 inline-flex items-center">
                        <a href={RouteConstraints.HomePage} className="text-[#202020]">Home</a><span className="text-[#202020]">{" > "}</span><span className="text-[#F36F21]">Products</span>
                    </div>
                </div>
                <section>
                    <OurProductsSection/>
                </section>
            </main>
        </div>

    )
}