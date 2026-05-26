import type { PricingTier } from '@/types';
import { getMetafieldValue } from '@/lib/cosmic';

export default function PricingSection({ tiers }: { tiers: PricingTier[] }) {
  if (!tiers || tiers.length === 0) {
    return (
      <section className="py-24 px-4 text-center">
        <p className="text-gray-500">Pricing coming soon.</p>
      </section>
    );
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-brand-50 text-brand-700 rounded-full text-sm font-semibold mb-4">
            PRICING
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Simple, <span className="gradient-text">transparent</span> pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your needs. Upgrade or cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier) => {
            const planName = getMetafieldValue(tier.metadata?.plan_name) || tier.title;
            const price = getMetafieldValue(tier.metadata?.price);
            const billingPeriod = getMetafieldValue(tier.metadata?.billing_period);
            const description = getMetafieldValue(tier.metadata?.description);
            const featuresList = getMetafieldValue(tier.metadata?.features_list);
            const ctaText = getMetafieldValue(tier.metadata?.cta_text) || 'Get Started';
            const highlighted = tier.metadata?.highlighted === true;

            const featuresArray = featuresList
              ? featuresList.split('\n').filter((line) => line.trim().length > 0)
              : [];

            return (
              <div
                key={tier.id}
                className={`relative rounded-2xl p-8 ${
                  highlighted
                    ? 'gradient-bg text-white shadow-2xl scale-105 z-10'
                    : 'bg-white border border-gray-200'
                }`}
              >
                {highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-brand-600 rounded-full text-sm font-bold shadow-md">
                    MOST POPULAR
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {planName}
                </h3>
                <p className={`mb-6 ${highlighted ? 'text-white/90' : 'text-gray-600'}`}>
                  {description}
                </p>
                <div className="mb-6">
                  <span className={`text-5xl font-bold ${highlighted ? 'text-white' : 'text-gray-900'}`}>
                    ${price}
                  </span>
                  {billingPeriod && (
                    <span className={`ml-2 ${highlighted ? 'text-white/80' : 'text-gray-500'}`}>
                      /{billingPeriod}
                    </span>
                  )}
                </div>
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-colors mb-8 ${
                    highlighted
                      ? 'bg-white text-brand-600 hover:bg-gray-100'
                      : 'bg-brand-600 text-white hover:bg-brand-700'
                  }`}
                >
                  {ctaText}
                </button>
                <ul className="space-y-3">
                  {featuresArray.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className={highlighted ? 'text-white' : 'text-brand-600'}>✓</span>
                      <span className={highlighted ? 'text-white/95' : 'text-gray-700'}>
                        {feat.trim()}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}