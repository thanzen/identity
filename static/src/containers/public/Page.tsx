import * as React from 'react';

import {
    Home
} from '../../pages';
import {
    PageContainer,
} from '../../components';
const pages = {
    home: Home,
};
import BaseComponent from '../../BaseComponent';
interface Props { params?: any, location?: any }

export default class Page extends BaseComponent<Props, {}> {
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
                404
            </PageContainer>
        );
    }
}
