/**
 * Professional Analytics Utility
 * Centralizes all tracking logic for GA4 and Google Ads.
 */

interface TrackEventProps {
  event: string;
  category?: string;
  label?: string;
  value?: number;
  [key: string]: any;
}

export const trackEvent = ({ event, category, label, value, ...rest }: TrackEventProps) => {
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event,
      event_category: category,
      event_label: label,
      value: value,
      ...rest,
    });
    
    // Also trigger gtag if available directly
    if ((window as any).gtag) {
      (window as any).gtag('event', event, {
        event_category: category,
        event_label: label,
        value: value,
        ...rest,
      });
    }
    
    if (import.meta.env.DEV) {
      console.log(`[Analytics] Tracked: ${event}`, { category, label, value, ...rest });
    }
  }
};

/**
 * Specifically track button clicks with standard parameters
 */
export const trackButtonClick = (label: string, category: string = 'engagement') => {
  trackEvent({
    event: 'btn_click',
    category,
    label,
  });
};
