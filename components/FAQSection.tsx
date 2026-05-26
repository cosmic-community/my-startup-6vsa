'use client';

import { useState } from 'react';
import type { FAQ } from '@/types';
import { getMetafieldValue } from '@/lib/cosmic';

export default function FAQSection({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqs || faqs.length === 0) {
    return null;
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-brand-50 text-brand-700 rounded-full text-sm font-semibold mb-4">
            FAQ
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Frequently asked <span className="gradient-text">questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about the product.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const question = getMetafieldValue(faq.metadata?.question) || faq.title;
            const answer = getMetafieldValue(faq.metadata?.answer);
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 text-lg pr-4">{question}</span>
                  <span
                    className={`text-2xl text-brand-600 transition-transform flex-shrink-0 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                    {answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}