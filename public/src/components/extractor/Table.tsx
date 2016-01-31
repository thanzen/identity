import * as React from 'react';
import BaseComponent from '../../BaseComponent';
import { Input, Button, Table } from 'amazeui-react';
import {stringEndsWith} from "../../utils/stringUtils";
import {Xpath} from '../../models/Xpath';
import {toggleSelection} from "../../actions";

function onToggle(index: number) {
    toggleSelection(index);
}

function toggleAllSelection() {

}
function getCheckBox(xpath: Xpath, index: number) {
    if (xpath.isSelected)
        return <Input type="checkbox" label=""  onClick={() => { onToggle(index); } } checked />
    else
        return <Input type="checkbox" label=""  onClick={() => { onToggle(index); } } />
}

function getRows(data: Xpath[]) {
    let index: number = 0;
    return data.reduce((memo, model) => {
        if (model.type != 'script') {
            memo.push(<tr>
                <td>{model.xpath}</td>
                <td>{model.text}</td>
                <td>{getCheckBox(model, index) }</td>
            </tr>)
        }
        index++;
        return memo;
    }
        , []);
}

const Rows = ({data}) => (
    <tbody>
        {getRows(data) }
    </tbody>
)
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
}
export const KeyValueTable = ({data}) => (
    <Table bordered striped hover radius>
        <thead>
            <tr>
                <th style={styles.xpath}>XPath</th>
                <th style={styles.value}>Value</th>
                <th style={styles.checkbox}></th>
            </tr>
        </thead>
        <Rows data={data}/>
    </Table>
);
