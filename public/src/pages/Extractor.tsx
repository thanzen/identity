import * as React from 'react';
import {SearchBar, KeyValueTable} from "../components/extractor";
import {Xpath} from '../models/Xpath';
import { Button, Grid, Col, Form } from 'amazeui-react';

import BaseComponent from '../BaseComponent';
import { connect } from 'react-redux';

interface Props {url?: string, xpaths?: Xpath[],isValidUrl?:boolean, isExtracting?:boolean}

let styles = {
    submitBtn: {
        float: "right"
    }
}

export default class Extractor extends BaseComponent<Props, {}> {
    render() {
        return (
            <div>
                <SearchBar url={this.props.url} navUrl=""  isValidUrl={this.props.isValidUrl} isExtracting={this.props.isExtracting}/>
                <Button amStyle="primary" radius onClick={() => { history.replaceState(null, "/"); } } style={styles.submitBtn}>Save</Button>
                <KeyValueTable data={this.props.xpaths}/>
            </div>
        );
    }
}
