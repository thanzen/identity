"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var pages_1 = require('../../pages');
var components_1 = require('../../components');
var extractor_1 = require("../../components/extractor");
var pages = {
    home: pages_1.Home,
};
var BaseComponent_1 = require('../../BaseComponent');
var react_redux_1 = require('react-redux');
function select(state) {
    return {
        xpaths: state.xpaths,
        url: state.url
    };
}
var Page = (function (_super) {
    __extends(Page, _super);
    function Page() {
        _super.apply(this, arguments);
    }
    Page.prototype.render = function () {
        var page = this.props.params.page;
        var query = this.props.location.query;
        var breadcrumb = query && query.breadcrumb;
        if (pages[page]) {
            return React.createElement(pages[page], {});
        }
        return (React.createElement(components_1.PageContainer, null, React.createElement(extractor_1.SearchBar, {url: this.props.url}), React.createElement(extractor_1.KeyValueTable, {data: [{ path: "/html/bo", value: "1asfasdfadfasdfasdfasdfasdfasdfasdfasdfasfdafdafdafd" }, { path: "b", value: "2" }]})));
    };
    return Page;
}(BaseComponent_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(select)(Page);
