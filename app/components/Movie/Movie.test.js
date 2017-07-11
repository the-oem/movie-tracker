import React from 'react';
import fetchMock from 'fetch-mock';
import { shallow } from 'enzyme';
import Movie from './Movie';

describe('Movie test', () => {
  it('renders a container element', () => {
    const dom = shallow(<Movie />);

    expect(dom.find('.movie')).toHaveLength(1);
  });

  // it('should...', () => {})
  // it('should...', () => {})
  // it('should...', () => {})
  // it('should...', () => {})
});