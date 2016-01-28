"use strict";
var React = require('react');
var amazeui_react_1 = require('amazeui-react');
var actions_1 = require("../../actions");
function onSubmit(url) {
    if (url) {
        actions_1.submitExtractRequest(url);
    }
}
function onChange(event) {
    actions_1.changeUrl(event.target.value);
}
exports.SearchBar = function (_a) {
    var url = _a.url;
    return (React.createElement("div", null, React.createElement(amazeui_react_1.Input, {type: "input", label: "", value: url, onChange: onChange}), React.createElement(amazeui_react_1.Button, {amStyle: "primary", radius: true, onClick: function () { onSubmit(url); }}, "Get Data")));
};
