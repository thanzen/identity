import * as React from 'react';
import BaseComponent from '../../BaseComponent';
import {  Header } from '../../components';

interface Props { children?: any }


export default class Index extends BaseComponent<Props, {}> {
    render() {
        return (
            <div>
                <Header/>
                <div className={"none-horizental-scroll"}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
