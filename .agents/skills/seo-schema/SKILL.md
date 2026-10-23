---
name: seo-schema
description: >
  Detect, validate, and generate Schema.org JSON-LD structured data for web pages,
  people, organizations, software applications, and FAQs. Use when structuring
  rich results or entity graph connections.
user-invocable: true
argument-hint: "[url]"
license: MIT
metadata:
  author: AgriciDaniel
  version: "2.5.0"
  category: seo
---

# Schema.org Structured Data Guidelines

## Core Principles
1. **JSON-LD Only**: Embed JSON-LD inside `<script type="application/ld+json">` in the `<head>` or body.
2. **Entity Graphs**: Connect related entities using `@graph` rather than disconnected blocks.
3. **No Placeholders**: Never use dummy reviews, fabricated aggregate ratings, or unverified claims.

## Key Schemas for Developer & Platform Sites

### 1. Person Schema (`https://schema.org/Person`)
- Connect verified creator identities to their public handles:
  - `name`: Full real name (e.g., "Vraj Shiroya")
  - `alternateName`: Online handles (e.g., ["VG31OP", "Vraj", "VG"])
  - `jobTitle`: Primary professional positioning
  - `url`: Canonical about or portfolio page
  - `sameAs`: Array of verified external profiles (GitHub, LinkedIn, X, Instagram)
  - `knowsAbout`: Technical specializations
  - `alumniOf`: Verified educational institution

### 2. ProfilePage Schema (`https://schema.org/ProfilePage`)
- For dedicated `/about` or bio pages:
  - `mainEntity`: References or embeds the `Person` schema.
  - Signal to Google that the page is the authoritative biographical profile of the author.

### 3. SoftwareApplication Schema (`https://schema.org/SoftwareApplication`)
- For web utilities, browser tools, and open-source applications:
  - `name`: Name of tool (e.g., "Drop", "BgZero", "Web Shiroya")
  - `url`: Direct application URL
  - `codeRepository`: Verified GitHub repository URL
  - `applicationCategory`: DeveloperApplication / UtilitiesApplication / GraphicsApplication
  - `operatingSystem`: Supported browsers / environments
  - `offers`: Free (`price: "0"`, `priceCurrency: "USD"`)

### 4. BreadcrumbList Schema (`https://schema.org/BreadcrumbList`)
- Hierarchy navigation for search result trails:
  - Position 1: Home (`https://<domain>/`)
  - Position 2: Current Page (`https://<domain>/<page>`)
