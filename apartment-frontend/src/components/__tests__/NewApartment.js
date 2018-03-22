import React from 'react';
import ReactDOM from 'react-dom';
import NewApartment from '../NewApartment';
import { mount } from 'enzyme'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<NewApartment />, div)
})

it('has an address_1 input', ()=>{
  const component = mount(<NewApartment />)
  expect(component.find('label#address_1').text()).toBe("Address 1")
})

it('has an address_2 input', ()=>{
  const component = mount(<NewApartment />)
  expect(component.find('label#address_2').text()).toBe("Address 2")
})

it('has an city input', ()=>{
  const component = mount(<NewApartment />)
  expect(component.find('label#city').text()).toBe("City")
})

it('has an state input', ()=>{
  const component = mount(<NewApartment />)
  expect(component.find('label#state').text()).toBe("State")
})

it('has an postal_code input', ()=>{
  const component = mount(<NewApartment />)
  expect(component.find('label#postal_code').text()).toBe("Postal Code")
})

it('has an country input', ()=>{
  const component = mount(<NewApartment />)
  expect(component.find('label#country').text()).toBe("Country")
})

it('has an contact_name input', ()=>{
  const component = mount(<NewApartment />)
  expect(component.find('label#contact_name').text()).toBe("Contact Name")
})

it('has an contact_phone input', ()=>{
  const component = mount(<NewApartment />)
  expect(component.find('label#contact_phone').text()).toBe("Contact Phone")
})

it('has an contact_hours input', ()=>{
  const component = mount(<NewApartment />)
  expect(component.find('label#contact_hours').text()).toBe("Contact Hours")
})

it("calls submitHandler on submit", ()=>{
  const mockSubmitHandler = jest.fn()
  const component = mount(<NewApartment onSubmit={mockSubmitHandler}/>)
  component.find('button#submit').simulate('click', {button: 0})
  expect(mockSubmitHandler.mock.calls.length).toBe(1)
})

it("passes values on submit", ()=>{
  const mockSubmitHandler = jest.fn()
  const component = mount(<NewApartment onSubmit={mockSubmitHandler}/>)
  component.find('input[name="address_1"]').simulate('change', {target: {value: '123 place', name: 'address_1'}})
  component.find('input[name="city"]').simulate('change', {target: {value: 'sd', name: 'city'}})
  component.find('button#submit').simulate('click', {button: 0})

  const submittedValues = mockSubmitHandler.mock.calls[0][0]
  console.log(submittedValues)

  expect(submittedValues["address_1"]).toBe("123 place")
  expect(submittedValues["city"]).toBe('sd')
})
