import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { assert } from 'chai';
import { pick, map, extend, filter, _ } from 'lodash';

import Application from '../lib/components/Application';
require('lodash');


describe('Application', () => {
  const wrapper = shallow(<Application />)
  
  it('renders as a <div>', () => {  
    assert.equal(wrapper.type(), 'div');
  });

});
