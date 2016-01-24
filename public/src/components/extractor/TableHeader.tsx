import * as React from 'react';
import BaseComponent from '../../BaseComponent';
import {IProperty} from '../../utils/objectUtil';
import TableHeaderRow from './TableHeaderRow';
import { Table } from 'amazeui-react';
interface Props { model: IProperty[] };
let mapHeaders = (headers: IProperty[], useAlias: boolean, useSelect: boolean) => {
    return headers.map(function(header) {
        return <TableHeaderRow model={header} useAlias={useAlias} useSelect={useSelect}/>;
    })
}
export default class Header extends BaseComponent<Props, {}> {
    render() {
        let headers = mapHeaders(this.props.model, false, false);
        return (<Table>
            <thead>
                <tr>
                    {headers}
                </tr>
            </thead>
        </Table>);
    }
}
