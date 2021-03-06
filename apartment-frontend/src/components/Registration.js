import React, { Component } from 'react';
import '../css/Login.css';
import AuthService from '../services/AuthService';

class Registration extends Component {
  constructor(){
    super()
    this.Auth = new AuthService()
    this.state={
      user: {
        name: '',
        email: '',
        password: ''
      }
    }
  }

  handleChange(e){
    this.setState({ [e.target.name]: e.target.value })
  }

  handleFormSubmit(e) {
    e.preventDefault()
    this.Auth.register(this.state)
    .then(res =>{
      this.props.history.replace('/')
    })
    .catch(err =>{ alert(err) })
  }

  render() {
    return (
      <div className="center">
        <div className="card">
          <h1>Login</h1>
          <form onSubmit={this.handleFormSubmit.bind(this)}>
            <input
              className="form-item"
              placeholder="name goes here..."
              name="name"
              type="text"
              onChange={this.handleChange.bind(this)}
              value={this.state.name}
            />
            <input
              className="form-item"
              placeholder="email goes here..."
              name="email"
              type="text"
              onChange={this.handleChange.bind(this)}
              value={this.state.email}
            />
            <input
              className="form-item"
              placeholder="Password goes here..."
              name="password"
              type="password"
              onChange={this.handleChange.bind(this)}
              value={this.state.password}
            />
            <input
              className="form-item"
              placeholder="Password confirmation goes here..."
              name="password_confirmation"
              type="password"
              onChange={this.handleChange.bind(this)}
              value={this.state.password_confirmation}
            />
            <input
              className="form-submit"
              value="SUBMIT"
              type="submit"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Registration;
