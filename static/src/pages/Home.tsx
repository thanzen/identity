import * as React from 'react';
import PageContainer from '../components/PageContainer';
import BaseComponent from '../BaseComponent';
import { AvgGrid } from 'amazeui-react';
export default class Header extends BaseComponent<{}, {}> {
    render() {
        return (
            <PageContainer>
                <AvgGrid
                    sm={2}
                    md={4}
                    className="am-margin-bottom am-padding-vertical am-text-center adm-intro-list"
                    >
                  //todo:add page
                </AvgGrid>
            </PageContainer>
        );
    }
}
