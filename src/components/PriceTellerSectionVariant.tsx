import { useState } from 'react';
import { ChevronRight, ShieldCheck, Settings, Calendar } from 'lucide-react';

/* ── Inline dental SVG icons ───────────────────────────────────────────── */
const IconTooth = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C9 2 6 4.5 6 7.5c0 1.8.7 3.3 1.5 4.5C8 14 8.5 19 10 21c.5.7 1 1 1.5 1s.8-.5 1-1.2c.2.7.5 1.2 1 1.2s1-.3 1.5-1C16.5 19 17 14 17.5 12c.8-1.2 1.5-2.7 1.5-4.5C19 4.5 16 2 12 2z"/>
  </svg>
);

const IconImplant = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="2" width="6" height="3" rx="1"/>
    <path d="M10 5v4M14 5v4"/>
    <path d="M8 9h8l-1.5 4h-5L8 9z"/>
    <path d="M10.5 13l-.5 5M13.5 13l.5 5"/>
    <path d="M10 18h4"/>
    <path d="M11 20h2v2h-2z"/>
  </svg>
);

const IconBraces = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 8c0-1 .5-2 1.5-2.5S7 5 7 5s.5 0 1 .5S9 7 9 8v8c0 1-.5 1.5-1 2s-1 .5-1.5.5-1.5-.5-1.5-.5S4 17 4 16V8z"/>
    <path d="M20 8c0-1-.5-2-1.5-2.5S17 5 17 5s-.5 0-1 .5S15 7 15 8v8c0 1 .5 1.5 1 2s1 .5 1.5.5 1.5-.5 1.5-.5S20 17 20 16V8z"/>
    <line x1="9" y1="12" x2="15" y2="12"/>
    <rect x="11" y="10.5" width="2" height="3" rx=".5" fill="currentColor" stroke="none"/>
  </svg>
);

const IconAligner = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 9c0-2 1.8-3.5 4-3.5h8c2.2 0 4 1.5 4 3.5v6c0 2-1.8 3.5-4 3.5H8c-2.2 0-4-1.5-4-3.5V9z"/>
    <path d="M8 9.5v5M12 8.5v7M16 9.5v5"/>
  </svg>
);

const IconCrown = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 17l2-8 4 4 4-7 4 7 4-4 2 8H2z"/>
    <path d="M4 17h16v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3z"/>
  </svg>
);

const IconWhitening = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C9 2 6.5 4 6 7H18c-.5-3-3-5-6-5z" fill="currentColor" fillOpacity="0.15"/>
    <path d="M6 7h12l-1 10c-.2 1.5-1.2 2.5-2.5 3h-5C8.2 19.5 7.2 18.5 7 17L6 7z"/>
    <path d="M9 12h6M10 15h4"/>
    <path d="M15 4l1.5-2M17 7l2-1M16 10l2 .5"/>
  </svg>
);

const IconCleaning = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="14" width="7" height="7" rx="2"/>
    <path d="M10 17.5h4a3 3 0 0 0 3-3V4a1 1 0 0 0-2 0v3h-1V4a1 1 0 0 0-2 0v3h-1V4a1 1 0 0 0-2 0v10.5"/>
  </svg>
);

const IconFilling = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C9 2 6 4.5 6 7.5c0 1.8.7 3.3 1.5 4.5C8 14 8.5 19 10 21c.5.7 1 1 1.5 1s.8-.5 1-1.2c.2.7.5 1.2 1 1.2s1-.3 1.5-1C16.5 19 17 14 17.5 12c.8-1.2 1.5-2.7 1.5-4.5C19 4.5 16 2 12 2z"/>
    <path d="M9.5 8.5h5v4h-5z" fill="currentColor" fillOpacity="0.3"/>
  </svg>
);

const IconExtraction = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 3h6l1 5H8L9 3z"/>
    <path d="M8 8c0 2 1.5 4 4 4s4-2 4-4"/>
    <path d="M12 12v4"/>
    <path d="M9 16l-3 5h12l-3-5H9z"/>
  </svg>
);

const IconDentures = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 7c0-2 1.5-3 4-3h8c2.5 0 4 1 4 3v3c0 4-3 8-8 8S4 14 4 10V7z"/>
    <path d="M8 7v3M11 6v4M14 6v4M17 7v3"/>
    <path d="M8 10c0 1 .5 2 1.5 2.5"/>
    <path d="M16 10c0 1-.5 2-1.5 2.5"/>
  </svg>
);


/* ── Icon map (keyed by treatment label) ────────────────────────────────── */
const ICON_MAP: Record<string, { Icon: any; iconColor: string; bgLight: string }> = {
  'Root Canal':      { Icon: IconTooth,      iconColor: 'text-indigo-600',  bgLight: 'bg-indigo-50' },
  'Dental Implants': { Icon: IconImplant,    iconColor: 'text-[#0B1A4D]',   bgLight: 'bg-blue-50'   },
  'Braces':          { Icon: IconBraces,     iconColor: 'text-purple-600',  bgLight: 'bg-purple-50' },
  'Aligners':        { Icon: IconAligner,    iconColor: 'text-amber-500',   bgLight: 'bg-amber-50'  },
  'Crowns':          { Icon: IconCrown,      iconColor: 'text-orange-500',  bgLight: 'bg-orange-50' },
  'Teeth Whitening': { Icon: IconWhitening,  iconColor: 'text-pink-500',    bgLight: 'bg-pink-50'   },
  'Teeth Cleaning':  { Icon: IconCleaning,   iconColor: 'text-rose-500',    bgLight: 'bg-rose-50'   },
  'Teeth Fillings':  { Icon: IconFilling,    iconColor: 'text-slate-600',   bgLight: 'bg-slate-50'  },
  'Extraction':      { Icon: IconExtraction, iconColor: 'text-gray-500',    bgLight: 'bg-gray-100'  },
  'Dentures':        { Icon: IconDentures,   iconColor: 'text-orange-400',  bgLight: 'bg-orange-50' },
};

/* ── Content Mapping for Middle Image ────────────────────────────────────── */
const TREATMENT_DETAILS: Record<string, { image: string, badgeTitle: string, badgeDesc: string }> = {
  'Root Canal': {
    image: '/uploads/service-root-canal.jpg',
    badgeTitle: 'Save Your Natural Tooth.',
    badgeDesc: 'Painless root canal treatments to eliminate infection and restore your smile.'
  },
  'Dental Implants': {
    image: '/uploads/dental-implants.jpg',
    badgeTitle: 'Stronger. Safer. Long-lasting.',
    badgeDesc: 'Dental implants look, feel, and function like natural teeth — built to last.'
  },
  'Braces': {
    image: '/uploads/orthodontics-aligners.jpg',
    badgeTitle: 'Perfect Your Smile.',
    badgeDesc: 'Traditional and advanced braces for effective teeth alignment.'
  },
  'Aligners': {
    image: '/uploads/clear-alligners.jpg',
    badgeTitle: 'Invisible & Comfortable.',
    badgeDesc: 'Clear aligners to straighten teeth discreetly without metal wires.'
  },
  'Crowns': {
    image: '/uploads/dental-crowns.jpg',
    badgeTitle: 'Restore Tooth Strength.',
    badgeDesc: 'Durable and natural-looking crowns to protect damaged teeth.'
  },
  'Teeth Whitening': {
    image: '/uploads/teeth-whitening.jpg',
    badgeTitle: 'Brighten Your Smile.',
    badgeDesc: 'Professional whitening for a radiant, confident smile.'
  },
  'Teeth Cleaning': {
    image: '/uploads/stock-dental-exam.jpg',
    badgeTitle: 'Maintain Oral Health.',
    badgeDesc: 'Thorough cleaning to prevent cavities and gum disease.'
  },
  'Teeth Fillings': {
    image: '/uploads/service-smile-design.jpg',
    badgeTitle: 'Seamless Restorations.',
    badgeDesc: 'Tooth-colored fillings that blend perfectly with your natural teeth.'
  },
  'Extraction': {
    image: '/uploads/emergency-dental.jpg',
    badgeTitle: 'Safe & Painless Removal.',
    badgeDesc: 'Gentle tooth extractions when necessary for your overall health.'
  },
  'Dentures': {
    image: '/uploads/stock-beautiful-smile.jpg',
    badgeTitle: 'Complete Your Smile.',
    badgeDesc: 'Comfortable and natural-looking dentures for a full, functional smile.'
  },
};

/* ── Fallback data (used when CMS content is not yet available) ─────────── */
const DEFAULT_TREATMENTS = [
  {
    label: 'Dental Implants',
    services: [
      { name: 'Basic Implants',   price: 'Rs. 18,000'         },
      { name: 'Advanced Implants', price: 'Rs. 25,000'        },
      { name: 'Nobel Implants',   price: 'Rs. 35,000 – 45,000' },
    ],
  },
  {
    label: 'Root Canal',
    services: [
      { name: 'Root Canal – Front Teeth',            price: 'Rs. 2,500' },
      { name: 'Root Canal – Back Teeth',             price: 'Rs. 3,000' },
      { name: 'Root Canal – Milk Tooth (Pulpectomy)', price: 'Rs. 2,500' },
      { name: 'Re-Root Canal Treatment',             price: 'Rs. 4,500' },
    ],
  },
  {
    label: 'Braces',
    services: [
      { name: 'Metal Braces (EMI available)',           price: 'Rs. 25,000' },
      { name: 'Ceramic Braces (EMI available)',         price: 'Rs. 38,000' },
      { name: 'Self Ligating Metal (EMI available)',    price: 'Rs. 45,000' },
    ],
  },
  {
    label: 'Aligners',
    services: [
      { name: 'Basic Aligner (14 days)',  price: 'Rs. 2,500 / Aligner' },
      { name: 'Advanced Aligner (7 days)', price: 'Rs. 3,500 / Aligner' },
      { name: 'Retainer (Essix)',         price: 'Rs. 1,800'            },
    ],
  },
  {
    label: 'Crowns',
    services: [
      { name: 'Zirconia – Basic (5 yr warranty)',    price: 'Rs. 6,000'              },
      { name: 'Zirconia – Advanced (10 yr warranty)', price: 'Rs. 10,000'            },
      { name: 'Ceramic Crown (PFM) – Basic',         price: 'Rs. 3,000'              },
    ],
  },
  {
    label: 'Teeth Whitening',
    services: [
      { name: 'Single Tooth',   price: 'Rs. 450'   },
      { name: 'All Front Teeth', price: 'Rs. 2,500' },
    ],
  },
  {
    label: 'Teeth Cleaning',
    services: [
      { name: 'Scaling – Front Teeth',              price: 'Rs. 450'    },
      { name: 'Scaling – Moderate Stains',          price: 'Rs. 1,200'  },
    ],
  },
  {
    label: 'Teeth Fillings',
    services: [
      { name: 'GIC Filling – Basic',              price: 'Rs. 500'   },
      { name: 'Composite Filling – Back Tooth',   price: 'Rs. 1,000' },
    ],
  },
  {
    label: 'Extraction',
    services: [
      { name: 'Extraction',                                     price: 'Rs. 500'   },
      { name: 'Impaction – Lower 3rd Molar',                    price: 'Rs. 3,500' },
    ],
  },
  {
    label: 'Dentures',
    services: [
      { name: 'Complete Denture – Basic',    price: 'Rs. 9,000'       },
      { name: 'Removable Denture',           price: 'Rs. 500 / Tooth' },
    ],
  },
];

/* ── Types ──────────────────────────────────────────────────────────────── */
interface Service   { name: string; price: string; }
interface Treatment { label: string; services: Service[]; }
interface PriceTellerContent {
  badge?:       string;
  heading?:     string;
  description?: string;
  treatments?:  Treatment[];
}

/* ── Component ──────────────────────────────────────────────────────────── */
export default function PriceTellerSectionVariant({ content }: { content?: PriceTellerContent }) {
  const treatments: Treatment[] =
    content?.treatments && content.treatments.length > 0
      ? content.treatments
      : DEFAULT_TREATMENTS;

  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const active = treatments[selectedIdx];
  const { Icon: ActiveIcon } = (active && ICON_MAP[active.label]) ?? { Icon: IconTooth };
  const details = (active && TREATMENT_DETAILS[active.label]) ?? TREATMENT_DETAILS['Dental Implants'];

  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="container mx-auto px-4">
        
        {/* ── Heading ── */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center px-4 py-1.5 mb-4 rounded-full text-xs font-bold bg-[#0B1A4D] text-white tracking-wide uppercase">
            {content?.badge || 'Most Affordable in Dindigul'}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {content?.heading || 'Most Affordable Dental Treatments in Dindigul'}
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed text-lg">
            {content?.description || 'Transparent, honest pricing with zero hidden fees — select a treatment below to see our rates.'}
          </p>
        </div>

        {/* ── Horizontal Scrollable Tabs ── */}
        <div className="flex overflow-x-auto gap-3 pb-6 mb-8 custom-scrollbar max-w-6xl mx-auto px-2">
          {treatments.map((t, idx) => {
            const isSelected = selectedIdx === idx;
            const { Icon: TIcon } = ICON_MAP[t.label] ?? { Icon: IconTooth };
            return (
              <button 
                key={idx}
                onClick={() => setSelectedIdx(idx)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full font-semibold transition-all flex-shrink-0 border ${
                  isSelected 
                    ? 'bg-[#0B1A4D] text-white border-[#0B1A4D] shadow-md shadow-blue-900/10' 
                    : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                }`}
              >
                <TIcon className={`w-5 h-5 ${isSelected ? 'text-white' : 'text-[#0B1A4D]'}`} />
                {t.label}
              </button>
            )
          })}
        </div>

        {/* ── Compact 2-Column Content Wrapper ── */}
        <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 p-4 md:p-6 lg:p-8 flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          
          {/* Left: Image (smaller, more compact) */}
          <div className="w-full lg:w-[40%] flex-shrink-0 relative rounded-2xl overflow-hidden min-h-[300px] lg:min-h-[400px]">
            <img src={details.image} alt={active.label} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1A4D]/90 via-[#0B1A4D]/20 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 flex items-start gap-3">
              <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center bg-white/10 backdrop-blur-sm flex-shrink-0">
                <ShieldCheck className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-white text-xl font-bold">{details.badgeTitle}</h3>
                <p className="text-white/80 text-sm mt-1">{details.badgeDesc}</p>
              </div>
            </div>
          </div>

          {/* Right: Prices */}
          <div className="flex-1 flex flex-col">
            <div className="mb-6 pb-6 border-b border-gray-100 flex items-center justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{active.label} Pricing</h3>
                <p className="text-gray-500 mt-1">{active.services.length} treatments available</p>
              </div>
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 border border-blue-100">
                 <ActiveIcon className="w-8 h-8 text-[#0B1A4D]" />
              </div>
            </div>
            
            <div className="flex-1 space-y-3">
              {active.services.map((svc, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 rounded-xl hover:bg-[#f4f6fc] transition-colors border border-transparent hover:border-blue-100/50 group">
                   <div className="font-semibold text-gray-800 text-lg flex items-center gap-3">
                     <div className="w-1.5 h-1.5 rounded-full bg-[#0B1A4D] group-hover:scale-150 transition-transform" />
                     {svc.name}
                   </div>
                   <div className="mt-2 sm:mt-0 font-bold text-[#0B1A4D] text-xl bg-blue-50 sm:bg-transparent px-4 py-1.5 sm:p-0 rounded-lg inline-block sm:block whitespace-nowrap text-right">
                     {svc.price}
                   </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm text-gray-500 flex items-center gap-2">
                <Settings className="w-4 h-4" /> <span>Prices may vary based on case complexity.</span>
              </div>
              <a href="#contact" className="bg-[#0B1A4D] hover:bg-[#0B1A4D]/90 text-white font-semibold py-3 px-8 rounded-full flex items-center gap-2 transition-all shadow-md hover:shadow-lg w-full sm:w-auto justify-center">
                <Calendar className="w-4 h-4" /> Book Consultation
              </a>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
