import { useEffect } from 'react';

/**
 * Custom hook to update document title, canonical URL, and meta description
 * dynamically across SPA route transitions.
 */
export function usePageMeta({ title, description, canonicalUrl }) {
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
    if (canonicalUrl) {
      let canonicalEl = document.querySelector('link[rel="canonical"]');
      if (!canonicalEl) {
        canonicalEl = document.createElement('link');
        canonicalEl.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalEl);
      }
      canonicalEl.setAttribute('href', canonicalUrl);
    }

    // 4. Scroll to top on page transition
    window.scrollTo(0, 0);
  }, [title, description, canonicalUrl]);
}

export default usePageMeta;
