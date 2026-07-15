## 2024-07-15 - Micro-optimizations for Object.keys
**Learning:** In hot-path routines like `shallowEqual`, avoiding `Object.keys().filter()` allocations by switching to `for...in` loops can yield greater than 2x performance improvements for large iterations. It safely eliminates multiple array allocations and allows for earlier bailouts.
**Action:** When working on UI performance, look for places creating throwaway arrays inside tight loops and refactor them to use standard iterators or `for...in` loops combined with `Object.prototype.hasOwnProperty.call`.
