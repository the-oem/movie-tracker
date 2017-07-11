import React from 'react';
import fetchMock from 'fetch-mock';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login test', () => {
  it('renders a container element', () => {
    const dom = shallow(<Login />);

    expect(dom.find('.login')).toHaveLength(1);
  });

  // it('should...', () => {})
  // it('should...', () => {})
  // it('should...', () => {})
  // it('should...', () => {})
});