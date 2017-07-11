import React from 'react';
import fetchMock from 'fetch-mock';
import { shallow } from 'enzyme';
import Cover from './Cover';

describe('Cover test', () => {
  it('renders a container element', () => {
    const dom = shallow(<Cover />);

    expect(dom.find('.cover-container')).toHaveLength(1);
  });

  // it('should...', () => {})
  // it('should...', () => {})
  // it('should...', () => {})
  // it('should...', () => {})
});
