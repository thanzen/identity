import * as React from 'react';

import { Home,Extractor} from '../../pages';
import {SearchBar, KeyValueTable} from "../../components/extractor";
import {Xpath} from '../../models/Xpath';
import { Button, Grid, Col, Form } from 'amazeui-react';
import context from '../../context';
import { Link} from 'react-router';
import './Page.css';
const pages = {
    home: Home,
    extractor:Extractor
};
import BaseComponent from '../../BaseComponent';
import { connect } from 'react-redux';

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
        url: state.url,
        isValidUrl: state.isValidUrl,
        isExtracting:state.isExtracting
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
                pages[page], this.props
            );
        }

        return (
            <div>
                <div className={"wrap_404"}>
                    <div className={"logo_404"}>
                  404
                        <div className={"sub_404"}>
                            <p><Link to="/">Go Back to Home</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect(select)(Page)
