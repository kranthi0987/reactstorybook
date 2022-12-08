"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.NoLabels = exports.Labels = exports.Inline = exports.Block = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _Icon = require("./Icon");
var _icons = require("./shared/icons");
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
var Meta = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  color: #666;\n  font-size: 12px;\n"])));
var Item = _styledComponents.default.li(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n  display: inline-flex;\n  flex-direction: row;\n  align-items: center;\n  flex: 0 1 20%;\n  min-width: 120px;\n\n  padding: 0px 7.5px 20px;\n\n  svg {\n    margin-right: 10px;\n    width: 24px;\n    height: 24px;\n  }\n\n  ", ";\n"])), function (props) {
  return props.minimal && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2.default)(["\n      flex: none;\n      min-width: auto;\n      padding: 0;\n      background: #fff;\n      border: 1px solid #666;\n\n      svg {\n        display: block;\n        margin-right: 0;\n        width: 48px;\n        height: 48px;\n      }\n    "])));
});
var List = _styledComponents.default.ul(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  flex-flow: row wrap;\n  list-style: none;\n"])));
var _default = {
  title: 'Design System/Icon',
  component: _Icon.Icon
};
exports.default = _default;
var Labels = function Labels(args) {
  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, "There are ", Object.keys(_icons.icons).length, " icons", /*#__PURE__*/_react.default.createElement(List, null, Object.keys(_icons.icons).map(function (key) {
    return /*#__PURE__*/_react.default.createElement(Item, {
      key: key
    }, /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
      icon: key,
      "aria-hidden": true
    }), /*#__PURE__*/_react.default.createElement(Meta, null, key));
  })));
};
exports.Labels = Labels;
var NoLabels = function NoLabels(args) {
  return /*#__PURE__*/_react.default.createElement(List, null, Object.keys(_icons.icons).map(function (key) {
    return /*#__PURE__*/_react.default.createElement(Item, {
      minimal: true,
      key: key
    }, /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
      icon: key,
      "aria-label": key
    }));
  }));
};
exports.NoLabels = NoLabels;
NoLabels.storyName = 'no labels';
var Inline = function Inline(args) {
  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, "this is an inline ", /*#__PURE__*/_react.default.createElement(_Icon.Icon, args), " icon (default)");
};
exports.Inline = Inline;
Inline.args = {
  icon: 'facehappy',
  "aria-label": 'Happy face'
};
var Block = function Block(args) {
  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, "this is a block ", /*#__PURE__*/_react.default.createElement(_Icon.Icon, args), " icon");
};
exports.Block = Block;
Block.args = {
  icon: 'facehappy',
  "aria-label": 'Happy face',
  block: true
};