import React from 'react';
import fetchMock from 'fetch-mock';
import { shallow, mount } from 'enzyme';
import Login from './Login';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import LoginContainer from '../../containers/Login/LoginContainer';


const thunk = ({ dispatch, getState }) => next => (action) => {
  if (typeof action === 'function') {
    return action(dispatch, getState);
  }

  return next(action);
};

function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}


const create = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn(),
  };
  const next = jest.fn();

  const invoke = action => thunk(store)(next)(action);

  return { store, next, invoke };
};


describe('LOGIN COMPONENT TEST', () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares)();
  // let store;
  // let action;


  const wrapper = mount(<Provider store={mockStore}><LoginContainer history={'http://localhost:3000/'}/></Provider>);

  const initialState = {
    email: '',
    password: '',
    authStatus: '',
  };

  const data = { data: {
    email: 'tman2272@aol.com',
    id: 1,
    name: 'taylor',
    password: 'password',
  } };

  beforeEach(() => {
    fetchMock.post('/api/users', {
      body: JSON.stringify(data),
    });
  });


  it('renders a container element', () => {
    const dom = shallow(<LoginContainer store={mockStore} />);
    const login = dom.find('<Login/>');

    expect(login).toBeTruthy();
  });

  it('should render 2 input fields', () => {
    const dom = shallow(<Login />);
    expect(dom.find('input').length).toEqual(2);
  });

  it.skip('should have state with 3 empty strings to start off', () => {
    const mockedProps = jest.fn();
    const wrapper2 = mount(<Login loginInUserSuccess={mockedProps} />);

    expect(Object.keys(wrapper2.state()).length).toEqual(3);
    expect(wrapper2.state().email).toEqual('');
    expect(wrapper2.state().password).toEqual('');
    expect(wrapper2.state().authStatus).toEqual('');
  });

  it.skip('Should have props being passed down from container, which are a method and history', () => {
    const login = wrapper.find('Login');
    expect(Object.keys(login.props()).length).toEqual(2);
    expect(Object.keys(login.props())[0]).toEqual('history');
    expect(Object.keys(login.props())[1]).toEqual('handleAuthentication');
  });

  it('should have a prop that dispatches an action to log a user in', async () => {
    const login = wrapper.find('Login');

    const button = wrapper.find('button');
    button.simulate('click');

    await resolveAfter2Seconds();

    const actions = mockStore.getActions();
    expect(actions.length).toEqual(2);
    expect(actions[0].type).toEqual('USER_AUTHENTICATED');
    expect(actions[1].type).toEqual('USER_AUTHENTICATION_SUCCESS');
  });
  it('should should pass data through the action', async () => {
    const login = wrapper.find('Login');

    const button = wrapper.find('button');
    button.simulate('click');

    await resolveAfter2Seconds();

    const actions = mockStore.getActions();

    expect(actions[1].user).toEqual(data);
  });


  it.skip('submit button should not be clickable if input fields are empty', () => {

  });

  it('state should update on change of the input fields', () => {
    const mockedProps = jest.fn();
    const wrapper2 = mount(<Login loginInUserSuccess={mockedProps} />);

    const emailInput = wrapper2.find('.email-input');
    emailInput.simulate('change', { target: { value: 'testingALL' } });

    const passwordInput = wrapper2.find('.password-input');
    passwordInput.simulate('change', { target: { value: 'theTHINGS' } });

    expect(wrapper2.state().email).toEqual('testingALL');
    expect(wrapper2.state().password).toEqual('theTHINGS');
  });
  it.skip('should render an error if the login credentials are incorrect', () => {
    //Don't know how to do this one yet
  });


  it('passes through non-function action', () => {
    const { next, invoke } = create();
    const action = { type: 'TEST' };
    invoke(action);
    expect(next).toHaveBeenCalledWith(action);
  });

  it('calls the function', () => {
    const { invoke } = create();
    const fn = jest.fn();
    invoke(fn);
    expect(fn).toHaveBeenCalled();
  });

  it('passes dispatch and getState', () => {
    const { store, invoke } = create();
    invoke((dispatch, getState) => {
      dispatch('TEST DISPATCH');
      getState();
    });
    expect(store.dispatch).toHaveBeenCalledWith('TEST DISPATCH');
    expect(store.getState).toHaveBeenCalled();
  });
});
