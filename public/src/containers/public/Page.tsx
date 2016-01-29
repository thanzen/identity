import * as React from 'react';

import { Home} from '../../pages';
import { PageContainer} from '../../components';
import {SearchBar, KeyValueTable} from "../../components/extractor";
import {Xpath} from '../../models/Xpath';
import { Button, Grid, Col, Form } from 'amazeui-react';
const pages = {
    home: Home,
};
import BaseComponent from '../../BaseComponent';
import { connect } from 'react-redux';
import history from "../../history";
interface Props { params?: any, location?: any, url?: string, xpaths?: Xpath[] }

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
        url: state.url
    }
}
// Wrap the component to inject dispatch and state into it


class Page extends BaseComponent<Props, {}> {
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
            <PageContainer>
                <SearchBar url={this.props.url} navUrl=""/>
                <Button amStyle="primary" radius onClick={() => { history.replaceState(null, "/"); } } style={styles.submitBtn}>Save</Button>
                <KeyValueTable data={this.props.xpaths}/>
            </PageContainer>
        );
    }
}
export default connect(select)(Page)
