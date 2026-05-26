# My Startup - SaaS Landing Page

![App Preview](https://imgix.cosmicjs.com/4dedb690-5931-11f1-876b-2597f2099e23-autopilot-photo-1438761681033-6461ffad8d80-1779820372082.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A modern Next.js SaaS landing page powered by [Cosmic](https://www.cosmicjs.com).

## Features

- ⚡ Next.js 16 with App Router
- 🎨 Tailwind CSS styling
- 📱 Fully responsive design
- ⭐ Dynamic features section
- 💰 Pricing tiers with highlighted plans
- 💬 Customer testimonials with ratings
- ❓ Expandable FAQ section
- 🚀 Optimized images via imgix
- 📊 Built-in analytics via Cosmic Insights

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a15e6eef2c683f5f2b3447b&clone_repository=6a15e7f8f2c683f5f2b344be)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a startup product website with features, pricing tiers, team members, blog posts, and customer testimonials.
> 
> User instructions: A SaaS landing page with features, pricing tiers, FAQ, and testimonials"

### Code Generation Prompt

> Build a Next.js application for a company website called "My Startup". The content is managed in Cosmic CMS with the following object types: features, pricing-tiers, faqs, testimonials. Create a beautiful, modern, responsive design with a homepage and pages for each content type.
> 
> User instructions: A SaaS landing page with features, pricing tiers, FAQ, and testimonials

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- [Next.js 16](https://nextjs.org)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Cosmic SDK](https://www.cosmicjs.com/docs)

## Getting Started

### Prerequisites

- Bun (or Node.js 18+)
- A Cosmic account with the configured object types

### Installation

```bash
bun install
bun run dev
```

## Cosmic SDK Examples

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch all features
const { objects: features } = await cosmic.objects
  .find({ type: 'features' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Fetch pricing tiers
const { objects: tiers } = await cosmic.objects
  .find({ type: 'pricing-tiers' })
  .depth(1)
```

## Cosmic CMS Integration

This app uses four content types: `features`, `pricing-tiers`, `faqs`, and `testimonials`. All content is fetched server-side via the Cosmic SDK with proper error handling for empty results.

## Deployment Options

- **Vercel**: Push to GitHub and import in Vercel
- **Netlify**: Connect repository and deploy

Set environment variables: `COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, `COSMIC_WRITE_KEY`
<!-- README_END -->