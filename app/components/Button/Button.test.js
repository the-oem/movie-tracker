import React from 'react';
import fetchMock from 'fetch-mock';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button test', () => {
  it('renders a container element', () => {
    const dom = shallow(<Button />);

    expect(dom.find('.btn')).toHaveLength(1);
  });

  // it('should...', () => {})
  // it('should...', () => {})
  // it('should...', () => {})
  // it('should...', () => {})
});
