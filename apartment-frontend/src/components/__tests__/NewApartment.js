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
