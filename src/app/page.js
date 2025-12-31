import CustomCarousel from "@/sharedComponents/CustomCarousel/CustomCarousel";
import { AboutUsSection } from "./Sections/AboutUsSection/AboutUsSection";
import OurProductSection from "./Sections/OurProductSection/OurProductSection";
import StructuralSteelSection from "./Sections/StructuralSteelSection/StructuralSteelSection";

export default function Home() {
  return (
    <div>
      <main>
        <CustomCarousel />
        <AboutUsSection />
        <OurProductSection />
        <StructuralSteelSection />
      </main>
    </div>
  );
}
