import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {  Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
//Custom Imports
import Main from './Containers/Main';

//Firebase configuration
import { auth, storageKey }  from './Config/Config';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isAuthenticated: auth.currentUser !== undefined ? true : false,
      user:{
        displayName:""
      }
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        window.localStorage.setItem(storageKey, user.uid);
        this.setState({
              user:user, 
              isAuthenticated: true
            });
      } else {
        window.localStorage.removeItem(storageKey);
        this.setState({
          isAuthenticated:false,
          user:{
            displayName:""
          }
        });
      }
    });
  }

  render() {
    return (
      <div>
          <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">
                  <img src={logo} className="App-logo" alt="logo" />
                  MovieSpoilers
                </a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>\
              <Nav pullRight>
                <NavItem eventKey={1} href="#">

                </NavItem>
                <NavDropdown eventKey={3} title={this.state.user.displayName} id="basic-nav-dropdown">
                  <MenuItem eventKey={3.1}>Profile</MenuItem>
                  <MenuItem eventKey={3.2}>Another action</MenuItem>
                  <MenuItem eventKey={3.3}>Something else here</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={3.3}>Log out</MenuItem>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <div className="container">
            <div className="col-md-2">
                Navigation Left (Rankings, etc..)
            </div>
            <div className="col-md-10">
              <Main isAuthenticated={this.state.isAuthenticated} />
            </div>
          </div>
      </div>
    );
  }
}

export default App;
