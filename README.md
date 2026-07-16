# EverydayDragon Personal Website

Welcome to the repository for my personal website portfolio! 

## Overview
This is a static website deployed via [GitHub Pages](https://pages.github.com/). It showcases my work, projects, and personal brand.

## Pages
- **`index.html`** (`/`) — the main homepage: a scroll-driven, cinematic tour through doors, an avalanche scene, and a cement-truck scene, built on React + a custom Design Composer runtime.
- **`now/index.html`** (`/now/`) — a self-contained [now page](https://nownownow.com/about) with its own chat-style intro animation and vanilla-JS interactive bits (a pencil-trade widget, a coaster-track progress tracker), no dependency on the homepage's runtime.

## Tech Stack
- **HTML5** (Structure and custom `x-dc` elements on the homepage)
- **Vanilla CSS** (Variables, custom tokens, and base styling isolated in `assets/style.css`; the Now page keeps its own scoped styles inline)
- **JavaScript** (Runtime engine for Design Composer elements in `support.js`; the Now page runs on plain vanilla JS with no framework). `assets/bundle.js` is the standalone EverydayDragon design-system component library (Button, Card, Modal, etc.) — the homepage's scroll experience uses none of it, so it is **not loaded by `index.html`** (see Performance notes).
- **React / ReactDOM 18.3.1** — self-hosted under `assets/vendor/` rather than loaded from a CDN at runtime, so the homepage doesn't depend on a third party being reachable to boot (see Performance notes below).

## Performance Best Practices
To ensure the site loads quickly and provides a smooth user experience, the following optimizations are implemented:
- **Dropped the unused design-system bundle**: `assets/bundle.js` (~96 KB raw / ~18 KB gzip) shipped the full component library, but the homepage's hand-built scroll experience references none of its ~30 components/globals, and the Design Composer runtime doesn't depend on it. Its `<script>` tag was removed from `index.html`; the rendered page is byte-for-byte identical (verified in a headless browser) while the browser no longer downloads, parses, or executes that payload. The file stays in the repo as the design-system source of truth.
- **Self-hosted React/ReactDOM**: These used to load from `unpkg.com` at runtime, which added an extra DNS/TLS/request round trip *after* `support.js` had already downloaded and executed, and meant a CDN hiccup could leave the whole homepage blank. They're now vendored in `assets/vendor/` and loaded as ordinary `<script defer>` tags alongside `support.js`, so they fetch in parallel from the same origin. (React stays as the runtime's framework by design — the DC engine renders through it; swapping to a smaller runtime would be an architectural change, not a drop-in.)
- **Render-blocking Resources**: `support.js` and the vendored React scripts use the `defer` attribute. This allows the browser to parse the DOM without waiting for JavaScript execution, improving Time to First Byte (TTFB) and First Contentful Paint (FCP).
- **Font Loading**: Google Fonts are loaded via `<link rel="preconnect">` and `<link rel="stylesheet">` tags in the document `<head>`. This prevents the network waterfalls associated with `@import` statements in CSS. The font request is trimmed to only the weights each page actually renders (each weight is a separate `woff2` download): the homepage requests Montserrat 700/800/900 + Mulish 400/500/600 and drops JetBrains Mono entirely (it was never used there); the Now page requests Montserrat 800/900, Mulish 400/500, and JetBrains Mono 400/600.
- **Off-screen scene gating (homepage)**: The scroll handler recomputes the circle/map, cement-truck, and avalanche scenes, but each block now early-outs unless its (sticky, multi-viewport-tall) section actually overlaps the viewport. Without this, every scroll frame anywhere on the page ran all three `getBoundingClientRect`-heavy blocks; out of view their elements already sit at the clamped start/end state, so skipping is visually identical while cutting per-frame work.
- **Idle-animation pausing (Now page)**: The endless pencil-trade placeholder typewriter is gated behind an `IntersectionObserver` + `visibilitychange` so its timers only run while the widget is near the viewport and the tab is visible, and the 1500px rotating conic-gradient swirl behind the chat card pauses (`animation-play-state`) once the hero scrolls away — neither burns CPU/GPU for something off-screen.
- **CSS Tokenization**: Design system tokens (colors, typography, spacing) are defined natively within `assets/style.css`, eliminating the need to request multiple external stylesheets and preventing blocking 404 requests.
- **Batched scroll handlers**: The homepage's scroll-driven scenes (circle/map, cement truck, avalanche) recompute inside a single `requestAnimationFrame` throttle instead of running once per raw `scroll` event, and reads (`getBoundingClientRect`) are ordered before writes to avoid forcing synchronous layout.
- **Scroll snapping**: `html { scroll-snap-type: y mandatory }` was replaced with `proximity` — `mandatory` was fighting the multi-viewport scroll-driven scenes (avalanche, cement) by yanking the scroll position back to the section start instead of letting the user scroll through; `proximity` keeps normal 100vh beats snapping crisply without that snap-back.

## Deployment
This repository is configured to deploy directly to GitHub Pages.
- **Bypassing Jekyll:** Because the code uses Liquid-like templates (`{{ }}`) that conflict with GitHub Pages' default Jekyll build system, a `.nojekyll` file is included at the root. This forces GitHub Pages to serve the raw HTML without attempting to process it.
- **Assets:** The compiled design system assets (CSS/JS) are located in the `assets/` directory and referenced cleanly within `index.html`.
- **Custom Domain & Caching:** `iamdragonc.com` is proxied through Cloudflare in front of GitHub Pages. Cloudflare caches `.js`/`.css`/image files at its edge, so after a deploy the live site can keep serving stale assets even though GitHub Pages already has the new files. The asset URLs in `index.html` carry a `?v=` version parameter — bump it whenever `support.js`, `assets/style.css`, or `assets/vendor/react*.js` change. If the live site still looks stale, purge the cache in the Cloudflare dashboard (Caching → Purge Everything) and hard-refresh the browser.

## Local Development
Since this is a static site without a complex build pipeline for the final output, you can view the site locally by simply serving the root directory:

```bash
# Using Python 3
python3 -m http.server 8000
```
Then navigate to `http://localhost:8000` in your browser.