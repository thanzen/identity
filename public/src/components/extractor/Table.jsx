"use strict";
const React = require('react');
const amazeui_react_1 = require('amazeui-react');
const actions_1 = require("../../actions");
function onToggle(xpath) {
    actions_1.toggleSelection(xpath);
}
function toggleAllSelection() {
}
function getCheckBox(xpath) {
    if (xpath.isSelected)
        return <amazeui_react_1.Input type="checkbox" label="" onClick={() => { onToggle(xpath); }} checked/>;
    else
        return <amazeui_react_1.Input type="checkbox" label="" onClick={() => { onToggle(xpath); }}/>;
}
const Rows = ({ data }) => (<tbody>
        {data.map(function (model) {
    return (<tr>
                    <td>{model.path}</td>
                    <td>{model.value}</td>
                    <td>{getCheckBox(model)}</td>
                </tr>);
})}
    </tbody>);
const styles = {
    xpath: {
        width: "40%"
    },
    value: {
        width: "55%"
    },
    checkbox: {
        width: "5%"
    }
};
exports.KeyValueTable = ({ data }) => (<amazeui_react_1.Table bordered striped hover radius responsive>
        <thead>
            <tr>
                <th style={styles.xpath}>XPath</th>
                <th style={styles.value}>Value</th>
                <th style={styles.checkbox}></th>
            </tr>
        </thead>
        <Rows data={data}/>
    </amazeui_react_1.Table>);
