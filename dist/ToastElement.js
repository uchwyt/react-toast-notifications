"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toastWidth = exports.shrinkKeyframes = exports.gutter = exports.borderRadius = exports.DefaultToast = void 0;

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@emotion/react");

var _icons = require("./icons");

var colors = _interopRequireWildcard(require("./colors"));

var _utils = require("./utils");

var _excluded = ["tag"],
    _excluded2 = ["autoDismissTimeout", "opacity", "isRunning"],
    _excluded3 = ["appearance", "placement", "transitionDuration", "transitionState"],
    _excluded4 = ["appearance", "autoDismiss", "autoDismissTimeout", "children", "isRunning", "onDismiss", "placement", "transitionDuration", "transitionState", "onMouseEnter", "onMouseLeave"];

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// common
var borderRadius = 4;
exports.borderRadius = borderRadius;
var gutter = 8;
exports.gutter = gutter;
var toastWidth = 360;
exports.toastWidth = toastWidth;
var shrinkKeyframes = (0, _react2.keyframes)(_templateObject || (_templateObject = _taggedTemplateLiteral(["from { height: 100%; } to { height: 0% }"]))); // a11y helper

exports.shrinkKeyframes = shrinkKeyframes;

var A11yText = function A11yText(_ref) {
  var Tag = _ref.tag,
      props = _objectWithoutProperties(_ref, _excluded);

  return (0, _react2.jsx)(Tag, _extends({
    css: {
      border: 0,
      clip: 'rect(1px, 1px, 1px, 1px)',
      height: 1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      whiteSpace: 'nowrap',
      width: 1
    }
  }, props));
};

A11yText.defaultProps = {
  tag: 'span'
}; // default appearances

var appearances = {
  success: {
    icon: _icons.CheckIcon,
    text: colors.G500,
    fg: colors.G300,
    bg: colors.G50
  },
  error: {
    icon: _icons.FlameIcon,
    text: colors.R500,
    fg: colors.R300,
    bg: colors.R50
  },
  warning: {
    icon: _icons.AlertIcon,
    text: colors.Y500,
    fg: colors.Y300,
    bg: colors.Y50
  },
  info: {
    icon: _icons.InfoIcon,
    text: colors.N400,
    fg: colors.B200,
    bg: 'white'
  }
};

var Button = function Button(props) {
  return (0, _react2.jsx)("div", _extends({
    role: "button",
    className: "react-toast-notifications__toast__dismiss-button",
    css: {
      cursor: 'pointer',
      flexShrink: 0,
      opacity: 0.5,
      padding: "".concat(gutter, "px ").concat(gutter * 1.5, "px"),
      transition: 'opacity 150ms',
      ':hover': {
        opacity: 1
      }
    }
  }, props));
};

var Content = function Content(props) {
  return (0, _react2.jsx)("div", _extends({
    className: "react-toast-notifications__toast__content",
    css: {
      flexGrow: 1,
      fontSize: 14,
      lineHeight: 1.4,
      minHeight: 40,
      padding: "".concat(gutter, "px ").concat(gutter * 1.5, "px")
    }
  }, props));
}; // NOTE: invoke animation when NOT `autoDismiss` with opacity of 0 to avoid a
// paint bug in FireFox.
// https://bugzilla.mozilla.org/show_bug.cgi?id=625289


var Countdown = function Countdown(_ref2) {
  var autoDismissTimeout = _ref2.autoDismissTimeout,
      opacity = _ref2.opacity,
      isRunning = _ref2.isRunning,
      props = _objectWithoutProperties(_ref2, _excluded2);

  return (0, _react2.jsx)("div", _extends({
    className: "react-toast-notifications__toast__countdown",
    css: {
      animation: "".concat(shrinkKeyframes, " ").concat(autoDismissTimeout, "ms linear"),
      animationPlayState: isRunning ? 'running' : 'paused',
      backgroundColor: 'rgba(0,0,0,0.1)',
      bottom: 0,
      height: 0,
      left: 0,
      opacity: opacity,
      position: 'absolute',
      width: '100%'
    }
  }, props));
};

var Icon = function Icon(_ref3) {
  var appearance = _ref3.appearance,
      autoDismiss = _ref3.autoDismiss,
      autoDismissTimeout = _ref3.autoDismissTimeout,
      isRunning = _ref3.isRunning;
  var meta = appearances[appearance];
  var Glyph = meta.icon;
  return (0, _react2.jsx)("div", {
    className: "react-toast-notifications__toast__icon-wrapper",
    css: {
      backgroundColor: meta.fg,
      borderTopLeftRadius: borderRadius,
      borderBottomLeftRadius: borderRadius,
      color: meta.bg,
      flexShrink: 0,
      paddingBottom: gutter,
      paddingTop: gutter,
      position: 'relative',
      overflow: 'hidden',
      textAlign: 'center',
      width: 30
    }
  }, (0, _react2.jsx)(Countdown, {
    opacity: autoDismiss ? 1 : 0,
    autoDismissTimeout: autoDismissTimeout,
    isRunning: isRunning
  }), (0, _react2.jsx)(Glyph, {
    className: "react-toast-notifications__toast__icon",
    css: {
      position: 'relative',
      zIndex: 1
    }
  }));
}; // Transitions
// ------------------------------


function getTranslate(placement) {
  var pos = placement.split('-');
  var relevantPlacement = pos[1] === 'center' ? pos[0] : pos[1];
  var translateMap = {
    right: 'translate3d(120%, 0, 0)',
    left: 'translate3d(-120%, 0, 0)',
    bottom: 'translate3d(0, 120%, 0)',
    top: 'translate3d(0, -120%, 0)'
  };
  return translateMap[relevantPlacement];
}

var toastStates = function toastStates(placement) {
  return {
    entering: {
      transform: getTranslate(placement)
    },
    entered: {
      transform: 'translate3d(0,0,0)'
    },
    exiting: {
      transform: 'scale(0.66)',
      opacity: 0
    },
    exited: {
      transform: 'scale(0.66)',
      opacity: 0
    }
  };
};

var ToastElement = function ToastElement(_ref4) {
  var appearance = _ref4.appearance,
      placement = _ref4.placement,
      transitionDuration = _ref4.transitionDuration,
      transitionState = _ref4.transitionState,
      props = _objectWithoutProperties(_ref4, _excluded3);

  var _useState = (0, _react.useState)('auto'),
      _useState2 = _slicedToArray(_useState, 2),
      height = _useState2[0],
      setHeight = _useState2[1];

  var elementRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    if (transitionState === 'entered') {
      var el = elementRef.current;
      setHeight(el.offsetHeight + gutter);
    }

    if (transitionState === 'exiting') {
      setHeight(0);
    }
  }, [transitionState]);
  return (0, _react2.jsx)("div", {
    ref: elementRef,
    style: {
      height: height
    },
    css: {
      transition: "height ".concat(transitionDuration - 100, "ms 100ms")
    }
  }, (0, _react2.jsx)("div", _extends({
    className: "react-toast-notifications__toast react-toast-notifications__toast--".concat(appearance),
    css: _objectSpread({
      backgroundColor: appearances[appearance].bg,
      borderRadius: borderRadius,
      boxShadow: '0 3px 8px rgba(0, 0, 0, 0.175)',
      color: appearances[appearance].text,
      display: 'flex',
      marginBottom: gutter,
      maxWidth: '100%',
      transition: "transform ".concat(transitionDuration, "ms cubic-bezier(0.2, 0, 0, 1), opacity ").concat(transitionDuration, "ms"),
      width: toastWidth
    }, toastStates(placement)[transitionState])
  }, props)));
}; // ==============================
// DefaultToast
// ==============================


var DefaultToast = function DefaultToast(_ref5) {
  var _ref5$appearance = _ref5.appearance,
      appearance = _ref5$appearance === void 0 ? 'info' : _ref5$appearance,
      autoDismiss = _ref5.autoDismiss,
      autoDismissTimeout = _ref5.autoDismissTimeout,
      children = _ref5.children,
      isRunning = _ref5.isRunning,
      onDismiss = _ref5.onDismiss,
      placement = _ref5.placement,
      transitionDuration = _ref5.transitionDuration,
      transitionState = _ref5.transitionState,
      onMouseEnter = _ref5.onMouseEnter,
      onMouseLeave = _ref5.onMouseLeave,
      otherProps = _objectWithoutProperties(_ref5, _excluded4);

  return (0, _react2.jsx)(ToastElement, _extends({
    appearance: appearance,
    placement: placement,
    transitionState: transitionState,
    transitionDuration: transitionDuration,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave
  }, otherProps), (0, _react2.jsx)(Icon, {
    appearance: appearance,
    autoDismiss: autoDismiss,
    autoDismissTimeout: autoDismissTimeout,
    isRunning: isRunning
  }), (0, _react2.jsx)(Content, null, children), onDismiss ? (0, _react2.jsx)(Button, {
    onClick: onDismiss
  }, (0, _react2.jsx)(_icons.CloseIcon, {
    className: "react-toast-notifications__toast__dismiss-icon"
  }), (0, _react2.jsx)(A11yText, {
    className: "react-toast-notifications__toast__dismiss-text"
  }, "Close")) : null);
};

exports.DefaultToast = DefaultToast;
DefaultToast.defaultProps = {
  onDismiss: _utils.NOOP
};