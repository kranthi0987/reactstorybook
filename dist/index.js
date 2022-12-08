"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  styles: true,
  global: true,
  animation: true,
  icons: true
};
exports.styles = exports.icons = exports.global = exports.animation = void 0;
var styles = _interopRequireWildcard(require("./shared/styles"));
exports.styles = styles;
var global = _interopRequireWildcard(require("./shared/global"));
exports.global = global;
var animation = _interopRequireWildcard(require("./shared/animation"));
exports.animation = animation;
var icons = _interopRequireWildcard(require("./shared/icons"));
exports.icons = icons;
var _Avatar = require("./Avatar");
Object.keys(_Avatar).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Avatar[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Avatar[key];
    }
  });
});
var _Badge = require("./Badge");
Object.keys(_Badge).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Badge[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Badge[key];
    }
  });
});
var _Button = require("./Button");
Object.keys(_Button).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Button[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Button[key];
    }
  });
});
var _Icon = require("./Icon");
Object.keys(_Icon).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Icon[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Icon[key];
    }
  });
});
var _Link = require("./Link");
Object.keys(_Link).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Link[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Link[key];
    }
  });
});