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

function generatePageHtml({ title, description, canonicalUrl, robots, bodyHtml }) {
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

  // Inject prerendered semantic body inside #root
  if (bodyHtml) {
    html = html.replace('<div id="root"></div>', `<div id="root">${bodyHtml}</div>`);
  }

  return html;
}

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
