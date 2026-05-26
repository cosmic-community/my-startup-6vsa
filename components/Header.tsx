import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🚀</span>
          <span className="text-xl font-bold gradient-text">My Startup</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/features" className="text-gray-700 hover:text-brand-600 font-medium transition-colors">
            Features
          </Link>
          <Link href="/pricing" className="text-gray-700 hover:text-brand-600 font-medium transition-colors">
            Pricing
          </Link>
          <Link href="/testimonials" className="text-gray-700 hover:text-brand-600 font-medium transition-colors">
            Testimonials
          </Link>
          <Link href="/faq" className="text-gray-700 hover:text-brand-600 font-medium transition-colors">
            FAQ
          </Link>
        </div>
        <Link
          href="/pricing"
          className="px-5 py-2 bg-brand-600 text-white rounded-lg font-medium hover:bg-brand-700 transition-colors"
        >
          Get Started
        </Link>
      </nav>
    </header>
  );
}