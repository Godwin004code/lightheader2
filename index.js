"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var LightHeader = function LightHeader(_ref) {
  var logo = _ref.logo,
    navLinks = _ref.navLinks,
    buttons = _ref.buttons;
  return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react["default"].createElement("header", {
    className: "lightHeader"
  }, /*#__PURE__*/_react["default"].createElement("div", null, logo.type === "text" ? /*#__PURE__*/_react["default"].createElement("h2", null, logo.text) : /*#__PURE__*/_react["default"].createElement("img", {
    style: {
      width: logo.width,
      height: logo.height
    },
    src: logo.src
  })), /*#__PURE__*/_react["default"].createElement("nav", null, /*#__PURE__*/_react["default"].createElement("ul", null, navLinks.map(function (links) {
    return /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
      to: links.path
    }, links.label));
  }))), /*#__PURE__*/_react["default"].createElement("div", null, buttons.map(function (button) {
    return /*#__PURE__*/_react["default"].createElement("button", {
      onClick: button.action
    }, button.label);
  })), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Routes, null, navLinks.map(function (links) {
    return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
      path: links.path,
      element: /*#__PURE__*/_react["default"].createElement(links.page, null)
    });
  }))));
};
var _default = exports["default"] = LightHeader;
