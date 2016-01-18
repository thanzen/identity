import * as React from 'react';
import BaseComponent from '../BaseComponent'
import { Link} from 'react-router';
import { Topbar, CollapsibleNav, Nav, NavItem, Icon, Badge, Dropdown } from 'amazeui-react';
export default class Header extends BaseComponent<{}, {}> {
    render() {
        return (
            <Topbar
                brand="Amaze UI"
                toggleNavKey="nav"
                inverse
                fluid
                >
                <CollapsibleNav eventKey="nav">
                    <Nav
                        className="am-topbar-right"
                        topbar
                        >
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
                        <NavItem
                            className="am-dropdown"
                            href="#"
                            >
                            <Icon icon="sign-out" /> {' Logout'}
                        </NavItem>
                    </Nav>
                </CollapsibleNav>
            </Topbar>
        );
    }
}
