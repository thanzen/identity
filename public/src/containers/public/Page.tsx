import * as React from 'react';

import { Home} from '../../pages';
import { PageContainer} from '../../components';
import {SearchBar,KeyValueTable} from "../../components/extractor";

const pages = {
    home: Home,
};
import BaseComponent from '../../BaseComponent';
import { connect } from 'react-redux';

interface Props { params?: any, location?: any , url?:string}


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
<SearchBar url={this.props.url}/>
                    <KeyValueTable data={[{path:"/html/bo",value:"1asfasdfadfasdfasdfasdfasdfasdfasdfasdfasfdafdafdafd"},{path:"b",value:"2"}]}/>
            </PageContainer>
        );
    }
}
export default connect(select)(Page)
