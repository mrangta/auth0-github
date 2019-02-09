import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class Header extends Component {

  onLogin(){
   this.props.onLogin();
  }
  onLogout(){
   this.props.onLogout();
  }
  render(){
    let page;
    if(this.props.idToken){
      page = <NavItem onClick = {this.onLogout.bind(this)}><a href="#"> Logout</a></NavItem>
    }else{
      page = <NavItem onClick = {this.onLogin.bind(this)}><a href="#"> Login</a></NavItem>
    }
    return(
      <Navbar>
        <Navbar.Brand>
          Github Searcher |
        </Navbar.Brand>
        <Nav>
          {page}
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
