import React from 'react';
import { shallow, mount } from 'enzyme';
import Favorites from './Favorites';

describe('Favorites component tests', () => {
  it('should render a favorites container', () => {
    const wrapper = shallow(<Favorites />);
    expect(wrapper.find('.favorites-container')).toHaveLength(1);
  });

  it.skip('should render individual favorites cards', () => {

  });
});