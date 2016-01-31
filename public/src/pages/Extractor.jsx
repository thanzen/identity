"use strict";
const React = require('react');
const extractor_1 = require("../components/extractor");
const amazeui_react_1 = require('amazeui-react');
const BaseComponent_1 = require('../BaseComponent');
let styles = {
    submitBtn: {
        float: "right"
    }
};
class Extractor extends BaseComponent_1.default {
    render() {
        return (<div>
                <extractor_1.SearchBar url={this.props.url} navUrl="" isValidUrl={this.props.isValidUrl} isExtracting={this.props.isExtracting}/>
                <amazeui_react_1.Button amStyle="primary" radius onClick={() => { history.replaceState(null, "/"); }} style={styles.submitBtn}>Save</amazeui_react_1.Button>
                <extractor_1.KeyValueTable data={this.props.xpaths}/>
            </div>);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Extractor;
