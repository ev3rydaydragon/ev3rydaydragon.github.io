const { performance } = require('perf_hooks');

const since = new Map();
for (let i = 0; i < 10000; i++) {
    since.set(`key${i}`, Date.now());
}

function liveOne(n) {
    return n === 'key0';
}

function liveWithSpread() {
    for (const n of [...since.keys()]) if (liveOne(n)) return true;
    return false;
}

function liveWithoutSpread() {
    for (const n of since.keys()) if (liveOne(n)) return true;
    return false;
}

const ITERATIONS = 1000;

// Warmup
for (let i = 0; i < 100; i++) {
    liveWithSpread();
    liveWithoutSpread();
}

const startSpread = performance.now();
for (let i = 0; i < ITERATIONS; i++) {
    liveWithSpread();
}
const endSpread = performance.now();

const startWithoutSpread = performance.now();
for (let i = 0; i < ITERATIONS; i++) {
    liveWithoutSpread();
}
const endWithoutSpread = performance.now();

console.log(`With Spread: ${endSpread - startSpread} ms`);
console.log(`Without Spread: ${endWithoutSpread - startWithoutSpread} ms`);
