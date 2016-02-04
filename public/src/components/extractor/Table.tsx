import * as React from 'react';
import BaseComponent from '../../BaseComponent';
import { Input, Button, Table, Image } from 'amazeui-react';
import {stringEndsWith} from "../../utils/stringUtils";
import {Xpath} from '../../models/Xpath';
import {toggleSelection} from "../../actions";
const styles = {
    xpath: {
        width: "30%"
    },
    value: {
        width: "40%"
    },
    attribute:{
        width: "25%"
    },
    checkbox: {
        width: "5%"
    },
    table:{
      maxWidth:"100%",
      overflowX: "hidden"
    }
}
function onToggle(index: number) {
    toggleSelection(index);
}

function toggleAllSelection() {

}
function getCheckBox(xpath: Xpath, index: number) {
    if (xpath.isSelected)
        return <Input type="checkbox" label=""  onClick={() => { onToggle(index); } } checked />
    else
        return <Input type="checkbox" label=""  onClick={() => { onToggle(index); } }/>
}

function getContent(xpath:Xpath){
   if(xpath.type == 'image'){
     return  <td style={styles.value}> <Image
        width="140"
        height="140"
        src={xpath.text}/></td>
   }else{
     return <td style={styles.value}>{xpath.text}</td>
   }
}

function getRows(data: Xpath[]) {
    let index: number = 0;
    return data.reduce((memo, model) => {
        if (model.type != 'script' && model.type != 'style') {
            memo.push(<tr>
                <td style={styles.checkbox}>{getCheckBox(model, index) }</td>
                <td style={styles.xpath}>{model.xpath}</td>
                {getContent(model)}
                <td style={styles.attribute}>{model.attribute}</td>
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

export const KeyValueTable = ({data}) => (
    <Table bordered striped hover radius responsive={false}>
        <thead>
            <tr >
                <th style={styles.checkbox}></th>
                <th style={styles.xpath}>XPath</th>
                <th style={styles.value}>Text</th>
                <th style={styles.attribute}>Attribute</th>
            </tr>
        </thead>
        <Rows data={data}/>
    </Table>
);
