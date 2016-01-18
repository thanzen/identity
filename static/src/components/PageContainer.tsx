import * as React from 'react';
import BaseComponent from '../BaseComponent';
import { Link } from 'react-router';
import { Icon } from 'amazeui-react';

interface Props { className?: any, children?: any }
export  default class PageContainer extends BaseComponent<Props, {}>{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div
                className={`adm-page ${this.props.className}`}
                >
                {this.props.children}
            </div>
        );
    }
};
