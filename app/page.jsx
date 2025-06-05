import HeroSection from "@/components/herosection";
import FeaturesSection from "@/components/featuresSection";
import FaqSection from "@/components/faqSection";
import Footer from "@/components/foooterSection";


export default function Home() {
  return (
    <main>
      <section className="p-20">
        <HeroSection />
      </section>
      <section className ="pb-10">
        <FeaturesSection />
      </section>
      <section className ="pb-10">
        <FaqSection />
      </section>
    </main>
  );
}
