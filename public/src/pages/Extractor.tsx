import * as React from 'react';

import { Home} from '../pages';
// import { PageContainer} from '../../components';
import {SearchBar, KeyValueTable} from "../components/extractor";
import {Xpath} from '../models/Xpath';
import { Button, Grid, Col, Form } from 'amazeui-react';
const pages = {
    home: Home,
};
import BaseComponent from '../BaseComponent';
import { connect } from 'react-redux';

interface Props { params?: any, location?: any, url?: string, xpaths?: Xpath[],isValidUrl?:boolean, isExtracting?:boolean}

let styles = {
    submitBtn: {
        float: "right"
    }
}
// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
    return {
        xpaths: state.xpaths,
        url: state.url,
        isValidUrl: state.isValidUrl,
        isExtracting:state.isExtracting
    }
}
// Wrap the component to inject dispatch and state into it


class Extractor extends BaseComponent<Props, {}> {
    render() {
        const page = this.props.params.page;
        const {query} = this.props.location;
        const breadcrumb = query && query.breadcrumb;

        if (pages[page]) {
            return React.createElement(
                pages[page], {}
            );
        }
        return (
            <div>
                <SearchBar url={this.props.url} navUrl=""  isValidUrl={this.props.isValidUrl} isExtracting={this.props.isExtracting}/>
                <Button amStyle="primary" radius onClick={() => { history.replaceState(null, "/"); } } style={styles.submitBtn}>Save</Button>
                <KeyValueTable data={this.props.xpaths}/>
            </div>
        );
    }
}
export default connect(select)(Extractor)