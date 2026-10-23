#!/usr/bin/env node

/**
 * Static Page Prerendering Script for Shiroya.in
 * Generates crawlable, route-specific HTML files for /privacy, /terms, and /404
 * ensuring search crawlers (Googlebot, Bingbot, etc.) receive dedicated
 * titles, descriptions, canonical URLs, and full semantic body text
 * without requiring JavaScript rendering.
 */

import fs from 'fs';
import path from 'path';

const DIST_DIR = path.join(process.cwd(), 'dist');
const BASE_HTML_PATH = path.join(DIST_DIR, 'index.html');

if (!fs.existsSync(BASE_HTML_PATH)) {
  console.error('Error: dist/index.html not found. Run vite build first.');
  process.exit(1);
}

const baseHtml = fs.readFileSync(BASE_HTML_PATH, 'utf8');

function generatePageHtml({ title, description, canonicalUrl, robots, bodyHtml, jsonLd }) {
  let html = baseHtml;

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/, `<title>${title}</title>`);

  // Replace Canonical Link
  if (canonicalUrl) {
    if (html.includes('<link rel="canonical"')) {
      html = html.replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${canonicalUrl}" />`);
    } else {
      html = html.replace('</head>', `  <link rel="canonical" href="${canonicalUrl}" />\n  </head>`);
    }
  } else if (html.includes('<link rel="canonical"')) {
    html = html.replace(/<link rel="canonical" href=".*?" \/>\s*/, '');
  }

  // Replace Meta Description
  html = html.replace(
    /<meta name="description" content=".*?" \/>/,
    `<meta name="description" content="${description}" />`
  );

  // Replace Robots if specified (e.g. for 404)
  if (robots) {
    html = html.replace(
      /<meta name="robots" content=".*?" \/>/,
      `<meta name="robots" content="${robots}" />`
    );
    html = html.replace(
      /<meta name="googlebot" content=".*?" \/>/,
      `<meta name="googlebot" content="${robots}" />`
    );
  }

  // Replace OG / Twitter Tags
  html = html.replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${title}" />`);
  html = html.replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${description}" />`);
  if (canonicalUrl) {
    html = html.replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${canonicalUrl}" />`);
    html = html.replace(/<meta name="twitter:url" content=".*?" \/>/, `<meta name="twitter:url" content="${canonicalUrl}" />`);
  }
  html = html.replace(/<meta name="twitter:title" content=".*?" \/>/, `<meta name="twitter:title" content="${title}" />`);
  html = html.replace(/<meta name="twitter:description" content=".*?" \/>/, `<meta name="twitter:description" content="${description}" />`);

  // Replace Structured Data (JSON-LD) if specified
  if (jsonLd) {
    const jsonLdString = typeof jsonLd === 'string' ? jsonLd : JSON.stringify(jsonLd, null, 2);
    html = html.replace(
      /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
      `<script type="application/ld+json">\n${jsonLdString}\n    </script>`
    );
  }

  // Inject prerendered semantic body inside #root
  if (bodyHtml) {
    html = html.replace('<div id="root"></div>', `<div id="root">${bodyHtml}</div>`);
  }

  return html;
}

// 0. Generate /about
const aboutBody = `
<main style="max-width: 900px; margin: 0 auto; padding: 4rem 1.5rem; font-family: sans-serif; color: #E5E7EB; background: #08080A;">
  <p style="margin-bottom: 2rem;"><a href="/" style="color: #20E070; font-family: monospace; font-size: 0.875rem;">← Return to Shiroya Tool Lab</a></p>

  <header style="border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 2rem; margin-bottom: 3rem;">
    <span style="display: inline-block; padding: 0.25rem 0.75rem; border-radius: 9999px; background: rgba(32,224,112,0.1); border: 1px solid rgba(32,224,112,0.4); color: #20E070; font-family: monospace; font-size: 0.75rem; margin-bottom: 1rem;">ACTIVE DEVELOPER // GUJARAT, INDIA • GITHUB: @VG31OP</span>
    <h1 style="font-size: 2.75rem; font-weight: 900; color: #FFFFFF; margin-bottom: 0.5rem; line-height: 1.2;">About <span style="color: #20E070;">Vraj Shiroya</span></h1>
    <p style="font-size: 1.35rem; color: #D1D5DB; margin-bottom: 1.5rem; font-weight: 300;">Open-Source Developer, AI Engineer &amp; Cybersecurity Researcher</p>
    <p style="line-height: 1.8; font-size: 1.1rem; color: #9CA3AF; margin-bottom: 1.5rem;">Vraj Shiroya is a software developer, open-source contributor, and AI-focused builder from Gujarat, India. He develops software products, AI-powered applications, developer tools, and experiments across intelligent systems and cybersecurity.</p>
    
    <div style="display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.5rem;">
      <a href="https://github.com/VG31OP" style="display: inline-block; padding: 0.65rem 1.25rem; background: #20E070; color: #000; font-weight: 700; font-family: monospace; font-size: 0.8rem; border-radius: 0.5rem; text-decoration: none;">Vraj Shiroya on GitHub</a>
      <a href="https://www.linkedin.com/in/vrajshiroya" style="display: inline-block; padding: 0.65rem 1.25rem; background: rgba(255,255,255,0.05); color: #FFF; font-weight: 700; font-family: monospace; font-size: 0.8rem; border-radius: 0.5rem; border: 1px solid rgba(255,255,255,0.1); text-decoration: none;">Vraj Shiroya on LinkedIn</a>
      <a href="https://vraj.shiroya.in" style="display: inline-block; padding: 0.65rem 1.25rem; background: rgba(255,255,255,0.05); color: #FFF; font-weight: 700; font-family: monospace; font-size: 0.8rem; border-radius: 0.5rem; border: 1px solid rgba(255,255,255,0.1); text-decoration: none;">Portfolio (vraj.shiroya.in)</a>
    </div>
  </header>

  <section style="margin-bottom: 3rem;">
    <h2 style="font-size: 1.6rem; color: #FFFFFF; margin-bottom: 1rem;">1. Verified Open-Source Contributions</h2>
    <p style="line-height: 1.7; color: #9CA3AF; margin-bottom: 1.25rem;">Real pull requests submitted to upstream open-source repositories:</p>
    <ul style="line-height: 1.8; color: #D1D5DB; padding-left: 1.5rem;">
      <li><strong><a href="https://github.com/google/artemis/pull/186" style="color: #20E070;">google/artemis PR #186</a></strong>: Normalized message part order for Vertex AI Gemini tool turns (fixes #156). Complying with Google Vertex AI Gemini conversational turn specifications.</li>
      <li><strong><a href="https://github.com/vercel/swr/pull/4362" style="color: #20E070;">vercel/swr PR #4362</a></strong>: Avoid redundant _k cache write on mount. Improved cache mutation lifecycle in React/Next.js data-fetching runtime.</li>
      <li><strong><a href="https://github.com/ollama/ollama-vscode/pull/91" style="color: #20E070;">ollama/ollama-vscode PR #91</a></strong>: Show thinking settings in Ollama: Diagnose Models (closes #81). Displayed thinking settings and improved long chat stream error handling.</li>
    </ul>
    <p style="margin-top: 1rem;"><a href="https://github.com/VG31OP" style="color: #20E070; font-family: monospace;">Explore all open-source contributions by Vraj Shiroya on GitHub (@VG31OP) →</a></p>
  </section>

  <section style="margin-bottom: 3rem;">
    <h2 style="font-size: 1.6rem; color: #FFFFFF; margin-bottom: 1rem;">2. AI Development &amp; Intelligent Systems</h2>
    <p style="line-height: 1.7; color: #D1D5DB;">As a <strong>Google Gemini Student Ambassador</strong>, Vraj conducts developer demonstrations, explores multimodal Gemini API applications, and advances understanding of structured tool use, system instruction engineering, and LLM turn normalization. He also engineered <strong>BgZero</strong> (bgzero.shiroya.in), executing computer vision image segmentation directly in client memory without external server uploads.</p>
  </section>

  <section style="margin-bottom: 3rem;">
    <h2 style="font-size: 1.6rem; color: #FFFFFF; margin-bottom: 1rem;">3. Cybersecurity Research &amp; Privacy Architecture</h2>
    <p style="line-height: 1.7; color: #D1D5DB;">Vraj Shiroya focuses on defensive privacy architecture, secure protocols, and client-side sandboxing. His work includes client-side zero-storage sandboxing across the Shiroya Tool Lab, WebRTC DTLS direct device streaming in Drop (drop.shiroya.in), bandwidth bonding research in Network-Speed-Combiner, and academic coursework in Network Security at Gujarat Technological University.</p>
  </section>

  <section style="margin-bottom: 3rem;">
    <h2 style="font-size: 1.6rem; color: #FFFFFF; margin-bottom: 1rem;">4. Software Products &amp; Repositories</h2>
    <ul style="line-height: 1.8; color: #D1D5DB; padding-left: 1.5rem;">
      <li><strong><a href="https://drop.shiroya.in" style="color: #20E070;">Drop</a></strong> (<a href="https://github.com/VG31OP/drop" style="color: #20E070;">VG31OP/drop</a>): WebRTC peer-to-peer encrypted file sharing with zero cloud storage.</li>
      <li><strong><a href="https://bgzero.shiroya.in" style="color: #20E070;">BgZero</a></strong> (<a href="https://github.com/VG31OP/BGZero" style="color: #20E070;">VG31OP/BGZero</a>): In-browser AI image background remover and compressor.</li>
      <li><strong><a href="https://web.shiroya.in" style="color: #20E070;">Web Shiroya</a></strong> (<a href="https://github.com/VG31OP/web-installer" style="color: #20E070;">VG31OP/web-installer</a>): Self-hosted website crawler and source downloader packaging assets into downloadable ZIP archives.</li>
      <li><strong><a href="https://github.com/VG31OP/Network-Speed-Combiner" style="color: #20E070;">Network-Speed-Combiner</a></strong>: Desktop download manager splitting file downloads across concurrent network interfaces.</li>
      <li><strong><a href="https://pdf.shiroya.in" style="color: #20E070;">PDF Tools</a></strong>: In-memory browser PDF manipulation suite.</li>
      <li><strong><a href="https://github.com/VG31OP/shiroya.in" style="color: #20E070;">VG31OP/shiroya.in</a></strong>: Platform source code and kinetic UI.</li>
    </ul>
  </section>

  <section style="margin-bottom: 3rem;">
    <h2 style="font-size: 1.6rem; color: #FFFFFF; margin-bottom: 1rem;">5. Education &amp; Verified Credentials</h2>
    <ul style="line-height: 1.8; color: #D1D5DB; padding-left: 1.5rem;">
      <li><strong>B.Tech in Computer Science and Engineering</strong> — Gujarat Technological University (GTU), India.</li>
      <li><strong>Google Gemini Student Ambassador</strong> — Google Developer Community.</li>
      <li><strong>Founder</strong> — Orbitra Solution.</li>
    </ul>
  </section>

  <section style="margin-bottom: 2rem;">
    <h2 style="font-size: 1.6rem; color: #FFFFFF; margin-bottom: 1rem;">6. Connect</h2>
    <p style="line-height: 1.7; color: #D1D5DB;">Email: <a href="mailto:vraj@shiroya.in" style="color: #20E070;">vraj@shiroya.in</a> | GitHub: <a href="https://github.com/VG31OP" style="color: #20E070;">@VG31OP</a> | LinkedIn: <a href="https://www.linkedin.com/in/vrajshiroya" style="color: #20E070;">linkedin.com/in/vrajshiroya</a></p>
  </section>
</main>
`;

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": "https://shiroya.in/about#webpage",
      "url": "https://shiroya.in/about",
      "name": "About Vraj Shiroya | Open-Source Developer & AI Engineer",
      "description": "Official profile and technical dossier of Vraj Shiroya (VG31OP) — Open-Source Developer, AI Engineer, and Cybersecurity Researcher from Gujarat, India.",
      "mainEntity": {
        "@id": "https://shiroya.in/#creator"
      },
      "breadcrumb": {
        "@id": "https://shiroya.in/about#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://shiroya.in/about#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://shiroya.in/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About Vraj Shiroya",
          "item": "https://shiroya.in/about"
        }
      ]
    },
    {
      "@type": "Person",
      "@id": "https://shiroya.in/#creator",
      "name": "Vraj Shiroya",
      "alternateName": ["VG31OP", "Vraj", "Shiroya"],
      "jobTitle": "Open-Source Developer, AI Engineer & Cybersecurity Researcher",
      "description": "Vraj Shiroya is a software developer, open-source contributor, and AI-focused builder from Gujarat, India. He develops software products, AI-powered applications, developer tools, and experiments across intelligent systems and cybersecurity.",
      "url": "https://shiroya.in/about",
      "email": "vraj@shiroya.in",
      "gender": "https://schema.org/Male",
      "nationality": {
        "@type": "Country",
        "name": "India"
      },
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "Gujarat Technological University"
      },
      "sameAs": [
        "https://github.com/VG31OP",
        "https://www.linkedin.com/in/vrajshiroya",
        "https://vraj.shiroya.in",
        "https://x.com/vraj_shiroya",
        "https://www.instagram.com/vraj_shiroya",
        "https://instagram.com/shiroya.in"
      ],
      "knowsAbout": [
        "Open-Source Software Development",
        "Artificial Intelligence",
        "AI Systems Architecture",
        "Cybersecurity Research",
        "Client-Side Web Engineering",
        "Local-First Software Architecture",
        "WebRTC Peer-to-Peer",
        "WebAssembly",
        "Full-Stack Web Development",
        "Indie Product Development"
      ]
    }
  ]
};

const aboutHtml = generatePageHtml({
  title: 'About Vraj Shiroya | Open-Source Developer & AI Engineer',
  description: 'Official profile and technical dossier of Vraj Shiroya (VG31OP) — Open-Source Developer, AI Engineer, and Cybersecurity Researcher from Gujarat, India. Verified contributions to Google Artemis, Vercel SWR, and client-side privacy tools.',
  canonicalUrl: 'https://shiroya.in/about',
  bodyHtml: aboutBody,
  jsonLd: aboutJsonLd
});

const aboutDir = path.join(DIST_DIR, 'about');
if (!fs.existsSync(aboutDir)) fs.mkdirSync(aboutDir, { recursive: true });
fs.writeFileSync(path.join(aboutDir, 'index.html'), aboutHtml, 'utf8');
console.log('✔ Prerendered dist/about/index.html');

// 1. Generate /privacy
const privacyBody = `
<main style="max-width: 800px; margin: 0 auto; padding: 4rem 1.5rem; font-family: sans-serif; color: #E5E7EB; background: #08080A;">
  <h1 style="font-size: 2.5rem; font-weight: 800; color: #FFFFFF; margin-bottom: 1.5rem;">Privacy Policy</h1>
  <p style="font-family: monospace; color: #20E070; font-size: 0.875rem; margin-bottom: 2rem;">Last updated: October 22, 2026</p>
  
  <section style="margin-bottom: 2rem;">
    <h2 style="font-size: 1.5rem; color: #FFFFFF; margin-bottom: 0.75rem;">1. Privacy by Design: Client-Side Execution</h2>
    <p style="line-height: 1.7;">At Shiroya.in, we believe privacy should be an architectural guarantee rather than a corporate promise. All core tools—including <strong>Web Shiroya</strong> (source code inspection), <strong>Drop</strong> (P2P file transfer), <strong>BgZero</strong> (AI background removal), and <strong>PDF Tools</strong> (document manipulation)—operate entirely in your web browser using HTML5 Canvas, WebAssembly, and WebRTC APIs. We do not store, copy, upload, or process your files or media on remote servers.</p>
  </section>

  <section style="margin-bottom: 2rem;">
    <h2 style="font-size: 1.5rem; color: #FFFFFF; margin-bottom: 0.75rem;">2. Peer-to-Peer Data Transfer (Drop)</h2>
    <p style="line-height: 1.7;">When using Drop (drop.shiroya.in), files are transferred directly between peer devices over WebRTC with end-to-end DTLS encryption. Intermediary servers are used only for initial STUN connection negotiation and never inspect, store, or buffer your file contents.</p>
  </section>

  <section style="margin-bottom: 2rem;">
    <h2 style="font-size: 1.5rem; color: #FFFFFF; margin-bottom: 0.75rem;">3. Cookies & Tracking</h2>
    <p style="line-height: 1.7;">We do not use tracking cookies, behavioral tracking scripts, nor advertising trackers. No personal identity or browser fingerprint is sold or shared with third-party advertisers or data brokers.</p>
  </section>

  <section style="margin-bottom: 2rem;">
    <h2 style="font-size: 1.5rem; color: #FFFFFF; margin-bottom: 0.75rem;">4. Verified Open Source Repositories</h2>
    <p style="line-height: 1.7;">All core utilities are open source and verifiable on GitHub: <a href="https://github.com/VG31OP/drop" style="color: #20E070;">VG31OP/drop</a>, <a href="https://github.com/VG31OP/BGZero" style="color: #20E070;">VG31OP/BGZero</a>, <a href="https://github.com/VG31OP/web-installer" style="color: #20E070;">VG31OP/web-installer</a>, and <a href="https://github.com/VG31OP/shiroya.in" style="color: #20E070;">VG31OP/shiroya.in</a>.</p>
  </section>

  <section style="margin-bottom: 2rem;">
    <h2 style="font-size: 1.5rem; color: #FFFFFF; margin-bottom: 0.75rem;">5. Contact & Inquiries</h2>
    <p style="line-height: 1.7;">For inquiries regarding our architecture, privacy principles, or security practices, contact creator Vraj Shiroya (VG31OP) directly at <a href="mailto:vraj@shiroya.in" style="color: #20E070;">vraj@shiroya.in</a> or visit <a href="https://vraj.shiroya.in" style="color: #20E070;">vraj.shiroya.in</a>.</p>
  </section>

  <p><a href="/" style="color: #20E070; font-family: monospace;">← Return to Shiroya Tool Lab</a></p>
</main>
`;

const privacyHtml = generatePageHtml({
  title: 'Privacy Policy | shiroya.in — Zero Cloud Storage & Client-Side Privacy',
  description: 'Privacy policy for Shiroya.in and its browser utilities (Web Shiroya, Drop, BgZero, PDF Tools). 100% local client-side processing with zero server storage.',
  canonicalUrl: 'https://shiroya.in/privacy',
  bodyHtml: privacyBody
});

const privacyDir = path.join(DIST_DIR, 'privacy');
if (!fs.existsSync(privacyDir)) fs.mkdirSync(privacyDir, { recursive: true });
fs.writeFileSync(path.join(privacyDir, 'index.html'), privacyHtml, 'utf8');
console.log('✔ Prerendered dist/privacy/index.html');

// 2. Generate /terms
const termsBody = `
<main style="max-width: 800px; margin: 0 auto; padding: 4rem 1.5rem; font-family: sans-serif; color: #E5E7EB; background: #08080A;">
  <h1 style="font-size: 2.5rem; font-weight: 800; color: #FFFFFF; margin-bottom: 1.5rem;">Terms of Service</h1>
  <p style="font-family: monospace; color: #20E070; font-size: 0.875rem; margin-bottom: 2rem;">Last updated: October 22, 2026</p>
  
  <section style="margin-bottom: 2rem;">
    <h2 style="font-size: 1.5rem; color: #FFFFFF; margin-bottom: 0.75rem;">1. Acceptance of Terms</h2>
    <p style="line-height: 1.7;">By accessing or utilizing Shiroya.in, its subdomains, or any bundled utilities, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please refrain from using the platform.</p>
  </section>

  <section style="margin-bottom: 2rem;">
    <h2 style="font-size: 1.5rem; color: #FFFFFF; margin-bottom: 0.75rem;">2. Service Provision & Client-Side Execution</h2>
    <p style="line-height: 1.7;">Shiroya.in provides software utilities on an "as-is" and "as-available" basis. Because processing occurs strictly inside your web browser environment, execution speed and memory limits depend on your client device hardware, browser configuration, and local operating system.</p>
  </section>

  <section style="margin-bottom: 2rem;">
    <h2 style="font-size: 1.5rem; color: #FFFFFF; margin-bottom: 0.75rem;">3. Acceptable & Lawful Use</h2>
    <p style="line-height: 1.7;">You agree not to use Shiroya tools for unlawful purposes, including but not limited to transferring malicious code, harassing others, or infringing on intellectual property rights. You are solely responsible for ensuring you hold legal authorization to process any source code, images, or documents you input.</p>
  </section>

  <section style="margin-bottom: 2rem;">
    <h2 style="font-size: 1.5rem; color: #FFFFFF; margin-bottom: 0.75rem;">4. Limitation of Liability</h2>
    <p style="line-height: 1.7;">Shiroya.in and its creator, Vraj Shiroya (VG31OP), shall not be held liable for any data loss, workflow interruptions, or indirect damages resulting from the use or inability to use these experimental tools.</p>
  </section>

  <section style="margin-bottom: 2rem;">
    <h2 style="font-size: 1.5rem; color: #FFFFFF; margin-bottom: 0.75rem;">5. Open Source & Attribution</h2>
    <p style="line-height: 1.7;">Shiroya.in is maintained under an open-source ethos. The project codebase is distributed under the MIT License on <a href="https://github.com/VG31OP/shiroya.in" style="color: #20E070;">GitHub</a>.</p>
  </section>

  <p><a href="/" style="color: #20E070; font-family: monospace;">← Return to Shiroya Tool Lab</a></p>
</main>
`;

const termsHtml = generatePageHtml({
  title: 'Terms of Service | shiroya.in — Fast Browser Tools',
  description: 'Terms of Service and acceptable use conditions for Shiroya.in client-side web utilities and developer tools.',
  canonicalUrl: 'https://shiroya.in/terms',
  bodyHtml: termsBody
});

const termsDir = path.join(DIST_DIR, 'terms');
if (!fs.existsSync(termsDir)) fs.mkdirSync(termsDir, { recursive: true });
fs.writeFileSync(path.join(termsDir, 'index.html'), termsHtml, 'utf8');
console.log('✔ Prerendered dist/terms/index.html');

// 3. Generate /404.html
const notFoundBody = `
<main style="max-width: 600px; margin: 0 auto; padding: 6rem 1.5rem; text-align: center; font-family: sans-serif; color: #E5E7EB; background: #08080A;">
  <span style="font-family: monospace; color: #20E070; font-size: 0.875rem; letter-spacing: 0.1em;">[ ERROR 404 // ROUTE NOT FOUND ]</span>
  <h1 style="font-size: 3rem; font-weight: 800; color: #FFFFFF; margin: 1rem 0;">OUT OF RANGE.</h1>
  <p style="font-family: monospace; color: #9CA3AF; margin-bottom: 2rem; line-height: 1.6;">The tool, page, or asset you requested does not exist in the Shiroya Tool Lab.</p>
  <p><a href="/" style="display: inline-block; padding: 0.75rem 1.5rem; background: #20E070; color: #000000; font-weight: 700; text-decoration: none; border-radius: 0.75rem; font-family: monospace; font-size: 0.875rem;">RETURN TO LAB HOME</a></p>
</main>
`;

const notFoundHtml = generatePageHtml({
  title: '404 — Page Not Found | shiroya.in',
  description: 'The requested tool or page could not be located in Shiroya Tool Lab.',
  canonicalUrl: null,
  robots: 'noindex, nofollow',
  bodyHtml: notFoundBody
});

fs.writeFileSync(path.join(DIST_DIR, '404.html'), notFoundHtml, 'utf8');
console.log('✔ Generated dist/404.html');

console.log('✔ Prerendering complete!\n');
