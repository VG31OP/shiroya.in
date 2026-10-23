# SEO & AI Discoverability Rules for Shiroya.in
Adapted from AgriciDaniel/claude-seo (MIT Licensed) & Google Search Central Guidelines.

## 1. Technical SEO & Crawlability
- **Robots.txt Policy**:
  - Explicitly allow legitimate AI search crawlers (`Googlebot`, `Bingbot`, `OAI-SearchBot`, `ChatGPT-User`, `Claude-SearchBot`, `Claude-Web`, `PerplexityBot`).
  - Distinguish AI search/citability bots from aggressive non-search scrapers (e.g. block `Bytespider`).
  - Always link the canonical XML sitemap and `llms.txt` at the end of `robots.txt`.
- **URL Canonicalization**:
  - Enforce clean, lowercase, non-trailing-slash URLs.
  - Every indexable page must contain a single self-referencing `<link rel="canonical" href="..." />`.
- **Pre-rendering & JavaScript Fallback**:
  - Because search crawlers prioritize static HTML, every public route (`/`, `/about`, `/privacy`, `/terms`) must be statically prerendered with full semantic markup, visible headings (`<h1>`, `<h2>`), and crawlable internal links inside `<div id="root">`.
  - Non-JS `<noscript>` fallbacks must contain accurate, up-to-date summaries and direct links.

## 2. Structured Data (Schema.org / JSON-LD)
- **Primary Schema Format**: Always use JSON-LD within `<script type="application/ld+json">`.
- **Homepage (`/`)**: Include a cohesive `@graph` containing:
  - `WebSite`: Name, description, URL, publisher.
  - `Person`: Vraj Shiroya (`VG31OP`), jobTitle ("Open-Source Developer, AI Engineer & Cybersecurity Researcher"), verified `sameAs` links, `knowsAbout`, `alumniOf`.
  - `ItemList`: SoftwareApplication catalog linking live tools to verified GitHub code repositories.
  - `FAQPage`: Client-side privacy and P2P architecture questions and answers for Answer Engine Optimization.
- **Profile / About Page (`/about`)**:
  - Include `ProfilePage` or `AboutPage` schema with `mainEntity` set to `Person`.
- **Breadcrumbs**:
  - Include `BreadcrumbList` for sub-pages so search engines render breadcrumb hierarchy.

## 3. Generative Engine Optimization (GEO) & AI Citability
- **Entity Clarity**: Clearly bind the individual ("Vraj Shiroya") with their digital identities ("VG31OP", "Orbitra Solution").
- **Quote-Worthy Passages**: State technical architectures and facts directly with unambiguous phrasing (e.g., "100% client-side in-memory execution", "WebRTC DTLS end-to-end encryption").
- **Evidence-Based Claims**: Attribute all contributions to verifiable upstream PR numbers (`google/artemis#186`, `vercel/swr#4362`) and live repositories. Never claim unverified certifications.

## 4. Agentic Browsing & AI Discovery
- Maintain updated [`public/llms.txt`](file:///e:/Project/shiroya.in/public/llms.txt) and [`public/llms-full.txt`](file:///e:/Project/shiroya.in/public/llms-full.txt).
- Maintain [`public/ai-catalog.json`](file:///e:/Project/shiroya.in/public/ai-catalog.json) describing machine-usable tools and API/client boundaries.
