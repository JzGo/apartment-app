import React, { Component } from 'react';
import './App.css';
import withAuth from './components/withAuth'
import AuthService from './services/AuthService'
import NewApartment from './components/NewApartment'
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
          <h1 className="App-title">Post Apartment Listing</h1>
        </header>
        <NewApartment />
       <p className="App-intro">
          <button type="button" className="form-submit" onClick={this.handleLogout.bind(this)}>Logout</button>
        </p>
      </div>
    );
  }
}

export default withAuth(App);
