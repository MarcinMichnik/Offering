import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Nav } from 'reactstrap';
import { Link } from 'react-router-dom';

export class Login extends Component {
    static displayName = Login.name;

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div class="d-flex justify-content-left">
                    <p>Not registered yet?</p>
                    <NavLink tag={Link} className="ml-1 p-0" to="/register"> Sign up!</NavLink>
                </div>
            </div>
        );
    }
}
