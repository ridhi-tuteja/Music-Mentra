import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Instructors from "@/components/Instructors";

export default function Home() {
  return (
    <main className="bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <section className="min-h-screen">
        <HeroSection />
      </section>
      <section className="min-h-screen">
        <FeaturedCourses />
      </section>
      <section className="min-h-screen">
        <TestimonialCards />
      </section>
      <section className="min-h-screen">
        <UpcomingWebinars />
      </section>
      <section className="min-h-screen">
        <Instructors />
      </section>
      <section className="min-h-screen">
        <Footer />
      </section>
    </main>
  );
}
