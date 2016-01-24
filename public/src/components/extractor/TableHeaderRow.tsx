import * as React from 'react';
import BaseComponent from '../../BaseComponent';
import {IProperty} from '../../utils/objectUtil';

interface Props { model: IProperty, useAlias: boolean, useSelect: boolean };

export default class TableHeaderRow extends BaseComponent<Props, {}> {
    onSelectedClick = () => {
        //tod:add logic
    }
    onAliasChange = () => {
        //tod:add logic
    }
    getHeader = (header: IProperty, useAlias: boolean, useSelect: boolean) => {
        if (!useAlias && !useSelect) {
            return (<th>{header.name}</th>)
        } else if (useAlias && !useSelect) {
            return (<th><input type="text" value={header.alias} onChange={this.onAliasChange}/></th>)
        } else if (!useAlias && useSelect) {
            return (<th><input type="text" value={header.name}/> <input type="checkbox"   defaultChecked = {header.selected}/></th>);
        }
        return (<th><input type="text" value={header.alias}/> <input type="checkbox" defaultChecked = {header.selected}/></th>);
    }
    render() {
        return this.getHeader(this.props.model, false, false);
    }
}
