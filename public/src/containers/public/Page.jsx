"use strict";
const React = require('react');
const pages_1 = require('../../pages');
const react_router_1 = require('react-router');
require('./Page.css');
const pages = {
    home: pages_1.Home,
    extractor: pages_1.Extractor
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
        url: state.url,
        isValidUrl: state.isValidUrl,
        isExtracting: state.isExtracting
    };
}
class Page extends BaseComponent_1.default {
    render() {
        const page = this.props.params.page;
        const { query } = this.props.location;
        const breadcrumb = query && query.breadcrumb;
        if (pages[page]) {
            return React.createElement(pages[page], this.props);
        }
        return (<div>
                <div className={"wrap_404"}>
                    <div className={"logo_404"}>
                  404
                        <div className={"sub_404"}>
                            <p><react_router_1.Link to="/">Go Back to Home</react_router_1.Link></p>
                        </div>
                    </div>
                </div>
            </div>);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(select)(Page);
