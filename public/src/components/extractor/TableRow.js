"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var BaseComponent_1 = require('../../BaseComponent');
;
var TableRow = (function (_super) {
    __extends(TableRow, _super);
    function TableRow() {
        _super.apply(this, arguments);
    }
    TableRow.prototype.render = function () {
        return (React.createElement("td", null, this.props.model[this.props.property]));
    };
    return TableRow;
}(BaseComponent_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TableRow;
