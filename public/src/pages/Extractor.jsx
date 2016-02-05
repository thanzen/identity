"use strict";
const React = require('react');
const extractor_1 = require("../components/extractor");
const amazeui_react_1 = require('amazeui-react');
const BaseComponent_1 = require('../BaseComponent');
const Loader = require('react-loader');
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
                <Loader loaded={!this.props.isExtracting} lines={13} length={20} width={10} radius={30} corners={1} rotate={0} direction={1} color="#000" speed={1} trail={60} shadow={false} hwaccel={false} className="spinner" zIndex={2e9} top="50%" left="50%" scale={1.00}>
                    <extractor_1.KeyValueTable data={this.props.xpaths}/>
                </Loader>
            </div>);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Extractor;
