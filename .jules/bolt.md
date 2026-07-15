## 2026-07-15 - Static Site Architecture
**Learning:** This codebase is a static site without a package.json, build step, or test suite.
**Action:** Skip npm/pnpm linting and testing commands; rely on manual verification using a local Python HTTP server.
## 2026-07-15 - requestAnimationFrame Throttling
**Learning:** Wrapping high-frequency event handlers like `mousemove` in `requestAnimationFrame` effectively throttles DOM reads (`getBoundingClientRect`) and writes (`style` updates) to prevent layout thrashing and maintain 60fps.
**Action:** When working with continuous user input events that trigger layout recalculations, ensure they are decoupled from the main thread using `requestAnimationFrame`.
## 2026-07-15 - [Array Spreading Allocation Optimization]
**Learning:** [Spreading DOM node iterables like `node.childNodes` or `node.attributes` (e.g. `[...node.childNodes]`) unnecessarily allocates intermediate arrays and harms performance, especially inside critical code paths such as map/filter chains or large loops. Spreading map iterators like `[...map.keys()]` does the same thing. Iterating natively using a `for` loop or `for...of` prevents these allocations.]
**Action:** [Next time optimizing JavaScript parsing or tree traversal, inspect arrays/iterators conversions and prefer traditional looping or iterating directly via `for...of` instead of array expansion.]
