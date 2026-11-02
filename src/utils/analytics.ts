// Google Analytics 4 (gtag.js) utility

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

export const GA_MEASUREMENT_ID = 'G-7YHC329ZJV';

/**
 * Log a virtual page view in Google Analytics
 */
export function trackPageView(pageTitle: string, pagePath: string) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', {
      page_title: pageTitle,
      page_location: window.location.href,
      page_path: pagePath,
      send_to: GA_MEASUREMENT_ID,
    });
  }
}

/**
 * Log custom business events (e.g. view_hustle, save_plan, copy_marketing)
 */
export function trackEvent(
  eventName: string,
  eventParams: Record<string, string | number | boolean | undefined> = {}
) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, {
      ...eventParams,
      send_to: GA_MEASUREMENT_ID,
    });
  }
}
