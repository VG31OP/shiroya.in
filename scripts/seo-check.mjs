#!/usr/bin/env node

/**
 * Automated SEO, AEO, GEO, and Indexing QA Test Suite for Shiroya.in
 * Validates distribution assets, HTML metadata, JSON-LD schemas, robots.txt,
 * sitemap.xml, llms.txt, Open Graph, prerendered routes, and Vercel routing configurations.
 */

import fs from 'fs';
import path from 'path';

const ROOT_DIR = process.cwd();
const DIST_DIR = path.join(ROOT_DIR, 'dist');

let testsPassed = 0;
let testsFailed = 0;

function assert(condition, testName, details = '') {
  if (condition) {
    console.log(`  \x1b[32m✔ PASS\x1b[0m: ${testName}`);
    testsPassed++;
  } else {
    console.error(`  \x1b[31m✖ FAIL\x1b[0m: ${testName}`);
    if (details) console.error(`    \x1b[33mDetail: ${details}\x1b[0m`);
    testsFailed++;
  }
}

console.log('\n\x1b[1m\x1b[36m=======================================================');
console.log('   SHIROYA.IN — AUTOMATED SEO / AEO / GEO QA SUITE');
console.log('=======================================================\x1b[0m\n');

// 1. Verify Deployment Configuration
console.log('\x1b[1m1. Checking Deployment Infrastructure (Vercel SPA Rewrites & Headers)\x1b[0m');
const vercelPath = path.join(ROOT_DIR, 'vercel.json');
const hasVercel = fs.existsSync(vercelPath);
assert(hasVercel, 'vercel.json exists in root directory');

if (hasVercel) {
  try {
    const vercelConfig = JSON.parse(fs.readFileSync(vercelPath, 'utf8'));
    const hasRewrites = Array.isArray(vercelConfig.rewrites) && vercelConfig.rewrites.some(r => r.destination === '/');
    assert(hasRewrites, 'vercel.json includes SPA fallback rewrites (fixing 404s on /privacy and /terms)');
    assert(vercelConfig.cleanUrls === true, 'vercel.json configures cleanUrls: true for canonical routing');
    assert(vercelConfig.trailingSlash === false, 'vercel.json configures trailingSlash: false to avoid duplicate content');
    
    const hasSecurityHeaders = Array.isArray(vercelConfig.headers) && vercelConfig.headers.length > 0;
    assert(hasSecurityHeaders, 'vercel.json configures security & caching headers');
  } catch (err) {
    assert(false, 'vercel.json parses valid JSON', err.message);
  }
}

// 2. Verify Static Discoverability & AI Spec Files
console.log('\n\x1b[1m2. Checking Static Discovery & AEO Asset Files in dist/\x1b[0m');
const distExists = fs.existsSync(DIST_DIR);
assert(distExists, 'dist/ directory exists (production build artifact present)');

if (distExists) {
  // robots.txt
  const robotsPath = path.join(DIST_DIR, 'robots.txt');
  const hasRobots = fs.existsSync(robotsPath);
  assert(hasRobots, 'dist/robots.txt exists');
  if (hasRobots) {
    const robotsContent = fs.readFileSync(robotsPath, 'utf8');
    assert(robotsContent.includes('Sitemap: https://shiroya.in/sitemap.xml'), 'robots.txt references sitemap.xml');
    assert(robotsContent.includes('GPTBot') && robotsContent.includes('PerplexityBot'), 'robots.txt includes explicit AI crawler directives (GPTBot, PerplexityBot)');
  }

  // sitemap.xml
  const sitemapPath = path.join(DIST_DIR, 'sitemap.xml');
  const hasSitemap = fs.existsSync(sitemapPath);
  assert(hasSitemap, 'dist/sitemap.xml exists');
  if (hasSitemap) {
    const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
    assert(sitemapContent.includes('<loc>https://shiroya.in/</loc>'), 'sitemap.xml includes root URL');
    assert(sitemapContent.includes('<loc>https://shiroya.in/privacy</loc>'), 'sitemap.xml includes /privacy');
    assert(sitemapContent.includes('<loc>https://shiroya.in/terms</loc>'), 'sitemap.xml includes /terms');
  }

  // llms.txt & llms-full.txt
  const llmsPath = path.join(DIST_DIR, 'llms.txt');
  const hasLlms = fs.existsSync(llmsPath);
  assert(hasLlms, 'dist/llms.txt exists (standard AI discovery file)');
  if (hasLlms) {
    const llmsContent = fs.readFileSync(llmsPath, 'utf8');
    assert(llmsContent.includes('Vraj Shiroya') && llmsContent.includes('web.shiroya.in'), 'llms.txt documents creator and core utilities');
  }

  const llmsFullPath = path.join(DIST_DIR, 'llms-full.txt');
  const hasLlmsFull = fs.existsSync(llmsFullPath);
  assert(hasLlmsFull, 'dist/llms-full.txt exists (deep technical LLM context file)');

  // og-image.png (source in public/ and bundle in dist/)
  const publicOgPath = path.join(ROOT_DIR, 'public', 'og-image.png');
  const distOgPath = path.join(DIST_DIR, 'og-image.png');
  assert(fs.existsSync(publicOgPath), 'public/og-image.png exists');
  const hasDistOgImage = fs.existsSync(distOgPath);
  assert(hasDistOgImage && fs.statSync(distOgPath).size > 1000, 'dist/og-image.png exists, bundled by Vite, and exceeds minimum size');
  if (hasDistOgImage) {
    const buf = fs.readFileSync(distOgPath);
    const width = buf.readUInt32BE(16);
    const height = buf.readUInt32BE(20);
    assert(width === 956 && height === 561, `og-image.png matches expected dimensions (956x561, got ${width}x${height})`);
  }

  // security.txt & humans.txt
  const securityPath = path.join(DIST_DIR, '.well-known', 'security.txt');
  assert(fs.existsSync(securityPath), 'dist/.well-known/security.txt exists');

  const humansPath = path.join(DIST_DIR, 'humans.txt');
  assert(fs.existsSync(humansPath), 'dist/humans.txt exists');

  // LICENSE file
  const licensePath = path.join(ROOT_DIR, 'LICENSE');
  assert(fs.existsSync(licensePath), 'LICENSE file exists in repository root');
}

// 3. Verify HTML Document Metadata & Structured Data
console.log('\n\x1b[1m3. Checking dist/index.html Head Tags, Metadata & Schema.org\x1b[0m');
const indexPath = path.join(DIST_DIR, 'index.html');
const hasIndex = fs.existsSync(indexPath);
assert(hasIndex, 'dist/index.html exists');

if (hasIndex) {
  const html = fs.readFileSync(indexPath, 'utf8');

  // Title & Canonical
  assert(html.includes('<title>') && html.includes('shiroya.in'), 'index.html contains descriptive <title>');
  assert(html.includes('<link rel="canonical" href="https://shiroya.in/" />'), 'index.html contains correct static canonical link tag');

  // Meta Description & Robots
  assert(html.includes('<meta name="description" content="'), 'index.html defines meta description');
  assert(html.includes('<meta name="robots" content="index, follow'), 'index.html permits full indexing and snippet previews');

  // Open Graph & Twitter Cards
  assert(html.includes('property="og:title"'), 'Open Graph og:title defined');
  assert(html.includes('property="og:description"'), 'Open Graph og:description defined');
  assert(html.includes('property="og:image"'), 'Open Graph og:image defined');
  assert(html.includes('name="twitter:card" content="summary_large_image"'), 'Twitter card large image defined');

  // Noscript Crawlable HTML Fallback with GitHub Repository Links
  assert(html.includes('<noscript>') && html.includes('<h1>SHIROYA.in'), 'Noscript crawlable HTML outline present for search bots without JS execution');
  assert(html.includes('github.com/VG31OP/drop'), 'Crawlable link to VG31OP/drop present');
  assert(html.includes('github.com/VG31OP/BGZero'), 'Crawlable link to VG31OP/BGZero present');
  assert(html.includes('github.com/VG31OP/web-installer'), 'Crawlable link to VG31OP/web-installer present');
  assert(html.includes('github.com/VG31OP/shiroya.in'), 'Crawlable link to VG31OP/shiroya.in present');

  // JSON-LD Structured Data
  const jsonLdMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  assert(Boolean(jsonLdMatch), 'JSON-LD structured data script block found');

  if (jsonLdMatch) {
    try {
      const schemaData = JSON.parse(jsonLdMatch[1]);
      assert(Array.isArray(schemaData['@graph']), 'JSON-LD root is a valid Schema.org @graph');

      const types = schemaData['@graph'].map(item => item['@type']);
      assert(types.includes('WebSite'), 'Schema includes WebSite entity');
      assert(types.includes('Person'), 'Schema includes Person entity (Vraj Shiroya / VG31OP)');
      assert(types.includes('ItemList'), 'Schema includes ItemList (Live Software Applications)');
      assert(types.includes('FAQPage'), 'Schema includes FAQPage entity for Answer Engine Optimization');

      const person = schemaData['@graph'].find(item => item['@type'] === 'Person');
      assert(
        person && Array.isArray(person.sameAs) && person.sameAs.some(url => url.includes('github.com/VG31OP')),
        'Person entity accurately references verified GitHub profile (@VG31OP)'
      );

      const itemList = schemaData['@graph'].find(item => item['@type'] === 'ItemList');
      const apps = itemList && itemList.itemListElement ? itemList.itemListElement.map(el => el.item) : [];
      const hasDropRepo = apps.some(app => app.codeRepository === 'https://github.com/VG31OP/drop');
      const hasBgZeroRepo = apps.some(app => app.codeRepository === 'https://github.com/VG31OP/BGZero');
      const hasWebInstallerRepo = apps.some(app => app.codeRepository === 'https://github.com/VG31OP/web-installer');
      assert(hasDropRepo && hasBgZeroRepo && hasWebInstallerRepo, 'Schema SoftwareApplication items link to verified GitHub codeRepository URLs');
    } catch (err) {
      assert(false, 'JSON-LD parses cleanly without syntax errors', err.message);
    }
  }
}

// 4. Verify Prerendered Static Route Files
console.log('\n\x1b[1m4. Checking Prerendered Static Routes (/privacy, /terms, /404)\x1b[0m');
const privacyIndexPath = path.join(DIST_DIR, 'privacy', 'index.html');
const hasPrivacyHtml = fs.existsSync(privacyIndexPath);
assert(hasPrivacyHtml, 'dist/privacy/index.html prerendered statically');
if (hasPrivacyHtml) {
  const content = fs.readFileSync(privacyIndexPath, 'utf8');
  assert(content.includes('<link rel="canonical" href="https://shiroya.in/privacy" />'), 'dist/privacy/index.html has correct canonical URL');
  assert(content.includes('Privacy Policy') && content.includes('Client-Side Execution'), 'dist/privacy/index.html contains crawlable policy text');
}

const termsIndexPath = path.join(DIST_DIR, 'terms', 'index.html');
const hasTermsHtml = fs.existsSync(termsIndexPath);
assert(hasTermsHtml, 'dist/terms/index.html prerendered statically');
if (hasTermsHtml) {
  const content = fs.readFileSync(termsIndexPath, 'utf8');
  assert(content.includes('<link rel="canonical" href="https://shiroya.in/terms" />'), 'dist/terms/index.html has correct canonical URL');
  assert(content.includes('Terms of Service') && content.includes('Acceptable & Lawful Use'), 'dist/terms/index.html contains crawlable terms text');
}

const notFoundPath = path.join(DIST_DIR, '404.html');
const hasNotFoundHtml = fs.existsSync(notFoundPath);
assert(hasNotFoundHtml, 'dist/404.html generated statically');
if (hasNotFoundHtml) {
  const content = fs.readFileSync(notFoundPath, 'utf8');
  assert(content.includes('noindex'), 'dist/404.html specifies noindex to protect search crawl equity');
}

// Summary
console.log('\n\x1b[1m\x1b[36m=======================================================');
console.log(`   RESULTS: ${testsPassed} PASSED, ${testsFailed} FAILED`);
console.log('=======================================================\x1b[0m\n');

if (testsFailed > 0) {
  process.exit(1);
} else {
  console.log('\x1b[32m✔ All Technical SEO, AEO, Prerender, and Discovery QA assertions passed successfully!\x1b[0m\n');
  process.exit(0);
}
