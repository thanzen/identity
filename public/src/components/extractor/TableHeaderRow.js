"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var BaseComponent_1 = require('../../BaseComponent');
;
var TableHeaderRow = (function (_super) {
    __extends(TableHeaderRow, _super);
    function TableHeaderRow() {
        var _this = this;
        _super.apply(this, arguments);
        this.onSelectedClick = function () {
        };
        this.onAliasChange = function () {
        };
        this.getHeader = function (header, useAlias, useSelect) {
            if (!useAlias && !useSelect) {
                return (React.createElement("th", null, header.name));
            }
            else if (useAlias && !useSelect) {
                return (React.createElement("th", null, React.createElement("input", {type: "text", value: header.alias, onChange: _this.onAliasChange})));
            }
            else if (!useAlias && useSelect) {
                return (React.createElement("th", null, React.createElement("input", {type: "text", value: header.name}), " ", React.createElement("input", {type: "checkbox", defaultChecked: header.selected})));
            }
            return (React.createElement("th", null, React.createElement("input", {type: "text", value: header.alias}), " ", React.createElement("input", {type: "checkbox", defaultChecked: header.selected})));
        };
    }
    TableHeaderRow.prototype.render = function () {
        return this.getHeader(this.props.model, false, false);
    };
    return TableHeaderRow;
}(BaseComponent_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TableHeaderRow;
