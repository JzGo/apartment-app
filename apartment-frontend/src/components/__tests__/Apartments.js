import React from 'react';
import ReactDOM from 'react-dom';
import Apartments from '../Apartments';
import { mount } from 'enzyme'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Apartments />, div)
})
