import React from 'react';
import fetchMock from 'fetch-mock';
import { shallow } from 'enzyme';
import CreateAccount from './CreateAccount';

describe('CreateAccount test', () => {
  it('renders a container element', () => {
    const dom = shallow(<CreateAccount />);

    expect(dom.find('.create-account-container')).toHaveLength(1);
  });

  // it('should...', () => {})
  // it('should...', () => {})
  // it('should...', () => {})
  // it('should...', () => {})
});
