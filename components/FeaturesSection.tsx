import type { Feature } from '@/types';
import { getMetafieldValue } from '@/lib/cosmic';

export default function FeaturesSection({ features }: { features: Feature[] }) {
  if (!features || features.length === 0) {
    return null;
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-brand-50 text-brand-700 rounded-full text-sm font-semibold mb-4">
            FEATURES
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Everything you need to <span className="gradient-text">succeed</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features designed to help your team move faster and build better products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const name = getMetafieldValue(feature.metadata?.name) || feature.title;
            const description = getMetafieldValue(feature.metadata?.description);
            const icon = getMetafieldValue(feature.metadata?.icon);
            const image = feature.metadata?.image;

            return (
              <div
                key={feature.id}
                className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-brand-300 hover:shadow-xl transition-all"
              >
                {image?.imgix_url ? (
                  <div className="mb-6 overflow-hidden rounded-xl">
                    <img
                      src={`${image.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
                      alt={name}
                      width={300}
                      height={200}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ) : icon ? (
                  <div className="text-5xl mb-4">{icon}</div>
                ) : (
                  <div className="w-12 h-12 mb-4 rounded-lg gradient-bg flex items-center justify-center text-white font-bold text-xl">
                    ⭐
                  </div>
                )}
                <h3 className="text-xl font-bold mb-3 text-gray-900">{name}</h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}