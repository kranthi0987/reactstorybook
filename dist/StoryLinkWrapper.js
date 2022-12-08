"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StoryLinkWrapper = StoryLinkWrapper;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _addonActions = require("@storybook/addon-actions");
var _excluded = ["children", "className", "href", "onClick", "to"];
var fireClickAction = (0, _addonActions.action)('onLinkClick');
function StoryLinkWrapper(_ref) {
  var children = _ref.children,
    className = _ref.className,
    href = _ref.href,
    onClick = _ref.onClick,
    to = _ref.to,
    rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var modifiedOnClick = function modifiedOnClick(event) {
    event.preventDefault();
    onClick();
    fireClickAction(href || to);
  };
  return /*#__PURE__*/_react.default.createElement("a", Object.assign({
    className: className,
    href: href || to,
    onClick: modifiedOnClick
  }, rest), children);
}
StoryLinkWrapper.defaultProps = {
  className: '',
  href: null,
  onClick: function onClick() {},
  to: null
};