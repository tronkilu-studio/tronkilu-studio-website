/* @ds-bundle: {"format":4,"namespace":"GrainDesignSystem_cc1312","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Rule","sourcePath":"components/core/Rule.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Tag","sourcePath":"components/feedback/Tag.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"GrainImage","sourcePath":"components/media/GrainImage.jsx"},{"name":"Breadcrumbs","sourcePath":"components/navigation/Breadcrumbs.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Button.jsx":"e99b6a23d07a","components/core/Card.jsx":"63b976994f3c","components/core/Icon.jsx":"0bec579b9ad4","components/core/IconButton.jsx":"474618a9f5c5","components/core/Rule.jsx":"807363d335b9","components/feedback/Badge.jsx":"699cea920c92","components/feedback/Dialog.jsx":"cfaa57532cac","components/feedback/Tag.jsx":"abf36f459a70","components/feedback/Toast.jsx":"79c2bbd5f51f","components/feedback/Tooltip.jsx":"b24ffda04d7a","components/forms/Checkbox.jsx":"6721b623b1a4","components/forms/Field.jsx":"139ebcb2746c","components/forms/Input.jsx":"68501c036501","components/forms/Radio.jsx":"8cb878f9192b","components/forms/Select.jsx":"2f48f4e0e268","components/forms/Switch.jsx":"a2981a41ec79","components/forms/Textarea.jsx":"13b967a69717","components/media/GrainImage.jsx":"9598cacebb00","components/navigation/Breadcrumbs.jsx":"46a273fc733b","components/navigation/Pagination.jsx":"444d39d788bb","components/navigation/Tabs.jsx":"ac13965df567","ui_kits/desk/Editor.jsx":"acdfa8b9f48a","ui_kits/desk/EntryList.jsx":"bc195a71479e","ui_kits/desk/Sidebar.jsx":"1afa21d4d4eb","ui_kits/site/Article.jsx":"8e8a6609d787","ui_kits/site/Chrome.jsx":"a18dd2d66c99","ui_kits/site/Index.jsx":"c9bd07b32472","ui_kits/site/Subscribe.jsx":"3b7ac0b29dce"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.GrainDesignSystem_cc1312 = window.GrainDesignSystem_cc1312 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: {
    padding: '6px 12px',
    fontSize: '12px',
    height: 30
  },
  md: {
    padding: '9px 18px',
    fontSize: '14px',
    height: 38
  },
  lg: {
    padding: '13px 26px',
    fontSize: '15px',
    height: 48
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  type = 'button',
  iconLeft,
  iconRight,
  onClick,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const s = sizes[size] || sizes.md;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'var(--font-core)',
    fontWeight: 'var(--weight-medium)',
    letterSpacing: '-0.01em',
    lineHeight: 1,
    border: '1px solid var(--ink-900)',
    borderRadius: 'var(--radius-0)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'background var(--dur-fast) var(--ease-standard),color var(--dur-fast) var(--ease-standard),opacity var(--dur-fast) var(--ease-standard)',
    width: fullWidth ? '100%' : 'auto',
    height: s.height,
    padding: s.padding,
    fontSize: s.fontSize,
    opacity: disabled ? 0.32 : 1
  };
  const skins = {
    primary: {
      background: hover && !disabled ? 'var(--ink-700)' : 'var(--ink-900)',
      color: 'var(--paper)'
    },
    secondary: {
      background: hover && !disabled ? 'var(--ink-900)' : 'transparent',
      color: hover && !disabled ? 'var(--paper)' : 'var(--ink-900)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--ink-900)',
      borderColor: 'transparent',
      textDecoration: hover && !disabled ? 'underline' : 'none',
      textUnderlineOffset: '3px'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setDown(false);
    },
    onMouseDown: () => setDown(true),
    onMouseUp: () => setDown(false),
    style: {
      ...base,
      ...skins[variant],
      transform: down && !disabled ? 'translateY(1px)' : 'none',
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  variant = 'hairline',
  padding = 'var(--space-5)',
  as = 'div',
  children,
  style,
  ...rest
}) {
  const El = as;
  const skins = {
    hairline: {
      border: '1px solid var(--border-hairline)',
      background: 'var(--surface-card)'
    },
    strong: {
      border: '1px solid var(--ink-900)',
      background: 'var(--surface-card)'
    },
    offset: {
      border: '1px solid var(--ink-900)',
      background: 'var(--surface-card)',
      boxShadow: 'var(--shadow-offset)'
    },
    sunken: {
      border: '1px solid transparent',
      background: 'var(--surface-sunken)'
    },
    inverse: {
      border: '1px solid var(--ink-900)',
      background: 'var(--ink-900)',
      color: 'var(--paper)'
    }
  };
  return /*#__PURE__*/React.createElement(El, _extends({
    style: {
      borderRadius: 'var(--radius-0)',
      padding,
      ...skins[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Grain has no bespoke icon set. It uses Lucide (1.5px stroke, square caps), loaded as
   static SVG from the jsDelivr CDN and tinted with a CSS mask so it inherits ink colour. */
function Icon({
  name = 'arrow-right',
  size = 16,
  color = 'currentColor',
  strokeWidth,
  style,
  ...rest
}) {
  const url = `https://cdn.jsdelivr.net/npm/lucide-static@0.454.0/icons/${name}.svg`;
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true",
    role: "img",
    "data-icon": name,
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      flex: '0 0 auto',
      background: color,
      WebkitMaskImage: `url(${url})`,
      maskImage: `url(${url})`,
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const boxes = {
  sm: 28,
  md: 34,
  lg: 42
};
function IconButton({
  name = 'x',
  variant = 'secondary',
  size = 'md',
  disabled = false,
  label,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const box = boxes[size] || boxes.md;
  const solid = variant === 'primary' || variant === 'secondary' && hover && !disabled;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label || name,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: box,
      height: box,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: solid ? 'var(--ink-900)' : 'transparent',
      color: solid ? 'var(--paper)' : 'var(--ink-900)',
      border: variant === 'ghost' ? '1px solid transparent' : '1px solid var(--ink-900)',
      borderRadius: 'var(--radius-0)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.32 : 1,
      transition: 'background var(--dur-fast) var(--ease-standard)',
      padding: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: name,
    size: size === 'lg' ? 20 : 16
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Rule.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Rule({
  weight = 'hairline',
  orientation = 'horizontal',
  label,
  style,
  ...rest
}) {
  const px = weight === 'heavy' ? 'var(--rule-heavy)' : 'var(--hairline)';
  const color = weight === 'hairline' ? 'var(--border-hairline)' : 'var(--ink-900)';
  if (label) return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "label",
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-label)',
      letterSpacing: 'var(--text-label-ls)',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)',
      whiteSpace: 'nowrap'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: px,
      background: color
    }
  }));
  if (orientation === 'vertical') return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'block',
      width: px,
      alignSelf: 'stretch',
      background: color,
      ...style
    }
  }, rest));
  return /*#__PURE__*/React.createElement("hr", _extends({
    style: {
      border: 0,
      height: px,
      background: color,
      margin: 0,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Rule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Rule.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  variant = 'outline',
  children,
  style,
  ...rest
}) {
  const skins = {
    outline: {
      border: '1px solid var(--ink-900)',
      background: 'transparent',
      color: 'var(--ink-900)'
    },
    solid: {
      border: '1px solid var(--ink-900)',
      background: 'var(--ink-900)',
      color: 'var(--paper)'
    },
    quiet: {
      border: '1px solid var(--border-hairline)',
      background: 'transparent',
      color: 'var(--text-secondary)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 20,
      padding: '0 7px',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-label)',
      letterSpacing: 'var(--text-label-ls)',
      textTransform: 'uppercase',
      lineHeight: 1,
      ...skins[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open = false,
  title,
  description,
  onClose,
  footer,
  width = 480,
  children,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 50,
      background: 'var(--scrim)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    onClick: e => e.stopPropagation(),
    style: {
      width,
      maxWidth: '100%',
      background: 'var(--paper)',
      border: '1px solid var(--ink-900)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 'var(--space-4)',
      padding: 'var(--space-5)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 'var(--text-h3)',
      letterSpacing: 'var(--text-h3-ls)',
      lineHeight: 'var(--text-h3-lh)'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontSize: 'var(--text-small)',
      color: 'var(--text-secondary)'
    }
  }, description)), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    name: "x",
    variant: "ghost",
    size: "sm",
    label: "Close",
    onClick: onClose
  })), children && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--space-2)',
      padding: 'var(--space-4) var(--space-5)',
      borderTop: '1px solid var(--border-hairline)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  onRemove,
  selected = false,
  onClick,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      height: 26,
      padding: '0 10px',
      fontSize: 'var(--text-caption)',
      fontFamily: 'var(--font-core)',
      border: '1px solid var(--ink-900)',
      background: selected ? 'var(--ink-900)' : 'transparent',
      color: selected ? 'var(--paper)' : 'var(--ink-900)',
      cursor: onClick ? 'pointer' : 'default',
      ...style
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    style: {
      display: 'inline-flex',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 12
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Toast({
  title,
  description,
  onClose,
  tone = 'default',
  style,
  ...rest
}) {
  const inverse = tone === 'inverse';
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-3)',
      minWidth: 280,
      maxWidth: 420,
      padding: 'var(--space-3) var(--space-4)',
      border: '1px solid var(--ink-900)',
      background: inverse ? 'var(--ink-900)' : 'var(--paper)',
      color: inverse ? 'var(--paper)' : 'var(--ink-900)',
      boxShadow: inverse ? 'none' : 'var(--shadow-offset)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-small)',
      fontWeight: 'var(--weight-medium)'
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-caption)',
      marginTop: 4,
      opacity: .7
    }
  }, description)), onClose && /*#__PURE__*/React.createElement("span", {
    onClick: onClose,
    style: {
      cursor: 'pointer',
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 14
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  label,
  placement = 'top',
  children,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const pos = placement === 'bottom' ? {
    top: 'calc(100% + 6px)'
  } : placement === 'left' ? {
    right: 'calc(100% + 6px)',
    top: '50%',
    transform: 'translateY(-50%)'
  } : placement === 'right' ? {
    left: 'calc(100% + 6px)',
    top: '50%',
    transform: 'translateY(-50%)'
  } : {
    bottom: 'calc(100% + 6px)'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false)
  }, rest), children, open && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      zIndex: 20,
      whiteSpace: 'nowrap',
      background: 'var(--ink-900)',
      color: 'var(--paper)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-caption)',
      padding: '4px 8px',
      ...pos
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  checked,
  defaultChecked = false,
  onChange,
  label,
  disabled = false,
  style,
  ...rest
}) {
  const [inner, setInner] = React.useState(defaultChecked);
  const on = checked === undefined ? inner : checked;
  const toggle = () => {
    if (disabled) return;
    const v = !on;
    if (checked === undefined) setInner(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      fontSize: 'var(--text-small)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    onClick: toggle,
    style: {
      width: 18,
      height: 18,
      flex: '0 0 auto',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid var(--ink-900)',
      background: on ? 'var(--ink-900)' : 'var(--paper)',
      transition: 'background var(--dur-fast) var(--ease-standard)'
    }
  }, on && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 12,
    color: "var(--paper)"
  })), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Field({
  label,
  hint,
  error,
  htmlFor,
  required = false,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-label)',
      letterSpacing: 'var(--text-label-ls)',
      textTransform: 'uppercase',
      color: 'var(--text-primary)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, " *")), children, (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-caption)',
      fontFamily: 'var(--font-mono)',
      color: error ? 'var(--ink-900)' : 'var(--text-secondary)',
      borderLeft: error ? '2px solid var(--ink-900)' : 'none',
      paddingLeft: error ? '8px' : 0
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  size = 'md',
  invalid = false,
  disabled = false,
  prefix,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const pad = size === 'sm' ? '6px 10px' : size === 'lg' ? '13px 14px' : '10px 12px';
  const fs = size === 'sm' ? 'var(--text-small)' : 'var(--text-body)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      background: disabled ? 'var(--surface-sunken)' : 'var(--paper)',
      border: '1px solid var(--ink-900)',
      borderBottomWidth: invalid ? '2px' : '1px',
      boxShadow: focus ? 'inset 0 0 0 1px var(--ink-900)' : 'none',
      opacity: disabled ? 0.5 : 1,
      padding: pad,
      ...style
    }
  }, prefix, /*#__PURE__*/React.createElement("input", _extends({
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 0,
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-core)',
      fontSize: fs,
      color: 'var(--text-primary)',
      letterSpacing: '-0.006em',
      padding: 0
    }
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  options = [],
  value,
  defaultValue,
  onChange,
  name = 'radio',
  disabled = false,
  direction = 'column',
  style,
  ...rest
}) {
  const [inner, setInner] = React.useState(defaultValue);
  const val = value === undefined ? inner : value;
  const pick = v => {
    if (disabled) return;
    if (value === undefined) setInner(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "radiogroup",
    style: {
      display: 'flex',
      flexDirection: direction,
      gap: direction === 'row' ? 'var(--space-5)' : '10px',
      opacity: disabled ? 0.4 : 1,
      ...style
    }
  }, rest), options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    const on = val === v;
    return /*#__PURE__*/React.createElement("label", {
      key: v,
      onClick: () => pick(v),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        fontSize: 'var(--text-small)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 18,
        height: 18,
        flex: '0 0 auto',
        borderRadius: 'var(--radius-pill)',
        border: '1px solid var(--ink-900)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, on && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 10,
        height: 10,
        borderRadius: 'var(--radius-pill)',
        background: 'var(--ink-900)'
      }
    })), l);
  }));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  options = [],
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      border: '1px solid var(--ink-900)',
      background: disabled ? 'var(--surface-sunken)' : 'var(--paper)',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    disabled: disabled,
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      border: 0,
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-core)',
      fontSize: 'var(--text-body)',
      color: 'var(--text-primary)',
      padding: '10px 36px 10px 12px',
      cursor: disabled ? 'not-allowed' : 'pointer'
    }
  }, rest), options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16,
    style: {
      position: 'absolute',
      right: 12,
      pointerEvents: 'none'
    }
  }));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  checked,
  defaultChecked = false,
  onChange,
  label,
  disabled = false,
  style,
  ...rest
}) {
  const [inner, setInner] = React.useState(defaultChecked);
  const on = checked === undefined ? inner : checked;
  const toggle = () => {
    if (disabled) return;
    const v = !on;
    if (checked === undefined) setInner(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("label", _extends({
    onClick: toggle,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      fontSize: 'var(--text-small)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 22,
      flex: '0 0 auto',
      border: '1px solid var(--ink-900)',
      background: on ? 'var(--ink-900)' : 'var(--paper)',
      display: 'inline-flex',
      alignItems: 'center',
      padding: 2,
      transition: 'background var(--dur-fast) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      background: on ? 'var(--paper)' : 'var(--ink-900)',
      transform: on ? 'translateX(18px)' : 'translateX(0)',
      transition: 'transform var(--dur-base) var(--ease-standard)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  rows = 4,
  invalid = false,
  disabled = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      resize: 'vertical',
      fontFamily: 'var(--font-core)',
      fontSize: 'var(--text-body)',
      lineHeight: 1.5,
      color: 'var(--text-primary)',
      background: disabled ? 'var(--surface-sunken)' : 'var(--paper)',
      border: '1px solid var(--ink-900)',
      borderBottomWidth: invalid ? '2px' : '1px',
      borderRadius: 'var(--radius-0)',
      padding: '10px 12px',
      outline: 'none',
      boxShadow: focus ? 'inset 0 0 0 1px var(--ink-900)' : 'none',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/media/GrainImage.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function GrainImage({
  src,
  alt = '',
  ratio = '4 / 3',
  grain = 'normal',
  treatment = 'mono',
  caption,
  frame = true,
  style,
  ...rest
}) {
  const op = grain === 'none' ? 0 : grain === 'strong' ? 'var(--grain-opacity-strong)' : 'var(--grain-opacity)';
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: ratio,
      overflow: 'hidden',
      background: 'var(--surface-sunken)',
      border: frame ? '1px solid var(--ink-900)' : 'none'
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: treatment === 'hard' ? 'var(--image-filter-hard)' : 'var(--image-filter)'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'grid',
      placeItems: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-label)',
      letterSpacing: 'var(--text-label-ls)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Image"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'var(--grain-url)',
      backgroundSize: 'var(--grain-size)',
      opacity: op,
      mixBlendMode: 'multiply',
      pointerEvents: 'none'
    }
  })), caption && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 'var(--space-2)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-caption)',
      color: 'var(--text-secondary)'
    }
  }, caption));
}
Object.assign(__ds_scope, { GrainImage });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/GrainImage.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumbs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Breadcrumbs({
  items = [],
  separator = '/',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-caption)',
      color: 'var(--text-secondary)',
      ...style
    }
  }, rest), items.map((it, i) => {
    const l = typeof it === 'string' ? it : it.label;
    const href = typeof it === 'string' ? undefined : it.href;
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: l
    }, href && !last ? /*#__PURE__*/React.createElement("a", {
      href: href,
      style: {
        color: 'inherit'
      }
    }, l) : /*#__PURE__*/React.createElement("span", {
      style: {
        color: last ? 'var(--text-primary)' : 'inherit'
      }
    }, l), !last && /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        color: 'var(--text-muted)'
      }
    }, separator));
  }));
}
Object.assign(__ds_scope, { Breadcrumbs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumbs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Pagination({
  page = 1,
  total = 1,
  onChange,
  style,
  ...rest
}) {
  const go = p => {
    if (p >= 1 && p <= total && onChange) onChange(p);
  };
  const nums = Array.from({
    length: total
  }, (_, i) => i + 1).filter(n => n === 1 || n === total || Math.abs(n - page) <= 1);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    name: "arrow-left",
    size: "sm",
    variant: "ghost",
    label: "Previous",
    disabled: page <= 1,
    onClick: () => go(page - 1)
  }), nums.map((n, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: n
  }, i > 0 && n - nums[i - 1] > 1 && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-caption)',
      color: 'var(--text-muted)',
      padding: '0 2px'
    }
  }, "\u2026"), /*#__PURE__*/React.createElement("button", {
    onClick: () => go(n),
    style: {
      minWidth: 28,
      height: 28,
      border: '1px solid ' + (n === page ? 'var(--ink-900)' : 'transparent'),
      background: n === page ? 'var(--ink-900)' : 'transparent',
      color: n === page ? 'var(--paper)' : 'var(--ink-900)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-caption)',
      cursor: 'pointer'
    }
  }, n))), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    name: "arrow-right",
    size: "sm",
    variant: "ghost",
    label: "Next",
    disabled: page >= total,
    onClick: () => go(page + 1)
  }));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  style,
  ...rest
}) {
  const first = items[0] && (typeof items[0] === 'string' ? items[0] : items[0].value);
  const [inner, setInner] = React.useState(defaultValue ?? first);
  const val = value === undefined ? inner : value;
  const pick = v => {
    if (value === undefined) setInner(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      borderBottom: '1px solid var(--border-hairline)',
      ...style
    }
  }, rest), items.map(it => {
    const v = typeof it === 'string' ? it : it.value;
    const l = typeof it === 'string' ? it : it.label;
    const on = val === v;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": on,
      onClick: () => pick(v),
      style: {
        appearance: 'none',
        background: 'none',
        border: 0,
        borderBottom: on ? '2px solid var(--ink-900)' : '2px solid transparent',
        padding: '0 0 10px',
        marginBottom: -1,
        cursor: 'pointer',
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-label)',
        letterSpacing: 'var(--text-label-ls)',
        textTransform: 'uppercase',
        color: on ? 'var(--text-primary)' : 'var(--text-secondary)'
      }
    }, l);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/desk/Editor.jsx
try { (() => {
const {
  Button,
  IconButton,
  Icon,
  Rule,
  Field,
  Input,
  Select,
  Switch,
  Checkbox,
  Tag,
  GrainImage,
  Breadcrumbs,
  Tooltip,
  Badge
} = window.GrainDesignSystem_cc1312;
function Editor({
  entry,
  onArchive,
  onPublish
}) {
  const [grain, setGrain] = React.useState(true);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 var(--space-5)',
      borderBottom: '1px solid var(--border-hairline)',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Breadcrumbs, {
    items: [{
      label: 'Queue',
      href: '#'
    }, {
      label: 'Issue 04',
      href: '#'
    }, {
      label: entry.title
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    label: "Archive"
  }, /*#__PURE__*/React.createElement(IconButton, {
    name: "archive",
    size: "sm",
    variant: "ghost",
    label: "Archive",
    onClick: onArchive
  })), /*#__PURE__*/React.createElement(Tooltip, {
    label: "History"
  }, /*#__PURE__*/React.createElement(IconButton, {
    name: "history",
    size: "sm",
    variant: "ghost",
    label: "History"
  })), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary"
  }, "Preview"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: onPublish
  }, "Send to press"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      display: 'grid',
      gridTemplateColumns: '1fr 300px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-6) var(--space-7)',
      borderRight: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "label",
    style: {
      color: 'var(--text-muted)'
    }
  }, "Working title"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-h1)',
      lineHeight: 'var(--text-h1-lh)',
      letterSpacing: 'var(--text-h1-ls)',
      fontWeight: 600,
      marginTop: 8
    }
  }, entry.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    selected: true
  }, "Essays"), /*#__PURE__*/React.createElement(Tag, null, "Issue 04"), /*#__PURE__*/React.createElement(Tag, {
    onRemove: () => {}
  }, "Needs plate")), /*#__PURE__*/React.createElement(Rule, {
    style: {
      margin: 'var(--space-5) 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--measure-prose)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      fontSize: 'var(--text-body)',
      lineHeight: 'var(--text-body-lh)'
    }
  }, /*#__PURE__*/React.createElement("p", null, "The plate is exposed for an eighth of a second, which is long enough for a hand to move and short enough that nobody notices it did."), /*#__PURE__*/React.createElement(GrainImage, {
    ratio: "3 / 2",
    grain: grain ? 'normal' : 'none',
    caption: "Plate 02 \u2014 awaiting approval"
  }), /*#__PURE__*/React.createElement("p", null, "We print on uncoated stock because it holds the noise. A coated sheet flattens it into something that looks digital."))), /*#__PURE__*/React.createElement("aside", {
    style: {
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "label",
    style: {
      color: 'var(--text-muted)',
      marginBottom: 'var(--space-3)'
    }
  }, "Status"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-small)'
    }
  }, entry.state), /*#__PURE__*/React.createElement(Badge, {
    variant: "solid"
  }, entry.words, " words"))), /*#__PURE__*/React.createElement(Rule, null), /*#__PURE__*/React.createElement(Field, {
    label: "Section"
  }, /*#__PURE__*/React.createElement(Select, {
    options: ['Essays', 'Photo', 'Interviews', 'Colophon']
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Byline"
  }, /*#__PURE__*/React.createElement(Input, {
    size: "sm",
    defaultValue: entry.author
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Slug",
    hint: "Used in the printed index."
  }, /*#__PURE__*/React.createElement(Input, {
    size: "sm",
    defaultValue: "long-exposure"
  })), /*#__PURE__*/React.createElement(Rule, null), /*#__PURE__*/React.createElement("div", {
    className: "label",
    style: {
      color: 'var(--text-muted)'
    }
  }, "Plate treatment"), /*#__PURE__*/React.createElement(Switch, {
    label: "Grain overlay",
    checked: grain,
    onChange: setGrain
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Hard contrast"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Bleed to trim"
  }))));
}
Object.assign(window, {
  Editor
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/desk/Editor.jsx", error: String((e && e.message) || e) }); }

// ui_kits/desk/EntryList.jsx
try { (() => {
const {
  Input,
  Icon,
  Tabs,
  Badge,
  IconButton,
  Tooltip
} = window.GrainDesignSystem_cc1312;
const ENTRIES = [{
  id: 1,
  title: 'The long exposure',
  author: 'M. Vogel',
  state: 'Review',
  words: 2840,
  when: '12:04',
  sel: true
}, {
  id: 2,
  title: 'Rooms with north light',
  author: 'I. Brandt',
  state: 'Draft',
  words: 610,
  when: '11:20'
}, {
  id: 3,
  title: 'A conversation about noise',
  author: 'K. Adeyemi',
  state: 'Review',
  words: 4190,
  when: '09:58'
}, {
  id: 4,
  title: 'Plain paper',
  author: 'M. Vogel',
  state: 'Set',
  words: 1220,
  when: 'Yest.'
}, {
  id: 5,
  title: 'Colophon 04',
  author: 'Desk',
  state: 'Draft',
  words: 180,
  when: 'Yest.'
}];
function EntryList({
  activeId,
  onPick
}) {
  const [tab, setTab] = React.useState('All');
  const rows = ENTRIES.filter(e => tab === 'All' || e.state === tab);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      width: 340,
      flex: '0 0 auto',
      borderRight: '1px solid var(--border-hairline)',
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '0 var(--space-4)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    size: "sm",
    placeholder: "Search queue",
    prefix: /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 14
    }),
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Tooltip, {
    label: "Filter"
  }, /*#__PURE__*/React.createElement(IconButton, {
    name: "sliders-horizontal",
    size: "sm",
    variant: "ghost",
    label: "Filter"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-3) var(--space-4) 0'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: ['All', 'Draft', 'Review', 'Set'],
    value: tab,
    onChange: setTab
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'auto',
      flex: 1
    }
  }, rows.map(e => {
    const on = e.id === activeId;
    return /*#__PURE__*/React.createElement("div", {
      key: e.id,
      onClick: () => onPick(e.id),
      style: {
        padding: 'var(--space-4)',
        borderBottom: '1px solid var(--border-subtle)',
        cursor: 'pointer',
        background: on ? 'var(--surface-sunken)' : 'transparent',
        borderLeft: on ? '2px solid var(--ink-900)' : '2px solid transparent'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-small)',
        fontWeight: 500
      }
    }, e.title), /*#__PURE__*/React.createElement("span", {
      className: "mono",
      style: {
        fontSize: 'var(--text-caption)',
        color: 'var(--text-muted)'
      }
    }, e.when)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      variant: e.state === 'Set' ? 'solid' : 'quiet'
    }, e.state), /*#__PURE__*/React.createElement("span", {
      className: "mono",
      style: {
        fontSize: 'var(--text-caption)',
        color: 'var(--text-secondary)'
      }
    }, e.author, " \xB7 ", e.words, " w")));
  })));
}
Object.assign(window, {
  ENTRIES,
  EntryList
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/desk/EntryList.jsx", error: String((e && e.message) || e) }); }

// ui_kits/desk/Sidebar.jsx
try { (() => {
const {
  Icon,
  IconButton,
  Badge,
  Tooltip,
  Button
} = window.GrainDesignSystem_cc1312;
function Sidebar({
  section,
  onSection,
  onCompose
}) {
  const nav = [['inbox', 'Queue', 6], ['file-text', 'Drafts', 3], ['image', 'Plates', 18], ['send', 'Published', 41], ['archive', 'Archive', 0]];
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 'var(--rail)',
      flex: '0 0 auto',
      borderRight: '1px solid var(--ink-900)',
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 var(--space-4)',
      borderBottom: '1px solid var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: '-0.04em'
    }
  }, "Grain", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontWeight: 400
    }
  }, " Desk")), /*#__PURE__*/React.createElement(Tooltip, {
    label: "New entry"
  }, /*#__PURE__*/React.createElement(IconButton, {
    name: "plus",
    size: "sm",
    label: "New entry",
    onClick: onCompose
  }))), /*#__PURE__*/React.createElement("nav", {
    style: {
      padding: 'var(--space-4) var(--space-3)',
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, nav.map(([icon, label, count]) => {
    const on = section === label;
    return /*#__PURE__*/React.createElement("button", {
      key: label,
      onClick: () => onSection(label),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '8px 10px',
        border: 0,
        cursor: 'pointer',
        background: on ? 'var(--ink-900)' : 'transparent',
        color: on ? 'var(--paper)' : 'var(--text-primary)',
        fontFamily: 'var(--font-core)',
        fontSize: 'var(--text-small)',
        textAlign: 'left'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 15
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, label), count > 0 && /*#__PURE__*/React.createElement("span", {
      className: "mono",
      style: {
        fontSize: 'var(--text-caption)',
        opacity: .7
      }
    }, count));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      padding: 'var(--space-4)',
      borderTop: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "label",
    style: {
      color: 'var(--text-muted)'
    }
  }, "Issue 04"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-small)'
    }
  }, "Ships 14 Apr"), /*#__PURE__*/React.createElement(Badge, null, "Locked")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 2,
      background: 'var(--ink-100)',
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '68%',
      height: '100%',
      background: 'var(--ink-900)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 'var(--text-caption)',
      color: 'var(--text-muted)',
      marginTop: 6
    }
  }, "68% laid out")));
}
Object.assign(window, {
  Sidebar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/desk/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Article.jsx
try { (() => {
const {
  Button,
  Breadcrumbs,
  Rule,
  Tabs,
  GrainImage,
  Badge,
  Icon
} = window.GrainDesignSystem_cc1312;
function Article({
  item,
  onBack
}) {
  return /*#__PURE__*/React.createElement("article", {
    style: {
      maxWidth: 'var(--max-width)',
      margin: '0 auto',
      padding: 'var(--space-6) var(--page-margin) 0'
    }
  }, /*#__PURE__*/React.createElement(Breadcrumbs, {
    items: [{
      label: 'Index',
      href: '#'
    }, {
      label: 'Issue ' + item.n,
      href: '#'
    }, {
      label: item.kind
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr var(--rail)',
      gap: 'var(--space-7)',
      marginTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-h1)',
      lineHeight: 'var(--text-h1-lh)',
      letterSpacing: 'var(--text-h1-ls)',
      fontWeight: 600,
      maxWidth: '18ch'
    }
  }, item.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lead)',
      lineHeight: 'var(--text-lead-lh)',
      letterSpacing: 'var(--text-lead-ls)',
      marginTop: 'var(--space-4)',
      maxWidth: 'var(--measure-prose)'
    }
  }, item.lede), /*#__PURE__*/React.createElement(Rule, {
    style: {
      margin: 'var(--space-5) 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--measure-prose)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("p", null, "The plate is exposed for an eighth of a second, which is long enough for a hand to move and short enough that nobody notices it did. What survives is a record of the room rather than the moment \u2014 the light that was there the whole time, rather than the one that arrived."), /*#__PURE__*/React.createElement(GrainImage, {
    ratio: "3 / 2",
    caption: "Fig. 02 \u2014 Contact sheet, frames 14\u201319"
  }), /*#__PURE__*/React.createElement("p", null, "We print on uncoated stock because it holds the noise. A coated sheet flattens it into something that looks digital, and the whole point of the issue is that the noise is physical: paper, silver, dust on the enlarger lens."), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      borderLeft: '2px solid var(--ink-900)',
      paddingLeft: 'var(--space-4)',
      fontSize: 'var(--text-h3)',
      letterSpacing: 'var(--text-h3-ls)',
      lineHeight: 1.3
    }
  }, "\u201CYou can tell how long someone waited by how much grain is in the shadows.\u201D"), /*#__PURE__*/React.createElement("p", null, "That is not strictly true, but it is close enough to be useful, and it is the reason this issue has no colour in it anywhere.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      margin: 'var(--space-6) 0'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: onBack,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 16
    })
  }, "Back to index"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost"
  }, "Share"))), /*#__PURE__*/React.createElement("aside", {
    style: {
      borderLeft: '1px solid var(--border-hairline)',
      paddingLeft: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      height: 'fit-content',
      position: 'sticky',
      top: 96
    }
  }, [['Issue', 'Issue ' + item.n + ' · ' + item.date], ['Section', item.kind], ['Reading time', item.read], ['Words', 'Marta Vogel'], ['Plates', 'Ilse Brandt']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k
  }, /*#__PURE__*/React.createElement("div", {
    className: "label",
    style: {
      color: 'var(--text-muted)'
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-small)',
      marginTop: 4
    }
  }, v))), /*#__PURE__*/React.createElement(Badge, null, "In print"))));
}
Object.assign(window, {
  Article
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Article.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Chrome.jsx
try { (() => {
const {
  Button,
  IconButton,
  Icon,
  Rule
} = window.GrainDesignSystem_cc1312;
function SiteHeader({
  onNav,
  view
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 30,
      background: 'var(--paper)',
      borderBottom: '1px solid var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--max-width)',
      margin: '0 auto',
      padding: '0 var(--page-margin)',
      height: 64,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('index');
    },
    style: {
      fontSize: 22,
      fontWeight: 600,
      letterSpacing: '-0.04em',
      textDecoration: 'none'
    }
  }, "Grain"), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--space-5)'
    }
  }, ['index', 'about', 'archive'].map(v => /*#__PURE__*/React.createElement("a", {
    key: v,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav(v);
    },
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-label)',
      letterSpacing: 'var(--text-label-ls)',
      textTransform: 'uppercase',
      textDecoration: 'none',
      color: view === v ? 'var(--text-primary)' : 'var(--text-secondary)',
      borderBottom: view === v ? '2px solid var(--ink-900)' : '2px solid transparent',
      paddingBottom: 2
    }
  }, v))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    name: "search",
    variant: "ghost",
    label: "Search"
  }), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: () => onNav('subscribe')
  }, "Subscribe"))));
}
function SiteFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--ink-900)',
      marginTop: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--max-width)',
      margin: '0 auto',
      padding: 'var(--space-7) var(--page-margin)',
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 40,
      fontWeight: 600,
      letterSpacing: '-0.04em',
      lineHeight: 1
    }
  }, "Grain"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-3)',
      fontSize: 'var(--text-small)',
      color: 'var(--text-secondary)',
      maxWidth: '34ch'
    }
  }, "A quarterly of photographs and plain writing. Printed in black, read in white.")), [['Sections', ['Index', 'Essays', 'Photo', 'Interviews']], ['Elsewhere', ['Newsletter', 'Instagram', 'Contact', 'Colophon']]].map(([t, items]) => /*#__PURE__*/React.createElement("div", {
    key: t
  }, /*#__PURE__*/React.createElement("div", {
    className: "label",
    style: {
      color: 'var(--text-muted)'
    }
  }, t), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 'var(--space-3) 0 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontSize: 'var(--text-small)',
      textDecoration: 'none'
    }
  }, i))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--max-width)',
      margin: '0 auto',
      padding: 'var(--space-4) var(--page-margin)',
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-caption)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Grain"), /*#__PURE__*/React.createElement("span", null, "Set in Archivo & IBM Plex Mono"))));
}
Object.assign(window, {
  SiteHeader,
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Index.jsx
try { (() => {
const {
  Button,
  Icon,
  Card,
  Rule,
  Tag,
  Badge,
  GrainImage,
  Pagination
} = window.GrainDesignSystem_cc1312;
const ISSUES = [{
  n: '04',
  title: 'The long exposure',
  kind: 'Essays',
  read: '12 min',
  date: '2026 · Spring',
  lede: 'On waiting for a picture to arrive, and what the waiting does to the person holding the camera.'
}, {
  n: '03',
  title: 'Rooms with north light',
  kind: 'Photo',
  read: '4 min',
  date: '2025 · Winter',
  lede: 'Twelve rooms, one orientation, a year of mornings.'
}, {
  n: '02',
  title: 'A conversation about noise',
  kind: 'Interviews',
  read: '18 min',
  date: '2025 · Autumn',
  lede: 'Two printers argue about how much grain a page can carry before it stops being a photograph.'
}, {
  n: '01',
  title: 'Plain paper',
  kind: 'Essays',
  read: '7 min',
  date: '2025 · Summer',
  lede: 'Why the first issue has no colour, and why the next one will not either.'
}];
function Hero({
  onOpen
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--max-width)',
      margin: '0 auto',
      padding: 'var(--space-8) var(--page-margin) var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "label",
    style: {
      color: 'var(--text-muted)'
    }
  }, "Issue 04 \u2014 out now"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-display)',
      lineHeight: 'var(--text-display-lh)',
      letterSpacing: 'var(--text-display-ls)',
      fontWeight: 600,
      marginTop: 'var(--space-4)',
      maxWidth: '14ch'
    }
  }, "The long exposure"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.15fr 1fr',
      gap: 'var(--space-7)',
      marginTop: 'var(--space-6)',
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement(GrainImage, {
    ratio: "16 / 9",
    grain: "strong",
    caption: "Fig. 01 \u2014 Cover plate, 1/8s"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lead)',
      lineHeight: 'var(--text-lead-lh)',
      letterSpacing: 'var(--text-lead-ls)',
      maxWidth: '42ch'
    }
  }, "On waiting for a picture to arrive, and what the waiting does to the person holding the camera."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => onOpen(ISSUES[0]),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16,
      color: "var(--paper)"
    })
  }, "Read the issue"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary"
  }, "Buy print")))));
}
function IndexList({
  onOpen
}) {
  const [filter, setFilter] = React.useState('All');
  const [page, setPage] = React.useState(1);
  const rows = ISSUES.filter(i => filter === 'All' || i.kind === filter);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--max-width)',
      margin: '0 auto',
      padding: '0 var(--page-margin)'
    }
  }, /*#__PURE__*/React.createElement(Rule, {
    weight: "heavy"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 'var(--space-4) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "label"
  }, "Index"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, ['All', 'Essays', 'Photo', 'Interviews'].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    selected: filter === t,
    onClick: () => setFilter(t)
  }, t)))), /*#__PURE__*/React.createElement(Rule, null), rows.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.n,
    onClick: () => onOpen(it),
    style: {
      display: 'grid',
      gridTemplateColumns: '64px 1.2fr 2fr auto',
      gap: 'var(--space-5)',
      alignItems: 'baseline',
      padding: 'var(--space-5) 0',
      borderBottom: '1px solid var(--border-hairline)',
      cursor: 'pointer'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--surface-sunken)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent'
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 'var(--text-caption)',
      color: 'var(--text-muted)'
    }
  }, it.n), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-h3)',
      letterSpacing: 'var(--text-h3-ls)',
      lineHeight: 'var(--text-h3-lh)'
    }
  }, it.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-small)',
      color: 'var(--text-secondary)',
      maxWidth: '60ch'
    }
  }, it.lede), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 'var(--text-caption)',
      color: 'var(--text-muted)',
      whiteSpace: 'nowrap'
    }
  }, it.kind, " \xB7 ", it.read))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      padding: 'var(--space-5) 0'
    }
  }, /*#__PURE__*/React.createElement(Pagination, {
    page: page,
    total: 6,
    onChange: setPage
  })));
}
function FeatureGrid({
  onOpen
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--max-width)',
      margin: '0 auto',
      padding: 'var(--space-7) var(--page-margin) 0'
    }
  }, /*#__PURE__*/React.createElement(Rule, {
    label: "From the archive"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-5)'
    }
  }, ISSUES.slice(1).map(it => /*#__PURE__*/React.createElement(Card, {
    key: it.n,
    padding: "0",
    variant: "hairline",
    style: {
      cursor: 'pointer'
    },
    onClick: () => onOpen(it)
  }, /*#__PURE__*/React.createElement(GrainImage, {
    ratio: "4 / 3",
    frame: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "quiet"
  }, it.kind), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 'var(--text-caption)',
      color: 'var(--text-muted)'
    }
  }, it.date)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-h3)',
      letterSpacing: 'var(--text-h3-ls)',
      marginTop: 'var(--space-3)'
    }
  }, it.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-small)',
      color: 'var(--text-secondary)',
      marginTop: 8
    }
  }, it.lede))))));
}
Object.assign(window, {
  ISSUES,
  Hero,
  IndexList,
  FeatureGrid
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Index.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Subscribe.jsx
try { (() => {
const {
  Button,
  Card,
  Field,
  Input,
  Radio,
  Checkbox,
  Toast,
  Rule
} = window.GrainDesignSystem_cc1312;
function Subscribe() {
  const [done, setDone] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [err, setErr] = React.useState('');
  const submit = () => {
    if (!email.includes('@')) {
      setErr('Enter an email address.');
      return;
    }
    setErr('');
    setDone(true);
  };
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--max-width)',
      margin: '0 auto',
      padding: 'var(--space-8) var(--page-margin)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-8)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-h1)',
      lineHeight: 'var(--text-h1-lh)',
      letterSpacing: 'var(--text-h1-ls)',
      fontWeight: 600,
      maxWidth: '12ch'
    }
  }, "Four issues a year"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lead)',
      lineHeight: 'var(--text-lead-lh)',
      marginTop: 'var(--space-4)',
      maxWidth: '40ch',
      color: 'var(--text-secondary)'
    }
  }, "Printed in black on uncoated white. Posted flat, never folded."), /*#__PURE__*/React.createElement(Rule, {
    style: {
      margin: 'var(--space-5) 0'
    }
  }), /*#__PURE__*/React.createElement("dl", {
    style: {
      margin: 0,
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      gap: '10px var(--space-5)',
      fontSize: 'var(--text-small)'
    }
  }, [['Print + digital', '£72 / year'], ['Digital only', '£28 / year'], ['Single issue', '£20']].map(([k, v]) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: k
  }, /*#__PURE__*/React.createElement("dt", {
    className: "mono",
    style: {
      color: 'var(--text-muted)',
      fontSize: 'var(--text-caption)'
    }
  }, k), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0
    }
  }, v))))), /*#__PURE__*/React.createElement(Card, {
    variant: "offset",
    padding: "var(--space-6)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Email",
    error: err || undefined,
    hint: err ? undefined : 'One mail per issue. Nothing else.'
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "you@studio.com",
    invalid: !!err,
    value: email,
    onChange: e => setEmail(e.target.value)
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Plan"
  }, /*#__PURE__*/React.createElement(Radio, {
    options: ['Print + digital', 'Digital only'],
    defaultValue: "Print + digital"
  })), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Also tell me about print sales"
  }), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    size: "lg",
    onClick: submit
  }, "Subscribe")))), done && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      left: 'var(--space-5)',
      bottom: 'var(--space-5)',
      zIndex: 60
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    title: "You're on the list",
    description: email + " — confirmation sent.",
    onClose: () => setDone(false)
  })));
}
Object.assign(window, {
  Subscribe
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Subscribe.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Rule = __ds_scope.Rule;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.GrainImage = __ds_scope.GrainImage;

__ds_ns.Breadcrumbs = __ds_scope.Breadcrumbs;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
