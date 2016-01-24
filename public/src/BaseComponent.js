"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var BaseComponent = (function (_super) {
    __extends(BaseComponent, _super);
    function BaseComponent() {
        _super.apply(this, arguments);
    }
    BaseComponent.setBaseDir = function (baseDir) {
        if (BaseComponent.baseDir == null || BaseComponent.baseDir == undefined) {
            BaseComponent.baseDir = baseDir;
        }
    };
    BaseComponent.getBaseDir = function () {
        return BaseComponent.baseDir;
    };
    BaseComponent.setIsLogedIn = function (isLogedIn) {
        if (BaseComponent.isLogedIn == null || BaseComponent.isLogedIn == undefined) {
            BaseComponent.isLogedIn = isLogedIn;
        }
    };
    BaseComponent.getIsLogedIn = function () {
        return BaseComponent.isLogedIn;
    };
    return BaseComponent;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BaseComponent;
;
