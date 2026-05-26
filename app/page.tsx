import Hero from '@/components/Hero';
import FeaturesSection from '@/components/FeaturesSection';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import { getFeatures, getPricingTiers, getFAQs, getTestimonials } from '@/lib/cosmic';

export default async function HomePage() {
  const [features, tiers, faqs, testimonials] = await Promise.all([
    getFeatures(),
    getPricingTiers(),
    getFAQs(),
    getTestimonials(),
  ]);

  return (
    <>
      <Hero />
      <FeaturesSection features={features} />
      <PricingSection tiers={tiers} />
      <TestimonialsSection testimonials={testimonials} />
      <FAQSection faqs={faqs} />
      <CTASection />
    </>
  );
}