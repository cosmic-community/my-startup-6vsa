import { getFeatures, getMetafieldValue } from '@/lib/cosmic';

export const metadata = {
  title: 'Features - My Startup',
};

export default async function FeaturesPage() {
  const features = await getFeatures();

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            All <span className="gradient-text">Features</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to scale your business and delight your customers.
          </p>
        </div>

        {features.length === 0 ? (
          <p className="text-center text-gray-500">No features available yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-shadow"
              >
                {feature.metadata?.image?.imgix_url && (
                  <img
                    src={`${feature.metadata.image.imgix_url}?w=800&h=400&fit=crop&auto=format,compress`}
                    alt={feature.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg mb-6"
                  />
                )}
                {feature.metadata?.icon && (
                  <div className="text-4xl mb-4">{getMetafieldValue(feature.metadata.icon)}</div>
                )}
                <h3 className="text-2xl font-bold mb-3">
                  {getMetafieldValue(feature.metadata?.name) || feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {getMetafieldValue(feature.metadata?.description)}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}