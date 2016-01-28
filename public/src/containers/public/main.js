"use strict";
var React = require('react');
var react_dom_1 = require('react-dom');
var BaseComponent_1 = require('../../BaseComponent');
var react_router_1 = require('react-router');
var Index_1 = require('./Index');
var Page_1 = require('./Page');
var pages_1 = require('../../pages');
var redux_1 = require('redux');
var react_redux_1 = require('react-redux');
var reducers_1 = require('../../reducers');
var context_1 = require('../../context');
require('../../../node_modules/amazeui/dist/css/amazeui.css');
require('../../styles/App.css');
var store = redux_1.createStore(reducers_1.default);
context_1.default.store = store;
var baseDir = document.getElementById('base_dir').value;
BaseComponent_1.default.setBaseDir(baseDir);
var routes = (React.createElement(react_redux_1.Provider, {store: store}, React.createElement(react_router_1.Router, null, React.createElement(react_router_1.Route, {path: "/", component: Index_1.default}, React.createElement(react_router_1.Route, {path: ":page", component: Page_1.default}), React.createElement(react_router_1.IndexRoute, {component: pages_1.Home})))));
react_dom_1.render(routes, document.getElementById('app'));
