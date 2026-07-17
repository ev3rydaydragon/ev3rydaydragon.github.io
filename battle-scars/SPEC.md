# Battle Scars — Spec

Static, scroll-driven "life board game" page at `/battle-scars/`. A dragon pawn hops across a Candyland-style board as the user scrolls, landing on cities lived in, pulling a flavor card at each stop.

## Stack

Single self-contained `index.html`, no build step, no dependencies — matches the rest of the site (vanilla HTML/CSS/JS, GitHub Pages + Cloudflare).

- Board: inline SVG (viewBox 1000×1000); "camera" is a transform on a wrapper `<g>`, lerped per frame in a `requestAnimationFrame` loop.
- Scroll binding: hand-rolled scrollY → tile-index mapping; no animation library.
- City/card content: local JS array (`STOPS`), not an API call.
- Cards render as a 2D HTML/CSS overlay, not SVG (text legibility, easy edits).
- Performance rules: no SVG blur filters or CSS `perspective` (both caused full-board re-rasterization per frame); shadows are solid offset shapes; DOM writes are skipped when values haven't changed.

## Board

Path is a winding open track, not a line and not a closed loop. Philly sits at the self-intersection — the one meaningful point the path crosses itself — visited twice (arrival, then return near the end). Past the last stop, the fogged trail wanders off down the right side and dies in an open curl mid-board: the journey has no fixed ending, so the track must not return to START.

Path order: San Diego → Philly → NYC → Houston → Seattle → St. Louis → Chicago → Philly.

Second-pass Philly tile shows the old track visibly crossing underneath the new one, so the revisit reads as "you've been here before," not a bug.

Halfway point (Chicago, before the Philly return) is the last built tile. Beyond it, the path continues but fogged/unrendered, with a "that's it for now" marker — signals the journey isn't finished, not that the page is broken.

## Interaction

Scroll position maps to hop progress (0 to N−1 stops across the whole path, including the second Philly). Each hop: eased arc between tiles (no instant jumps), small squash-and-stretch on landing.

Camera follows the path spline, pawn held at a fixed screen anchor (e.g. lower third) — board scenery moves past it, not the reverse.

Landing on a stop snaps scroll to that point and flips up a card (Community Chest style) themed to that city. User scrolls again to release the snap and continue to the next hop.

## Visual direction

EverydayDragon brand (tokens in `assets/style.css`), not generic Candyland pastel: Mythical Midnight background, tiles cycling the brand palette (Crimson, Blurple, Moss, Wisteria, Snow, Periwinkle) with white borders and hard offset block shadows (the brand's signature device — solid offset, no blur). Montserrat display type with hard-shadow headlines; Mulish body copy on cards.

Whimsy comes from shape and motion, not palette: the track loops and switches back the whole way round (a full loop-de-loop on the Houston→Seattle stretch, hairpins down the left side), candy landmark decorations recolored to brand, hopping pawn with squash-and-stretch and a ground shadow that detaches mid-hop.

Dragon pawn follows the user's reference art: a gold low-poly faceted statuette on a silver disc — seated 3/4 pose, broad faceted wing sails, stacked copper chest plates, swept-back horn cluster, blurple eye, spade-tipped tail curled around the base. Flat polygon facets with warm brown outlines (SVG recreation; swap in the original PNG at `assets/dragon-pawn.png` for pixel-perfect fidelity if desired). Stop labels hide while the pawn is parked on them (the card names the city).

Debug: `?cam=wide` or `?cam=<zoom>` freezes the camera for full-board or close-up inspection.

Each city stop carries an icon + label pill; the fogged half sits under wisteria mist with a "TO BE CONTINUED" signpost.

## Card copy

| City | Line |
|---|---|
| San Diego | Perfect weather again. Nobody trusts it. Take a beach day, no argument. |
| Philly (arrival) | The brewery made too much beer. Throw a partaaayyy. |
| NYC | Rent went up $400 overnight for no reason anyone can explain. Pay the toll, keep moving. |
| Houston | Queso emergency declared citywide. Advance to the nearest taco truck. |
| Seattle | It's been raining for 97 days. Nobody has mentioned it once. Collect a free coffee, no small talk required. |
| St. Louis | Toasted ravioli night. Everyone's invited, nobody agrees it's actually a ravioli. |
| Chicago | Wind advisory in effect. Hold onto your hat and your deep-dish opinions. |
| Philly (return) | Back where you started, except the brewery's still going. Pull up a chair, you know this bar by now. |

Card copy is data-driven (`{city, line, icon}` per stop) so new stops append without touching animation code.

## Open items

- Swap generic card lines for real specifics (an actual bar, an actual move mishap) per city.
