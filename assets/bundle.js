/* @ds-bundle: {"format":4,"namespace":"EDDesignSys_b6b25b","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"TailMark","sourcePath":"components/brand/TailMark.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Accordion","sourcePath":"components/display/Accordion.jsx"},{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"Divider","sourcePath":"components/display/Divider.jsx"},{"name":"Eyebrow","sourcePath":"components/display/Eyebrow.jsx"},{"name":"Stat","sourcePath":"components/display/Stat.jsx"},{"name":"Table","sourcePath":"components/display/Table.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Modal","sourcePath":"components/feedback/Modal.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Navbar","sourcePath":"components/navigation/Navbar.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"2e15d3c9b64a","components/brand/TailMark.jsx":"d555ca2d4984","components/core/Badge.jsx":"ca1a1a5e6f97","components/core/Button.jsx":"e0616bb9993b","components/core/Card.jsx":"bb5802fb1f2b","components/core/IconButton.jsx":"30617da23fe3","components/core/Tag.jsx":"8e5f7f31ba94","components/display/Accordion.jsx":"59dc781746a8","components/display/Avatar.jsx":"7c2db13c8b31","components/display/Divider.jsx":"4b38f0648cf8","components/display/Eyebrow.jsx":"5b40bd1716c2","components/display/Stat.jsx":"d49fc6a55c83","components/display/Table.jsx":"41d53c8e2321","components/feedback/Alert.jsx":"1583e3745a6e","components/feedback/Modal.jsx":"bfe5c5f0b391","components/forms/Checkbox.jsx":"5f2a788e6a19","components/forms/Input.jsx":"00e3c660386b","components/forms/Radio.jsx":"f8a022c685a8","components/forms/Select.jsx":"b2f6d153d2bb","components/forms/Switch.jsx":"45572f40bb8f","components/forms/Textarea.jsx":"635f3e706118","components/navigation/Navbar.jsx":"c8276fa48696","components/navigation/Pagination.jsx":"f16385623024","components/navigation/Tabs.jsx":"4344ccba365a","ui_kits/personal-site/HomeScreen.jsx":"9ee62564bdca","ui_kits/personal-site/Icons.jsx":"754b1d14b47e","ui_kits/personal-site/SiteChrome.jsx":"8a8b9ecc08be","ui_kits/personal-site/WritingScreen.jsx":"6b7c41b17b2a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.EDDesignSys_b6b25b = window.EDDesignSys_b6b25b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/TailMark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The EverydayDragon tail mark — the brand's signature icon.
 * 5 fans per side, always facing forward/upward. Monochrome only
 * (black or white per brand rules); colored via CSS `color` (currentColor).
 */
function TailMark({
  size = 32,
  title = 'EverydayDragon',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    role: "img",
    "aria-label": title,
    width: size,
    height: size * 126 / 154,
    viewBox: "872 202 154 126",
    fill: "currentColor",
    style: {
      display: 'inline-block',
      verticalAlign: 'middle',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    d: "M 1016.144531 263.03125 C 1015.117188 262.546875 1012.878906 261.613281 1011.175781 260.960938 C 1009.472656 260.3125 1007.382812 259.476562 1006.527344 259.105469 C 1005.675781 258.734375 1003.585938 257.851562 1001.882812 257.144531 C 996.050781 254.726562 983.785156 249.285156 977.441406 246.304688 C 972.238281 243.859375 966.570312 241.484375 965.933594 241.484375 C 965.339844 241.484375 959.253906 245.5625 954.894531 248.882812 C 953.078125 250.265625 950.472656 252.175781 944.796875 256.285156 C 943.359375 257.328125 942.101562 258.375 942.003906 258.617188 C 941.90625 258.863281 942.53125 259.558594 943.457031 260.226562 C 944.351562 260.871094 945.671875 262.109375 946.390625 262.972656 L 947.699219 264.546875 L 982.363281 264.542969 C 1002.480469 264.539062 1017.234375 264.40625 1017.519531 264.226562 C 1017.894531 263.988281 1017.554688 263.695312 1016.144531 263.03125 M 1016.457031 266.101562 C 1016.011719 265.996094 1000.324219 265.949219 981.59375 266.003906 L 947.539062 266.097656 L 946.652344 267.570312 C 946.167969 268.378906 945.179688 269.4375 944.460938 269.917969 C 942.484375 271.242188 942.789062 271.820312 947.050781 274.839844 C 949.078125 276.28125 952.175781 278.5 953.933594 279.777344 C 966.460938 288.878906 967.761719 289.734375 968.75 289.539062 C 969.277344 289.433594 971.140625 288.660156 972.886719 287.824219 C 974.636719 286.984375 978.386719 285.1875 981.226562 283.824219 C 984.066406 282.460938 988.792969 280.261719 991.726562 278.933594 C 994.660156 277.609375 998.535156 275.828125 1000.332031 274.980469 C 1002.132812 274.128906 1004.378906 273.070312 1005.324219 272.628906 C 1017.097656 267.105469 1018.121094 266.503906 1016.457031 266.101562 M 965.328125 290.667969 C 964.796875 290.175781 960.640625 287.015625 956.097656 283.652344 C 951.554688 280.285156 946.675781 276.648438 945.253906 275.566406 C 941.527344 272.730469 941.457031 272.703125 939.507812 273.363281 C 937.4375 274.0625 935.269531 275.152344 935.285156 275.484375 C 935.320312 276.207031 939.269531 281.179688 946.976562 290.203125 C 948.773438 292.308594 950.789062 294.753906 951.449219 295.640625 C 952.113281 296.523438 952.964844 297.332031 953.34375 297.433594 C 953.988281 297.609375 963.652344 293.367188 965.539062 292.085938 L 966.296875 291.570312 L 965.328125 290.667969 M 962.761719 239.46875 C 961.9375 239.113281 959.214844 237.863281 956.710938 236.6875 C 953.722656 235.285156 951.992188 234.648438 951.667969 234.832031 C 950.566406 235.460938 934.582031 255.003906 934.585938 255.71875 C 934.589844 256.308594 935.066406 256.648438 936.929688 257.40625 C 938.21875 257.925781 939.527344 258.351562 939.839844 258.351562 C 940.15625 258.351562 942.933594 256.453125 946.019531 254.132812 C 949.101562 251.8125 954.257812 247.964844 957.476562 245.582031 C 960.695312 243.199219 963.539062 240.992188 963.796875 240.683594 C 964.210938 240.179688 964.09375 240.042969 962.761719 239.46875 M 951.179688 297.210938 C 950.546875 296.265625 944.976562 289.488281 939.847656 283.417969 C 938.105469 281.355469 936.089844 278.898438 935.371094 277.964844 C 933.8125 275.925781 933.078125 275.667969 930.898438 276.382812 C 929.992188 276.679688 928.394531 277.101562 927.355469 277.316406 C 925.304688 277.742188 924.601562 278.140625 924.601562 278.871094 C 924.601562 279.128906 926.246094 282.398438 928.261719 286.140625 C 930.273438 289.886719 932.984375 294.925781 934.285156 297.339844 C 935.585938 299.757812 936.648438 301.855469 936.648438 302 C 936.648438 302.148438 937.074219 302.773438 937.59375 303.394531 C 938.539062 304.515625 938.542969 304.515625 939.917969 304.019531 C 940.675781 303.746094 942.921875 302.753906 944.910156 301.820312 C 946.898438 300.886719 949.015625 299.925781 949.617188 299.6875 C 950.21875 299.449219 950.949219 298.992188 951.238281 298.667969 C 951.714844 298.144531 951.710938 298 951.179688 297.210938 M 944.652344 230.953125 C 941.398438 229.371094 938.753906 228.300781 938.035156 228.273438 L 936.839844 228.230469 L 930.539062 239.933594 C 927.074219 246.371094 924.144531 252.003906 924.03125 252.449219 C 923.898438 252.957031 923.992188 253.371094 924.285156 253.550781 C 925.070312 254.035156 932.148438 255.65625 932.507812 255.429688 C 933.550781 254.789062 950.074219 234.640625 950.074219 234.015625 C 950.074219 233.78125 947.632812 232.402344 944.652344 230.953125 M 943.542969 265.03125 C 942.738281 263.042969 938.285156 260.421875 932.824219 258.730469 C 926.113281 256.648438 924.542969 256.269531 916.855469 254.867188 C 914.792969 254.492188 908.011719 253.585938 903.945312 253.148438 C 894.804688 252.160156 879.304688 251.804688 878.542969 252.566406 C 878.234375 252.875 878.128906 256.316406 878.128906 265.925781 C 878.128906 275.53125 878.234375 278.972656 878.542969 279.28125 C 879.058594 279.796875 893.230469 279.859375 895.421875 279.355469 C 896.226562 279.167969 899.289062 278.871094 902.226562 278.6875 C 905.160156 278.507812 908.566406 278.203125 909.796875 278.011719 C 911.027344 277.816406 913.660156 277.425781 915.648438 277.140625 C 924.148438 275.921875 934.511719 272.957031 939.496094 270.316406 C 941.492188 269.257812 943.894531 266.980469 943.855469 266.183594 C 943.84375 265.945312 943.703125 265.429688 943.542969 265.03125 M 936.285156 303.511719 C 936.113281 303.078125 935.367188 301.683594 934.636719 300.414062 C 933.90625 299.148438 932.410156 296.40625 931.316406 294.324219 C 922.359375 277.285156 923.070312 278.222656 919.65625 278.941406 C 918.683594 279.144531 916.746094 279.511719 915.347656 279.757812 C 913.890625 280.015625 912.734375 280.402344 912.632812 280.667969 C 912.347656 281.410156 912.726562 282.554688 919.605469 301.726562 C 921.066406 305.796875 922.414062 309.550781 922.605469 310.074219 C 923.058594 311.328125 924.167969 311.316406 926.84375 310.027344 C 929.804688 308.597656 932.484375 307.375 934.054688 306.730469 C 935.582031 306.105469 936.660156 305.25 936.625 304.683594 C 936.613281 304.476562 936.460938 303.949219 936.285156 303.511719 M 935.207031 226.773438 C 934.382812 226.089844 923.703125 221.171875 923.046875 221.171875 C 922.304688 221.171875 921.886719 221.992188 920.308594 226.542969 C 919.460938 228.988281 918.210938 232.535156 917.527344 234.425781 C 914.203125 243.625 911.925781 250.535156 912.082031 250.945312 C 912.1875 251.21875 913.800781 251.691406 916.105469 252.125 C 920.515625 252.957031 921.96875 253.023438 922.441406 252.414062 C 922.855469 251.882812 923.988281 249.800781 928.648438 240.96875 C 930.648438 237.183594 932.957031 232.859375 933.78125 231.367188 C 935.546875 228.179688 935.824219 227.28125 935.207031 226.773438 M 920.800781 308.4375 C 920.078125 306.625 917.261719 298.730469 913.414062 287.722656 C 912.085938 283.925781 910.886719 281.035156 910.59375 280.921875 C 910.316406 280.816406 906.882812 280.824219 902.972656 280.945312 C 897.878906 281.105469 895.582031 281.304688 894.886719 281.65625 L 893.917969 282.144531 L 894.164062 297.183594 C 894.46875 316.035156 894.9375 324.222656 895.714844 324.371094 C 896.019531 324.425781 898.265625 323.519531 900.707031 322.351562 C 903.152344 321.183594 905.925781 319.871094 906.871094 319.4375 C 910.664062 317.695312 919.660156 313.390625 920.46875 312.933594 C 921.59375 312.296875 921.710938 310.71875 920.800781 308.4375 M 920.726562 219.785156 C 920.679688 219.777344 917.699219 218.230469 914.101562 216.347656 C 902.394531 210.222656 895.695312 206.933594 895.441406 207.1875 C 894.976562 207.652344 894.667969 212.34375 894.328125 224.101562 C 893.839844 240.972656 893.863281 249.578125 894.394531 250.011719 C 894.628906 250.207031 896.835938 250.460938 899.296875 250.582031 C 901.761719 250.699219 905.089844 250.878906 906.699219 250.980469 C 908.820312 251.113281 909.785156 251.039062 910.203125 250.710938 C 910.523438 250.464844 912.558594 245.152344 914.730469 238.902344 C 916.898438 232.652344 919.15625 226.234375 919.746094 224.636719 C 920.628906 222.238281 921.113281 219.84375 920.726562 219.785156 "
  }));
}
Object.assign(__ds_scope, { TailMark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/TailMark.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The EverydayDragon / Dragon Chan wordmark lockup, rebuilt in the display
 * typeface with the tail mark. Two brands per the guidelines:
 *  - "everyday" (public brand)  → stacked EVERYDAY / DRAGON + tail
 *  - "dragonchan" (personal)    → stacked DRAGON / CHAN + tail
 */
function Logo({
  brand = 'everyday',
  invert = false,
  size = 40,
  showMark = true,
  style = {},
  ...rest
}) {
  const [line1, line2] = brand === 'dragonchan' ? ['Dragon', 'Chan'] : ['Everyday', 'Dragon'];
  const ink = invert ? '#fff' : 'var(--color-ink)';
  const lh = size * 0.92;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: size * 0.42,
      color: ink,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-black)',
      fontSize: size,
      lineHeight: `${lh}px`,
      letterSpacing: '-0.02em',
      textTransform: 'uppercase',
      color: ink
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block'
    }
  }, line1), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block'
    }
  }, line2)), showMark && /*#__PURE__*/React.createElement(__ds_scope.TailMark, {
    size: size * 1.15,
    style: {
      color: ink
    }
  }));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Small status/label chip. Bold by default: solid tone-color fill, white
 * text, sharp corners. `variant="outline"` swaps to a white surface with a
 * thick tone-color border — for use in dense rows where solid chips compete.
 * (`variant="soft"` is kept as an alias of `outline` for back-compat.)
 */
function Badge({
  tone = 'neutral',
  variant = 'solid',
  size = 'md',
  style = {},
  children,
  ...rest
}) {
  const tones = {
    neutral: {
      fill: 'var(--ed-battleship)',
      line: 'var(--ed-battleship)',
      ink: 'var(--ed-ink-600)'
    },
    primary: {
      fill: 'var(--ed-blurple)',
      line: 'var(--ed-blurple)',
      ink: 'var(--ed-blurple-700)'
    },
    deep: {
      fill: 'var(--ed-periwinkle)',
      line: 'var(--ed-periwinkle)',
      ink: 'var(--ed-periwinkle)'
    },
    success: {
      fill: 'var(--ed-moss)',
      line: 'var(--ed-moss)',
      ink: '#3f5a45'
    },
    danger: {
      fill: 'var(--ed-crimson)',
      line: 'var(--ed-crimson)',
      ink: '#a01523'
    },
    ink: {
      fill: 'var(--ed-midnight)',
      line: 'var(--ed-midnight)',
      ink: 'var(--ed-midnight)'
    }
  };
  const sizes = {
    sm: ['2px 8px', 'var(--text-2xs)'],
    md: ['4px 10px', 'var(--text-xs)']
  };
  const t = tones[tone] || tones.neutral;
  const [pad, fs] = sizes[size] || sizes.md;
  const isSolid = variant === 'solid';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px',
      padding: pad,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: fs,
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      lineHeight: 1.3,
      color: isSolid ? '#fff' : t.ink,
      background: isSolid ? t.fill : '#fff',
      border: `2px solid ${t.line}`,
      borderRadius: 'var(--radius-xs)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * EverydayDragon primary action control.
 * Variants map to the brand's crisp, confident action language.
 */
function Button({
  variant = 'primary',
  size = 'md',
  full = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  as = 'button',
  style = {},
  children,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 14px',
      fontSize: 'var(--text-sm)',
      gap: '6px',
      radius: 'var(--radius-sm)'
    },
    md: {
      padding: '11px 20px',
      fontSize: 'var(--text-md)',
      gap: '8px',
      radius: 'var(--radius-sm)'
    },
    lg: {
      padding: '15px 28px',
      fontSize: 'var(--text-lg)',
      gap: '10px',
      radius: 'var(--radius-md)'
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: 'var(--color-primary)',
      color: '#fff',
      border: '2px solid var(--color-ink)',
      boxShadow: 'var(--shadow-hard-sm)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--color-ink)',
      border: '2px solid var(--color-ink)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-ink)',
      border: '2px solid transparent'
    },
    ink: {
      background: 'var(--color-ink)',
      color: '#fff',
      border: '2px solid var(--color-ink)',
      boxShadow: 'var(--shadow-hard-blurple)'
    },
    danger: {
      background: 'var(--color-danger)',
      color: '#fff',
      border: '2px solid var(--color-ink)',
      boxShadow: 'var(--shadow-hard-sm)'
    }
  };
  const base = {
    display: full ? 'flex' : 'inline-flex',
    width: full ? '100%' : 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    padding: s.padding,
    fontFamily: 'var(--font-display)',
    fontWeight: 'var(--fw-bold)',
    fontSize: s.fontSize,
    letterSpacing: 'var(--ls-tight)',
    lineHeight: 1,
    borderRadius: s.radius,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1,
    transition: 'transform var(--dur-fast) var(--ease-standard), background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)',
    whiteSpace: 'nowrap',
    ...variants[variant],
    ...style
  };
  const El = as;
  return /*#__PURE__*/React.createElement(El, _extends({
    className: "ed-btn",
    "data-variant": variant,
    disabled: as === 'button' ? disabled : undefined,
    style: base,
    onMouseDown: e => {
      if (!disabled) {
        e.currentTarget.style.transform = 'translate(3px, 3px)';
        e.currentTarget.style.boxShadow = 'none';
      }
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'translate(0, 0)';
      e.currentTarget.style.boxShadow = base.boxShadow || 'none';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translate(0, 0)';
      e.currentTarget.style.boxShadow = base.boxShadow || 'none';
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Surface container. The brand card is graphic and confident: a thick
 * ink border and a hard offset shadow (not a soft blur) — the system's
 * signature bold device. `tone="ink"` inverts for feature moments;
 * `tone="outline"` drops the shadow for use on already-busy surfaces.
 */
function Card({
  tone = 'default',
  pad = 'md',
  interactive = false,
  style = {},
  children,
  ...rest
}) {
  const pads = {
    none: 0,
    sm: 'var(--space-4)',
    md: 'var(--space-6)',
    lg: 'var(--space-8)'
  };
  const tones = {
    default: {
      background: 'var(--color-surface)',
      color: 'var(--color-text-body)',
      border: '2px solid var(--color-ink)',
      shadow: 'var(--shadow-hard-sm)'
    },
    subtle: {
      background: 'var(--color-surface-subtle)',
      color: 'var(--color-text-body)',
      border: '2px solid var(--color-ink)',
      shadow: 'var(--shadow-hard-sm)'
    },
    ink: {
      background: 'var(--color-surface-ink)',
      color: 'rgba(255,255,255,0.85)',
      border: '2px solid #fff',
      shadow: 'var(--shadow-hard-blurple)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--color-text-body)',
      border: '2px solid var(--color-ink)',
      shadow: 'none'
    }
  };
  const t = tones[tone] || tones.default;
  const [hover, setHover] = React.useState(false);
  const lifted = interactive && hover;
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      borderRadius: 'var(--radius-lg)',
      padding: pads[pad],
      background: t.background,
      color: t.color,
      border: t.border,
      boxShadow: t.shadow === 'none' ? 'none' : lifted ? t.shadow.replace(/(\d+)px (\d+)px/, (m, a, b) => `${Number(a) + 3}px ${Number(b) + 3}px`) : t.shadow,
      transform: lifted ? 'translate(-3px, -3px)' : 'translate(0, 0)',
      transition: 'box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Square icon-only button. Mirrors Button variants at a compact footprint. */
function IconButton({
  variant = 'ghost',
  size = 'md',
  disabled = false,
  label,
  style = {},
  children,
  ...rest
}) {
  const dims = {
    sm: 32,
    md: 40,
    lg: 48
  };
  const d = dims[size] || dims.md;
  const variants = {
    primary: {
      background: 'var(--color-primary)',
      color: '#fff',
      border: '2px solid var(--color-primary)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--color-ink)',
      border: '2px solid var(--color-ink)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-ink)',
      border: '2px solid transparent'
    },
    ink: {
      background: 'var(--color-ink)',
      color: '#fff',
      border: '2px solid var(--color-ink)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: d,
      height: d,
      padding: 0,
      borderRadius: 'var(--radius-sm)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      transition: 'transform var(--dur-fast) var(--ease-standard), background var(--dur-fast)',
      ...variants[variant],
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.94)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Removable/selectable pill tag. Softer than Badge; sentence-case content. */
function Tag({
  selected = false,
  onRemove,
  style = {},
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: '5px 12px',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--text-sm)',
      lineHeight: 1.2,
      color: selected ? '#fff' : 'var(--color-ink)',
      background: selected ? 'var(--color-ink)' : 'transparent',
      border: `2px solid ${selected ? 'var(--color-ink)' : 'var(--color-ink)'}`,
      borderRadius: 'var(--radius-pill)',
      cursor: 'default',
      ...style
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    "aria-label": "Remove",
    onClick: onRemove,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 16,
      height: 16,
      marginRight: -2,
      padding: 0,
      border: 'none',
      borderRadius: '999px',
      background: 'transparent',
      color: 'inherit',
      cursor: 'pointer',
      fontSize: 14,
      lineHeight: 1,
      opacity: 0.6
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/display/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Expandable list. Bold: 2px ink dividers between items, a chunky +/−
 * indicator (not a thin chevron) that flips on open.
 */
function Accordion({
  items = [],
  defaultOpenId,
  allowMultiple = false,
  style = {},
  ...rest
}) {
  const [openIds, setOpenIds] = React.useState(() => new Set(defaultOpenId ? [defaultOpenId] : []));
  const toggle = id => {
    setOpenIds(prev => {
      const next = allowMultiple ? new Set(prev) : new Set();
      if (prev.has(id)) {
        if (!allowMultiple) return new Set();
        next.delete(id);
      } else next.add(id);
      return next;
    });
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      border: '2px solid var(--color-ink)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      ...style
    }
  }, rest), items.map((it, i) => {
    const open = openIds.has(it.id);
    return /*#__PURE__*/React.createElement("div", {
      key: it.id,
      style: {
        borderTop: i === 0 ? 'none' : '2px solid var(--color-ink)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => toggle(it.id),
      "aria-expanded": open,
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 'var(--space-4)',
        padding: 'var(--space-5) var(--space-6)',
        border: 'none',
        background: 'var(--color-surface)',
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'var(--font-display)',
        fontWeight: 'var(--fw-bold)',
        fontSize: 'var(--text-md)',
        color: 'var(--color-ink)'
      }
    }, it.title, /*#__PURE__*/React.createElement("span", {
      style: {
        flexShrink: 0,
        width: 24,
        height: 24,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px solid var(--color-ink)',
        borderRadius: 'var(--radius-xs)',
        fontSize: 16,
        lineHeight: 1,
        fontWeight: 900,
        background: open ? 'var(--color-ink)' : 'transparent',
        color: open ? '#fff' : 'var(--color-ink)',
        transition: 'background var(--dur-fast) var(--ease-standard)'
      }
    }, open ? '−' : '+')), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateRows: open ? '1fr' : '0fr',
        transition: 'grid-template-rows var(--dur-base) var(--ease-standard)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 var(--space-6) var(--space-5)',
        fontSize: 'var(--text-sm)',
        color: 'var(--color-text-body)',
        lineHeight: 'var(--lh-relaxed)'
      }
    }, it.content))));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Avatar — image or monogram. Square-ish brand radius, not fully round by default. */
function Avatar({
  src,
  name = '',
  size = 44,
  shape = 'rounded',
  tone = 'ink',
  style = {},
  ...rest
}) {
  const radius = shape === 'circle' ? '999px' : 'var(--radius-md)';
  const initials = name.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  const tones = {
    ink: ['var(--color-ink)', '#fff'],
    primary: ['var(--color-primary)', '#fff'],
    moss: ['var(--ed-moss)', '#fff'],
    wisteria: ['var(--ed-wisteria)', 'var(--color-ink)']
  };
  const [bg, fg] = tones[tone] || tones.ink;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      flexShrink: 0,
      overflow: 'hidden',
      borderRadius: radius,
      background: src ? '#eee' : bg,
      color: fg,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: size * 0.38,
      letterSpacing: '0.01em',
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Divider — hairline rule, optional centered label or tail mark. */
function Divider({
  label,
  style = {},
  ...rest
}) {
  if (!label) {
    return /*#__PURE__*/React.createElement("hr", _extends({
      style: {
        border: 'none',
        borderTop: '1px solid var(--color-border)',
        margin: 'var(--space-6) 0',
        ...style
      }
    }, rest));
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      margin: 'var(--space-6) 0',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--color-border)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--color-text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--color-border)'
    }
  }));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Divider.jsx", error: String((e && e.message) || e) }); }

// components/display/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The brand kicker/label — uppercase display, wide tracking, tail accent optional. */
function Eyebrow({
  color = 'primary',
  style = {},
  children,
  ...rest
}) {
  const colors = {
    primary: 'var(--color-primary)',
    ink: 'var(--color-ink)',
    muted: 'var(--color-text-muted)',
    invert: 'rgba(255,255,255,0.75)'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-block',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: colors[color] || colors.primary,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/display/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Big-number stat block for landing pages / dashboards. */
function Stat({
  value,
  label,
  sub,
  align = 'left',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-black)',
      fontSize: 'var(--text-4xl)',
      lineHeight: 1,
      letterSpacing: '-0.02em',
      color: 'var(--color-ink)'
    }
  }, value), label && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--color-primary)'
    }
  }, label), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      fontSize: 'var(--text-sm)',
      color: 'var(--color-text-muted)'
    }
  }, sub));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Stat.jsx", error: String((e && e.message) || e) }); }

// components/display/Table.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Data table. Bold: 2px ink rule under the header row, wide-tracked
 * uppercase header labels, hairline row dividers, tone-colored hover.
 */
function Table({
  columns = [],
  rows = [],
  onRowClick,
  keyField = 'id',
  style = {},
  ...rest
}) {
  const [hoverIdx, setHoverIdx] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      overflowX: 'auto',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    style: {
      textAlign: c.align || 'left',
      padding: '0 16px 12px',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--color-text-muted)',
      borderBottom: '2px solid var(--color-ink)'
    }
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((row, i) => /*#__PURE__*/React.createElement("tr", {
    key: row[keyField] ?? i,
    onClick: () => onRowClick?.(row),
    onMouseEnter: () => setHoverIdx(i),
    onMouseLeave: () => setHoverIdx(null),
    style: {
      cursor: onRowClick ? 'pointer' : 'default',
      background: hoverIdx === i ? 'var(--color-surface-subtle)' : 'transparent',
      transition: 'background var(--dur-fast) var(--ease-standard)'
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    style: {
      textAlign: c.align || 'left',
      padding: '14px 16px',
      fontSize: 'var(--text-sm)',
      color: 'var(--color-text-body)',
      borderBottom: '1px solid var(--color-border)'
    }
  }, c.render ? c.render(row) : row[c.key])))))));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Table.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Inline message/callout. Left accent bar in the tone color; crisp, not rounded-only. */
function Alert({
  tone = 'info',
  title,
  onClose,
  style = {},
  children,
  ...rest
}) {
  const tones = {
    info: {
      bar: 'var(--ed-blurple)',
      bg: 'var(--ed-blurple-050)',
      ink: 'var(--ed-blurple-700)'
    },
    success: {
      bar: 'var(--ed-moss)',
      bg: 'var(--ed-moss-100)',
      ink: '#3f5a45'
    },
    danger: {
      bar: 'var(--ed-crimson)',
      bg: 'var(--ed-crimson-050)',
      ink: '#a01523'
    },
    neutral: {
      bar: 'var(--ed-battleship)',
      bg: 'var(--ed-wisteria-050)',
      ink: 'var(--ed-ink-600)'
    }
  };
  const t = tones[tone] || tones.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      padding: 'var(--space-4)',
      paddingLeft: 'var(--space-4)',
      background: t.bg,
      borderLeft: `3px solid ${t.bar}`,
      borderRadius: 'var(--radius-sm)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--text-sm)',
      color: t.ink,
      marginBottom: children ? 2 : 0
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--color-text-body)',
      lineHeight: 'var(--lh-normal)'
    }
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    "aria-label": "Dismiss",
    onClick: onClose,
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: t.ink,
      fontSize: 16,
      lineHeight: 1,
      padding: 2,
      opacity: 0.7
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Modal.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Modal dialog. The panel carries the signature hard shadow + thick border —
 * it should look like a deliberate object placed on top of the page, not a
 * blurred sheet.
 */
function Modal({
  open,
  onClose,
  title,
  footer,
  size = 'md',
  children,
  style = {},
  ...rest
}) {
  if (!open) return null;
  const widths = {
    sm: 380,
    md: 520,
    lg: 680
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "presentation",
    onClick: e => {
      if (e.target === e.currentTarget) onClose?.();
    },
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(0,0,0,0.55)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    "aria-label": typeof title === 'string' ? title : undefined,
    style: {
      width: '100%',
      maxWidth: widths[size] || widths.md,
      maxHeight: '86vh',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--color-surface)',
      color: 'var(--color-text-body)',
      border: '2px solid var(--color-ink)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-hard-lg)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 'var(--space-4)',
      padding: 'var(--space-6) var(--space-6) var(--space-4)',
      borderBottom: '2px solid var(--color-border)'
    }
  }, title && /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-xl)',
      margin: 0
    }
  }, title), onClose && /*#__PURE__*/React.createElement("button", {
    "aria-label": "Close",
    onClick: onClose,
    style: {
      border: '2px solid var(--color-ink)',
      background: 'transparent',
      cursor: 'pointer',
      width: 32,
      height: 32,
      borderRadius: 'var(--radius-sm)',
      flexShrink: 0,
      fontSize: 16,
      lineHeight: 1,
      color: 'var(--color-ink)'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-6)',
      overflowY: 'auto',
      flex: 1
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--space-3)',
      padding: 'var(--space-5) var(--space-6)',
      borderTop: '2px solid var(--color-border)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Modal.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Square brand checkbox with a crisp check. Controlled or uncontrolled. */
function Checkbox({
  label,
  checked,
  defaultChecked,
  disabled,
  style = {},
  onChange,
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (!isControlled) setInternal(e.target.checked);
    onChange?.(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: on,
    disabled: disabled,
    onChange: toggle,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 20,
      height: 20,
      margin: 0,
      cursor: 'inherit'
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: 'var(--radius-xs)',
      background: on ? 'var(--color-primary)' : 'var(--color-surface)',
      border: `2px solid ${on ? 'var(--color-primary)' : 'var(--color-border-strong)'}`,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--dur-fast), border-color var(--dur-fast)'
    }
  }, on && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 6.2L4.6 9L10 3",
    stroke: "#fff",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-md)',
      color: 'var(--color-ink)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text input with brand focus ring. Pairs with a label via `label`/`hint`. */
function Input({
  label,
  hint,
  error,
  size = 'md',
  iconLeft,
  style = {},
  id,
  ...rest
}) {
  const sizes = {
    sm: '8px 12px',
    md: '11px 14px',
    lg: '14px 16px'
  };
  const fid = id || (label ? 'in-' + label.replace(/\s+/g, '-').toLowerCase() : undefined);
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      display: 'block',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginBottom: 6,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--text-sm)',
      color: 'var(--color-ink)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 12,
      display: 'inline-flex',
      color: 'var(--color-text-muted)',
      pointerEvents: 'none'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    onFocus: e => {
      setFocus(true);
      rest.onFocus?.(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur?.(e);
    },
    style: {
      width: '100%',
      padding: sizes[size] || sizes.md,
      paddingLeft: iconLeft ? 38 : undefined,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-md)',
      color: 'var(--color-ink)',
      background: 'var(--color-surface)',
      border: `1px solid ${error ? 'var(--color-danger)' : focus ? 'var(--color-primary)' : 'var(--color-border-strong)'}`,
      borderRadius: 'var(--radius-sm)',
      outline: 'none',
      boxShadow: focus ? 'var(--focus-ring)' : 'none',
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)'
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 6,
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--color-danger)' : 'var(--color-text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Radio option. Group by sharing a `name`. */
function Radio({
  label,
  checked,
  defaultChecked,
  disabled,
  name,
  value,
  style = {},
  onChange,
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (!isControlled) setInternal(e.target.checked);
    onChange?.(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    name: name,
    value: value,
    checked: on,
    disabled: disabled,
    onChange: toggle,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 20,
      height: 20,
      margin: 0,
      cursor: 'inherit'
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: '999px',
      background: 'var(--color-surface)',
      border: `2px solid ${on ? 'var(--color-primary)' : 'var(--color-border-strong)'}`,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'border-color var(--dur-fast)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '999px',
      background: 'var(--color-primary)',
      transform: on ? 'scale(1)' : 'scale(0)',
      transition: 'transform var(--dur-fast) var(--ease-out)'
    }
  }))), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-md)',
      color: 'var(--color-ink)'
    }
  }, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Native select styled to brand. */
function Select({
  label,
  hint,
  size = 'md',
  style = {},
  id,
  children,
  ...rest
}) {
  const sizes = {
    sm: '8px 12px',
    md: '11px 14px',
    lg: '14px 16px'
  };
  const fid = id || (label ? 'sel-' + label.replace(/\s+/g, '-').toLowerCase() : undefined);
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      display: 'block',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginBottom: 6,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--text-sm)',
      color: 'var(--color-ink)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fid,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      padding: sizes[size] || sizes.md,
      paddingRight: 36,
      appearance: 'none',
      WebkitAppearance: 'none',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-md)',
      color: 'var(--color-ink)',
      background: 'var(--color-surface)',
      border: `1px solid ${focus ? 'var(--color-primary)' : 'var(--color-border-strong)'}`,
      borderRadius: 'var(--radius-sm)',
      outline: 'none',
      cursor: 'pointer',
      boxShadow: focus ? 'var(--focus-ring)' : 'none',
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)'
    }
  }, rest), children), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--color-text-muted)',
      fontSize: 12
    }
  }, "\u25BE")), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 6,
      fontSize: 'var(--text-xs)',
      color: 'var(--color-text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Pill toggle switch. Controlled or uncontrolled. */
function Switch({
  label,
  checked,
  defaultChecked,
  disabled,
  style = {},
  onChange,
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    const nv = !on;
    if (!isControlled) setInternal(nv);
    onChange?.({
      target: {
        checked: nv
      }
    });
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "switch",
    "aria-checked": on,
    onClick: toggle,
    disabled: disabled,
    style: {
      position: 'relative',
      width: 44,
      height: 26,
      padding: 0,
      flexShrink: 0,
      borderRadius: '999px',
      border: 'none',
      cursor: 'inherit',
      background: on ? 'var(--color-primary)' : 'var(--color-border-strong)',
      transition: 'background var(--dur-base) var(--ease-standard)'
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: on ? 21 : 3,
      width: 20,
      height: 20,
      borderRadius: '999px',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--dur-base) var(--ease-out)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-md)',
      color: 'var(--color-ink)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Multiline text field. Same visual language as Input. */
function Textarea({
  label,
  hint,
  error,
  rows = 4,
  style = {},
  id,
  ...rest
}) {
  const fid = id || (label ? 'ta-' + label.replace(/\s+/g, '-').toLowerCase() : undefined);
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      display: 'block',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginBottom: 6,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--text-sm)',
      color: 'var(--color-ink)'
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: fid,
    rows: rows,
    onFocus: e => {
      setFocus(true);
      rest.onFocus?.(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur?.(e);
    },
    style: {
      width: '100%',
      padding: '11px 14px',
      resize: 'vertical',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-md)',
      lineHeight: 'var(--lh-normal)',
      color: 'var(--color-ink)',
      background: 'var(--color-surface)',
      border: `1px solid ${error ? 'var(--color-danger)' : focus ? 'var(--color-primary)' : 'var(--color-border-strong)'}`,
      borderRadius: 'var(--radius-sm)',
      outline: 'none',
      boxShadow: focus ? 'var(--focus-ring)' : 'none',
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)'
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 6,
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--color-danger)' : 'var(--color-text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Navbar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Sticky top navigation bar. Bold: thick ink bottom border instead of a
 * hairline, active link gets a solid underline bar (not just color change).
 */
function Navbar({
  brand,
  items = [],
  active,
  onNavigate,
  actions,
  sticky = true,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      position: sticky ? 'sticky' : 'static',
      top: 0,
      zIndex: 30,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 32px',
      background: 'var(--color-bg)',
      borderBottom: '2px solid var(--color-ink)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, brand), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-8)'
    }
  }, items.map(it => {
    const on = it.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      onClick: () => onNavigate?.(it.id),
      style: {
        position: 'relative',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        padding: '4px 0',
        fontFamily: 'var(--font-display)',
        fontWeight: 'var(--fw-bold)',
        fontSize: 'var(--text-sm)',
        letterSpacing: 'var(--ls-tight)',
        color: on ? 'var(--color-ink)' : 'var(--color-text-muted)'
      }
    }, it.label, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: -3,
        height: 3,
        background: 'var(--color-primary)',
        transform: on ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'left',
        transition: 'transform var(--dur-base) var(--ease-out)'
      }
    }));
  }), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, actions)));
}
Object.assign(__ds_scope, { Navbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Navbar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Numbered page controls. Bold: square 2px-bordered buttons; the active
 * page is a solid ink fill, not a soft tint.
 */
function Pagination({
  page = 1,
  pageCount = 1,
  onChange,
  style = {},
  ...rest
}) {
  const go = p => {
    if (p >= 1 && p <= pageCount && p !== page) onChange?.(p);
  };
  const pages = React.useMemo(() => {
    const out = [];
    const add = v => out.push(v);
    add(1);
    if (page > 3) add('…');
    for (let p = Math.max(2, page - 1); p <= Math.min(pageCount - 1, page + 1); p++) add(p);
    if (page < pageCount - 2) add('…');
    if (pageCount > 1) add(pageCount);
    return out;
  }, [page, pageCount]);
  const btnBase = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 36,
    height: 36,
    padding: '0 8px',
    border: '2px solid var(--color-ink)',
    borderRadius: 'var(--radius-sm)',
    fontFamily: 'var(--font-display)',
    fontWeight: 'var(--fw-bold)',
    fontSize: 'var(--text-sm)',
    background: 'transparent',
    color: 'var(--color-ink)',
    cursor: 'pointer'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Previous page",
    disabled: page <= 1,
    onClick: () => go(page - 1),
    style: {
      ...btnBase,
      opacity: page <= 1 ? 0.35 : 1,
      cursor: page <= 1 ? 'not-allowed' : 'pointer'
    }
  }, "\u2039"), pages.map((p, i) => p === '…' ? /*#__PURE__*/React.createElement("span", {
    key: `e${i}`,
    style: {
      padding: '0 4px',
      color: 'var(--color-text-muted)',
      fontFamily: 'var(--font-display)',
      fontWeight: 700
    }
  }, "\u2026") : /*#__PURE__*/React.createElement("button", {
    key: p,
    "aria-current": p === page ? 'page' : undefined,
    onClick: () => go(p),
    style: {
      ...btnBase,
      background: p === page ? 'var(--color-ink)' : 'transparent',
      color: p === page ? '#fff' : 'var(--color-ink)',
      boxShadow: p === page ? 'var(--shadow-hard-xs)' : 'none'
    }
  }, p)), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Next page",
    disabled: page >= pageCount,
    onClick: () => go(page + 1),
    style: {
      ...btnBase,
      opacity: page >= pageCount ? 0.35 : 1,
      cursor: page >= pageCount ? 'not-allowed' : 'pointer'
    }
  }, "\u203A"));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tabs — underline indicator in the brand primary. Controlled or uncontrolled.
 * `items`: [{ id, label }]. Renders the tab strip only; you render panels.
 */
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  style = {},
  ...rest
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? items[0]?.id);
  const active = isControlled ? value : internal;
  const select = id => {
    if (!isControlled) setInternal(id);
    onChange?.(id);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      borderBottom: '1px solid var(--color-border)',
      ...style
    }
  }, rest), items.map(it => {
    const on = it.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      role: "tab",
      "aria-selected": on,
      onClick: () => select(it.id),
      style: {
        position: 'relative',
        padding: '0 0 12px',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        fontFamily: 'var(--font-display)',
        fontWeight: 'var(--fw-bold)',
        fontSize: 'var(--text-sm)',
        letterSpacing: 'var(--ls-tight)',
        color: on ? 'var(--color-ink)' : 'var(--color-text-muted)',
        transition: 'color var(--dur-fast)'
      }
    }, it.label, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: -1,
        height: 2,
        background: 'var(--color-primary)',
        transform: on ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'left',
        transition: 'transform var(--dur-base) var(--ease-out)'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/personal-site/HomeScreen.jsx
try { (() => {
/* Home / "Now" screen for the EverydayDragon personal site. */
function HomeScreen({
  onNav
}) {
  const NS = window.EDDesignSys_b6b25b;
  const {
    Button,
    Eyebrow,
    Card,
    Badge,
    Stat,
    Divider,
    TailMark
  } = NS;
  const I = window.EDIcon;
  const posts = [{
    tag: 'Writing',
    date: 'Jun 28',
    title: 'Seek the storm, then sit in it',
    excerpt: 'Growth rarely announces itself. It shows up as the thing you would rather avoid.',
    tone: 'primary'
  }, {
    tag: 'Building',
    date: 'Jun 21',
    title: 'Shipping in public for 365 days',
    excerpt: 'What a year of one-post-a-day taught me about consistency over intensity.',
    tone: 'deep'
  }, {
    tag: 'Notes',
    date: 'Jun 14',
    title: 'On being a dragon and a human',
    excerpt: 'The oxymoron at the center of everything — the everyday and the mythical.',
    tone: 'neutral'
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'radial-gradient(120% 130% at 88% 6%, #12166b 0%, #05061f 46%, #000 100%)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      background: 'radial-gradient(60% 50% at 82% 0%, rgba(48,102,190,0.40), transparent 70%), radial-gradient(42% 42% at 4% 100%, rgba(9,12,155,0.50), transparent 70%)'
    }
  }), /*#__PURE__*/React.createElement(TailMark, {
    size: 540,
    style: {
      position: 'absolute',
      right: -100,
      bottom: -90,
      color: '#fff',
      opacity: 0.10,
      transform: 'rotate(-8deg)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 1120,
      margin: '0 auto',
      padding: '108px 40px 96px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "invert"
  }, "Challenge the boundaries of possibility"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontWeight: 900,
      textTransform: 'uppercase',
      letterSpacing: '-0.04em',
      lineHeight: 0.82,
      marginTop: 18,
      fontSize: 'clamp(56px, 9.5vw, 138px)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: '0.40em',
      fontWeight: 800,
      letterSpacing: '-0.02em',
      color: '#c9cdf2'
    }
  }, "Everyday"), "Dragon"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 26,
      fontSize: 19,
      lineHeight: 1.55,
      color: '#b9bce0',
      maxWidth: '42ch'
    }
  }, "One reflection, one thing learned, one storm sought. No noise \u2014 living with intentionality and purpose along the frontier of life."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 22,
      marginTop: 34,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(I, {
      name: "arrow",
      size: 18
    }),
    onClick: () => onNav && onNav('writing')
  }, "Seek the storm"), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav && onNav('about'),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '4px 0 4px',
      color: '#fff',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 15,
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      borderBottom: '2px solid var(--color-primary)'
    }
  }, "Read the writing")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 56,
      marginTop: 60
    }
  }, [['365', 'Days shipped'], ['12', 'Skills learned'], ['48', 'Essays written']].map(([v, k]) => /*#__PURE__*/React.createElement("div", {
    key: k
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 44,
      letterSpacing: '-0.02em',
      color: '#fff'
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: '#8f93bd',
      marginTop: 6,
      textTransform: 'uppercase',
      letterSpacing: '0.08em'
    }
  }, k)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--color-primary)',
      color: '#fff',
      padding: '72px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(TailMark, {
    size: 26,
    style: {
      color: '#fff'
    }
  }), /*#__PURE__*/React.createElement(Eyebrow, {
    color: "invert"
  }, "Brand core")), /*#__PURE__*/React.createElement("h2", {
    style: {
      color: '#fff',
      fontSize: 40,
      marginTop: 16,
      maxWidth: '18ch'
    }
  }, "Four values, lived every day"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 20,
      marginTop: 40
    }
  }, [['zap', 'Stay True', 'Live authentically, with morality and candor in every moment.'], ['compass', 'Seek the Storm', 'Courageously strive for moments that foster growth.'], ['book', 'Skill Up', 'Continue to learn new skills and ideas.'], ['share', 'Share It All', 'Share insights and moments with others.']].map(([icon, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      paddingTop: 20,
      borderTop: '2px solid rgba(255,255,255,0.55)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(I, {
    name: icon,
    size: 24
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 19,
      marginTop: 14
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.62)',
      fontSize: 14,
      lineHeight: 1.55,
      marginTop: 8
    }
  }, d)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '80px 40px',
      maxWidth: 1120,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Along the frontier"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 36,
      marginTop: 12
    }
  }, "Latest from the everyday")), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    iconRight: /*#__PURE__*/React.createElement(I, {
      name: "arrow",
      size: 16
    }),
    onClick: () => onNav && onNav('writing')
  }, "All posts")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20,
      marginTop: 36
    }
  }, posts.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.title,
    interactive: true,
    style: {
      display: 'flex',
      flexDirection: 'column',
      cursor: 'pointer'
    },
    onClick: () => onNav && onNav('writing')
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: p.tone
  }, p.tag), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--color-text-muted)'
    }
  }, p.date)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 21,
      marginTop: 14,
      lineHeight: 1.15
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      color: 'var(--color-text-body)',
      lineHeight: 1.6,
      marginTop: 10,
      flex: 1
    }
  }, p.excerpt), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 18,
      color: 'var(--color-primary)',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 13
    }
  }, "Read ", /*#__PURE__*/React.createElement(I, {
    name: "arrow",
    size: 15
  })))))), /*#__PURE__*/React.createElement(NewsletterCTA, null));
}
function NewsletterCTA() {
  const {
    Input,
    Button,
    Eyebrow
  } = window.EDDesignSys_b6b25b;
  const I = window.EDIcon;
  const [done, setDone] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 40px 88px',
      maxWidth: 1120,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-surface-lav)',
      borderRadius: 'var(--radius-lg)',
      padding: '52px 48px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 40,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '40ch'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Share it all"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 32,
      marginTop: 12
    }
  }, "A weekly note from the frontier"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: 'var(--color-ink-soft)',
      marginTop: 10,
      lineHeight: 1.6
    }
  }, "One reflection, one thing learned, one storm sought. No noise.")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 340,
      maxWidth: '100%'
    }
  }, done ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      color: 'var(--color-success)'
    }
  }, /*#__PURE__*/React.createElement(I, {
    name: "check",
    size: 20
  }), " You're in. Talk Sunday.") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "you@domain.com",
    style: {
      flex: 1
    },
    iconLeft: /*#__PURE__*/React.createElement(I, {
      name: "mail",
      size: 16
    })
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "ink",
    onClick: () => setDone(true)
  }, "Subscribe")))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/personal-site/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/personal-site/Icons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* EverydayDragon UI kit — Lucide-style stroke icons (2px, round).
   These mirror the Lucide set (https://lucide.dev). In production, load
   Lucide from CDN instead; documented in readme ICONOGRAPHY. */
const EDIcon = ({
  name,
  size = 20,
  stroke = 2,
  style = {},
  ...rest
}) => {
  const P = {
    pen: /*#__PURE__*/React.createElement("path", {
      d: "M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"
    }),
    arrow: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M5 12h14"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M13 6l6 6-6 6"
    })),
    mail: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "2",
      y: "4",
      width: "20",
      height: "16",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m22 7-10 6L2 7"
    })),
    menu: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M3 6h18"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 12h18"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 18h18"
    })),
    rss: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M4 11a9 9 0 0 1 9 9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M4 4a16 16 0 0 1 16 16"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "5",
      cy: "19",
      r: "1"
    })),
    github: /*#__PURE__*/React.createElement("path", {
      d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
    }),
    x: /*#__PURE__*/React.createElement("path", {
      d: "M18 6 6 18M6 6l12 12"
    }),
    calendar: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "4",
      width: "18",
      height: "18",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 2v4M8 2v4M3 10h18"
    })),
    compass: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z"
    })),
    zap: /*#__PURE__*/React.createElement("path", {
      d: "M13 2 3 14h9l-1 8 10-12h-9l1-8z"
    }),
    book: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
    })),
    share: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "18",
      cy: "5",
      r: "3"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "6",
      cy: "12",
      r: "3"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "18",
      cy: "19",
      r: "3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m8.59 13.51 6.83 3.98M15.41 6.51l-6.82 3.98"
    })),
    check: /*#__PURE__*/React.createElement("path", {
      d: "M20 6 9 17l-5-5"
    })
  };
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      display: 'inline-block',
      flexShrink: 0,
      ...style
    }
  }, rest), P[name] || null);
};
window.EDIcon = EDIcon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/personal-site/Icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/personal-site/SiteChrome.jsx
try { (() => {
/* Site header + footer chrome for the EverydayDragon personal site. */
function SiteHeader({
  active = 'now',
  onNav
}) {
  const {
    Logo,
    Button
  } = window.EDDesignSys_b6b25b;
  const links = [{
    id: 'now',
    label: 'Now'
  }, {
    id: 'writing',
    label: 'Writing'
  }, {
    id: 'building',
    label: 'Building'
  }, {
    id: 'about',
    label: 'About'
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 40px',
      background: 'rgba(255,255,255,0.82)',
      backdropFilter: 'var(--blur-panel)',
      WebkitBackdropFilter: 'var(--blur-panel)',
      borderBottom: '1px solid var(--color-border)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav && onNav('now'),
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    brand: "everyday",
    size: 20
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }
  }, links.map(l => /*#__PURE__*/React.createElement("button", {
    key: l.id,
    onClick: () => onNav && onNav(l.id),
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      padding: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 14,
      letterSpacing: '-0.01em',
      color: active === l.id ? 'var(--color-ink)' : 'var(--color-text-muted)'
    }
  }, l.label)), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ink",
    onClick: () => onNav && onNav('subscribe')
  }, "Subscribe")));
}
function SiteFooter({
  onNav
}) {
  const {
    Logo
  } = window.EDDesignSys_b6b25b;
  const I = window.EDIcon;
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: '#000',
      color: '#fff',
      padding: '56px 40px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    brand: "everyday",
    size: 22,
    invert: true
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 18,
      color: 'rgba(255,255,255,0.6)',
      fontSize: 14,
      lineHeight: 1.6
    }
  }, "Living with intentionality and purpose in every moment along the frontier of life.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 64
    }
  }, /*#__PURE__*/React.createElement(FootCol, {
    title: "Explore",
    items: ['Now', 'Writing', 'Building', 'About'],
    onNav: onNav
  }), /*#__PURE__*/React.createElement(FootCol, {
    title: "Follow",
    items: ['Newsletter', 'GitHub', 'X / Twitter', 'RSS'],
    onNav: onNav
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 44,
      paddingTop: 22,
      borderTop: '1px solid rgba(255,255,255,0.15)',
      flexWrap: 'wrap',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgba(255,255,255,0.5)',
      fontSize: 13
    }
  }, "\xA9 2026 Dragon Chan. Stay true."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      color: 'rgba(255,255,255,0.7)'
    }
  }, /*#__PURE__*/React.createElement(I, {
    name: "github",
    size: 18
  }), /*#__PURE__*/React.createElement(I, {
    name: "x",
    size: 18
  }), /*#__PURE__*/React.createElement(I, {
    name: "rss",
    size: 18
  }), /*#__PURE__*/React.createElement(I, {
    name: "mail",
    size: 18
  }))));
}
function FootCol({
  title,
  items,
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.5)',
      marginBottom: 14
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it,
    onClick: () => onNav && onNav(it.toLowerCase()),
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      padding: 0,
      textAlign: 'left',
      color: '#fff',
      fontSize: 14,
      fontFamily: 'var(--font-body)'
    }
  }, it))));
}
window.SiteHeader = SiteHeader;
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/personal-site/SiteChrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/personal-site/WritingScreen.jsx
try { (() => {
/* Writing index + reading view for the EverydayDragon personal site. */
function WritingScreen({
  onNav
}) {
  const {
    Eyebrow,
    Tabs,
    Badge,
    Tag,
    Divider,
    Avatar
  } = window.EDDesignSys_b6b25b;
  const I = window.EDIcon;
  const [filter, setFilter] = React.useState('all');
  const [openPost, setOpenPost] = React.useState(null);
  const posts = [{
    id: 1,
    tag: 'Writing',
    cat: 'writing',
    date: 'Jun 28, 2026',
    read: '5 min',
    title: 'Seek the storm, then sit in it',
    excerpt: 'Growth rarely announces itself. It shows up as the thing you would rather avoid — the conversation, the rep, the empty page.'
  }, {
    id: 2,
    tag: 'Building',
    cat: 'building',
    date: 'Jun 21, 2026',
    read: '8 min',
    title: 'Shipping in public for 365 days',
    excerpt: 'What a year of one-post-a-day taught me about consistency over intensity, and why the streak was never the point.'
  }, {
    id: 3,
    tag: 'Notes',
    cat: 'notes',
    date: 'Jun 14, 2026',
    read: '4 min',
    title: 'On being a dragon and a human',
    excerpt: 'The oxymoron at the center of everything — reconciling mythical expectation with everyday reality.'
  }, {
    id: 4,
    tag: 'Writing',
    cat: 'writing',
    date: 'Jun 07, 2026',
    read: '6 min',
    title: 'Intention is a practice, not a mood',
    excerpt: 'You do not feel your way into intentional living. You build small, repeatable proofs that you meant it.'
  }];
  const filtered = filter === 'all' ? posts : posts.filter(p => p.cat === filter);
  if (openPost) return /*#__PURE__*/React.createElement(Article, {
    post: openPost,
    onBack: () => setOpenPost(null)
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 880,
      margin: '0 auto',
      padding: '80px 40px 96px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Share it all"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 56,
      fontWeight: 900,
      textTransform: 'uppercase',
      letterSpacing: '-0.03em',
      lineHeight: 0.96,
      marginTop: 16
    }
  }, "Writing"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: 'var(--color-ink-soft)',
      marginTop: 16,
      maxWidth: '52ch'
    }
  }, "Essays and notes from along the frontier of life. Meaningful over frequent."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: filter,
    onChange: setFilter,
    items: [{
      id: 'all',
      label: 'All'
    }, {
      id: 'writing',
      label: 'Essays'
    }, {
      id: 'building',
      label: 'Building'
    }, {
      id: 'notes',
      label: 'Notes'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, filtered.map(p => /*#__PURE__*/React.createElement("button", {
    key: p.id,
    onClick: () => setOpenPost(p),
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'left',
      cursor: 'pointer',
      border: 'none',
      borderBottom: '1px solid var(--color-border)',
      background: 'none',
      padding: '28px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: p.cat === 'building' ? 'deep' : p.cat === 'notes' ? 'neutral' : 'primary'
  }, p.tag), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--color-text-muted)'
    }
  }, p.date, " \xB7 ", p.read, " read")), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 26,
      marginTop: 12
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15.5,
      color: 'var(--color-text-body)',
      lineHeight: 1.6,
      marginTop: 8,
      maxWidth: '60ch'
    }
  }, p.excerpt)))));
}
function Article({
  post,
  onBack
}) {
  const {
    Eyebrow,
    Badge,
    Avatar,
    Divider,
    Button
  } = window.EDDesignSys_b6b25b;
  const I = window.EDIcon;
  return /*#__PURE__*/React.createElement("article", {
    style: {
      maxWidth: 680,
      margin: '0 auto',
      padding: '48px 40px 96px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(I, {
      name: "arrow",
      size: 15,
      style: {
        transform: 'rotate(180deg)'
      }
    }),
    onClick: onBack
  }, "Back to writing"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "primary"
  }, post.tag), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--color-text-muted)'
    }
  }, post.date, " \xB7 ", post.read, " read")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 44,
      lineHeight: 1.05,
      marginTop: 18
    }
  }, post.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Dragon Chan",
    tone: "ink",
    size: 40
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 14
    }
  }, "Dragon Chan"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--color-text-muted)'
    }
  }, "Everyday Dragon"))), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      lineHeight: 1.7,
      color: 'var(--color-ink-soft)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 0
    }
  }, post.excerpt), /*#__PURE__*/React.createElement("p", null, "The everyday is not the enemy of the extraordinary \u2014 it is the material. Every ordinary morning is a chance to choose the harder, truer thing, and to do it again tomorrow."), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 26,
      marginTop: 40,
      marginBottom: 12
    }
  }, "Consistency over intensity"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 0
    }
  }, "Intensity is loud and brief. Consistency is quiet and compounding. The dragon is not the one who breathes the biggest fire once, but the one who shows up along the frontier, day after ordinary day."), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: '32px 0',
      paddingLeft: 22,
      borderLeft: '3px solid var(--color-primary)',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 24,
      lineHeight: 1.3,
      color: 'var(--color-ink)'
    }
  }, "Grow through what you go through."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 0
    }
  }, "So seek the storm. Then, when it comes, do the hardest thing of all: sit in it, stay true, and keep going.")));
}
window.WritingScreen = WritingScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/personal-site/WritingScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.TailMark = __ds_scope.TailMark;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Navbar = __ds_scope.Navbar;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.Tabs = __ds_scope.Tabs;

})();