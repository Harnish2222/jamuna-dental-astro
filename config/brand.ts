// /config/brand.ts
export const brand = {
  name: "Jamuna Family Dental Care",
  tagline: "We Care; not just Cure",
  industry: "dental",
  
  colors: {
    primary: "#072674",      // Deep Navy
    accent: "#009AA7",       // Dental Teal
    secondary: "#7ED1C8",    // Soft Mint
    support: "#DDEBF7",      // Clinical Blue
    background: "#F2F5F7",   // Light Grey
    text: "#000000",         // Body Text Black
    success: "hsl(142, 71%, 45%)", // Conversion Success Green
  },
  
  fonts: {
    heading: "Outfit",
    body: "Plus Jakarta Sans",
  },
  
  contact: {
    phone: "", // To be filled from CMS
    email: "", // To be filled from CMS
    address: "Dindigul, Tamil Nadu",
    hours: "", // To be filled from CMS
    googleMapsEmbed: "",
    socialLinks: {
      facebook: "",
      instagram: "",
      google: "",
      yelp: "",
    },
  },
} as const;
