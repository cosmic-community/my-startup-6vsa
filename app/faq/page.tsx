import FAQSection from '@/components/FAQSection';
import { getFAQs } from '@/lib/cosmic';

export const metadata = {
  title: 'FAQ - My Startup',
};

export default async function FAQPage() {
  const faqs = await getFAQs();

  return (
    <div className="py-16">
      <FAQSection faqs={faqs} />
    </div>
  );
}