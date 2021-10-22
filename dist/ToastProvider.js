"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withToastManager = exports.useToasts = exports.ToastProvider = exports.ToastConsumer = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

var _reactTransitionGroup = require("react-transition-group");

var _ToastController = require("./ToastController");

var _ToastContainer = require("./ToastContainer");

var _ToastElement = require("./ToastElement");

var _utils = require("./utils");

var _excluded = ["appearance", "autoDismiss", "content", "id", "onDismiss"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultComponents = {
  Toast: _ToastElement.DefaultToast,
  ToastContainer: _ToastContainer.ToastContainer
};

// $FlowFixMe `createContext`
var ToastContext = /*#__PURE__*/_react["default"].createContext();

var Consumer = ToastContext.Consumer,
    Provider = ToastContext.Provider;
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement); // Provider
// ==============================

var ToastProvider = /*#__PURE__*/function (_Component) {
  _inherits(ToastProvider, _Component);

  var _super = _createSuper(ToastProvider);

  function ToastProvider() {
    var _this;

    _classCallCheck(this, ToastProvider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      toasts: []
    });

    _defineProperty(_assertThisInitialized(_this), "has", function (id) {
      if (!_this.state.toasts.length) {
        return false;
      }

      return Boolean(_this.state.toasts.filter(function (t) {
        return t.id === id;
      }).length);
    });

    _defineProperty(_assertThisInitialized(_this), "onDismiss", function (id) {
      var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _utils.NOOP;
      return function () {
        cb(id);

        _this.remove(id);
      };
    });

    _defineProperty(_assertThisInitialized(_this), "add", function (content) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var cb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _utils.NOOP;
      var id = options.id ? options.id : (0, _utils.generateUEID)();

      var callback = function callback() {
        return cb(id);
      }; // bail if a toast exists with this ID


      if (_this.has(id)) {
        return;
      } // update the toast stack


      _this.setState(function (state) {
        var newToast = _objectSpread({
          content: content,
          id: id
        }, options);

        var toasts = _this.props.newestOnTop ? [newToast].concat(_toConsumableArray(state.toasts)) : [].concat(_toConsumableArray(state.toasts), [newToast]);
        return {
          toasts: toasts
        };
      }, callback); // consumer may want to do something with the generated ID (and not use the callback)


      return id;
    });

    _defineProperty(_assertThisInitialized(_this), "remove", function (id) {
      var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _utils.NOOP;

      var callback = function callback() {
        return cb(id);
      }; // bail if NO toasts exists with this ID


      if (!_this.has(id)) {
        return;
      }

      _this.setState(function (state) {
        var toasts = state.toasts.filter(function (t) {
          return t.id !== id;
        });
        return {
          toasts: toasts
        };
      }, callback);
    });

    _defineProperty(_assertThisInitialized(_this), "removeAll", function () {
      if (!_this.state.toasts.length) {
        return;
      }

      _this.state.toasts.forEach(function (t) {
        return _this.remove(t.id);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "update", function (id) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var cb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _utils.NOOP;

      var callback = function callback() {
        return cb(id);
      }; // bail if NO toasts exists with this ID


      if (!_this.has(id)) {
        return;
      } // update the toast stack


      _this.setState(function (state) {
        var old = state.toasts;
        var i = old.findIndex(function (t) {
          return t.id === id;
        });

        var updatedToast = _objectSpread(_objectSpread({}, old[i]), options);

        var toasts = [].concat(_toConsumableArray(old.slice(0, i)), [updatedToast], _toConsumableArray(old.slice(i + 1)));
        return {
          toasts: toasts
        };
      }, callback);
    });

    return _this;
  }

  _createClass(ToastProvider, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          inheritedAutoDismiss = _this$props.autoDismiss,
          autoDismissTimeout = _this$props.autoDismissTimeout,
          children = _this$props.children,
          components = _this$props.components,
          placement = _this$props.placement,
          portalTargetSelector = _this$props.portalTargetSelector,
          transitionDuration = _this$props.transitionDuration;

      var _defaultComponents$co = _objectSpread(_objectSpread({}, defaultComponents), components),
          Toast = _defaultComponents$co.Toast,
          ToastContainer = _defaultComponents$co.ToastContainer;

      var add = this.add,
          remove = this.remove,
          removeAll = this.removeAll,
          update = this.update;
      var toasts = Object.freeze(this.state.toasts);
      var hasToasts = Boolean(toasts.length);
      var portalTarget = canUseDOM ? portalTargetSelector ? document.querySelector(portalTargetSelector) : document.body : null; // appease flow

      return /*#__PURE__*/_react["default"].createElement(Provider, {
        value: {
          add: add,
          remove: remove,
          removeAll: removeAll,
          update: update,
          toasts: toasts
        }
      }, children, portalTarget ? /*#__PURE__*/(0, _reactDom.createPortal)( /*#__PURE__*/_react["default"].createElement(ToastContainer, {
        placement: placement,
        hasToasts: hasToasts
      }, /*#__PURE__*/_react["default"].createElement(_reactTransitionGroup.TransitionGroup, {
        component: null
      }, toasts.map(function (_ref) {
        var appearance = _ref.appearance,
            autoDismiss = _ref.autoDismiss,
            content = _ref.content,
            id = _ref.id,
            onDismiss = _ref.onDismiss,
            unknownConsumerProps = _objectWithoutProperties(_ref, _excluded);

        return /*#__PURE__*/_react["default"].createElement(_reactTransitionGroup.Transition, {
          appear: true,
          key: id,
          mountOnEnter: true,
          timeout: transitionDuration,
          unmountOnExit: true
        }, function (transitionState) {
          return /*#__PURE__*/_react["default"].createElement(_ToastController.ToastController, _extends({
            appearance: appearance,
            autoDismiss: autoDismiss !== undefined ? autoDismiss : inheritedAutoDismiss,
            autoDismissTimeout: autoDismissTimeout,
            component: Toast,
            key: id,
            onDismiss: _this2.onDismiss(id, onDismiss),
            placement: placement,
            transitionDuration: transitionDuration,
            transitionState: transitionState
          }, unknownConsumerProps), content);
        });
      }))), portalTarget) : /*#__PURE__*/_react["default"].createElement(ToastContainer, {
        placement: placement,
        hasToasts: hasToasts
      }) // keep ReactDOM.hydrate happy
      );
    }
  }]);

  return ToastProvider;
}(_react.Component);

exports.ToastProvider = ToastProvider;

_defineProperty(ToastProvider, "defaultProps", {
  autoDismiss: false,
  autoDismissTimeout: 5000,
  components: defaultComponents,
  newestOnTop: false,
  placement: 'top-right',
  transitionDuration: 220
});

var ToastConsumer = function ToastConsumer(_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/_react["default"].createElement(Consumer, null, function (context) {
    return children(context);
  });
};

exports.ToastConsumer = ToastConsumer;

var withToastManager = function withToastManager(Comp) {
  return (
    /*#__PURE__*/
    // $FlowFixMe `forwardRef`
    _react["default"].forwardRef(function (props, ref) {
      return /*#__PURE__*/_react["default"].createElement(ToastConsumer, null, function (context) {
        return /*#__PURE__*/_react["default"].createElement(Comp, _extends({
          toastManager: context
        }, props, {
          ref: ref
        }));
      });
    })
  );
};

exports.withToastManager = withToastManager;

var useToasts = function useToasts() {
  var ctx = (0, _react.useContext)(ToastContext);

  if (!ctx) {
    throw Error('The `useToasts` hook must be called from a descendent of the `ToastProvider`.');
  }

  return {
    addToast: ctx.add,
    removeToast: ctx.remove,
    removeAllToasts: ctx.removeAll,
    updateToast: ctx.update,
    toastStack: ctx.toasts
  };
};

exports.useToasts = useToasts;