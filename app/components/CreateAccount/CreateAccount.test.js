import React from 'react';
import fetchMock from 'fetch-mock';
import { shallow } from 'enzyme';
import CreateAccount from './CreateAccount';

describe('CreateAccount test', () => {
  it('should start with state that entirely empty strings', () => {
    const dom = shallow(<CreateAccount />);

    expect(dom.state().name).toEqual('');
    expect(dom.state().email).toEqual('');
    expect(dom.state().password).toEqual('');
    expect(dom.state().message).toEqual('');
    expect(dom.state().status).toEqual('');
  });

  it('should change state when the input fields change', () => {
    const dom = shallow(<CreateAccount />);
    const nameInput = dom.find('.name-input');
    const emailInput = dom.find('.email-input');
    const passwordInput = dom.find('.password-input');
    const expectedState = {
      name: 'Bobbie Joe',
      email: 'Bobbie.Joe@yahoo.com',
      password: 'heyyyyBobbie1234',
      message: '',
      status: '',
    };

    nameInput.simulate('change', { target: { value: 'Bobbie Joe' } });
    emailInput.simulate('change', { target: { value: 'Bobbie.Joe@yahoo.com' } });
    passwordInput.simulate('change', { target: { value: 'heyyyyBobbie1234' } });

    expect(dom.state()).toEqual(expectedState);
  });

  it('renders a container element', () => {
    const dom = shallow(<CreateAccount />);

    expect(dom.find('.create-account-container')).toHaveLength(1);
  });

  // it('should...', () => {})
  // it('should...', () => {})
  // it('should...', () => {})
  // it('should...', () => {})
});
