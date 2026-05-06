import { defineConfig } from "tinacms";

const branch =
  process.env.NEXT_PUBLIC_TINA_BRANCH ||
  process.env.CF_PAGES_BRANCH ||        // Cloudflare Pages
  process.env.HEAD ||                    // Netlify
  "main";

export default defineConfig({
  branch,
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
        match: {
          include: "homepage",
        },
        fields: [
          {
            type: "object",
            label: "Hero Section",
            name: "hero",
            fields: [
              { type: "string", label: "Heading Part 1 (Black)", name: "heading_part1" },
              { type: "string", label: "Heading Part 2 (Blue)", name: "heading_part2" },
              { type: "string", label: "Subheading", name: "subheading" },
              { type: "string", label: "Description", name: "description", ui: { component: "textarea" } },
              { type: "string", label: "Call Button Text", name: "cta_text" },
              { type: "string", label: "Phone Number", name: "phone" },
              { type: "string", label: "WhatsApp Button Text", name: "whatsapp_text" },
              { type: "string", label: "WhatsApp Number", name: "whatsapp_number" },
              {
                type: "object",
                label: "Highlights",
                name: "highlights",
                list: true,
                ui: { itemProps: (item: any) => ({ label: item?.text || "Highlight Item" }) },
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
              { type: "string", label: "Subtitle", name: "subtitle", ui: { component: "textarea" } },
              { type: "string", label: "Description", name: "description", ui: { component: "textarea" } },
              { type: "string", label: "Bottom Banner Text", name: "banner_text", ui: { component: "textarea" } },
              { type: "string", label: "Years of Experience", name: "years_experience" },
              {
                type: "object",
                label: "Features Grid",
                name: "features",
                list: true,
                ui: { itemProps: (item: any) => ({ label: item?.title || "Feature Item" }) },
                fields: [
                  { type: "string", label: "Title", name: "title" },
                  { type: "string", label: "Description", name: "description" }
                ],
              },
              {
                type: "object",
                label: "Stats Row",
                name: "stats",
                list: true,
                ui: { itemProps: (item: any) => ({ label: item?.title || "Stat Item" }) },
                fields: [
                  { type: "string", label: "Title", name: "title" },
                  { type: "string", label: "Description", name: "description" }
                ],
              },
              { type: "image", label: "Image", name: "image" },
              { type: "string", label: "CTA Button Text (Primary)", name: "cta_text" },
              { type: "string", label: "CTA Button Text (Secondary)", name: "cta_secondary_text" },
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
                ui: { itemProps: (item: any) => ({ label: item?.title || "Service Card" }) },
                fields: [
                  { type: "string", label: "Title", name: "title" },
                  { type: "string", label: "Description", name: "description", ui: { component: "textarea" } },
                  {
                    type: "object",
                    label: "Bullets",
                    name: "bullets",
                    list: true,
                    ui: { itemProps: (item: any) => ({ label: item?.text || "Bullet Point" }) },
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
                ui: { itemProps: (item: any) => ({ label: item?.title || "Feature Item" }) },
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
                ui: { itemProps: (item: any) => ({ label: item?.question || "FAQ Question" }) },
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
            label: "Price Teller Section",
            name: "price_teller",
            fields: [
              { type: "string", label: "Badge Text", name: "badge" },
              { type: "string", label: "Heading", name: "heading" },
              { type: "string", label: "Description", name: "description", ui: { component: "textarea" } },
              {
                type: "object",
                label: "Treatments",
                name: "treatments",
                list: true,
                ui: {
                  itemProps: (item: any) => ({ label: item?.label || "Treatment Category" }),
                },
                fields: [
                  { type: "string", label: "Treatment Name", name: "label" },
                  { type: "image", label: "Feature Image", name: "image" },
                  {
                    type: "object",
                    label: "Services & Prices",
                    name: "services",
                    list: true,
                    ui: {
                      itemProps: (item: any) => ({ label: item?.name || "Service Price Item" }),
                    },
                    fields: [
                      { type: "string", label: "Service Name", name: "name" },
                      { type: "string", label: "Price", name: "price" },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            label: "Hero Carousel",
            name: "hero_carousel",
            fields: [
              {
                type: "object",
                label: "Images",
                name: "images",
                list: true,
                ui: { itemProps: (item: any) => ({ label: item?.alt || item?.src || "Carousel Image" }) },
                fields: [
                  { type: "image", label: "Image", name: "src" },
                  { type: "string", label: "Alt Text", name: "alt" }
                ]
              }
            ]
          },
          {
            type: "object",
            label: "Testimonials Section",
            name: "testimonials",
            fields: [
              { type: "string", label: "Badge", name: "badge" },
              { type: "string", label: "Heading", name: "heading" },
              { type: "string", label: "Description", name: "description", ui: { component: "textarea" } },
              {
                type: "object",
                label: "Reviews",
                name: "reviews",
                list: true,
                ui: { itemProps: (item: any) => ({ label: item?.author || "Review" }) },
                fields: [
                  { type: "string", label: "Author", name: "author" },
                  { type: "string", label: "Content", name: "content", ui: { component: "textarea" } },
                ],
              },
            ],
          },
          {
            type: "object",
            label: "Service Marquee",
            name: "service_marquee",
            fields: [
              {
                type: "string",
                label: "Services",
                name: "services",
                list: true
              }
            ]
          },
          {
            type: "object",
            label: "Milestones Section",
            name: "milestones",
            fields: [
              { type: "string", label: "Badge", name: "badge" },
              { type: "string", label: "Heading Part 1", name: "heading_part1" },
              { type: "string", label: "Heading Part 2 (Accent)", name: "heading_part2" },
              { type: "string", label: "Description", name: "description" },
              { type: "image", label: "Image", name: "image" },
              {
                type: "object",
                label: "Stats",
                name: "stats",
                list: true,
                ui: { itemProps: (item: any) => ({ label: item?.label || item?.value || "Stat Item" }) },
                fields: [
                  { type: "string", label: "Icon Name (lucide)", name: "icon" },
                  { type: "number", label: "Value", name: "value" },
                  { type: "string", label: "Suffix", name: "suffix" },
                  { type: "string", label: "Label", name: "label" },
                  { type: "string", label: "Icon Color Class", name: "iconColor" },
                  { type: "string", label: "Background Color Class", name: "bgColor" }
                ]
              }
            ]
          },
          {
            type: "object",
            label: "Mission & Vision Section",
            name: "mission_vision",
            fields: [
              { type: "string", label: "Badge", name: "badge" },
              { type: "string", label: "Heading", name: "heading" },
              { type: "string", label: "CTA Text", name: "cta_text" },
              {
                type: "object",
                label: "Cards",
                name: "cards",
                list: true,
                ui: { itemProps: (item: any) => ({ label: item?.title || "Card Item" }) },
                fields: [
                  { type: "string", label: "Icon Name (lucide)", name: "icon" },
                  { type: "string", label: "Title", name: "title" },
                  { type: "string", label: "Description", name: "description", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          {
            type: "object",
            label: "Clinic Gallery Marquee",
            name: "clinic_gallery",
            fields: [
              { type: "string", label: "Badge", name: "badge" },
              { type: "string", label: "Heading Part 1", name: "heading_part1" },
              { type: "string", label: "Heading Part 2", name: "heading_part2" },
              { type: "string", label: "Description", name: "description", ui: { component: "textarea" } },
              {
                type: "object",
                label: "Images",
                name: "images",
                list: true,
                ui: { itemProps: (item: any) => ({ label: item?.alt || item?.src || "Clinic Image" }) },
                fields: [
                  { type: "image", label: "Image", name: "src" },
                  { type: "string", label: "Alt Text", name: "alt" }
                ]
              }
            ]
          },
          {
            type: "object",
            label: "Photo Gallery Marquee",
            name: "photo_gallery",
            fields: [
              { type: "string", label: "Badge", name: "badge" },
              { type: "string", label: "Heading Part 1", name: "heading_part1" },
              { type: "string", label: "Heading Part 2", name: "heading_part2" },
              { type: "string", label: "Description", name: "description", ui: { component: "textarea" } },
              {
                type: "object",
                label: "Images",
                name: "images",
                list: true,
                ui: { itemProps: (item: any) => ({ label: item?.alt || item?.src || "Gallery Image" }) },
                fields: [
                  { type: "image", label: "Image", name: "src" },
                  { type: "string", label: "Alt Text", name: "alt" }
                ]
              }
            ]
          },
          {
            type: "object",
            label: "Instagram Reels Section",
            name: "instagram_reels",
            fields: [
              { type: "string", label: "Badge", name: "badge" },
              { type: "string", label: "Heading", name: "heading" },
              { type: "string", label: "Description", name: "description", ui: { component: "textarea" } },
              { type: "string", label: "CTA Text", name: "cta_text" },
              {
                type: "string",
                label: "Reel IDs",
                name: "reels",
                list: true
              }
            ]
          },
          {
            type: "object",
            label: "Team Section",
            name: "team",
            fields: [
              { type: "string", label: "Badge", name: "badge" },
              { type: "string", label: "Heading Part 1", name: "heading_part1" },
              { type: "string", label: "Heading Part 2 (Accent)", name: "heading_part2" },
              { type: "string", label: "Description", name: "description", ui: { component: "textarea" } },
              {
                type: "object",
                label: "Team Members",
                name: "members",
                list: true,
                ui: { itemProps: (item: any) => ({ label: item?.name || "Team Member" }) },
                fields: [
                  { type: "image", label: "Photo", name: "photo" },
                  { type: "string", label: "Name", name: "name" },
                  { type: "string", label: "Role", name: "role" },
                  { type: "string", label: "Degrees/Qualifications", name: "qualifications" },
                  { type: "string", label: "Bio", name: "bio", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          {
            type: "object",
            label: "Appointment Booking Section",
            name: "appointment",
            fields: [
              { type: "string", label: "Heading Part 1", name: "heading_part1" },
              { type: "string", label: "Heading Part 2 (Accent)", name: "heading_part2" },
              { type: "string", label: "Description", name: "description", ui: { component: "textarea" } },
              { type: "image", label: "Image", name: "image" }
            ]
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
