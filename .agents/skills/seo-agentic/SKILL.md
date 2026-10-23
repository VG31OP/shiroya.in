---
name: seo-agentic
description: >
  Audit and optimize agent readiness: machine-readable documentation (llms.txt,
  llms-full.txt), ai-catalog.json, AI agent discovery protocols, and clean
  semantic HTML for autonomous agents.
user-invocable: true
argument-hint: "[url]"
license: MIT
metadata:
  author: AgriciDaniel
  version: "2.5.0"
  category: seo
---

# Agentic Browsing & Machine Discovery Readiness

## Purpose
Ensure a website is understandable and directly usable by autonomous AI agents, LLMs, and browser assistants (ChatGPT browsing, Claude in Chrome, Gemini, Perplexity).

## Key Components

### 1. The `llms.txt` and `llms-full.txt` Standard
- Located at `/llms.txt` and `/llms-full.txt` (served as `text/plain; charset=utf-8`).
- Referenced in HTML head:
  `<link rel="alternate" type="text/plain" href="https://<domain>/llms.txt" title="LLM Documentation" />`
- Provides condensed, token-efficient, authoritative technical context for LLMs.

### 2. AI Tool Catalog (`ai-catalog.json`)
- Machine-readable JSON describing tools, live utilities, their parameters, privacy guarantees, and repository links.
- Enables agent tool use without relying on fragile DOM scraping.

### 3. Accessible HTML Tree
- Real HTML5 elements: `<nav>`, `<main>`, `<header>`, `<footer>`, `<section>`, `<article>`.
- Descriptive accessible link text (`aria-label`, title, readable text, no empty icon-only buttons).
- Screen-reader / crawler friendly text alternatives for kinetic and dynamic components.
