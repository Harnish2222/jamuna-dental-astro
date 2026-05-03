import { useState } from 'react';

const TREATMENTS = [
  {
    id: 'root-canal',
    label: 'Root Canal',
    icon: '🦷',
    services: [
      { name: 'Root Canal – Front Teeth', price: 'Rs. 2,500' },
      { name: 'Root Canal – Back Teeth', price: 'Rs. 3,000' },
      { name: 'Root Canal – Milk Tooth (Pulpectomy)', price: 'Rs. 2,500' },
      { name: 'Re-Root Canal Treatment', price: 'Rs. 4,500' },
    ],
  },
  {
    id: 'implants',
    label: 'Dental Implants',
    icon: '🔩',
    services: [
      { name: 'Basic Implants', price: 'Rs. 18,000' },
      { name: 'Advanced Implants', price: 'Rs. 25,000' },
      { name: 'Nobel Implants', price: 'Rs. 35,000 – 45,000' },
    ],
  },
  {
    id: 'braces',
    label: 'Braces',
    icon: '😁',
    services: [
      { name: 'Metal Braces (EMI)', price: 'Rs. 25,000' },
      { name: 'Ceramic Braces (EMI)', price: 'Rs. 38,000' },
      { name: 'Self Ligating Metal (EMI)', price: 'Rs. 45,000' },
      { name: 'Self Ligating Ceramic (EMI)', price: 'Rs. 65,000' },
      { name: 'Damon Metal (EMI)', price: 'Rs. 55,000' },
      { name: 'Damon Ceramic (EMI)', price: 'Rs. 90,000' },
    ],
  },
  {
    id: 'aligners',
    label: 'Aligners',
    icon: '✨',
    services: [
      { name: 'Basic Aligner (14 days)', price: 'Rs. 2,500 / Aligner' },
      { name: 'Advanced Aligner (7 days)', price: 'Rs. 3,500 / Aligner' },
      { name: 'Retainer (Essix)', price: 'Rs. 1,800' },
    ],
  },
  {
    id: 'crowns',
    label: 'Crowns',
    icon: '👑',
    services: [
      { name: 'Zirconia – Basic (5 yr warranty)', price: 'Rs. 6,000' },
      { name: 'Zirconia – Advanced (10 yr warranty)', price: 'Rs. 10,000' },
      { name: 'Zirconia – Premium (15 yr warranty)', price: 'Rs. 15,000' },
      { name: 'Ceramic Crown (PFM) – Basic', price: 'Rs. 3,000' },
      { name: 'Ceramic Crown (PFM) – Premium', price: 'Rs. 5,000' },
      { name: 'Metal Crown', price: 'Rs. 2,000' },
      { name: 'SSC Crown', price: 'Rs. 2,500' },
      { name: 'Gold Crown', price: 'Gold rate + Lab Charges' },
    ],
  },
  {
    id: 'whitening',
    label: 'Teeth Whitening',
    icon: '⚡',
    services: [
      { name: 'Single Tooth', price: 'Rs. 450' },
      { name: 'All Front Teeth', price: 'Rs. 2,500' },
    ],
  },
  {
    id: 'cleaning',
    label: 'Teeth Cleaning',
    icon: '🪥',
    services: [
      { name: 'Scaling – Front Teeth', price: 'Rs. 450' },
      { name: 'Scaling – Mild Stains', price: 'Rs. 750' },
      { name: 'Scaling – Moderate Stains', price: 'Rs. 1,200' },
      { name: 'Scaling – Severe Stains', price: 'Rs. 1,800' },
      { name: 'Gum Surgery – Full Mouth Curettage', price: 'Rs. 14,000' },
      { name: 'Gum Surgery – Full Mouth Flap', price: 'Rs. 25,000' },
    ],
  },
  {
    id: 'fillings',
    label: 'Teeth Fillings',
    icon: '🔧',
    services: [
      { name: 'GIC Filling – Basic', price: 'Rs. 500' },
      { name: 'GIC Filling – Advanced', price: 'Rs. 800' },
      { name: 'Composite Filling – Back Tooth', price: 'Rs. 1,000' },
      { name: 'Composite Filling – Front Tooth', price: 'Rs. 1,200' },
      { name: 'Advanced Smile Makeover Filling', price: 'Rs. 1,500' },
    ],
  },
  {
    id: 'extraction',
    label: 'Extraction',
    icon: '🦴',
    services: [
      { name: 'Pre Shedding', price: 'Rs. 350' },
      { name: 'Extraction', price: 'Rs. 500' },
      { name: 'Impaction – Upper 3rd Molar with Suturing', price: 'Rs. 2,500' },
      { name: 'Impaction – Lower 3rd Molar with Suturing', price: 'Rs. 3,500' },
    ],
  },
  {
    id: 'dentures',
    label: 'Dentures',
    icon: '😊',
    services: [
      { name: 'Complete Denture – Basic', price: 'Rs. 9,000' },
      { name: 'Complete Denture – Advanced', price: 'Rs. 12,000' },
      { name: 'Complete Denture – Premium', price: 'Rs. 15,000' },
      { name: 'Removable Denture', price: 'Rs. 500 / Tooth' },
    ],
  },
];

export default function PriceTellerSection() {
  const [selected, setSelected] = useState(TREATMENTS[0].id);
  const active = TREATMENTS.find((t) => t.id === selected)!;

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-3 py-1 mb-4 rounded-full text-xs font-semibold bg-primary text-primary-foreground">
            Transparent Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Know Your Treatment Cost
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Select a treatment below to see our straightforward pricing — no hidden fees, ever.
          </p>
        </div>

        {/* Category tabs — horizontally scrollable on mobile */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-hide justify-start md:justify-center flex-nowrap">
          {TREATMENTS.map((t) => (
            <button
              key={t.id}
              onClick={() => setSelected(t.id)}
              className={`flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border whitespace-nowrap
                ${selected === t.id
                  ? 'bg-primary text-primary-foreground border-primary shadow-md scale-105'
                  : 'bg-white text-foreground/70 border-border hover:border-primary/50 hover:text-primary'
                }`}
            >
              <span>{t.icon}</span>
              {t.label}
            </button>
          ))}
        </div>

        {/* Price card */}
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl border border-border shadow-lg overflow-hidden">
            {/* Card header */}
            <div className="bg-primary px-6 py-4 flex items-center gap-3">
              <span className="text-2xl">{active.icon}</span>
              <div>
                <h3 className="text-white font-bold text-lg">{active.label}</h3>
                <p className="text-white/70 text-xs">{active.services.length} treatment{active.services.length > 1 ? 's' : ''} available</p>
              </div>
            </div>

            {/* Service rows */}
            <div className="divide-y divide-border bg-white">
              {active.services.map((svc, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between px-6 py-4 hover:bg-primary/5 transition-colors duration-150 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                    <span className="text-foreground font-medium text-sm md:text-base">{svc.name}</span>
                  </div>
                  <span className="text-primary font-bold text-sm md:text-base whitespace-nowrap ml-4">
                    {svc.price}
                  </span>
                </div>
              ))}
            </div>

            {/* Card footer CTA */}
            <div className="bg-muted/40 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-xs text-muted-foreground text-center sm:text-left">
                💡 Prices may vary based on case complexity. Consultation is <strong>free</strong>.
              </p>
              <a
                href="tel:+917200620011"
                onClick={() => (window as any).gtag_report_phone_conversion?.()}
                className="flex-shrink-0 inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded-full shadow transition-all duration-200"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.26 12 19.79 19.79 0 0 1 1.19 3.37 2 2 0 0 1 3.17 1.18h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L7.17 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/>
                </svg>
                Book Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
