"use strict";
const React = require('react');
const BaseComponent_1 = require('../BaseComponent');
const amazeui_react_1 = require('amazeui-react');
const extractor_1 = require("../components/extractor");
const react_redux_1 = require('react-redux');
const context_1 = require('../context');
const styles = {
    h1: {
        fontSize: "2.5em",
        color: "White",
        textAlign: "left",
        align: "right"
    },
    p: {
        fontSize: "1.8em",
        color: "Yellow",
        textAlign: "left"
    },
    img: {
        animationName: "fadeIn",
        border: "0px",
        verticalAlign: "middle",
        width: "80%",
        height: "80%"
    }
};
function select(state) {
    return {
        url: state.url,
        isValidUrl: state.isValidUrl,
        isExtracting: state.isExtracting
    };
}
class Header extends BaseComponent_1.default {
    render() {
        let { url, isExtracting, isValidUrl } = this.props;
        return (<amazeui_react_1.Grid className="doc-g">
                <amazeui_react_1.Col sm={12} md={6} lg={5} lgOffset={1}>
                    <span style={styles.h1}>Better use of data, <br /> better success of business</span><br />
                    <span style={styles.p}>We are here to help you obtain data, process data, and analyze data for your needs!
                    </span>
                    <extractor_1.SearchBar url={url} navUrl="/extractor" isValidUrl={isValidUrl} isExtracting={isExtracting}/>
                </amazeui_react_1.Col>
                <amazeui_react_1.Col sm={12} md={6} lg={5}>
                    <img className={"fadeIn"} style={styles.img} src={context_1.default.baseDir + "/images/business-intelligence-process.png"}/>
                </amazeui_react_1.Col>
            </amazeui_react_1.Grid>);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(select)(Header);
