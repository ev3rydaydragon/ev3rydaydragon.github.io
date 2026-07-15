## 2026-07-15 - Static Site Architecture
**Learning:** This codebase is a static site without a package.json, build step, or test suite.
**Action:** Skip npm/pnpm linting and testing commands; rely on manual verification using a local Python HTTP server.
## 2026-07-15 - requestAnimationFrame Throttling
**Learning:** Wrapping high-frequency event handlers like `mousemove` in `requestAnimationFrame` effectively throttles DOM reads (`getBoundingClientRect`) and writes (`style` updates) to prevent layout thrashing and maintain 60fps.
**Action:** When working with continuous user input events that trigger layout recalculations, ensure they are decoupled from the main thread using `requestAnimationFrame`.
## 2026-07-15 - Map.keys() iteration performance
**Learning:** Iterating over `Map.prototype.keys()` using the spread operator (`[...map.keys()]`) creates an unnecessary array allocation, which is inefficient, especially when the loop can short-circuit.
**Action:** Use `for...of` directly on the iterator returned by `map.keys()` (e.g. `for (const key of map.keys())`) to avoid unnecessary intermediate arrays and allocation overhead.
