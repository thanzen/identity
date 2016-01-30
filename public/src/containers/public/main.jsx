"use strict";
const React = require('react');
const react_dom_1 = require('react-dom');
const react_router_1 = require('react-router');
const Index_1 = require('./Index');
const Page_1 = require('./Page');
const pages_1 = require('../../pages');
const redux_1 = require('redux');
const react_redux_1 = require('react-redux');
const reducers_1 = require('../../reducers');
const context_1 = require('../../context');
const history_1 = require("../../history");
require('../../../node_modules/amazeui/dist/css/amazeui.css');
require('../../styles/App.css');
const store = redux_1.createStore(reducers_1.default);
context_1.default.store = store;
let baseDir = document.getElementById('base_dir').value;
let email = document.getElementById('what_h_l_s').value;
context_1.default.baseDir = baseDir;
context_1.default.setUser("", email);
const routes = (<react_redux_1.Provider store={store}>
        <react_router_1.Router history={history_1.default}>
            <react_router_1.Route path="/" component={Index_1.default}>
                <react_router_1.Route path="/extractor" component={pages_1.Extractor}/>
                <react_router_1.IndexRoute component={pages_1.Home}/>
                <react_router_1.Route path="*" component={Page_1.default}/>
            </react_router_1.Route>
        </react_router_1.Router>
    </react_redux_1.Provider>);
react_dom_1.render(routes, document.getElementById('app'));
