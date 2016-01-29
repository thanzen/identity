"use strict";
var React = require('react');
var BaseComponent_1 = require('../BaseComponent');
class PageContainer extends BaseComponent_1.default {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div className={`identity-page ${this.props.className}`}>
                {this.props.children}
            </div>);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PageContainer;
;
