import { defineConfig } from 'tinacms';

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  'main';

export default defineConfig({
  branch,

  // Get these by running `pnpm tinacms init` after signing up at app.tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || '',
  token: process.env.TINA_TOKEN || '',

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'images',
      publicFolder: 'public',
    },
  },

  schema: {
    collections: [
      {
        name: 'site',
        label: 'Site Settings',
        path: 'src/content/site',
        format: 'json',
        ui: {
          allowedActions: { create: false, delete: false },
        },
        fields: [
          { type: 'string', name: 'name', label: 'Clinic Name', isTitle: true, required: true },
          { type: 'string', name: 'tagline', label: 'Tagline' },
          { type: 'string', name: 'phone', label: 'Phone (E.164)' },
          { type: 'string', name: 'phoneDisplay', label: 'Phone (display)' },
          { type: 'string', name: 'whatsapp', label: 'WhatsApp number' },
          { type: 'string', name: 'email', label: 'Email' },
          {
            type: 'object',
            name: 'address',
            label: 'Address',
            fields: [
              { type: 'string', name: 'streetAddress', label: 'Street' },
              { type: 'string', name: 'addressLocality', label: 'City' },
              { type: 'string', name: 'addressRegion', label: 'State' },
              { type: 'string', name: 'postalCode', label: 'Postal Code' },
              { type: 'string', name: 'addressCountry', label: 'Country (ISO-2)' },
            ],
          },
          {
            type: 'object',
            name: 'geo',
            label: 'Coordinates',
            fields: [
              { type: 'number', name: 'latitude', label: 'Latitude' },
              { type: 'number', name: 'longitude', label: 'Longitude' },
            ],
          },
          {
            type: 'object',
            name: 'hours',
            label: 'Opening Hours',
            fields: [
              { type: 'string', name: 'opens', label: 'Opens (HH:MM)' },
              { type: 'string', name: 'closes', label: 'Closes (HH:MM)' },
              { type: 'string', name: 'days', label: 'Days', list: true },
            ],
          },
          {
            type: 'object',
            name: 'social',
            label: 'Social Links',
            fields: [
              { type: 'string', name: 'facebook', label: 'Facebook URL' },
              { type: 'string', name: 'instagram', label: 'Instagram URL' },
              { type: 'string', name: 'linkedin', label: 'LinkedIn URL' },
              { type: 'string', name: 'youtube', label: 'YouTube URL' },
            ],
          },
          {
            type: 'object',
            name: 'rating',
            label: 'Aggregate Rating',
            fields: [
              { type: 'string', name: 'value', label: 'Rating Value' },
              { type: 'string', name: 'count', label: 'Review Count' },
            ],
          },
        ],
      },
      {
        name: 'service',
        label: 'Services',
        path: 'src/content/services',
        format: 'mdx',
        fields: [
          { type: 'string', name: 'title', label: 'Title', isTitle: true, required: true },
          { type: 'string', name: 'slug', label: 'Slug', required: true },
          { type: 'string', name: 'seoTitle', label: 'SEO Title' },
          { type: 'string', name: 'seoDescription', label: 'SEO Description', ui: { component: 'textarea' } },
          { type: 'image', name: 'heroImage', label: 'Hero Image' },
          { type: 'string', name: 'summary', label: 'Summary', ui: { component: 'textarea' } },
          { type: 'string', name: 'bullets', label: 'Bullet Points', list: true },
          { type: 'number', name: 'order', label: 'Order' },
          { type: 'datetime', name: 'updatedAt', label: 'Updated' },
          { type: 'rich-text', name: 'body', label: 'Body', isBody: true },
        ],
      },
      {
        name: 'page',
        label: 'Pages',
        path: 'src/content/pages',
        format: 'mdx',
        fields: [
          { type: 'string', name: 'title', label: 'Title', isTitle: true, required: true },
          { type: 'string', name: 'slug', label: 'Slug', required: true },
          { type: 'string', name: 'seoTitle', label: 'SEO Title' },
          { type: 'string', name: 'seoDescription', label: 'SEO Description', ui: { component: 'textarea' } },
          { type: 'string', name: 'canonical', label: 'Canonical URL' },
          { type: 'boolean', name: 'noindex', label: 'No-index' },
          { type: 'datetime', name: 'updatedAt', label: 'Updated' },
          { type: 'rich-text', name: 'body', label: 'Body', isBody: true },
        ],
      },
    ],
  },
});
