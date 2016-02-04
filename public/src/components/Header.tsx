import * as React from 'react';
import BaseComponent from '../BaseComponent'
import { Link} from 'react-router';
import { Topbar, CollapsibleNav, Nav, NavItem, Icon, Badge, Dropdown, Form, Input, Button } from 'amazeui-react';
import context from '../context';
let formStyle = {
    height: "260px",
    width: "200px",
    marginRight: "200px"
}
let styles = {
    left: {
        float: "left"
    }
}
let formInstance = (
    <Form block style={formStyle}>
        <Input placeholder="username" />

        <Input placeholder="password" />

        <Input type="submit" amStyle="primary" amSize="sm" value="Login" standalone/>
    </Form>
);
let loggedInDropdown = (
    <Dropdown
        title={[<Icon icon="group" key="hey" />, ' Hey, Jude']}
        navItem
        >
        <Dropdown.Item
            closeOnClick
            linkComponent={Link}
            linkProps={{ to: '/profile', query: { breadcrumb: 'Profile' } }}
            >
            <Icon icon="user" /> {' Profile'}
        </Dropdown.Item>
        <Dropdown.Item>
            <Icon icon="cog" /> {' Setting'}
        </Dropdown.Item>
    </Dropdown>
);

// <NavItem
//     className="am-dropdown"
//     href="#"
//     >
//     <Icon icon="sign-out" /> {' Logout'}
// </NavItem>

export default class Header extends BaseComponent<{}, {}> {
    render() {
        var loginOutbtn = null;
        var registerBtn = null;
        if (context.isLogedIn) {
            loginOutbtn = <a href={`/logout`} >Log out</a>;
        }else{
          loginOutbtn =<a href={`/login`} >Log in</a>;
          registerBtn =  <NavItem><a href={`/register`} >Register</a></NavItem>
        }
        return (
            <Topbar
                brand={(<Link to={`/`} style={styles.left} activeClassName="active">Ascend Tec.</Link>) }
                toggleNavKey="nav"
                inverse
                fluid
                className={"wave-in-out"}
                >
                <CollapsibleNav eventKey="nav">
                    <Nav
                        className="am-topbar-right"
                        topbar
                        >
                        <NavItem>{loginOutbtn}</NavItem>
                        {registerBtn}
                    </Nav>
                </CollapsibleNav>
            </Topbar>
        );
    }
}
