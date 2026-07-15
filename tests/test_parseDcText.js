const fs = require('fs');
const { JSDOM } = require('jsdom');

let src = fs.readFileSync('support.js', 'utf8');

const dom = new JSDOM('<!DOCTYPE html><html><head></head><body></body></html>', {
  runScripts: "dangerously",
  resources: "usable"
});

// Since loadReactUmd fetches React, mock fetch to resolve immediately so it boots fast
global.fetch = () => Promise.resolve({ ok: true, text: () => Promise.resolve("") });
global.console = console;

const script = dom.window.document.createElement("script");
script.textContent = src;
dom.window.document.head.appendChild(script);

// Poll for __parseDcText
function waitForInit(cb) {
  if (dom.window.__parseDcText) {
    cb(dom.window.__parseDcText);
  } else {
    setTimeout(() => waitForInit(cb), 10);
  }
}

waitForInit((parseDcText) => {
  const tests = [
      {
          name: 'Valid document with template, script and data-props',
          input: `
            <x-dc>
              <div>Template content</div>
            </x-dc>
            <script data-dc-script data-props='{"$preview": {"width": 100}, "prop1": "val1"}'>
              const jsCode = true;
            </script>
          `,
          expected: {
            template: "\n              <div>Template content</div>\n            ",
            js: "\n              const jsCode = true;\n            ",
            props: { prop1: "val1" },
            preview: { width: 100 }
          }
      },
      {
          name: 'Missing opening tag',
          input: `<div>Just content</div></x-dc>`,
          expected: null
      },
      {
          name: 'Missing closing tag',
          input: `<x-dc><div>Just content</div>`,
          expected: null
      },
      {
          name: 'Closing tag before opening tag',
          input: `</x-dc><x-dc><div>Content</div>`,
          expected: null
      },
      {
          name: 'Empty x-dc tag',
          input: `<x-dc></x-dc>`,
          expected: {
            template: "",
            js: "",
            props: null,
            preview: null
          }
      },
      {
          name: 'x-dc tag with attributes',
          input: `<x-dc class="foo">content</x-dc>`,
          expected: {
            template: "content",
            js: "",
            props: null,
            preview: null
          }
      },
      {
          name: 'Multiple x-dc tags',
          input: `<x-dc>first</x-dc> and <x-dc>second</x-dc>`,
          expected: {
            template: "first</x-dc> and <x-dc>second",
            js: "",
            props: null,
            preview: null
          }
      },
      {
          name: 'Invalid data-props JSON',
          input: `
            <x-dc>content</x-dc>
            <script data-dc-script data-props='{invalid json}'>
              code
            </script>
          `,
          expected: {
            template: "content",
            js: "\n              code\n            ",
            props: null,
            preview: null
          }
      }
  ];

  let allPassed = true;

  tests.forEach(t => {
      try {
          const actual = parseDcText(t.input);
          const actualStr = JSON.stringify(actual);
          const expectedStr = JSON.stringify(t.expected);

          if (actualStr === expectedStr) {
              console.log(`✅ ${t.name}`);
          } else {
              allPassed = false;
              console.log(`❌ ${t.name}\n  Expected: ${expectedStr}\n  Actual:   ${actualStr}`);
          }
      } catch (e) {
          allPassed = false;
          console.log(`❌ ${t.name}\n  Exception: ${e}`);
      }
  });

  if (allPassed) {
      console.log('All Tests Passed!');
      process.exit(0);
  } else {
      process.exit(1);
  }
});
