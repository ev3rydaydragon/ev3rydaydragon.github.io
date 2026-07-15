const test = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { JSDOM } = require('jsdom');

const code = fs.readFileSync(path.join(__dirname, 'support.js'), 'utf8');
const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);

const moduleObj = { exports: {} };

const context = vm.createContext({
  window: dom.window,
  document: dom.window.document,
  console: console,
  setTimeout: setTimeout,
  DOMParser: dom.window.DOMParser,
  module: moduleObj
});

// support.js is an IIFE, so we patch the source before evaluation to expose
// parseDcDocument/parseDataProps via CommonJS exports.

// A more robust way to extract the functions from the IIFE:
// We replace the final IIFE closure to return the functions we want.
// We search for the last occurrence of })(); and replace it.
const lastIifeIndex = code.lastIndexOf('})();');
let modifiedCode;
if (lastIifeIndex !== -1) {
    modifiedCode = code.substring(0, lastIifeIndex) +
      `\n module.exports = { parseDcDocument, parseDataProps };\n})();`;
} else {
    // fallback if structure changed
    modifiedCode = code + `\n if (typeof parseDcDocument !== 'undefined') module.exports = { parseDcDocument, parseDataProps };`;
}

const script = new vm.Script(modifiedCode);
script.runInContext(context);

const { parseDcDocument, parseDataProps } = moduleObj.exports;

// Helper function to deepEqual without prototype issues from cross-context
function cleanObj(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  if (Array.isArray(obj)) return obj.map(cleanObj);
  const clean = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clean[key] = cleanObj(obj[key]);
    }
  }
  return clean;
}

test('parseDcDocument', async (t) => {
  await t.test('returns null if x-dc is not present', () => {
    const doc = new dom.window.DOMParser().parseFromString('<html><body><div>No dc here</div></body></html>', 'text/html');
    const result = parseDcDocument(doc);
    assert.strictEqual(result, null);
  });

  await t.test('parses template and js', () => {
    const html = '<html><body><x-dc><div>Template content</div></x-dc><script data-dc-script data-props=\'{"foo": "bar", "$preview": {"height": 100}}\'>console.log("Hello");</script></body></html>';
    const doc = new dom.window.DOMParser().parseFromString(html, 'text/html');
    const result = cleanObj(parseDcDocument(doc));

    assert.deepStrictEqual(result, {
      template: '<div>Template content</div>',
      js: 'console.log("Hello");',
      props: { foo: 'bar' },
      preview: { height: 100 }
    });
  });

  await t.test('handles missing script element', () => {
    const html = '<html><body><x-dc><div>Template content</div></x-dc></body></html>';
    const doc = new dom.window.DOMParser().parseFromString(html, 'text/html');
    const result = cleanObj(parseDcDocument(doc));

    assert.deepStrictEqual(result, {
      template: '<div>Template content</div>',
      js: '',
      props: null,
      preview: null
    });
  });

  await t.test('handles script without data-props', () => {
    const html = '<html><body><x-dc><div>Template content</div></x-dc><script data-dc-script>console.log("Hello");</script></body></html>';
    const doc = new dom.window.DOMParser().parseFromString(html, 'text/html');
    const result = cleanObj(parseDcDocument(doc));

    assert.deepStrictEqual(result, {
      template: '<div>Template content</div>',
      js: 'console.log("Hello");',
      props: null,
      preview: null
    });
  });

  await t.test('handles script with empty script body', () => {
    const html = '<html><body><x-dc><div>Template content</div></x-dc><script data-dc-script data-props=\'{"foo": "bar"}\'></script></body></html>';
    const doc = new dom.window.DOMParser().parseFromString(html, 'text/html');
    const result = cleanObj(parseDcDocument(doc));

    assert.deepStrictEqual(result, {
      template: '<div>Template content</div>',
      js: '',
      props: { foo: 'bar' },
      preview: null
    });
  });

  await t.test('handles malformed data-props gracefully', () => {
    const html = '<html><body><x-dc><div>Template content</div></x-dc><script data-dc-script data-props=\'invalid-json\'>console.log("Hello");</script></body></html>';
    const doc = new dom.window.DOMParser().parseFromString(html, 'text/html');
    const result = cleanObj(parseDcDocument(doc));

    assert.deepStrictEqual(result, {
      template: '<div>Template content</div>',
      js: 'console.log("Hello");',
      props: null,
      preview: null
    });
  });
});
