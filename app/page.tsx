import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import IndustriesSection from '@/components/sections/IndustriesSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <IndustriesSection />
      <AboutSection />
      <ProjectsSection />
      <CTA />
      <ContactSection />
    </>
  );
}