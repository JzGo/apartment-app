import React, { Component } from 'react';
import {
  Col,
  Row,
  ControlLabel,
  FormGroup,
  FormControl,
  Button
} from 'react-bootstrap'

class NewApartment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        address_1: '',
        address_2: '',
        city: '',
        state: '',
        postal_code: '',
        country: '',
        contact_name: '',
        contact_phone: '',
        contact_hours: ''
      }
    }
  }

  handleChange(event){
    const formState = Object.assign({}, this.state.form)
    formState[event.target.name] = event.target.value
    this.setState({form: formState})
  }

  handleSubmit(){
    this.props.onSubmit(this.state.form)
  }

  render() {
    return (
      <form>
        <Row>
          <Col xs={6}>
            <FormGroup>
              <ControlLabel id="address_1">Address 1</ControlLabel>
              <FormControl
                type="text"
                name="address_1"
                value={this.state.form.address_1}
                onChange={this.handleChange.bind(this)}
               />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <FormGroup>
              <ControlLabel id="address_2">Address 2</ControlLabel>
              <FormControl
                type="text"
                name="address_2"
                value={this.state.form.address_2}
                onChange={this.handleChange.bind(this)}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <FormGroup>
              <ControlLabel id="city">City</ControlLabel>
              <FormControl
                type="text"
                name="city"
                value={this.state.form.city}
                onChange={this.handleChange.bind(this)}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <FormGroup>
              <ControlLabel id="state">State</ControlLabel>
              <FormControl
                type="text"
                name="state"
                value={this.state.form.state}
                onChange={this.handleChange.bind(this)}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <FormGroup>
              <ControlLabel id="postal_code">Postal Code</ControlLabel>
              <FormControl
                type="text"
                name="postal_code"
                value={this.state.form.postal_code}
                onChange={this.handleChange.bind(this)}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <FormGroup>
              <ControlLabel id="country">Country</ControlLabel>
              <FormControl
                type="text"
                name="country"
                value={this.state.form.country}
                onChange={this.handleChange.bind(this)}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <FormGroup>
              <ControlLabel id="contact_name">Contact Name</ControlLabel>
              <FormControl
                type="text"
                name="contact_name"
                value={this.state.form.contact_name}
                onChange={this.handleChange.bind(this)}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <FormGroup>
              <ControlLabel id="contact_phone">Contact Phone</ControlLabel>
              <FormControl
                type="text"
                name="contact_phone"
                value={this.state.form.contact_phone}
                onChange={this.handleChange.bind(this)}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <FormGroup>
              <ControlLabel id="contact_hours">Contact Hours</ControlLabel>
              <FormControl
                type="text"
                name="contact_hours"
                value={this.state.form.contact_hours}
                onChange={this.handleChange.bind(this)}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <Button
              id="submit"
              onClick={this.handleSubmit.bind(this)}
            >Create Apartment Listing</Button>
          </Col>
        </Row>
      </form>
    );
  }
}

export default NewApartment;
