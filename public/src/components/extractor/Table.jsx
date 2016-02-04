"use strict";
const React = require('react');
const amazeui_react_1 = require('amazeui-react');
const actions_1 = require("../../actions");
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
        maxWidth: "100%",
        overflowX: "hidden"
    }
};
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
        return <td style={styles.value}> <amazeui_react_1.Image width="140" height="140" src={xpath.text}/></td>;
    }
    else {
        return <td style={styles.value}>{xpath.text}</td>;
    }
}
function getRows(data) {
    let index = 0;
    return data.reduce((memo, model) => {
        if (model.type != 'script' && model.type != 'style') {
            memo.push(<tr>
                <td style={styles.checkbox}>{getCheckBox(model, index)}</td>
                <td style={styles.xpath}>{model.xpath}</td>
                {getContent(model)}
                <td style={styles.attribute}>{model.attribute}</td>
            </tr>);
        }
        index++;
        return memo;
    }, []);
}
const Rows = ({ data }) => (<tbody>
        {getRows(data)}
    </tbody>);
exports.KeyValueTable = ({ data }) => (<amazeui_react_1.Table bordered striped hover radius responsive={false}>
        <thead>
            <tr>
                <th style={styles.checkbox}></th>
                <th style={styles.xpath}>XPath</th>
                <th style={styles.value}>Text</th>
                <th style={styles.attribute}>Attribute</th>
            </tr>
        </thead>
        <Rows data={data}/>
    </amazeui_react_1.Table>);
