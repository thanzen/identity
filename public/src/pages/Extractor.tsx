import * as React from 'react';
import {SearchBar, KeyValueTable} from "../components/extractor";
import {Xpath} from '../models/Xpath';
import { Button, Grid, Col, Form } from 'amazeui-react';

import BaseComponent from '../BaseComponent';
import { connect } from 'react-redux';
import * as Loader from 'react-loader';


interface Props { url?: string, xpaths?: Xpath[], isValidUrl?: boolean, isExtracting?: boolean }

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
                <Loader loaded={!this.props.isExtracting} lines={13} length={20} width={10} radius={30}
                    corners={1} rotate={0} direction={1} color="#000" speed={1}
                    trail={60} shadow={false} hwaccel={false} className="spinner"
                    zIndex={2e9} top="50%" left="50%" scale={1.00} >
                    <KeyValueTable data={this.props.xpaths}/>
                </Loader>
            </div>
        );
    }
}
