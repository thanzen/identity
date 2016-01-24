"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var BaseComponent_1 = require('../../BaseComponent');
var TableRow_1 = require('./TableRow');
;
var Table = (function (_super) {
    __extends(Table, _super);
    function Table() {
        _super.apply(this, arguments);
    }
    Table.prototype.render = function () {
        var rows = this.props.model.map(function (row) {
            return React.createElement(TableRow_1.default, {model: row, property: property});
        });
        return (React.createElement("td", null, this.props.model[this.props.header.name]));
    };
    return Table;
}(BaseComponent_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Table;
