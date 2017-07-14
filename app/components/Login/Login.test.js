import React from 'react';
import fetchMock from 'fetch-mock';
import { shallow, mount } from 'enzyme';
import Login from './Login';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import LoginContainer from '../../containers/Login/LoginContainer';

describe('LOGIN COMPONENT TEST', () => {
  const mockStore = configureMockStore();

  const wrapper = mount(<Provider store={mockStore}><LoginContainer history={'http://localhost:3000/'}/></Provider>);

  const data = { data: {
    email: 'tman2272@aol.com',
    id: 1,
    name: 'taylor',
    password: 'password',
  } };

  beforeEach(() => {
    fetchMock.post('http://localhost:3000/api/users', {
      body: data,
    });
  });


  it.skip('renders a container element', () => {
    const dom = shallow(<Login />);

    expect(dom.find('.login')).toHaveLength(1);
  });

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
