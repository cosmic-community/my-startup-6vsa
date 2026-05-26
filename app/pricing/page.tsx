import PricingSection from '@/components/PricingSection';
import { getPricingTiers } from '@/lib/cosmic';

export const metadata = {
  title: 'Pricing - My Startup',
};

export default async function PricingPage() {
  const tiers = await getPricingTiers();

  return (
    <div className="py-16">
      <PricingSection tiers={tiers} />
    </div>
  );
}