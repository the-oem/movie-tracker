import React from 'react';
import fetchMock from 'fetch-mock';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import CreateAccount from './CreateAccount';

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


describe('CREATE ACCOUNT COMPONENT TEST', () => {
  const middlewares = [thunk];
  const wrapper = mount(<CreateAccount />);
  const initialState = {
    name: '',
    email: '',
    password: '',
    message: '',
    status: '',
  };
  const data = { data: {
    email: 'jman1234@aol.com',
    name: 'jhun',
    password: 'password1',
  } };

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

  it('should fire a function when the inputs are filled and the button is clicked', () => {
    fetchMock.post('/api/users', {
      body: JSON.stringify(data),
    });
    fetchMock.post('/api/users/new', {
      body: JSON.stringify(data),
    }).catch();

    const mockFn = jest.fn();
    const dom = shallow(<CreateAccount handleClick={mockFn()}/>);
    const nameInput = dom.find('.name-input');
    const emailInput = dom.find('.email-input');
    const passwordInput = dom.find('.password-input');
    const button = dom.find('button');

    nameInput.simulate('change', { target: { value: 'Bobbie Joe' } });
    emailInput.simulate('change', { target: { value: 'Bobbie.Joe@yahoo.com' } });
    passwordInput.simulate('change', { target: { value: 'heyyyyBobbie1234' } });
    button.simulate('click', { preventDefault: () => {} });

    expect(mockFn).toHaveBeenCalled();

    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore();
  });

  it('should render an error if the email is already associated with an account', () => {
    const dom = shallow(<CreateAccount />);

    expect(dom.state().message).toEqual('');

    dom.setState({ message: 'Internal Server Error' });

    const errorMsg = dom.find('.error-msg');
    expect(dom.state().message).toEqual('Internal Server Error');
    expect(errorMsg.text()).toEqual('Email has already been used');
  });
});
