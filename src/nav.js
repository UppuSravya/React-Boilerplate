import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
      let styles = {
          backgroundColor: 'gainsboro'
      }
    return (
      <div>
        <Navbar color="faded" light expand="md" style={styles}>
          <NavbarBrand href="/">
          <img style={{maxWidth:100}}src = "https://www.google.co.in/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://www.facebook.com">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.facebook.com">Register</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}