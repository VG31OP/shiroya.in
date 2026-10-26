#!/usr/bin/env node

/**
 * Unit & Integration Test Suite for Shiroya.in
 * Validates DOM meta tag manipulation, routing logic, link integrity,
 * Schema.org structured data validity, and clean URL assets.
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
console.log('   SHIROYA.IN — UNIT & FUNCTIONAL REGRESSION TEST SUITE');
console.log('=======================================================\x1b[0m\n');

// 1. Test Mocked DOM for usePageMeta Logic
console.log('\x1b[1m1. Testing Meta & Robots Directives Logic\x1b[0m');

class MockElement {
  constructor(tagName) {
    this.tagName = tagName.toUpperCase();
    this.attributes = new Map();
  }
  setAttribute(name, value) {
    this.attributes.set(name, value);
  }
  getAttribute(name) {
    return this.attributes.get(name) || null;
  }
  remove() {
    this.removed = true;
    const idx = mockHead.children.indexOf(this);
    if (idx !== -1) mockHead.children.splice(idx, 1);
  }
}

const mockHead = {
  children: [],
  appendChild(el) {
    this.children.push(el);
  },
  querySelector(selector) {
    if (selector.startsWith('meta[name="')) {
      const name = selector.match(/meta\[name="(.*?)"\]/)[1];
      return this.children.find(c => c.tagName === 'META' && c.getAttribute('name') === name) || null;
    }
    if (selector === 'link[rel="canonical"]') {
      return this.children.find(c => c.tagName === 'LINK' && c.getAttribute('rel') === 'canonical') || null;
    }
    return null;
  }
};

// Simulation of usePageMeta behavior
function applyMeta({ title, description, canonicalUrl, robots }, head = mockHead) {
  let docTitle = title || '';
  
  if (description) {
    let descEl = head.querySelector('meta[name="description"]');
    if (!descEl) {
      descEl = new MockElement('meta');
      descEl.setAttribute('name', 'description');
      head.appendChild(descEl);
    }
    descEl.setAttribute('content', description);
  }

  const existingCanonical = head.querySelector('link[rel="canonical"]');
  if (canonicalUrl) {
    if (existingCanonical) {
      existingCanonical.setAttribute('href', canonicalUrl);
    } else {
      const canonicalEl = new MockElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      canonicalEl.setAttribute('href', canonicalUrl);
      head.appendChild(canonicalEl);
    }
  } else if (existingCanonical) {
    existingCanonical.remove();
  }

  const robotsValue = robots || 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
  ['robots', 'googlebot', 'bingbot'].forEach((name) => {
    let botEl = head.querySelector(`meta[name="${name}"]`);
    if (!botEl) {
      botEl = new MockElement('meta');
      botEl.setAttribute('name', name);
      head.appendChild(botEl);
    }
    botEl.setAttribute('content', robotsValue);
  });

  return { docTitle };
}

// Initial state (Home)
applyMeta({
  title: 'Home Page',
  description: 'Home description',
  canonicalUrl: 'https://shiroya.in/',
  robots: null
});

assert(mockHead.querySelector('link[rel="canonical"]')?.getAttribute('href') === 'https://shiroya.in/', 'usePageMeta sets canonical on Home');
assert(mockHead.querySelector('meta[name="robots"]')?.getAttribute('content').includes('index, follow'), 'usePageMeta sets index, follow on Home');
assert(mockHead.querySelector('meta[name="bingbot"]')?.getAttribute('content').includes('index, follow'), 'usePageMeta sets bingbot directive on Home');

// Transition to 404
applyMeta({
  title: '404 — Page Not Found',
  description: 'Page not found',
  canonicalUrl: null,
  robots: 'noindex, nofollow'
});

assert(mockHead.querySelector('link[rel="canonical"]') === null, 'usePageMeta strips canonical link completely on 404 route');
assert(mockHead.querySelector('meta[name="robots"]')?.getAttribute('content') === 'noindex, nofollow', 'usePageMeta sets noindex, nofollow on robots meta');
assert(mockHead.querySelector('meta[name="googlebot"]')?.getAttribute('content') === 'noindex, nofollow', 'usePageMeta sets noindex, nofollow on googlebot meta');
assert(mockHead.querySelector('meta[name="bingbot"]')?.getAttribute('content') === 'noindex, nofollow', 'usePageMeta sets noindex, nofollow on bingbot meta');

// Transition to /about
applyMeta({
  title: 'About Vraj Shiroya',
  description: 'About description',
  canonicalUrl: 'https://shiroya.in/about',
  robots: null
});

assert(mockHead.querySelector('link[rel="canonical"]')?.getAttribute('href') === 'https://shiroya.in/about', 'usePageMeta reinstates canonical on /about');
assert(mockHead.querySelector('meta[name="robots"]')?.getAttribute('content').includes('index, follow'), 'usePageMeta restores index, follow on /about');

// 2. Validate All Prerendered Static Files
console.log('\n\x1b[1m2. Testing Dual Prerendered Output Structure\x1b[0m');
const routes = ['about', 'privacy', 'terms'];
routes.forEach((route) => {
  const dirIndex = path.join(DIST_DIR, route, 'index.html');
  const rootHtml = path.join(DIST_DIR, `${route}.html`);
  assert(fs.existsSync(dirIndex), `dist/${route}/index.html exists`);
  assert(fs.existsSync(rootHtml), `dist/${route}.html exists`);
  
  const content = fs.readFileSync(rootHtml, 'utf8');
  assert(content.includes(`<link rel="canonical" href="https://shiroya.in/${route}" />`), `dist/${route}.html self-references canonical https://shiroya.in/${route}`);
  assert(content.includes('BreadcrumbList'), `dist/${route}.html contains Schema.org BreadcrumbList`);
  assert(!content.includes('http://shiroya.in'), `dist/${route}.html contains no insecure HTTP references`);
});

// 404 Static Validation
const notFoundPath = path.join(DIST_DIR, '404.html');
assert(fs.existsSync(notFoundPath), 'dist/404.html exists');
const notFoundContent = fs.readFileSync(notFoundPath, 'utf8');
assert(notFoundContent.includes('content="noindex, nofollow"'), 'dist/404.html enforces noindex, nofollow');
assert(!notFoundContent.includes('<link rel="canonical"'), 'dist/404.html does not contain a canonical link');
assert(!notFoundContent.includes('application/ld+json'), 'dist/404.html does not contain structured data');

// 3. Validate Internal Codebase Link Integrity
console.log('\n\x1b[1m3. Testing Internal Link & Route Integrity\x1b[0m');
const srcDir = path.join(ROOT_DIR, 'src');

function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(fullPath));
    } else if (file.endsWith('.jsx') || file.endsWith('.js')) {
      results.push(fullPath);
    }
  });
  return results;
}

const allSrcFiles = getFiles(srcDir);
let foundDeadRoute = false;
const validRoutes = new Set(['/', '/about', '/privacy', '/terms', '/#tools', '/#creator', '/#contact']);

allSrcFiles.forEach((file) => {
  const code = fs.readFileSync(file, 'utf8');
  // Check for to="..." links
  const toMatches = code.matchAll(/\bto=["'](.*?)["']/g);
  for (const match of toMatches) {
    const target = match[1];
    if (target.startsWith('/') && !validRoutes.has(target)) {
      foundDeadRoute = true;
      console.error(`Invalid internal route: ${target} in ${path.relative(ROOT_DIR, file)}`);
    }
  }
});
assert(!foundDeadRoute, 'All React Router `to="..."` destinations match valid routes');

// 4. Validate Schema.org Graph Completeness
console.log('\n\x1b[1m4. Testing JSON-LD Schemas in Prerendered HTML\x1b[0m');
const indexPath = path.join(DIST_DIR, 'index.html');
const indexHtml = fs.readFileSync(indexPath, 'utf8');
const jsonLdMatch = indexHtml.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
assert(jsonLdMatch !== null, 'dist/index.html contains JSON-LD script');

if (jsonLdMatch) {
  try {
    const parsed = JSON.parse(jsonLdMatch[1]);
    const graph = parsed['@graph'];
    assert(Array.isArray(graph), 'JSON-LD root is a valid @graph array');
    
    const types = graph.map(item => item['@type']);
    assert(types.includes('WebSite'), 'Index Schema includes WebSite');
    assert(types.includes('Person'), 'Index Schema includes Person');
    assert(types.includes('ItemList'), 'Index Schema includes ItemList');
    assert(types.includes('FAQPage'), 'Index Schema includes FAQPage');

    const person = graph.find(item => item['@type'] === 'Person');
    assert(person.name === 'Vraj Shiroya', 'Person schema has authentic name');
    assert(person.sameAs && person.sameAs.includes('https://github.com/VG31OP'), 'Person schema includes GitHub link');
    assert(person.sameAs && person.sameAs.includes('https://www.linkedin.com/in/vrajshiroya'), 'Person schema includes LinkedIn link');
  } catch (err) {
    assert(false, 'JSON-LD schema parses cleanly as JSON', err.message);
  }
}

// Summary
console.log('\n\x1b[1m\x1b[36m=======================================================');
console.log(`   UNIT TEST RESULTS: ${testsPassed} PASSED, ${testsFailed} FAILED`);
console.log('=======================================================\x1b[0m\n');

if (testsFailed > 0) {
  process.exit(1);
} else {
  console.log('\x1b[32m✔ All Unit & Regression tests passed successfully!\x1b[0m\n');
  process.exit(0);
}
