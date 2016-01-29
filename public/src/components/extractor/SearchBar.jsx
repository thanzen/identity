"use strict";
const React = require('react');
const amazeui_react_1 = require('amazeui-react');
const actions_1 = require("../../actions");
const history_1 = require("../../history");
function onSubmit(url, navUrl) {
    if (url) {
        actions_1.submitExtractRequest(url);
    }
    if (navUrl) {
        history_1.default.replaceState(null, navUrl);
    }
}
const styles = {
    input: {
        width: "500px"
    },
    form: {
        width: "100%",
        marginBottom: "20px"
    }
};
function onChange(event) {
    actions_1.changeUrl(event.target.value);
}
exports.SearchBar = ({ url, navUrl }) => (<amazeui_react_1.Form inline style={styles.form}>
            <amazeui_react_1.Input type="input" label="" value={url} onChange={onChange} style={styles.input}/>
            {'\u00a0'}
            <amazeui_react_1.Button amStyle="primary" radius onClick={() => { onSubmit(url, navUrl); }}>Get Data</amazeui_react_1.Button>
        </amazeui_react_1.Form>);
