"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToastContainer = void 0;

var _react = require("@emotion/react");

var _react2 = _interopRequireDefault(require("react"));

var _ToastElement = require("./ToastElement");

var _excluded = ["hasToasts", "placement"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var placements = {
  'top-left': {
    top: 0,
    left: 0
  },
  'top-center': {
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)'
  },
  'top-right': {
    top: 0,
    right: 0
  },
  'bottom-left': {
    bottom: 0,
    left: 0
  },
  'bottom-center': {
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)'
  },
  'bottom-right': {
    bottom: 0,
    right: 0
  }
};

var ToastContainer = function ToastContainer(_ref) {
  var hasToasts = _ref.hasToasts,
      placement = _ref.placement,
      props = _objectWithoutProperties(_ref, _excluded);

  return (0, _react.jsx)("div", _extends({
    className: "react-toast-notifications__container",
    css: _objectSpread({
      boxSizing: 'border-box',
      maxHeight: '100%',
      maxWidth: '100%',
      overflow: 'hidden',
      padding: _ToastElement.gutter,
      pointerEvents: hasToasts ? null : 'none',
      position: 'fixed',
      zIndex: 1000
    }, placements[placement])
  }, props));
};

exports.ToastContainer = ToastContainer;