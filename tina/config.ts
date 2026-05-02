import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        label: "Homepage",
        name: "homepage",
        path: "src/data",
        format: "json",
        ui: {
          previewSrc: "/",
        },
        fields: [
          {
            type: "object",
            label: "Hero Section",
            name: "hero",
            fields: [
              { type: "string", label: "Heading Part 1", name: "heading_part1" },
              { type: "string", label: "Heading Part 2 (Accent)", name: "heading_part2" },
              { type: "string", label: "Heading Part 3", name: "heading_part3" },
              { type: "string", label: "Heading Part 4 (Accent)", name: "heading_part4" },
              { type: "string", label: "Description", name: "description", ui: { component: "textarea" } },
              { type: "string", label: "CTA Button Text", name: "cta_text" },
              { type: "string", label: "Phone Number", name: "phone" },
              {
                type: "object",
                label: "Highlights",
                name: "highlights",
                list: true,
                fields: [{ type: "string", label: "Text", name: "text" }],
              },
              {
                type: "object",
                label: "Social Proof",
                name: "social_proof",
                fields: [
                  { type: "string", label: "Review Count", name: "review_count" },
                  { type: "string", label: "Rating", name: "rating" },
                ],
              },
            ],
          },
          {
            type: "object",
            label: "About Us Section",
            name: "about",
            fields: [
              { type: "string", label: "Badge", name: "badge" },
              { type: "string", label: "Heading Part 1", name: "heading_part1" },
              { type: "string", label: "Heading Part 2 (Accent)", name: "heading_part2" },
              { type: "string", label: "Heading Part 3", name: "heading_part3" },
              { type: "string", label: "Description", name: "description", ui: { component: "textarea" } },
              {
                type: "object",
                label: "Highlights",
                name: "highlights",
                list: true,
                fields: [{ type: "string", label: "Text", name: "text" }],
              },
              { type: "image", label: "Image", name: "image" },
              { type: "string", label: "CTA Button Text", name: "cta_text" },
            ],
          },
          {
            type: "object",
            label: "Services Section",
            name: "services",
            fields: [
              { type: "string", label: "Badge", name: "badge" },
              { type: "string", label: "Title", name: "title" },
              { type: "string", label: "Description", name: "description", ui: { component: "textarea" } },
              {
                type: "object",
                label: "Service Cards",
                name: "cards",
                list: true,
                fields: [
                  { type: "string", label: "Title", name: "title" },
                  { type: "string", label: "Description", name: "description", ui: { component: "textarea" } },
                  {
                    type: "object",
                    label: "Bullets",
                    name: "bullets",
                    list: true,
                    fields: [{ type: "string", label: "Text", name: "text" }],
                  },
                  { type: "image", label: "Image", name: "image" },
                  { type: "string", label: "Link", name: "link" },
                ],
              },
            ],
          },
          {
            type: "object",
            label: "Why Choose JFDC",
            name: "why_choose",
            fields: [
              { type: "string", label: "Heading", name: "heading" },
              { type: "string", label: "Description", name: "description", ui: { component: "textarea" } },
              { type: "image", label: "Image", name: "image" },
              {
                type: "object",
                label: "Features",
                name: "features",
                list: true,
                fields: [
                  { type: "string", label: "Title", name: "title" },
                  { type: "string", label: "Description", name: "description", ui: { component: "textarea" } },
                ],
              },
            ],
          },
          {
            type: "object",
            label: "FAQ Section",
            name: "faq",
            fields: [
              { type: "string", label: "Badge", name: "badge" },
              { type: "string", label: "Heading Part 1", name: "heading_part1" },
              { type: "string", label: "Heading Part 2", name: "heading_part2" },
              {
                type: "object",
                label: "FAQ Items",
                name: "items",
                list: true,
                fields: [
                  { type: "string", label: "Question", name: "question" },
                  { type: "string", label: "Answer", name: "answer", ui: { component: "textarea" } },
                ],
              },
              { type: "image", label: "Image", name: "image" },
            ],
          },
          {
            type: "object",
            label: "Settings",
            name: "settings",
            fields: [
              { type: "string", label: "Title", name: "title" },
              { type: "string", label: "Description", name: "description", ui: { component: "textarea" } },
              { type: "string", label: "Canonical", name: "canonical" },
            ],
          },
        ],
      },
    ],
  },
});
