import * as React from 'react';
import PageContainer from '../components/PageContainer';
import BaseComponent from '../BaseComponent';
import { AvgGrid,Sticky,ScrollSpyNav,Panel} from 'amazeui-react';

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
        backgroundColor: "rgba(100,182,172,0.5)",
        border: "0px",
        verticalAlign: "middle",
        width: "80%",
        height: "80%"
    },
    div: {
        marginLeft: "15%"
    }
}
export default class Header extends BaseComponent<{}, {}> {
    render() {
        return (
            <PageContainer>
               <AvgGrid sm={1} md={1} lg={2}>
                   <li><div style={styles.div}>
                       <br/>
                       <span style={styles.h1}>Better use of data,<br/> better success of business</span><br/>
                       <span style={styles.p}>We are here to help you obtain data, process data, and analyze data for your needs!
                       </span>
                   </div>
                   </li>
                   <li  ><img className="am-thumbnail" style={styles.img} src={Object.getPrototypeOf(this).constructor.getBaseDir()+"/images/business-intelligence-process.png"} /></li>
               </AvgGrid>
            </PageContainer>
        );
    }
}
