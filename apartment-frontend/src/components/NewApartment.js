import React, { Component } from 'react';
import {
  Col,
  Row,
  ControlLabel,
  FormGroup,
  FormControl
} from 'react-bootstrap'

class NewApartment extends Component {
  render() {
    return (
      <form>
        <Row>
          <Col xs={6}>
            <FormGroup>
              <ControlLabel id="address_1">Address 1</ControlLabel>
              <FormControl type="text" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <FormGroup>
              <ControlLabel id="address_2">Address 2</ControlLabel>
              <FormControl type="text" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <FormGroup>
              <ControlLabel id="city">City</ControlLabel>
              <FormControl type="text" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <FormGroup>
              <ControlLabel id="state">State</ControlLabel>
              <FormControl type="text" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <FormGroup>
              <ControlLabel id="postal_code">Postal Code</ControlLabel>
              <FormControl type="text" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <FormGroup>
              <ControlLabel id="country">Country</ControlLabel>
              <FormControl type="text" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <FormGroup>
              <ControlLabel id="contact_name">Contact Name</ControlLabel>
              <FormControl type="text" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <FormGroup>
              <ControlLabel id="contact_phone">Contact Phone</ControlLabel>
              <FormControl type="text" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <FormGroup>
              <ControlLabel id="contact_hours">Contact Hours</ControlLabel>
              <FormControl type="text" />
            </FormGroup>
          </Col>
        </Row>
      </form>
    );
  }
}

export default NewApartment;
