# shiroya.in

Personal landing page for **Vraj Shiroya (VG31)** — a single-file HTML site that serves as a hub for all subdomains, tools, and contact links.

Live at → [shiroya.in](https://shiroya.in)

---

## Stack

| Thing | Detail |
|---|---|
| Language | Pure HTML + CSS + JS — zero frameworks, zero dependencies |
| Fonts | `Epilogue` (display) + `DM Mono` (monospace) via Google Fonts |
| Deployment | Netlify — rename file to `index.html`, publish directory `.` |
| File | Single file: `index.html` |

---

## Sections

### Hero
Full-viewport centered title with a live particle node network canvas in the background. Font size is calculated via JS binary search so `SHIROYA.IN` always fills the exact screen width on every device without overflow.

### Tools & Spaces
Three live subdomains displayed as full-width interactive rows:

| Subdomain | Name | Description |
|---|---|---|
| `vraj.shiroya.in` | Vraj Shiroya | Personal portfolio — projects, skills, experience |
| `drop.shiroya.in` | Drop | Fast file sharing |
| `pdf.shiroya.in` | PDF Tools | Merge, split, compress, convert — browser-based, no login |

### How It Works
Three-step guide explaining how to navigate the site.

### Footer
Social links (GitHub, Twitter, LinkedIn, Instagram) + live status indicator.

---

## Features

**Smart Finder Modal**
"Not sure where to go?" button opens a two-step guided flow — answer two questions and get sent directly to the right tool. 16 unique destinations mapped.

**Dark / Light Mode**
Toggle in the navbar. Persists via `localStorage`. Respects `prefers-color-scheme` on first visit.

**Custom Cursor**
Glowing green dot + ring that tracks the mouse. Turns white with expanded glow on hover over any interactive element. Hidden on touch devices.

**Hover Animations**
Every button and link gets a green glow + lift + white shimmer sweep on hover. Shimmer is disabled on mobile for performance.

**Custom Scrollbar**
5px thin scrollbar with muted green thumb that brightens on hover. Works in both Chromium (webkit) and Firefox.

**Fit-to-screen Title**
`fitHeroText()` runs a 24-iteration binary search on load and resize to set the exact font size that fills the container without overflow — works from 280px phones to 4K monitors.

---

## Easter Eggs

All hints are in the browser DevTools console (`F12` → Console).

### Type anywhere on the page

| Word | Effect |
|---|---|
| `vraj` | Fireworks + title glitch + secret card |
| `sudo` | Fake terminal (commands: `help`, `whoami`, `ls`, `cat about.txt`, `cat secrets.txt`, `matrix`, `skills`, `ping`, `date`, `clear`, `exit`) |
| `warp` | Hyperdrive star tunnel fullscreen |
| `hole` | Black hole cursor — page text warps toward your mouse |
| `paint` | Draw neon on the page (cycle colors via right-click or button) |
| `tarot` | Flip a dev fortune tarot card (8 unique cards) |
| `snake` | Opens Snake directly from keyboard |

### Click triggers

| Trigger | Effect |
|---|---|
| Click the `.` in `SHIROYA.IN` × 5 | Ripple on each click → fireworks + matrix + glitch + secret card |
| Triple-click `VG31` in footer | Enters paint mode |

### Key sequence

| Sequence | Effect |
|---|---|
| `↑ ↑ ↓ ↓ ← → ← → B A` | Konami code — matrix rain + fireworks + glitch + "CHEAT CODE ACTIVATED" flash |

### Developer

Open DevTools console to see the full cheat sheet printed as styled `console.log` output.

**ESC** closes any active easter egg.

---

## Arcade (`🎮`)

Floating button bottom-right (also in navbar as **Games**). Opens a fullscreen arcade menu with 4 playable games:

| Game | Controls | Notes |
|---|---|---|
| **Snake** | Arrow keys / WASD · R restart | Speed increases as you grow, best score tracked |
| **Flappy Bird** | Space / click / tap | Auto-restart on click when dead |
| **Tetris** | ← → move · ↑ / Z rotate · ↓ soft drop · Space hard drop | Ghost piece, next piece preview, level speed-up |
| **Pong vs CPU** | W / S · drag finger on mobile | Adaptive CPU AI · first to 7 wins · R rematch |

---

## Paint Mode

Activated via typing `paint` or triple-clicking `VG31` in the footer.

- **Desktop** — hold and drag to draw, right-click to cycle colors
- **Mobile** — touch and drag to draw, tap the `color` button to cycle
- 8 neon colors: green, pink, cyan, orange, purple, white, red, yellow
- Brush size auto-adjusts (7px mobile, 4px desktop)
- Canvas preserves drawing on window resize / orientation change
- `clear` wipes the canvas, `exit` removes paint mode entirely

---

## File Structure

```
index.html        ← entire site (HTML + CSS + JS in one file)
README.md         ← this file
```

No build step. No package.json. No node_modules. Open `index.html` in a browser and it works.

---

## Deployment (Netlify)

1. Rename `shiroya-landing.html` → `index.html`
2. Drop the folder into Netlify or connect the repo
3. Publish directory: `.`
4. Done

---

## CSS Variables

```css
/* Light mode */
--bg: #f5f4f0        /* page background */
--ink: #0f0f0e       /* primary text */
--sub: #6b6b65       /* secondary text */
--green: #1a7a4a     /* accent */
--green-bg: #e8f5ee  /* accent background */
--surface: #ffffff   /* card / surface */
--line: rgba(15,15,14,0.1)

/* Dark mode (html.dark) */
--bg: #0f0f0e
--ink: #f0efe9
--green: #4ade80
--green-bg: rgba(74,222,128,0.1)
--surface: #1a1a18
```

---

Built by **Vraj Shiroya** — [vraj.shiroya.in](https://vraj.shiroya.in)
