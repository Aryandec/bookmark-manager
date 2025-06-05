import { Button } from "@/components/ui/button";
import HeroSection from "@/components/herosection";
import FeaturesSection from "@/components/featuresSection";

export default function Home() {
  return (
    <main>
      <section className="p-20">
        <HeroSection />
      </section>
      <section className ="pb-10">
        <FeaturesSection />
      </section>
    </main>
  );
}
