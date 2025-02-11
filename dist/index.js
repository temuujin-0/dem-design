var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/classnames/index.js
var require_classnames = __commonJS({
  "node_modules/classnames/index.js"(exports, module) {
    (function() {
      "use strict";
      var hasOwn = {}.hasOwnProperty;
      function classNames9() {
        var classes = "";
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (arg) {
            classes = appendClass(classes, parseValue(arg));
          }
        }
        return classes;
      }
      function parseValue(arg) {
        if (typeof arg === "string" || typeof arg === "number") {
          return arg;
        }
        if (typeof arg !== "object") {
          return "";
        }
        if (Array.isArray(arg)) {
          return classNames9.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
          return arg.toString();
        }
        var classes = "";
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes = appendClass(classes, key);
          }
        }
        return classes;
      }
      function appendClass(value, newClass) {
        if (!newClass) {
          return value;
        }
        if (value) {
          return value + " " + newClass;
        }
        return value + newClass;
      }
      if (typeof module !== "undefined" && module.exports) {
        classNames9.default = classNames9;
        module.exports = classNames9;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames9;
        });
      } else {
        window.classNames = classNames9;
      }
    })();
  }
});

// node_modules/rc-util/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/rc-util/node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE2 = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_SERVER_CONTEXT_TYPE = Symbol.for("react.server_context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE2 || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_FRAGMENT_TYPE2:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                  case REACT_SUSPENSE_LIST_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_SERVER_CONTEXT_TYPE:
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element2 = REACT_ELEMENT_TYPE;
        var ForwardRef2 = REACT_FORWARD_REF_TYPE;
        var Fragment3 = REACT_FRAGMENT_TYPE2;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var SuspenseList = REACT_SUSPENSE_LIST_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        var hasWarnedAboutDeprecatedIsConcurrentMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isConcurrentMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
              hasWarnedAboutDeprecatedIsConcurrentMode = true;
              console["warn"]("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment2(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE2;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo2(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        function isSuspenseList(object) {
          return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
        }
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element2;
        exports.ForwardRef = ForwardRef2;
        exports.Fragment = Fragment3;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.SuspenseList = SuspenseList;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment2;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo2;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isSuspenseList = isSuspenseList;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/rc-util/node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/rc-util/node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  }
});

// node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development2 = __commonJS({
  "node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE2 = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE2 || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE2:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element2 = REACT_ELEMENT_TYPE;
        var ForwardRef2 = REACT_FORWARD_REF_TYPE;
        var Fragment3 = REACT_FRAGMENT_TYPE2;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment2(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE2;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo2(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element2;
        exports.ForwardRef = ForwardRef2;
        exports.Fragment = Fragment3;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment2;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo2;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/prop-types/node_modules/react-is/index.js
var require_react_is2 = __commonJS({
  "node_modules/prop-types/node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development2();
    }
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports, module) {
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    var ReactIs = require_react_is2();
    var assign2 = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement4, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement4(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign2({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement4(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports, module) {
    if (true) {
      ReactIs = require_react_is2();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// src/components/Tree.jsx
import React44, { useEffect as useEffect16, useState as useState11 } from "react";
import ReactDOM2 from "react-dom";

// node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}

// node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}

// node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

// node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}

// node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(e, r, t) {
  return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}

// node_modules/@babel/runtime/helpers/esm/objectSpread2.js
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}

// node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}

// node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}

// node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}

// node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

// node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// node_modules/@babel/runtime/helpers/esm/toConsumableArray.js
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}

// node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}

// node_modules/@babel/runtime/helpers/esm/createClass.js
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: false
  }), e;
}

// node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}

// node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, e2) {
    return t2.__proto__ = e2, t2;
  }, _setPrototypeOf(t, e);
}

// node_modules/@babel/runtime/helpers/esm/inherits.js
function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: true,
      configurable: true
    }
  }), Object.defineProperty(t, "prototype", {
    writable: false
  }), e && _setPrototypeOf(t, e);
}

// node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t2) {
    return t2.__proto__ || Object.getPrototypeOf(t2);
  }, _getPrototypeOf(t);
}

// node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct2() {
    return !!t;
  })();
}

// node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}

// node_modules/@babel/runtime/helpers/esm/createSuper.js
function _createSuper(t) {
  var r = _isNativeReflectConstruct();
  return function() {
    var e, o = _getPrototypeOf(t);
    if (r) {
      var s = _getPrototypeOf(this).constructor;
      e = Reflect.construct(o, arguments, s);
    } else e = o.apply(this, arguments);
    return _possibleConstructorReturn(this, e);
  };
}

// node_modules/rc-tree/es/Tree.js
var import_classnames8 = __toESM(require_classnames());

// node_modules/rc-util/es/KeyCode.js
var KeyCode = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,
  /**
   * BACKSPACE
   */
  BACKSPACE: 8,
  /**
   * TAB
   */
  TAB: 9,
  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,
  // NUMLOCK on FF/Safari Mac
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * SHIFT
   */
  SHIFT: 16,
  /**
   * CTRL
   */
  CTRL: 17,
  /**
   * ALT
   */
  ALT: 18,
  /**
   * PAUSE
   */
  PAUSE: 19,
  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,
  /**
   * ESC
   */
  ESC: 27,
  /**
   * SPACE
   */
  SPACE: 32,
  /**
   * PAGE_UP
   */
  PAGE_UP: 33,
  // also NUM_NORTH_EAST
  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,
  // also NUM_SOUTH_EAST
  /**
   * END
   */
  END: 35,
  // also NUM_SOUTH_WEST
  /**
   * HOME
   */
  HOME: 36,
  // also NUM_NORTH_WEST
  /**
   * LEFT
   */
  LEFT: 37,
  // also NUM_WEST
  /**
   * UP
   */
  UP: 38,
  // also NUM_NORTH
  /**
   * RIGHT
   */
  RIGHT: 39,
  // also NUM_EAST
  /**
   * DOWN
   */
  DOWN: 40,
  // also NUM_SOUTH
  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,
  /**
   * INSERT
   */
  INSERT: 45,
  // also NUM_INSERT
  /**
   * DELETE
   */
  DELETE: 46,
  // also NUM_DELETE
  /**
   * ZERO
   */
  ZERO: 48,
  /**
   * ONE
   */
  ONE: 49,
  /**
   * TWO
   */
  TWO: 50,
  /**
   * THREE
   */
  THREE: 51,
  /**
   * FOUR
   */
  FOUR: 52,
  /**
   * FIVE
   */
  FIVE: 53,
  /**
   * SIX
   */
  SIX: 54,
  /**
   * SEVEN
   */
  SEVEN: 55,
  /**
   * EIGHT
   */
  EIGHT: 56,
  /**
   * NINE
   */
  NINE: 57,
  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,
  // needs localization
  /**
   * A
   */
  A: 65,
  /**
   * B
   */
  B: 66,
  /**
   * C
   */
  C: 67,
  /**
   * D
   */
  D: 68,
  /**
   * E
   */
  E: 69,
  /**
   * F
   */
  F: 70,
  /**
   * G
   */
  G: 71,
  /**
   * H
   */
  H: 72,
  /**
   * I
   */
  I: 73,
  /**
   * J
   */
  J: 74,
  /**
   * K
   */
  K: 75,
  /**
   * L
   */
  L: 76,
  /**
   * M
   */
  M: 77,
  /**
   * N
   */
  N: 78,
  /**
   * O
   */
  O: 79,
  /**
   * P
   */
  P: 80,
  /**
   * Q
   */
  Q: 81,
  /**
   * R
   */
  R: 82,
  /**
   * S
   */
  S: 83,
  /**
   * T
   */
  T: 84,
  /**
   * U
   */
  U: 85,
  /**
   * V
   */
  V: 86,
  /**
   * W
   */
  W: 87,
  /**
   * X
   */
  X: 88,
  /**
   * Y
   */
  Y: 89,
  /**
   * Z
   */
  Z: 90,
  /**
   * META
   */
  META: 91,
  // WIN_KEY_LEFT
  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,
  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,
  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,
  /**
   * NUM_ONE
   */
  NUM_ONE: 97,
  /**
   * NUM_TWO
   */
  NUM_TWO: 98,
  /**
   * NUM_THREE
   */
  NUM_THREE: 99,
  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,
  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,
  /**
   * NUM_SIX
   */
  NUM_SIX: 102,
  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,
  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,
  /**
   * NUM_NINE
   */
  NUM_NINE: 105,
  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,
  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,
  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,
  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,
  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,
  /**
   * F1
   */
  F1: 112,
  /**
   * F2
   */
  F2: 113,
  /**
   * F3
   */
  F3: 114,
  /**
   * F4
   */
  F4: 115,
  /**
   * F5
   */
  F5: 116,
  /**
   * F6
   */
  F6: 117,
  /**
   * F7
   */
  F7: 118,
  /**
   * F8
   */
  F8: 119,
  /**
   * F9
   */
  F9: 120,
  /**
   * F10
   */
  F10: 121,
  /**
   * F11
   */
  F11: 122,
  /**
   * F12
   */
  F12: 123,
  /**
   * NUMLOCK
   */
  NUMLOCK: 144,
  /**
   * SEMICOLON
   */
  SEMICOLON: 186,
  // needs localization
  /**
   * DASH
   */
  DASH: 189,
  // needs localization
  /**
   * EQUALS
   */
  EQUALS: 187,
  // needs localization
  /**
   * COMMA
   */
  COMMA: 188,
  // needs localization
  /**
   * PERIOD
   */
  PERIOD: 190,
  // needs localization
  /**
   * SLASH
   */
  SLASH: 191,
  // needs localization
  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,
  // needs localization
  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,
  // needs localization
  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,
  // needs localization
  /**
   * BACKSLASH
   */
  BACKSLASH: 220,
  // needs localization
  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,
  // needs localization
  /**
   * WIN_KEY
   */
  WIN_KEY: 224,
  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,
  // Firefox (Gecko) fires this for the meta key instead of 91
  /**
   * WIN_IME
   */
  WIN_IME: 229,
  // ======================== Function ========================
  /**
   * whether text and modified key is entered at the same time.
   */
  isTextModifyingKeyEvent: function isTextModifyingKeyEvent(e) {
    var keyCode = e.keyCode;
    if (e.altKey && !e.ctrlKey || e.metaKey || // Function keys don't generate text
    keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
      return false;
    }
    switch (keyCode) {
      case KeyCode.ALT:
      case KeyCode.CAPS_LOCK:
      case KeyCode.CONTEXT_MENU:
      case KeyCode.CTRL:
      case KeyCode.DOWN:
      case KeyCode.END:
      case KeyCode.ESC:
      case KeyCode.HOME:
      case KeyCode.INSERT:
      case KeyCode.LEFT:
      case KeyCode.MAC_FF_META:
      case KeyCode.META:
      case KeyCode.NUMLOCK:
      case KeyCode.NUM_CENTER:
      case KeyCode.PAGE_DOWN:
      case KeyCode.PAGE_UP:
      case KeyCode.PAUSE:
      case KeyCode.PRINT_SCREEN:
      case KeyCode.RIGHT:
      case KeyCode.SHIFT:
      case KeyCode.UP:
      case KeyCode.WIN_KEY:
      case KeyCode.WIN_KEY_RIGHT:
        return false;
      default:
        return true;
    }
  },
  /**
   * whether character is entered.
   */
  isCharacterKey: function isCharacterKey(keyCode) {
    if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
      return true;
    }
    if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
      return true;
    }
    if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
      return true;
    }
    if (window.navigator.userAgent.indexOf("WebKit") !== -1 && keyCode === 0) {
      return true;
    }
    switch (keyCode) {
      case KeyCode.SPACE:
      case KeyCode.QUESTION_MARK:
      case KeyCode.NUM_PLUS:
      case KeyCode.NUM_MINUS:
      case KeyCode.NUM_PERIOD:
      case KeyCode.NUM_DIVISION:
      case KeyCode.SEMICOLON:
      case KeyCode.DASH:
      case KeyCode.EQUALS:
      case KeyCode.COMMA:
      case KeyCode.PERIOD:
      case KeyCode.SLASH:
      case KeyCode.APOSTROPHE:
      case KeyCode.SINGLE_QUOTE:
      case KeyCode.OPEN_SQUARE_BRACKET:
      case KeyCode.BACKSLASH:
      case KeyCode.CLOSE_SQUARE_BRACKET:
        return true;
      default:
        return false;
    }
  }
};
var KeyCode_default = KeyCode;

// node_modules/rc-util/es/pickAttrs.js
var attributes = "accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap";
var eventsName = "onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError";
var propList = "".concat(attributes, " ").concat(eventsName).split(/[\s\n]+/);
var ariaPrefix = "aria-";
var dataPrefix = "data-";
function match(key, prefix) {
  return key.indexOf(prefix) === 0;
}
function pickAttrs(props) {
  var ariaOnly = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var mergedConfig;
  if (ariaOnly === false) {
    mergedConfig = {
      aria: true,
      data: true,
      attr: true
    };
  } else if (ariaOnly === true) {
    mergedConfig = {
      aria: true
    };
  } else {
    mergedConfig = _objectSpread2({}, ariaOnly);
  }
  var attrs = {};
  Object.keys(props).forEach(function(key) {
    if (
      // Aria
      mergedConfig.aria && (key === "role" || match(key, ariaPrefix)) || // Data
      mergedConfig.data && match(key, dataPrefix) || // Attr
      mergedConfig.attr && propList.includes(key)
    ) {
      attrs[key] = props[key];
    }
  });
  return attrs;
}

// node_modules/rc-util/es/warning.js
var warned = {};
var preWarningFns = [];
var preMessage = function preMessage2(fn) {
  preWarningFns.push(fn);
};
function warning(valid, message) {
  if (!valid && console !== void 0) {
    var finalMessage = preWarningFns.reduce(function(msg, preMessageFn) {
      return preMessageFn(msg !== null && msg !== void 0 ? msg : "", "warning");
    }, message);
    if (finalMessage) {
      console.error("Warning: ".concat(finalMessage));
    }
  }
}
function note(valid, message) {
  if (!valid && console !== void 0) {
    var finalMessage = preWarningFns.reduce(function(msg, preMessageFn) {
      return preMessageFn(msg !== null && msg !== void 0 ? msg : "", "note");
    }, message);
    if (finalMessage) {
      console.warn("Note: ".concat(finalMessage));
    }
  }
}
function resetWarned() {
  warned = {};
}
function call(method, valid, message) {
  if (!valid && !warned[message]) {
    method(false, message);
    warned[message] = true;
  }
}
function warningOnce(valid, message) {
  call(warning, valid, message);
}
function noteOnce(valid, message) {
  call(note, valid, message);
}
warningOnce.preMessage = preMessage;
warningOnce.resetWarned = resetWarned;
warningOnce.noteOnce = noteOnce;
var warning_default = warningOnce;

// node_modules/rc-tree/es/Tree.js
import * as React38 from "react";

// node_modules/rc-tree/es/contextTypes.js
import * as React from "react";
var TreeContext = /* @__PURE__ */ React.createContext(null);
var UnstableContext = /* @__PURE__ */ React.createContext({});

// node_modules/rc-tree/es/DropIndicator.js
import React2 from "react";
var DropIndicator = function DropIndicator2(props) {
  var dropPosition = props.dropPosition, dropLevelOffset = props.dropLevelOffset, indent = props.indent;
  var style2 = {
    pointerEvents: "none",
    position: "absolute",
    right: 0,
    backgroundColor: "red",
    height: 2
  };
  switch (dropPosition) {
    case -1:
      style2.top = 0;
      style2.left = -dropLevelOffset * indent;
      break;
    case 1:
      style2.bottom = 0;
      style2.left = -dropLevelOffset * indent;
      break;
    case 0:
      style2.bottom = 0;
      style2.left = indent;
      break;
  }
  return /* @__PURE__ */ React2.createElement("div", {
    style: style2
  });
};
if (true) {
  DropIndicator.displayName = "DropIndicator";
}
var DropIndicator_default = DropIndicator;

// node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js
function _objectDestructuringEmpty(t) {
  if (null == t) throw new TypeError("Cannot destructure " + t);
}

// node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}

// node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = false;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}

// node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// node_modules/@babel/runtime/helpers/esm/slicedToArray.js
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}

// node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}

// node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o, r, i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}

// node_modules/rc-util/es/hooks/useLayoutEffect.js
import * as React3 from "react";

// node_modules/rc-util/es/Dom/canUseDom.js
function canUseDom() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}

// node_modules/rc-util/es/hooks/useLayoutEffect.js
var useInternalLayoutEffect = canUseDom() ? React3.useLayoutEffect : React3.useEffect;
var useLayoutEffect2 = function useLayoutEffect3(callback, deps) {
  var firstMountRef = React3.useRef(true);
  useInternalLayoutEffect(function() {
    return callback(firstMountRef.current);
  }, deps);
  useInternalLayoutEffect(function() {
    firstMountRef.current = false;
    return function() {
      firstMountRef.current = true;
    };
  }, []);
};
var useLayoutEffect_default = useLayoutEffect2;

// node_modules/rc-virtual-list/es/List.js
var import_classnames3 = __toESM(require_classnames());

// node_modules/rc-resize-observer/es/index.js
import * as React10 from "react";

// node_modules/rc-util/es/React/isFragment.js
var REACT_ELEMENT_TYPE_18 = Symbol.for("react.element");
var REACT_ELEMENT_TYPE_19 = Symbol.for("react.transitional.element");
var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
function isFragment(object) {
  return (
    // Base object type
    object && _typeof(object) === "object" && // React Element type
    (object.$$typeof === REACT_ELEMENT_TYPE_18 || object.$$typeof === REACT_ELEMENT_TYPE_19) && // React Fragment type
    object.type === REACT_FRAGMENT_TYPE
  );
}

// node_modules/rc-util/es/Children/toArray.js
import React4 from "react";
function toArray(children) {
  var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var ret = [];
  React4.Children.forEach(children, function(child) {
    if ((child === void 0 || child === null) && !option.keepEmpty) {
      return;
    }
    if (Array.isArray(child)) {
      ret = ret.concat(toArray(child));
    } else if (isFragment(child) && child.props) {
      ret = ret.concat(toArray(child.props.children, option));
    } else {
      ret.push(child);
    }
  });
  return ret;
}

// node_modules/rc-util/es/Dom/findDOMNode.js
import React5 from "react";
import ReactDOM from "react-dom";
function isDOM(node) {
  return node instanceof HTMLElement || node instanceof SVGElement;
}
function getDOM(node) {
  if (node && _typeof(node) === "object" && isDOM(node.nativeElement)) {
    return node.nativeElement;
  }
  if (isDOM(node)) {
    return node;
  }
  return null;
}
function findDOMNode(node) {
  var domNode = getDOM(node);
  if (domNode) {
    return domNode;
  }
  if (node instanceof React5.Component) {
    var _ReactDOM$findDOMNode;
    return (_ReactDOM$findDOMNode = ReactDOM.findDOMNode) === null || _ReactDOM$findDOMNode === void 0 ? void 0 : _ReactDOM$findDOMNode.call(ReactDOM, node);
  }
  return null;
}

// node_modules/rc-util/es/ref.js
var import_react_is = __toESM(require_react_is());
import { isValidElement, version } from "react";

// node_modules/rc-util/es/hooks/useMemo.js
import * as React6 from "react";
function useMemo(getValue, condition, shouldUpdate) {
  var cacheRef = React6.useRef({});
  if (!("value" in cacheRef.current) || shouldUpdate(cacheRef.current.condition, condition)) {
    cacheRef.current.value = getValue();
    cacheRef.current.condition = condition;
  }
  return cacheRef.current.value;
}

// node_modules/rc-util/es/ref.js
var ReactMajorVersion = Number(version.split(".")[0]);
var fillRef = function fillRef2(ref, node) {
  if (typeof ref === "function") {
    ref(node);
  } else if (_typeof(ref) === "object" && ref && "current" in ref) {
    ref.current = node;
  }
};
var composeRef = function composeRef2() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }
  var refList = refs.filter(Boolean);
  if (refList.length <= 1) {
    return refList[0];
  }
  return function(node) {
    refs.forEach(function(ref) {
      fillRef(ref, node);
    });
  };
};
var useComposeRef = function useComposeRef2() {
  for (var _len2 = arguments.length, refs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    refs[_key2] = arguments[_key2];
  }
  return useMemo(function() {
    return composeRef.apply(void 0, refs);
  }, refs, function(prev, next) {
    return prev.length !== next.length || prev.every(function(ref, i) {
      return ref !== next[i];
    });
  });
};
var supportRef = function supportRef2(nodeOrComponent) {
  var _type$prototype, _nodeOrComponent$prot;
  if (!nodeOrComponent) {
    return false;
  }
  if (isReactElement(nodeOrComponent) && ReactMajorVersion >= 19) {
    return true;
  }
  var type = (0, import_react_is.isMemo)(nodeOrComponent) ? nodeOrComponent.type.type : nodeOrComponent.type;
  if (typeof type === "function" && !((_type$prototype = type.prototype) !== null && _type$prototype !== void 0 && _type$prototype.render) && type.$$typeof !== import_react_is.ForwardRef) {
    return false;
  }
  if (typeof nodeOrComponent === "function" && !((_nodeOrComponent$prot = nodeOrComponent.prototype) !== null && _nodeOrComponent$prot !== void 0 && _nodeOrComponent$prot.render) && nodeOrComponent.$$typeof !== import_react_is.ForwardRef) {
    return false;
  }
  return true;
};
function isReactElement(node) {
  return /* @__PURE__ */ isValidElement(node) && !isFragment(node);
}
var getNodeRef = function getNodeRef2(node) {
  if (node && isReactElement(node)) {
    var ele = node;
    return ele.props.propertyIsEnumerable("ref") ? ele.props.ref : ele.ref;
  }
  return null;
};

// node_modules/rc-resize-observer/es/SingleObserver/index.js
import * as React9 from "react";

// node_modules/rc-resize-observer/es/Collection.js
import * as React7 from "react";
var CollectionContext = /* @__PURE__ */ React7.createContext(null);
function Collection(_ref) {
  var children = _ref.children, onBatchResize = _ref.onBatchResize;
  var resizeIdRef = React7.useRef(0);
  var resizeInfosRef = React7.useRef([]);
  var onCollectionResize = React7.useContext(CollectionContext);
  var onResize2 = React7.useCallback(function(size, element, data) {
    resizeIdRef.current += 1;
    var currentId = resizeIdRef.current;
    resizeInfosRef.current.push({
      size,
      element,
      data
    });
    Promise.resolve().then(function() {
      if (currentId === resizeIdRef.current) {
        onBatchResize === null || onBatchResize === void 0 || onBatchResize(resizeInfosRef.current);
        resizeInfosRef.current = [];
      }
    });
    onCollectionResize === null || onCollectionResize === void 0 || onCollectionResize(size, element, data);
  }, [onBatchResize, onCollectionResize]);
  return /* @__PURE__ */ React7.createElement(CollectionContext.Provider, {
    value: onResize2
  }, children);
}

// node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js
var MapShim = function() {
  if (typeof Map !== "undefined") {
    return Map;
  }
  function getIndex(arr, key) {
    var result = -1;
    arr.some(function(entry, index2) {
      if (entry[0] === key) {
        result = index2;
        return true;
      }
      return false;
    });
    return result;
  }
  return (
    /** @class */
    function() {
      function class_1() {
        this.__entries__ = [];
      }
      Object.defineProperty(class_1.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: true,
        configurable: true
      });
      class_1.prototype.get = function(key) {
        var index2 = getIndex(this.__entries__, key);
        var entry = this.__entries__[index2];
        return entry && entry[1];
      };
      class_1.prototype.set = function(key, value) {
        var index2 = getIndex(this.__entries__, key);
        if (~index2) {
          this.__entries__[index2][1] = value;
        } else {
          this.__entries__.push([key, value]);
        }
      };
      class_1.prototype.delete = function(key) {
        var entries = this.__entries__;
        var index2 = getIndex(entries, key);
        if (~index2) {
          entries.splice(index2, 1);
        }
      };
      class_1.prototype.has = function(key) {
        return !!~getIndex(this.__entries__, key);
      };
      class_1.prototype.clear = function() {
        this.__entries__.splice(0);
      };
      class_1.prototype.forEach = function(callback, ctx) {
        if (ctx === void 0) {
          ctx = null;
        }
        for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
          var entry = _a[_i];
          callback.call(ctx, entry[1], entry[0]);
        }
      };
      return class_1;
    }()
  );
}();
var isBrowser = typeof window !== "undefined" && typeof document !== "undefined" && window.document === document;
var global$1 = function() {
  if (typeof global !== "undefined" && global.Math === Math) {
    return global;
  }
  if (typeof self !== "undefined" && self.Math === Math) {
    return self;
  }
  if (typeof window !== "undefined" && window.Math === Math) {
    return window;
  }
  return Function("return this")();
}();
var requestAnimationFrame$1 = function() {
  if (typeof requestAnimationFrame === "function") {
    return requestAnimationFrame.bind(global$1);
  }
  return function(callback) {
    return setTimeout(function() {
      return callback(Date.now());
    }, 1e3 / 60);
  };
}();
var trailingTimeout = 2;
function throttle(callback, delay) {
  var leadingCall = false, trailingCall = false, lastCallTime = 0;
  function resolvePending() {
    if (leadingCall) {
      leadingCall = false;
      callback();
    }
    if (trailingCall) {
      proxy();
    }
  }
  function timeoutCallback() {
    requestAnimationFrame$1(resolvePending);
  }
  function proxy() {
    var timeStamp = Date.now();
    if (leadingCall) {
      if (timeStamp - lastCallTime < trailingTimeout) {
        return;
      }
      trailingCall = true;
    } else {
      leadingCall = true;
      trailingCall = false;
      setTimeout(timeoutCallback, delay);
    }
    lastCallTime = timeStamp;
  }
  return proxy;
}
var REFRESH_DELAY = 20;
var transitionKeys = ["top", "right", "bottom", "left", "width", "height", "size", "weight"];
var mutationObserverSupported = typeof MutationObserver !== "undefined";
var ResizeObserverController = (
  /** @class */
  function() {
    function ResizeObserverController2() {
      this.connected_ = false;
      this.mutationEventsAdded_ = false;
      this.mutationsObserver_ = null;
      this.observers_ = [];
      this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
      this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    ResizeObserverController2.prototype.addObserver = function(observer) {
      if (!~this.observers_.indexOf(observer)) {
        this.observers_.push(observer);
      }
      if (!this.connected_) {
        this.connect_();
      }
    };
    ResizeObserverController2.prototype.removeObserver = function(observer) {
      var observers2 = this.observers_;
      var index2 = observers2.indexOf(observer);
      if (~index2) {
        observers2.splice(index2, 1);
      }
      if (!observers2.length && this.connected_) {
        this.disconnect_();
      }
    };
    ResizeObserverController2.prototype.refresh = function() {
      var changesDetected = this.updateObservers_();
      if (changesDetected) {
        this.refresh();
      }
    };
    ResizeObserverController2.prototype.updateObservers_ = function() {
      var activeObservers = this.observers_.filter(function(observer) {
        return observer.gatherActive(), observer.hasActive();
      });
      activeObservers.forEach(function(observer) {
        return observer.broadcastActive();
      });
      return activeObservers.length > 0;
    };
    ResizeObserverController2.prototype.connect_ = function() {
      if (!isBrowser || this.connected_) {
        return;
      }
      document.addEventListener("transitionend", this.onTransitionEnd_);
      window.addEventListener("resize", this.refresh);
      if (mutationObserverSupported) {
        this.mutationsObserver_ = new MutationObserver(this.refresh);
        this.mutationsObserver_.observe(document, {
          attributes: true,
          childList: true,
          characterData: true,
          subtree: true
        });
      } else {
        document.addEventListener("DOMSubtreeModified", this.refresh);
        this.mutationEventsAdded_ = true;
      }
      this.connected_ = true;
    };
    ResizeObserverController2.prototype.disconnect_ = function() {
      if (!isBrowser || !this.connected_) {
        return;
      }
      document.removeEventListener("transitionend", this.onTransitionEnd_);
      window.removeEventListener("resize", this.refresh);
      if (this.mutationsObserver_) {
        this.mutationsObserver_.disconnect();
      }
      if (this.mutationEventsAdded_) {
        document.removeEventListener("DOMSubtreeModified", this.refresh);
      }
      this.mutationsObserver_ = null;
      this.mutationEventsAdded_ = false;
      this.connected_ = false;
    };
    ResizeObserverController2.prototype.onTransitionEnd_ = function(_a) {
      var _b = _a.propertyName, propertyName = _b === void 0 ? "" : _b;
      var isReflowProperty = transitionKeys.some(function(key) {
        return !!~propertyName.indexOf(key);
      });
      if (isReflowProperty) {
        this.refresh();
      }
    };
    ResizeObserverController2.getInstance = function() {
      if (!this.instance_) {
        this.instance_ = new ResizeObserverController2();
      }
      return this.instance_;
    };
    ResizeObserverController2.instance_ = null;
    return ResizeObserverController2;
  }()
);
var defineConfigurable = function(target, props) {
  for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
    var key = _a[_i];
    Object.defineProperty(target, key, {
      value: props[key],
      enumerable: false,
      writable: false,
      configurable: true
    });
  }
  return target;
};
var getWindowOf = function(target) {
  var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
  return ownerGlobal || global$1;
};
var emptyRect = createRectInit(0, 0, 0, 0);
function toFloat(value) {
  return parseFloat(value) || 0;
}
function getBordersSize(styles) {
  var positions = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    positions[_i - 1] = arguments[_i];
  }
  return positions.reduce(function(size, position) {
    var value = styles["border-" + position + "-width"];
    return size + toFloat(value);
  }, 0);
}
function getPaddings(styles) {
  var positions = ["top", "right", "bottom", "left"];
  var paddings = {};
  for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
    var position = positions_1[_i];
    var value = styles["padding-" + position];
    paddings[position] = toFloat(value);
  }
  return paddings;
}
function getSVGContentRect(target) {
  var bbox = target.getBBox();
  return createRectInit(0, 0, bbox.width, bbox.height);
}
function getHTMLElementContentRect(target) {
  var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
  if (!clientWidth && !clientHeight) {
    return emptyRect;
  }
  var styles = getWindowOf(target).getComputedStyle(target);
  var paddings = getPaddings(styles);
  var horizPad = paddings.left + paddings.right;
  var vertPad = paddings.top + paddings.bottom;
  var width = toFloat(styles.width), height = toFloat(styles.height);
  if (styles.boxSizing === "border-box") {
    if (Math.round(width + horizPad) !== clientWidth) {
      width -= getBordersSize(styles, "left", "right") + horizPad;
    }
    if (Math.round(height + vertPad) !== clientHeight) {
      height -= getBordersSize(styles, "top", "bottom") + vertPad;
    }
  }
  if (!isDocumentElement(target)) {
    var vertScrollbar = Math.round(width + horizPad) - clientWidth;
    var horizScrollbar = Math.round(height + vertPad) - clientHeight;
    if (Math.abs(vertScrollbar) !== 1) {
      width -= vertScrollbar;
    }
    if (Math.abs(horizScrollbar) !== 1) {
      height -= horizScrollbar;
    }
  }
  return createRectInit(paddings.left, paddings.top, width, height);
}
var isSVGGraphicsElement = function() {
  if (typeof SVGGraphicsElement !== "undefined") {
    return function(target) {
      return target instanceof getWindowOf(target).SVGGraphicsElement;
    };
  }
  return function(target) {
    return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === "function";
  };
}();
function isDocumentElement(target) {
  return target === getWindowOf(target).document.documentElement;
}
function getContentRect(target) {
  if (!isBrowser) {
    return emptyRect;
  }
  if (isSVGGraphicsElement(target)) {
    return getSVGContentRect(target);
  }
  return getHTMLElementContentRect(target);
}
function createReadOnlyRect(_a) {
  var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
  var Constr = typeof DOMRectReadOnly !== "undefined" ? DOMRectReadOnly : Object;
  var rect = Object.create(Constr.prototype);
  defineConfigurable(rect, {
    x,
    y,
    width,
    height,
    top: y,
    right: x + width,
    bottom: height + y,
    left: x
  });
  return rect;
}
function createRectInit(x, y, width, height) {
  return { x, y, width, height };
}
var ResizeObservation = (
  /** @class */
  function() {
    function ResizeObservation2(target) {
      this.broadcastWidth = 0;
      this.broadcastHeight = 0;
      this.contentRect_ = createRectInit(0, 0, 0, 0);
      this.target = target;
    }
    ResizeObservation2.prototype.isActive = function() {
      var rect = getContentRect(this.target);
      this.contentRect_ = rect;
      return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
    };
    ResizeObservation2.prototype.broadcastRect = function() {
      var rect = this.contentRect_;
      this.broadcastWidth = rect.width;
      this.broadcastHeight = rect.height;
      return rect;
    };
    return ResizeObservation2;
  }()
);
var ResizeObserverEntry = (
  /** @class */
  /* @__PURE__ */ function() {
    function ResizeObserverEntry2(target, rectInit) {
      var contentRect = createReadOnlyRect(rectInit);
      defineConfigurable(this, { target, contentRect });
    }
    return ResizeObserverEntry2;
  }()
);
var ResizeObserverSPI = (
  /** @class */
  function() {
    function ResizeObserverSPI2(callback, controller, callbackCtx) {
      this.activeObservations_ = [];
      this.observations_ = new MapShim();
      if (typeof callback !== "function") {
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      }
      this.callback_ = callback;
      this.controller_ = controller;
      this.callbackCtx_ = callbackCtx;
    }
    ResizeObserverSPI2.prototype.observe = function(target) {
      if (!arguments.length) {
        throw new TypeError("1 argument required, but only 0 present.");
      }
      if (typeof Element === "undefined" || !(Element instanceof Object)) {
        return;
      }
      if (!(target instanceof getWindowOf(target).Element)) {
        throw new TypeError('parameter 1 is not of type "Element".');
      }
      var observations = this.observations_;
      if (observations.has(target)) {
        return;
      }
      observations.set(target, new ResizeObservation(target));
      this.controller_.addObserver(this);
      this.controller_.refresh();
    };
    ResizeObserverSPI2.prototype.unobserve = function(target) {
      if (!arguments.length) {
        throw new TypeError("1 argument required, but only 0 present.");
      }
      if (typeof Element === "undefined" || !(Element instanceof Object)) {
        return;
      }
      if (!(target instanceof getWindowOf(target).Element)) {
        throw new TypeError('parameter 1 is not of type "Element".');
      }
      var observations = this.observations_;
      if (!observations.has(target)) {
        return;
      }
      observations.delete(target);
      if (!observations.size) {
        this.controller_.removeObserver(this);
      }
    };
    ResizeObserverSPI2.prototype.disconnect = function() {
      this.clearActive();
      this.observations_.clear();
      this.controller_.removeObserver(this);
    };
    ResizeObserverSPI2.prototype.gatherActive = function() {
      var _this = this;
      this.clearActive();
      this.observations_.forEach(function(observation) {
        if (observation.isActive()) {
          _this.activeObservations_.push(observation);
        }
      });
    };
    ResizeObserverSPI2.prototype.broadcastActive = function() {
      if (!this.hasActive()) {
        return;
      }
      var ctx = this.callbackCtx_;
      var entries = this.activeObservations_.map(function(observation) {
        return new ResizeObserverEntry(observation.target, observation.broadcastRect());
      });
      this.callback_.call(ctx, entries, ctx);
      this.clearActive();
    };
    ResizeObserverSPI2.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    };
    ResizeObserverSPI2.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI2;
  }()
);
var observers = typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : new MapShim();
var ResizeObserver = (
  /** @class */
  /* @__PURE__ */ function() {
    function ResizeObserver3(callback) {
      if (!(this instanceof ResizeObserver3)) {
        throw new TypeError("Cannot call a class as a function.");
      }
      if (!arguments.length) {
        throw new TypeError("1 argument required, but only 0 present.");
      }
      var controller = ResizeObserverController.getInstance();
      var observer = new ResizeObserverSPI(callback, controller, this);
      observers.set(this, observer);
    }
    return ResizeObserver3;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(method) {
  ResizeObserver.prototype[method] = function() {
    var _a;
    return (_a = observers.get(this))[method].apply(_a, arguments);
  };
});
var index = function() {
  if (typeof global$1.ResizeObserver !== "undefined") {
    return global$1.ResizeObserver;
  }
  return ResizeObserver;
}();
var ResizeObserver_es_default = index;

// node_modules/rc-resize-observer/es/utils/observerUtil.js
var elementListeners = /* @__PURE__ */ new Map();
function onResize(entities) {
  entities.forEach(function(entity) {
    var _elementListeners$get;
    var target = entity.target;
    (_elementListeners$get = elementListeners.get(target)) === null || _elementListeners$get === void 0 || _elementListeners$get.forEach(function(listener) {
      return listener(target);
    });
  });
}
var resizeObserver = new ResizeObserver_es_default(onResize);
function observe(element, callback) {
  if (!elementListeners.has(element)) {
    elementListeners.set(element, /* @__PURE__ */ new Set());
    resizeObserver.observe(element);
  }
  elementListeners.get(element).add(callback);
}
function unobserve(element, callback) {
  if (elementListeners.has(element)) {
    elementListeners.get(element).delete(callback);
    if (!elementListeners.get(element).size) {
      resizeObserver.unobserve(element);
      elementListeners.delete(element);
    }
  }
}

// node_modules/rc-resize-observer/es/SingleObserver/DomWrapper.js
import * as React8 from "react";
var DomWrapper = /* @__PURE__ */ function(_React$Component) {
  _inherits(DomWrapper3, _React$Component);
  var _super = _createSuper(DomWrapper3);
  function DomWrapper3() {
    _classCallCheck(this, DomWrapper3);
    return _super.apply(this, arguments);
  }
  _createClass(DomWrapper3, [{
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);
  return DomWrapper3;
}(React8.Component);

// node_modules/rc-resize-observer/es/SingleObserver/index.js
function SingleObserver(props, ref) {
  var children = props.children, disabled = props.disabled;
  var elementRef = React9.useRef(null);
  var wrapperRef = React9.useRef(null);
  var onCollectionResize = React9.useContext(CollectionContext);
  var isRenderProps = typeof children === "function";
  var mergedChildren = isRenderProps ? children(elementRef) : children;
  var sizeRef = React9.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  });
  var canRef = !isRenderProps && /* @__PURE__ */ React9.isValidElement(mergedChildren) && supportRef(mergedChildren);
  var originRef = canRef ? getNodeRef(mergedChildren) : null;
  var mergedRef = useComposeRef(originRef, elementRef);
  var getDom = function getDom2() {
    var _elementRef$current;
    return findDOMNode(elementRef.current) || // Support `nativeElement` format
    (elementRef.current && _typeof(elementRef.current) === "object" ? findDOMNode((_elementRef$current = elementRef.current) === null || _elementRef$current === void 0 ? void 0 : _elementRef$current.nativeElement) : null) || findDOMNode(wrapperRef.current);
  };
  React9.useImperativeHandle(ref, function() {
    return getDom();
  });
  var propsRef = React9.useRef(props);
  propsRef.current = props;
  var onInternalResize = React9.useCallback(function(target) {
    var _propsRef$current = propsRef.current, onResize2 = _propsRef$current.onResize, data = _propsRef$current.data;
    var _target$getBoundingCl = target.getBoundingClientRect(), width = _target$getBoundingCl.width, height = _target$getBoundingCl.height;
    var offsetWidth = target.offsetWidth, offsetHeight = target.offsetHeight;
    var fixedWidth = Math.floor(width);
    var fixedHeight = Math.floor(height);
    if (sizeRef.current.width !== fixedWidth || sizeRef.current.height !== fixedHeight || sizeRef.current.offsetWidth !== offsetWidth || sizeRef.current.offsetHeight !== offsetHeight) {
      var size = {
        width: fixedWidth,
        height: fixedHeight,
        offsetWidth,
        offsetHeight
      };
      sizeRef.current = size;
      var mergedOffsetWidth = offsetWidth === Math.round(width) ? width : offsetWidth;
      var mergedOffsetHeight = offsetHeight === Math.round(height) ? height : offsetHeight;
      var sizeInfo = _objectSpread2(_objectSpread2({}, size), {}, {
        offsetWidth: mergedOffsetWidth,
        offsetHeight: mergedOffsetHeight
      });
      onCollectionResize === null || onCollectionResize === void 0 || onCollectionResize(sizeInfo, target, data);
      if (onResize2) {
        Promise.resolve().then(function() {
          onResize2(sizeInfo, target);
        });
      }
    }
  }, []);
  React9.useEffect(function() {
    var currentElement = getDom();
    if (currentElement && !disabled) {
      observe(currentElement, onInternalResize);
    }
    return function() {
      return unobserve(currentElement, onInternalResize);
    };
  }, [elementRef.current, disabled]);
  return /* @__PURE__ */ React9.createElement(DomWrapper, {
    ref: wrapperRef
  }, canRef ? /* @__PURE__ */ React9.cloneElement(mergedChildren, {
    ref: mergedRef
  }) : mergedChildren);
}
var RefSingleObserver = /* @__PURE__ */ React9.forwardRef(SingleObserver);
if (true) {
  RefSingleObserver.displayName = "SingleObserver";
}
var SingleObserver_default = RefSingleObserver;

// node_modules/rc-resize-observer/es/index.js
var INTERNAL_PREFIX_KEY = "rc-observer-key";
function ResizeObserver2(props, ref) {
  var children = props.children;
  var childNodes = typeof children === "function" ? [children] : toArray(children);
  if (true) {
    if (childNodes.length > 1) {
      warning(false, "Find more than one child node with `children` in ResizeObserver. Please use ResizeObserver.Collection instead.");
    } else if (childNodes.length === 0) {
      warning(false, "`children` of ResizeObserver is empty. Nothing is in observe.");
    }
  }
  return childNodes.map(function(child, index2) {
    var key = (child === null || child === void 0 ? void 0 : child.key) || "".concat(INTERNAL_PREFIX_KEY, "-").concat(index2);
    return /* @__PURE__ */ React10.createElement(SingleObserver_default, _extends({}, props, {
      key,
      ref: index2 === 0 ? ref : void 0
    }), child);
  });
}
var RefResizeObserver = /* @__PURE__ */ React10.forwardRef(ResizeObserver2);
if (true) {
  RefResizeObserver.displayName = "ResizeObserver";
}
RefResizeObserver.Collection = Collection;
var es_default = RefResizeObserver;

// node_modules/rc-util/es/hooks/useEvent.js
import * as React11 from "react";
function useEvent(callback) {
  var fnRef = React11.useRef();
  fnRef.current = callback;
  var memoFn = React11.useCallback(function() {
    var _fnRef$current;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return (_fnRef$current = fnRef.current) === null || _fnRef$current === void 0 ? void 0 : _fnRef$current.call.apply(_fnRef$current, [fnRef].concat(args));
  }, []);
  return memoFn;
}

// node_modules/rc-util/es/hooks/useState.js
import * as React12 from "react";
function useSafeState(defaultValue) {
  var destroyRef = React12.useRef(false);
  var _React$useState = React12.useState(defaultValue), _React$useState2 = _slicedToArray(_React$useState, 2), value = _React$useState2[0], setValue = _React$useState2[1];
  React12.useEffect(function() {
    destroyRef.current = false;
    return function() {
      destroyRef.current = true;
    };
  }, []);
  function safeSetState(updater, ignoreDestroy) {
    if (ignoreDestroy && destroyRef.current) {
      return;
    }
    setValue(updater);
  }
  return [value, safeSetState];
}

// node_modules/rc-virtual-list/es/List.js
import * as React22 from "react";
import { useRef as useRef13, useState as useState7 } from "react";
import { flushSync } from "react-dom";

// node_modules/rc-virtual-list/es/Filler.js
import * as React13 from "react";
var import_classnames = __toESM(require_classnames());
var Filler = /* @__PURE__ */ React13.forwardRef(function(_ref, ref) {
  var height = _ref.height, offsetY = _ref.offsetY, offsetX = _ref.offsetX, children = _ref.children, prefixCls = _ref.prefixCls, onInnerResize = _ref.onInnerResize, innerProps = _ref.innerProps, rtl = _ref.rtl, extra = _ref.extra;
  var outerStyle = {};
  var innerStyle = {
    display: "flex",
    flexDirection: "column"
  };
  if (offsetY !== void 0) {
    outerStyle = {
      height,
      position: "relative",
      overflow: "hidden"
    };
    innerStyle = _objectSpread2(_objectSpread2({}, innerStyle), {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      transform: "translateY(".concat(offsetY, "px)")
    }, rtl ? "marginRight" : "marginLeft", -offsetX), "position", "absolute"), "left", 0), "right", 0), "top", 0));
  }
  return /* @__PURE__ */ React13.createElement("div", {
    style: outerStyle
  }, /* @__PURE__ */ React13.createElement(es_default, {
    onResize: function onResize2(_ref2) {
      var offsetHeight = _ref2.offsetHeight;
      if (offsetHeight && onInnerResize) {
        onInnerResize();
      }
    }
  }, /* @__PURE__ */ React13.createElement("div", _extends({
    style: innerStyle,
    className: (0, import_classnames.default)(_defineProperty({}, "".concat(prefixCls, "-holder-inner"), prefixCls)),
    ref
  }, innerProps), children, extra)));
});
Filler.displayName = "Filler";
var Filler_default = Filler;

// node_modules/rc-virtual-list/es/hooks/useChildren.js
import * as React15 from "react";

// node_modules/rc-virtual-list/es/Item.js
import * as React14 from "react";
function Item(_ref) {
  var children = _ref.children, setRef2 = _ref.setRef;
  var refFunc = React14.useCallback(function(node) {
    setRef2(node);
  }, []);
  return /* @__PURE__ */ React14.cloneElement(children, {
    ref: refFunc
  });
}

// node_modules/rc-virtual-list/es/hooks/useChildren.js
function useChildren(list, startIndex, endIndex, scrollWidth, offsetX, setNodeRef, renderFunc, _ref) {
  var getKey2 = _ref.getKey;
  return list.slice(startIndex, endIndex + 1).map(function(item, index2) {
    var eleIndex = startIndex + index2;
    var node = renderFunc(item, eleIndex, {
      style: {
        width: scrollWidth
      },
      offsetX
    });
    var key = getKey2(item);
    return /* @__PURE__ */ React15.createElement(Item, {
      key,
      setRef: function setRef2(ele) {
        return setNodeRef(item, ele);
      }
    }, node);
  });
}

// node_modules/rc-virtual-list/es/hooks/useDiffItem.js
import * as React16 from "react";

// node_modules/rc-virtual-list/es/utils/algorithmUtil.js
function findListDiffIndex(originList, targetList, getKey2) {
  var originLen = originList.length;
  var targetLen = targetList.length;
  var shortList;
  var longList;
  if (originLen === 0 && targetLen === 0) {
    return null;
  }
  if (originLen < targetLen) {
    shortList = originList;
    longList = targetList;
  } else {
    shortList = targetList;
    longList = originList;
  }
  var notExistKey = {
    __EMPTY_ITEM__: true
  };
  function getItemKey(item) {
    if (item !== void 0) {
      return getKey2(item);
    }
    return notExistKey;
  }
  var diffIndex = null;
  var multiple = Math.abs(originLen - targetLen) !== 1;
  for (var i = 0; i < longList.length; i += 1) {
    var shortKey = getItemKey(shortList[i]);
    var longKey = getItemKey(longList[i]);
    if (shortKey !== longKey) {
      diffIndex = i;
      multiple = multiple || shortKey !== getItemKey(longList[i + 1]);
      break;
    }
  }
  return diffIndex === null ? null : {
    index: diffIndex,
    multiple
  };
}

// node_modules/rc-virtual-list/es/hooks/useDiffItem.js
function useDiffItem(data, getKey2, onDiff) {
  var _React$useState = React16.useState(data), _React$useState2 = _slicedToArray(_React$useState, 2), prevData = _React$useState2[0], setPrevData = _React$useState2[1];
  var _React$useState3 = React16.useState(null), _React$useState4 = _slicedToArray(_React$useState3, 2), diffItem = _React$useState4[0], setDiffItem = _React$useState4[1];
  React16.useEffect(function() {
    var diff = findListDiffIndex(prevData || [], data || [], getKey2);
    if ((diff === null || diff === void 0 ? void 0 : diff.index) !== void 0) {
      onDiff === null || onDiff === void 0 || onDiff(diff.index);
      setDiffItem(data[diff.index]);
    }
    setPrevData(data);
  }, [data]);
  return [diffItem];
}

// node_modules/rc-util/es/raf.js
var raf = function raf2(callback) {
  return +setTimeout(callback, 16);
};
var caf = function caf2(num) {
  return clearTimeout(num);
};
if (typeof window !== "undefined" && "requestAnimationFrame" in window) {
  raf = function raf3(callback) {
    return window.requestAnimationFrame(callback);
  };
  caf = function caf3(handle) {
    return window.cancelAnimationFrame(handle);
  };
}
var rafUUID = 0;
var rafIds = /* @__PURE__ */ new Map();
function cleanup(id) {
  rafIds.delete(id);
}
var wrapperRaf = function wrapperRaf2(callback) {
  var times = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  rafUUID += 1;
  var id = rafUUID;
  function callRef(leftTimes) {
    if (leftTimes === 0) {
      cleanup(id);
      callback();
    } else {
      var realId = raf(function() {
        callRef(leftTimes - 1);
      });
      rafIds.set(id, realId);
    }
  }
  callRef(times);
  return id;
};
wrapperRaf.cancel = function(id) {
  var realId = rafIds.get(id);
  cleanup(id);
  return caf(realId);
};
if (true) {
  wrapperRaf.ids = function() {
    return rafIds;
  };
}
var raf_default = wrapperRaf;

// node_modules/rc-virtual-list/es/hooks/useFrameWheel.js
import { useRef as useRef8 } from "react";

// node_modules/rc-virtual-list/es/utils/isFirefox.js
var isFF = (typeof navigator === "undefined" ? "undefined" : _typeof(navigator)) === "object" && /Firefox/i.test(navigator.userAgent);
var isFirefox_default = isFF;

// node_modules/rc-virtual-list/es/hooks/useOriginScroll.js
import { useRef as useRef7 } from "react";
var useOriginScroll_default = function(isScrollAtTop, isScrollAtBottom, isScrollAtLeft, isScrollAtRight) {
  var lockRef = useRef7(false);
  var lockTimeoutRef = useRef7(null);
  function lockScroll() {
    clearTimeout(lockTimeoutRef.current);
    lockRef.current = true;
    lockTimeoutRef.current = setTimeout(function() {
      lockRef.current = false;
    }, 50);
  }
  var scrollPingRef = useRef7({
    top: isScrollAtTop,
    bottom: isScrollAtBottom,
    left: isScrollAtLeft,
    right: isScrollAtRight
  });
  scrollPingRef.current.top = isScrollAtTop;
  scrollPingRef.current.bottom = isScrollAtBottom;
  scrollPingRef.current.left = isScrollAtLeft;
  scrollPingRef.current.right = isScrollAtRight;
  return function(isHorizontal, delta) {
    var smoothOffset = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    var originScroll = isHorizontal ? (
      // Pass origin wheel when on the left
      delta < 0 && scrollPingRef.current.left || // Pass origin wheel when on the right
      delta > 0 && scrollPingRef.current.right
    ) : delta < 0 && scrollPingRef.current.top || // Pass origin wheel when on the bottom
    delta > 0 && scrollPingRef.current.bottom;
    if (smoothOffset && originScroll) {
      clearTimeout(lockTimeoutRef.current);
      lockRef.current = false;
    } else if (!originScroll || lockRef.current) {
      lockScroll();
    }
    return !lockRef.current && originScroll;
  };
};

// node_modules/rc-virtual-list/es/hooks/useFrameWheel.js
function useFrameWheel(inVirtual, isScrollAtTop, isScrollAtBottom, isScrollAtLeft, isScrollAtRight, horizontalScroll, onWheelDelta) {
  var offsetRef = useRef8(0);
  var nextFrameRef = useRef8(null);
  var wheelValueRef = useRef8(null);
  var isMouseScrollRef = useRef8(false);
  var originScroll = useOriginScroll_default(isScrollAtTop, isScrollAtBottom, isScrollAtLeft, isScrollAtRight);
  function onWheelY(e, deltaY) {
    raf_default.cancel(nextFrameRef.current);
    if (originScroll(false, deltaY)) return;
    var event = e;
    if (!event._virtualHandled) {
      event._virtualHandled = true;
    } else {
      return;
    }
    offsetRef.current += deltaY;
    wheelValueRef.current = deltaY;
    if (!isFirefox_default) {
      event.preventDefault();
    }
    nextFrameRef.current = raf_default(function() {
      var patchMultiple = isMouseScrollRef.current ? 10 : 1;
      onWheelDelta(offsetRef.current * patchMultiple, false);
      offsetRef.current = 0;
    });
  }
  function onWheelX(event, deltaX) {
    onWheelDelta(deltaX, true);
    if (!isFirefox_default) {
      event.preventDefault();
    }
  }
  var wheelDirectionRef = useRef8(null);
  var wheelDirectionCleanRef = useRef8(null);
  function onWheel(event) {
    if (!inVirtual) return;
    raf_default.cancel(wheelDirectionCleanRef.current);
    wheelDirectionCleanRef.current = raf_default(function() {
      wheelDirectionRef.current = null;
    }, 2);
    var deltaX = event.deltaX, deltaY = event.deltaY, shiftKey = event.shiftKey;
    var mergedDeltaX = deltaX;
    var mergedDeltaY = deltaY;
    if (wheelDirectionRef.current === "sx" || !wheelDirectionRef.current && (shiftKey || false) && deltaY && !deltaX) {
      mergedDeltaX = deltaY;
      mergedDeltaY = 0;
      wheelDirectionRef.current = "sx";
    }
    var absX = Math.abs(mergedDeltaX);
    var absY = Math.abs(mergedDeltaY);
    if (wheelDirectionRef.current === null) {
      wheelDirectionRef.current = horizontalScroll && absX > absY ? "x" : "y";
    }
    if (wheelDirectionRef.current === "y") {
      onWheelY(event, mergedDeltaY);
    } else {
      onWheelX(event, mergedDeltaX);
    }
  }
  function onFireFoxScroll(event) {
    if (!inVirtual) return;
    isMouseScrollRef.current = event.detail === wheelValueRef.current;
  }
  return [onWheel, onFireFoxScroll];
}

// node_modules/rc-virtual-list/es/hooks/useGetSize.js
import * as React17 from "react";
function useGetSize(mergedData, getKey2, heights, itemHeight) {
  var _React$useMemo = React17.useMemo(function() {
    return [/* @__PURE__ */ new Map(), []];
  }, [mergedData, heights.id, itemHeight]), _React$useMemo2 = _slicedToArray(_React$useMemo, 2), key2Index = _React$useMemo2[0], bottomList = _React$useMemo2[1];
  var getSize = function getSize2(startKey) {
    var endKey = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : startKey;
    var startIndex = key2Index.get(startKey);
    var endIndex = key2Index.get(endKey);
    if (startIndex === void 0 || endIndex === void 0) {
      var dataLen = mergedData.length;
      for (var i = bottomList.length; i < dataLen; i += 1) {
        var _heights$get;
        var item = mergedData[i];
        var key = getKey2(item);
        key2Index.set(key, i);
        var cacheHeight = (_heights$get = heights.get(key)) !== null && _heights$get !== void 0 ? _heights$get : itemHeight;
        bottomList[i] = (bottomList[i - 1] || 0) + cacheHeight;
        if (key === startKey) {
          startIndex = i;
        }
        if (key === endKey) {
          endIndex = i;
        }
        if (startIndex !== void 0 && endIndex !== void 0) {
          break;
        }
      }
    }
    return {
      top: bottomList[startIndex - 1] || 0,
      bottom: bottomList[endIndex]
    };
  };
  return getSize;
}

// node_modules/rc-virtual-list/es/hooks/useHeights.js
import * as React18 from "react";
import { useEffect as useEffect5, useRef as useRef9 } from "react";

// node_modules/rc-virtual-list/es/utils/CacheMap.js
var CacheMap = /* @__PURE__ */ function() {
  function CacheMap2() {
    _classCallCheck(this, CacheMap2);
    _defineProperty(this, "maps", void 0);
    _defineProperty(this, "id", 0);
    _defineProperty(this, "diffKeys", /* @__PURE__ */ new Set());
    this.maps = /* @__PURE__ */ Object.create(null);
  }
  _createClass(CacheMap2, [{
    key: "set",
    value: function set2(key, value) {
      this.maps[key] = value;
      this.id += 1;
      this.diffKeys.add(key);
    }
  }, {
    key: "get",
    value: function get2(key) {
      return this.maps[key];
    }
    /**
     * CacheMap will record the key changed.
     * To help to know what's update in the next render.
     */
  }, {
    key: "resetRecord",
    value: function resetRecord() {
      this.diffKeys.clear();
    }
  }, {
    key: "getRecord",
    value: function getRecord() {
      return this.diffKeys;
    }
  }]);
  return CacheMap2;
}();
var CacheMap_default = CacheMap;

// node_modules/rc-virtual-list/es/hooks/useHeights.js
function parseNumber(value) {
  var num = parseFloat(value);
  return isNaN(num) ? 0 : num;
}
function useHeights(getKey2, onItemAdd, onItemRemove) {
  var _React$useState = React18.useState(0), _React$useState2 = _slicedToArray(_React$useState, 2), updatedMark = _React$useState2[0], setUpdatedMark = _React$useState2[1];
  var instanceRef = useRef9(/* @__PURE__ */ new Map());
  var heightsRef = useRef9(new CacheMap_default());
  var promiseIdRef = useRef9(0);
  function cancelRaf() {
    promiseIdRef.current += 1;
  }
  function collectHeight() {
    var sync = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    cancelRaf();
    var doCollect = function doCollect2() {
      var changed = false;
      instanceRef.current.forEach(function(element, key) {
        if (element && element.offsetParent) {
          var htmlElement = findDOMNode(element);
          var offsetHeight = htmlElement.offsetHeight;
          var _getComputedStyle = getComputedStyle(htmlElement), marginTop = _getComputedStyle.marginTop, marginBottom = _getComputedStyle.marginBottom;
          var marginTopNum = parseNumber(marginTop);
          var marginBottomNum = parseNumber(marginBottom);
          var totalHeight = offsetHeight + marginTopNum + marginBottomNum;
          if (heightsRef.current.get(key) !== totalHeight) {
            heightsRef.current.set(key, totalHeight);
            changed = true;
          }
        }
      });
      if (changed) {
        setUpdatedMark(function(c) {
          return c + 1;
        });
      }
    };
    if (sync) {
      doCollect();
    } else {
      promiseIdRef.current += 1;
      var id = promiseIdRef.current;
      Promise.resolve().then(function() {
        if (id === promiseIdRef.current) {
          doCollect();
        }
      });
    }
  }
  function setInstanceRef(item, instance) {
    var key = getKey2(item);
    var origin = instanceRef.current.get(key);
    if (instance) {
      instanceRef.current.set(key, instance);
      collectHeight();
    } else {
      instanceRef.current.delete(key);
    }
    if (!origin !== !instance) {
      if (instance) {
        onItemAdd === null || onItemAdd === void 0 || onItemAdd(item);
      } else {
        onItemRemove === null || onItemRemove === void 0 || onItemRemove(item);
      }
    }
  }
  useEffect5(function() {
    return cancelRaf;
  }, []);
  return [setInstanceRef, collectHeight, heightsRef.current, updatedMark];
}

// node_modules/rc-virtual-list/es/hooks/useMobileTouchMove.js
import { useRef as useRef10 } from "react";
var SMOOTH_PTG = 14 / 15;
function useMobileTouchMove(inVirtual, listRef, callback) {
  var touchedRef = useRef10(false);
  var touchXRef = useRef10(0);
  var touchYRef = useRef10(0);
  var elementRef = useRef10(null);
  var intervalRef = useRef10(null);
  var cleanUpEvents;
  var onTouchMove = function onTouchMove2(e) {
    if (touchedRef.current) {
      var currentX = Math.ceil(e.touches[0].pageX);
      var currentY = Math.ceil(e.touches[0].pageY);
      var offsetX = touchXRef.current - currentX;
      var offsetY = touchYRef.current - currentY;
      var _isHorizontal = Math.abs(offsetX) > Math.abs(offsetY);
      if (_isHorizontal) {
        touchXRef.current = currentX;
      } else {
        touchYRef.current = currentY;
      }
      var scrollHandled = callback(_isHorizontal, _isHorizontal ? offsetX : offsetY, false, e);
      if (scrollHandled) {
        e.preventDefault();
      }
      clearInterval(intervalRef.current);
      if (scrollHandled) {
        intervalRef.current = setInterval(function() {
          if (_isHorizontal) {
            offsetX *= SMOOTH_PTG;
          } else {
            offsetY *= SMOOTH_PTG;
          }
          var offset = Math.floor(_isHorizontal ? offsetX : offsetY);
          if (!callback(_isHorizontal, offset, true) || Math.abs(offset) <= 0.1) {
            clearInterval(intervalRef.current);
          }
        }, 16);
      }
    }
  };
  var onTouchEnd = function onTouchEnd2() {
    touchedRef.current = false;
    cleanUpEvents();
  };
  var onTouchStart = function onTouchStart2(e) {
    cleanUpEvents();
    if (e.touches.length === 1 && !touchedRef.current) {
      touchedRef.current = true;
      touchXRef.current = Math.ceil(e.touches[0].pageX);
      touchYRef.current = Math.ceil(e.touches[0].pageY);
      elementRef.current = e.target;
      elementRef.current.addEventListener("touchmove", onTouchMove, {
        passive: false
      });
      elementRef.current.addEventListener("touchend", onTouchEnd, {
        passive: true
      });
    }
  };
  cleanUpEvents = function cleanUpEvents2() {
    if (elementRef.current) {
      elementRef.current.removeEventListener("touchmove", onTouchMove);
      elementRef.current.removeEventListener("touchend", onTouchEnd);
    }
  };
  useLayoutEffect_default(function() {
    if (inVirtual) {
      listRef.current.addEventListener("touchstart", onTouchStart, {
        passive: true
      });
    }
    return function() {
      var _listRef$current;
      (_listRef$current = listRef.current) === null || _listRef$current === void 0 || _listRef$current.removeEventListener("touchstart", onTouchStart);
      cleanUpEvents();
      clearInterval(intervalRef.current);
    };
  }, [inVirtual]);
}

// node_modules/rc-virtual-list/es/hooks/useScrollDrag.js
import * as React19 from "react";
function smoothScrollOffset(offset) {
  return Math.floor(Math.pow(offset, 0.5));
}
function getPageXY(e, horizontal) {
  var obj = "touches" in e ? e.touches[0] : e;
  return obj[horizontal ? "pageX" : "pageY"] - window[horizontal ? "scrollX" : "scrollY"];
}
function useScrollDrag(inVirtual, componentRef, onScrollOffset) {
  React19.useEffect(function() {
    var ele = componentRef.current;
    if (inVirtual && ele) {
      var mouseDownLock = false;
      var rafId;
      var _offset;
      var stopScroll = function stopScroll2() {
        raf_default.cancel(rafId);
      };
      var continueScroll = function continueScroll2() {
        stopScroll();
        rafId = raf_default(function() {
          onScrollOffset(_offset);
          continueScroll2();
        });
      };
      var onMouseDown = function onMouseDown2(e) {
        var event = e;
        if (!event._virtualHandled) {
          event._virtualHandled = true;
          mouseDownLock = true;
        }
      };
      var onMouseUp = function onMouseUp2() {
        mouseDownLock = false;
        stopScroll();
      };
      var onMouseMove = function onMouseMove2(e) {
        if (mouseDownLock) {
          var mouseY = getPageXY(e, false);
          var _ele$getBoundingClien = ele.getBoundingClientRect(), top = _ele$getBoundingClien.top, bottom = _ele$getBoundingClien.bottom;
          if (mouseY <= top) {
            var diff = top - mouseY;
            _offset = -smoothScrollOffset(diff);
            continueScroll();
          } else if (mouseY >= bottom) {
            var _diff = mouseY - bottom;
            _offset = smoothScrollOffset(_diff);
            continueScroll();
          } else {
            stopScroll();
          }
        }
      };
      ele.addEventListener("mousedown", onMouseDown);
      ele.ownerDocument.addEventListener("mouseup", onMouseUp);
      ele.ownerDocument.addEventListener("mousemove", onMouseMove);
      return function() {
        ele.removeEventListener("mousedown", onMouseDown);
        ele.ownerDocument.removeEventListener("mouseup", onMouseUp);
        ele.ownerDocument.removeEventListener("mousemove", onMouseMove);
        stopScroll();
      };
    }
  }, [inVirtual]);
}

// node_modules/rc-virtual-list/es/hooks/useScrollTo.js
import * as React20 from "react";
var MAX_TIMES = 10;
function useScrollTo(containerRef, data, heights, itemHeight, getKey2, collectHeight, syncScrollTop, triggerFlash) {
  var scrollRef = React20.useRef();
  var _React$useState = React20.useState(null), _React$useState2 = _slicedToArray(_React$useState, 2), syncState = _React$useState2[0], setSyncState = _React$useState2[1];
  useLayoutEffect_default(function() {
    if (syncState && syncState.times < MAX_TIMES) {
      if (!containerRef.current) {
        setSyncState(function(ori) {
          return _objectSpread2({}, ori);
        });
        return;
      }
      collectHeight();
      var targetAlign = syncState.targetAlign, originAlign = syncState.originAlign, index2 = syncState.index, offset = syncState.offset;
      var height = containerRef.current.clientHeight;
      var needCollectHeight = false;
      var newTargetAlign = targetAlign;
      var targetTop = null;
      if (height) {
        var mergedAlign = targetAlign || originAlign;
        var stackTop = 0;
        var itemTop = 0;
        var itemBottom = 0;
        var maxLen = Math.min(data.length - 1, index2);
        for (var i = 0; i <= maxLen; i += 1) {
          var key = getKey2(data[i]);
          itemTop = stackTop;
          var cacheHeight = heights.get(key);
          itemBottom = itemTop + (cacheHeight === void 0 ? itemHeight : cacheHeight);
          stackTop = itemBottom;
        }
        var leftHeight = mergedAlign === "top" ? offset : height - offset;
        for (var _i = maxLen; _i >= 0; _i -= 1) {
          var _key = getKey2(data[_i]);
          var _cacheHeight = heights.get(_key);
          if (_cacheHeight === void 0) {
            needCollectHeight = true;
            break;
          }
          leftHeight -= _cacheHeight;
          if (leftHeight <= 0) {
            break;
          }
        }
        switch (mergedAlign) {
          case "top":
            targetTop = itemTop - offset;
            break;
          case "bottom":
            targetTop = itemBottom - height + offset;
            break;
          default: {
            var scrollTop = containerRef.current.scrollTop;
            var scrollBottom = scrollTop + height;
            if (itemTop < scrollTop) {
              newTargetAlign = "top";
            } else if (itemBottom > scrollBottom) {
              newTargetAlign = "bottom";
            }
          }
        }
        if (targetTop !== null) {
          syncScrollTop(targetTop);
        }
        if (targetTop !== syncState.lastTop) {
          needCollectHeight = true;
        }
      }
      if (needCollectHeight) {
        setSyncState(_objectSpread2(_objectSpread2({}, syncState), {}, {
          times: syncState.times + 1,
          targetAlign: newTargetAlign,
          lastTop: targetTop
        }));
      }
    } else if ((syncState === null || syncState === void 0 ? void 0 : syncState.times) === MAX_TIMES) {
      warning_default(false, "Seems `scrollTo` with `rc-virtual-list` reach the max limitation. Please fire issue for us. Thanks.");
    }
  }, [syncState, containerRef.current]);
  return function(arg) {
    if (arg === null || arg === void 0) {
      triggerFlash();
      return;
    }
    raf_default.cancel(scrollRef.current);
    if (typeof arg === "number") {
      syncScrollTop(arg);
    } else if (arg && _typeof(arg) === "object") {
      var index2;
      var align = arg.align;
      if ("index" in arg) {
        index2 = arg.index;
      } else {
        index2 = data.findIndex(function(item) {
          return getKey2(item) === arg.key;
        });
      }
      var _arg$offset = arg.offset, offset = _arg$offset === void 0 ? 0 : _arg$offset;
      setSyncState({
        times: 0,
        index: index2,
        offset,
        originAlign: align
      });
    }
  };
}

// node_modules/rc-virtual-list/es/ScrollBar.js
var import_classnames2 = __toESM(require_classnames());
import * as React21 from "react";
var ScrollBar = /* @__PURE__ */ React21.forwardRef(function(props, ref) {
  var prefixCls = props.prefixCls, rtl = props.rtl, scrollOffset = props.scrollOffset, scrollRange = props.scrollRange, onStartMove = props.onStartMove, onStopMove = props.onStopMove, onScroll = props.onScroll, horizontal = props.horizontal, spinSize = props.spinSize, containerSize = props.containerSize, style2 = props.style, propsThumbStyle = props.thumbStyle, showScrollBar = props.showScrollBar;
  var _React$useState = React21.useState(false), _React$useState2 = _slicedToArray(_React$useState, 2), dragging = _React$useState2[0], setDragging = _React$useState2[1];
  var _React$useState3 = React21.useState(null), _React$useState4 = _slicedToArray(_React$useState3, 2), pageXY = _React$useState4[0], setPageXY = _React$useState4[1];
  var _React$useState5 = React21.useState(null), _React$useState6 = _slicedToArray(_React$useState5, 2), startTop = _React$useState6[0], setStartTop = _React$useState6[1];
  var isLTR = !rtl;
  var scrollbarRef = React21.useRef();
  var thumbRef = React21.useRef();
  var _React$useState7 = React21.useState(showScrollBar), _React$useState8 = _slicedToArray(_React$useState7, 2), visible = _React$useState8[0], setVisible = _React$useState8[1];
  var visibleTimeoutRef = React21.useRef();
  var delayHidden = function delayHidden2() {
    if (showScrollBar === true || showScrollBar === false) return;
    clearTimeout(visibleTimeoutRef.current);
    setVisible(true);
    visibleTimeoutRef.current = setTimeout(function() {
      setVisible(false);
    }, 3e3);
  };
  var enableScrollRange = scrollRange - containerSize || 0;
  var enableOffsetRange = containerSize - spinSize || 0;
  var top = React21.useMemo(function() {
    if (scrollOffset === 0 || enableScrollRange === 0) {
      return 0;
    }
    var ptg = scrollOffset / enableScrollRange;
    return ptg * enableOffsetRange;
  }, [scrollOffset, enableScrollRange, enableOffsetRange]);
  var onContainerMouseDown = function onContainerMouseDown2(e) {
    e.stopPropagation();
    e.preventDefault();
  };
  var stateRef = React21.useRef({
    top,
    dragging,
    pageY: pageXY,
    startTop
  });
  stateRef.current = {
    top,
    dragging,
    pageY: pageXY,
    startTop
  };
  var onThumbMouseDown = function onThumbMouseDown2(e) {
    setDragging(true);
    setPageXY(getPageXY(e, horizontal));
    setStartTop(stateRef.current.top);
    onStartMove();
    e.stopPropagation();
    e.preventDefault();
  };
  React21.useEffect(function() {
    var onScrollbarTouchStart = function onScrollbarTouchStart2(e) {
      e.preventDefault();
    };
    var scrollbarEle = scrollbarRef.current;
    var thumbEle = thumbRef.current;
    scrollbarEle.addEventListener("touchstart", onScrollbarTouchStart, {
      passive: false
    });
    thumbEle.addEventListener("touchstart", onThumbMouseDown, {
      passive: false
    });
    return function() {
      scrollbarEle.removeEventListener("touchstart", onScrollbarTouchStart);
      thumbEle.removeEventListener("touchstart", onThumbMouseDown);
    };
  }, []);
  var enableScrollRangeRef = React21.useRef();
  enableScrollRangeRef.current = enableScrollRange;
  var enableOffsetRangeRef = React21.useRef();
  enableOffsetRangeRef.current = enableOffsetRange;
  React21.useEffect(function() {
    if (dragging) {
      var moveRafId;
      var onMouseMove = function onMouseMove2(e) {
        var _stateRef$current = stateRef.current, stateDragging = _stateRef$current.dragging, statePageY = _stateRef$current.pageY, stateStartTop = _stateRef$current.startTop;
        raf_default.cancel(moveRafId);
        var rect = scrollbarRef.current.getBoundingClientRect();
        var scale = containerSize / (horizontal ? rect.width : rect.height);
        if (stateDragging) {
          var offset = (getPageXY(e, horizontal) - statePageY) * scale;
          var newTop = stateStartTop;
          if (!isLTR && horizontal) {
            newTop -= offset;
          } else {
            newTop += offset;
          }
          var tmpEnableScrollRange = enableScrollRangeRef.current;
          var tmpEnableOffsetRange = enableOffsetRangeRef.current;
          var ptg = tmpEnableOffsetRange ? newTop / tmpEnableOffsetRange : 0;
          var newScrollTop = Math.ceil(ptg * tmpEnableScrollRange);
          newScrollTop = Math.max(newScrollTop, 0);
          newScrollTop = Math.min(newScrollTop, tmpEnableScrollRange);
          moveRafId = raf_default(function() {
            onScroll(newScrollTop, horizontal);
          });
        }
      };
      var onMouseUp = function onMouseUp2() {
        setDragging(false);
        onStopMove();
      };
      window.addEventListener("mousemove", onMouseMove, {
        passive: true
      });
      window.addEventListener("touchmove", onMouseMove, {
        passive: true
      });
      window.addEventListener("mouseup", onMouseUp, {
        passive: true
      });
      window.addEventListener("touchend", onMouseUp, {
        passive: true
      });
      return function() {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("touchmove", onMouseMove);
        window.removeEventListener("mouseup", onMouseUp);
        window.removeEventListener("touchend", onMouseUp);
        raf_default.cancel(moveRafId);
      };
    }
  }, [dragging]);
  React21.useEffect(function() {
    delayHidden();
    return function() {
      clearTimeout(visibleTimeoutRef.current);
    };
  }, [scrollOffset]);
  React21.useImperativeHandle(ref, function() {
    return {
      delayHidden
    };
  });
  var scrollbarPrefixCls = "".concat(prefixCls, "-scrollbar");
  var containerStyle = {
    position: "absolute",
    visibility: visible ? null : "hidden"
  };
  var thumbStyle = {
    position: "absolute",
    background: "rgba(0, 0, 0, 0.5)",
    borderRadius: 99,
    cursor: "pointer",
    userSelect: "none"
  };
  if (horizontal) {
    containerStyle.height = 8;
    containerStyle.left = 0;
    containerStyle.right = 0;
    containerStyle.bottom = 0;
    thumbStyle.height = "100%";
    thumbStyle.width = spinSize;
    if (isLTR) {
      thumbStyle.left = top;
    } else {
      thumbStyle.right = top;
    }
  } else {
    containerStyle.width = 8;
    containerStyle.top = 0;
    containerStyle.bottom = 0;
    if (isLTR) {
      containerStyle.right = 0;
    } else {
      containerStyle.left = 0;
    }
    thumbStyle.width = "100%";
    thumbStyle.height = spinSize;
    thumbStyle.top = top;
  }
  return /* @__PURE__ */ React21.createElement("div", {
    ref: scrollbarRef,
    className: (0, import_classnames2.default)(scrollbarPrefixCls, _defineProperty(_defineProperty(_defineProperty({}, "".concat(scrollbarPrefixCls, "-horizontal"), horizontal), "".concat(scrollbarPrefixCls, "-vertical"), !horizontal), "".concat(scrollbarPrefixCls, "-visible"), visible)),
    style: _objectSpread2(_objectSpread2({}, containerStyle), style2),
    onMouseDown: onContainerMouseDown,
    onMouseMove: delayHidden
  }, /* @__PURE__ */ React21.createElement("div", {
    ref: thumbRef,
    className: (0, import_classnames2.default)("".concat(scrollbarPrefixCls, "-thumb"), _defineProperty({}, "".concat(scrollbarPrefixCls, "-thumb-moving"), dragging)),
    style: _objectSpread2(_objectSpread2({}, thumbStyle), propsThumbStyle),
    onMouseDown: onThumbMouseDown
  }));
});
if (true) {
  ScrollBar.displayName = "ScrollBar";
}
var ScrollBar_default = ScrollBar;

// node_modules/rc-virtual-list/es/utils/scrollbarUtil.js
var MIN_SIZE = 20;
function getSpinSize() {
  var containerSize = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
  var scrollRange = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var baseSize = containerSize / scrollRange * containerSize;
  if (isNaN(baseSize)) {
    baseSize = 0;
  }
  baseSize = Math.max(baseSize, MIN_SIZE);
  return Math.floor(baseSize);
}

// node_modules/rc-virtual-list/es/List.js
var _excluded = ["prefixCls", "className", "height", "itemHeight", "fullHeight", "style", "data", "children", "itemKey", "virtual", "direction", "scrollWidth", "component", "onScroll", "onVirtualScroll", "onVisibleChange", "innerProps", "extraRender", "styles", "showScrollBar"];
var EMPTY_DATA = [];
var ScrollStyle = {
  overflowY: "auto",
  overflowAnchor: "none"
};
function RawList(props, ref) {
  var _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-virtual-list" : _props$prefixCls, className = props.className, height = props.height, itemHeight = props.itemHeight, _props$fullHeight = props.fullHeight, fullHeight = _props$fullHeight === void 0 ? true : _props$fullHeight, style2 = props.style, data = props.data, children = props.children, itemKey2 = props.itemKey, virtual = props.virtual, direction = props.direction, scrollWidth = props.scrollWidth, _props$component = props.component, Component5 = _props$component === void 0 ? "div" : _props$component, onScroll = props.onScroll, onVirtualScroll = props.onVirtualScroll, onVisibleChange = props.onVisibleChange, innerProps = props.innerProps, extraRender = props.extraRender, styles = props.styles, _props$showScrollBar = props.showScrollBar, showScrollBar = _props$showScrollBar === void 0 ? "optional" : _props$showScrollBar, restProps = _objectWithoutProperties(props, _excluded);
  var getKey2 = React22.useCallback(function(item) {
    if (typeof itemKey2 === "function") {
      return itemKey2(item);
    }
    return item === null || item === void 0 ? void 0 : item[itemKey2];
  }, [itemKey2]);
  var _useHeights = useHeights(getKey2, null, null), _useHeights2 = _slicedToArray(_useHeights, 4), setInstanceRef = _useHeights2[0], collectHeight = _useHeights2[1], heights = _useHeights2[2], heightUpdatedMark = _useHeights2[3];
  var useVirtual = !!(virtual !== false && height && itemHeight);
  var containerHeight = React22.useMemo(function() {
    return Object.values(heights.maps).reduce(function(total, curr) {
      return total + curr;
    }, 0);
  }, [heights.id, heights.maps]);
  var inVirtual = useVirtual && data && (Math.max(itemHeight * data.length, containerHeight) > height || !!scrollWidth);
  var isRTL = direction === "rtl";
  var mergedClassName = (0, import_classnames3.default)(prefixCls, _defineProperty({}, "".concat(prefixCls, "-rtl"), isRTL), className);
  var mergedData = data || EMPTY_DATA;
  var componentRef = useRef13();
  var fillerInnerRef = useRef13();
  var containerRef = useRef13();
  var _useState = useState7(0), _useState2 = _slicedToArray(_useState, 2), offsetTop = _useState2[0], setOffsetTop = _useState2[1];
  var _useState3 = useState7(0), _useState4 = _slicedToArray(_useState3, 2), offsetLeft = _useState4[0], setOffsetLeft = _useState4[1];
  var _useState5 = useState7(false), _useState6 = _slicedToArray(_useState5, 2), scrollMoving = _useState6[0], setScrollMoving = _useState6[1];
  var onScrollbarStartMove = function onScrollbarStartMove2() {
    setScrollMoving(true);
  };
  var onScrollbarStopMove = function onScrollbarStopMove2() {
    setScrollMoving(false);
  };
  var sharedConfig = {
    getKey: getKey2
  };
  function syncScrollTop(newTop) {
    setOffsetTop(function(origin) {
      var value;
      if (typeof newTop === "function") {
        value = newTop(origin);
      } else {
        value = newTop;
      }
      var alignedTop = keepInRange(value);
      componentRef.current.scrollTop = alignedTop;
      return alignedTop;
    });
  }
  var rangeRef = useRef13({
    start: 0,
    end: mergedData.length
  });
  var diffItemRef = useRef13();
  var _useDiffItem = useDiffItem(mergedData, getKey2), _useDiffItem2 = _slicedToArray(_useDiffItem, 1), diffItem = _useDiffItem2[0];
  diffItemRef.current = diffItem;
  var _React$useMemo = React22.useMemo(function() {
    if (!useVirtual) {
      return {
        scrollHeight: void 0,
        start: 0,
        end: mergedData.length - 1,
        offset: void 0
      };
    }
    if (!inVirtual) {
      var _fillerInnerRef$curre;
      return {
        scrollHeight: ((_fillerInnerRef$curre = fillerInnerRef.current) === null || _fillerInnerRef$curre === void 0 ? void 0 : _fillerInnerRef$curre.offsetHeight) || 0,
        start: 0,
        end: mergedData.length - 1,
        offset: void 0
      };
    }
    var itemTop = 0;
    var startIndex;
    var startOffset;
    var endIndex;
    var dataLen = mergedData.length;
    for (var i = 0; i < dataLen; i += 1) {
      var _item = mergedData[i];
      var key = getKey2(_item);
      var cacheHeight = heights.get(key);
      var currentItemBottom = itemTop + (cacheHeight === void 0 ? itemHeight : cacheHeight);
      if (currentItemBottom >= offsetTop && startIndex === void 0) {
        startIndex = i;
        startOffset = itemTop;
      }
      if (currentItemBottom > offsetTop + height && endIndex === void 0) {
        endIndex = i;
      }
      itemTop = currentItemBottom;
    }
    if (startIndex === void 0) {
      startIndex = 0;
      startOffset = 0;
      endIndex = Math.ceil(height / itemHeight);
    }
    if (endIndex === void 0) {
      endIndex = mergedData.length - 1;
    }
    endIndex = Math.min(endIndex + 1, mergedData.length - 1);
    return {
      scrollHeight: itemTop,
      start: startIndex,
      end: endIndex,
      offset: startOffset
    };
  }, [inVirtual, useVirtual, offsetTop, mergedData, heightUpdatedMark, height]), scrollHeight = _React$useMemo.scrollHeight, start = _React$useMemo.start, end = _React$useMemo.end, fillerOffset = _React$useMemo.offset;
  rangeRef.current.start = start;
  rangeRef.current.end = end;
  React22.useLayoutEffect(function() {
    var changedRecord = heights.getRecord();
    if (changedRecord.size === 1) {
      var recordKey = Array.from(changedRecord)[0];
      var startIndexKey = getKey2(mergedData[start]);
      if (startIndexKey === recordKey) {
        var realStartHeight = heights.get(recordKey);
        var diffHeight = realStartHeight - itemHeight;
        syncScrollTop(function(ori) {
          return ori + diffHeight;
        });
      }
    }
    heights.resetRecord();
  }, [scrollHeight]);
  var _React$useState = React22.useState({
    width: 0,
    height
  }), _React$useState2 = _slicedToArray(_React$useState, 2), size = _React$useState2[0], setSize = _React$useState2[1];
  var onHolderResize = function onHolderResize2(sizeInfo) {
    setSize({
      width: sizeInfo.offsetWidth,
      height: sizeInfo.offsetHeight
    });
  };
  var verticalScrollBarRef = useRef13();
  var horizontalScrollBarRef = useRef13();
  var horizontalScrollBarSpinSize = React22.useMemo(function() {
    return getSpinSize(size.width, scrollWidth);
  }, [size.width, scrollWidth]);
  var verticalScrollBarSpinSize = React22.useMemo(function() {
    return getSpinSize(size.height, scrollHeight);
  }, [size.height, scrollHeight]);
  var maxScrollHeight = scrollHeight - height;
  var maxScrollHeightRef = useRef13(maxScrollHeight);
  maxScrollHeightRef.current = maxScrollHeight;
  function keepInRange(newScrollTop) {
    var newTop = newScrollTop;
    if (!Number.isNaN(maxScrollHeightRef.current)) {
      newTop = Math.min(newTop, maxScrollHeightRef.current);
    }
    newTop = Math.max(newTop, 0);
    return newTop;
  }
  var isScrollAtTop = offsetTop <= 0;
  var isScrollAtBottom = offsetTop >= maxScrollHeight;
  var isScrollAtLeft = offsetLeft <= 0;
  var isScrollAtRight = offsetLeft >= scrollWidth;
  var originScroll = useOriginScroll_default(isScrollAtTop, isScrollAtBottom, isScrollAtLeft, isScrollAtRight);
  var getVirtualScrollInfo = function getVirtualScrollInfo2() {
    return {
      x: isRTL ? -offsetLeft : offsetLeft,
      y: offsetTop
    };
  };
  var lastVirtualScrollInfoRef = useRef13(getVirtualScrollInfo());
  var triggerScroll = useEvent(function(params) {
    if (onVirtualScroll) {
      var nextInfo = _objectSpread2(_objectSpread2({}, getVirtualScrollInfo()), params);
      if (lastVirtualScrollInfoRef.current.x !== nextInfo.x || lastVirtualScrollInfoRef.current.y !== nextInfo.y) {
        onVirtualScroll(nextInfo);
        lastVirtualScrollInfoRef.current = nextInfo;
      }
    }
  });
  function onScrollBar(newScrollOffset, horizontal) {
    var newOffset = newScrollOffset;
    if (horizontal) {
      flushSync(function() {
        setOffsetLeft(newOffset);
      });
      triggerScroll();
    } else {
      syncScrollTop(newOffset);
    }
  }
  function onFallbackScroll(e) {
    var newScrollTop = e.currentTarget.scrollTop;
    if (newScrollTop !== offsetTop) {
      syncScrollTop(newScrollTop);
    }
    onScroll === null || onScroll === void 0 || onScroll(e);
    triggerScroll();
  }
  var keepInHorizontalRange = function keepInHorizontalRange2(nextOffsetLeft) {
    var tmpOffsetLeft = nextOffsetLeft;
    var max = !!scrollWidth ? scrollWidth - size.width : 0;
    tmpOffsetLeft = Math.max(tmpOffsetLeft, 0);
    tmpOffsetLeft = Math.min(tmpOffsetLeft, max);
    return tmpOffsetLeft;
  };
  var onWheelDelta = useEvent(function(offsetXY, fromHorizontal) {
    if (fromHorizontal) {
      flushSync(function() {
        setOffsetLeft(function(left) {
          var nextOffsetLeft = left + (isRTL ? -offsetXY : offsetXY);
          return keepInHorizontalRange(nextOffsetLeft);
        });
      });
      triggerScroll();
    } else {
      syncScrollTop(function(top) {
        var newTop = top + offsetXY;
        return newTop;
      });
    }
  });
  var _useFrameWheel = useFrameWheel(useVirtual, isScrollAtTop, isScrollAtBottom, isScrollAtLeft, isScrollAtRight, !!scrollWidth, onWheelDelta), _useFrameWheel2 = _slicedToArray(_useFrameWheel, 2), onRawWheel = _useFrameWheel2[0], onFireFoxScroll = _useFrameWheel2[1];
  useMobileTouchMove(useVirtual, componentRef, function(isHorizontal, delta, smoothOffset, e) {
    var event = e;
    if (originScroll(isHorizontal, delta, smoothOffset)) {
      return false;
    }
    if (!event || !event._virtualHandled) {
      if (event) {
        event._virtualHandled = true;
      }
      onRawWheel({
        preventDefault: function preventDefault() {
        },
        deltaX: isHorizontal ? delta : 0,
        deltaY: isHorizontal ? 0 : delta
      });
      return true;
    }
    return false;
  });
  useScrollDrag(inVirtual, componentRef, function(offset) {
    syncScrollTop(function(top) {
      return top + offset;
    });
  });
  useLayoutEffect_default(function() {
    function onMozMousePixelScroll(e) {
      var scrollingUpAtTop = isScrollAtTop && e.detail < 0;
      var scrollingDownAtBottom = isScrollAtBottom && e.detail > 0;
      if (useVirtual && !scrollingUpAtTop && !scrollingDownAtBottom) {
        e.preventDefault();
      }
    }
    var componentEle = componentRef.current;
    componentEle.addEventListener("wheel", onRawWheel, {
      passive: false
    });
    componentEle.addEventListener("DOMMouseScroll", onFireFoxScroll, {
      passive: true
    });
    componentEle.addEventListener("MozMousePixelScroll", onMozMousePixelScroll, {
      passive: false
    });
    return function() {
      componentEle.removeEventListener("wheel", onRawWheel);
      componentEle.removeEventListener("DOMMouseScroll", onFireFoxScroll);
      componentEle.removeEventListener("MozMousePixelScroll", onMozMousePixelScroll);
    };
  }, [useVirtual, isScrollAtTop, isScrollAtBottom]);
  useLayoutEffect_default(function() {
    if (scrollWidth) {
      var newOffsetLeft = keepInHorizontalRange(offsetLeft);
      setOffsetLeft(newOffsetLeft);
      triggerScroll({
        x: newOffsetLeft
      });
    }
  }, [size.width, scrollWidth]);
  var delayHideScrollBar = function delayHideScrollBar2() {
    var _verticalScrollBarRef, _horizontalScrollBarR;
    (_verticalScrollBarRef = verticalScrollBarRef.current) === null || _verticalScrollBarRef === void 0 || _verticalScrollBarRef.delayHidden();
    (_horizontalScrollBarR = horizontalScrollBarRef.current) === null || _horizontalScrollBarR === void 0 || _horizontalScrollBarR.delayHidden();
  };
  var _scrollTo = useScrollTo(componentRef, mergedData, heights, itemHeight, getKey2, function() {
    return collectHeight(true);
  }, syncScrollTop, delayHideScrollBar);
  React22.useImperativeHandle(ref, function() {
    return {
      nativeElement: containerRef.current,
      getScrollInfo: getVirtualScrollInfo,
      scrollTo: function scrollTo(config) {
        function isPosScroll(arg) {
          return arg && _typeof(arg) === "object" && ("left" in arg || "top" in arg);
        }
        if (isPosScroll(config)) {
          if (config.left !== void 0) {
            setOffsetLeft(keepInHorizontalRange(config.left));
          }
          _scrollTo(config.top);
        } else {
          _scrollTo(config);
        }
      }
    };
  });
  useLayoutEffect_default(function() {
    if (onVisibleChange) {
      var renderList = mergedData.slice(start, end + 1);
      onVisibleChange(renderList, mergedData);
    }
  }, [start, end, mergedData]);
  var getSize = useGetSize(mergedData, getKey2, heights, itemHeight);
  var extraContent = extraRender === null || extraRender === void 0 ? void 0 : extraRender({
    start,
    end,
    virtual: inVirtual,
    offsetX: offsetLeft,
    offsetY: fillerOffset,
    rtl: isRTL,
    getSize
  });
  var listChildren = useChildren(mergedData, start, end, scrollWidth, offsetLeft, setInstanceRef, children, sharedConfig);
  var componentStyle = null;
  if (height) {
    componentStyle = _objectSpread2(_defineProperty({}, fullHeight ? "height" : "maxHeight", height), ScrollStyle);
    if (useVirtual) {
      componentStyle.overflowY = "hidden";
      if (scrollWidth) {
        componentStyle.overflowX = "hidden";
      }
      if (scrollMoving) {
        componentStyle.pointerEvents = "none";
      }
    }
  }
  var containerProps = {};
  if (isRTL) {
    containerProps.dir = "rtl";
  }
  return /* @__PURE__ */ React22.createElement("div", _extends({
    ref: containerRef,
    style: _objectSpread2(_objectSpread2({}, style2), {}, {
      position: "relative"
    }),
    className: mergedClassName
  }, containerProps, restProps), /* @__PURE__ */ React22.createElement(es_default, {
    onResize: onHolderResize
  }, /* @__PURE__ */ React22.createElement(Component5, {
    className: "".concat(prefixCls, "-holder"),
    style: componentStyle,
    ref: componentRef,
    onScroll: onFallbackScroll,
    onMouseEnter: delayHideScrollBar
  }, /* @__PURE__ */ React22.createElement(Filler_default, {
    prefixCls,
    height: scrollHeight,
    offsetX: offsetLeft,
    offsetY: fillerOffset,
    scrollWidth,
    onInnerResize: collectHeight,
    ref: fillerInnerRef,
    innerProps,
    rtl: isRTL,
    extra: extraContent
  }, listChildren))), inVirtual && scrollHeight > height && /* @__PURE__ */ React22.createElement(ScrollBar_default, {
    ref: verticalScrollBarRef,
    prefixCls,
    scrollOffset: offsetTop,
    scrollRange: scrollHeight,
    rtl: isRTL,
    onScroll: onScrollBar,
    onStartMove: onScrollbarStartMove,
    onStopMove: onScrollbarStopMove,
    spinSize: verticalScrollBarSpinSize,
    containerSize: size.height,
    style: styles === null || styles === void 0 ? void 0 : styles.verticalScrollBar,
    thumbStyle: styles === null || styles === void 0 ? void 0 : styles.verticalScrollBarThumb,
    showScrollBar
  }), inVirtual && scrollWidth > size.width && /* @__PURE__ */ React22.createElement(ScrollBar_default, {
    ref: horizontalScrollBarRef,
    prefixCls,
    scrollOffset: offsetLeft,
    scrollRange: scrollWidth,
    rtl: isRTL,
    onScroll: onScrollBar,
    onStartMove: onScrollbarStartMove,
    onStopMove: onScrollbarStopMove,
    spinSize: horizontalScrollBarSpinSize,
    containerSize: size.width,
    horizontal: true,
    style: styles === null || styles === void 0 ? void 0 : styles.horizontalScrollBar,
    thumbStyle: styles === null || styles === void 0 ? void 0 : styles.horizontalScrollBarThumb,
    showScrollBar
  }));
}
var List = /* @__PURE__ */ React22.forwardRef(RawList);
List.displayName = "List";
var List_default = List;

// node_modules/rc-virtual-list/es/index.js
var es_default2 = List_default;

// node_modules/rc-tree/es/NodeList.js
import * as React36 from "react";

// node_modules/rc-tree/es/MotionTreeNode.js
var import_classnames7 = __toESM(require_classnames());

// node_modules/rc-motion/es/CSSMotion.js
var import_classnames4 = __toESM(require_classnames());
import * as React30 from "react";
import { useRef as useRef20 } from "react";

// node_modules/rc-motion/es/context.js
import * as React23 from "react";
var Context = /* @__PURE__ */ React23.createContext({});

// node_modules/rc-motion/es/DomWrapper.js
import * as React24 from "react";
var DomWrapper2 = /* @__PURE__ */ function(_React$Component) {
  _inherits(DomWrapper3, _React$Component);
  var _super = _createSuper(DomWrapper3);
  function DomWrapper3() {
    _classCallCheck(this, DomWrapper3);
    return _super.apply(this, arguments);
  }
  _createClass(DomWrapper3, [{
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);
  return DomWrapper3;
}(React24.Component);
var DomWrapper_default = DomWrapper2;

// node_modules/rc-util/es/hooks/useSyncState.js
import * as React25 from "react";
function useSyncState(defaultValue) {
  var _React$useReducer = React25.useReducer(function(x) {
    return x + 1;
  }, 0), _React$useReducer2 = _slicedToArray(_React$useReducer, 2), forceUpdate = _React$useReducer2[1];
  var currentValueRef = React25.useRef(defaultValue);
  var getValue = useEvent(function() {
    return currentValueRef.current;
  });
  var setValue = useEvent(function(updater) {
    currentValueRef.current = typeof updater === "function" ? updater(currentValueRef.current) : updater;
    forceUpdate();
  });
  return [getValue, setValue];
}

// node_modules/rc-motion/es/hooks/useStatus.js
import * as React29 from "react";
import { useEffect as useEffect12, useRef as useRef18 } from "react";

// node_modules/rc-motion/es/interface.js
var STATUS_NONE = "none";
var STATUS_APPEAR = "appear";
var STATUS_ENTER = "enter";
var STATUS_LEAVE = "leave";
var STEP_NONE = "none";
var STEP_PREPARE = "prepare";
var STEP_START = "start";
var STEP_ACTIVE = "active";
var STEP_ACTIVATED = "end";
var STEP_PREPARED = "prepared";

// node_modules/rc-motion/es/hooks/useDomMotionEvents.js
import * as React26 from "react";
import { useRef as useRef15 } from "react";

// node_modules/rc-motion/es/util/motion.js
function makePrefixMap(styleProp, eventName) {
  var prefixes = {};
  prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
  prefixes["Webkit".concat(styleProp)] = "webkit".concat(eventName);
  prefixes["Moz".concat(styleProp)] = "moz".concat(eventName);
  prefixes["ms".concat(styleProp)] = "MS".concat(eventName);
  prefixes["O".concat(styleProp)] = "o".concat(eventName.toLowerCase());
  return prefixes;
}
function getVendorPrefixes(domSupport, win) {
  var prefixes = {
    animationend: makePrefixMap("Animation", "AnimationEnd"),
    transitionend: makePrefixMap("Transition", "TransitionEnd")
  };
  if (domSupport) {
    if (!("AnimationEvent" in win)) {
      delete prefixes.animationend.animation;
    }
    if (!("TransitionEvent" in win)) {
      delete prefixes.transitionend.transition;
    }
  }
  return prefixes;
}
var vendorPrefixes = getVendorPrefixes(canUseDom(), typeof window !== "undefined" ? window : {});
var style = {};
if (canUseDom()) {
  _document$createEleme = document.createElement("div");
  style = _document$createEleme.style;
}
var _document$createEleme;
var prefixedEventNames = {};
function getVendorPrefixedEventName(eventName) {
  if (prefixedEventNames[eventName]) {
    return prefixedEventNames[eventName];
  }
  var prefixMap = vendorPrefixes[eventName];
  if (prefixMap) {
    var stylePropList = Object.keys(prefixMap);
    var len = stylePropList.length;
    for (var i = 0; i < len; i += 1) {
      var styleProp = stylePropList[i];
      if (Object.prototype.hasOwnProperty.call(prefixMap, styleProp) && styleProp in style) {
        prefixedEventNames[eventName] = prefixMap[styleProp];
        return prefixedEventNames[eventName];
      }
    }
  }
  return "";
}
var internalAnimationEndName = getVendorPrefixedEventName("animationend");
var internalTransitionEndName = getVendorPrefixedEventName("transitionend");
var supportTransition = !!(internalAnimationEndName && internalTransitionEndName);
var animationEndName = internalAnimationEndName || "animationend";
var transitionEndName = internalTransitionEndName || "transitionend";
function getTransitionName(transitionName, transitionType) {
  if (!transitionName) return null;
  if (_typeof(transitionName) === "object") {
    var type = transitionType.replace(/-\w/g, function(match2) {
      return match2[1].toUpperCase();
    });
    return transitionName[type];
  }
  return "".concat(transitionName, "-").concat(transitionType);
}

// node_modules/rc-motion/es/hooks/useDomMotionEvents.js
var useDomMotionEvents_default = function(onInternalMotionEnd) {
  var cacheElementRef = useRef15();
  function removeMotionEvents(element) {
    if (element) {
      element.removeEventListener(transitionEndName, onInternalMotionEnd);
      element.removeEventListener(animationEndName, onInternalMotionEnd);
    }
  }
  function patchMotionEvents(element) {
    if (cacheElementRef.current && cacheElementRef.current !== element) {
      removeMotionEvents(cacheElementRef.current);
    }
    if (element && element !== cacheElementRef.current) {
      element.addEventListener(transitionEndName, onInternalMotionEnd);
      element.addEventListener(animationEndName, onInternalMotionEnd);
      cacheElementRef.current = element;
    }
  }
  React26.useEffect(function() {
    return function() {
      removeMotionEvents(cacheElementRef.current);
    };
  }, []);
  return [patchMotionEvents, removeMotionEvents];
};

// node_modules/rc-motion/es/hooks/useIsomorphicLayoutEffect.js
import { useEffect as useEffect9, useLayoutEffect as useLayoutEffect5 } from "react";
var useIsomorphicLayoutEffect = canUseDom() ? useLayoutEffect5 : useEffect9;
var useIsomorphicLayoutEffect_default = useIsomorphicLayoutEffect;

// node_modules/rc-motion/es/hooks/useStepQueue.js
import * as React28 from "react";

// node_modules/rc-motion/es/hooks/useNextFrame.js
import * as React27 from "react";
var useNextFrame_default = function() {
  var nextFrameRef = React27.useRef(null);
  function cancelNextFrame() {
    raf_default.cancel(nextFrameRef.current);
  }
  function nextFrame(callback) {
    var delay = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    cancelNextFrame();
    var nextFrameId = raf_default(function() {
      if (delay <= 1) {
        callback({
          isCanceled: function isCanceled() {
            return nextFrameId !== nextFrameRef.current;
          }
        });
      } else {
        nextFrame(callback, delay - 1);
      }
    });
    nextFrameRef.current = nextFrameId;
  }
  React27.useEffect(function() {
    return function() {
      cancelNextFrame();
    };
  }, []);
  return [nextFrame, cancelNextFrame];
};

// node_modules/rc-motion/es/hooks/useStepQueue.js
var FULL_STEP_QUEUE = [STEP_PREPARE, STEP_START, STEP_ACTIVE, STEP_ACTIVATED];
var SIMPLE_STEP_QUEUE = [STEP_PREPARE, STEP_PREPARED];
var SkipStep = false;
var DoStep = true;
function isActive(step) {
  return step === STEP_ACTIVE || step === STEP_ACTIVATED;
}
var useStepQueue_default = function(status, prepareOnly, callback) {
  var _useState = useSafeState(STEP_NONE), _useState2 = _slicedToArray(_useState, 2), step = _useState2[0], setStep = _useState2[1];
  var _useNextFrame = useNextFrame_default(), _useNextFrame2 = _slicedToArray(_useNextFrame, 2), nextFrame = _useNextFrame2[0], cancelNextFrame = _useNextFrame2[1];
  function startQueue() {
    setStep(STEP_PREPARE, true);
  }
  var STEP_QUEUE = prepareOnly ? SIMPLE_STEP_QUEUE : FULL_STEP_QUEUE;
  useIsomorphicLayoutEffect_default(function() {
    if (step !== STEP_NONE && step !== STEP_ACTIVATED) {
      var index2 = STEP_QUEUE.indexOf(step);
      var nextStep = STEP_QUEUE[index2 + 1];
      var result = callback(step);
      if (result === SkipStep) {
        setStep(nextStep, true);
      } else if (nextStep) {
        nextFrame(function(info) {
          function doNext() {
            if (info.isCanceled()) return;
            setStep(nextStep, true);
          }
          if (result === true) {
            doNext();
          } else {
            Promise.resolve(result).then(doNext);
          }
        });
      }
    }
  }, [status, step]);
  React28.useEffect(function() {
    return function() {
      cancelNextFrame();
    };
  }, []);
  return [startQueue, step];
};

// node_modules/rc-motion/es/hooks/useStatus.js
function useStatus(supportMotion, visible, getElement, _ref) {
  var _ref$motionEnter = _ref.motionEnter, motionEnter = _ref$motionEnter === void 0 ? true : _ref$motionEnter, _ref$motionAppear = _ref.motionAppear, motionAppear = _ref$motionAppear === void 0 ? true : _ref$motionAppear, _ref$motionLeave = _ref.motionLeave, motionLeave = _ref$motionLeave === void 0 ? true : _ref$motionLeave, motionDeadline = _ref.motionDeadline, motionLeaveImmediately = _ref.motionLeaveImmediately, onAppearPrepare = _ref.onAppearPrepare, onEnterPrepare = _ref.onEnterPrepare, onLeavePrepare = _ref.onLeavePrepare, onAppearStart = _ref.onAppearStart, onEnterStart = _ref.onEnterStart, onLeaveStart = _ref.onLeaveStart, onAppearActive = _ref.onAppearActive, onEnterActive = _ref.onEnterActive, onLeaveActive = _ref.onLeaveActive, onAppearEnd = _ref.onAppearEnd, onEnterEnd = _ref.onEnterEnd, onLeaveEnd = _ref.onLeaveEnd, onVisibleChanged = _ref.onVisibleChanged;
  var _useState = useSafeState(), _useState2 = _slicedToArray(_useState, 2), asyncVisible = _useState2[0], setAsyncVisible = _useState2[1];
  var _useSyncState = useSyncState(STATUS_NONE), _useSyncState2 = _slicedToArray(_useSyncState, 2), getStatus = _useSyncState2[0], setStatus = _useSyncState2[1];
  var _useState3 = useSafeState(null), _useState4 = _slicedToArray(_useState3, 2), style2 = _useState4[0], setStyle = _useState4[1];
  var currentStatus = getStatus();
  var mountedRef = useRef18(false);
  var deadlineRef = useRef18(null);
  function getDomElement() {
    return getElement();
  }
  var activeRef = useRef18(false);
  function updateMotionEndStatus() {
    setStatus(STATUS_NONE);
    setStyle(null, true);
  }
  var onInternalMotionEnd = useEvent(function(event) {
    var status = getStatus();
    if (status === STATUS_NONE) {
      return;
    }
    var element = getDomElement();
    if (event && !event.deadline && event.target !== element) {
      return;
    }
    var currentActive = activeRef.current;
    var canEnd;
    if (status === STATUS_APPEAR && currentActive) {
      canEnd = onAppearEnd === null || onAppearEnd === void 0 ? void 0 : onAppearEnd(element, event);
    } else if (status === STATUS_ENTER && currentActive) {
      canEnd = onEnterEnd === null || onEnterEnd === void 0 ? void 0 : onEnterEnd(element, event);
    } else if (status === STATUS_LEAVE && currentActive) {
      canEnd = onLeaveEnd === null || onLeaveEnd === void 0 ? void 0 : onLeaveEnd(element, event);
    }
    if (currentActive && canEnd !== false) {
      updateMotionEndStatus();
    }
  });
  var _useDomMotionEvents = useDomMotionEvents_default(onInternalMotionEnd), _useDomMotionEvents2 = _slicedToArray(_useDomMotionEvents, 1), patchMotionEvents = _useDomMotionEvents2[0];
  var getEventHandlers = function getEventHandlers2(targetStatus) {
    switch (targetStatus) {
      case STATUS_APPEAR:
        return _defineProperty(_defineProperty(_defineProperty({}, STEP_PREPARE, onAppearPrepare), STEP_START, onAppearStart), STEP_ACTIVE, onAppearActive);
      case STATUS_ENTER:
        return _defineProperty(_defineProperty(_defineProperty({}, STEP_PREPARE, onEnterPrepare), STEP_START, onEnterStart), STEP_ACTIVE, onEnterActive);
      case STATUS_LEAVE:
        return _defineProperty(_defineProperty(_defineProperty({}, STEP_PREPARE, onLeavePrepare), STEP_START, onLeaveStart), STEP_ACTIVE, onLeaveActive);
      default:
        return {};
    }
  };
  var eventHandlers = React29.useMemo(function() {
    return getEventHandlers(currentStatus);
  }, [currentStatus]);
  var _useStepQueue = useStepQueue_default(currentStatus, !supportMotion, function(newStep) {
    if (newStep === STEP_PREPARE) {
      var onPrepare = eventHandlers[STEP_PREPARE];
      if (!onPrepare) {
        return SkipStep;
      }
      return onPrepare(getDomElement());
    }
    if (step in eventHandlers) {
      var _eventHandlers$step;
      setStyle(((_eventHandlers$step = eventHandlers[step]) === null || _eventHandlers$step === void 0 ? void 0 : _eventHandlers$step.call(eventHandlers, getDomElement(), null)) || null);
    }
    if (step === STEP_ACTIVE && currentStatus !== STATUS_NONE) {
      patchMotionEvents(getDomElement());
      if (motionDeadline > 0) {
        clearTimeout(deadlineRef.current);
        deadlineRef.current = setTimeout(function() {
          onInternalMotionEnd({
            deadline: true
          });
        }, motionDeadline);
      }
    }
    if (step === STEP_PREPARED) {
      updateMotionEndStatus();
    }
    return DoStep;
  }), _useStepQueue2 = _slicedToArray(_useStepQueue, 2), startStep = _useStepQueue2[0], step = _useStepQueue2[1];
  var active = isActive(step);
  activeRef.current = active;
  var visibleRef = useRef18(null);
  useIsomorphicLayoutEffect_default(function() {
    if (mountedRef.current && visibleRef.current === visible) {
      return;
    }
    setAsyncVisible(visible);
    var isMounted = mountedRef.current;
    mountedRef.current = true;
    var nextStatus;
    if (!isMounted && visible && motionAppear) {
      nextStatus = STATUS_APPEAR;
    }
    if (isMounted && visible && motionEnter) {
      nextStatus = STATUS_ENTER;
    }
    if (isMounted && !visible && motionLeave || !isMounted && motionLeaveImmediately && !visible && motionLeave) {
      nextStatus = STATUS_LEAVE;
    }
    var nextEventHandlers = getEventHandlers(nextStatus);
    if (nextStatus && (supportMotion || nextEventHandlers[STEP_PREPARE])) {
      setStatus(nextStatus);
      startStep();
    } else {
      setStatus(STATUS_NONE);
    }
    visibleRef.current = visible;
  }, [visible]);
  useEffect12(function() {
    if (
      // Cancel appear
      currentStatus === STATUS_APPEAR && !motionAppear || // Cancel enter
      currentStatus === STATUS_ENTER && !motionEnter || // Cancel leave
      currentStatus === STATUS_LEAVE && !motionLeave
    ) {
      setStatus(STATUS_NONE);
    }
  }, [motionAppear, motionEnter, motionLeave]);
  useEffect12(function() {
    return function() {
      mountedRef.current = false;
      clearTimeout(deadlineRef.current);
    };
  }, []);
  var firstMountChangeRef = React29.useRef(false);
  useEffect12(function() {
    if (asyncVisible) {
      firstMountChangeRef.current = true;
    }
    if (asyncVisible !== void 0 && currentStatus === STATUS_NONE) {
      if (firstMountChangeRef.current || asyncVisible) {
        onVisibleChanged === null || onVisibleChanged === void 0 || onVisibleChanged(asyncVisible);
      }
      firstMountChangeRef.current = true;
    }
  }, [asyncVisible, currentStatus]);
  var mergedStyle = style2;
  if (eventHandlers[STEP_PREPARE] && step === STEP_START) {
    mergedStyle = _objectSpread2({
      transition: "none"
    }, mergedStyle);
  }
  return [currentStatus, step, mergedStyle, asyncVisible !== null && asyncVisible !== void 0 ? asyncVisible : visible];
}

// node_modules/rc-motion/es/CSSMotion.js
function genCSSMotion(config) {
  var transitionSupport = config;
  if (_typeof(config) === "object") {
    transitionSupport = config.transitionSupport;
  }
  function isSupportTransition(props, contextMotion) {
    return !!(props.motionName && transitionSupport && contextMotion !== false);
  }
  var CSSMotion = /* @__PURE__ */ React30.forwardRef(function(props, ref) {
    var _props$visible = props.visible, visible = _props$visible === void 0 ? true : _props$visible, _props$removeOnLeave = props.removeOnLeave, removeOnLeave = _props$removeOnLeave === void 0 ? true : _props$removeOnLeave, forceRender = props.forceRender, children = props.children, motionName = props.motionName, leavedClassName = props.leavedClassName, eventProps = props.eventProps;
    var _React$useContext = React30.useContext(Context), contextMotion = _React$useContext.motion;
    var supportMotion = isSupportTransition(props, contextMotion);
    var nodeRef = useRef20();
    var wrapperNodeRef = useRef20();
    function getDomElement() {
      try {
        return nodeRef.current instanceof HTMLElement ? nodeRef.current : findDOMNode(wrapperNodeRef.current);
      } catch (e) {
        return null;
      }
    }
    var _useStatus = useStatus(supportMotion, visible, getDomElement, props), _useStatus2 = _slicedToArray(_useStatus, 4), status = _useStatus2[0], statusStep = _useStatus2[1], statusStyle = _useStatus2[2], mergedVisible = _useStatus2[3];
    var renderedRef = React30.useRef(mergedVisible);
    if (mergedVisible) {
      renderedRef.current = true;
    }
    var setNodeRef = React30.useCallback(function(node) {
      nodeRef.current = node;
      fillRef(ref, node);
    }, [ref]);
    var motionChildren;
    var mergedProps = _objectSpread2(_objectSpread2({}, eventProps), {}, {
      visible
    });
    if (!children) {
      motionChildren = null;
    } else if (status === STATUS_NONE) {
      if (mergedVisible) {
        motionChildren = children(_objectSpread2({}, mergedProps), setNodeRef);
      } else if (!removeOnLeave && renderedRef.current && leavedClassName) {
        motionChildren = children(_objectSpread2(_objectSpread2({}, mergedProps), {}, {
          className: leavedClassName
        }), setNodeRef);
      } else if (forceRender || !removeOnLeave && !leavedClassName) {
        motionChildren = children(_objectSpread2(_objectSpread2({}, mergedProps), {}, {
          style: {
            display: "none"
          }
        }), setNodeRef);
      } else {
        motionChildren = null;
      }
    } else {
      var statusSuffix;
      if (statusStep === STEP_PREPARE) {
        statusSuffix = "prepare";
      } else if (isActive(statusStep)) {
        statusSuffix = "active";
      } else if (statusStep === STEP_START) {
        statusSuffix = "start";
      }
      var motionCls = getTransitionName(motionName, "".concat(status, "-").concat(statusSuffix));
      motionChildren = children(_objectSpread2(_objectSpread2({}, mergedProps), {}, {
        className: (0, import_classnames4.default)(getTransitionName(motionName, status), _defineProperty(_defineProperty({}, motionCls, motionCls && statusSuffix), motionName, typeof motionName === "string")),
        style: statusStyle
      }), setNodeRef);
    }
    if (/* @__PURE__ */ React30.isValidElement(motionChildren) && supportRef(motionChildren)) {
      var originNodeRef = getNodeRef(motionChildren);
      if (!originNodeRef) {
        motionChildren = /* @__PURE__ */ React30.cloneElement(motionChildren, {
          ref: setNodeRef
        });
      }
    }
    return /* @__PURE__ */ React30.createElement(DomWrapper_default, {
      ref: wrapperNodeRef
    }, motionChildren);
  });
  CSSMotion.displayName = "CSSMotion";
  return CSSMotion;
}
var CSSMotion_default = genCSSMotion(supportTransition);

// node_modules/rc-motion/es/CSSMotionList.js
import * as React31 from "react";

// node_modules/rc-motion/es/util/diff.js
var STATUS_ADD = "add";
var STATUS_KEEP = "keep";
var STATUS_REMOVE = "remove";
var STATUS_REMOVED = "removed";
function wrapKeyToObject(key) {
  var keyObj;
  if (key && _typeof(key) === "object" && "key" in key) {
    keyObj = key;
  } else {
    keyObj = {
      key
    };
  }
  return _objectSpread2(_objectSpread2({}, keyObj), {}, {
    key: String(keyObj.key)
  });
}
function parseKeys() {
  var keys = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return keys.map(wrapKeyToObject);
}
function diffKeys() {
  var prevKeys = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  var currentKeys = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  var list = [];
  var currentIndex = 0;
  var currentLen = currentKeys.length;
  var prevKeyObjects = parseKeys(prevKeys);
  var currentKeyObjects = parseKeys(currentKeys);
  prevKeyObjects.forEach(function(keyObj) {
    var hit = false;
    for (var i = currentIndex; i < currentLen; i += 1) {
      var currentKeyObj = currentKeyObjects[i];
      if (currentKeyObj.key === keyObj.key) {
        if (currentIndex < i) {
          list = list.concat(currentKeyObjects.slice(currentIndex, i).map(function(obj) {
            return _objectSpread2(_objectSpread2({}, obj), {}, {
              status: STATUS_ADD
            });
          }));
          currentIndex = i;
        }
        list.push(_objectSpread2(_objectSpread2({}, currentKeyObj), {}, {
          status: STATUS_KEEP
        }));
        currentIndex += 1;
        hit = true;
        break;
      }
    }
    if (!hit) {
      list.push(_objectSpread2(_objectSpread2({}, keyObj), {}, {
        status: STATUS_REMOVE
      }));
    }
  });
  if (currentIndex < currentLen) {
    list = list.concat(currentKeyObjects.slice(currentIndex).map(function(obj) {
      return _objectSpread2(_objectSpread2({}, obj), {}, {
        status: STATUS_ADD
      });
    }));
  }
  var keys = {};
  list.forEach(function(_ref) {
    var key = _ref.key;
    keys[key] = (keys[key] || 0) + 1;
  });
  var duplicatedKeys = Object.keys(keys).filter(function(key) {
    return keys[key] > 1;
  });
  duplicatedKeys.forEach(function(matchKey) {
    list = list.filter(function(_ref2) {
      var key = _ref2.key, status = _ref2.status;
      return key !== matchKey || status !== STATUS_REMOVE;
    });
    list.forEach(function(node) {
      if (node.key === matchKey) {
        node.status = STATUS_KEEP;
      }
    });
  });
  return list;
}

// node_modules/rc-motion/es/CSSMotionList.js
var _excluded2 = ["component", "children", "onVisibleChanged", "onAllRemoved"];
var _excluded22 = ["status"];
var MOTION_PROP_NAMES = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function genCSSMotionList(transitionSupport) {
  var CSSMotion = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : CSSMotion_default;
  var CSSMotionList = /* @__PURE__ */ function(_React$Component) {
    _inherits(CSSMotionList2, _React$Component);
    var _super = _createSuper(CSSMotionList2);
    function CSSMotionList2() {
      var _this;
      _classCallCheck(this, CSSMotionList2);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _defineProperty(_assertThisInitialized(_this), "state", {
        keyEntities: []
      });
      _defineProperty(_assertThisInitialized(_this), "removeKey", function(removeKey) {
        _this.setState(function(prevState) {
          var nextKeyEntities = prevState.keyEntities.map(function(entity) {
            if (entity.key !== removeKey) return entity;
            return _objectSpread2(_objectSpread2({}, entity), {}, {
              status: STATUS_REMOVED
            });
          });
          return {
            keyEntities: nextKeyEntities
          };
        }, function() {
          var keyEntities = _this.state.keyEntities;
          var restKeysCount = keyEntities.filter(function(_ref) {
            var status = _ref.status;
            return status !== STATUS_REMOVED;
          }).length;
          if (restKeysCount === 0 && _this.props.onAllRemoved) {
            _this.props.onAllRemoved();
          }
        });
      });
      return _this;
    }
    _createClass(CSSMotionList2, [{
      key: "render",
      value: function render() {
        var _this2 = this;
        var keyEntities = this.state.keyEntities;
        var _this$props = this.props, component = _this$props.component, children = _this$props.children, _onVisibleChanged = _this$props.onVisibleChanged, onAllRemoved = _this$props.onAllRemoved, restProps = _objectWithoutProperties(_this$props, _excluded2);
        var Component5 = component || React31.Fragment;
        var motionProps = {};
        MOTION_PROP_NAMES.forEach(function(prop) {
          motionProps[prop] = restProps[prop];
          delete restProps[prop];
        });
        delete restProps.keys;
        return /* @__PURE__ */ React31.createElement(Component5, restProps, keyEntities.map(function(_ref2, index2) {
          var status = _ref2.status, eventProps = _objectWithoutProperties(_ref2, _excluded22);
          var visible = status === STATUS_ADD || status === STATUS_KEEP;
          return /* @__PURE__ */ React31.createElement(CSSMotion, _extends({}, motionProps, {
            key: eventProps.key,
            visible,
            eventProps,
            onVisibleChanged: function onVisibleChanged(changedVisible) {
              _onVisibleChanged === null || _onVisibleChanged === void 0 || _onVisibleChanged(changedVisible, {
                key: eventProps.key
              });
              if (!changedVisible) {
                _this2.removeKey(eventProps.key);
              }
            }
          }), function(props, ref) {
            return children(_objectSpread2(_objectSpread2({}, props), {}, {
              index: index2
            }), ref);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(_ref3, _ref4) {
        var keys = _ref3.keys;
        var keyEntities = _ref4.keyEntities;
        var parsedKeyObjects = parseKeys(keys);
        var mixedKeyEntities = diffKeys(keyEntities, parsedKeyObjects);
        return {
          keyEntities: mixedKeyEntities.filter(function(entity) {
            var prevEntity = keyEntities.find(function(_ref5) {
              var key = _ref5.key;
              return entity.key === key;
            });
            if (prevEntity && prevEntity.status === STATUS_REMOVED && entity.status === STATUS_REMOVE) {
              return false;
            }
            return true;
          })
        };
      }
    }]);
    return CSSMotionList2;
  }(React31.Component);
  _defineProperty(CSSMotionList, "defaultProps", {
    component: "div"
  });
  return CSSMotionList;
}
var CSSMotionList_default = genCSSMotionList(supportTransition);

// node_modules/rc-motion/es/index.js
var es_default3 = CSSMotion_default;

// node_modules/rc-tree/es/MotionTreeNode.js
import * as React35 from "react";

// node_modules/rc-tree/es/TreeNode.js
var import_classnames6 = __toESM(require_classnames());
import React33 from "react";

// node_modules/rc-tree/es/Indent.js
var import_classnames5 = __toESM(require_classnames());
import * as React32 from "react";
var Indent = function Indent2(_ref) {
  var prefixCls = _ref.prefixCls, level = _ref.level, isStart = _ref.isStart, isEnd = _ref.isEnd;
  var baseClassName = "".concat(prefixCls, "-indent-unit");
  var list = [];
  for (var i = 0; i < level; i += 1) {
    list.push(/* @__PURE__ */ React32.createElement("span", {
      key: i,
      className: (0, import_classnames5.default)(baseClassName, _defineProperty(_defineProperty({}, "".concat(baseClassName, "-start"), isStart[i]), "".concat(baseClassName, "-end"), isEnd[i]))
    }));
  }
  return /* @__PURE__ */ React32.createElement("span", {
    "aria-hidden": "true",
    className: "".concat(prefixCls, "-indent")
  }, list);
};
var Indent_default = /* @__PURE__ */ React32.memo(Indent);

// node_modules/rc-tree/es/utils/keyUtil.js
function getEntity(keyEntities, key) {
  return keyEntities[key];
}

// node_modules/rc-util/es/omit.js
function omit(obj, fields) {
  var clone = Object.assign({}, obj);
  if (Array.isArray(fields)) {
    fields.forEach(function(key) {
      delete clone[key];
    });
  }
  return clone;
}

// node_modules/rc-tree/es/utils/treeUtil.js
var _excluded3 = ["children"];
function getPosition(level, index2) {
  return "".concat(level, "-").concat(index2);
}
function isTreeNode(node) {
  return node && node.type && node.type.isTreeNode;
}
function getKey(key, pos) {
  if (key !== null && key !== void 0) {
    return key;
  }
  return pos;
}
function fillFieldNames(fieldNames) {
  var _ref = fieldNames || {}, title = _ref.title, _title = _ref._title, key = _ref.key, children = _ref.children;
  var mergedTitle = title || "title";
  return {
    title: mergedTitle,
    _title: _title || [mergedTitle],
    key: key || "key",
    children: children || "children"
  };
}
function warningWithoutKey(treeData, fieldNames) {
  var keys = /* @__PURE__ */ new Map();
  function dig(list) {
    var path = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    (list || []).forEach(function(treeNode) {
      var key = treeNode[fieldNames.key];
      var children = treeNode[fieldNames.children];
      warning_default(key !== null && key !== void 0, "Tree node must have a certain key: [".concat(path).concat(key, "]"));
      var recordKey = String(key);
      warning_default(!keys.has(recordKey) || key === null || key === void 0, "Same 'key' exist in the Tree: ".concat(recordKey));
      keys.set(recordKey, true);
      dig(children, "".concat(path).concat(recordKey, " > "));
    });
  }
  dig(treeData);
}
function convertTreeToData(rootNodes) {
  function dig(node) {
    var treeNodes = toArray(node);
    return treeNodes.map(function(treeNode) {
      if (!isTreeNode(treeNode)) {
        warning_default(!treeNode, "Tree/TreeNode can only accept TreeNode as children.");
        return null;
      }
      var key = treeNode.key;
      var _treeNode$props = treeNode.props, children = _treeNode$props.children, rest = _objectWithoutProperties(_treeNode$props, _excluded3);
      var dataNode = _objectSpread2({
        key
      }, rest);
      var parsedChildren = dig(children);
      if (parsedChildren.length) {
        dataNode.children = parsedChildren;
      }
      return dataNode;
    }).filter(function(dataNode) {
      return dataNode;
    });
  }
  return dig(rootNodes);
}
function flattenTreeData(treeNodeList, expandedKeys, fieldNames) {
  var _fillFieldNames = fillFieldNames(fieldNames), fieldTitles = _fillFieldNames._title, fieldKey = _fillFieldNames.key, fieldChildren = _fillFieldNames.children;
  var expandedKeySet = new Set(expandedKeys === true ? [] : expandedKeys);
  var flattenList = [];
  function dig(list) {
    var parent = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    return list.map(function(treeNode, index2) {
      var pos = getPosition(parent ? parent.pos : "0", index2);
      var mergedKey = getKey(treeNode[fieldKey], pos);
      var mergedTitle;
      for (var i = 0; i < fieldTitles.length; i += 1) {
        var fieldTitle = fieldTitles[i];
        if (treeNode[fieldTitle] !== void 0) {
          mergedTitle = treeNode[fieldTitle];
          break;
        }
      }
      var flattenNode = Object.assign(omit(treeNode, [].concat(_toConsumableArray(fieldTitles), [fieldKey, fieldChildren])), {
        title: mergedTitle,
        key: mergedKey,
        parent,
        pos,
        children: null,
        data: treeNode,
        isStart: [].concat(_toConsumableArray(parent ? parent.isStart : []), [index2 === 0]),
        isEnd: [].concat(_toConsumableArray(parent ? parent.isEnd : []), [index2 === list.length - 1])
      });
      flattenList.push(flattenNode);
      if (expandedKeys === true || expandedKeySet.has(mergedKey)) {
        flattenNode.children = dig(treeNode[fieldChildren] || [], flattenNode);
      } else {
        flattenNode.children = [];
      }
      return flattenNode;
    });
  }
  dig(treeNodeList);
  return flattenList;
}
function traverseDataNodes(dataNodes, callback, config) {
  var mergedConfig = {};
  if (_typeof(config) === "object") {
    mergedConfig = config;
  } else {
    mergedConfig = {
      externalGetKey: config
    };
  }
  mergedConfig = mergedConfig || {};
  var _mergedConfig = mergedConfig, childrenPropName = _mergedConfig.childrenPropName, externalGetKey = _mergedConfig.externalGetKey, fieldNames = _mergedConfig.fieldNames;
  var _fillFieldNames2 = fillFieldNames(fieldNames), fieldKey = _fillFieldNames2.key, fieldChildren = _fillFieldNames2.children;
  var mergeChildrenPropName = childrenPropName || fieldChildren;
  var syntheticGetKey;
  if (externalGetKey) {
    if (typeof externalGetKey === "string") {
      syntheticGetKey = function syntheticGetKey2(node) {
        return node[externalGetKey];
      };
    } else if (typeof externalGetKey === "function") {
      syntheticGetKey = function syntheticGetKey2(node) {
        return externalGetKey(node);
      };
    }
  } else {
    syntheticGetKey = function syntheticGetKey2(node, pos) {
      return getKey(node[fieldKey], pos);
    };
  }
  function processNode(node, index2, parent, pathNodes) {
    var children = node ? node[mergeChildrenPropName] : dataNodes;
    var pos = node ? getPosition(parent.pos, index2) : "0";
    var connectNodes = node ? [].concat(_toConsumableArray(pathNodes), [node]) : [];
    if (node) {
      var key = syntheticGetKey(node, pos);
      var _data = {
        node,
        index: index2,
        pos,
        key,
        parentPos: parent.node ? parent.pos : null,
        level: parent.level + 1,
        nodes: connectNodes
      };
      callback(_data);
    }
    if (children) {
      children.forEach(function(subNode, subIndex) {
        processNode(subNode, subIndex, {
          node,
          pos,
          level: parent ? parent.level + 1 : -1
        }, connectNodes);
      });
    }
  }
  processNode(null);
}
function convertDataToEntities(dataNodes) {
  var _ref2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, initWrapper = _ref2.initWrapper, processEntity = _ref2.processEntity, onProcessFinished = _ref2.onProcessFinished, externalGetKey = _ref2.externalGetKey, childrenPropName = _ref2.childrenPropName, fieldNames = _ref2.fieldNames;
  var legacyExternalGetKey = arguments.length > 2 ? arguments[2] : void 0;
  var mergedExternalGetKey = externalGetKey || legacyExternalGetKey;
  var posEntities = {};
  var keyEntities = {};
  var wrapper = {
    posEntities,
    keyEntities
  };
  if (initWrapper) {
    wrapper = initWrapper(wrapper) || wrapper;
  }
  traverseDataNodes(dataNodes, function(item) {
    var node = item.node, index2 = item.index, pos = item.pos, key = item.key, parentPos = item.parentPos, level = item.level, nodes = item.nodes;
    var entity = {
      node,
      nodes,
      index: index2,
      key,
      pos,
      level
    };
    var mergedKey = getKey(key, pos);
    posEntities[pos] = entity;
    keyEntities[mergedKey] = entity;
    entity.parent = posEntities[parentPos];
    if (entity.parent) {
      entity.parent.children = entity.parent.children || [];
      entity.parent.children.push(entity);
    }
    if (processEntity) {
      processEntity(entity, wrapper);
    }
  }, {
    externalGetKey: mergedExternalGetKey,
    childrenPropName,
    fieldNames
  });
  if (onProcessFinished) {
    onProcessFinished(wrapper);
  }
  return wrapper;
}
function getTreeNodeProps(key, _ref3) {
  var expandedKeys = _ref3.expandedKeys, selectedKeys = _ref3.selectedKeys, loadedKeys = _ref3.loadedKeys, loadingKeys = _ref3.loadingKeys, checkedKeys = _ref3.checkedKeys, halfCheckedKeys = _ref3.halfCheckedKeys, dragOverNodeKey = _ref3.dragOverNodeKey, dropPosition = _ref3.dropPosition, keyEntities = _ref3.keyEntities;
  var entity = getEntity(keyEntities, key);
  var treeNodeProps = {
    eventKey: key,
    expanded: expandedKeys.indexOf(key) !== -1,
    selected: selectedKeys.indexOf(key) !== -1,
    loaded: loadedKeys.indexOf(key) !== -1,
    loading: loadingKeys.indexOf(key) !== -1,
    checked: checkedKeys.indexOf(key) !== -1,
    halfChecked: halfCheckedKeys.indexOf(key) !== -1,
    pos: String(entity ? entity.pos : ""),
    // [Legacy] Drag props
    // Since the interaction of drag is changed, the semantic of the props are
    // not accuracy, I think it should be finally removed
    dragOver: dragOverNodeKey === key && dropPosition === 0,
    dragOverGapTop: dragOverNodeKey === key && dropPosition === -1,
    dragOverGapBottom: dragOverNodeKey === key && dropPosition === 1
  };
  return treeNodeProps;
}
function convertNodePropsToEventData(props) {
  var data = props.data, expanded = props.expanded, selected = props.selected, checked = props.checked, loaded = props.loaded, loading = props.loading, halfChecked = props.halfChecked, dragOver = props.dragOver, dragOverGapTop = props.dragOverGapTop, dragOverGapBottom = props.dragOverGapBottom, pos = props.pos, active = props.active, eventKey = props.eventKey;
  var eventData = _objectSpread2(_objectSpread2({}, data), {}, {
    expanded,
    selected,
    checked,
    loaded,
    loading,
    halfChecked,
    dragOver,
    dragOverGapTop,
    dragOverGapBottom,
    pos,
    active,
    key: eventKey
  });
  if (!("props" in eventData)) {
    Object.defineProperty(eventData, "props", {
      get: function get2() {
        warning_default(false, "Second param return from event is node data instead of TreeNode instance. Please read value directly instead of reading from `props`.");
        return props;
      }
    });
  }
  return eventData;
}

// node_modules/rc-tree/es/TreeNode.js
var _excluded4 = ["eventKey", "className", "style", "dragOver", "dragOverGapTop", "dragOverGapBottom", "isLeaf", "isStart", "isEnd", "expanded", "selected", "checked", "halfChecked", "loading", "domRef", "active", "data", "onMouseMove", "selectable"];
var ICON_OPEN = "open";
var ICON_CLOSE = "close";
var defaultTitle = "---";
var TreeNode = function TreeNode2(props) {
  var _context$filterTreeNo, _classNames4;
  var eventKey = props.eventKey, className = props.className, style2 = props.style, dragOver = props.dragOver, dragOverGapTop = props.dragOverGapTop, dragOverGapBottom = props.dragOverGapBottom, isLeaf = props.isLeaf, isStart = props.isStart, isEnd = props.isEnd, expanded = props.expanded, selected = props.selected, checked = props.checked, halfChecked = props.halfChecked, loading = props.loading, domRef = props.domRef, active = props.active, data = props.data, onMouseMove = props.onMouseMove, selectable = props.selectable, otherProps = _objectWithoutProperties(props, _excluded4);
  var context = React33.useContext(TreeContext);
  var unstableContext = React33.useContext(UnstableContext);
  var selectHandleRef = React33.useRef(null);
  var _React$useState = React33.useState(false), _React$useState2 = _slicedToArray(_React$useState, 2), dragNodeHighlight = _React$useState2[0], setDragNodeHighlight = _React$useState2[1];
  var isDisabled = React33.useMemo(function() {
    var _unstableContext$node;
    return !!(context.disabled || props.disabled || (_unstableContext$node = unstableContext.nodeDisabled) !== null && _unstableContext$node !== void 0 && _unstableContext$node.call(unstableContext, data));
  }, [context.disabled, props.disabled, unstableContext.nodeDisabled, data]);
  var isCheckable = React33.useMemo(function() {
    if (!context.checkable || props.checkable === false) {
      return false;
    }
    return context.checkable;
  }, [context.checkable, props.checkable]);
  var onSelect = function onSelect2(e) {
    if (isDisabled) {
      return;
    }
    context.onNodeSelect(e, convertNodePropsToEventData(props));
  };
  var onCheck = function onCheck2(e) {
    if (isDisabled) {
      return;
    }
    if (!isCheckable || props.disableCheckbox) {
      return;
    }
    context.onNodeCheck(e, convertNodePropsToEventData(props), !checked);
  };
  var isSelectable = React33.useMemo(function() {
    if (typeof selectable === "boolean") {
      return selectable;
    }
    return context.selectable;
  }, [selectable, context.selectable]);
  var onSelectorClick = function onSelectorClick2(e) {
    context.onNodeClick(e, convertNodePropsToEventData(props));
    if (isSelectable) {
      onSelect(e);
    } else {
      onCheck(e);
    }
  };
  var onSelectorDoubleClick = function onSelectorDoubleClick2(e) {
    context.onNodeDoubleClick(e, convertNodePropsToEventData(props));
  };
  var onMouseEnter = function onMouseEnter2(e) {
    context.onNodeMouseEnter(e, convertNodePropsToEventData(props));
  };
  var onMouseLeave = function onMouseLeave2(e) {
    context.onNodeMouseLeave(e, convertNodePropsToEventData(props));
  };
  var onContextMenu = function onContextMenu2(e) {
    context.onNodeContextMenu(e, convertNodePropsToEventData(props));
  };
  var isDraggable = React33.useMemo(function() {
    return !!(context.draggable && (!context.draggable.nodeDraggable || context.draggable.nodeDraggable(data)));
  }, [context.draggable, data]);
  var onDragStart = function onDragStart2(e) {
    e.stopPropagation();
    setDragNodeHighlight(true);
    context.onNodeDragStart(e, props);
    try {
      e.dataTransfer.setData("text/plain", "");
    } catch (_unused) {
    }
  };
  var onDragEnter = function onDragEnter2(e) {
    e.preventDefault();
    e.stopPropagation();
    context.onNodeDragEnter(e, props);
  };
  var onDragOver = function onDragOver2(e) {
    e.preventDefault();
    e.stopPropagation();
    context.onNodeDragOver(e, props);
  };
  var onDragLeave = function onDragLeave2(e) {
    e.stopPropagation();
    context.onNodeDragLeave(e, props);
  };
  var onDragEnd = function onDragEnd2(e) {
    e.stopPropagation();
    setDragNodeHighlight(false);
    context.onNodeDragEnd(e, props);
  };
  var onDrop = function onDrop2(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragNodeHighlight(false);
    context.onNodeDrop(e, props);
  };
  var onExpand = function onExpand2(e) {
    if (loading) {
      return;
    }
    context.onNodeExpand(e, convertNodePropsToEventData(props));
  };
  var hasChildren = React33.useMemo(function() {
    var _ref = getEntity(context.keyEntities, eventKey) || {}, children = _ref.children;
    return Boolean((children || []).length);
  }, [context.keyEntities, eventKey]);
  var memoizedIsLeaf = React33.useMemo(function() {
    if (isLeaf === false) {
      return false;
    }
    return isLeaf || !context.loadData && !hasChildren || context.loadData && props.loaded && !hasChildren;
  }, [isLeaf, context.loadData, hasChildren, props.loaded]);
  React33.useEffect(function() {
    if (loading) {
      return;
    }
    if (typeof context.loadData === "function" && expanded && !memoizedIsLeaf && !props.loaded) {
      context.onNodeLoad(convertNodePropsToEventData(props));
    }
  }, [loading, context.loadData, context.onNodeLoad, expanded, memoizedIsLeaf, props]);
  var dragHandlerNode = React33.useMemo(function() {
    var _context$draggable;
    if (!((_context$draggable = context.draggable) !== null && _context$draggable !== void 0 && _context$draggable.icon)) {
      return null;
    }
    return /* @__PURE__ */ React33.createElement("span", {
      className: "".concat(context.prefixCls, "-draggable-icon")
    }, context.draggable.icon);
  }, [context.draggable]);
  var renderSwitcherIconDom = function renderSwitcherIconDom2(isInternalLeaf) {
    var switcherIcon = props.switcherIcon || context.switcherIcon;
    if (typeof switcherIcon === "function") {
      return switcherIcon(_objectSpread2(_objectSpread2({}, props), {}, {
        isLeaf: isInternalLeaf
      }));
    }
    return switcherIcon;
  };
  var renderSwitcher = function renderSwitcher2() {
    if (memoizedIsLeaf) {
      var _switcherIconDom = renderSwitcherIconDom(true);
      return _switcherIconDom !== false ? /* @__PURE__ */ React33.createElement("span", {
        className: (0, import_classnames6.default)("".concat(context.prefixCls, "-switcher"), "".concat(context.prefixCls, "-switcher-noop"))
      }, _switcherIconDom) : null;
    }
    var switcherIconDom = renderSwitcherIconDom(false);
    return switcherIconDom !== false ? /* @__PURE__ */ React33.createElement("span", {
      onClick: onExpand,
      className: (0, import_classnames6.default)("".concat(context.prefixCls, "-switcher"), "".concat(context.prefixCls, "-switcher_").concat(expanded ? ICON_OPEN : ICON_CLOSE))
    }, switcherIconDom) : null;
  };
  var checkboxNode = React33.useMemo(function() {
    if (!isCheckable) {
      return null;
    }
    var $custom = typeof isCheckable !== "boolean" ? isCheckable : null;
    return /* @__PURE__ */ React33.createElement("span", {
      className: (0, import_classnames6.default)("".concat(context.prefixCls, "-checkbox"), _defineProperty(_defineProperty(_defineProperty({}, "".concat(context.prefixCls, "-checkbox-checked"), checked), "".concat(context.prefixCls, "-checkbox-indeterminate"), !checked && halfChecked), "".concat(context.prefixCls, "-checkbox-disabled"), isDisabled || props.disableCheckbox)),
      onClick: onCheck,
      role: "checkbox",
      "aria-checked": halfChecked ? "mixed" : checked,
      "aria-disabled": isDisabled || props.disableCheckbox,
      "aria-label": "Select ".concat(typeof props.title === "string" ? props.title : "tree node")
    }, $custom);
  }, [isCheckable, checked, halfChecked, isDisabled, props.disableCheckbox, props.title]);
  var nodeState = React33.useMemo(function() {
    if (memoizedIsLeaf) {
      return null;
    }
    return expanded ? ICON_OPEN : ICON_CLOSE;
  }, [memoizedIsLeaf, expanded]);
  var iconNode = React33.useMemo(function() {
    return /* @__PURE__ */ React33.createElement("span", {
      className: (0, import_classnames6.default)("".concat(context.prefixCls, "-iconEle"), "".concat(context.prefixCls, "-icon__").concat(nodeState || "docu"), _defineProperty({}, "".concat(context.prefixCls, "-icon_loading"), loading))
    });
  }, [context.prefixCls, nodeState, loading]);
  var dropIndicatorNode = React33.useMemo(function() {
    var rootDraggable = Boolean(context.draggable);
    var showIndicator = !props.disabled && rootDraggable && context.dragOverNodeKey === eventKey;
    if (!showIndicator) {
      return null;
    }
    return context.dropIndicatorRender({
      dropPosition: context.dropPosition,
      dropLevelOffset: context.dropLevelOffset,
      indent: context.indent,
      prefixCls: context.prefixCls,
      direction: context.direction
    });
  }, [context.dropPosition, context.dropLevelOffset, context.indent, context.prefixCls, context.direction, context.draggable, context.dragOverNodeKey, context.dropIndicatorRender]);
  var selectorNode = React33.useMemo(function() {
    var _props$title = props.title, title = _props$title === void 0 ? defaultTitle : _props$title;
    var wrapClass = "".concat(context.prefixCls, "-node-content-wrapper");
    var $icon;
    if (context.showIcon) {
      var currentIcon = props.icon || context.icon;
      $icon = currentIcon ? /* @__PURE__ */ React33.createElement("span", {
        className: (0, import_classnames6.default)("".concat(context.prefixCls, "-iconEle"), "".concat(context.prefixCls, "-icon__customize"))
      }, typeof currentIcon === "function" ? currentIcon(props) : currentIcon) : iconNode;
    } else if (context.loadData && loading) {
      $icon = iconNode;
    }
    var titleNode;
    if (typeof title === "function") {
      titleNode = title(data);
    } else if (context.titleRender) {
      titleNode = context.titleRender(data);
    } else {
      titleNode = title;
    }
    return /* @__PURE__ */ React33.createElement("span", {
      ref: selectHandleRef,
      title: typeof title === "string" ? title : "",
      className: (0, import_classnames6.default)(wrapClass, "".concat(wrapClass, "-").concat(nodeState || "normal"), _defineProperty({}, "".concat(context.prefixCls, "-node-selected"), !isDisabled && (selected || dragNodeHighlight))),
      onMouseEnter,
      onMouseLeave,
      onContextMenu,
      onClick: onSelectorClick,
      onDoubleClick: onSelectorDoubleClick
    }, $icon, /* @__PURE__ */ React33.createElement("span", {
      className: "".concat(context.prefixCls, "-title")
    }, titleNode), dropIndicatorNode);
  }, [context.prefixCls, context.showIcon, props, context.icon, iconNode, context.titleRender, data, nodeState, onMouseEnter, onMouseLeave, onContextMenu, onSelectorClick, onSelectorDoubleClick]);
  var dataOrAriaAttributeProps = pickAttrs(otherProps, {
    aria: true,
    data: true
  });
  var _ref2 = getEntity(context.keyEntities, eventKey) || {}, level = _ref2.level;
  var isEndNode = isEnd[isEnd.length - 1];
  var draggableWithoutDisabled = !isDisabled && isDraggable;
  var dragging = context.draggingNodeKey === eventKey;
  var ariaSelected = selectable !== void 0 ? {
    "aria-selected": !!selectable
  } : void 0;
  return /* @__PURE__ */ React33.createElement("div", _extends({
    ref: domRef,
    role: "treeitem",
    "aria-expanded": isLeaf ? void 0 : expanded,
    className: (0, import_classnames6.default)(className, "".concat(context.prefixCls, "-treenode"), (_classNames4 = {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_classNames4, "".concat(context.prefixCls, "-treenode-disabled"), isDisabled), "".concat(context.prefixCls, "-treenode-switcher-").concat(expanded ? "open" : "close"), !isLeaf), "".concat(context.prefixCls, "-treenode-checkbox-checked"), checked), "".concat(context.prefixCls, "-treenode-checkbox-indeterminate"), halfChecked), "".concat(context.prefixCls, "-treenode-selected"), selected), "".concat(context.prefixCls, "-treenode-loading"), loading), "".concat(context.prefixCls, "-treenode-active"), active), "".concat(context.prefixCls, "-treenode-leaf-last"), isEndNode), "".concat(context.prefixCls, "-treenode-draggable"), isDraggable), "dragging", dragging), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_classNames4, "drop-target", context.dropTargetKey === eventKey), "drop-container", context.dropContainerKey === eventKey), "drag-over", !isDisabled && dragOver), "drag-over-gap-top", !isDisabled && dragOverGapTop), "drag-over-gap-bottom", !isDisabled && dragOverGapBottom), "filter-node", (_context$filterTreeNo = context.filterTreeNode) === null || _context$filterTreeNo === void 0 ? void 0 : _context$filterTreeNo.call(context, convertNodePropsToEventData(props))), "".concat(context.prefixCls, "-treenode-leaf"), memoizedIsLeaf))),
    style: style2,
    draggable: draggableWithoutDisabled,
    onDragStart: draggableWithoutDisabled ? onDragStart : void 0,
    onDragEnter: isDraggable ? onDragEnter : void 0,
    onDragOver: isDraggable ? onDragOver : void 0,
    onDragLeave: isDraggable ? onDragLeave : void 0,
    onDrop: isDraggable ? onDrop : void 0,
    onDragEnd: isDraggable ? onDragEnd : void 0,
    onMouseMove
  }, ariaSelected, dataOrAriaAttributeProps), /* @__PURE__ */ React33.createElement(Indent_default, {
    prefixCls: context.prefixCls,
    level,
    isStart,
    isEnd
  }), dragHandlerNode, renderSwitcher(), checkboxNode, selectorNode);
};
TreeNode.isTreeNode = 1;
if (true) {
  TreeNode.displayName = "TreeNode";
}
var TreeNode_default = TreeNode;

// node_modules/rc-tree/es/useUnmount.js
import * as React34 from "react";
function useUnmount(triggerStart, triggerEnd) {
  var _React$useState = React34.useState(false), _React$useState2 = _slicedToArray(_React$useState, 2), firstMount = _React$useState2[0], setFirstMount = _React$useState2[1];
  useLayoutEffect_default(function() {
    if (firstMount) {
      triggerStart();
      return function() {
        triggerEnd();
      };
    }
  }, [firstMount]);
  useLayoutEffect_default(function() {
    setFirstMount(true);
    return function() {
      setFirstMount(false);
    };
  }, []);
}
var useUnmount_default = useUnmount;

// node_modules/rc-tree/es/MotionTreeNode.js
var _excluded5 = ["className", "style", "motion", "motionNodes", "motionType", "onMotionStart", "onMotionEnd", "active", "treeNodeRequiredProps"];
var MotionTreeNode = /* @__PURE__ */ React35.forwardRef(function(oriProps, ref) {
  var className = oriProps.className, style2 = oriProps.style, motion = oriProps.motion, motionNodes = oriProps.motionNodes, motionType = oriProps.motionType, onOriginMotionStart = oriProps.onMotionStart, onOriginMotionEnd = oriProps.onMotionEnd, active = oriProps.active, treeNodeRequiredProps = oriProps.treeNodeRequiredProps, props = _objectWithoutProperties(oriProps, _excluded5);
  var _React$useState = React35.useState(true), _React$useState2 = _slicedToArray(_React$useState, 2), visible = _React$useState2[0], setVisible = _React$useState2[1];
  var _React$useContext = React35.useContext(TreeContext), prefixCls = _React$useContext.prefixCls;
  var targetVisible = motionNodes && motionType !== "hide";
  useLayoutEffect_default(function() {
    if (motionNodes) {
      if (targetVisible !== visible) {
        setVisible(targetVisible);
      }
    }
  }, [motionNodes]);
  var triggerMotionStart = function triggerMotionStart2() {
    if (motionNodes) {
      onOriginMotionStart();
    }
  };
  var triggerMotionEndRef = React35.useRef(false);
  var triggerMotionEnd = function triggerMotionEnd2() {
    if (motionNodes && !triggerMotionEndRef.current) {
      triggerMotionEndRef.current = true;
      onOriginMotionEnd();
    }
  };
  useUnmount_default(triggerMotionStart, triggerMotionEnd);
  var onVisibleChanged = function onVisibleChanged2(nextVisible) {
    if (targetVisible === nextVisible) {
      triggerMotionEnd();
    }
  };
  if (motionNodes) {
    return /* @__PURE__ */ React35.createElement(es_default3, _extends({
      ref,
      visible
    }, motion, {
      motionAppear: motionType === "show",
      onVisibleChanged
    }), function(_ref, motionRef) {
      var motionClassName = _ref.className, motionStyle = _ref.style;
      return /* @__PURE__ */ React35.createElement("div", {
        ref: motionRef,
        className: (0, import_classnames7.default)("".concat(prefixCls, "-treenode-motion"), motionClassName),
        style: motionStyle
      }, motionNodes.map(function(treeNode) {
        var restProps = Object.assign({}, (_objectDestructuringEmpty(treeNode.data), treeNode.data)), title = treeNode.title, key = treeNode.key, isStart = treeNode.isStart, isEnd = treeNode.isEnd;
        delete restProps.children;
        var treeNodeProps = getTreeNodeProps(key, treeNodeRequiredProps);
        return /* @__PURE__ */ React35.createElement(TreeNode_default, _extends({}, restProps, treeNodeProps, {
          title,
          active,
          data: treeNode.data,
          key,
          isStart,
          isEnd
        }));
      }));
    });
  }
  return /* @__PURE__ */ React35.createElement(TreeNode_default, _extends({
    domRef: ref,
    className,
    style: style2
  }, props, {
    active
  }));
});
if (true) {
  MotionTreeNode.displayName = "MotionTreeNode";
}
var MotionTreeNode_default = MotionTreeNode;

// node_modules/rc-tree/es/utils/diffUtil.js
function findExpandedKeys() {
  var prev = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  var next = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  var prevLen = prev.length;
  var nextLen = next.length;
  if (Math.abs(prevLen - nextLen) !== 1) {
    return {
      add: false,
      key: null
    };
  }
  function find(shorter, longer) {
    var cache = /* @__PURE__ */ new Map();
    shorter.forEach(function(key) {
      cache.set(key, true);
    });
    var keys = longer.filter(function(key) {
      return !cache.has(key);
    });
    return keys.length === 1 ? keys[0] : null;
  }
  if (prevLen < nextLen) {
    return {
      add: true,
      key: find(prev, next)
    };
  }
  return {
    add: false,
    key: find(next, prev)
  };
}
function getExpandRange(shorter, longer, key) {
  var shorterStartIndex = shorter.findIndex(function(data) {
    return data.key === key;
  });
  var shorterEndNode = shorter[shorterStartIndex + 1];
  var longerStartIndex = longer.findIndex(function(data) {
    return data.key === key;
  });
  if (shorterEndNode) {
    var longerEndIndex = longer.findIndex(function(data) {
      return data.key === shorterEndNode.key;
    });
    return longer.slice(longerStartIndex + 1, longerEndIndex);
  }
  return longer.slice(longerStartIndex + 1);
}

// node_modules/rc-tree/es/NodeList.js
var _excluded6 = ["prefixCls", "data", "selectable", "checkable", "expandedKeys", "selectedKeys", "checkedKeys", "loadedKeys", "loadingKeys", "halfCheckedKeys", "keyEntities", "disabled", "dragging", "dragOverNodeKey", "dropPosition", "motion", "height", "itemHeight", "virtual", "scrollWidth", "focusable", "activeItem", "focused", "tabIndex", "onKeyDown", "onFocus", "onBlur", "onActiveChange", "onListChangeStart", "onListChangeEnd"];
var HIDDEN_STYLE = {
  width: 0,
  height: 0,
  display: "flex",
  overflow: "hidden",
  opacity: 0,
  border: 0,
  padding: 0,
  margin: 0
};
var noop = function noop2() {
};
var MOTION_KEY = "RC_TREE_MOTION_".concat(Math.random());
var MotionNode = {
  key: MOTION_KEY
};
var MotionEntity = {
  key: MOTION_KEY,
  level: 0,
  index: 0,
  pos: "0",
  node: MotionNode,
  nodes: [MotionNode]
};
var MotionFlattenData = {
  parent: null,
  children: [],
  pos: MotionEntity.pos,
  data: MotionNode,
  title: null,
  key: MOTION_KEY,
  /** Hold empty list here since we do not use it */
  isStart: [],
  isEnd: []
};
function getMinimumRangeTransitionRange(list, virtual, height, itemHeight) {
  if (virtual === false || !height) {
    return list;
  }
  return list.slice(0, Math.ceil(height / itemHeight) + 1);
}
function itemKey(item) {
  var key = item.key, pos = item.pos;
  return getKey(key, pos);
}
function getAccessibilityPath(item) {
  var path = String(item.data.key);
  var current = item;
  while (current.parent) {
    current = current.parent;
    path = "".concat(current.data.key, " > ").concat(path);
  }
  return path;
}
var NodeList = /* @__PURE__ */ React36.forwardRef(function(props, ref) {
  var prefixCls = props.prefixCls, data = props.data, selectable = props.selectable, checkable = props.checkable, expandedKeys = props.expandedKeys, selectedKeys = props.selectedKeys, checkedKeys = props.checkedKeys, loadedKeys = props.loadedKeys, loadingKeys = props.loadingKeys, halfCheckedKeys = props.halfCheckedKeys, keyEntities = props.keyEntities, disabled = props.disabled, dragging = props.dragging, dragOverNodeKey = props.dragOverNodeKey, dropPosition = props.dropPosition, motion = props.motion, height = props.height, itemHeight = props.itemHeight, virtual = props.virtual, scrollWidth = props.scrollWidth, focusable = props.focusable, activeItem = props.activeItem, focused = props.focused, tabIndex = props.tabIndex, onKeyDown = props.onKeyDown, onFocus = props.onFocus, onBlur = props.onBlur, onActiveChange = props.onActiveChange, onListChangeStart = props.onListChangeStart, onListChangeEnd = props.onListChangeEnd, domProps = _objectWithoutProperties(props, _excluded6);
  var listRef = React36.useRef(null);
  var indentMeasurerRef = React36.useRef(null);
  React36.useImperativeHandle(ref, function() {
    return {
      scrollTo: function scrollTo(scroll) {
        listRef.current.scrollTo(scroll);
      },
      getIndentWidth: function getIndentWidth() {
        return indentMeasurerRef.current.offsetWidth;
      }
    };
  });
  var _React$useState = React36.useState(expandedKeys), _React$useState2 = _slicedToArray(_React$useState, 2), prevExpandedKeys = _React$useState2[0], setPrevExpandedKeys = _React$useState2[1];
  var _React$useState3 = React36.useState(data), _React$useState4 = _slicedToArray(_React$useState3, 2), prevData = _React$useState4[0], setPrevData = _React$useState4[1];
  var _React$useState5 = React36.useState(data), _React$useState6 = _slicedToArray(_React$useState5, 2), transitionData = _React$useState6[0], setTransitionData = _React$useState6[1];
  var _React$useState7 = React36.useState([]), _React$useState8 = _slicedToArray(_React$useState7, 2), transitionRange = _React$useState8[0], setTransitionRange = _React$useState8[1];
  var _React$useState9 = React36.useState(null), _React$useState10 = _slicedToArray(_React$useState9, 2), motionType = _React$useState10[0], setMotionType = _React$useState10[1];
  var dataRef = React36.useRef(data);
  dataRef.current = data;
  function onMotionEnd() {
    var latestData = dataRef.current;
    setPrevData(latestData);
    setTransitionData(latestData);
    setTransitionRange([]);
    setMotionType(null);
    onListChangeEnd();
  }
  useLayoutEffect_default(function() {
    setPrevExpandedKeys(expandedKeys);
    var diffExpanded = findExpandedKeys(prevExpandedKeys, expandedKeys);
    if (diffExpanded.key !== null) {
      if (diffExpanded.add) {
        var keyIndex = prevData.findIndex(function(_ref) {
          var key = _ref.key;
          return key === diffExpanded.key;
        });
        var rangeNodes = getMinimumRangeTransitionRange(getExpandRange(prevData, data, diffExpanded.key), virtual, height, itemHeight);
        var newTransitionData = prevData.slice();
        newTransitionData.splice(keyIndex + 1, 0, MotionFlattenData);
        setTransitionData(newTransitionData);
        setTransitionRange(rangeNodes);
        setMotionType("show");
      } else {
        var _keyIndex = data.findIndex(function(_ref2) {
          var key = _ref2.key;
          return key === diffExpanded.key;
        });
        var _rangeNodes = getMinimumRangeTransitionRange(getExpandRange(data, prevData, diffExpanded.key), virtual, height, itemHeight);
        var _newTransitionData = data.slice();
        _newTransitionData.splice(_keyIndex + 1, 0, MotionFlattenData);
        setTransitionData(_newTransitionData);
        setTransitionRange(_rangeNodes);
        setMotionType("hide");
      }
    } else if (prevData !== data) {
      setPrevData(data);
      setTransitionData(data);
    }
  }, [expandedKeys, data]);
  React36.useEffect(function() {
    if (!dragging) {
      onMotionEnd();
    }
  }, [dragging]);
  var mergedData = motion ? transitionData : data;
  var treeNodeRequiredProps = {
    expandedKeys,
    selectedKeys,
    loadedKeys,
    loadingKeys,
    checkedKeys,
    halfCheckedKeys,
    dragOverNodeKey,
    dropPosition,
    keyEntities
  };
  return /* @__PURE__ */ React36.createElement(React36.Fragment, null, focused && activeItem && /* @__PURE__ */ React36.createElement("span", {
    style: HIDDEN_STYLE,
    "aria-live": "assertive"
  }, getAccessibilityPath(activeItem)), /* @__PURE__ */ React36.createElement("div", null, /* @__PURE__ */ React36.createElement("input", {
    style: HIDDEN_STYLE,
    disabled: focusable === false || disabled,
    tabIndex: focusable !== false ? tabIndex : null,
    onKeyDown,
    onFocus,
    onBlur,
    value: "",
    onChange: noop,
    "aria-label": "for screen reader"
  })), /* @__PURE__ */ React36.createElement("div", {
    className: "".concat(prefixCls, "-treenode"),
    "aria-hidden": true,
    style: {
      position: "absolute",
      pointerEvents: "none",
      visibility: "hidden",
      height: 0,
      overflow: "hidden",
      border: 0,
      padding: 0
    }
  }, /* @__PURE__ */ React36.createElement("div", {
    className: "".concat(prefixCls, "-indent")
  }, /* @__PURE__ */ React36.createElement("div", {
    ref: indentMeasurerRef,
    className: "".concat(prefixCls, "-indent-unit")
  }))), /* @__PURE__ */ React36.createElement(es_default2, _extends({}, domProps, {
    data: mergedData,
    itemKey,
    height,
    fullHeight: false,
    virtual,
    itemHeight,
    scrollWidth,
    prefixCls: "".concat(prefixCls, "-list"),
    ref: listRef,
    role: "tree",
    onVisibleChange: function onVisibleChange(originList) {
      if (originList.every(function(item) {
        return itemKey(item) !== MOTION_KEY;
      })) {
        onMotionEnd();
      }
    }
  }), function(treeNode) {
    var pos = treeNode.pos, restProps = Object.assign({}, (_objectDestructuringEmpty(treeNode.data), treeNode.data)), title = treeNode.title, key = treeNode.key, isStart = treeNode.isStart, isEnd = treeNode.isEnd;
    var mergedKey = getKey(key, pos);
    delete restProps.key;
    delete restProps.children;
    var treeNodeProps = getTreeNodeProps(mergedKey, treeNodeRequiredProps);
    return /* @__PURE__ */ React36.createElement(MotionTreeNode_default, _extends({}, restProps, treeNodeProps, {
      title,
      active: !!activeItem && key === activeItem.key,
      pos,
      data: treeNode.data,
      isStart,
      isEnd,
      motion,
      motionNodes: key === MOTION_KEY ? transitionRange : null,
      motionType,
      onMotionStart: onListChangeStart,
      onMotionEnd,
      treeNodeRequiredProps,
      onMouseMove: function onMouseMove() {
        onActiveChange(null);
      }
    }));
  }));
});
if (true) {
  NodeList.displayName = "NodeList";
}
var NodeList_default = NodeList;

// node_modules/rc-tree/es/util.js
import React37 from "react";
function arrDel(list, value) {
  if (!list) return [];
  var clone = list.slice();
  var index2 = clone.indexOf(value);
  if (index2 >= 0) {
    clone.splice(index2, 1);
  }
  return clone;
}
function arrAdd(list, value) {
  var clone = (list || []).slice();
  if (clone.indexOf(value) === -1) {
    clone.push(value);
  }
  return clone;
}
function posToArr(pos) {
  return pos.split("-");
}
function getDragChildrenKeys(dragNodeKey, keyEntities) {
  var dragChildrenKeys = [];
  var entity = getEntity(keyEntities, dragNodeKey);
  function dig() {
    var list = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    list.forEach(function(_ref) {
      var key = _ref.key, children = _ref.children;
      dragChildrenKeys.push(key);
      dig(children);
    });
  }
  dig(entity.children);
  return dragChildrenKeys;
}
function isLastChild(treeNodeEntity) {
  if (treeNodeEntity.parent) {
    var posArr = posToArr(treeNodeEntity.pos);
    return Number(posArr[posArr.length - 1]) === treeNodeEntity.parent.children.length - 1;
  }
  return false;
}
function isFirstChild(treeNodeEntity) {
  var posArr = posToArr(treeNodeEntity.pos);
  return Number(posArr[posArr.length - 1]) === 0;
}
function calcDropPosition(event, dragNodeProps, targetNodeProps, indent, startMousePosition, allowDrop2, flattenedNodes, keyEntities, expandKeys, direction) {
  var _abstractDropNodeEnti;
  var clientX = event.clientX, clientY = event.clientY;
  var _getBoundingClientRec = event.target.getBoundingClientRect(), top = _getBoundingClientRec.top, height = _getBoundingClientRec.height;
  var horizontalMouseOffset = (direction === "rtl" ? -1 : 1) * (((startMousePosition === null || startMousePosition === void 0 ? void 0 : startMousePosition.x) || 0) - clientX);
  var rawDropLevelOffset = (horizontalMouseOffset - 12) / indent;
  var filteredExpandKeys = expandKeys.filter(function(key) {
    var _keyEntities$key;
    return (_keyEntities$key = keyEntities[key]) === null || _keyEntities$key === void 0 || (_keyEntities$key = _keyEntities$key.children) === null || _keyEntities$key === void 0 ? void 0 : _keyEntities$key.length;
  });
  var abstractDropNodeEntity = getEntity(keyEntities, targetNodeProps.eventKey);
  if (clientY < top + height / 2) {
    var nodeIndex = flattenedNodes.findIndex(function(flattenedNode) {
      return flattenedNode.key === abstractDropNodeEntity.key;
    });
    var prevNodeIndex = nodeIndex <= 0 ? 0 : nodeIndex - 1;
    var prevNodeKey = flattenedNodes[prevNodeIndex].key;
    abstractDropNodeEntity = getEntity(keyEntities, prevNodeKey);
  }
  var initialAbstractDropNodeKey = abstractDropNodeEntity.key;
  var abstractDragOverEntity = abstractDropNodeEntity;
  var dragOverNodeKey = abstractDropNodeEntity.key;
  var dropPosition = 0;
  var dropLevelOffset = 0;
  if (!filteredExpandKeys.includes(initialAbstractDropNodeKey)) {
    for (var i = 0; i < rawDropLevelOffset; i += 1) {
      if (isLastChild(abstractDropNodeEntity)) {
        abstractDropNodeEntity = abstractDropNodeEntity.parent;
        dropLevelOffset += 1;
      } else {
        break;
      }
    }
  }
  var abstractDragDataNode = dragNodeProps.data;
  var abstractDropDataNode = abstractDropNodeEntity.node;
  var dropAllowed = true;
  if (isFirstChild(abstractDropNodeEntity) && abstractDropNodeEntity.level === 0 && clientY < top + height / 2 && allowDrop2({
    dragNode: abstractDragDataNode,
    dropNode: abstractDropDataNode,
    dropPosition: -1
  }) && abstractDropNodeEntity.key === targetNodeProps.eventKey) {
    dropPosition = -1;
  } else if ((abstractDragOverEntity.children || []).length && filteredExpandKeys.includes(dragOverNodeKey)) {
    if (allowDrop2({
      dragNode: abstractDragDataNode,
      dropNode: abstractDropDataNode,
      dropPosition: 0
    })) {
      dropPosition = 0;
    } else {
      dropAllowed = false;
    }
  } else if (dropLevelOffset === 0) {
    if (rawDropLevelOffset > -1.5) {
      if (allowDrop2({
        dragNode: abstractDragDataNode,
        dropNode: abstractDropDataNode,
        dropPosition: 1
      })) {
        dropPosition = 1;
      } else {
        dropAllowed = false;
      }
    } else {
      if (allowDrop2({
        dragNode: abstractDragDataNode,
        dropNode: abstractDropDataNode,
        dropPosition: 0
      })) {
        dropPosition = 0;
      } else if (allowDrop2({
        dragNode: abstractDragDataNode,
        dropNode: abstractDropDataNode,
        dropPosition: 1
      })) {
        dropPosition = 1;
      } else {
        dropAllowed = false;
      }
    }
  } else {
    if (allowDrop2({
      dragNode: abstractDragDataNode,
      dropNode: abstractDropDataNode,
      dropPosition: 1
    })) {
      dropPosition = 1;
    } else {
      dropAllowed = false;
    }
  }
  return {
    dropPosition,
    dropLevelOffset,
    dropTargetKey: abstractDropNodeEntity.key,
    dropTargetPos: abstractDropNodeEntity.pos,
    dragOverNodeKey,
    dropContainerKey: dropPosition === 0 ? null : ((_abstractDropNodeEnti = abstractDropNodeEntity.parent) === null || _abstractDropNodeEnti === void 0 ? void 0 : _abstractDropNodeEnti.key) || null,
    dropAllowed
  };
}
function calcSelectedKeys(selectedKeys, props) {
  if (!selectedKeys) return void 0;
  var multiple = props.multiple;
  if (multiple) {
    return selectedKeys.slice();
  }
  if (selectedKeys.length) {
    return [selectedKeys[0]];
  }
  return selectedKeys;
}
function parseCheckedKeys(keys) {
  if (!keys) {
    return null;
  }
  var keyProps;
  if (Array.isArray(keys)) {
    keyProps = {
      checkedKeys: keys,
      halfCheckedKeys: void 0
    };
  } else if (_typeof(keys) === "object") {
    keyProps = {
      checkedKeys: keys.checked || void 0,
      halfCheckedKeys: keys.halfChecked || void 0
    };
  } else {
    warning_default(false, "`checkedKeys` is not an array or an object");
    return null;
  }
  return keyProps;
}
function conductExpandParent(keyList, keyEntities) {
  var expandedKeys = /* @__PURE__ */ new Set();
  function conductUp(key) {
    if (expandedKeys.has(key)) return;
    var entity = getEntity(keyEntities, key);
    if (!entity) return;
    expandedKeys.add(key);
    var parent = entity.parent, node = entity.node;
    if (node.disabled) return;
    if (parent) {
      conductUp(parent.key);
    }
  }
  (keyList || []).forEach(function(key) {
    conductUp(key);
  });
  return _toConsumableArray(expandedKeys);
}

// node_modules/rc-tree/es/utils/conductUtil.js
function removeFromCheckedKeys(halfCheckedKeys, checkedKeys) {
  var filteredKeys = /* @__PURE__ */ new Set();
  halfCheckedKeys.forEach(function(key) {
    if (!checkedKeys.has(key)) {
      filteredKeys.add(key);
    }
  });
  return filteredKeys;
}
function isCheckDisabled(node) {
  var _ref = node || {}, disabled = _ref.disabled, disableCheckbox = _ref.disableCheckbox, checkable = _ref.checkable;
  return !!(disabled || disableCheckbox) || checkable === false;
}
function fillConductCheck(keys, levelEntities, maxLevel, syntheticGetCheckDisabled) {
  var checkedKeys = new Set(keys);
  var halfCheckedKeys = /* @__PURE__ */ new Set();
  for (var level = 0; level <= maxLevel; level += 1) {
    var entities = levelEntities.get(level) || /* @__PURE__ */ new Set();
    entities.forEach(function(entity) {
      var key = entity.key, node = entity.node, _entity$children = entity.children, children = _entity$children === void 0 ? [] : _entity$children;
      if (checkedKeys.has(key) && !syntheticGetCheckDisabled(node)) {
        children.filter(function(childEntity) {
          return !syntheticGetCheckDisabled(childEntity.node);
        }).forEach(function(childEntity) {
          checkedKeys.add(childEntity.key);
        });
      }
    });
  }
  var visitedKeys = /* @__PURE__ */ new Set();
  for (var _level = maxLevel; _level >= 0; _level -= 1) {
    var _entities = levelEntities.get(_level) || /* @__PURE__ */ new Set();
    _entities.forEach(function(entity) {
      var parent = entity.parent, node = entity.node;
      if (syntheticGetCheckDisabled(node) || !entity.parent || visitedKeys.has(entity.parent.key)) {
        return;
      }
      if (syntheticGetCheckDisabled(entity.parent.node)) {
        visitedKeys.add(parent.key);
        return;
      }
      var allChecked = true;
      var partialChecked = false;
      (parent.children || []).filter(function(childEntity) {
        return !syntheticGetCheckDisabled(childEntity.node);
      }).forEach(function(_ref2) {
        var key = _ref2.key;
        var checked = checkedKeys.has(key);
        if (allChecked && !checked) {
          allChecked = false;
        }
        if (!partialChecked && (checked || halfCheckedKeys.has(key))) {
          partialChecked = true;
        }
      });
      if (allChecked) {
        checkedKeys.add(parent.key);
      }
      if (partialChecked) {
        halfCheckedKeys.add(parent.key);
      }
      visitedKeys.add(parent.key);
    });
  }
  return {
    checkedKeys: Array.from(checkedKeys),
    halfCheckedKeys: Array.from(removeFromCheckedKeys(halfCheckedKeys, checkedKeys))
  };
}
function cleanConductCheck(keys, halfKeys, levelEntities, maxLevel, syntheticGetCheckDisabled) {
  var checkedKeys = new Set(keys);
  var halfCheckedKeys = new Set(halfKeys);
  for (var level = 0; level <= maxLevel; level += 1) {
    var entities = levelEntities.get(level) || /* @__PURE__ */ new Set();
    entities.forEach(function(entity) {
      var key = entity.key, node = entity.node, _entity$children2 = entity.children, children = _entity$children2 === void 0 ? [] : _entity$children2;
      if (!checkedKeys.has(key) && !halfCheckedKeys.has(key) && !syntheticGetCheckDisabled(node)) {
        children.filter(function(childEntity) {
          return !syntheticGetCheckDisabled(childEntity.node);
        }).forEach(function(childEntity) {
          checkedKeys.delete(childEntity.key);
        });
      }
    });
  }
  halfCheckedKeys = /* @__PURE__ */ new Set();
  var visitedKeys = /* @__PURE__ */ new Set();
  for (var _level2 = maxLevel; _level2 >= 0; _level2 -= 1) {
    var _entities2 = levelEntities.get(_level2) || /* @__PURE__ */ new Set();
    _entities2.forEach(function(entity) {
      var parent = entity.parent, node = entity.node;
      if (syntheticGetCheckDisabled(node) || !entity.parent || visitedKeys.has(entity.parent.key)) {
        return;
      }
      if (syntheticGetCheckDisabled(entity.parent.node)) {
        visitedKeys.add(parent.key);
        return;
      }
      var allChecked = true;
      var partialChecked = false;
      (parent.children || []).filter(function(childEntity) {
        return !syntheticGetCheckDisabled(childEntity.node);
      }).forEach(function(_ref3) {
        var key = _ref3.key;
        var checked = checkedKeys.has(key);
        if (allChecked && !checked) {
          allChecked = false;
        }
        if (!partialChecked && (checked || halfCheckedKeys.has(key))) {
          partialChecked = true;
        }
      });
      if (!allChecked) {
        checkedKeys.delete(parent.key);
      }
      if (partialChecked) {
        halfCheckedKeys.add(parent.key);
      }
      visitedKeys.add(parent.key);
    });
  }
  return {
    checkedKeys: Array.from(checkedKeys),
    halfCheckedKeys: Array.from(removeFromCheckedKeys(halfCheckedKeys, checkedKeys))
  };
}
function conductCheck(keyList, checked, keyEntities, getCheckDisabled) {
  var warningMissKeys = [];
  var syntheticGetCheckDisabled;
  if (getCheckDisabled) {
    syntheticGetCheckDisabled = getCheckDisabled;
  } else {
    syntheticGetCheckDisabled = isCheckDisabled;
  }
  var keys = new Set(keyList.filter(function(key) {
    var hasEntity = !!getEntity(keyEntities, key);
    if (!hasEntity) {
      warningMissKeys.push(key);
    }
    return hasEntity;
  }));
  var levelEntities = /* @__PURE__ */ new Map();
  var maxLevel = 0;
  Object.keys(keyEntities).forEach(function(key) {
    var entity = keyEntities[key];
    var level = entity.level;
    var levelSet = levelEntities.get(level);
    if (!levelSet) {
      levelSet = /* @__PURE__ */ new Set();
      levelEntities.set(level, levelSet);
    }
    levelSet.add(entity);
    maxLevel = Math.max(maxLevel, level);
  });
  warning_default(!warningMissKeys.length, "Tree missing follow keys: ".concat(warningMissKeys.slice(0, 100).map(function(key) {
    return "'".concat(key, "'");
  }).join(", ")));
  var result;
  if (checked === true) {
    result = fillConductCheck(keys, levelEntities, maxLevel, syntheticGetCheckDisabled);
  } else {
    result = cleanConductCheck(keys, checked.halfCheckedKeys, levelEntities, maxLevel, syntheticGetCheckDisabled);
  }
  return result;
}

// node_modules/rc-tree/es/Tree.js
var MAX_RETRY_TIMES = 10;
var Tree = /* @__PURE__ */ function(_React$Component) {
  _inherits(Tree3, _React$Component);
  var _super = _createSuper(Tree3);
  function Tree3() {
    var _this;
    _classCallCheck(this, Tree3);
    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(_args));
    _defineProperty(_assertThisInitialized(_this), "destroyed", false);
    _defineProperty(_assertThisInitialized(_this), "delayedDragEnterLogic", void 0);
    _defineProperty(_assertThisInitialized(_this), "loadingRetryTimes", {});
    _defineProperty(_assertThisInitialized(_this), "state", {
      keyEntities: {},
      indent: null,
      selectedKeys: [],
      checkedKeys: [],
      halfCheckedKeys: [],
      loadedKeys: [],
      loadingKeys: [],
      expandedKeys: [],
      draggingNodeKey: null,
      dragChildrenKeys: [],
      // dropTargetKey is the key of abstract-drop-node
      // the abstract-drop-node is the real drop node when drag and drop
      // not the DOM drag over node
      dropTargetKey: null,
      dropPosition: null,
      // the drop position of abstract-drop-node, inside 0, top -1, bottom 1
      dropContainerKey: null,
      // the container key of abstract-drop-node if dropPosition is -1 or 1
      dropLevelOffset: null,
      // the drop level offset of abstract-drag-over-node
      dropTargetPos: null,
      // the pos of abstract-drop-node
      dropAllowed: true,
      // if drop to abstract-drop-node is allowed
      // the abstract-drag-over-node
      // if mouse is on the bottom of top dom node or no the top of the bottom dom node
      // abstract-drag-over-node is the top node
      dragOverNodeKey: null,
      treeData: [],
      flattenNodes: [],
      focused: false,
      activeKey: null,
      listChanging: false,
      prevProps: null,
      fieldNames: fillFieldNames()
    });
    _defineProperty(_assertThisInitialized(_this), "dragStartMousePosition", null);
    _defineProperty(_assertThisInitialized(_this), "dragNodeProps", null);
    _defineProperty(_assertThisInitialized(_this), "currentMouseOverDroppableNodeKey", null);
    _defineProperty(_assertThisInitialized(_this), "listRef", /* @__PURE__ */ React38.createRef());
    _defineProperty(_assertThisInitialized(_this), "onNodeDragStart", function(event, nodeProps) {
      var _this$state = _this.state, expandedKeys = _this$state.expandedKeys, keyEntities = _this$state.keyEntities;
      var onDragStart = _this.props.onDragStart;
      var eventKey = nodeProps.eventKey;
      _this.dragNodeProps = nodeProps;
      _this.dragStartMousePosition = {
        x: event.clientX,
        y: event.clientY
      };
      var newExpandedKeys = arrDel(expandedKeys, eventKey);
      _this.setState({
        draggingNodeKey: eventKey,
        dragChildrenKeys: getDragChildrenKeys(eventKey, keyEntities),
        indent: _this.listRef.current.getIndentWidth()
      });
      _this.setExpandedKeys(newExpandedKeys);
      window.addEventListener("dragend", _this.onWindowDragEnd);
      onDragStart === null || onDragStart === void 0 || onDragStart({
        event,
        node: convertNodePropsToEventData(nodeProps)
      });
    });
    _defineProperty(_assertThisInitialized(_this), "onNodeDragEnter", function(event, nodeProps) {
      var _this$state2 = _this.state, expandedKeys = _this$state2.expandedKeys, keyEntities = _this$state2.keyEntities, dragChildrenKeys = _this$state2.dragChildrenKeys, flattenNodes = _this$state2.flattenNodes, indent = _this$state2.indent;
      var _this$props = _this.props, onDragEnter = _this$props.onDragEnter, onExpand = _this$props.onExpand, allowDrop2 = _this$props.allowDrop, direction = _this$props.direction;
      var pos = nodeProps.pos, eventKey = nodeProps.eventKey;
      if (_this.currentMouseOverDroppableNodeKey !== eventKey) {
        _this.currentMouseOverDroppableNodeKey = eventKey;
      }
      if (!_this.dragNodeProps) {
        _this.resetDragState();
        return;
      }
      var _calcDropPosition = calcDropPosition(event, _this.dragNodeProps, nodeProps, indent, _this.dragStartMousePosition, allowDrop2, flattenNodes, keyEntities, expandedKeys, direction), dropPosition = _calcDropPosition.dropPosition, dropLevelOffset = _calcDropPosition.dropLevelOffset, dropTargetKey = _calcDropPosition.dropTargetKey, dropContainerKey = _calcDropPosition.dropContainerKey, dropTargetPos = _calcDropPosition.dropTargetPos, dropAllowed = _calcDropPosition.dropAllowed, dragOverNodeKey = _calcDropPosition.dragOverNodeKey;
      if (
        // don't allow drop inside its children
        dragChildrenKeys.includes(dropTargetKey) || // don't allow drop when drop is not allowed caculated by calcDropPosition
        !dropAllowed
      ) {
        _this.resetDragState();
        return;
      }
      if (!_this.delayedDragEnterLogic) {
        _this.delayedDragEnterLogic = {};
      }
      Object.keys(_this.delayedDragEnterLogic).forEach(function(key) {
        clearTimeout(_this.delayedDragEnterLogic[key]);
      });
      if (_this.dragNodeProps.eventKey !== nodeProps.eventKey) {
        event.persist();
        _this.delayedDragEnterLogic[pos] = window.setTimeout(function() {
          if (_this.state.draggingNodeKey === null) {
            return;
          }
          var newExpandedKeys = _toConsumableArray(expandedKeys);
          var entity = getEntity(keyEntities, nodeProps.eventKey);
          if (entity && (entity.children || []).length) {
            newExpandedKeys = arrAdd(expandedKeys, nodeProps.eventKey);
          }
          if (!_this.props.hasOwnProperty("expandedKeys")) {
            _this.setExpandedKeys(newExpandedKeys);
          }
          onExpand === null || onExpand === void 0 || onExpand(newExpandedKeys, {
            node: convertNodePropsToEventData(nodeProps),
            expanded: true,
            nativeEvent: event.nativeEvent
          });
        }, 800);
      }
      if (_this.dragNodeProps.eventKey === dropTargetKey && dropLevelOffset === 0) {
        _this.resetDragState();
        return;
      }
      _this.setState({
        dragOverNodeKey,
        dropPosition,
        dropLevelOffset,
        dropTargetKey,
        dropContainerKey,
        dropTargetPos,
        dropAllowed
      });
      onDragEnter === null || onDragEnter === void 0 || onDragEnter({
        event,
        node: convertNodePropsToEventData(nodeProps),
        expandedKeys
      });
    });
    _defineProperty(_assertThisInitialized(_this), "onNodeDragOver", function(event, nodeProps) {
      var _this$state3 = _this.state, dragChildrenKeys = _this$state3.dragChildrenKeys, flattenNodes = _this$state3.flattenNodes, keyEntities = _this$state3.keyEntities, expandedKeys = _this$state3.expandedKeys, indent = _this$state3.indent;
      var _this$props2 = _this.props, onDragOver = _this$props2.onDragOver, allowDrop2 = _this$props2.allowDrop, direction = _this$props2.direction;
      if (!_this.dragNodeProps) {
        return;
      }
      var _calcDropPosition2 = calcDropPosition(event, _this.dragNodeProps, nodeProps, indent, _this.dragStartMousePosition, allowDrop2, flattenNodes, keyEntities, expandedKeys, direction), dropPosition = _calcDropPosition2.dropPosition, dropLevelOffset = _calcDropPosition2.dropLevelOffset, dropTargetKey = _calcDropPosition2.dropTargetKey, dropContainerKey = _calcDropPosition2.dropContainerKey, dropTargetPos = _calcDropPosition2.dropTargetPos, dropAllowed = _calcDropPosition2.dropAllowed, dragOverNodeKey = _calcDropPosition2.dragOverNodeKey;
      if (dragChildrenKeys.includes(dropTargetKey) || !dropAllowed) {
        return;
      }
      if (_this.dragNodeProps.eventKey === dropTargetKey && dropLevelOffset === 0) {
        if (!(_this.state.dropPosition === null && _this.state.dropLevelOffset === null && _this.state.dropTargetKey === null && _this.state.dropContainerKey === null && _this.state.dropTargetPos === null && _this.state.dropAllowed === false && _this.state.dragOverNodeKey === null)) {
          _this.resetDragState();
        }
      } else if (!(dropPosition === _this.state.dropPosition && dropLevelOffset === _this.state.dropLevelOffset && dropTargetKey === _this.state.dropTargetKey && dropContainerKey === _this.state.dropContainerKey && dropTargetPos === _this.state.dropTargetPos && dropAllowed === _this.state.dropAllowed && dragOverNodeKey === _this.state.dragOverNodeKey)) {
        _this.setState({
          dropPosition,
          dropLevelOffset,
          dropTargetKey,
          dropContainerKey,
          dropTargetPos,
          dropAllowed,
          dragOverNodeKey
        });
      }
      onDragOver === null || onDragOver === void 0 || onDragOver({
        event,
        node: convertNodePropsToEventData(nodeProps)
      });
    });
    _defineProperty(_assertThisInitialized(_this), "onNodeDragLeave", function(event, nodeProps) {
      if (_this.currentMouseOverDroppableNodeKey === nodeProps.eventKey && !event.currentTarget.contains(event.relatedTarget)) {
        _this.resetDragState();
        _this.currentMouseOverDroppableNodeKey = null;
      }
      var onDragLeave = _this.props.onDragLeave;
      onDragLeave === null || onDragLeave === void 0 || onDragLeave({
        event,
        node: convertNodePropsToEventData(nodeProps)
      });
    });
    _defineProperty(_assertThisInitialized(_this), "onWindowDragEnd", function(event) {
      _this.onNodeDragEnd(event, null, true);
      window.removeEventListener("dragend", _this.onWindowDragEnd);
    });
    _defineProperty(_assertThisInitialized(_this), "onNodeDragEnd", function(event, nodeProps) {
      var onDragEnd = _this.props.onDragEnd;
      _this.setState({
        dragOverNodeKey: null
      });
      _this.cleanDragState();
      onDragEnd === null || onDragEnd === void 0 || onDragEnd({
        event,
        node: convertNodePropsToEventData(nodeProps)
      });
      _this.dragNodeProps = null;
      window.removeEventListener("dragend", _this.onWindowDragEnd);
    });
    _defineProperty(_assertThisInitialized(_this), "onNodeDrop", function(event, _) {
      var _this$getActiveItem;
      var outsideTree = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
      var _this$state4 = _this.state, dragChildrenKeys = _this$state4.dragChildrenKeys, dropPosition = _this$state4.dropPosition, dropTargetKey = _this$state4.dropTargetKey, dropTargetPos = _this$state4.dropTargetPos, dropAllowed = _this$state4.dropAllowed;
      if (!dropAllowed) {
        return;
      }
      var onDrop = _this.props.onDrop;
      _this.setState({
        dragOverNodeKey: null
      });
      _this.cleanDragState();
      if (dropTargetKey === null) return;
      var abstractDropNodeProps = _objectSpread2(_objectSpread2({}, getTreeNodeProps(dropTargetKey, _this.getTreeNodeRequiredProps())), {}, {
        active: ((_this$getActiveItem = _this.getActiveItem()) === null || _this$getActiveItem === void 0 ? void 0 : _this$getActiveItem.key) === dropTargetKey,
        data: getEntity(_this.state.keyEntities, dropTargetKey).node
      });
      var dropToChild = dragChildrenKeys.includes(dropTargetKey);
      warning_default(!dropToChild, "Can not drop to dragNode's children node. This is a bug of rc-tree. Please report an issue.");
      var posArr = posToArr(dropTargetPos);
      var dropResult = {
        event,
        node: convertNodePropsToEventData(abstractDropNodeProps),
        dragNode: _this.dragNodeProps ? convertNodePropsToEventData(_this.dragNodeProps) : null,
        dragNodesKeys: [_this.dragNodeProps.eventKey].concat(dragChildrenKeys),
        dropToGap: dropPosition !== 0,
        dropPosition: dropPosition + Number(posArr[posArr.length - 1])
      };
      if (!outsideTree) {
        onDrop === null || onDrop === void 0 || onDrop(dropResult);
      }
      _this.dragNodeProps = null;
    });
    _defineProperty(_assertThisInitialized(_this), "cleanDragState", function() {
      var draggingNodeKey = _this.state.draggingNodeKey;
      if (draggingNodeKey !== null) {
        _this.setState({
          draggingNodeKey: null,
          dropPosition: null,
          dropContainerKey: null,
          dropTargetKey: null,
          dropLevelOffset: null,
          dropAllowed: true,
          dragOverNodeKey: null
        });
      }
      _this.dragStartMousePosition = null;
      _this.currentMouseOverDroppableNodeKey = null;
    });
    _defineProperty(_assertThisInitialized(_this), "triggerExpandActionExpand", function(e, treeNode) {
      var _this$state5 = _this.state, expandedKeys = _this$state5.expandedKeys, flattenNodes = _this$state5.flattenNodes;
      var expanded = treeNode.expanded, key = treeNode.key, isLeaf = treeNode.isLeaf;
      if (isLeaf || e.shiftKey || e.metaKey || e.ctrlKey) {
        return;
      }
      var node = flattenNodes.filter(function(nodeItem) {
        return nodeItem.key === key;
      })[0];
      var eventNode = convertNodePropsToEventData(_objectSpread2(_objectSpread2({}, getTreeNodeProps(key, _this.getTreeNodeRequiredProps())), {}, {
        data: node.data
      }));
      _this.setExpandedKeys(expanded ? arrDel(expandedKeys, key) : arrAdd(expandedKeys, key));
      _this.onNodeExpand(e, eventNode);
    });
    _defineProperty(_assertThisInitialized(_this), "onNodeClick", function(e, treeNode) {
      var _this$props3 = _this.props, onClick = _this$props3.onClick, expandAction = _this$props3.expandAction;
      if (expandAction === "click") {
        _this.triggerExpandActionExpand(e, treeNode);
      }
      onClick === null || onClick === void 0 || onClick(e, treeNode);
    });
    _defineProperty(_assertThisInitialized(_this), "onNodeDoubleClick", function(e, treeNode) {
      var _this$props4 = _this.props, onDoubleClick = _this$props4.onDoubleClick, expandAction = _this$props4.expandAction;
      if (expandAction === "doubleClick") {
        _this.triggerExpandActionExpand(e, treeNode);
      }
      onDoubleClick === null || onDoubleClick === void 0 || onDoubleClick(e, treeNode);
    });
    _defineProperty(_assertThisInitialized(_this), "onNodeSelect", function(e, treeNode) {
      var selectedKeys = _this.state.selectedKeys;
      var _this$state6 = _this.state, keyEntities = _this$state6.keyEntities, fieldNames = _this$state6.fieldNames;
      var _this$props5 = _this.props, onSelect = _this$props5.onSelect, multiple = _this$props5.multiple;
      var selected = treeNode.selected;
      var key = treeNode[fieldNames.key];
      var targetSelected = !selected;
      if (!targetSelected) {
        selectedKeys = arrDel(selectedKeys, key);
      } else if (!multiple) {
        selectedKeys = [key];
      } else {
        selectedKeys = arrAdd(selectedKeys, key);
      }
      var selectedNodes = selectedKeys.map(function(selectedKey) {
        var entity = getEntity(keyEntities, selectedKey);
        return entity ? entity.node : null;
      }).filter(Boolean);
      _this.setUncontrolledState({
        selectedKeys
      });
      onSelect === null || onSelect === void 0 || onSelect(selectedKeys, {
        event: "select",
        selected: targetSelected,
        node: treeNode,
        selectedNodes,
        nativeEvent: e.nativeEvent
      });
    });
    _defineProperty(_assertThisInitialized(_this), "onNodeCheck", function(e, treeNode, checked) {
      var _this$state7 = _this.state, keyEntities = _this$state7.keyEntities, oriCheckedKeys = _this$state7.checkedKeys, oriHalfCheckedKeys = _this$state7.halfCheckedKeys;
      var _this$props6 = _this.props, checkStrictly = _this$props6.checkStrictly, onCheck = _this$props6.onCheck;
      var key = treeNode.key;
      var checkedObj;
      var eventObj = {
        event: "check",
        node: treeNode,
        checked,
        nativeEvent: e.nativeEvent
      };
      if (checkStrictly) {
        var checkedKeys = checked ? arrAdd(oriCheckedKeys, key) : arrDel(oriCheckedKeys, key);
        var halfCheckedKeys = arrDel(oriHalfCheckedKeys, key);
        checkedObj = {
          checked: checkedKeys,
          halfChecked: halfCheckedKeys
        };
        eventObj.checkedNodes = checkedKeys.map(function(checkedKey) {
          return getEntity(keyEntities, checkedKey);
        }).filter(Boolean).map(function(entity) {
          return entity.node;
        });
        _this.setUncontrolledState({
          checkedKeys
        });
      } else {
        var _conductCheck = conductCheck([].concat(_toConsumableArray(oriCheckedKeys), [key]), true, keyEntities), _checkedKeys = _conductCheck.checkedKeys, _halfCheckedKeys = _conductCheck.halfCheckedKeys;
        if (!checked) {
          var keySet = new Set(_checkedKeys);
          keySet.delete(key);
          var _conductCheck2 = conductCheck(Array.from(keySet), {
            checked: false,
            halfCheckedKeys: _halfCheckedKeys
          }, keyEntities);
          _checkedKeys = _conductCheck2.checkedKeys;
          _halfCheckedKeys = _conductCheck2.halfCheckedKeys;
        }
        checkedObj = _checkedKeys;
        eventObj.checkedNodes = [];
        eventObj.checkedNodesPositions = [];
        eventObj.halfCheckedKeys = _halfCheckedKeys;
        _checkedKeys.forEach(function(checkedKey) {
          var entity = getEntity(keyEntities, checkedKey);
          if (!entity) return;
          var node = entity.node, pos = entity.pos;
          eventObj.checkedNodes.push(node);
          eventObj.checkedNodesPositions.push({
            node,
            pos
          });
        });
        _this.setUncontrolledState({
          checkedKeys: _checkedKeys
        }, false, {
          halfCheckedKeys: _halfCheckedKeys
        });
      }
      onCheck === null || onCheck === void 0 || onCheck(checkedObj, eventObj);
    });
    _defineProperty(_assertThisInitialized(_this), "onNodeLoad", function(treeNode) {
      var _entity$children;
      var key = treeNode.key;
      var keyEntities = _this.state.keyEntities;
      var entity = getEntity(keyEntities, key);
      if (entity !== null && entity !== void 0 && (_entity$children = entity.children) !== null && _entity$children !== void 0 && _entity$children.length) {
        return;
      }
      var loadPromise = new Promise(function(resolve, reject) {
        _this.setState(function(_ref) {
          var _ref$loadedKeys = _ref.loadedKeys, loadedKeys = _ref$loadedKeys === void 0 ? [] : _ref$loadedKeys, _ref$loadingKeys = _ref.loadingKeys, loadingKeys = _ref$loadingKeys === void 0 ? [] : _ref$loadingKeys;
          var _this$props7 = _this.props, loadData = _this$props7.loadData, onLoad = _this$props7.onLoad;
          if (!loadData || loadedKeys.includes(key) || loadingKeys.includes(key)) {
            return null;
          }
          var promise = loadData(treeNode);
          promise.then(function() {
            var currentLoadedKeys = _this.state.loadedKeys;
            var newLoadedKeys = arrAdd(currentLoadedKeys, key);
            onLoad === null || onLoad === void 0 || onLoad(newLoadedKeys, {
              event: "load",
              node: treeNode
            });
            _this.setUncontrolledState({
              loadedKeys: newLoadedKeys
            });
            _this.setState(function(prevState) {
              return {
                loadingKeys: arrDel(prevState.loadingKeys, key)
              };
            });
            resolve();
          }).catch(function(e) {
            _this.setState(function(prevState) {
              return {
                loadingKeys: arrDel(prevState.loadingKeys, key)
              };
            });
            _this.loadingRetryTimes[key] = (_this.loadingRetryTimes[key] || 0) + 1;
            if (_this.loadingRetryTimes[key] >= MAX_RETRY_TIMES) {
              var currentLoadedKeys = _this.state.loadedKeys;
              warning_default(false, "Retry for `loadData` many times but still failed. No more retry.");
              _this.setUncontrolledState({
                loadedKeys: arrAdd(currentLoadedKeys, key)
              });
              resolve();
            }
            reject(e);
          });
          return {
            loadingKeys: arrAdd(loadingKeys, key)
          };
        });
      });
      loadPromise.catch(function() {
      });
      return loadPromise;
    });
    _defineProperty(_assertThisInitialized(_this), "onNodeMouseEnter", function(event, node) {
      var onMouseEnter = _this.props.onMouseEnter;
      onMouseEnter === null || onMouseEnter === void 0 || onMouseEnter({
        event,
        node
      });
    });
    _defineProperty(_assertThisInitialized(_this), "onNodeMouseLeave", function(event, node) {
      var onMouseLeave = _this.props.onMouseLeave;
      onMouseLeave === null || onMouseLeave === void 0 || onMouseLeave({
        event,
        node
      });
    });
    _defineProperty(_assertThisInitialized(_this), "onNodeContextMenu", function(event, node) {
      var onRightClick = _this.props.onRightClick;
      if (onRightClick) {
        event.preventDefault();
        onRightClick({
          event,
          node
        });
      }
    });
    _defineProperty(_assertThisInitialized(_this), "onFocus", function() {
      var onFocus = _this.props.onFocus;
      _this.setState({
        focused: true
      });
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      onFocus === null || onFocus === void 0 || onFocus.apply(void 0, args);
    });
    _defineProperty(_assertThisInitialized(_this), "onBlur", function() {
      var onBlur = _this.props.onBlur;
      _this.setState({
        focused: false
      });
      _this.onActiveChange(null);
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      onBlur === null || onBlur === void 0 || onBlur.apply(void 0, args);
    });
    _defineProperty(_assertThisInitialized(_this), "getTreeNodeRequiredProps", function() {
      var _this$state8 = _this.state, expandedKeys = _this$state8.expandedKeys, selectedKeys = _this$state8.selectedKeys, loadedKeys = _this$state8.loadedKeys, loadingKeys = _this$state8.loadingKeys, checkedKeys = _this$state8.checkedKeys, halfCheckedKeys = _this$state8.halfCheckedKeys, dragOverNodeKey = _this$state8.dragOverNodeKey, dropPosition = _this$state8.dropPosition, keyEntities = _this$state8.keyEntities;
      return {
        expandedKeys: expandedKeys || [],
        selectedKeys: selectedKeys || [],
        loadedKeys: loadedKeys || [],
        loadingKeys: loadingKeys || [],
        checkedKeys: checkedKeys || [],
        halfCheckedKeys: halfCheckedKeys || [],
        dragOverNodeKey,
        dropPosition,
        keyEntities
      };
    });
    _defineProperty(_assertThisInitialized(_this), "setExpandedKeys", function(expandedKeys) {
      var _this$state9 = _this.state, treeData = _this$state9.treeData, fieldNames = _this$state9.fieldNames;
      var flattenNodes = flattenTreeData(treeData, expandedKeys, fieldNames);
      _this.setUncontrolledState({
        expandedKeys,
        flattenNodes
      }, true);
    });
    _defineProperty(_assertThisInitialized(_this), "onNodeExpand", function(e, treeNode) {
      var expandedKeys = _this.state.expandedKeys;
      var _this$state10 = _this.state, listChanging = _this$state10.listChanging, fieldNames = _this$state10.fieldNames;
      var _this$props8 = _this.props, onExpand = _this$props8.onExpand, loadData = _this$props8.loadData;
      var expanded = treeNode.expanded;
      var key = treeNode[fieldNames.key];
      if (listChanging) {
        return;
      }
      var certain = expandedKeys.includes(key);
      var targetExpanded = !expanded;
      warning_default(expanded && certain || !expanded && !certain, "Expand state not sync with index check");
      expandedKeys = targetExpanded ? arrAdd(expandedKeys, key) : arrDel(expandedKeys, key);
      _this.setExpandedKeys(expandedKeys);
      onExpand === null || onExpand === void 0 || onExpand(expandedKeys, {
        node: treeNode,
        expanded: targetExpanded,
        nativeEvent: e.nativeEvent
      });
      if (targetExpanded && loadData) {
        var loadPromise = _this.onNodeLoad(treeNode);
        if (loadPromise) {
          loadPromise.then(function() {
            var newFlattenTreeData = flattenTreeData(_this.state.treeData, expandedKeys, fieldNames);
            _this.setUncontrolledState({
              flattenNodes: newFlattenTreeData
            });
          }).catch(function() {
            var currentExpandedKeys = _this.state.expandedKeys;
            var expandedKeysToRestore = arrDel(currentExpandedKeys, key);
            _this.setExpandedKeys(expandedKeysToRestore);
          });
        }
      }
    });
    _defineProperty(_assertThisInitialized(_this), "onListChangeStart", function() {
      _this.setUncontrolledState({
        listChanging: true
      });
    });
    _defineProperty(_assertThisInitialized(_this), "onListChangeEnd", function() {
      setTimeout(function() {
        _this.setUncontrolledState({
          listChanging: false
        });
      });
    });
    _defineProperty(_assertThisInitialized(_this), "onActiveChange", function(newActiveKey) {
      var activeKey = _this.state.activeKey;
      var _this$props9 = _this.props, onActiveChange = _this$props9.onActiveChange, _this$props9$itemScro = _this$props9.itemScrollOffset, itemScrollOffset = _this$props9$itemScro === void 0 ? 0 : _this$props9$itemScro;
      if (activeKey === newActiveKey) {
        return;
      }
      _this.setState({
        activeKey: newActiveKey
      });
      if (newActiveKey !== null) {
        _this.scrollTo({
          key: newActiveKey,
          offset: itemScrollOffset
        });
      }
      onActiveChange === null || onActiveChange === void 0 || onActiveChange(newActiveKey);
    });
    _defineProperty(_assertThisInitialized(_this), "getActiveItem", function() {
      var _this$state11 = _this.state, activeKey = _this$state11.activeKey, flattenNodes = _this$state11.flattenNodes;
      if (activeKey === null) {
        return null;
      }
      return flattenNodes.find(function(_ref2) {
        var key = _ref2.key;
        return key === activeKey;
      }) || null;
    });
    _defineProperty(_assertThisInitialized(_this), "offsetActiveKey", function(offset) {
      var _this$state12 = _this.state, flattenNodes = _this$state12.flattenNodes, activeKey = _this$state12.activeKey;
      var index2 = flattenNodes.findIndex(function(_ref3) {
        var key = _ref3.key;
        return key === activeKey;
      });
      if (index2 === -1 && offset < 0) {
        index2 = flattenNodes.length;
      }
      index2 = (index2 + offset + flattenNodes.length) % flattenNodes.length;
      var item = flattenNodes[index2];
      if (item) {
        var _key4 = item.key;
        _this.onActiveChange(_key4);
      } else {
        _this.onActiveChange(null);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function(event) {
      var _this$state13 = _this.state, activeKey = _this$state13.activeKey, expandedKeys = _this$state13.expandedKeys, checkedKeys = _this$state13.checkedKeys, fieldNames = _this$state13.fieldNames;
      var _this$props10 = _this.props, onKeyDown = _this$props10.onKeyDown, checkable = _this$props10.checkable, selectable = _this$props10.selectable;
      switch (event.which) {
        case KeyCode_default.UP: {
          _this.offsetActiveKey(-1);
          event.preventDefault();
          break;
        }
        case KeyCode_default.DOWN: {
          _this.offsetActiveKey(1);
          event.preventDefault();
          break;
        }
      }
      var activeItem = _this.getActiveItem();
      if (activeItem && activeItem.data) {
        var treeNodeRequiredProps = _this.getTreeNodeRequiredProps();
        var expandable = activeItem.data.isLeaf === false || !!(activeItem.data[fieldNames.children] || []).length;
        var eventNode = convertNodePropsToEventData(_objectSpread2(_objectSpread2({}, getTreeNodeProps(activeKey, treeNodeRequiredProps)), {}, {
          data: activeItem.data,
          active: true
        }));
        switch (event.which) {
          // >>> Expand
          case KeyCode_default.LEFT: {
            if (expandable && expandedKeys.includes(activeKey)) {
              _this.onNodeExpand({}, eventNode);
            } else if (activeItem.parent) {
              _this.onActiveChange(activeItem.parent.key);
            }
            event.preventDefault();
            break;
          }
          case KeyCode_default.RIGHT: {
            if (expandable && !expandedKeys.includes(activeKey)) {
              _this.onNodeExpand({}, eventNode);
            } else if (activeItem.children && activeItem.children.length) {
              _this.onActiveChange(activeItem.children[0].key);
            }
            event.preventDefault();
            break;
          }
          // Selection
          case KeyCode_default.ENTER:
          case KeyCode_default.SPACE: {
            if (checkable && !eventNode.disabled && eventNode.checkable !== false && !eventNode.disableCheckbox) {
              _this.onNodeCheck({}, eventNode, !checkedKeys.includes(activeKey));
            } else if (!checkable && selectable && !eventNode.disabled && eventNode.selectable !== false) {
              _this.onNodeSelect({}, eventNode);
            }
            break;
          }
        }
      }
      onKeyDown === null || onKeyDown === void 0 || onKeyDown(event);
    });
    _defineProperty(_assertThisInitialized(_this), "setUncontrolledState", function(state) {
      var atomic = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var forceState = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!_this.destroyed) {
        var needSync = false;
        var allPassed = true;
        var newState = {};
        Object.keys(state).forEach(function(name) {
          if (_this.props.hasOwnProperty(name)) {
            allPassed = false;
            return;
          }
          needSync = true;
          newState[name] = state[name];
        });
        if (needSync && (!atomic || allPassed)) {
          _this.setState(_objectSpread2(_objectSpread2({}, newState), forceState));
        }
      }
    });
    _defineProperty(_assertThisInitialized(_this), "scrollTo", function(scroll) {
      _this.listRef.current.scrollTo(scroll);
    });
    return _this;
  }
  _createClass(Tree3, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.destroyed = false;
      this.onUpdated();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.onUpdated();
    }
  }, {
    key: "onUpdated",
    value: function onUpdated() {
      var _this$props11 = this.props, activeKey = _this$props11.activeKey, _this$props11$itemScr = _this$props11.itemScrollOffset, itemScrollOffset = _this$props11$itemScr === void 0 ? 0 : _this$props11$itemScr;
      if (activeKey !== void 0 && activeKey !== this.state.activeKey) {
        this.setState({
          activeKey
        });
        if (activeKey !== null) {
          this.scrollTo({
            key: activeKey,
            offset: itemScrollOffset
          });
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("dragend", this.onWindowDragEnd);
      this.destroyed = true;
    }
  }, {
    key: "resetDragState",
    value: function resetDragState() {
      this.setState({
        dragOverNodeKey: null,
        dropPosition: null,
        dropLevelOffset: null,
        dropTargetKey: null,
        dropContainerKey: null,
        dropTargetPos: null,
        dropAllowed: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state14 = this.state, focused = _this$state14.focused, flattenNodes = _this$state14.flattenNodes, keyEntities = _this$state14.keyEntities, draggingNodeKey = _this$state14.draggingNodeKey, activeKey = _this$state14.activeKey, dropLevelOffset = _this$state14.dropLevelOffset, dropContainerKey = _this$state14.dropContainerKey, dropTargetKey = _this$state14.dropTargetKey, dropPosition = _this$state14.dropPosition, dragOverNodeKey = _this$state14.dragOverNodeKey, indent = _this$state14.indent;
      var _this$props12 = this.props, prefixCls = _this$props12.prefixCls, className = _this$props12.className, style2 = _this$props12.style, showLine = _this$props12.showLine, focusable = _this$props12.focusable, _this$props12$tabInde = _this$props12.tabIndex, tabIndex = _this$props12$tabInde === void 0 ? 0 : _this$props12$tabInde, selectable = _this$props12.selectable, showIcon = _this$props12.showIcon, icon = _this$props12.icon, switcherIcon = _this$props12.switcherIcon, draggable = _this$props12.draggable, checkable = _this$props12.checkable, checkStrictly = _this$props12.checkStrictly, disabled = _this$props12.disabled, motion = _this$props12.motion, loadData = _this$props12.loadData, filterTreeNode = _this$props12.filterTreeNode, height = _this$props12.height, itemHeight = _this$props12.itemHeight, scrollWidth = _this$props12.scrollWidth, virtual = _this$props12.virtual, titleRender = _this$props12.titleRender, dropIndicatorRender = _this$props12.dropIndicatorRender, onContextMenu = _this$props12.onContextMenu, onScroll = _this$props12.onScroll, direction = _this$props12.direction, rootClassName = _this$props12.rootClassName, rootStyle = _this$props12.rootStyle;
      var domProps = pickAttrs(this.props, {
        aria: true,
        data: true
      });
      var draggableConfig;
      if (draggable) {
        if (_typeof(draggable) === "object") {
          draggableConfig = draggable;
        } else if (typeof draggable === "function") {
          draggableConfig = {
            nodeDraggable: draggable
          };
        } else {
          draggableConfig = {};
        }
      }
      var contextValue = {
        prefixCls,
        selectable,
        showIcon,
        icon,
        switcherIcon,
        draggable: draggableConfig,
        draggingNodeKey,
        checkable,
        checkStrictly,
        disabled,
        keyEntities,
        dropLevelOffset,
        dropContainerKey,
        dropTargetKey,
        dropPosition,
        dragOverNodeKey,
        indent,
        direction,
        dropIndicatorRender,
        loadData,
        filterTreeNode,
        titleRender,
        onNodeClick: this.onNodeClick,
        onNodeDoubleClick: this.onNodeDoubleClick,
        onNodeExpand: this.onNodeExpand,
        onNodeSelect: this.onNodeSelect,
        onNodeCheck: this.onNodeCheck,
        onNodeLoad: this.onNodeLoad,
        onNodeMouseEnter: this.onNodeMouseEnter,
        onNodeMouseLeave: this.onNodeMouseLeave,
        onNodeContextMenu: this.onNodeContextMenu,
        onNodeDragStart: this.onNodeDragStart,
        onNodeDragEnter: this.onNodeDragEnter,
        onNodeDragOver: this.onNodeDragOver,
        onNodeDragLeave: this.onNodeDragLeave,
        onNodeDragEnd: this.onNodeDragEnd,
        onNodeDrop: this.onNodeDrop
      };
      return /* @__PURE__ */ React38.createElement(TreeContext.Provider, {
        value: contextValue
      }, /* @__PURE__ */ React38.createElement("div", {
        className: (0, import_classnames8.default)(prefixCls, className, rootClassName, _defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-show-line"), showLine), "".concat(prefixCls, "-focused"), focused), "".concat(prefixCls, "-active-focused"), activeKey !== null)),
        style: rootStyle
      }, /* @__PURE__ */ React38.createElement(NodeList_default, _extends({
        ref: this.listRef,
        prefixCls,
        style: style2,
        data: flattenNodes,
        disabled,
        selectable,
        checkable: !!checkable,
        motion,
        dragging: draggingNodeKey !== null,
        height,
        itemHeight,
        virtual,
        focusable,
        focused,
        tabIndex,
        activeItem: this.getActiveItem(),
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        onKeyDown: this.onKeyDown,
        onActiveChange: this.onActiveChange,
        onListChangeStart: this.onListChangeStart,
        onListChangeEnd: this.onListChangeEnd,
        onContextMenu,
        onScroll,
        scrollWidth
      }, this.getTreeNodeRequiredProps(), domProps))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, prevState) {
      var prevProps = prevState.prevProps;
      var newState = {
        prevProps: props
      };
      function needSync(name) {
        return !prevProps && props.hasOwnProperty(name) || prevProps && prevProps[name] !== props[name];
      }
      var treeData;
      var fieldNames = prevState.fieldNames;
      if (needSync("fieldNames")) {
        fieldNames = fillFieldNames(props.fieldNames);
        newState.fieldNames = fieldNames;
      }
      if (needSync("treeData")) {
        treeData = props.treeData;
      } else if (needSync("children")) {
        warning_default(false, "`children` of Tree is deprecated. Please use `treeData` instead.");
        treeData = convertTreeToData(props.children);
      }
      if (treeData) {
        newState.treeData = treeData;
        var entitiesMap = convertDataToEntities(treeData, {
          fieldNames
        });
        newState.keyEntities = _objectSpread2(_defineProperty({}, MOTION_KEY, MotionEntity), entitiesMap.keyEntities);
        if (true) {
          warningWithoutKey(treeData, fieldNames);
        }
      }
      var keyEntities = newState.keyEntities || prevState.keyEntities;
      if (needSync("expandedKeys") || prevProps && needSync("autoExpandParent")) {
        newState.expandedKeys = props.autoExpandParent || !prevProps && props.defaultExpandParent ? conductExpandParent(props.expandedKeys, keyEntities) : props.expandedKeys;
      } else if (!prevProps && props.defaultExpandAll) {
        var cloneKeyEntities = _objectSpread2({}, keyEntities);
        delete cloneKeyEntities[MOTION_KEY];
        var nextExpandedKeys = [];
        Object.keys(cloneKeyEntities).forEach(function(key) {
          var entity = cloneKeyEntities[key];
          if (entity.children && entity.children.length) {
            nextExpandedKeys.push(entity.key);
          }
        });
        newState.expandedKeys = nextExpandedKeys;
      } else if (!prevProps && props.defaultExpandedKeys) {
        newState.expandedKeys = props.autoExpandParent || props.defaultExpandParent ? conductExpandParent(props.defaultExpandedKeys, keyEntities) : props.defaultExpandedKeys;
      }
      if (!newState.expandedKeys) {
        delete newState.expandedKeys;
      }
      if (treeData || newState.expandedKeys) {
        var flattenNodes = flattenTreeData(treeData || prevState.treeData, newState.expandedKeys || prevState.expandedKeys, fieldNames);
        newState.flattenNodes = flattenNodes;
      }
      if (props.selectable) {
        if (needSync("selectedKeys")) {
          newState.selectedKeys = calcSelectedKeys(props.selectedKeys, props);
        } else if (!prevProps && props.defaultSelectedKeys) {
          newState.selectedKeys = calcSelectedKeys(props.defaultSelectedKeys, props);
        }
      }
      if (props.checkable) {
        var checkedKeyEntity;
        if (needSync("checkedKeys")) {
          checkedKeyEntity = parseCheckedKeys(props.checkedKeys) || {};
        } else if (!prevProps && props.defaultCheckedKeys) {
          checkedKeyEntity = parseCheckedKeys(props.defaultCheckedKeys) || {};
        } else if (treeData) {
          checkedKeyEntity = parseCheckedKeys(props.checkedKeys) || {
            checkedKeys: prevState.checkedKeys,
            halfCheckedKeys: prevState.halfCheckedKeys
          };
        }
        if (checkedKeyEntity) {
          var _checkedKeyEntity = checkedKeyEntity, _checkedKeyEntity$che = _checkedKeyEntity.checkedKeys, checkedKeys = _checkedKeyEntity$che === void 0 ? [] : _checkedKeyEntity$che, _checkedKeyEntity$hal = _checkedKeyEntity.halfCheckedKeys, halfCheckedKeys = _checkedKeyEntity$hal === void 0 ? [] : _checkedKeyEntity$hal;
          if (!props.checkStrictly) {
            var conductKeys = conductCheck(checkedKeys, true, keyEntities);
            checkedKeys = conductKeys.checkedKeys;
            halfCheckedKeys = conductKeys.halfCheckedKeys;
          }
          newState.checkedKeys = checkedKeys;
          newState.halfCheckedKeys = halfCheckedKeys;
        }
      }
      if (needSync("loadedKeys")) {
        newState.loadedKeys = props.loadedKeys;
      }
      return newState;
    }
  }]);
  return Tree3;
}(React38.Component);
_defineProperty(Tree, "defaultProps", {
  prefixCls: "rc-tree",
  showLine: false,
  showIcon: true,
  selectable: true,
  multiple: false,
  checkable: false,
  disabled: false,
  checkStrictly: false,
  draggable: false,
  defaultExpandParent: true,
  autoExpandParent: false,
  defaultExpandAll: false,
  defaultExpandedKeys: [],
  defaultCheckedKeys: [],
  defaultSelectedKeys: [],
  dropIndicatorRender: DropIndicator_default,
  allowDrop: function allowDrop() {
    return true;
  },
  expandAction: false
});
_defineProperty(Tree, "TreeNode", TreeNode_default);
var Tree_default = Tree;

// node_modules/rc-tree/es/index.js
var es_default4 = Tree_default;

// src/components/Tree.jsx
var import_object_assign = __toESM(require_object_assign());

// node_modules/@mui/utils/esm/useEnhancedEffect/useEnhancedEffect.js
import * as React39 from "react";
var useEnhancedEffect = typeof window !== "undefined" ? React39.useLayoutEffect : React39.useEffect;
var useEnhancedEffect_default = useEnhancedEffect;

// node_modules/@mui/utils/esm/chainPropTypes/chainPropTypes.js
function chainPropTypes(propType1, propType2) {
  if (false) {
    return () => null;
  }
  return function validate(...args) {
    return propType1(...args) || propType2(...args);
  };
}

// node_modules/@mui/utils/esm/elementAcceptingRef/elementAcceptingRef.js
var import_prop_types = __toESM(require_prop_types());
function isClassComponent(elementType) {
  const {
    prototype = {}
  } = elementType;
  return Boolean(prototype.isReactComponent);
}
function acceptingRef(props, propName, componentName, location, propFullName) {
  const element = props[propName];
  const safePropName = propFullName || propName;
  if (element == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window === "undefined") {
    return null;
  }
  let warningHint;
  const elementType = element.type;
  if (typeof elementType === "function" && !isClassComponent(elementType)) {
    warningHint = "Did you accidentally use a plain function component for an element instead?";
  }
  if (warningHint !== void 0) {
    return new Error(`Invalid ${location} \`${safePropName}\` supplied to \`${componentName}\`. Expected an element that can hold a ref. ${warningHint} For more information see https://mui.com/r/caveat-with-refs-guide`);
  }
  return null;
}
var elementAcceptingRef = chainPropTypes(import_prop_types.default.element, acceptingRef);
elementAcceptingRef.isRequired = chainPropTypes(import_prop_types.default.element.isRequired, acceptingRef);
var elementAcceptingRef_default = elementAcceptingRef;

// node_modules/@mui/utils/esm/exactProp/exactProp.js
var specialProperty = "exact-prop: \u200B";
function exactProp(propTypes) {
  if (false) {
    return propTypes;
  }
  return {
    ...propTypes,
    [specialProperty]: (props) => {
      const unsupportedProps = Object.keys(props).filter((prop) => !propTypes.hasOwnProperty(prop));
      if (unsupportedProps.length > 0) {
        return new Error(`The following props are not supported: ${unsupportedProps.map((prop) => `\`${prop}\``).join(", ")}. Please remove them.`);
      }
      return null;
    }
  };
}

// node_modules/@mui/utils/esm/ownerDocument/ownerDocument.js
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}

// node_modules/@mui/utils/esm/setRef/setRef.js
function setRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}

// node_modules/@mui/utils/esm/useEventCallback/useEventCallback.js
import * as React40 from "react";
function useEventCallback(fn) {
  const ref = React40.useRef(fn);
  useEnhancedEffect_default(() => {
    ref.current = fn;
  });
  return React40.useRef((...args) => (
    // @ts-expect-error hide `this`
    (0, ref.current)(...args)
  )).current;
}
var useEventCallback_default = useEventCallback;

// node_modules/@mui/utils/esm/useForkRef/useForkRef.js
import * as React41 from "react";
function useForkRef(...refs) {
  return React41.useMemo(() => {
    if (refs.every((ref) => ref == null)) {
      return null;
    }
    return (instance) => {
      refs.forEach((ref) => {
        setRef(ref, instance);
      });
    };
  }, refs);
}

// node_modules/@mui/utils/esm/getReactElementRef/getReactElementRef.js
import * as React42 from "react";
function getReactElementRef(element) {
  if (parseInt(React42.version, 10) >= 19) {
    return element?.props?.ref || null;
  }
  return element?.ref || null;
}

// node_modules/@mui/material/ClickAwayListener/ClickAwayListener.js
var import_prop_types2 = __toESM(require_prop_types());
import * as React43 from "react";
function mapEventPropToEvent(eventProp) {
  return eventProp.substring(2).toLowerCase();
}
function clickedRootScrollbar(event, doc) {
  return doc.documentElement.clientWidth < event.clientX || doc.documentElement.clientHeight < event.clientY;
}
function ClickAwayListener(props) {
  const {
    children,
    disableReactTree = false,
    mouseEvent = "onClick",
    onClickAway,
    touchEvent = "onTouchEnd"
  } = props;
  const movedRef = React43.useRef(false);
  const nodeRef = React43.useRef(null);
  const activatedRef = React43.useRef(false);
  const syntheticEventRef = React43.useRef(false);
  React43.useEffect(() => {
    setTimeout(() => {
      activatedRef.current = true;
    }, 0);
    return () => {
      activatedRef.current = false;
    };
  }, []);
  const handleRef = useForkRef(getReactElementRef(children), nodeRef);
  const handleClickAway = useEventCallback_default((event) => {
    const insideReactTree = syntheticEventRef.current;
    syntheticEventRef.current = false;
    const doc = ownerDocument(nodeRef.current);
    if (!activatedRef.current || !nodeRef.current || "clientX" in event && clickedRootScrollbar(event, doc)) {
      return;
    }
    if (movedRef.current) {
      movedRef.current = false;
      return;
    }
    let insideDOM;
    if (event.composedPath) {
      insideDOM = event.composedPath().includes(nodeRef.current);
    } else {
      insideDOM = !doc.documentElement.contains(
        // @ts-expect-error returns `false` as intended when not dispatched from a Node
        event.target
      ) || nodeRef.current.contains(
        // @ts-expect-error returns `false` as intended when not dispatched from a Node
        event.target
      );
    }
    if (!insideDOM && (disableReactTree || !insideReactTree)) {
      onClickAway(event);
    }
  });
  const createHandleSynthetic = (handlerName) => (event) => {
    syntheticEventRef.current = true;
    const childrenPropsHandler = children.props[handlerName];
    if (childrenPropsHandler) {
      childrenPropsHandler(event);
    }
  };
  const childrenProps = {
    ref: handleRef
  };
  if (touchEvent !== false) {
    childrenProps[touchEvent] = createHandleSynthetic(touchEvent);
  }
  React43.useEffect(() => {
    if (touchEvent !== false) {
      const mappedTouchEvent = mapEventPropToEvent(touchEvent);
      const doc = ownerDocument(nodeRef.current);
      const handleTouchMove = () => {
        movedRef.current = true;
      };
      doc.addEventListener(mappedTouchEvent, handleClickAway);
      doc.addEventListener("touchmove", handleTouchMove);
      return () => {
        doc.removeEventListener(mappedTouchEvent, handleClickAway);
        doc.removeEventListener("touchmove", handleTouchMove);
      };
    }
    return void 0;
  }, [handleClickAway, touchEvent]);
  if (mouseEvent !== false) {
    childrenProps[mouseEvent] = createHandleSynthetic(mouseEvent);
  }
  React43.useEffect(() => {
    if (mouseEvent !== false) {
      const mappedMouseEvent = mapEventPropToEvent(mouseEvent);
      const doc = ownerDocument(nodeRef.current);
      doc.addEventListener(mappedMouseEvent, handleClickAway);
      return () => {
        doc.removeEventListener(mappedMouseEvent, handleClickAway);
      };
    }
    return void 0;
  }, [handleClickAway, mouseEvent]);
  return /* @__PURE__ */ React43.cloneElement(children, childrenProps);
}
true ? ClickAwayListener.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The wrapped element.
   */
  children: elementAcceptingRef_default.isRequired,
  /**
   * If `true`, the React tree is ignored and only the DOM tree is considered.
   * This prop changes how portaled elements are handled.
   * @default false
   */
  disableReactTree: import_prop_types2.default.bool,
  /**
   * The mouse event to listen to. You can disable the listener by providing `false`.
   * @default 'onClick'
   */
  mouseEvent: import_prop_types2.default.oneOf(["onClick", "onMouseDown", "onMouseUp", "onPointerDown", "onPointerUp", false]),
  /**
   * Callback fired when a "click away" event is detected.
   */
  onClickAway: import_prop_types2.default.func.isRequired,
  /**
   * The touch event to listen to. You can disable the listener by providing `false`.
   * @default 'onTouchEnd'
   */
  touchEvent: import_prop_types2.default.oneOf(["onTouchEnd", "onTouchStart", false])
} : void 0;
if (true) {
  ClickAwayListener["propTypes"] = exactProp(ClickAwayListener.propTypes);
}

// src/components/Tree.jsx
import { jsx, jsxs } from "react/jsx-runtime";
var Tree2 = ({
  treeData = [],
  selectedNodes,
  onSelect,
  className,
  defaultExpandAll = false,
  contextMenus,
  contextMenuKey,
  onContextMenuClick,
  ...rest
}) => {
  const [expandedNodes, setExpandedNodes] = useState11([]);
  const [updateView, setUpdateView] = useState11(false);
  const recursive = (children = [], resultKeys = []) => {
    if (children && children.length > 0) {
      for (let c = 0; c < children.length; c++) {
        const child = children[c];
        if (child.children && child.children.length > 0) {
          const childKeys = recursive(child.children, resultKeys);
          resultKeys.push(child.key);
          resultKeys = resultKeys.concat(childKeys);
          resultKeys = [...new Set(resultKeys)];
        } else {
          resultKeys.push(child.key);
        }
      }
    }
    return resultKeys;
  };
  useEffect16(() => {
    const keys = recursive(treeData, []);
    setExpandedNodes(keys);
    getContainer();
    setUpdateView(!updateView);
  }, [treeData]);
  const getContainer = () => {
    const id = "tree-contextmenu-wrapper";
    const domContainer = document.getElementById(id);
    if (domContainer) {
      return domContainer;
    } else {
      const domContainer2 = document.createElement("div");
      domContainer2.id = id;
      document.body.appendChild(domContainer2);
      return domContainer2;
    }
  };
  const unMountContextMenus = () => {
    const wrapper = getContainer();
    if (wrapper) {
      ReactDOM2.unmountComponentAtNode(wrapper);
    }
  };
  const onRightClick = (info, node) => {
    if (info) {
      if (!info.node?.disableContextMenu) {
        if (contextMenus && (contextMenus.length > 0 || Object.values(contextMenus).length > 0)) {
          if (info.node && info.node.key && info.node.key in contextMenus) {
            contextMenus = contextMenus[info.node.key];
          }
          let tooltipVisible = true;
          let menuItems = contextMenus[contextMenuKey];
          if (menuItems && menuItems.length > 0) {
            const menuRenderViews = /* @__PURE__ */ jsx(ClickAwayListener, { onClickAway: unMountContextMenus, children: /* @__PURE__ */ jsx(
              "div",
              {
                className: "react-contextmenu",
                children: menuItems.map((menu) => {
                  return /* @__PURE__ */ jsxs(
                    "div",
                    {
                      className: "react-contextmenu-item",
                      role: "menuitem",
                      onClick: () => {
                        tooltipVisible = false;
                        contextMenuClickHandler(info.node.key, menu.key);
                        unMountContextMenus();
                      },
                      children: [
                        /* @__PURE__ */ jsx("i", { className: "m-nav__link-icon " + menu.iconClassName }),
                        /* @__PURE__ */ jsx("span", { className: "m-nav__link-text", children: menu.text })
                      ]
                    },
                    "cm_" + info.node.key + "_item_" + menu.key
                  );
                })
              }
            ) });
            const container = getContainer();
            (0, import_object_assign.default)(container.style, {
              position: "absolute",
              left: `${info.event.pageX}px`,
              top: `${info.event.pageY}px`
            });
            ReactDOM2.render(menuRenderViews, container);
          }
        } else {
          return null;
        }
      }
    }
  };
  const contextMenuClickHandler = (key, menuKey) => {
    onContextMenuClick(key, menuKey);
  };
  if (treeData?.length) {
    return /* @__PURE__ */ jsx(
      es_default4,
      {
        onRightClick,
        showIcon: false,
        showLine: true,
        treeData,
        defaultExpandedKeys: expandedNodes,
        selectedKeys: selectedNodes,
        autoExpandParent: true,
        defaultExpandParent: true,
        onSelect,
        defaultExpandAll,
        className,
        defaultSelectedKeys: ["0-0-0"],
        ...rest
      }
    );
  }
  return "...";
};
var Tree_default2 = Tree2;

// src/components/DatePicker.jsx
import React45, { useState as useState12, useEffect as useEffect17 } from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
var DatePicker = ({ options, onSelect, defaultValue }) => {
  const [selectedValue, setSelectedValue] = useState12(defaultValue || "");
  useEffect17(() => {
    if (onSelect && selectedValue) {
      onSelect(selectedValue);
    }
  }, [selectedValue, onSelect]);
  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedValue(value);
    if (onSelect) {
      onSelect(value);
    }
  };
  return /* @__PURE__ */ jsx2("select", { value: selectedValue, onChange: handleChange, children: options.map((option, index2) => /* @__PURE__ */ jsx2("option", { value: option.value, children: option.label }, index2)) });
};
var DatePicker_default = DatePicker;
export {
  DatePicker_default as DatePicker,
  Tree_default2 as Tree
};
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)

react-is/cjs/react-is.development.js:
  (**
   * @license React
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@mui/material/index.js:
  (**
   * @mui/material v6.4.3
   *
   * @license MIT
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=index.js.map
