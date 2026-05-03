import { useState } from 'react';
import { ChevronRight, ChevronDown, ShieldCheck, Settings, Calendar } from 'lucide-react';

/* ── Custom Dental SVG Icons ───────────────────────────────────────────── */
const IconTooth = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 21c-1.5 0-2.5-1-3-2.5l-1-4.5C7.5 13 7 12 5.5 12 4 12 3 10.5 3 8.5 3 5 5 3 8 3c1.5 0 2.5 1 3 2 1-1 2-2 3.5-2 3 0 5 2 5 5.5 0 2-1 3.5-2.5 3.5-1.5 0-2 1-2.5 2l-1 4.5c-.5 1.5-1.5 2.5-3 2.5z"/>
  </svg>
);

const IconRootCanal = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 21c-1.5 0-2.5-1-3-2.5l-1-4.5C7.5 13 7 12 5.5 12 4 12 3 10.5 3 8.5 3 5 5 3 8 3c1.5 0 2.5 1 3 2 1-1 2-2 3.5-2 3 0 5 2 5 5.5 0 2-1 3.5-2.5 3.5-1.5 0-2 1-2.5 2l-1 4.5c-.5 1.5-1.5 2.5-3 2.5z"/>
    <path d="M8 8v4l1 5" stroke="#ef4444" strokeDasharray="1 2"/>
    <path d="M16 8v4l-1 5" stroke="#ef4444" strokeDasharray="1 2"/>
  </svg>
);

const IconImplant = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 8c0-3 2-5 5-5s5 2 5 5c0 2-1 3-2 3H9c-1 0-2-1-2-3z"/>
    <path d="M10 11v1h4v-1"/>
    <path d="M11 12v6h2v-6"/>
    <path d="M10 14h4M10 16h4M11 18h2"/>
    <path d="M10 19l1 2 1-2h-2z"/>
  </svg>
);

const IconBraces = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 21c-1.5 0-2.5-1-3-2.5l-1-4.5C7.5 13 7 12 5.5 12 4 12 3 10.5 3 8.5 3 5 5 3 8 3c1.5 0 2.5 1 3 2 1-1 2-2 3.5-2 3 0 5 2 5 5.5 0 2-1 3.5-2.5 3.5-1.5 0-2 1-2.5 2l-1 4.5c-.5 1.5-1.5 2.5-3 2.5z"/>
    <path d="M3 8h18" stroke="#009AA7"/>
    <rect x="6" y="6.5" width="3" height="3" rx="0.5" fill="currentColor"/>
    <rect x="15" y="6.5" width="3" height="3" rx="0.5" fill="currentColor"/>
  </svg>
);

const IconAligner = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 10c0-3 3-5 5-5h8c2 0 5 2 5 5v4c0 2-1 3-3 3H6c-2 0-3-1-3-3v-4z" strokeDasharray="3 3"/>
    <path d="M7 10v4M12 9v5M17 10v4" opacity="0.5"/>
  </svg>
);

const IconCrown = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 21c-1.5 0-2.5-1-3-2.5l-1-4.5C7.5 13 7 12 5.5 12 4 12 3 10.5 3 8.5 3 5 5 3 8 3c1.5 0 2.5 1 3 2 1-1 2-2 3.5-2 3 0 5 2 5 5.5 0 2-1 3.5-2.5 3.5-1.5 0-2 1-2.5 2l-1 4.5c-.5 1.5-1.5 2.5-3 2.5z"/>
    <path d="M3 8.5c0-3.5 2-5.5 5-5.5 1.5 0 2.5 1 3 2 1-1 2-2 3.5-2 3 0 5 2 5 5.5 0 2-1 3.5-2.5 3.5H5.5C4 12 3 10.5 3 8.5z" fill="currentColor" fillOpacity="0.2"/>
    <path d="M5.5 12h13"/>
  </svg>
);

const IconWhitening = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 21c-1.5 0-2.5-1-3-2.5l-1-4.5C7.5 13 7 12 5.5 12 4 12 3 10.5 3 8.5 3 5 5 3 8 3c1.5 0 2.5 1 3 2 1-1 2-2 3.5-2 3 0 5 2 5 5.5 0 2-1 3.5-2.5 3.5-1.5 0-2 1-2.5 2l-1 4.5c-.5 1.5-1.5 2.5-3 2.5z"/>
    <path d="M18 2l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" fill="currentColor"/>
    <path d="M6 13l.5 1 1 .5-1 .5-.5 1-.5-1-1-.5 1-.5.5-1z" fill="currentColor"/>
  </svg>
);

const IconCleaning = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 21c-1.5 0-2.5-1-3-2.5l-1-4.5C7.5 13 7 12 5.5 12 4 12 3 10.5 3 8.5 3 5 5 3 8 3c1.5 0 2.5 1 3 2 1-1 2-2 3.5-2 3 0 5 2 5 5.5 0 2-1 3.5-2.5 3.5-1.5 0-2 1-2.5 2l-1 4.5c-.5 1.5-1.5 2.5-3 2.5z"/>
    <path d="M15 2l2 2-5 5M16 3l1 1" stroke="#009AA7"/>
    <circle cx="10" cy="9" r="1" fill="#009AA7"/>
  </svg>
);

const IconFilling = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 21c-1.5 0-2.5-1-3-2.5l-1-4.5C7.5 13 7 12 5.5 12 4 12 3 10.5 3 8.5 3 5 5 3 8 3c1.5 0 2.5 1 3 2 1-1 2-2 3.5-2 3 0 5 2 5 5.5 0 2-1 3.5-2.5 3.5-1.5 0-2 1-2.5 2l-1 4.5c-.5 1.5-1.5 2.5-3 2.5z"/>
    <circle cx="9" cy="6" r="1.5" fill="currentColor"/>
  </svg>
);

const IconExtraction = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 21c-1.5 0-2.5-1-3-2.5l-1-4.5C7.5 13 7 12 5.5 12 4 12 3 10.5 3 8.5 3 5 5 3 8 3c1.5 0 2.5 1 3 2 1-1 2-2 3.5-2 3 0 5 2 5 5.5 0 2-1 3.5-2.5 3.5-1.5 0-2 1-2.5 2l-1 4.5c-.5 1.5-1.5 2.5-3 2.5z"/>
    <path d="M6 2l3 6M18 2l-3 6" stroke="#ef4444"/>
    <path d="M9 8c1 2 5 2 6 0" stroke="#ef4444"/>
  </svg>
);

const IconDentures = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 10c0-3 2-4 4-4h8c2 0 4 1 4 4v2c0 4-3 6-8 6s-8-2-8-6v-2z"/>
    <path d="M8 6v4M12 5v5M16 6v4"/>
    <path d="M4 10h16"/>
  </svg>
);


/* ── Icon map (keyed by treatment label) ────────────────────────────────── */
const ICON_MAP: Record<string, { Icon: any; iconColor: string; bgLight: string }> = {
  'Root Canal':      { Icon: IconRootCanal,  iconColor: 'text-rose-500',    bgLight: 'bg-rose-50' },
  'Dental Implants': { Icon: IconImplant,    iconColor: 'text-primary',     bgLight: 'bg-primary/5' },
  'Braces':          { Icon: IconBraces,     iconColor: 'text-[#009AA7]',   bgLight: 'bg-[#009AA7]/10' },
  'Aligners':        { Icon: IconAligner,    iconColor: 'text-sky-500',     bgLight: 'bg-sky-50' },
  'Crowns':          { Icon: IconCrown,      iconColor: 'text-amber-500',   bgLight: 'bg-amber-50' },
  'Teeth Whitening': { Icon: IconWhitening,  iconColor: 'text-[#7ED1C8]',   bgLight: 'bg-[#7ED1C8]/20' },
  'Teeth Cleaning':  { Icon: IconCleaning,   iconColor: 'text-teal-500',    bgLight: 'bg-teal-50' },
  'Teeth Fillings':  { Icon: IconFilling,    iconColor: 'text-slate-600',   bgLight: 'bg-slate-50' },
  'Extraction':      { Icon: IconExtraction, iconColor: 'text-red-500',     bgLight: 'bg-red-50' },
  'Dentures':        { Icon: IconDentures,   iconColor: 'text-orange-500',  bgLight: 'bg-orange-50' },
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
interface Treatment { label: string; image?: string; services: Service[]; }
interface PriceTellerContent {
  badge?:       string;
  heading?:     string;
  description?: string;
  treatments?:  Treatment[];
}

/* ── Component ──────────────────────────────────────────────────────────── */
export default function PriceTellerSection({ content }: { content?: PriceTellerContent }) {
  const treatments: Treatment[] =
    content?.treatments && content.treatments.length > 0
      ? content.treatments
      : DEFAULT_TREATMENTS;

  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const active = treatments[selectedIdx];
  const { Icon: ActiveIcon } = (active && ICON_MAP[active.label]) ?? { Icon: IconTooth };
  const details = (active && TREATMENT_DETAILS[active.label]) ?? TREATMENT_DETAILS['Dental Implants'];

  return (
    <section className="py-20 bg-[#F2F5F7]">
      <div className="container mx-auto px-4">
        
        {/* ── Heading ── */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-4 py-1.5 mb-4 rounded-full text-xs font-bold bg-primary text-white tracking-wide uppercase">
            {content?.badge || 'Most Affordable in Dindigul'}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {content?.heading || 'Most Affordable Dental Treatments in Dindigul'}
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed text-lg">
            {content?.description || 'Transparent, honest pricing with zero hidden fees — select a treatment below to see our rates.'}
          </p>
        </div>
        
        {/* Main Card Wrapper */}
        <div className="bg-white rounded-[2rem] shadow-xl p-4 md:p-6 lg:p-8 flex flex-col lg:flex-row gap-6 max-w-[1400px] mx-auto border border-gray-100">
          
          {/* ── Mobile Dropdown (Visible only on mobile) ── */}
          <div className="block lg:hidden w-full">
            <div className="relative">
              <select 
                className="w-full appearance-none bg-white border border-gray-200 rounded-2xl py-4 pl-5 pr-12 text-gray-900 font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary shadow-sm text-lg"
                value={selectedIdx}
                onChange={(e) => setSelectedIdx(Number(e.target.value))}
              >
                {treatments.map((t, idx) => (
                  <option key={idx} value={idx}>{t.label} ({t.services.length} services)</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-gray-500">
                <ChevronDown className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* ── Left Sidebar Tabs (Hidden on mobile) ── */}
          <div className="hidden lg:flex w-72 flex-shrink-0 flex-col gap-2 overflow-y-auto h-[540px] pr-2 custom-scrollbar">
            {treatments.map((t, idx) => {
              const isSelected = selectedIdx === idx;
              const { Icon: TIcon, iconColor, bgLight } = ICON_MAP[t.label] ?? { Icon: IconTooth, iconColor: 'text-blue-600', bgLight: 'bg-blue-50' };
              
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedIdx(idx)}
                  className={`w-full flex items-center p-3 rounded-2xl transition-all duration-200 text-left flex-shrink-0 ${
                    isSelected 
                      ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                      : 'bg-white hover:bg-gray-50 border border-transparent hover:border-gray-100'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0 transition-colors ${
                    isSelected ? 'bg-white/20' : bgLight
                  }`}>
                    <TIcon className={`w-6 h-6 ${isSelected ? 'text-white' : iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <div className={`font-bold text-sm md:text-base ${isSelected ? 'text-white' : 'text-gray-900'}`}>
                      {t.label}
                    </div>
                    <div className={`text-xs mt-0.5 ${isSelected ? 'text-white/70' : 'text-gray-500'}`}>
                      {t.services.length} services
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 flex-shrink-0 ${isSelected ? 'text-white/60' : 'text-gray-300'}`} />
                </button>
              );
            })}
          </div>

          {/* ── Middle Image (Desktop only) ── */}
          <div className="hidden xl:block w-[320px] 2xl:w-[380px] flex-shrink-0 relative rounded-[1.5rem] overflow-hidden h-[540px]">
            <img 
              src={active.image || details.image} 
              alt={active.label} 
              className="absolute inset-0 w-full h-full object-cover" 
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            
            {/* Badge Overlay */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur rounded-xl p-5 shadow-xl border border-white/20">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full border-2 border-primary flex items-center justify-center flex-shrink-0 bg-blue-50 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">{details.badgeTitle}</div>
                  <div className="text-xs text-gray-600 mt-1 leading-relaxed">
                    {details.badgeDesc}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right Price List ── */}
          <div className="flex-1 min-w-0 flex flex-col bg-white rounded-[1.5rem] overflow-hidden border border-gray-100 shadow-sm relative h-[540px]">
            
            {/* Header */}
            <div className="bg-primary px-8 py-8 flex flex-col justify-center relative overflow-hidden flex-shrink-0">
              {/* Subtle background circle decoration */}
              <div className="absolute -right-10 -top-10 w-48 h-48 bg-white/5 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex items-center gap-5 relative z-10">
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/10">
                  <ActiveIcon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-white text-2xl md:text-3xl font-bold tracking-tight">{active.label}</h3>
                  <p className="text-white/70 text-sm mt-1">{active.services.length} treatments available</p>
                </div>
              </div>
            </div>

            {/* List */}
            <div className="flex-1 p-4 md:p-8 space-y-2 overflow-y-auto custom-scrollbar">
              {active.services.map((svc, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-4 py-4 border-b border-gray-100 last:border-0 hover:bg-[#F2F5F7]/50 transition-colors px-2 rounded-xl">
                  
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <div className="w-12 h-12 rounded-full bg-[#F2F5F7] flex items-center justify-center flex-shrink-0">
                      <ActiveIcon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm md:text-base">{svc.name}</div>
                    </div>
                  </div>
                  
                  <div className="sm:text-right pl-20 sm:pl-0">
                    <div className="font-bold text-primary text-base md:text-lg whitespace-nowrap">{svc.price}</div>
                  </div>
                  
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="bg-[#F2F5F7] px-6 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between border-t border-gray-100 gap-4 flex-shrink-0">
              <div className="flex items-center gap-3 text-sm text-gray-500 text-center sm:text-left">
                <Settings className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <span>Prices may vary based on case complexity.</span>
              </div>
              <a 
                href="#appointment" 
                className="bg-[#22c55e] hover:bg-[#16a34a] text-white font-semibold py-3 px-6 rounded-xl flex items-center gap-2 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 w-full sm:w-auto justify-center"
              >
                <Calendar className="w-4 h-4" />
                Call To Book Consultation
              </a>
            </div>

          </div>

        </div>
        
      </div>
      
      {/* Custom Scrollbar Styles for the sidebar */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent; 
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1; 
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8; 
        }
      `}</style>
    </section>
  );
}
