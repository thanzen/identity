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
function getContent(xpath) {
    if (xpath.type == 'image') {
        return <td> <amazeui_react_1.Image width="140" height="140" src={xpath.text}/></td>;
    }
    else {
        return <td>{xpath.text}</td>;
    }
}
function getRows(data) {
    let index = 0;
    return data.reduce((memo, model) => {
        if (model.type != 'script') {
            memo.push(<tr>
                <td>{getCheckBox(model, index)}</td>
                <td>{model.xpath}</td>
                {getContent(model)}
                <td>{model.attribute}</td>
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
        width: "30%"
    },
    value: {
        width: "40%"
    },
    attribute: {
        width: "25%"
    },
    checkbox: {
        width: "5%"
    },
    table: {
        maxWidth: "100%"
    }
};
exports.KeyValueTable = ({ data }) => (<amazeui_react_1.Table bordered striped hover radius responsive={false} style={styles.table}>
        <thead>
            <tr>
                <th style={styles.checkbox}></th>
                <th style={styles.xpath}>XPath</th>
                <th style={styles.value}>Value</th>
                <th style={styles.attribute}>Attribute</th>
            </tr>
        </thead>
        <Rows data={data}/>
    </amazeui_react_1.Table>);
