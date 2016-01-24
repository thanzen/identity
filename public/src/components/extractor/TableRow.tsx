import * as React from 'react';
import BaseComponent from '../../BaseComponent';

interface Props { model: Object, property:any };

export default class TableRow extends BaseComponent<Props, {}> {
    render() {
        // var rows = this.props.headers.map(function(header: IProperty) {
        //     return <td>{this.props.model[header.name]}</td>;
        // });
        return (
          <td>{this.props.model[this.props.property]}</td>
        )
    }
}
