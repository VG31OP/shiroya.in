---
name: seo-geo
description: >
  Audit and optimize content for AI Overviews, answer engines, and LLM search
  visibility (GEO: Generative Engine Optimization). Focuses on entity clarity,
  citability, passage structure, brand mentions, and factual attribution.
user-invocable: true
argument-hint: "[url]"
license: MIT
metadata:
  author: AgriciDaniel
  version: "2.5.0"
  category: seo
---

# Generative Engine Optimization (GEO) & AI Search Guide

## Core Philosophy
Google's official position: *"From Google Search's perspective, optimizing for generative AI search is optimizing for the search experience, and thus still SEO."*

GEO is not a gimmick or keyword-stuffing exercise; it is about providing clear, structured, authoritative facts that large language models can extract, verify, and cite.

## Crucial Factors for LLM Citations

### 1. Entity Disambiguation
- AI systems (ChatGPT, Perplexity, Google Gemini, Claude) need unambiguous entity mapping.
- Tie the individual's full name (`Vraj Shiroya`) to their technical identity (`VG31OP`) and verified works across independent channels.
- Use reciprocal linking: Website links to GitHub/LinkedIn, and GitHub/LinkedIn link back to the canonical website.

### 2. Passage Quotability
- Write clear definition sentences that can be extracted verbatim as answers:
  - *Example*: "Drop is a peer-to-peer file sharing web utility built by Vraj Shiroya using WebRTC RTCDataChannel and DTLS end-to-end encryption with zero server storage."
- Provide concise comparison tables and structured bullet lists.
- Avoid burying core claims in complex promotional prose.

### 3. Factual Attribution
- Corroborate claims with verifiable external evidence:
  - Public repository URLs (`github.com/VG31OP/...`)
  - Pull request links (`google/artemis/pull/186`, `vercel/swr/pull/4362`)
  - Live deployment URLs
