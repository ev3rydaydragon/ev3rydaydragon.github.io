## 2026-07-15 - Static Site Architecture
**Learning:** This codebase is a static site without a package.json, build step, or test suite.
**Action:** Skip npm/pnpm linting and testing commands; rely on manual verification using a local Python HTTP server.
## 2026-07-15 - requestAnimationFrame Throttling
**Learning:** Wrapping high-frequency event handlers like `mousemove` in `requestAnimationFrame` effectively throttles DOM reads (`getBoundingClientRect`) and writes (`style` updates) to prevent layout thrashing and maintain 60fps.
**Action:** When working with continuous user input events that trigger layout recalculations, ensure they are decoupled from the main thread using `requestAnimationFrame`.
## 2026-07-15 - DOM Serialization Performance
**Learning:** Cloning a DOM node (`cloneNode(true)`) and modifying its attributes is significantly slower and more memory-intensive than manual recursive string building via `firstChild` and `nextSibling`.
**Action:** When creating a structural hash or string representation of a DOM element for non-rendering purposes, manually traverse the tree using `firstChild` and `nextSibling` to concatenate node strings instead of mutating cloned nodes.
