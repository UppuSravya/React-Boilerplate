import React, { Component } from 'react';
import './App.css';
import Nav from './Navbar/nav';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Login from './Login/login';


class App extends Component {

  render() {
    return (
      <div className="App">
        <header>
          <Nav />
        </header>
        <br/>
        <br />

        <h1>Login</h1>
        <br />
        <br />
       

        <MuiThemeProvider>
          <Login />
        </MuiThemeProvider>


      </div>


    );
  }
}
export default App;


