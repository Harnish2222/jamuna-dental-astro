import { defineCollection, z } from 'astro:content';

// Editable site-wide data (clinic name, phone, address, social links).
const site = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    phone: z.string(),
    phoneDisplay: z.string(),
    whatsapp: z.string(),
    email: z.string().email(),
    address: z.object({
      streetAddress: z.string(),
      addressLocality: z.string(),
      addressRegion: z.string(),
      postalCode: z.string(),
      addressCountry: z.string(),
    }),
    geo: z.object({
      latitude: z.number(),
      longitude: z.number(),
    }),
    hours: z.object({
      opens: z.string(),
      closes: z.string(),
      days: z.array(z.string()),
    }),
    social: z.object({
      facebook: z.string().url().optional(),
      instagram: z.string().url().optional(),
      linkedin: z.string().url().optional(),
      youtube: z.string().url().optional(),
    }),
    rating: z.object({
      value: z.string(),
      count: z.string(),
    }),
  }),
});

// Editable service pages — body is MDX so editors can format freely.
const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    seoTitle: z.string(),
    seoDescription: z.string(),
    heroImage: z.string().optional(),
    summary: z.string(),
    bullets: z.array(z.string()).default([]),
    order: z.number().default(0),
    publishedAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
});

// Editable static pages (privacy, terms, disclaimer, careers, etc.).
const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    seoTitle: z.string(),
    seoDescription: z.string(),
    canonical: z.string().url().optional(),
    noindex: z.boolean().default(false),
    updatedAt: z.coerce.date().optional(),
  }),
});

export const collections = { site, services, pages };
