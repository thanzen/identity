"use strict";
const React = require('react');
const react_dom_1 = require('react-dom');
const react_router_1 = require('react-router');
require('../node_modules/amazeui/dist/css/amazeui.css');
const components_1 = require('../components');
const pages_1 = require('../pages');
const redux_1 = require('redux');
const react_redux_1 = require('react-redux');
const reducers_1 = require('../reducers');
const context_1 = require('../context');
const store = redux_1.createStore(reducers_1.default);
context_1.default.store = store;
const pages = {
    home: pages_1.Home,
};
let baseDir = document.getElementById('base_dir').value;
var App = React.createClass({
    render() {
        return (<div className="adm-container">
                <components_1.Header />
                <div className="adm-main">
                    {this.props.children}
                </div>
            </div>);
    },
});
const Page = React.createClass({
    render() {
        const page = this.props.params.page;
        const { query } = this.props.location;
        const breadcrumb = query && query.breadcrumb;
        if (pages[page]) {
            return React.createElement(pages[page], {});
        }
        return (<div>
                404
            </div>);
    }
});
const routes = (<react_redux_1.Provider store={store}>
        <react_router_1.Router>
            <react_router_1.Route path="/" component={App}>
                <react_router_1.Route path=":page" component={Page}/>
                <react_router_1.IndexRoute component={pages_1.Home}/>
            </react_router_1.Route>
        </react_router_1.Router>
    </react_redux_1.Provider>);
react_dom_1.render(routes, document.getElementById('app-root'));
