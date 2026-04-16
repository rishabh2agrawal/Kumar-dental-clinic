import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import Services from "@/components/Services";
import SplitSection from "@/components/SplitSection";
import AboutPreview from "@/components/AboutPreview";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full relative">
      <Hero />
      <TrustSection />
      <Services />
      <SplitSection />
      <AboutPreview />
      <Testimonials />
      <CTASection />
    </main>
  );
}
