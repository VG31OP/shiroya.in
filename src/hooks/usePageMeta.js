import { useEffect } from 'react';

/**
 * Custom hook to update document title, canonical URL, meta description,
 * and crawl robots directives dynamically across SPA route transitions.
 */
export function usePageMeta({ title, description, canonicalUrl, robots }) {
  useEffect(() => {
    // 1. Update Title
    if (title) {
      document.title = title;
    }

    // 2. Update Meta Description
    if (description) {
      let descEl = document.querySelector('meta[name="description"]');
      if (!descEl) {
        descEl = document.createElement('meta');
        descEl.setAttribute('name', 'description');
        document.head.appendChild(descEl);
      }
      descEl.setAttribute('content', description);
    }

    // 3. Update Canonical Tag
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (canonicalUrl) {
      if (existingCanonical) {
        existingCanonical.setAttribute('href', canonicalUrl);
      } else {
        const canonicalEl = document.createElement('link');
        canonicalEl.setAttribute('rel', 'canonical');
        canonicalEl.setAttribute('href', canonicalUrl);
        document.head.appendChild(canonicalEl);
      }
    } else if (existingCanonical) {
      // Remove canonical tag on pages that should not have one (e.g. 404 / out of range)
      existingCanonical.remove();
    }

    // 4. Update Robots Directives
    const robotsValue = robots || 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
    ['robots', 'googlebot', 'bingbot'].forEach((name) => {
      let botEl = document.querySelector(`meta[name="${name}"]`);
      if (!botEl) {
        botEl = document.createElement('meta');
        botEl.setAttribute('name', name);
        document.head.appendChild(botEl);
      }
      botEl.setAttribute('content', robotsValue);
    });

    // 5. Scroll to top on page transition
    window.scrollTo(0, 0);

    return () => {
      // Reset robots back to default on unmount if it was changed
      if (robots && robots !== 'index, follow') {
        const defaultRobots = 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
        ['robots', 'googlebot', 'bingbot'].forEach((name) => {
          const botEl = document.querySelector(`meta[name="${name}"]`);
          if (botEl) {
            botEl.setAttribute('content', defaultRobots);
          }
        });
      }
    };
  }, [title, description, canonicalUrl, robots]);
}

export default usePageMeta;

