// Centralised JSON-LD builders for per-page SEO.

const SITE = 'https://jamunadental.com';
const PHONE = '+917200620011';
const ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: '41, Kurinji Street, Ram Nagar, Near Vijayan Temptation',
  addressLocality: 'Dindigul',
  addressRegion: 'Tamil Nadu',
  postalCode: '624001',
  addressCountry: 'IN',
};

export const dentistSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Jamuna Family Dental Care',
  alternateName: 'JFDC',
  description:
    'Modern dental clinic in Dindigul providing dental implants, root canal treatment, teeth whitening, braces, smile design, cosmetic dentistry, and pediatric dental care.',
  url: SITE,
  telephone: PHONE,
  address: ADDRESS,
  geo: { '@type': 'GeoCoordinates', latitude: 10.3673, longitude: 77.9803 },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '09:00',
    closes: '21:00',
  },
  image: `${SITE}/og-image.jpg`,
  sameAs: [
    'https://www.facebook.com/p/Jamuna-Family-Dental-Care-JFDC-100071995166959/',
    'https://in.linkedin.com/in/jamuna-family-dental-care-dindigul-0abb46358',
    'https://www.instagram.com/jamuna_family_dental_care/',
  ],
  founder: {
    '@type': 'Person',
    name: 'Dr. Arun Baabu Sarath',
    jobTitle: 'Lead Dentist & Prosthodontist',
    description: 'MDS – Prosthodontics, 15+ years of clinical experience',
  },
  medicalSpecialty: 'Dentistry',
  areaServed: [
    { '@type': 'City', name: 'Dindigul' },
    { '@type': 'State', name: 'Tamil Nadu' },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    bestRating: '5',
    worstRating: '1',
    ratingCount: '553',
    reviewCount: '553',
  },
};

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Jamuna Family Dental Care',
  url: SITE,
  logo: `${SITE}/og-image.jpg`,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: PHONE,
    contactType: 'customer service',
    areaServed: 'IN',
    availableLanguage: ['English', 'Tamil'],
  },
  sameAs: dentistSchema.sameAs,
};

export const breadcrumbHome = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
  ],
};

export const breadcrumbForService = (name: string, slug: string) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE}/#services` },
    { '@type': 'ListItem', position: 3, name, item: `${SITE}${slug}` },
  ],
});

export const medicalProcedureSchema = (
  name: string,
  description: string,
  slug: string,
) => ({
  '@context': 'https://schema.org',
  '@type': 'MedicalProcedure',
  name,
  description,
  url: `${SITE}${slug}`,
  performer: {
    '@type': 'Dentist',
    name: 'Jamuna Family Dental Care',
    telephone: PHONE,
    address: ADDRESS,
  },
});

export const homeFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do you accept dental insurance?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, we accept most major dental insurance plans.' },
    },
    {
      '@type': 'Question',
      name: 'How often should I visit the dentist?',
      acceptedAnswer: { '@type': 'Answer', text: 'We recommend visiting every 6 months for routine cleanings and checkups.' },
    },
    {
      '@type': 'Question',
      name: 'What should I expect at my first visit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your first visit includes a comprehensive exam, digital X-rays, oral cancer screening, and a personalized treatment plan.',
      },
    },
  ],
};
