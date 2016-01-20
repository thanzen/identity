"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var BaseComponent_1 = require('../BaseComponent');
var react_router_1 = require('react-router');
var amazeui_react_1 = require('amazeui-react');
var formStyle = {
    height: "260px",
    width: "200px",
    marginRight: "200px"
};
var styles = {
    left: {
        float: "left"
    }
};
var formInstance = (React.createElement(amazeui_react_1.Form, {block: true, style: formStyle}, React.createElement(amazeui_react_1.Input, {placeholder: "username"}), React.createElement(amazeui_react_1.Input, {placeholder: "password"}), React.createElement(amazeui_react_1.Input, {type: "submit", amStyle: "primary", amSize: "sm", value: "Login", standalone: true})));
var loggedInDropdown = (React.createElement(amazeui_react_1.Dropdown, {title: [React.createElement(amazeui_react_1.Icon, {icon: "group", key: "hey"}), ' Hey, Jude'], navItem: true}, React.createElement(amazeui_react_1.Dropdown.Item, {closeOnClick: true, linkComponent: react_router_1.Link, linkProps: { to: '/profile', query: { breadcrumb: 'Profile' } }}, React.createElement(amazeui_react_1.Icon, {icon: "user"}), " ", ' Profile'), React.createElement(amazeui_react_1.Dropdown.Item, null, React.createElement(amazeui_react_1.Icon, {icon: "cog"}), " ", ' Setting')));
var Header = (function (_super) {
    __extends(Header, _super);
    function Header() {
        _super.apply(this, arguments);
    }
    Header.prototype.render = function () {
        return (React.createElement(amazeui_react_1.Topbar, {brand: (React.createElement(react_router_1.Link, {to: "/", style: styles.left, activeClassName: "active"}, "Ascend Tec.")), toggleNavKey: "nav", inverse: true, fluid: true}, React.createElement(amazeui_react_1.CollapsibleNav, {eventKey: "nav"}, React.createElement(amazeui_react_1.Nav, {className: "am-topbar-right", topbar: true}, React.createElement(amazeui_react_1.NavItem, null, React.createElement(react_router_1.Link, {to: "/login", activeClassName: "active"}, "Log in"))))));
    };
    return Header;
}(BaseComponent_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Header;
