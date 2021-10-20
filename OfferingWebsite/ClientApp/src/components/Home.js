import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Nav } from 'reactstrap';
import { Link } from 'react-router-dom';
export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
            <h1>Homepage</h1>
            <Nav>
                <NavLink tag={Link} className="font-weight-bold lead p-0" to="/login"><h3>Login</h3></NavLink>
            </Nav>
      </div>
    );
  }
}
