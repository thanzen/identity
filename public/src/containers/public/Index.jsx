"use strict";
const React = require('react');
const BaseComponent_1 = require('../../BaseComponent');
const components_1 = require('../../components');
class Index extends BaseComponent_1.default {
    render() {
        return (<div>
                <components_1.Header />
                <div className={"none-horizental-scroll"}>
                    {this.props.children}
                </div>
            </div>);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Index;
