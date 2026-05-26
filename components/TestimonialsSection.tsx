import type { Testimonial } from '@/types';
import { getMetafieldValue } from '@/lib/cosmic';

export default function TestimonialsSection({ testimonials }: { testimonials: Testimonial[] }) {
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-brand-50 text-brand-700 rounded-full text-sm font-semibold mb-4">
            TESTIMONIALS
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Loved by <span className="gradient-text">teams worldwide</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what our customers have to say about their experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => {
            const customerName = getMetafieldValue(testimonial.metadata?.customer_name) || testimonial.title;
            const roleCompany = getMetafieldValue(testimonial.metadata?.role_company);
            const quote = getMetafieldValue(testimonial.metadata?.quote);
            const rating = Number(testimonial.metadata?.rating) || 5;
            const avatar = testimonial.metadata?.avatar;

            return (
              <div
                key={testimonial.id}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
                      ★
                    </span>
                  ))}
                </div>
                <blockquote className="text-gray-700 leading-relaxed mb-6 text-lg">
                  "{quote}"
                </blockquote>
                <div className="flex items-center gap-4">
                  {avatar?.imgix_url ? (
                    <img
                      src={`${avatar.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
                      alt={customerName}
                      width={60}
                      height={60}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-xl">
                      {customerName.charAt(0)}
                    </div>
                  )}
                  <div>
                    <div className="font-bold text-gray-900">{customerName}</div>
                    <div className="text-sm text-gray-500">{roleCompany}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}