"use strict";
const React = require('react');
const BaseComponent_1 = require('../BaseComponent');
const react_router_1 = require('react-router');
const amazeui_react_1 = require('amazeui-react');
const context_1 = require('../context');
let formStyle = {
    height: "260px",
    width: "200px",
    marginRight: "200px"
};
let styles = {
    left: {
        float: "left"
    }
};
let formInstance = (<amazeui_react_1.Form block style={formStyle}>
        <amazeui_react_1.Input placeholder="username"/>

        <amazeui_react_1.Input placeholder="password"/>

        <amazeui_react_1.Input type="submit" amStyle="primary" amSize="sm" value="Login" standalone/>
    </amazeui_react_1.Form>);
let loggedInDropdown = (<amazeui_react_1.Dropdown title={[<amazeui_react_1.Icon icon="group" key="hey"/>, ' Hey, Jude']} navItem>
        <amazeui_react_1.Dropdown.Item closeOnClick linkComponent={react_router_1.Link} linkProps={{ to: '/profile', query: { breadcrumb: 'Profile' } }}>
            <amazeui_react_1.Icon icon="user"/> {' Profile'}
        </amazeui_react_1.Dropdown.Item>
        <amazeui_react_1.Dropdown.Item>
            <amazeui_react_1.Icon icon="cog"/> {' Setting'}
        </amazeui_react_1.Dropdown.Item>
    </amazeui_react_1.Dropdown>);
class Header extends BaseComponent_1.default {
    render() {
        var btn = <a href={`/login`}>Log in</a>;
        if (context_1.default.isLogedIn) {
            btn = <a href={`/logout`}>Log out</a>;
        }
        return (<amazeui_react_1.Topbar brand={(<react_router_1.Link to={`/`} style={styles.left} activeClassName="active">Ascend Tec.</react_router_1.Link>)} toggleNavKey="nav" inverse fluid>

                <amazeui_react_1.CollapsibleNav eventKey="nav">

                    <amazeui_react_1.Nav className="am-topbar-right" topbar>
                        <amazeui_react_1.NavItem>{btn}</amazeui_react_1.NavItem>
                    </amazeui_react_1.Nav>
                </amazeui_react_1.CollapsibleNav>
            </amazeui_react_1.Topbar>);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Header;
