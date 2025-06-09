import ServicesHero from '@/components/services/ServicesHero';
import ServicesGrid from '@/components/services/ServicesGrid';
import ServiceQuickNav from '@/components/services/ServicesQuickNav';
import RelatedServices from '@/components/services/RelatedServices';
import CTA from '@/components/sections/CTA';

export const metadata = {
  title: 'Services | OGGO LLC - Precision Engineering & Surface Treatment Solutions',
  description: 'Comprehensive industrial steel manufacturing services including gear production, electrostatic painting, galvanizing, welding, sheet metal work, and precision machining.',
  keywords: 'gear production, electrostatic paint, galvanizing, welding, sheet metal, CNC machining, Kosovo, Europe',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background py-20">
      <ServicesHero />
      <ServiceQuickNav />
      <ServicesGrid />
      <CTA />
      {/* <RelatedServices /> */}
    </div>
  );
}