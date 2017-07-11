import React from 'react';
import fetchMock from 'fetch-mock';
import { shallow } from 'enzyme';
import Detail from './Detail';

describe('Detail test', () => {
  it('renders a container element', () => {
    const dom = shallow(<Detail />);

    expect(dom.find('.detail-container')).toHaveLength(1);
  });

  // it('should...', () => {})
  // it('should...', () => {})
  // it('should...', () => {})
  // it('should...', () => {})
});
