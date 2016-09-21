import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { assert } from 'chai';
import { pick, map, extend, filter, _ } from 'lodash';

import Application from '../lib/components/Application';
require('lodash');


describe('Application', () => {

  it('renders as a <div>', () => {
    const wrapper = shallow(<Application />)
    assert.equal(wrapper.type(), 'div');
  });

});
