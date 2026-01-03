import CustomCarousel from "@/sharedComponents/CustomCarousel/CustomCarousel";
import AboutUsSection from "./Sections/AboutUsSection/AboutUsSection";
import OurProductSection from "./Sections/OurProductSection/OurProductSection";
import StructuralSteelSection from "./Sections/StructuralSteelSection/StructuralSteelSection";
import StrenthOfIronSection from "./Sections/StrenthOfIronSection/StrenthOfIronSection";
import WhyChooseUsSection from "./Sections/WhyChooseUsSection/WhyChooseUsSection";
import QualityControlSection from "./Sections/QualityControlSection/QualityControlSection";
import RealedgeDesignBookSection from "./Sections/RealedgeDesignBookSection/RealedgeDesignBookSection";
import CustomersLoveSection from "./Sections/CustomersLoveSection/CustomersLoveSection";
import OurCurrentTrationSection from "./Sections/OurCurrentTractionSection/OurCurrentTractionSection";
import FooterSection from "./Sections/FooterSection/FooterSection";

export default function Home() {
  return (
    <div>
      <main>
        <CustomCarousel />
        <AboutUsSection />
        <OurProductSection />
        <StructuralSteelSection />
        <StrenthOfIronSection />
        <WhyChooseUsSection />
        <QualityControlSection />
        <RealedgeDesignBookSection />
        <CustomersLoveSection />
        <OurCurrentTrationSection />
        <FooterSection/>
      </main>
    </div>
  );
}
