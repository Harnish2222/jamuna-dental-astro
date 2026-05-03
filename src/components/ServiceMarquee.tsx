const ToothIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 512 512" 
    fill="currentColor" 
    className={className}
  >
    <path d="M426.8 74.5C402.5 50.2 367.9 36 330.5 36c-25.2 0-49.8 7.1-71.2 20.5-3.2 2-7.3 2-10.5 0C227.4 43.1 202.8 36 177.6 36c-37.4 0-72 14.2-96.3 38.5C57.1 98.7 42.9 133.3 42.9 170.7c0 42.5 16.5 83.4 47.8 118.5 23.1 25.9 54.3 49.4 89.1 71.8 8.9 44.7 16.4 89.7 16.4 89.7 3.3 18.1 19.1 31.3 37.5 31.3h44.6c18.4 0 34.2-13.2 37.5-31.3 0 0 7.5-45 16.4-89.7 34.8-22.4 66-45.9 89.1-71.8 31.3-35.1 47.8-76 47.8-118.5 0-37.4-14.2-72-38.3-96.2z"/>
  </svg>
);

interface ServiceMarqueeProps {
  services?: string[];
}

const ServiceMarquee = ({ services = [] }: ServiceMarqueeProps) => {
  if (!services || services.length === 0) return null;

  return (
    <section className="bg-primary py-4 overflow-hidden">
      <div className="relative flex">
        <div className="animate-marquee flex whitespace-nowrap">
          {services.map((service, index) => (
            <div key={index} className="flex items-center mx-8">
              <ToothIcon className="w-6 h-6 text-white" />
              <span className="ml-3 text-white font-bold text-lg tracking-wide">
                {service}
              </span>
            </div>
          ))}
        </div>
        <div className="animate-marquee flex whitespace-nowrap" aria-hidden="true">
          {services.map((service, index) => (
            <div key={`dup-${index}`} className="flex items-center mx-8">
              <ToothIcon className="w-6 h-6 text-white" />
              <span className="ml-3 text-white font-bold text-lg tracking-wide">
                {service}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceMarquee;
