import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { assert } from 'chai';

import Application from '../lib/components/Application';
import UsersList from '../lib/components/UsersList';

describe('Users List', () => {

  it('renders as a <div>', () => {
    const wrapper = shallow(<UsersList />)
    assert.equal(wrapper.type(), 'div');
  });
  

});