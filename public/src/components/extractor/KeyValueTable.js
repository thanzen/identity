"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _this = this;
var React = require('react');
var BaseComponent_1 = require('../../BaseComponent');
var FixedDataTable = require('fixed-data-table');
var amazeui_react_1 = require('amazeui-react');
var stringUtils_1 = require("../../utils/stringUtils");
var Table = FixedDataTable.Table, Column = FixedDataTable.Column, Cell = FixedDataTable.Cell;
function toggleSelection(props) {
}
var ImageCell = function (props) { return (React.createElement("img", {src: props.data[props.rowIndex][props.col]})); };
var LinkCell = function (props) { return (React.createElement(Cell, null, React.createElement("a", {href: "#"}, props.data[props.rowIndex][props.col]))); };
var TextCell = function (props) { return (React.createElement(Cell, React.__spread({}, _this.props), props.data[props.rowIndex][props.col])); };
var CheckboxCell = function (props) { return (React.createElement(Cell, React.__spread({}, _this.props), React.createElement(amazeui_react_1.Input, {type: "checkbox", label: "", onClick: function () { toggleSelection(_this.props); }}))); };
var getCellContent = function (props) {
    if (stringUtils_1.stringEndsWith(props.data[props.rowIndex][props.col], "/a")) {
        return React.createElement("a", {href: "#"}, props.data[props.rowIndex][props.col]);
    }
    else if (stringUtils_1.stringEndsWith(props.data[props.rowIndex][props.col], "/img")) {
        return React.createElement("img", {src: props.data[props.rowIndex][props.col]});
    }
    return React.createElement("span", null, props.data[props.rowIndex][props.col]);
};
var GenericCell = (function (_super) {
    __extends(GenericCell, _super);
    function GenericCell() {
        _super.apply(this, arguments);
    }
    GenericCell.prototype.render = function () {
        return React.createElement(Cell, React.__spread({}, this.props), this.props.data[this.props.rowIndex][this.props.col]);
    };
    return GenericCell;
}(BaseComponent_1.default));
var KeyValueTable = (function (_super) {
    __extends(KeyValueTable, _super);
    function KeyValueTable() {
        _super.apply(this, arguments);
    }
    KeyValueTable.prototype.render = function () {
        return (React.createElement(Table, React.__spread({rowHeight: 20, headerHeight: 20, rowsCount: this.props.data.length, width: 400, height: 200}, this.props), React.createElement(Column, {header: React.createElement(Cell, React.__spread({}, this.props), "Path"), cell: React.createElement(GenericCell, {data: this.props.data, col: "path"}), width: 200}), React.createElement(Column, {header: React.createElement(Cell, React.__spread({}, this.props), "Value"), cell: React.createElement(GenericCell, React.__spread({data: this.props.data, col: "value"}, this.props)), width: 200})));
    };
    return KeyValueTable;
}(BaseComponent_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = KeyValueTable;
