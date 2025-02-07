"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
var _rcTree = _interopRequireDefault(require("rc-tree"));
var _objectAssign = _interopRequireDefault(require("object-assign"));
var _material = require("@mui/material");
require("../styles/tree.css");
var _excluded = ["treeData", "selectedNodes", "onSelect", "className", "defaultExpandAll", "contextMenus", "contextMenuKey", "onContextMenuClick"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
var Tree = function Tree(_ref) {
  var _ref$treeData = _ref.treeData,
    treeData = _ref$treeData === void 0 ? [] : _ref$treeData,
    selectedNodes = _ref.selectedNodes,
    onSelect = _ref.onSelect,
    className = _ref.className,
    _ref$defaultExpandAll = _ref.defaultExpandAll,
    defaultExpandAll = _ref$defaultExpandAll === void 0 ? false : _ref$defaultExpandAll,
    contextMenus = _ref.contextMenus,
    contextMenuKey = _ref.contextMenuKey,
    onContextMenuClick = _ref.onContextMenuClick,
    rest = _objectWithoutProperties(_ref, _excluded);
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    expandedNodes = _useState2[0],
    setExpandedNodes = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    updateView = _useState4[0],
    setUpdateView = _useState4[1];
  var _recursive = function recursive() {
    var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var resultKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    if (children && children.length > 0) {
      for (var c = 0; c < children.length; c++) {
        var child = children[c];
        if (child.children && child.children.length > 0) {
          var childKeys = _recursive(child.children, resultKeys);
          resultKeys.push(child.key);
          resultKeys = resultKeys.concat(childKeys);
          resultKeys = _toConsumableArray(new Set(resultKeys));
        } else {
          resultKeys.push(child.key);
        }
      }
    }
    return resultKeys;
  };
  (0, _react.useEffect)(function () {
    var keys = _recursive(treeData, []);
    setExpandedNodes(keys);
    getContainer();
    setUpdateView(!updateView);
  }, [treeData]);
  var getContainer = function getContainer() {
    var id = 'tree-contextmenu-wrapper';
    var domContainer = document.getElementById(id);
    if (domContainer) {
      return domContainer;
    } else {
      var _domContainer = document.createElement('div');
      _domContainer.id = id;
      document.body.appendChild(_domContainer);
      return _domContainer;
    }
  };
  var unMountContextMenus = function unMountContextMenus() {
    var wrapper = getContainer();
    if (wrapper) {
      _reactDom["default"].unmountComponentAtNode(wrapper);
    }
  };
  var onRightClick = function onRightClick(info, node) {
    if (info) {
      var _info$node;
      if (!((_info$node = info.node) !== null && _info$node !== void 0 && _info$node.disableContextMenu)) {
        if (contextMenus && (contextMenus.length > 0 || Object.values(contextMenus).length > 0)) {
          if (info.node && info.node.key && info.node.key in contextMenus) {
            contextMenus = contextMenus[info.node.key];
          }
          var tooltipVisible = true;
          var menuItems = contextMenus[contextMenuKey];
          if (menuItems && menuItems.length > 0) {
            var menuRenderViews = /*#__PURE__*/_react["default"].createElement(_material.ClickAwayListener, {
              onClickAway: unMountContextMenus
            }, /*#__PURE__*/_react["default"].createElement("div", {
              className: "react-contextmenu"
            }, menuItems.map(function (menu) {
              return /*#__PURE__*/_react["default"].createElement("div", {
                key: "cm_" + info.node.key + "_item_" + menu.key,
                className: "react-contextmenu-item",
                role: "menuitem",
                onClick: function onClick() {
                  tooltipVisible = false;
                  contextMenuClickHandler(info.node.key, menu.key);
                  unMountContextMenus();
                }
              }, /*#__PURE__*/_react["default"].createElement("i", {
                className: 'm-nav__link-icon ' + menu.iconClassName
              }), /*#__PURE__*/_react["default"].createElement("span", {
                className: "m-nav__link-text"
              }, menu.text));
            })));
            var container = getContainer();
            (0, _objectAssign["default"])(container.style, {
              position: 'absolute',
              left: "".concat(info.event.pageX, "px"),
              top: "".concat(info.event.pageY, "px")
            });
            _reactDom["default"].render(menuRenderViews, container);
          }
        } else {
          return null;
        }
      }
    }
  };
  var contextMenuClickHandler = function contextMenuClickHandler(key, menuKey) {
    onContextMenuClick(key, menuKey);
  };
  if (treeData !== null && treeData !== void 0 && treeData.length) {
    return /*#__PURE__*/_react["default"].createElement(_rcTree["default"], _extends({
      onRightClick: onRightClick,
      showIcon: false,
      showLine: true,
      treeData: treeData,
      defaultExpandedKeys: expandedNodes,
      selectedKeys: selectedNodes,
      autoExpandParent: true,
      defaultExpandParent: true,
      onSelect: onSelect,
      defaultExpandAll: defaultExpandAll,
      className: className,
      defaultSelectedKeys: ['0-0-0']
    }, rest));
  }
  return '...';
};
var _default = exports["default"] = Tree;