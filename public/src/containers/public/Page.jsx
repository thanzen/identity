"use strict";
const React = require('react');
const pages_1 = require('../../pages');
const pages = {
    home: pages_1.Home,
};
const BaseComponent_1 = require('../../BaseComponent');
const react_redux_1 = require('react-redux');
let styles = {
    submitBtn: {
        float: "right"
    }
};
function select(state) {
    return {
        xpaths: state.xpaths,
        url: state.url
    };
}
class Page extends BaseComponent_1.default {
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
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(select)(Page);
