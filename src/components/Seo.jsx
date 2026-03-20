import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DEFAULT_TITLE = 'Shiroya — Free AI Tools for Students & Creators';
const DEFAULT_DESCRIPTION =
  'Use Shiroya’s free AI tools like background remover, image compressor, PDF tools, and more. Fast, secure, and no login required.';
const DEFAULT_KEYWORDS =
  'ai tools, free tools, background remover, image compressor, student tools';
const SITE_URL = 'https://shiroya.in';

const ensureMetaTag = (selector, attributes) => {
  let tag = document.head.querySelector(selector);
  if (!tag) {
    tag = document.createElement('meta');
    Object.entries(attributes).forEach(([key, value]) => tag.setAttribute(key, value));
    document.head.appendChild(tag);
  }
  return tag;
};

const ensureLinkTag = (selector, attributes) => {
  let tag = document.head.querySelector(selector);
  if (!tag) {
    tag = document.createElement('link');
    Object.entries(attributes).forEach(([key, value]) => tag.setAttribute(key, value));
    document.head.appendChild(tag);
  }
  return tag;
};

const Seo = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  canonicalPath,
  jsonLd,
}) => {
  const location = useLocation();

  useEffect(() => {
    document.title = title;

    const resolvedPath = canonicalPath ?? location.pathname;
    const canonicalUrl = `${SITE_URL}${resolvedPath}`;

    ensureMetaTag('meta[name="description"]', { name: 'description' }).setAttribute(
      'content',
      description,
    );
    ensureMetaTag('meta[name="keywords"]', { name: 'keywords' }).setAttribute('content', keywords);

    ensureMetaTag('meta[property="og:title"]', { property: 'og:title' }).setAttribute(
      'content',
      title,
    );
    ensureMetaTag('meta[property="og:description"]', {
      property: 'og:description',
    }).setAttribute('content', description);
    ensureMetaTag('meta[property="og:type"]', { property: 'og:type' }).setAttribute(
      'content',
      'website',
    );
    ensureMetaTag('meta[property="og:url"]', { property: 'og:url' }).setAttribute(
      'content',
      canonicalUrl,
    );

    ensureMetaTag('meta[name="twitter:card"]', { name: 'twitter:card' }).setAttribute(
      'content',
      'summary_large_image',
    );
    ensureMetaTag('meta[name="twitter:title"]', { name: 'twitter:title' }).setAttribute(
      'content',
      title,
    );
    ensureMetaTag('meta[name="twitter:description"]', {
      name: 'twitter:description',
    }).setAttribute('content', description);

    ensureLinkTag('link[rel="canonical"]', { rel: 'canonical' }).setAttribute('href', canonicalUrl);

    let scriptTag = document.head.querySelector('script[data-seo-jsonld="true"]');
    if (jsonLd) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.type = 'application/ld+json';
        scriptTag.dataset.seoJsonld = 'true';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(jsonLd);
    } else if (scriptTag) {
      scriptTag.remove();
    }

    return () => {
      if (scriptTag && !jsonLd) {
        scriptTag.remove();
      }
    };
  }, [canonicalPath, description, jsonLd, keywords, location.pathname, title]);

  return null;
};

export default Seo;
