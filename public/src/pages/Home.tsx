import * as React from 'react';
import BaseComponent from '../BaseComponent';
import { AvgGrid, Sticky, ScrollSpyNav, Panel} from 'amazeui-react';
import {SearchBar} from "../components/extractor";
import { connect } from 'react-redux';
import context from '../context';

const styles = {
    h1: {
        fontSize: "2.5em",
        color: "White",
        textAlign: "left",
        align: "right"
    },
    p: {
        fontSize: "1.8em",
        color: "Yellow",
        textAlign: "left"
    },
    img: {
        // backgroundColor: "rgba(100,182,172,0.5)",
        animationName:"fadeIn",
        border: "0px",
        verticalAlign: "middle",
        width: "80%",
        height: "80%"
    },
    div: {
        marginLeft: "15%"
    }
}

function select(state) {
    return {
        url: state.url,
        isValidUrl: state.isValidUrl,
        isExtracting:state.isExtracting
    }
}

interface Props { url: string,isExtracting:boolean,isValidUrl:boolean }
class Header extends BaseComponent<Props, {}> {
    render() {
        let {url,isExtracting,isValidUrl} = this.props;
        return (
            <div>
                <AvgGrid sm={1} md={1} lg={2}>
                    <li><div style={styles.div}>
                        <br/>
                        <span style={styles.h1}>Better use of data, <br/> better success of business</span><br/>
                        <span style={styles.p}>We are here to help you obtain data, process data, and analyze data for your needs!
                        </span>
                        <SearchBar url={url} navUrl="/extractor" isValidUrl={isValidUrl} isExtracting={isExtracting}/>
                    </div>
                    </li>
                    <li  ><img className={"fadeIn"} style={styles.img} src={context.baseDir+ "/images/business-intelligence-process.png"} /></li>
                </AvgGrid>

            </div>
        );
    }
}

export default connect(select)(Header);
