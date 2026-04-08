import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { Services } from "@/components/sections/Services";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Benefits } from "@/components/sections/Benefits";
import { Testimonials } from "@/components/sections/Testimonials";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";
import { DemoModal } from "@/components/DemoModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openDemo = () => setIsModalOpen(true);
  const closeDemo = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar onBookDemo={openDemo} />
      
      <main className="flex-1">
        <Hero onBookDemo={openDemo} />
        <SocialProof />
        <Services />
        <HowItWorks />
        <Benefits />
        <Testimonials />
        <CaseStudies />
        <Faq />
        <Cta onBookDemo={openDemo} />
      </main>

      <Footer />
      
      <DemoModal isOpen={isModalOpen} onClose={closeDemo} />
    </div>
  );
}
