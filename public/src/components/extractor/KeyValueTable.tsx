import * as React from 'react';
import BaseComponent from '../../BaseComponent';
import * as FixedDataTable from 'fixed-data-table';
import { Input, Button } from 'amazeui-react';
import {stringEndsWith} from "../../utils/stringUtils";
import {Xpath} from "../../models/Xpath";
const {Table, Column, Cell} = FixedDataTable;
interface CellProps  {rowIndex?:number,data:Xpath[], col:string}
function toggleSelection(props:CellProps) {

}



const ImageCell = (props:CellProps) => (
    <img
        src={props.data[props.rowIndex][props.col]}
        />
);
const LinkCell = (props:CellProps) => (
    <Cell >
        <a href="#">{props.data[props.rowIndex][props.col]}</a>
    </Cell>
);
const TextCell = (props:CellProps) => (
    <Cell {...this.props}>
        {props.data[props.rowIndex][props.col]}
    </Cell>
);
const CheckboxCell = (props:CellProps) => (
    <Cell {...this.props}>
        <Input type="checkbox" label=""  onClick={() => { toggleSelection(this.props) } } />
    </Cell>
);

const getCellContent = (props:CellProps): any => {
    if (stringEndsWith(props.data[props.rowIndex][props.col], "/a")) {
        return   <a href="#">{props.data[props.rowIndex][props.col]}</a>
    } else if (stringEndsWith(props.data[props.rowIndex][props.col], "/img")) {
        return <img
            src={props.data[props.rowIndex][props.col]}
            />
    }
    return <span>{props.data[props.rowIndex][props.col]}</span>;
}
interface Props{data:Xpath[]}
 class GenericCell extends BaseComponent<CellProps, {}> {
  render(){
    return  <Cell {...this.props}>
  {this.props.data[this.props.rowIndex][this.props.col]}
      </Cell>
  }
}

export default class KeyValueTable extends BaseComponent<Props, {}> {
    render() {

        return (  <Table
        rowHeight={20}
        headerHeight={20}
        rowsCount={this.props.data.length}
        width={400}
        height={200}
        {...this.props}>
        <Column
          header={<Cell {...this.props}>Path</Cell>}
          cell={<GenericCell data={this.props.data} col="path" />}
          width={200}
        />
       <Column
         header={<Cell {...this.props}>Value</Cell>}
         cell={<GenericCell data={this.props.data} col="value" {...this.props} />}
         width={200}
       />
      </Table>);
    }
}
