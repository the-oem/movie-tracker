import React from 'react';
import fetchMock from 'fetch-mock';
import { shallow } from 'enzyme';
import ShelfView from './ShelfView';

describe('ShelfView test', () => {
  it('renders a container element', () => {
    const dom = shallow(<ShelfView />);

    expect(dom.find('.shelf-view')).toHaveLength(1);
  });

  // it('should...', () => {})
  // it('should...', () => {})
  // it('should...', () => {})
  // it('should...', () => {})
});