import TrainingHero from '@/components/training/TrainingHero';
import CertificationsSection from '@/components/training/CertificationsSection';
import WeldingDocumentation from '@/components/training/WeldingDocumentation';
import NDTTraining from '@/components/training/NDTTraining';
import ProfessionalCertifications from '@/components/training/ProfessionalCertifications';
import SpecializedPrograms from '@/components/training/SpecializedPrograms';
import TrainingCTA from '@/components/training/TrainingCTA';
import TrainingGallery from '@/components/training/TrainingGallery';

export const metadata = {
  title: 'Training & Certifications | OGGO•LLC - Professional Welding & Quality Management',
  description: 'Comprehensive training programs in welding, quality management, and NDT. ISO certified courses including ISO 3834, ISO 1090, and EN ISO 9606 welding qualifications.',
  keywords: 'welding training, ISO 3834, ISO 1090, NDT training, welding certification, quality management, Kosovo, Europe',
};

export default function TrainingPage() {
  return (
    <div className="min-h-screen bg-background py-20">
      <TrainingHero />
      <TrainingGallery />
      <CertificationsSection />
      <WeldingDocumentation />
      <NDTTraining />
      <ProfessionalCertifications />
      <SpecializedPrograms />
      <TrainingCTA />
    </div>
  );
}