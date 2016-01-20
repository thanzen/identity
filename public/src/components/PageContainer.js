"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var BaseComponent_1 = require('../BaseComponent');
var PageContainer = (function (_super) {
    __extends(PageContainer, _super);
    function PageContainer(props) {
        _super.call(this, props);
    }
    PageContainer.prototype.render = function () {
        return (React.createElement("div", {className: "identity-page " + this.props.className}, this.props.children));
    };
    return PageContainer;
}(BaseComponent_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PageContainer;
;
