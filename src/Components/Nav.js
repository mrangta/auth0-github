import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class Menu extends Component {
  render(){
    return(
      <div>
      <Navbar>
        <Navbar.Brand>
          Github Searcher
        </Navbar.Brand>
        <Nav>
          <NavItem href="#">Login</NavItem>
        </Nav>
      </Navbar>
      </div>
    );
  }
}

export default Menu;
