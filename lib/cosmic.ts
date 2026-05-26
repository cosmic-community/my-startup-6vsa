import { createBucketClient } from '@cosmicjs/sdk';
import type { Feature, PricingTier, FAQ, Testimonial } from '@/types';

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
});

function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

export function getMetafieldValue(field: unknown): string {
  if (field === null || field === undefined) return '';
  if (typeof field === 'string') return field;
  if (typeof field === 'number' || typeof field === 'boolean') return String(field);
  if (typeof field === 'object' && field !== null && 'value' in field) {
    return String((field as { value: unknown }).value);
  }
  if (typeof field === 'object' && field !== null && 'key' in field) {
    return String((field as { key: unknown }).key);
  }
  return '';
}

export async function getFeatures(): Promise<Feature[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'features' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.objects as Feature[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return [];
    throw new Error('Failed to fetch features');
  }
}

export async function getPricingTiers(): Promise<PricingTier[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'pricing-tiers' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    const tiers = response.objects as PricingTier[];
    return tiers.sort((a, b) => {
      const orderA = Number(a.metadata?.order) || 0;
      const orderB = Number(b.metadata?.order) || 0;
      return orderA - orderB;
    });
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return [];
    throw new Error('Failed to fetch pricing tiers');
  }
}

export async function getFAQs(): Promise<FAQ[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'faqs' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    const faqs = response.objects as FAQ[];
    return faqs.sort((a, b) => {
      const orderA = Number(a.metadata?.order) || 0;
      const orderB = Number(b.metadata?.order) || 0;
      return orderA - orderB;
    });
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return [];
    throw new Error('Failed to fetch FAQs');
  }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'testimonials' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.objects as Testimonial[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return [];
    throw new Error('Failed to fetch testimonials');
  }
}