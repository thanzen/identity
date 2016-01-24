import * as React from 'react';
import BaseComponent from '../../BaseComponent';
import {IProperty} from '../../utils/objectUtil';
import TableRow from './TableRow';

interface Props { model: any[],  property:any };

export default class Table extends BaseComponent<Props, {}> {
    render() {
        var rows = this.props.model.map(function(row) {
            return <TableRow model={row} property = {property}></TableRow>;
        });
        return (
          <td>{this.props.model[this.props.header.name]}</td>
        )
    }
}
