# EverydayDragon Personal Website

Welcome to the repository for my personal website portfolio! 

## Overview
This is a static website deployed via [GitHub Pages](https://pages.github.com/). It showcases my work, projects, and personal brand.

## Tech Stack
- **HTML5** (Structure and custom `x-dc` elements)
- **Vanilla CSS** (Variables, custom tokens, and base styling isolated in `assets/style.css`)
- **JavaScript** (Runtime engine for Design Composer elements isolated in `assets/bundle.js` and `support.js`)

## Performance Best Practices
To ensure the site loads quickly and provides a smooth user experience, the following optimizations are implemented:
- **Render-blocking Resources**: Scripts like `support.js` and `assets/bundle.js` use the `defer` attribute. This allows the browser to parse the DOM without waiting for JavaScript execution, improving Time to First Byte (TTFB) and First Contentful Paint (FCP).
- **Font Loading**: Google Fonts are loaded via `<link rel="preconnect">` and `<link rel="stylesheet">` tags in the document `<head>`. This prevents the network waterfalls associated with `@import` statements in CSS.
- **CSS Tokenization**: Design system tokens (colors, typography, spacing) are defined natively within `assets/style.css`, eliminating the need to request multiple external stylesheets and preventing blocking 404 requests.

## Deployment
This repository is configured to deploy directly to GitHub Pages.
- **Bypassing Jekyll:** Because the code uses Liquid-like templates (`{{ }}`) that conflict with GitHub Pages' default Jekyll build system, a `.nojekyll` file is included at the root. This forces GitHub Pages to serve the raw HTML without attempting to process it.
- **Assets:** The compiled design system assets (CSS/JS) are located in the `assets/` directory and referenced cleanly within `index.html`.
- **Custom Domain & Caching:** `iamdragonc.com` is proxied through Cloudflare in front of GitHub Pages. Cloudflare caches `.js`/`.css`/image files at its edge, so after a deploy the live site can keep serving stale assets even though GitHub Pages already has the new files. The asset URLs in `index.html` carry a `?v=` version parameter — bump it whenever `support.js`, `assets/bundle.js`, or `assets/style.css` change. If the live site still looks stale, purge the cache in the Cloudflare dashboard (Caching → Purge Everything) and hard-refresh the browser.

## Local Development
Since this is a static site without a complex build pipeline for the final output, you can view the site locally by simply serving the root directory:

```bash
# Using Python 3
python3 -m http.server 8000
```
Then navigate to `http://localhost:8000` in your browser.