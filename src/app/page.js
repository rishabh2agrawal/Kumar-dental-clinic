import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import DoctorProfile from "@/components/DoctorProfile";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import BookAppointment from "@/components/BookAppointment";
import VisitUs from "@/components/VisitUs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full relative">
      <Hero />
      <TrustSection />
      <DoctorProfile />
      <Services />
      <Testimonials />
      <BookAppointment />
      <VisitUs />
    </main>
  );
}
