/* @ds-bundle: {"format":4,"namespace":"VestaDesignSystem_e6d2b4","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"Icon","sourcePath":"components/actions/Icon.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Badge","sourcePath":"components/surfaces/Badge.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"Dialog","sourcePath":"components/surfaces/Dialog.jsx"},{"name":"Tag","sourcePath":"components/surfaces/Tag.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"361d130a622a","components/actions/Icon.jsx":"8965fd835f86","components/actions/IconButton.jsx":"89bb76a1cabb","components/feedback/Toast.jsx":"6e95e7d09feb","components/feedback/Tooltip.jsx":"475b9dd2f9e7","components/forms/Checkbox.jsx":"8c4829e36d04","components/forms/Input.jsx":"69e3e892a209","components/forms/Radio.jsx":"7a5dc2c651aa","components/forms/Select.jsx":"dfc959b94e33","components/forms/Switch.jsx":"d1c936efc2c5","components/navigation/Tabs.jsx":"bf10450bb514","components/surfaces/Badge.jsx":"80944f7b78e4","components/surfaces/Card.jsx":"8a827dbe38ae","components/surfaces/Dialog.jsx":"e0d7a1a7751f","components/surfaces/Tag.jsx":"3d85bb6e0a08","ui_kits/web/Article.jsx":"1a34f92fcacf","ui_kits/web/Home.jsx":"660685ff4838","ui_kits/web/Product.jsx":"9fcaa5ab7fe6","ui_kits/web/Quiz.jsx":"ac41b99a2a75","ui_kits/web/Shell.jsx":"0a10cdef8c71"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.VestaDesignSystem_e6d2b4 = window.VestaDesignSystem_e6d2b4 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const pad = {
  sm: "8px 14px",
  md: "12px 22px",
  lg: "16px 30px"
};
const fs = {
  sm: "13px",
  md: "15px",
  lg: "17px"
};
const variants = {
  primary: {
    background: "var(--action-primary-bg)",
    color: "var(--action-primary-fg)",
    border: "1px solid var(--action-primary-bg)"
  },
  secondary: {
    background: "transparent",
    color: "var(--action-secondary-fg)",
    border: "1px solid var(--action-secondary-border)"
  },
  ghost: {
    background: "transparent",
    color: "var(--text-link)",
    border: "1px solid transparent",
    padding: "8px 4px"
  },
  inverse: {
    background: "var(--sand-50)",
    color: "var(--carbon-900)",
    border: "1px solid var(--sand-50)"
  }
};
const hovers = {
  primary: {
    background: "var(--action-primary-bg-hover)",
    borderColor: "var(--action-primary-bg-hover)"
  },
  secondary: {
    background: "var(--carbon-900)",
    color: "var(--sand-50)"
  },
  ghost: {
    color: "var(--text-link-hover)"
  },
  inverse: {
    background: "var(--sand-200)",
    borderColor: "var(--sand-200)"
  }
};
function Button({
  children,
  variant = "primary",
  size = "md",
  full = false,
  disabled = false,
  iconLeft,
  iconRight,
  as = "button",
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const Tag = as;
  const base = {
    display: full ? "flex" : "inline-flex",
    width: full ? "100%" : undefined,
    alignItems: "center",
    justifyContent: "center",
    gap: "var(--space-2)",
    fontFamily: "var(--font-body)",
    fontSize: fs[size],
    fontWeight: "var(--fw-medium)",
    letterSpacing: "0.02em",
    lineHeight: 1.1,
    padding: variant === "ghost" ? variants.ghost.padding : pad[size],
    borderRadius: "var(--radius-control)",
    cursor: disabled ? "not-allowed" : "pointer",
    textDecoration: "none",
    transition: "var(--transition-control), transform var(--dur-fast) var(--ease-standard)",
    transform: press && !disabled ? "translateY(1px)" : "none",
    ...variants[variant],
    ...(hover && !disabled ? hovers[variant] : null),
    ...(disabled ? {
      background: variant === "primary" ? "var(--action-disabled-bg)" : "transparent",
      color: "var(--action-disabled-fg)",
      borderColor: variant === "ghost" ? "transparent" : "var(--action-disabled-bg)"
    } : null),
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: base,
    disabled: as === "button" ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  }, rest), iconLeft, /*#__PURE__*/React.createElement("span", null, children), iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CDN = "https://unpkg.com/lucide-static/icons/";

/** Lucide (CDN) glyph, tinted with CSS masks so it inherits brand color. */
function Icon({
  name,
  size = 20,
  color = "currentColor",
  label,
  style,
  ...rest
}) {
  const url = CDN + name + ".svg";
  return /*#__PURE__*/React.createElement("span", _extends({
    role: label ? "img" : undefined,
    "aria-label": label,
    "aria-hidden": label ? undefined : true,
    style: {
      display: "inline-block",
      flex: "none",
      width: size,
      height: size,
      background: color,
      WebkitMaskImage: "url(" + url + ")",
      maskImage: "url(" + url + ")",
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Icon.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const dim = {
  sm: 32,
  md: 40,
  lg: 48
};
function IconButton({
  children,
  label,
  size = "md",
  variant = "quiet",
  disabled = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const filled = variant === "filled";
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: dim[size],
      height: dim[size],
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: variant === "quiet" ? "var(--radius-control)" : "var(--radius-circle)",
      border: filled ? "1px solid var(--action-primary-bg)" : "1px solid " + (variant === "outline" ? "var(--border-hairline)" : "transparent"),
      background: filled ? hover ? "var(--action-primary-bg-hover)" : "var(--action-primary-bg)" : hover ? "var(--surface-sunken)" : "transparent",
      color: filled ? "var(--action-primary-fg)" : "var(--text-body)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      transition: "var(--transition-control)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const tones = {
  neutral: {
    fg: "var(--sand-50)",
    bg: "var(--carbon-900)",
    accent: "var(--gold-400)"
  },
  success: {
    fg: "var(--sand-50)",
    bg: "var(--carbon-900)",
    accent: "var(--olive-500)"
  },
  error: {
    fg: "var(--sand-50)",
    bg: "var(--carbon-900)",
    accent: "var(--brick-500)"
  }
};
function Toast({
  children,
  title,
  tone = "neutral",
  onClose,
  style
}) {
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "var(--space-3)",
      minWidth: 280,
      maxWidth: 420,
      padding: "var(--space-4) var(--space-5)",
      background: t.bg,
      color: t.fg,
      borderRadius: "var(--radius-card)",
      borderLeft: "2px solid " + t.accent,
      boxShadow: "var(--shadow-lg)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-body-s)",
      lineHeight: "var(--lh-body-s)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("strong", {
    style: {
      display: "block",
      fontWeight: "var(--fw-medium)",
      marginBottom: 2
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--sand-200)"
    }
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Cerrar",
    style: {
      border: 0,
      background: "transparent",
      color: "var(--sand-300)",
      cursor: "pointer",
      fontSize: 18,
      lineHeight: 1,
      padding: 0
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  children,
  content,
  side = "top"
}) {
  const [open, setOpen] = React.useState(false);
  const pos = {
    top: {
      bottom: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    right: {
      left: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex"
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false)
  }, children, open && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      zIndex: 40,
      ...pos[side],
      whiteSpace: "nowrap",
      background: "var(--carbon-900)",
      color: "var(--sand-100)",
      padding: "6px 10px",
      borderRadius: "var(--radius-xs)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-caption)",
      boxShadow: "var(--shadow-md)"
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  description,
  checked,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "flex-start",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 1,
      height: 1
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flex: "none",
      marginTop: 1,
      borderRadius: "var(--radius-xs)",
      border: "1px solid " + (checked ? "var(--ember-500)" : "var(--carbon-300)"),
      background: checked ? "var(--ember-500)" : "var(--surface-raised)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "var(--transition-control)"
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 6,
      borderLeft: "2px solid var(--sand-50)",
      borderBottom: "2px solid var(--sand-50)",
      transform: "rotate(-45deg) translate(1px,-2px)"
    }
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-body-s)",
      color: "var(--text-body)"
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "var(--fs-caption)",
      color: "var(--text-subtle)",
      marginTop: 2
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const labelStyle = {
  display: "block",
  fontFamily: "var(--font-body)",
  fontSize: "var(--fs-label)",
  fontWeight: "var(--fw-medium)",
  letterSpacing: "var(--tracking-label)",
  textTransform: "uppercase",
  color: "var(--text-muted)",
  marginBottom: "var(--space-2)"
};
const hintStyle = {
  fontFamily: "var(--font-body)",
  fontSize: "var(--fs-caption)",
  lineHeight: "var(--lh-caption)",
  marginTop: "var(--space-2)"
};
function Input({
  label,
  hint,
  error,
  multiline = false,
  rows = 4,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = React.useMemo(() => id || "in-" + Math.random().toString(36).slice(2, 7), [id]);
  const Tag = multiline ? "textarea" : "input";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: labelStyle
  }, label), /*#__PURE__*/React.createElement(Tag, _extends({
    id: uid,
    rows: multiline ? rows : undefined,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-body-m)",
      lineHeight: "var(--lh-body-s)",
      color: "var(--text-body)",
      background: "var(--surface-raised)",
      padding: multiline ? "12px 14px" : "13px 14px",
      border: "1px solid " + (error ? "var(--feedback-error-fg)" : focus ? "var(--border-focus)" : "var(--border-hairline)"),
      borderRadius: "var(--radius-control)",
      boxShadow: focus ? "var(--ring-focus)" : "none",
      outline: "none",
      resize: multiline ? "vertical" : undefined,
      transition: "var(--transition-control)",
      ...style
    }
  }, rest)), (error || hint) && /*#__PURE__*/React.createElement("p", {
    style: {
      ...hintStyle,
      color: error ? "var(--feedback-error-fg)" : "var(--text-subtle)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  name,
  options = [],
  value,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: "grid",
      gap: "var(--space-2)",
      ...style
    }
  }, options.map(o => {
    const v = typeof o === "string" ? o : o.value;
    const l = typeof o === "string" ? o : o.label;
    const d = typeof o === "string" ? null : o.description;
    const on = value === v;
    return /*#__PURE__*/React.createElement("label", {
      key: v,
      style: {
        display: "flex",
        gap: "var(--space-3)",
        alignItems: "flex-start",
        padding: "14px 16px",
        cursor: "pointer",
        background: on ? "var(--surface-accent-soft)" : "var(--surface-raised)",
        border: "1px solid " + (on ? "var(--ember-500)" : "var(--border-hairline)"),
        borderRadius: "var(--radius-control)",
        transition: "var(--transition-control)"
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: name,
      value: v,
      checked: on,
      onChange: () => onChange && onChange(v),
      style: {
        position: "absolute",
        opacity: 0,
        width: 1,
        height: 1
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 18,
        height: 18,
        flex: "none",
        marginTop: 2,
        borderRadius: "var(--radius-circle)",
        border: "1px solid " + (on ? "var(--ember-500)" : "var(--carbon-300)"),
        background: "var(--surface-raised)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, on && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 9,
        height: 9,
        borderRadius: "var(--radius-circle)",
        background: "var(--ember-500)"
      }
    })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        fontFamily: "var(--font-body)",
        fontSize: "var(--fs-body-s)",
        color: "var(--text-body)"
      }
    }, l), d && /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        fontSize: "var(--fs-caption)",
        color: "var(--text-subtle)",
        marginTop: 2
      }
    }, d)));
  }));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const labelStyle = {
  display: "block",
  fontFamily: "var(--font-body)",
  fontSize: "var(--fs-label)",
  fontWeight: "var(--fw-medium)",
  letterSpacing: "var(--tracking-label)",
  textTransform: "uppercase",
  color: "var(--text-muted)",
  marginBottom: "var(--space-2)"
};
const hintStyle = {
  fontFamily: "var(--font-body)",
  fontSize: "var(--fs-caption)",
  lineHeight: "var(--lh-caption)",
  marginTop: "var(--space-2)"
};
function Select({
  label,
  hint,
  error,
  options = [],
  placeholder,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = React.useMemo(() => id || "se-" + Math.random().toString(36).slice(2, 7), [id]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: labelStyle
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: uid,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      appearance: "none",
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-body-m)",
      color: "var(--text-body)",
      background: "var(--surface-raised)",
      padding: "13px 40px 13px 14px",
      border: "1px solid " + (error ? "var(--feedback-error-fg)" : focus ? "var(--border-focus)" : "var(--border-hairline)"),
      borderRadius: "var(--radius-control)",
      boxShadow: focus ? "var(--ring-focus)" : "none",
      outline: "none",
      transition: "var(--transition-control)",
      ...style
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => {
    const v = typeof o === "string" ? o : o.value;
    const l = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 14,
      top: "50%",
      marginTop: -3,
      width: 9,
      height: 6,
      pointerEvents: "none",
      background: "var(--text-muted)",
      clipPath: "polygon(0 0,100% 0,50% 100%)"
    }
  })), (error || hint) && /*#__PURE__*/React.createElement("p", {
    style: {
      ...hintStyle,
      color: error ? "var(--feedback-error-fg)" : "var(--text-subtle)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked = false,
  onChange,
  label,
  disabled = false,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-3)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      position: "absolute",
      opacity: 0,
      width: 1,
      height: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 24,
      flex: "none",
      borderRadius: "var(--radius-pill)",
      background: checked ? "var(--ember-500)" : "var(--sand-300)",
      border: "1px solid " + (checked ? "var(--ember-500)" : "var(--sand-400)"),
      position: "relative",
      transition: "var(--transition-control)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 2,
      left: checked ? 22 : 2,
      width: 18,
      height: 18,
      borderRadius: "var(--radius-circle)",
      background: "var(--white)",
      boxShadow: "var(--shadow-sm)",
      transition: "left var(--dur-base) var(--ease-standard)"
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-body-s)",
      color: "var(--text-body)"
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  onChange,
  style
}) {
  const [hover, setHover] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: "flex",
      gap: "var(--space-6)",
      borderBottom: "1px solid var(--border-hairline)",
      ...style
    }
  }, items.map(it => {
    const v = typeof it === "string" ? it : it.value;
    const l = typeof it === "string" ? it : it.label;
    const on = value === v;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(v),
      onMouseEnter: () => setHover(v),
      onMouseLeave: () => setHover(null),
      style: {
        appearance: "none",
        background: "transparent",
        border: 0,
        padding: "0 0 var(--space-3)",
        cursor: "pointer",
        fontFamily: "var(--font-body)",
        fontSize: "var(--fs-body-s)",
        fontWeight: on ? "var(--fw-medium)" : "var(--fw-regular)",
        color: on ? "var(--text-heading)" : hover === v ? "var(--text-body)" : "var(--text-muted)",
        borderBottom: "2px solid " + (on ? "var(--ember-500)" : "transparent"),
        marginBottom: -1,
        transition: "var(--transition-control)"
      }
    }, l);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  neutral: {
    bg: "var(--surface-sunken)",
    fg: "var(--text-body)"
  },
  ember: {
    bg: "var(--ember-500)",
    fg: "var(--sand-50)"
  },
  gold: {
    bg: "var(--gold-100)",
    fg: "var(--gold-600)"
  },
  success: {
    bg: "var(--feedback-success-bg)",
    fg: "var(--feedback-success-fg)"
  },
  warning: {
    bg: "var(--feedback-warning-bg)",
    fg: "var(--feedback-warning-fg)"
  },
  error: {
    bg: "var(--feedback-error-bg)",
    fg: "var(--feedback-error-fg)"
  },
  info: {
    bg: "var(--feedback-info-bg)",
    fg: "var(--feedback-info-fg)"
  }
};
function Badge({
  children,
  tone = "neutral",
  style,
  ...rest
}) {
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-1)",
      padding: "4px 8px",
      background: t.bg,
      color: t.fg,
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-label)",
      fontWeight: "var(--fw-medium)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      borderRadius: "var(--radius-xs)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Badge.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  eyebrow,
  title,
  body,
  media,
  footer,
  tone = "default",
  interactive = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    default: {
      background: "var(--surface-card)",
      color: "var(--text-body)",
      border: "1px solid var(--border-hairline)"
    },
    raised: {
      background: "var(--surface-raised)",
      color: "var(--text-body)",
      border: "1px solid var(--border-hairline)"
    },
    accent: {
      background: "var(--surface-accent-soft)",
      color: "var(--text-body)",
      border: "1px solid var(--ember-200)"
    },
    inverse: {
      background: "var(--surface-inverse)",
      color: "var(--text-on-dark)",
      border: "1px solid var(--carbon-800)"
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderRadius: "var(--radius-card)",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      transition: "box-shadow var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)",
      boxShadow: interactive && hover ? "var(--shadow-md)" : "var(--shadow-none)",
      cursor: interactive ? "pointer" : undefined,
      ...tones[tone],
      ...(interactive && hover ? {
        borderColor: "var(--ember-300)"
      } : null),
      ...style
    }
  }, rest), media, (eyebrow || title || body || children || footer) && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-6)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      flex: 1
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-label)",
      fontWeight: "var(--fw-medium)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: tone === "inverse" ? "var(--gold-300)" : "var(--text-muted)"
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-regular)",
      fontSize: "var(--fs-display-xs)",
      lineHeight: "var(--lh-display-xs)",
      letterSpacing: "var(--tracking-display)",
      margin: 0,
      color: tone === "inverse" ? "var(--sand-50)" : "var(--text-heading)"
    }
  }, title), body && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--fs-body-s)",
      lineHeight: "var(--lh-body-m)",
      color: tone === "inverse" ? "var(--sand-200)" : "var(--text-muted)"
    }
  }, body), children, footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      paddingTop: "var(--space-4)"
    }
  }, footer)));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Dialog.jsx
try { (() => {
function Dialog({
  open = true,
  title,
  children,
  footer,
  onClose,
  width = 520
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 60,
      background: "var(--scrim-flat)",
      backdropFilter: "blur(3px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "var(--space-6)"
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width: "100%",
      maxWidth: width,
      background: "var(--surface-raised)",
      border: "1px solid var(--border-hairline)",
      borderRadius: "var(--radius-card)",
      boxShadow: "var(--shadow-lg)",
      animation: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "var(--space-4)",
      padding: "var(--space-6) var(--space-6) var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-regular)",
      fontSize: "var(--fs-display-xs)",
      lineHeight: "var(--lh-display-xs)",
      letterSpacing: "var(--tracking-display)",
      margin: 0,
      color: "var(--text-heading)"
    }
  }, title), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Cerrar",
    style: {
      border: 0,
      background: "transparent",
      cursor: "pointer",
      fontSize: 20,
      lineHeight: 1,
      color: "var(--text-muted)",
      padding: 4
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 var(--space-6)",
      fontSize: "var(--fs-body-s)",
      lineHeight: "var(--lh-body-m)",
      color: "var(--text-muted)"
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: "var(--space-3)",
      padding: "var(--space-6)",
      marginTop: "var(--space-2)"
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  selected = false,
  onRemove,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const clickable = !!onClick;
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      padding: "7px 14px",
      borderRadius: "var(--radius-pill)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-caption)",
      background: selected ? "var(--carbon-900)" : hover && clickable ? "var(--surface-sunken)" : "transparent",
      color: selected ? "var(--sand-50)" : "var(--text-body)",
      border: "1px solid " + (selected ? "var(--carbon-900)" : "var(--border-hairline)"),
      cursor: clickable ? "pointer" : "default",
      transition: "var(--transition-control)",
      ...style
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    style: {
      cursor: "pointer",
      fontSize: "var(--fs-caption)",
      opacity: 0.6,
      lineHeight: 1
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Tag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/Article.jsx
try { (() => {
const {
  Button,
  Icon,
  Tag,
  Badge,
  Card
} = window.VestaDesignSystem_e6d2b4;
function Article({
  go
}) {
  const {
    Photo,
    Eyebrow,
    Display,
    Prose,
    Container
  } = window;
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Container, {
    width: "1040px",
    style: {
      padding: "var(--space-16) var(--space-8) var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-5)",
      justifyItems: "center",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Revista Vesta \xB7 Ciencia"), /*#__PURE__*/React.createElement(Display, {
    size: "var(--fs-display-l)",
    style: {
      maxWidth: "30ch"
    }
  }, "Por qu\xE9 el calor aparece justo cuando te acuestas"), /*#__PURE__*/React.createElement(Prose, {
    size: "var(--fs-body-l)",
    style: {
      maxWidth: "58ch",
      textAlign: "center"
    }
  }, "La termorregulaci\xF3n cambia antes que el ciclo. Esto es lo que se sabe hoy, con los estudios en la mano."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-4)",
      alignItems: "center",
      fontSize: "var(--fs-caption)",
      color: "var(--text-subtle)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Revisado por la Dra. Ana Luc\xEDa Restrepo, ginec\xF3loga"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, "8 min de lectura")))), /*#__PURE__*/React.createElement(Container, {
    width: "1240px",
    style: {
      paddingBottom: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    height: 380,
    label: "Imagen a sangre completa: ventana al amanecer, temperatura c\xE1lida"
  })), /*#__PURE__*/React.createElement(Container, {
    width: "760px",
    style: {
      paddingBottom: "var(--section-y)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: 25,
      lineHeight: 1.45,
      color: "var(--text-heading)"
    }
  }, "El cuerpo no pierde la capacidad de regular su temperatura. Lo que cambia es el margen dentro del cual la considera normal."), ["Cuando el estradiol baja, el rango termoneutral —la franja de temperatura en la que el cuerpo no necesita hacer nada— se estrecha. Un cambio de unas décimas basta para que el organismo active la respuesta de enfriamiento: vasodilatación, sudoración, la oleada.", "De noche el efecto se nota más porque la temperatura central baja de forma natural para iniciar el sueño. Ese descenso, que antes era imperceptible, ahora cruza el umbral.", "Esto explica por qué las estrategias que funcionan no son las que “bajan el calor”, sino las que amplían el margen: sueño estable, magnesio, manejo del cortisol nocturno y, cuando corresponde, terapia hormonal indicada por tu médica."].map((t, i) => /*#__PURE__*/React.createElement(Prose, {
    key: i,
    size: "var(--fs-body-l)",
    style: {
      maxWidth: "none"
    }
  }, t)), /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: "var(--space-6) 0",
      borderLeft: "2px solid var(--ember-500)",
      paddingLeft: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-light)",
      fontSize: 28,
      lineHeight: 1.35,
      color: "var(--text-heading)"
    }
  }, "\u201CLa paciente no est\xE1 exagerando. Su umbral cambi\xF3.\u201D"), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: "var(--space-3)",
      fontSize: "var(--fs-caption)",
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "var(--text-subtle)"
    }
  }, "Dra. Ana Luc\xEDa Restrepo")), /*#__PURE__*/React.createElement("hr", {
    className: "v-rule"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      flexWrap: "wrap"
    }
  }, ["Sueño", "Termorregulación", "Perimenopausia"].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    onClick: () => {}
  }, t))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--sand-50)",
      borderTop: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      padding: "var(--section-y-tight) var(--space-8) var(--section-y)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: "var(--space-8)"
    }
  }, "Seguir leyendo"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--space-6)"
    }
  }, [["Huesos", "Lo que pasa con el hueso entre los 45 y los 60"], ["Ánimo", "Niebla mental: qué es y qué no es"], ["Ciencia", "Cómo leer la etiqueta de un suplemento"]].map(([e, t]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    interactive: true,
    eyebrow: e,
    title: t,
    media: /*#__PURE__*/React.createElement(Photo, {
      height: 150,
      label: "Foto editorial",
      style: {
        border: 0,
        borderRadius: 0,
        borderBottom: "1px solid var(--border-hairline)"
      }
    }),
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 16
      })
    }, "Leer")
  }))))));
}
Object.assign(window, {
  Article
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/Article.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/Home.jsx
try { (() => {
const {
  Button,
  Icon,
  Card,
  Badge,
  Tag
} = window.VestaDesignSystem_e6d2b4;
function Home({
  go
}) {
  const {
    Photo,
    Eyebrow,
    Display,
    Prose,
    Container
  } = window;
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Container, {
    style: {
      paddingTop: "var(--space-20)",
      paddingBottom: "var(--space-24)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.05fr .95fr",
      gap: "var(--space-16)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Bienestar hormonal \xB7 45 a 60"), /*#__PURE__*/React.createElement(Display, {
    size: "var(--fs-display-xl)",
    lh: "var(--lh-display-xl)",
    style: {
      maxWidth: "16ch"
    }
  }, "El fuego que se cuida, no se apaga."), /*#__PURE__*/React.createElement(Prose, {
    size: "var(--fs-body-l)",
    style: {
      maxWidth: "44ch"
    }
  }, "F\xF3rmulas para la transici\xF3n hormonal, con las dosis que usan los estudios que citamos. Hechas para mujeres colombianas, no adaptadas de otro mercado."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      marginTop: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => go("quiz"),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Hacer el test hormonal"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    onClick: () => go("product")
  }, "Ver las f\xF3rmulas")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-6)",
      marginTop: "var(--space-4)",
      paddingTop: "var(--space-6)",
      borderTop: "1px solid var(--border-hairline)"
    }
  }, [["312", "mujeres en el ensayo"], ["12", "semanas de seguimiento"], ["0", "azúcares añadidos"]].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 32,
      lineHeight: 1,
      color: "var(--ember-600)"
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-caption)",
      color: "var(--text-subtle)",
      marginTop: 4
    }
  }, l))))), /*#__PURE__*/React.createElement(Photo, {
    ratio: "4/5",
    label: "Retrato: mujer de 52, luz de ventana, gesto sereno"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--sand-50)",
      borderTop: "1px solid var(--border-hairline)",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      padding: "var(--section-y) var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      gap: "var(--space-8)",
      marginBottom: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Las f\xF3rmulas"), /*#__PURE__*/React.createElement(Display, {
    size: "var(--fs-display-m)"
  }, "Tres respuestas, seg\xFAn lo que te est\xE1 pasando")), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => go("product"),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16
    })
  }, "Comparar todas")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--space-6)"
    }
  }, [{
    e: "Sueño",
    t: "Vesta Noche",
    b: "Para dormir de corrido sin sedación matutina.",
    badge: "Más pedido"
  }, {
    e: "Energía y ánimo",
    t: "Vesta Día",
    b: "Para los sofocos y la niebla mental del mediodía.",
    badge: null
  }, {
    e: "Huesos",
    t: "Vesta Huesos",
    b: "Calcio, K2 y D3 en la proporción del estudio.",
    badge: "Respaldo clínico"
  }].map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.t,
    interactive: true,
    onClick: () => go("product"),
    eyebrow: c.e,
    title: c.t,
    body: c.b,
    media: /*#__PURE__*/React.createElement(Photo, {
      height: 180,
      label: "Empaque sobre superficie de barro",
      style: {
        border: 0,
        borderRadius: 0,
        borderBottom: "1px solid var(--border-hairline)"
      }
    }),
    footer: /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 21,
        color: "var(--text-heading)"
      }
    }, "$149.000"), c.badge && /*#__PURE__*/React.createElement(Badge, {
      tone: c.badge === "Más pedido" ? "ember" : "gold"
    }, c.badge))
  }))))), /*#__PURE__*/React.createElement(Container, {
    style: {
      padding: "var(--section-y) var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-16)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    ratio: "1/1",
    label: "Manos sosteniendo una taza, grano leve"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Nuestro est\xE1ndar"), /*#__PURE__*/React.createElement(Display, {
    size: "var(--fs-display-m)"
  }, "Si citamos un estudio, usamos su dosis"), /*#__PURE__*/React.createElement(Prose, null, "La mayor\xEDa de suplementos incluyen el ingrediente del titular en cantidades que ning\xFAn ensayo prob\xF3. Nosotras publicamos la dosis, el extracto estandarizado y el estudio completo, incluidos los resultados que no nos favorecen."), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "grid",
      gap: "var(--space-3)"
    }
  }, ["Dosis idéntica a la del ensayo citado", "Comité médico colombiano", "Sin fitoestrógenos sin respaldo"].map(l => /*#__PURE__*/React.createElement("li", {
    key: l,
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "center",
      fontSize: "var(--fs-body-s)",
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 18,
    color: "var(--ember-500)"
  }), l))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => go("article")
  }, "Leer el est\xE1ndar Vesta"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--carbon-900)"
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      padding: "var(--section-y) var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "var(--gold-300)",
    style: {
      marginBottom: "var(--space-8)"
    }
  }, "Ellas ya est\xE1n adentro"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--space-10)"
    }
  }, [["“Volví a dormir de corrido a las tres semanas. No esperaba tanto.”", "Marta, 54 · Medellín"], ["“Es la primera marca que me habla como adulta.”", "Luz, 49 · Bogotá"], ["“Le mandé el estudio a mi ginecóloga y lo aprobó.”", "Carmen, 58 · Cali"]].map(([q, a]) => /*#__PURE__*/React.createElement("figure", {
    key: a,
    style: {
      margin: 0,
      display: "grid",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-light)",
      fontSize: 25,
      lineHeight: 1.35,
      color: "var(--sand-50)"
    }
  }, q), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontSize: "var(--fs-caption)",
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "var(--sand-400)"
    }
  }, a)))))), /*#__PURE__*/React.createElement(Container, {
    style: {
      padding: "var(--section-y) var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--ember-50)",
      border: "1px solid var(--ember-200)",
      borderRadius: "var(--radius-card)",
      padding: "var(--space-16)",
      display: "grid",
      gap: "var(--space-5)",
      justifyItems: "center",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Dos minutos"), /*#__PURE__*/React.createElement(Display, {
    size: "var(--fs-display-m)",
    style: {
      maxWidth: "24ch"
    }
  }, "El test hormonal te dice d\xF3nde est\xE1s, no qu\xE9 comprar"), /*#__PURE__*/React.createElement(Prose, {
    style: {
      maxWidth: "48ch"
    }
  }, "Doce preguntas sobre sue\xF1o, temperatura, \xE1nimo y ciclo. Recibes una lectura de tu etapa y, si aplica, la f\xF3rmula que corresponde."), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => go("quiz")
  }, "Empezar el test"))));
}
Object.assign(window, {
  Home
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/Product.jsx
try { (() => {
const {
  Button,
  Icon,
  Tabs,
  Badge,
  Tag,
  Tooltip,
  Select,
  Card
} = window.VestaDesignSystem_e6d2b4;
function Product({
  go,
  onAdd
}) {
  const {
    Photo,
    Eyebrow,
    Display,
    Prose,
    Container
  } = window;
  const [tab, setTab] = React.useState("Ingredientes");
  const [plan, setPlan] = React.useState("suscripcion");
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Container, {
    style: {
      padding: "var(--space-12) var(--space-8) var(--section-y)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 var(--space-8)",
      fontSize: "var(--fs-caption)",
      color: "var(--text-subtle)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go("home");
    }
  }, "Inicio"), " \xB7 F\xF3rmulas \xB7 Vesta Noche"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-16)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    ratio: "1/1",
    label: "Frasco \xE1mbar, luz lateral c\xE1lida"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    ratio: "1/1",
    label: "Detalle etiqueta"
  }), /*#__PURE__*/React.createElement(Photo, {
    ratio: "1/1",
    label: "C\xE1psulas en mano"
  }), /*#__PURE__*/React.createElement(Photo, {
    ratio: "1/1",
    label: "Mesa de noche"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-5)",
      position: "sticky",
      top: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "ember"
  }, "M\xE1s pedido"), /*#__PURE__*/React.createElement(Badge, {
    tone: "gold"
  }, "Respaldo cl\xEDnico")), /*#__PURE__*/React.createElement(Display, {
    size: "var(--fs-display-l)"
  }, "Vesta Noche"), /*#__PURE__*/React.createElement(Prose, {
    size: "var(--fs-body-l)",
    style: {
      maxWidth: "42ch"
    }
  }, "Para dormir de corrido durante la perimenopausia, sin sedaci\xF3n al d\xEDa siguiente. 60 c\xE1psulas, un mes."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)",
      padding: "var(--space-5)",
      background: "var(--surface-raised)",
      border: "1px solid var(--border-hairline)",
      borderRadius: "var(--radius-card)"
    }
  }, [["suscripcion", "Suscripción mensual", "$134.100", "Ahorras 10% y puedes pausar cuando quieras"], ["unica", "Compra única", "$149.000", "Un frasco, sin compromiso"]].map(([id, t, price, d]) => {
    const on = plan === id;
    return /*#__PURE__*/React.createElement("label", {
      key: id,
      style: {
        display: "flex",
        gap: "var(--space-3)",
        alignItems: "flex-start",
        cursor: "pointer",
        padding: "var(--space-4)",
        borderRadius: "var(--radius-control)",
        background: on ? "var(--ember-50)" : "transparent",
        border: "1px solid " + (on ? "var(--ember-500)" : "var(--border-hairline)")
      },
      onClick: () => setPlan(id)
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 18,
        height: 18,
        marginTop: 3,
        flex: "none",
        borderRadius: "50%",
        border: "1px solid " + (on ? "var(--ember-500)" : "var(--carbon-300)"),
        display: "grid",
        placeItems: "center"
      }
    }, on && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 9,
        height: 9,
        borderRadius: "50%",
        background: "var(--ember-500)"
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        gap: "var(--space-4)",
        fontSize: "var(--fs-body-s)",
        color: "var(--text-body)"
      }
    }, /*#__PURE__*/React.createElement("b", {
      style: {
        fontWeight: "var(--fw-medium)"
      }
    }, t), /*#__PURE__*/React.createElement("b", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 400,
        fontSize: 19
      }
    }, price)), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        fontSize: "var(--fs-caption)",
        color: "var(--text-subtle)",
        marginTop: 2
      }
    }, d)));
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Frecuencia",
    options: ["Cada 30 días", "Cada 45 días", "Cada 60 días"]
  }), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    full: true,
    onClick: onAdd
  }, "A\xF1adir a la bolsa"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      display: "flex",
      gap: "var(--space-2)",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "var(--fs-caption)",
      color: "var(--text-subtle)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "truck",
    size: 16
  }), " Env\xEDo gratis en Colombia desde $120.000")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-2)"
    }
  }, ["Sin melatonina", "Vegano", "Sin azúcar añadido"].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--sand-50)",
      borderTop: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      padding: "var(--section-y-tight) var(--space-8) var(--section-y)"
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: ["Beneficios", "Ingredientes", "Estudios", "Preguntas"],
    value: tab,
    onChange: setTab,
    style: {
      marginBottom: "var(--space-10)"
    }
  }), tab === "Ingredientes" ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.2fr 1fr",
      gap: "var(--space-16)"
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: "var(--fs-body-s)"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, ["Ingrediente", "Dosis", "Para qué"].map(h => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      textAlign: "left",
      padding: "0 0 var(--space-3)",
      borderBottom: "1px solid var(--carbon-900)",
      fontSize: "var(--fs-label)",
      fontWeight: "var(--fw-medium)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, [["Trifolium pratense", "80 mg", "Despertares nocturnos"], ["Magnesio bisglicinato", "300 mg", "Relajación muscular"], ["Ashwagandha KSM-66", "600 mg", "Cortisol nocturno"], ["Vitamina D3", "2000 UI", "Ánimo y hueso"]].map(([a, b, c], i) => /*#__PURE__*/React.createElement("tr", {
    key: a
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "var(--space-4) 0",
      borderBottom: "1px solid var(--border-hairline)",
      color: "var(--text-heading)"
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    content: "Extracto estandarizado al 8%"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      borderBottom: "1px dotted var(--carbon-400, var(--carbon-500))"
    }
  }, a))), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "var(--space-4) 0",
      borderBottom: "1px solid var(--border-hairline)",
      fontVariantNumeric: "tabular-nums"
    }
  }, b), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "var(--space-4) 0",
      borderBottom: "1px solid var(--border-hairline)",
      color: "var(--text-muted)"
    }
  }, c))))), /*#__PURE__*/React.createElement(Card, {
    tone: "inverse",
    eyebrow: "C\xF3mo tomarlo",
    title: "Dos c\xE1psulas, 45 minutos antes de dormir",
    body: "Con un vaso de agua. Puedes tomarlo con la cena si te cae mejor. Los primeros efectos aparecen entre la segunda y la cuarta semana."
  })) : /*#__PURE__*/React.createElement(Prose, {
    size: "var(--fs-body-l)"
  }, "Contenido de la secci\xF3n \u201C", tab, "\u201D. En el sitio real cada pesta\xF1a abre una secci\xF3n editorial con su propia jerarqu\xEDa: beneficios en lista corta, estudios con enlace al PDF y preguntas en acorde\xF3n."))));
}
Object.assign(window, {
  Product
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/Product.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/Quiz.jsx
try { (() => {
const {
  Button,
  Icon,
  Radio,
  Input,
  Card,
  Badge
} = window.VestaDesignSystem_e6d2b4;
const QUESTIONS = [{
  id: "sleep",
  q: "¿Cómo has dormido en el último mes?",
  options: [{
    value: "a",
    label: "De corrido",
    description: "Rara vez me despierto"
  }, {
    value: "b",
    label: "Me despierto una o dos veces"
  }, {
    value: "c",
    label: "Casi no duermo",
    description: "Cuatro horas o menos"
  }]
}, {
  id: "heat",
  q: "¿Con qué frecuencia sientes oleadas de calor?",
  options: [{
    value: "a",
    label: "Nunca o casi nunca"
  }, {
    value: "b",
    label: "Algunas veces por semana"
  }, {
    value: "c",
    label: "Varias veces al día",
    description: "Incluyendo la noche"
  }]
}, {
  id: "cycle",
  q: "¿Cómo está tu ciclo?",
  options: [{
    value: "a",
    label: "Regular"
  }, {
    value: "b",
    label: "Irregular desde hace menos de un año"
  }, {
    value: "c",
    label: "Sin menstruación hace más de un año"
  }]
}];
function Quiz({
  go
}) {
  const {
    Eyebrow,
    Display,
    Prose,
    Container,
    Photo
  } = window;
  const [step, setStep] = React.useState(0);
  const [answers, setAnswers] = React.useState({});
  const done = step >= QUESTIONS.length;
  const pct = Math.round(Math.min(step, QUESTIONS.length) / QUESTIONS.length * 100);
  const current = QUESTIONS[step];
  return /*#__PURE__*/React.createElement("main", {
    style: {
      minHeight: "70vh"
    }
  }, /*#__PURE__*/React.createElement(Container, {
    width: "820px",
    style: {
      padding: "var(--space-16) var(--space-8) var(--section-y)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 2,
      background: "var(--sand-300)",
      marginBottom: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct + "%",
      height: "100%",
      background: "var(--ember-500)",
      transition: "width var(--dur-slow) var(--ease-out)"
    }
  })), !done ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Pregunta ", step + 1, " de ", QUESTIONS.length), /*#__PURE__*/React.createElement(Display, {
    size: "var(--fs-display-m)",
    style: {
      maxWidth: "26ch"
    }
  }, current.q)), /*#__PURE__*/React.createElement(Radio, {
    name: current.id,
    options: current.options,
    value: answers[current.id],
    onChange: v => setAnswers({
      ...answers,
      [current.id]: v
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    disabled: !answers[current.id],
    onClick: () => setStep(step + 1),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Continuar"), step > 0 && /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => setStep(step - 1)
  }, "Volver")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--fs-caption)",
      color: "var(--text-subtle)"
    }
  }, "Este test no es un diagn\xF3stico. Si algo te preocupa, cons\xFAltalo con tu m\xE9dica.")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Tu lectura"), /*#__PURE__*/React.createElement(Display, {
    size: "var(--fs-display-l)",
    style: {
      maxWidth: "24ch"
    }
  }, "Est\xE1s en perimenopausia tard\xEDa"), /*#__PURE__*/React.createElement(Prose, {
    size: "var(--fs-body-l)"
  }, "Tus respuestas describen un patr\xF3n de despertares nocturnos con oleadas de calor y ciclo irregular. Es la etapa en la que el sue\xF1o suele ser el primer frente a atender.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "accent",
    eyebrow: "Recomendaci\xF3n",
    title: "Vesta Noche",
    body: "La f\xF3rmula del estudio de 312 mujeres: 68% report\xF3 menos despertares en 12 semanas.",
    footer: /*#__PURE__*/React.createElement(Button, {
      onClick: () => go("product")
    }, "Ver la f\xF3rmula")
  }), /*#__PURE__*/React.createElement(Card, {
    eyebrow: "Para leer",
    title: "Por qu\xE9 el calor aparece de noche",
    body: "C\xF3mo cambia la termorregulaci\xF3n cuando el estradiol baja, en lenguaje claro.",
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => go("article"),
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 16
      })
    }, "Leer")
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)",
      padding: "var(--space-6)",
      border: "1px solid var(--border-hairline)",
      borderRadius: "var(--radius-card)",
      background: "var(--surface-raised)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Guarda tu lectura"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Correo",
    placeholder: "tu@correo.com",
    style: {
      minWidth: 280
    }
  }), /*#__PURE__*/React.createElement(Button, null, "Envi\xE1rmela"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => {
      setStep(0);
      setAnswers({});
    }
  }, "Repetir el test")))));
}
Object.assign(window, {
  Quiz
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/Quiz.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/Shell.jsx
try { (() => {
const {
  Button,
  Icon,
  Tag
} = window.VestaDesignSystem_e6d2b4;
const NAV = [{
  id: "home",
  label: "Inicio"
}, {
  id: "product",
  label: "Fórmulas"
}, {
  id: "quiz",
  label: "Test hormonal"
}, {
  id: "article",
  label: "Revista"
}];
function Wordmark({
  color = "var(--carbon-900)",
  size = 26
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: size,
      lineHeight: 1,
      letterSpacing: "0.02em",
      color
    }
  }, "Vesta");
}
function Photo({
  ratio = "4/3",
  label = "Foto",
  height,
  scrim,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: height ? undefined : ratio,
      height,
      background: "var(--sand-200)",
      border: "1px solid var(--border-hairline)",
      borderRadius: "var(--radius-image)",
      overflow: "hidden",
      display: "grid",
      placeItems: "center",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "var(--carbon-500)",
      textAlign: "center",
      padding: "0 16px",
      maxWidth: "26ch",
      lineHeight: 1.6
    }
  }, label), scrim && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--scrim-bottom)"
    }
  }), children);
}
function Eyebrow({
  children,
  color = "var(--text-muted)",
  style
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-label)",
      fontWeight: "var(--fw-medium)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color,
      ...style
    }
  }, children);
}
function Display({
  children,
  size = "var(--fs-display-l)",
  lh = "var(--lh-display-l)",
  color = "var(--text-heading)",
  style
}) {
  return /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-regular)",
      fontSize: size,
      lineHeight: lh,
      letterSpacing: "var(--tracking-display)",
      color,
      ...style
    }
  }, children);
}
function Prose({
  children,
  size = "var(--fs-body-m)",
  color = "var(--text-muted)",
  style
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: size,
      lineHeight: "var(--lh-body-m)",
      color,
      maxWidth: "var(--measure-prose)",
      ...style
    }
  }, children);
}
function Container({
  children,
  width = "var(--container-max)",
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: width,
      margin: "0 auto",
      padding: "0 var(--space-8)",
      ...style
    }
  }, children);
}
function Header({
  route,
  go,
  onCart
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 30,
      background: "color-mix(in srgb, var(--sand-100) 88%, transparent)",
      backdropFilter: "blur(8px)",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "18px var(--space-8)",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go("home");
    },
    style: {
      borderBottom: 0,
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(Wordmark, null)), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: "var(--space-6)",
      marginRight: "auto"
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.id,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go(n.id);
    },
    style: {
      borderBottom: "1px solid " + (route === n.id ? "var(--ember-500)" : "transparent"),
      paddingBottom: 2,
      fontSize: "var(--fs-body-s)",
      color: route === n.id ? "var(--text-heading)" : "var(--text-muted)"
    }
  }, n.label))), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onCart();
    },
    style: {
      borderBottom: 0,
      display: "flex",
      alignItems: "center",
      gap: 6,
      fontSize: "var(--fs-body-s)",
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shopping-bag",
    size: 18
  }), " Bolsa"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: () => go("quiz")
  }, "Hacer el test")));
}
function Footer({
  go
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--carbon-900)",
      color: "var(--sand-200)",
      marginTop: "var(--space-24)"
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      padding: "var(--space-16) var(--space-8) var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "2fr 1fr 1fr 1fr",
      gap: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)",
      alignContent: "start"
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    color: "var(--sand-50)",
    size: 30
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: 21,
      lineHeight: 1.3,
      color: "var(--gold-300)",
      maxWidth: "20ch"
    }
  }, "El fuego que se cuida, no se apaga.")), [["Fórmulas", ["Vesta Noche", "Vesta Día", "Vesta Huesos", "Kit completo"]], ["Ciencia", ["Nuestro estándar", "Estudios citados", "Comité médico"]], ["Vesta", ["Quiénes somos", "Envíos en Colombia", "Contacto"]]].map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      display: "grid",
      gap: "var(--space-3)",
      alignContent: "start"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "var(--sand-400)"
  }, h), items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go("product");
    },
    style: {
      fontSize: "var(--fs-body-s)",
      color: "var(--sand-200)",
      borderBottom: 0
    }
  }, i))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-12)",
      paddingTop: "var(--space-6)",
      borderTop: "1px solid var(--carbon-700)",
      display: "flex",
      justifyContent: "space-between",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-caption)",
      color: "var(--carbon-500)"
    }
  }, "\xA9 2026 Vesta S.A.S. \xB7 Bogot\xE1, Colombia"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-caption)",
      color: "var(--carbon-500)"
    }
  }, "Este producto no es un medicamento. INVIMA NSA-000000-000."))));
}
Object.assign(window, {
  Wordmark,
  Photo,
  Eyebrow,
  Display,
  Prose,
  Container,
  Header,
  Footer,
  NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/Shell.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Tag = __ds_scope.Tag;

})();
