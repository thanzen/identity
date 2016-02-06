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
    return false;
}
const styles = {
    input: {
        width: "100%"
    },
    form: {
        width: "100%",
        marginBottom: "20px"
    }
};
function onChange(event) {
    actions_1.changeUrl(event.target.value);
}
function getButton(isValidUrl, isExtracting, url, navUrl) {
    if (isValidUrl && !isExtracting) {
        return <amazeui_react_1.Button amStyle="primary" radius type="submit">Get Data</amazeui_react_1.Button>;
    }
    return <amazeui_react_1.Button amStyle="primary" radius type="submit" disabled>Get Data</amazeui_react_1.Button>;
}
exports.SearchBar = ({ isValidUrl, isExtracting, url, navUrl }) => (<amazeui_react_1.Form inline style={styles.form} onSubmit={(e) => { e.preventDefault(); onSubmit(url, navUrl); }} className="searchbar-form">
        <amazeui_react_1.Input type="input" label="" value={url} onChange={onChange} style={styles.input} round icon="search"/>
        {'\u00a0'}
        {getButton(isValidUrl, isExtracting, url, navUrl)}
    </amazeui_react_1.Form>);
