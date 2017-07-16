import React from 'react';
import fetchMock from 'fetch-mock';
import { shallow, mount } from 'enzyme';
import CreateAccount from './CreateAccount';
// import configureMockStore from 'redux-mock-store';
// import { Provider } from 'react-redux';

function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}


describe('CreateAccount test', () => {
  // const mockStore = configureMockStore();
  // const wrapper = mount(<Provider store={mockStore}><LoginContainer history={'http://localhost:3000/'}/></Provider>);
  //
  // const data = { data: {
  //   email: 'tman2272@aol.com',
  //   id: 1,
  //   name: 'taylor',
  //   password: 'password',
  // } };
  //
  // beforeEach(() => {
  //   fetchMock.post('http://localhost:3000/api/users', {
  //     body: data,
  //   });
  // });

  it('should render a container element', () => {
    const dom = shallow(<CreateAccount />);

    expect(dom.find('.create-account-container')).toHaveLength(1);
  });

  it('should render 3 input fields', () => {
    const dom = shallow(<CreateAccount />);
    const inputs = dom.find('input');

    expect(inputs).toHaveLength(3);
  });

  it('should render 1 button', () => {
    const dom = shallow(<CreateAccount />);
    const inputs = dom.find('button');

    expect(inputs).toHaveLength(1);
  });

  it('should start with state that is entirely empty strings', () => {
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

  it('should have a prop that dispatches an action to create an account', () => {
    // const dom = wrapper.find('CreateAccount');
    // const button = wrapper.find('button');
    //
    // button.simulate('click');
    //
    // await resolveAfter2Seconds();
    //
    // const actions = mockStore.getActions();
    // expect(actions.length).toEqual(2);
    // expect(actions[0].type).toEqual('USER_AUTHENTICATED');
    // expect(actions[1].type).toEqual('USER_AUTHENTICATION_SUCCESS');
  });

  it.skip('submit button should not be clickable if input fields are empty', () => {
    const dom = shallow(<CreateAccount />);
  });

  it.skip('should fire a function when the inputs are filled and the button is clicked', () => {

  });

  it.skip('should render an error if the login credentials are incorrect', () => {

  });
});
