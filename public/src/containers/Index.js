"use strict";
var React = require('react');
var react_dom_1 = require('react-dom');
var react_router_1 = require('react-router');
require('../node_modules/amazeui/dist/css/amazeui.css');
var components_1 = require('../components');
var pages_1 = require('../pages');
var pages = {
    home: pages_1.Home,
};
var baseDir = document.getElementById('base_dir').value;
var App = React.createClass({
    render: function () {
        return (React.createElement("div", {className: "adm-container"}, React.createElement(components_1.Header, null), React.createElement("div", {className: "adm-main"}, this.props.children)));
    },
});
pages_1.Home.setBaseDir(baseDir);
var Page = React.createClass({
    render: function () {
        var page = this.props.params.page;
        var query = this.props.location.query;
        var breadcrumb = query && query.breadcrumb;
        if (pages[page]) {
            return React.createElement(pages[page], {});
        }
        return (React.createElement(components_1.PageContainer, null, "404"));
    }
});
var routes = (React.createElement(react_router_1.Router, null, React.createElement(react_router_1.Route, {path: "/", component: App}, React.createElement(react_router_1.Route, {path: ":page", component: Page}), React.createElement(react_router_1.IndexRoute, {component: pages_1.Home}))));
react_dom_1.render(routes, document.getElementById('app-root'));
