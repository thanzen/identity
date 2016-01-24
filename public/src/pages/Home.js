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
var styles = {
    h1: {
        fontSize: "2.5em",
        color: "White",
        textAlign: "left",
        align: "right"
    },
    p: {
        fontSize: "1.8em",
        color: "Yellow",
        textAlign: "left"
    },
    img: {
        backgroundColor: "rgba(100,182,172,0.5)",
        border: "0px",
        verticalAlign: "middle",
        width: "80%",
        height: "80%"
    },
    div: {
        marginLeft: "15%"
    }
};
var Header = (function (_super) {
    __extends(Header, _super);
    function Header() {
        _super.apply(this, arguments);
    }
    Header.prototype.render = function () {
        return (React.createElement(PageContainer_1.default, null, React.createElement(amazeui_react_1.AvgGrid, {sm: 1, md: 1, lg: 2}, React.createElement("li", null, React.createElement("div", {style: styles.div}, React.createElement("br", null), React.createElement("span", {style: styles.h1}, "Better use of data,", React.createElement("br", null), " better success of business"), React.createElement("br", null), React.createElement("span", {style: styles.p}, "We are here to help you obtain data, process data, and analyze data for your needs!"))), React.createElement("li", null, React.createElement("img", {className: "am-thumbnail", style: styles.img, src: Object.getPrototypeOf(this).constructor.getBaseDir() + "/images/business-intelligence-process.png"})))));
    };
    return Header;
}(BaseComponent_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Header;
