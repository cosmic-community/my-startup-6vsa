import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-purple-50 -z-10" />
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 mb-8 shadow-sm">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          New: AI-powered insights are live
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
          Ship faster with
          <br />
          <span className="gradient-text">My Startup</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          The all-in-one platform that helps modern teams build, launch, and scale their products with confidence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/pricing"
            className="px-8 py-4 bg-brand-600 text-white rounded-xl font-semibold text-lg hover:bg-brand-700 transition-all hover:scale-105 shadow-lg shadow-brand-600/30"
          >
            Start Free Trial
          </Link>
          <Link
            href="/features"
            className="px-8 py-4 bg-white text-gray-900 border border-gray-300 rounded-xl font-semibold text-lg hover:border-gray-400 transition-colors"
          >
            See Features →
          </Link>
        </div>
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <span className="text-green-500">✓</span> No credit card required
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500">✓</span> 14-day free trial
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500">✓</span> Cancel anytime
          </div>
        </div>
      </div>
    </section>
  );
}