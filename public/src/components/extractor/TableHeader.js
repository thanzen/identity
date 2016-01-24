"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var BaseComponent_1 = require('../../BaseComponent');
var TableHeaderRow_1 = require('./TableHeaderRow');
var amazeui_react_1 = require('amazeui-react');
;
var mapHeaders = function (headers, useAlias, useSelect) {
    return headers.map(function (header) {
        return React.createElement(TableHeaderRow_1.default, {model: header, useAlias: useAlias, useSelect: useSelect});
    });
};
var Header = (function (_super) {
    __extends(Header, _super);
    function Header() {
        _super.apply(this, arguments);
    }
    Header.prototype.render = function () {
        var headers = mapHeaders(this.props.model, false, false);
        return (React.createElement(amazeui_react_1.Table, null, React.createElement("thead", null, React.createElement("tr", null, headers))));
    };
    return Header;
}(BaseComponent_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Header;
