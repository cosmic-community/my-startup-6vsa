export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface Feature extends CosmicObject {
  type: 'features';
  metadata: {
    name?: string;
    description?: string;
    icon?: string;
    image?: {
      url: string;
      imgix_url: string;
    };
  };
}

export interface PricingTier extends CosmicObject {
  type: 'pricing-tiers';
  metadata: {
    plan_name?: string;
    price?: number | string;
    billing_period?: string;
    description?: string;
    features_list?: string;
    cta_text?: string;
    highlighted?: boolean;
    order?: number;
  };
}

export interface FAQ extends CosmicObject {
  type: 'faqs';
  metadata: {
    question?: string;
    answer?: string;
    order?: number;
  };
}

export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    customer_name?: string;
    role_company?: string;
    quote?: string;
    avatar?: {
      url: string;
      imgix_url: string;
    };
    rating?: number;
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}