"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var PageContainer_1 = require('../components/PageContainer');
var BaseComponent_1 = require('../BaseComponent');
var amazeui_react_1 = require('amazeui-react');
var Header = (function (_super) {
    __extends(Header, _super);
    function Header() {
        _super.apply(this, arguments);
    }
    Header.prototype.render = function () {
        return (React.createElement(PageContainer_1.default, null, React.createElement(amazeui_react_1.AvgGrid, {sm: 2, md: 4, className: "am-margin-bottom am-padding-vertical am-text-center adm-intro-list"}, "//todo:add page")));
    };
    return Header;
}(BaseComponent_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Header;
