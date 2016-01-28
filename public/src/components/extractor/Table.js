"use strict";
var React = require('react');
var amazeui_react_1 = require('amazeui-react');
function toggleSelection() {
}
function toggleAllSelection() {
}
var Rows = function (_a) {
    var data = _a.data;
    return (React.createElement("tbody", null, data.map(function (model) {
        return (React.createElement("tr", null, React.createElement("td", null, model.path), React.createElement("td", null, model.value), React.createElement("td", null, React.createElement(amazeui_react_1.Input, {type: "checkbox", label: "", onClick: function () { toggleSelection(); }}))));
    })));
};
var styles = {
    xpath: {
        width: "40%"
    },
    value: {
        width: "55%"
    },
    checkbox: {
        width: "5%"
    }
};
exports.KeyValueTable = function (_a) {
    var data = _a.data;
    return (React.createElement(amazeui_react_1.Table, {bordered: true, striped: true, hover: true, radius: true, responsive: true}, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", {style: styles.xpath}, "XPath"), React.createElement("th", {style: styles.value}, "Value"), React.createElement("th", {style: styles.checkbox}))), React.createElement(Rows, {data: data})));
};
