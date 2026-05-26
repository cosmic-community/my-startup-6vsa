import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto gradient-bg rounded-3xl p-12 sm:p-16 text-center text-white shadow-2xl">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
          Ready to get started?
        </h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Join thousands of teams already shipping faster with My Startup.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/pricing"
            className="px-8 py-4 bg-white text-brand-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            Start Free Trial
          </Link>
          <Link
            href="/features"
            className="px-8 py-4 bg-white/10 border border-white/30 text-white rounded-xl font-bold text-lg hover:bg-white/20 transition-colors backdrop-blur-sm"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}