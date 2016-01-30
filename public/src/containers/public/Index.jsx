"use strict";
const React = require('react');
const BaseComponent_1 = require('../../BaseComponent');
const components_1 = require('../../components');
class Index extends BaseComponent_1.default {
    render() {
        return (<div className="adm-container">
        <components_1.Header />
        <div className="adm-main">
          {this.props.children}
        </div>
      </div>);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Index;
