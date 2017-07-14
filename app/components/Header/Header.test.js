import React from 'react';
import fetchMock from 'fetch-mock';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header test', () => {
  it('renders a container element', () => {
    const dom = shallow(<Header />);

    expect(dom.find('.header')).toHaveLength(1);
  });

  it('should render a header element', () => {

  });
  // it('should...', () => {})
  // it('should...', () => {})
  // it('should...', () => {})
});
