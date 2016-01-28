import * as React from 'react';
import BaseComponent from '../../BaseComponent';
import { Input, Button, Table } from 'amazeui-react';
import {stringEndsWith} from "../../utils/stringUtils";
import {Xpath} from '../../models/Xpath';

function toggleSelection() {

}

function toggleAllSelection() {

}

const Rows = ({data})=>(
  <tbody>
  {data.map(function(model){
    return (
      <tr>
        <td>{model.path}</td>
        <td>{model.value}</td>
        <td><Input type="checkbox" label=""  onClick={() => { toggleSelection(); } } /></td>
      </tr>
    )
  })}
  </tbody>
)
const styles ={
  xpath:{
    width:"40%"
  },
  value:{
    width:"55%"
  },
  checkbox:{
    width:"5%"
  }
}
export const KeyValueTable = ({data})=> (
  <Table bordered striped hover radius responsive>
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
​
