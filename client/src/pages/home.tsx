import Header from "@/components/header";
import Hero from "@/components/hero";
import RecipesSection from "@/components/recipes-section";
import ExpertsSection from "@/components/experts-section";
import GuidelinesSection from "@/components/guidelines-section";
import ConsultationSection from "@/components/consultation-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <RecipesSection />
      <ExpertsSection />
      <GuidelinesSection />
      <ConsultationSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
