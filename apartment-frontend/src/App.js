import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import withAuth from './components/withAuth'
import AuthService from './services/AuthService'

const Auth = new AuthService()

class App extends Component {

  handleLogout(){
    Auth.logout()
      this.props.history.replace('/login');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
       <p className="App-intro">
          <button type="button" className="form-submit" onClick={this.handleLogout.bind(this)}>Logout</button>
        </p>
      </div>
    );
  }
}

export default withAuth(App);
