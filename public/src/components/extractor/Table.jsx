"use strict";
const React = require('react');
const amazeui_react_1 = require('amazeui-react');
const actions_1 = require("../../actions");
function onToggle(index) {
    actions_1.toggleSelection(index);
}
function toggleAllSelection() {
}
function getCheckBox(xpath, index) {
    if (xpath.isSelected)
        return <amazeui_react_1.Input type="checkbox" label="" onClick={() => { onToggle(index); }} checked/>;
    else
        return <amazeui_react_1.Input type="checkbox" label="" onClick={() => { onToggle(index); }}/>;
}
function getRows(data) {
    let index = 0;
    return data.reduce((memo, model) => {
        if (model.type != 'script') {
            memo.push(<tr>
                <td>{model.xpath}</td>
                <td>{model.text}</td>
                <td>{getCheckBox(model, index)}</td>
            </tr>);
        }
        index++;
        return memo;
    }, []);
}
const Rows = ({ data }) => (<tbody>
        {getRows(data)}
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
exports.KeyValueTable = ({ data }) => (<amazeui_react_1.Table bordered striped hover radius>
        <thead>
            <tr>
                <th style={styles.xpath}>XPath</th>
                <th style={styles.value}>Value</th>
                <th style={styles.checkbox}></th>
            </tr>
        </thead>
        <Rows data={data}/>
    </amazeui_react_1.Table>);
