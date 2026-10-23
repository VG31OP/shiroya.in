---
name: seo-audit
description: >
  Comprehensive holistic SEO audit orchestrating technical checks, schema validation,
  Core Web Vitals, content quality, GEO citability, and agentic readiness.
user-invocable: true
argument-hint: "[url]"
license: MIT
metadata:
  author: AgriciDaniel
  version: "2.5.0"
  category: seo
---

# Comprehensive SEO Audit Orchestration

## Audit Workflow
1. **Technical Foundation**:
   - Check robots.txt (search bots + AI search crawlers allowed; scrapers blocked).
   - Check XML sitemap (all canonical routes present, clean URLs, valid dates).
   - Check canonical tags and trailing slash consistency.
   - Check security headers (HSTS, CSP, X-Frame-Options, X-Content-Type-Options).
2. **Pre-Rendering & Crawlability**:
   - Verify static pre-render HTML generation for non-JS crawlers.
   - Check noscript fallback semantic content.
3. **Structured Data Validation**:
   - Validate Schema.org JSON-LD (@graph, WebSite, Person, ProfilePage, ItemList, FAQPage, BreadcrumbList).
4. **GEO & Citability Check**:
   - Evaluate entity disambiguation (Vraj Shiroya / VG31OP).
   - Verify upstream PR and repository references.
5. **Agentic Readiness**:
   - Validate `llms.txt`, `llms-full.txt`, and `ai-catalog.json`.
