import TestimonialsSection from '@/components/TestimonialsSection';
import { getTestimonials } from '@/lib/cosmic';

export const metadata = {
  title: 'Testimonials - My Startup',
};

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials();

  return (
    <div className="py-16">
      <TestimonialsSection testimonials={testimonials} />
    </div>
  );
}