import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Nav } from 'reactstrap';
import { Link } from 'react-router-dom';
export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
            <h1>Homepage</h1>
            <div class="d-flex justify-content-left font-weight-bold lead">
                <Nav>
                    <NavLink tag={Link} className="p-0" to="/login">
                        <h3>Login</h3>
                    </NavLink>
                </Nav>
                <h3 class="ml-1 mr-1">or</h3>
                <Nav>
                    <NavLink tag={Link} className="p-0" to="/register">
                        <h3>Sign up</h3>
                    </NavLink>
                </Nav>
            </div>

      </div>
    );
  }
}
