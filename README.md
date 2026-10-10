# EverydayDragon Personal Website

Dragon Chan’s personal site, published with GitHub Pages at [iamdragonc.com](https://iamdragonc.com/).

## Pages

- **`index.html`** (`/`) — the primary **Mission: Easy** homepage. Stacked assignment files cover Guthrie AI, McMaster-Carr, and Anheuser-Busch; off-duty tickets shuffle through coasters, ghost guiding, and spontaneous travel.
- **`redesign/index.html`** (`/redesign/`) — the original redesign page, using the same design and interactions.
- **`now/index.html`** (`/now/`) — the existing Now page with its playful chat intro and interactive widgets.

## Implementation

The primary homepage uses vanilla HTML, CSS, and JavaScript. Styles and interactions are inline in `index.html`. Its portrait and self-hosted Inter and Geist Mono fonts live under `redesign/assets/`; font licenses are included alongside the fonts.

The chat-style search is a playful animation and local navigation interaction; it does not call an LLM or external API. Assignment scenes and off-duty artwork loop only while their active card is visible and the browser tab is foregrounded. Reduced-motion preferences disable automatic motion. File tabs and ticket shuffling also support keyboard use.

The previous homepage’s runtime and assets remain in the repository for existing pages and historical reference; the primary homepage does not load them.

## Local development

Serve the repository root:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000/` for the primary site, `/redesign/` for the redesign page, or `/now/` for the Now page.

## Deployment

GitHub Pages publishes the **`main` branch from the repository root (`/`)**. Changes to the primary site belong in root `index.html`, and relative asset paths must resolve from that root. Keep `.nojekyll` so GitHub Pages serves the static HTML directly, and keep `CNAME` for `iamdragonc.com`.

The custom domain uses Cloudflare. HTML, fonts, and artwork should be checked on the live domain after a Pages build; cache-busting URLs can help distinguish an older cached response from the new deployment.
