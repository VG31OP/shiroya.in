---
name: seo-technical
description: >
  Audit and optimize technical SEO across crawlability, indexability, security,
  canonical tags, XML sitemaps, robots.txt, AI crawlers, and server headers.
  Use when analyzing technical SEO or search engine bot access.
user-invocable: true
argument-hint: "[url]"
license: MIT
metadata:
  author: AgriciDaniel
  version: "2.5.0"
  category: seo
---

# Technical SEO Audit & Implementation Guide

## Categories

### 1. Crawlability & Robot Policy
- **Robots.txt Analysis**:
  - Verify `robots.txt` exists at root `/robots.txt` with HTTP 200.
  - Verify `Sitemap:` directive points to canonical `https://<domain>/sitemap.xml`.
  - **AI Search Crawlers**:
    - `OAI-SearchBot`: OpenAI's dedicated search crawler for ChatGPT Search answers.
    - `Claude-SearchBot`: Anthropic's dedicated crawler for Claude search answers.
    - `PerplexityBot`: Perplexity search indexer.
    - `Googlebot`: Google web search and AI Overviews.
    - `Bingbot`: Bing and Copilot search.
  - **AI Model Training Crawlers** (Allowed or Disallowed per site policy):
    - `GPTBot`, `ClaudeBot`, `Google-Extended`, `Applebot-Extended`.
  - **Aggressive Scrapers**:
    - Block non-search bulk scrapers such as `Bytespider`.

### 2. Indexability & Canonicalization
- **Canonical URLs**:
  - Every indexable page MUST have exactly one `<link rel="canonical" href="..." />`.
  - Canonical must be absolute, lowercase, protocol-consistent (`https://`), and match trailing-slash settings (`cleanUrls: true`, no trailing slash).
- **Status Codes & SPA Rewrites**:
  - Real 404 responses for nonexistent routes (or static `404.html` with `noindex`).
  - No redirect chains (maximum 1 hop).
- **Client-Side vs Prerendered HTML**:
  - Googlebot and AI crawlers prefer static HTML. Static routes must be prerendered so critical content, headings, and links are in initial HTML.

### 3. Security & Caching Headers
- Enforce HTTPS.
- Essential HTTP response headers:
  - `Strict-Transport-Security`: `max-age=63072000; includeSubDomains; preload`
  - `X-Content-Type-Options`: `nosniff`
  - `X-Frame-Options`: `SAMEORIGIN`
  - `Referrer-Policy`: `strict-origin-when-cross-origin`
  - `Permissions-Policy`: restrict unused features (camera, microphone, geolocation)
- Cache policies:
  - Cache static hashed assets (`/assets/*`) immutable (`max-age=31536000, immutable`).
  - Discovery assets (`robots.txt`, `sitemap.xml`, `llms.txt`) revalidate (`max-age=3600, must-revalidate`).
