"use strict";
const React = require('react');
const pages_1 = require('../pages');
const extractor_1 = require("../components/extractor");
const amazeui_react_1 = require('amazeui-react');
const pages = {
    home: pages_1.Home,
};
const BaseComponent_1 = require('../BaseComponent');
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
class Extractor extends BaseComponent_1.default {
    render() {
        const page = this.props.params.page;
        const { query } = this.props.location;
        const breadcrumb = query && query.breadcrumb;
        if (pages[page]) {
            return React.createElement(pages[page], {});
        }
        return (<div>
                <extractor_1.SearchBar url={this.props.url} navUrl=""/>
                <amazeui_react_1.Button amStyle="primary" radius onClick={() => { history.replaceState(null, "/"); }} style={styles.submitBtn}>Save</amazeui_react_1.Button>
                <extractor_1.KeyValueTable data={this.props.xpaths}/>
            </div>);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(select)(Extractor);
