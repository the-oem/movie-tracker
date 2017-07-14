import React from 'react';
import fetchMock from 'fetch-mock';
import { shallow, mount } from 'enzyme';
import CreateAccount from './CreateAccount';
// import configureMockStore from 'redux-mock-store';
// import { Provider } from 'react-redux';


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


  it.only('should start with state that\'s entirely empty strings', () => {
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


// from George's login tests
  it.skip('should render 2 input fields', () => {

  });
  it.skip('should have state with 3 empty strings to start off', () => {

  });
  it.skip('should have a prop that dispatches an action to log a user in', () => {

  });
  it.skip('submit button should not be clickable if input fields are empty', () => {

  });
  it.skip('should fire a function when the inputs are filled and the button is clicked', () => {

  });
  it.skip('state should update on change of the input fields', () => {

  });
  it.skip('should render an error if the login credentials are incorrect', () => {

  });
  it.skip('state should update if authentication is successful', () => {

  });
});
